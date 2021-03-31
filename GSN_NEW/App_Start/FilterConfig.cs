using System.Web;
using System.Web.Mvc;
using GSN_NEW.Helpers;
namespace GSN_NEW
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new OnErrorHandler());
            filters.Add(new AuthorizeAttribute());
        }
    }
}
