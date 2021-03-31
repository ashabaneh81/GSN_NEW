using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using ErpDal;
using GSN_NEW.Models;

namespace GSN_NEW.Helpers
{
    public class PermissionMenu
    {
        public static List<StaffViewsModel> ControllerMenu(string empCode)
        {
            //List<ControllersTableModel> result=new List<ControllersTableModel>();

            //var db = Db.Get();
            //List<GROUPS_STAFF_ERP_MODEL> gStaff = db.GROUPS_STAFF_ERP.Where(c => c.STAFF_ID == empCode)
            //    .Select(x=>new GROUPS_STAFF_ERP_MODEL()
            //    {
            //        GROUP_ID = x.GROUP_ID,
            //    }).ToList();
            //foreach (var item in gStaff)
            //{
            
            //    List<ControllersTableModel> obj = (from e in db.CONTROLLERS_GROUPS_ERP.Where(c=>c.GROUP_ID==item.GROUP_ID)
            //            where !db.C_G_EXCEPTIONS_ERP.Any(n => n.CONTROLLER_GROUP_FK == e.ID && n.STAFF_ERP==empCode)
            //            select e).Select(x=>new ControllersTableModel()
            //        {
            //            ControllerName = x.CONTROLLERS_ID,
            //            MethodName = x.CONTROLLERS_TABLE_ERP.METHOD_NAME
            //        }).ToList();
            //    result.AddRange(obj);

            //}
            //return result;
             var db = Db.Get();
            List<StaffViewsModel> staffViews =
                db.STAFF_VIEWS.Where(c => c.STAFF_CODE == empCode).Select(x => new StaffViewsModel()
                {
                    CONTROLLER = x.VIEWS.CONTROLLOER,
                    METHOD_NAME = x.VIEWS.METHOD_NAME,
                }).ToList();
            return staffViews;
        }
    }
}