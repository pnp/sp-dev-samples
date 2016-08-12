using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Azure.WebJobs;
using SharePoint.WebHooks.Common;
using SharePoint.WebHooks.Common.Models;

namespace SharePoint.WebHooks.Job
{
    // To learn more about Microsoft Azure WebJobs SDK, please see http://go.microsoft.com/fwlink/?LinkID=320976
    class Program
    {
        // Please set the following connection strings in app.config for this WebJob to run:
        // AzureWebJobsDashboard and AzureWebJobsStorage       
        static void Main()
        {
            //// Debug code when the web job is running in "debug"
            //ChangeManager changeManager = new ChangeManager();
            //NotificationModel notification = new NotificationModel()
            //{
            //    ExpirationDateTime = DateTime.Now.AddDays(3),
            //    Resource = "530af43d-be5d-450a-ae8d-18a9794769a1",
            //    SubscriptionId = "B3EA7455-1CEF-41B1-878A-ACD9EBDA4EBE",
            //    TenantId = "6f97a99c-6554-4ec7-88cd-b1d5db2cb323",
            //    SiteUrl = "/sites/dev",
            //    WebId = "2fbf840c-330d-44f0-9881-3d90b63a6ec7"
            //};

            //changeManager.ProcessNotification(notification);
            ////changeManager.AddNotificationToQueue("DefaultEndpointsProtocol=https;AccountName=bjansenbulkedit;AccountKey=JdElU53bBsFYhfDJrSJnWnLaaJfkbpIPHNUF9YC/YYMiy0QtVmMV4jl4pIs7LDtEhPREwahLO4SvjwdVhKwe3g==", notification);

            // Only have one batch job at the same time running to avoid catching the same change twice.
            // With the default web job configuration up to 16 messages are taken from the queue at the 
            // same time and processed in parallel...given we fetch changes based on the last change token
            // this results in the same changes being processed multiple times
            // Update: this step is not needed anymore since we batch web hook events inside SPO, meaning we're
            // not firing duplicate events anymore
            JobHostConfiguration config = new JobHostConfiguration();
            config.Queues.BatchSize = 1;
            config.Queues.MaxDequeueCount = 1;
            var host = new JobHost(config);
            // The following code ensures that the WebJob will be running continuously
            host.RunAndBlock();
        }
    }
}
