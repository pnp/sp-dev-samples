using SharePoint.WebHooks.Common.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SharePoint.WebHooks.MVCWeb.Models
{

    public class SharePointList
    {
        public string Title { get; set; }
        public Guid Id { get; set; }
    }

    public class SharePointSiteModel
    {
        public Guid SelectedSharePointList { get; set; }
        public IEnumerable<SharePointList> Lists { get; set; }
        public IEnumerable<SubscriptionModel> WebHooks { get; set; }
    }
}