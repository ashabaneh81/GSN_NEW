using System.Web.Mvc;
using GSN_NEW.Controllers;

namespace GSN_NEW.Helpers
{
    public class OnErrorHandler : HandleErrorAttribute
    {
        public override void OnException(ExceptionContext context)
        {
            if (context.HttpContext.Request.IsAjaxRequest())
            {
                // if request was an Ajax request, respond with json with Error field
                var jsonResult = new ErrorController { ControllerContext = context }.GetJsonError(context.Exception);
                jsonResult.ExecuteResult(context);
                context.ExceptionHandled = true;
            }
            else
            {
                // if not an ajax request, continue with logic implemented by MVC -> html error page
                base.OnException(context);
            }
        }
    }
}