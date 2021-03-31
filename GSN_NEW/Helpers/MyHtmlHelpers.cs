using System.Globalization;
using System.Text;
using System.Web.Mvc;
using System.Web.Routing;

namespace GSN_NEW.Helpers
{
    public static class MyHtmlHelpers
    {
        /// <summary>
        /// </summary>
        /// <param name="htmlHelper"></param>
        /// <param name="controllerName">Controller name</param>
        /// <param name="iconClass">icon css class</param>
        /// <param name="itemTitle">Menu item title</param>
        /// <returns>Returns Li menu html tag</returns>
        public static MvcHtmlString NavigationItem          //1
            (
            this HtmlHelper htmlHelper,
            string controllerName,
            string iconClass,
            string itemTitle
            )
        {
            var controller = htmlHelper.ViewContext.RouteData.Values["controller"].ToString();
            var requestContext = htmlHelper.ViewContext.RequestContext;
            var action =htmlHelper.ViewContext.RouteData.Values["action"].ToString();
            var sb = new StringBuilder();
            sb.Append("<li {0}>"); // class active
            sb.Append("<a href=\"{1}\">"); // href
            sb.Append("<i class=\"{2}\"></i>"); // icon
            sb.Append(itemTitle);
            sb.Append("</a>");
            sb.Append("<b class=\"arrow\"></b>");
            sb.Append("</li>");

            var html = string.Format(
                sb.ToString(),
                GetIsActive(controllerName, controller ,action),
                GetHref(requestContext, controllerName),
                iconClass
                );

            return MvcHtmlString.Create(html);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="htmlHelper"></param>
        /// <param name="controllerName">Controller name</param>
        /// <param name="iconClass">icon css class</param>
        /// <param name="itemTitle">Menu item title</param>
        /// <param name="counts">Counts</param>
        /// <returns>Returns Li menu html tag</returns>
        public static MvcHtmlString NavigationItem   //2
            (
            this HtmlHelper htmlHelper,
            string controllerName,
            string iconClass,
            string itemTitle,
            decimal[] counts
            )
        {
            var controller = htmlHelper.ViewContext.RouteData.Values["controller"].ToString();
            var action = htmlHelper.ViewContext.RouteData.Values["action"].ToString();
            var requestContext = htmlHelper.ViewContext.RequestContext;

            var sb = new StringBuilder();
            sb.Append("<li {0}>"); // class active
            sb.Append("<a href=\"{1}\">"); // href
            sb.Append("<i class=\"{2}\"></i>"); // icon
            sb.Append("<span class=\"menu-text\">");
            sb.Append(itemTitle);

            if (counts != null)
            {
                sb.Append("<span id=\"mc_{3}\" class=\"badge badge-primary\">"); // id
                sb.Append(counts.Length == 2 ? "{4} / <b>{5}</b>" : "{4}");
                sb.Append("</span>");
            }

            sb.Append("</span>");
            sb.Append("</a>");
            sb.Append("<b class=\"arrow\"></b>");
            sb.Append("</li>");

            var html = counts == null
                ? string.Format(
                    sb.ToString(),
                    GetIsActive(controllerName, controller,action),
                    GetHref(requestContext, controllerName),
                    iconClass,
                    controllerName
                    )
                : counts.Length == 2
                    ? string.Format(
                        sb.ToString(),
                        GetIsActive(controllerName, controller,action),
                        GetHref(requestContext, controllerName),
                        iconClass,
                        controllerName,
                        counts[0],
                        counts[1]
                        )
                    : string.Format(
                        sb.ToString(),
                        GetIsActive(controllerName, controller,action),
                        GetHref(requestContext, controllerName),
                        iconClass,
                        controllerName,
                        counts[0]
                        );

            return MvcHtmlString.Create(html);
        }

        /// <summary>
        /// </summary>
        /// <param name="htmlHelper"></param>
        /// <param name="controllerName">Controller name</param>
        /// <param name="iconClass">icon css class</param>
        /// <param name="itemTitle">Menu item title</param>
        /// <returns>Returns Li menu html tag</returns>
        public static MvcHtmlString NavigationItemAction
            (
            this HtmlHelper htmlHelper,
            string controllerName,
            string actionName,
            string iconClass,
            string itemTitle
            )
        {
            var controller = htmlHelper.ViewContext.RouteData.Values["controller"].ToString();
            var action = htmlHelper.ViewContext.RouteData.Values["action"].ToString();
            var requestContext = htmlHelper.ViewContext.RequestContext;

            var sb = new StringBuilder();
            sb.Append("<li {0}>"); // class active
            sb.Append("<a href=\"{1}\">"); // href
            sb.Append("<i class=\"{2}\"></i>"); // icon
            sb.Append(itemTitle);
            sb.Append("</a>");
            sb.Append("<b class=\"arrow\"></b>");
            sb.Append("</li>");

            var html = string.Format(
                sb.ToString(),
                GetIsActiveAction(controllerName, controller,actionName,action),
                GetHref(requestContext, controllerName, actionName),
                iconClass
                );

            return MvcHtmlString.Create(html);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="htmlHelper"></param>
        /// <param name="controllerName">Controller name</param>
        /// <param name="iconClass">icon css class</param>
        /// <param name="itemTitle">Menu item title</param>
        /// <param name="counts">Counts</param>
        /// <returns>Returns Li menu html tag</returns>
        public static MvcHtmlString NavigationItemAction
            (
            this HtmlHelper htmlHelper,
            string controllerName,
            string actionName,
            string iconClass,
            string itemTitle,
            decimal[] counts
            )
        {
            var controller = htmlHelper.ViewContext.RouteData.Values["controller"].ToString();
            var action = htmlHelper.ViewContext.RouteData.Values["action"].ToString();
            var requestContext = htmlHelper.ViewContext.RequestContext;

            var sb = new StringBuilder();
            sb.Append("<li {0}>"); // class active
            sb.Append("<a href=\"{1}\">"); // href
            sb.Append("<i class=\"{2}\"></i>"); // icon
            sb.Append("<span class=\"menu-text\">");
            sb.Append(itemTitle);

            if (counts != null)
            {
                sb.Append("<span id=\"mc_{3}\" class=\"badge badge-primary\">"); // id
                sb.Append(counts.Length == 2 ? "{4} / <b>{5}</b>" : "{4}");
                sb.Append("</span>");
            }

            sb.Append("</span>");
            sb.Append("</a>");
            sb.Append("<b class=\"arrow\"></b>");
            sb.Append("</li>");

            var html = counts == null
                ? string.Format(
                    sb.ToString(),
                    GetIsActive(controllerName, controller,action),
                    GetHref(requestContext, controllerName, actionName),
                    iconClass,
                    controllerName
                    )
                : counts.Length == 2
                    ? string.Format(
                        sb.ToString(),
                        GetIsActive(controllerName, controller,action),
                        GetHref(requestContext, controllerName, actionName),
                        iconClass,
                        controllerName,
                        counts[0],
                        counts[1]
                        )
                    : string.Format(
                        sb.ToString(),
                        GetIsActive(controllerName, controller,action),
                        GetHref(requestContext, controllerName, actionName),
                        iconClass,
                        controllerName,
                        counts[0]
                        );

            return MvcHtmlString.Create(html);
        }

        private static string GetHref(RequestContext requestContext, string controller)
        {
            return new UrlHelper(requestContext).Action(string.Empty, controller);
        }

        private static string GetHref(RequestContext requestContext, string controller, string action)
        {
            return new UrlHelper(requestContext).Action(action, controller);
        }

        private static string GetIsActive(string controllerName, string controller ,string action )
        {
           
            return string.Compare(controllerName, controller, true, CultureInfo.InvariantCulture) == 0 && action=="Index"
                ? "class=\"active\""
                : string.Empty;
        }
        private static string GetIsActiveAction(string controllerName, string controller, string methodName, string method)
        {
            
                return string.Compare(controllerName, controller, true, CultureInfo.InvariantCulture) == 0 && string.Compare(methodName, method, true, CultureInfo.InvariantCulture) == 0
            ? "class=\"active\""
            : string.Empty;
          
          
        
        }
    }
}