using System.Web.Mvc;
using System.Web.Routing;

namespace GSN_NEW.Helpers.Filters
{
    //public class IsLimitedFilter : ActionFilterAttribute
    //{
    //    public override void OnActionExecuting(ActionExecutingContext filterContext)
    //    {
    //        var controller = filterContext.RouteData.Values["controller"].ToString();
    //        var actionMethod = filterContext.RouteData.Values["action"].ToString();

    //        if (controller != "Login")
    //        {
    //            if (filterContext.HttpContext.User.Identity.Name.Islimited())
    //                filterContext.Result =
    //                    new RedirectToRouteResult(new RouteValueDictionary(new { controller = "Login", action = "LogOut" }));
    //        }

    //        base.OnActionExecuting(filterContext);
    //    }
    //}
}