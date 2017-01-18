using System.Web.Mvc;

namespace SharePoint.WebHooks.MVC
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
            // Enforce https as http based access causes an infinite OWIN redirect loop
            filters.Add(new RequireHttpsAttribute());
        }
    }
}
