using Microsoft.SharePoint.Client;
using Microsoft.WindowsAzure;
using SharePoint.WebHooks.Common;
using SharePoint.WebHooks.Common.Models;
using SharePoint.WebHooks.Common.SQL;
using SharePoint.WebHooks.MVC.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Mvc;

namespace SharePoint.WebHooks.MVC.Controllers
{
    /// <summary>
    /// Controller for the MVC application. Requires to be authenticated before using
    /// </summary>
    [Authorize]
    public class HomeController : Controller
    {
        private string accessToken = null;

        /// <summary>
        /// Controller servicing data for the add-in's home page
        /// </summary>
        /// <returns></returns>
        public async Task<ActionResult> Index()
        {
            using (var cc = ContextProvider.GetWebApplicationClientContext(Settings.SiteCollection))
            {
                if (cc != null)
                {
                    // Usage tracking
                    SampleUsageTracking(cc);

                    // Hookup event to capture access token
                    cc.ExecutingWebRequest += Cc_ExecutingWebRequest;

                    var lists = cc.Web.Lists;
                    cc.Load(cc.Web, w => w.Url);
                    cc.Load(lists, l => l.Include(p => p.Title, p => p.Id, p => p.Hidden));
                    cc.ExecuteQueryRetry();

                    WebHookManager webHookManager = new WebHookManager();

                    // Grab the current lists
                    List<SharePointList> modelLists = new List<SharePointList>();
                    List<SubscriptionModel> webHooks = new List<SubscriptionModel>();

                    foreach (var list in lists)
                    {
                        // Let's only take the hidden lists
                        if (!list.Hidden)
                        {
                            modelLists.Add(new SharePointList() { Title = list.Title, Id = list.Id });

                            // Grab the currently applied web hooks
                            var existingWebHooks = await webHookManager.GetListWebHooksAsync(cc.Web.Url, list.Id.ToString(), this.accessToken);

                            if (existingWebHooks.Value.Count > 0)
                            {
                                foreach (var existingWebHook in existingWebHooks.Value)
                                {
                                    webHooks.Add(existingWebHook);
                                }
                            }
                        }
                    }

                    // Prepare the data model
                    SharePointSiteModel sharePointSiteModel = new SharePointSiteModel();
                    sharePointSiteModel.SharePointSite = Settings.SiteCollection;
                    sharePointSiteModel.Lists = modelLists;
                    sharePointSiteModel.WebHooks = webHooks;
                    sharePointSiteModel.SelectedSharePointList = modelLists[0].Id;

                    return View(sharePointSiteModel);
                }
                else
                {
                    throw new Exception("Issue with obtaining a valid client context object, should not happen");
                }
            }
        }

        /// <summary>
        /// Create a web hook 
        /// </summary>
        /// <param name="selectedSharePointList">List ID (guid) of the list to create the web hook for</param>
        /// <returns></returns>
        [HttpPost]
        public async Task<ActionResult> Create(string selectedSharePointList)
        {
            using (var cc = ContextProvider.GetWebApplicationClientContext(Settings.SiteCollection))
            {
                if (cc != null)
                {
                    // Hookup event to capture access token
                    cc.ExecutingWebRequest += Cc_ExecutingWebRequest;

                    ListCollection lists = cc.Web.Lists;
                    Guid listId = new Guid(selectedSharePointList);
                    IEnumerable<List> sharePointLists = cc.LoadQuery<List>(lists.Where(lst => lst.Id == listId));
                    cc.Load(cc.Web, w => w.Url);
                    cc.ExecuteQueryRetry();

                    WebHookManager webHookManager = new WebHookManager();
                    var res = await webHookManager.AddListWebHookAsync(cc.Web.Url, listId.ToString(), CloudConfigurationManager.GetSetting("WebHookEndPoint"), this.accessToken);

                    // persist the latest changetoken of the list when we create a new webhook. This allows use to only grab the changes as of web hook creation when the first notification comes in
                    using (SharePointWebHooks dbContext = new SharePointWebHooks())
                    {
                        dbContext.ListWebHooks.Add(new ListWebHooks()
                        {
                            Id = new Guid(res.Id),
                            ListId = listId,
                            LastChangeToken = sharePointLists.FirstOrDefault().CurrentChangeToken.StringValue,
                        });
                        var saveResult = await dbContext.SaveChangesAsync();
                    }
                }
            }

            return RedirectToAction("Index", "Home");
        }

        /// <summary>
        /// Deletes a existing web hook
        /// </summary>
        /// <param name="id">Subscription id of the web hook</param>
        /// <param name="listId">List id of the list holding the web hook</param>
        /// <returns></returns>
        [HttpGet]
        public async Task<ActionResult> Delete(string id = null, string listId = null)
        {
            using (var cc = ContextProvider.GetWebApplicationClientContext(Settings.SiteCollection))
            {
                if (cc != null)
                {
                    // Hookup event to capture access token
                    cc.ExecutingWebRequest += Cc_ExecutingWebRequest;
                    // Just load the Url property to trigger the ExecutingWebRequest event handler to fire
                    cc.Load(cc.Web, w => w.Url);
                    cc.ExecuteQueryRetry();

                    WebHookManager webHookManager = new WebHookManager();
                    // delete the web hook
                    if (await webHookManager.DeleteListWebHookAsync(cc.Web.Url, listId, id, this.accessToken))
                    {
                        using (SharePointWebHooks dbContext = new SharePointWebHooks())
                        {
                            var webHookRow = await dbContext.ListWebHooks.FindAsync(new Guid(id));
                            if (webHookRow != null)
                            {
                                dbContext.ListWebHooks.Remove(webHookRow);
                                var saveResult = await dbContext.SaveChangesAsync();
                            }
                        }
                    }
                }
            }

            return RedirectToAction("Index", "Home");
        }

        private void Cc_ExecutingWebRequest(object sender, WebRequestEventArgs e)
        {
            // grab the OAuth access token as we need this token in our REST calls
            this.accessToken = e.WebRequestExecutor.RequestHeaders.Get("Authorization").Replace("Bearer ", "");
        }

        /// <summary>
        /// We would love to understand which samples are populair to prioritize work
        /// </summary>
        /// <param name="cc">ClientContext object</param>
        private void SampleUsageTracking(ClientContext cc)
        {
            cc.ClientTag = "SPDev:WebHooks";
            cc.Load(cc.Web, p => p.Description);
            cc.ExecuteQuery();
        }

    }
}
