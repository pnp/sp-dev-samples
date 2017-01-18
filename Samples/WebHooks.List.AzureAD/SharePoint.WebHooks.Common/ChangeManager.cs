using Microsoft.SharePoint.Client;
using Microsoft.WindowsAzure;
using Microsoft.WindowsAzure.Storage;
using Microsoft.WindowsAzure.Storage.Queue;
using Newtonsoft.Json;
using SharePoint.WebHooks.Common.Models;
using SharePoint.WebHooks.Common.SQL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SharePoint.WebHooks.Common
{
    /// <summary>
    /// Helper class that deals with asynchronous and synchronous SharePoint list web hook events processing
    /// </summary>
    public class ChangeManager
    {
        #region Constants and variables
        public const string StorageQueueName = "sharepointlistwebhookeventazuread";
        private string accessToken = null;
        #endregion

        #region Async processing...add item to queue
        /// <summary>
        /// Add the notification message to an Azure storage queue
        /// </summary>
        /// <param name="storageConnectionString">Storage account connection string</param>
        /// <param name="notification">Notification message to add</param>
        public void AddNotificationToQueue(string storageConnectionString, NotificationModel notification)
        {
            CloudStorageAccount storageAccount =CloudStorageAccount.Parse(storageConnectionString);

            // Get queue... create if does not exist.
            CloudQueueClient queueClient = storageAccount.CreateCloudQueueClient();
            CloudQueue queue = queueClient.GetQueueReference(ChangeManager.StorageQueueName);
            queue.CreateIfNotExists();

            // add message to the queue
            queue.AddMessage(new CloudQueueMessage(JsonConvert.SerializeObject(notification)));
        }
        #endregion

        #region Synchronous processing of a web hook notification
        /// <summary>
        /// Processes a received notification. This typically is triggered via an Azure Web Job that reads the Azure storage queue
        /// </summary>
        /// <param name="notification">Notification to process</param>
        public void ProcessNotification(NotificationModel notification)
        {
            ClientContext cc = null;
            try
            {
                #region Setup an app-only client context using Azure AD certificate based authentication
                string url = String.Format("https://{0}{1}", CloudConfigurationManager.GetSetting("TenantName"), notification.SiteUrl);
                cc = ContextProvider.GetAppOnlyClientContext(url);
                #endregion

                #region Grab the list for which the web hook was triggered
                ListCollection lists = cc.Web.Lists;
                Guid listId = new Guid(notification.Resource);
                IEnumerable<List> results = cc.LoadQuery<List>(lists.Where(lst => lst.Id == listId));
                cc.ExecuteQueryRetry();
                List changeList = results.FirstOrDefault();
                if (changeList == null)
                {
                    // list has been deleted inbetween the event being fired and the event being processed
                    return;
                }
                #endregion

                #region Grab the list used to write the web hook history
                // Ensure reference to the history list, create when not available
                List historyList = cc.Web.GetListByTitle("WebHookHistory");
                if (historyList == null)
                {
                    historyList = cc.Web.CreateList(ListTemplateType.GenericList, "WebHookHistory", false);
                }
                #endregion

                #region Grab the list changes and do something with them
                // grab the changes to the provided list using the GetChanges method 
                // on the list. Only request Item changes as that's what's supported via
                // the list web hooks
                ChangeQuery changeQuery = new ChangeQuery(false, true);
                changeQuery.Item = true;
                changeQuery.FetchLimit = 1000; // Max value is 2000, default = 1000

                // grab last change token from database if possible
                using (SharePointWebHooks dbContext = new SharePointWebHooks())
                {
                    ChangeToken lastChangeToken = null;
                    Guid id = new Guid(notification.SubscriptionId);

                    var listWebHookRow = dbContext.ListWebHooks.Find(id);
                    if (listWebHookRow != null)
                    {
                        lastChangeToken = new ChangeToken();
                        lastChangeToken.StringValue = listWebHookRow.LastChangeToken;
                    }

                    // Start pulling down the changes
                    bool allChangesRead = false;
                    do
                    {
                        // should not occur anymore now that we record the starting change token at 
                        // subscription creation time, but it's a safety net
                        if (lastChangeToken == null)
                        {
                            lastChangeToken = new ChangeToken();
                            // See https://blogs.technet.microsoft.com/stefan_gossner/2009/12/04/content-deployment-the-complete-guide-part-7-change-token-basics/
                            lastChangeToken.StringValue = string.Format("1;3;{0};{1};-1", notification.Resource, DateTime.Now.AddMinutes(-5).ToUniversalTime().Ticks.ToString());
                        }

                        // Assign the change token to the query...this determines from what point in
                        // time we'll receive changes
                        changeQuery.ChangeTokenStart = lastChangeToken;

                        // Execute the change query
                        var changes = changeList.GetChanges(changeQuery);
                        cc.Load(changes);
                        cc.ExecuteQueryRetry();

                        if (changes.Count > 0)
                        {
                            foreach (Change change in changes)
                            {
                                lastChangeToken = change.ChangeToken;

                                if (change is ChangeItem)
                                {
                                    // do "work" with the found change
                                    DoWork(cc, changeList, historyList, change);
                                }
                            }

                            // We potentially can have a lot of changes so be prepared to repeat the 
                            // change query in batches of 'FetchLimit' untill we've received all changes
                            if (changes.Count < changeQuery.FetchLimit)
                            {
                                allChangesRead = true;
                            }
                        }
                        else
                        {
                            allChangesRead = true;
                        }
                        // Are we done?
                    } while (allChangesRead == false);

                    // Persist the last used changetoken as we'll start from that one
                    // when the next event hits our service
                    if (listWebHookRow != null)
                    {
                        // Only persist when there's a change in the change token
                        if (!listWebHookRow.LastChangeToken.Equals(lastChangeToken.StringValue, StringComparison.InvariantCultureIgnoreCase))
                        {
                            listWebHookRow.LastChangeToken = lastChangeToken.StringValue;
                            dbContext.SaveChanges();
                        }
                    }
                    else
                    {
                        // should not occur anymore now that we record the starting change token at 
                        // subscription creation time, but it's a safety net
                        dbContext.ListWebHooks.Add(new ListWebHooks()
                        {
                            Id = id,
                            ListId = listId,
                            LastChangeToken = lastChangeToken.StringValue,
                        });
                        dbContext.SaveChanges();
                    }
                }
                #endregion

                #region "Update" the web hook expiration date when needed
                // Optionally add logic to "update" the expirationdatetime of the web hook
                // If the web hook is about to expire within the coming 5 days then prolong it
                if (notification.ExpirationDateTime.AddDays(-5) < DateTime.Now)
                {
                    WebHookManager webHookManager = new WebHookManager();
                    Task<bool> updateResult = Task.WhenAny(
                        webHookManager.UpdateListWebHookAsync(
                            url,
                            listId.ToString(),
                            notification.SubscriptionId,
                            CloudConfigurationManager.GetSetting("WebHookEndPoint"),
                            DateTime.Now.AddMonths(3),
                            this.accessToken)
                        ).Result;

                    if (updateResult.Result == false)
                    {
                        throw new Exception(String.Format("The expiration date of web hook {0} with endpoint {1} could not be updated", notification.SubscriptionId, CloudConfigurationManager.GetSetting("WebHookEndPoint")));
                    }
                }
                #endregion
            }
            catch (Exception ex)
            {
                // Log error
                Console.WriteLine(ex.ToString());
            }
            finally
            {
                if (cc != null)
                {
                    cc.Dispose();
                }
            }
        }

        /// <summary>
        /// Method doing actually something with the changes obtained via the web hook notification. 
        /// In this demo we're just logging to a list, in your implementation you do what you need to do :-)
        /// </summary>
        private static void DoWork(ClientContext cc, List changeList, List historyList, Change change)
        {
            ListItemCreationInformation newItem = new ListItemCreationInformation();
            ListItem item = historyList.AddItem(newItem);

            item["Title"] = string.Format("List {0} had a Change of type \"{1}\" on the item with Id {2}.", changeList.Title, change.ChangeType.ToString(), (change as ChangeItem).ItemId); 
            item.Update();
            cc.ExecuteQueryRetry();
        }

        private void Cc_ExecutingWebRequest(object sender, WebRequestEventArgs e)
        {
            // Capture the OAuth access token since we want to reuse that one in our REST requests
            this.accessToken = e.WebRequestExecutor.RequestHeaders.Get("Authorization").Replace("Bearer ", "");
        }
        #endregion
    }
}
