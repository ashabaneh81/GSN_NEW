using System;
using System.Linq;
using System.Web.Mvc;
using ErpDal;
using Kendo.Mvc.UI;

namespace GSN_NEW.Controllers
{
    public class ErrorController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult NotFound()
        {
            return View();
        }
        public ActionResult NotPermition()
        {
            return View();
        }

        public ActionResult GetJsonError(Exception ex)
        {
            var db = Db.Get();

            string error;

            if (ex.InnerException == null)
            {
                var msg = ex.Message;

                if (msg.StartsWith("ORA"))
                {
                    var code = msg.Substring(0, msg.IndexOf(':'));
                    var message = db.ORACLE_ERROR_ERP.FirstOrDefault(x => x.ID == code);

                    error = message == null ? msg : string.Format("{0}\n{1}\n{2}", code, message.NAME_AR, msg);
                }
                else
                {
                    error = msg;
                }
            }
            else if (ex.InnerException.InnerException == null)
            {
                var msg = ex.InnerException.Message;

                if (msg.StartsWith("ORA"))
                {
                    var code = msg.Substring(0, msg.IndexOf(':'));
                    var message = db.ORACLE_ERROR_ERP.FirstOrDefault(x => x.ID == code);

                    error = message == null ? msg : string.Format("{0}\n{1}\n{2}", code, message.NAME_AR,msg);
                }
                else
                {
                    error = msg;
                }
            }
            else
            {
                var msg = ex.InnerException.InnerException.Message;

                if (msg.StartsWith("ORA"))
                {
                    var code = msg.Substring(0, msg.IndexOf(':'));
                    var message = db.ORACLE_ERROR_ERP.FirstOrDefault(x => x.ID == code);

                    error = message == null ? msg : string.Format("{0}\n{1}\n{2}", code, message.NAME_AR, msg);
                }
                else
                {
                    error = msg;
                }
            }

            return Json(new DataSourceResult { Errors = error }, JsonRequestBehavior.AllowGet);
        }
    }
}