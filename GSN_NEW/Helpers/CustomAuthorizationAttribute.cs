using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using ErpDal;
using System.Web.Routing;
using GSN_NEW.Helpers;
using System.Security.Cryptography;
using System.IO;
using System.Reflection;
using System.Web.Http;

namespace GSN_NEW.Helpers
{
    public class CustomAuthorizationAttribute : ActionFilterAttribute
    {
       
        public override void OnActionExecuting(ActionExecutingContext filterContext)
        {

            //HttpContext.Current.Session["CAN_ADD"] = "Y";
            //HttpContext.Current.Session["CAN_EDIT"] = "Y";
            //HttpContext.Current.Session["CAN_DELETE"] = "Y";
            var controllerName = ((string)filterContext.RouteData.Values["controller"]).ToLower();
            string actionName = ((string)filterContext.RouteData.Values["action"]).ToLower();
            //if (controllerName!="Home".ToLower() && controllerName!="DailyWork".ToLower() && controllerName!="Login".ToLower())
            //{
            //        bool isValid = HttpContext.Current.Session["IsValid"] == null ? false : (bool)HttpContext.Current.Session["IsValid"];
            //        if (isValid == false)
            //        { 
            //            Controller controller = filterContext.Controller as Controller;
            //        filterContext.Result = new RedirectResult("~/DailyWork/Index");
            //    }
            //}
            //return;

                //var result = new JsonResult();
                //result.Data = "error authorize";
                //filterContext.Result = result;
                //return;
            using (var db = Db.Get())
            {
                //throw new HttpException(404, "لا يوجد صلاحية");

                var value = filterContext.HttpContext.Request.QueryString["FromComboBox"];

                if (value == "true")
                {
                    // var FromComboBox = filterContext.RouteData.Values["FromComboBox"];
                    return;
                }

               

                if (controllerName == "home" || controllerName == "login" || controllerName == "groups" || controllerName == "permissionmenu" || controllerName == "salarycalc" || controllerName == "dailywork" || controllerName =="myprofile")
                {
                    return;
                }

                var user = filterContext.HttpContext.User.Identity.Name.UserCode();
                var staffviews = db.STAFF_VIEWS.Where(v => v.VIEWS.CONTROLLERS_TABLE_ERP.CONTROLLER_NAME.ToLower() == controllerName && v.STAFF_CODE == user);
                var count = 0;
                if (actionName.ToLower() == "index")
                    count = staffviews.Count(c => c.VIEWS.CONTROLLERS_TABLE_ERP.METHOD_NAME.ToLower() == "index" || c.VIEWS.CONTROLLERS_TABLE_ERP.METHOD_NAME == null);
                else
                    count = staffviews.Count(c => c.VIEWS.CONTROLLERS_TABLE_ERP.METHOD_NAME.ToLower() == actionName.ToLower());


                if (count > 0)
                {
                    var obj = default(STAFF_VIEWS);
                    if (actionName.ToLower() == "index")
                        obj = staffviews.Where(c => c.VIEWS.CONTROLLERS_TABLE_ERP.METHOD_NAME.ToLower() == "index" || c.VIEWS.CONTROLLERS_TABLE_ERP.METHOD_NAME == null).FirstOrDefault();
                    else
                        obj = staffviews.Where(c => c.VIEWS.CONTROLLERS_TABLE_ERP.METHOD_NAME.ToLower() == actionName.ToLower()).FirstOrDefault();

                    HttpContext.Current.Session["CAN_ADD"] = obj.CAN_ADD;
                    HttpContext.Current.Session["CAN_EDIT"] = obj.CAN_EDIT;
                    HttpContext.Current.Session["CAN_DELETE"] = obj.CAN_DELETE;

                    return;
                }
                else
                {
                    if (filterContext.HttpContext.Request.IsAjaxRequest())
                    {
                        
                        filterContext.Result = new HttpStatusCodeResult(403);


                        filterContext.HttpContext.Response.StatusCode = 403;
                        filterContext.Result = new RedirectToRouteResult(
           new RouteValueDictionary {{ "Controller", "Login" },
                                              { "Action", "NoPermition" } });
                    }                  


                    else
                        filterContext.Result = new RedirectToRouteResult(
            new RouteValueDictionary {{ "Controller", "Login" },
                                              { "Action", "NoPermitionNoajax" } });



                }            

            }
            
        }
    }
}