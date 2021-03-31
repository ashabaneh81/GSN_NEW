using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using ErpDal;
namespace GSN_NEW.Controllers
{
    public class BaseDisposeController : Controller
    {
        // GET: BaseDispose
        protected DbModel db;
        public BaseDisposeController()
        {
            db = Db.Get();
        }
       

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
          
        }

    }
}