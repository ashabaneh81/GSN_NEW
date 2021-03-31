
using System;
using System.Collections.Generic;
using System.IO;
using System.Net.Mail;
using System.Web.Mvc;
using ErpDal;
using System.Data;
using System.Data.Entity.Validation;
using System.Collections;
using System.Transactions;
using GSN_NEW.Models;
using Kendo.Mvc;
using Kendo.Mvc.Extensions;
using Kendo.Mvc.UI;
using System;
using System.Linq;
using Microsoft.AspNet.SignalR;
using System.Web;
namespace GSN_NEW.Helpers
{
    public class PyvcSequence
    {
        public static bool BuildFirstSequence(PYVC_WKSETUP_ERP setup, string UserID, PYVC_ERP obj, DbModel db)
        {

            db = Db.Get();
            if (setup.STAFF_ID != null)
            {
                var taskobj = new TASK_ERP()
                {
                    TASK_TYPE_ID = 1,
                    FROM_STAFF = UserID,
                    TO_STAFF = setup.STAFF_ID,
                    NAME_AR = "الرجاء تدقيق سند  الصرف بالرقم " + obj.ID + " ",
                    //URL = "\\BiddingWFlow\\index\\?id=" + obj.ID + "",
                    DATE_CREATED = DateTime.Now,
                    READ = "N",
                    COMPLETE = "N",
                    DISMISSED = "N"
                };
                db.TASK_ERP.Add(taskobj);
                db.SaveChanges();
                var msg = new Message();
                msg.SendTask(setup.STAFF_ID, taskobj.ID, "الرجاء تدقيق سند الصرف بالرقم " + obj.ID + " ");
                var Newobj = new PYVC_WK_ERP()
                {

                    STAFF_ID = setup.STAFF_ID,
                    ACTION = "N",
                    WK_ID = setup.ID,
                    PYVC_NO = obj.ID,
                    ORDERNO = (decimal)setup.ORDERNO,
                    TASK_ID = taskobj.ID
                };
                db.PYVC_WK_ERP.Add(Newobj);
                db.SaveChanges();
                taskobj.URL = "\\Pyvc\\index\\?ID=" + obj.ID + "&WFID=" + Newobj.ID + "";
                db.TASK_ERP.Attach(taskobj);
                db.Entry(taskobj).State = EntityState.Modified;
                db.SaveChanges();
                return true;
            }
            else if(setup.HR_ID!=null)
            {
                var UserFromHr = "";

                UserFromHr = FixedERPValues.GetStaffCodeFromHrunit((decimal)setup.HR_ID, UserID);
              
                if (UserFromHr != null && UserFromHr != "")
                {
                    var taskobj = new TASK_ERP()
                    {
                        TASK_TYPE_ID = 1,
                        FROM_STAFF = UserID,
                        TO_STAFF = UserFromHr,
                        NAME_AR = "الرجاء تدقيق سند  الصرف بالرقم " + obj.ID + " ",
                       // URL = "\\BiddingWFlow\\index\\?id=" + obj.ID + "",
                        DATE_CREATED = DateTime.Now,
                        READ = "N",
                        COMPLETE = "N",
                        DISMISSED = "N"
                    };
                    db.TASK_ERP.Add(taskobj);
                    db.SaveChanges();

                    var msg = new Message();
                 
                    msg.SendTask(UserFromHr, taskobj.ID, "الرجاء تدقيق سند الصرف بالرقم " + obj.ID + " ");

                    var Newobj = new PYVC_WK_ERP()
                    {
                        STAFF_ID = UserFromHr,
                        ACTION = "N",
                        WK_ID = setup.ID,
                        PYVC_NO = obj.ID,
                        ORDERNO = (decimal)setup.ORDERNO,
                        TASK_ID = taskobj.ID
                    };
                    db.PYVC_WK_ERP.Add(Newobj);
                    db.SaveChanges();
                    taskobj.URL = "\\Pyvc\\index\\?ID=" + obj.ID + "&WFID=" + Newobj.ID + "";
                    db.TASK_ERP.Attach(taskobj);
                    db.Entry(taskobj).State = EntityState.Modified;
                    db.SaveChanges();
                    return true;
                }
                return false;
            }
            else if(setup.GROUP_ID!=null)
            {
                var listEmpGroup = db.GROUPS_STAFF_ERP.Where(c => c.GROUP_ID == setup.GROUP_ID).ToList();
                foreach (var item in listEmpGroup)
                {
                    var taskobj = new TASK_ERP()
                    {
                        TASK_TYPE_ID = 1,
                        FROM_STAFF = UserID,
                        TO_STAFF = item.STAFF_ID,
                        NAME_AR = "الرجاء تدقيق سند الصرف بالرقم " + obj.ID + " ",
                        // URL = "\\BiddingWFlow\\index\\?id=" + obj.ID + "",
                        DATE_CREATED = DateTime.Now,
                        READ = "N",
                        COMPLETE = "N",
                        DISMISSED = "N"
                    };
                    db.TASK_ERP.Add(taskobj);
                    db.SaveChanges();

                    var msg = new Message();

                    msg.SendTask(item.STAFF_ID, taskobj.ID, "الرجاء تدقيق سند الصرف بالرقم " + obj.ID + " ");

                    var Newobj = new PYVC_WK_ERP()
                    {
                        STAFF_ID = item.STAFF_ID,
                        ACTION = "N",
                        WK_ID = setup.ID,
                        PYVC_NO = obj.ID,
                        ORDERNO = (decimal)setup.ORDERNO,
                        TASK_ID = taskobj.ID
                    };
                    db.PYVC_WK_ERP.Add(Newobj);
                    db.SaveChanges();
                    taskobj.URL = "\\Pyvc\\index\\?ID=" + obj.ID + "&WFID=" + Newobj.ID + "";
                    db.TASK_ERP.Attach(taskobj);
                    db.Entry(taskobj).State = EntityState.Modified;
                    db.SaveChanges();
                   
                }
                if (listEmpGroup.Count>0)
                return true;

            }
         
            return false;
        }

    }
}