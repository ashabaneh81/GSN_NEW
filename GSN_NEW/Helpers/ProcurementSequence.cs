using System;
using System.Collections.Generic;
using ErpDal;
using System.Data;
using Kendo.Mvc.Extensions;
using System.Linq;
using System.Web;
namespace GSN_NEW.Helpers
{

    public static class ProcurementSequence
    {
        public static string firstUserSequSet { get; set; }

        public static bool BuildSequence(List<PROCUREMENT_WK_SETUP_PERP> ListOrders, string UserID, PROCUREMENT_WK_PERP objWF, REQUISITION_MAS_PERP obj, DbModel db)
        {
            firstUserSequSet = "";
            bool check1 = false;
            bool check2 = false;
            bool check3 = false;
            //db = Db.Get();

            var OrderNext = ListOrders.FirstOrDefault().ORDER_SEQ;
            if (objWF.PROCUREMENT_WK_SETUP_PERP.HR_ID == 4)
            {

                objWF.FORWARDED = "Y";
                objWF.RESPONSE = "A";
                objWF.DATE_FORWARDED = DateTime.Now;
                db.Entry(objWF).State = EntityState.Modified;
                db.SaveChanges();
                //db.Database.ExecuteSqlCommand("update PROCUREMENT_WK_PERP set FORWARDED='Y', RESPONSE='A', DATE_FORWARDED='" + DateTime.Now + "' where ID=" + objWF.ID + "");

                var countNotForwardForTech = db.PROCUREMENT_WK_PERP.Where(c => c.FORWARDED == "N" && c.REQUISITION_ID == obj.ID && c.WK_SETUP_ID == objWF.WK_SETUP_ID).ToList();//not give here opinion
                if (countNotForwardForTech.Count == 0 || countNotForwardForTech == null)
                {
                    if (ListOrders.Count > 0)
                    {
                        foreach (var item in ListOrders)
                        {
                            if (item.HR_ID != null)
                            {
                                var UserFromHr = "";
                                if (item.HR_ID == 4)
                                {
                                    var listStock = obj.REQUISITION_DTL_PERP.Where(c => c.STOCKS_ERP.STAFF_ID != null).ToList();
                                    var DisteictTechnical = listStock.GroupBy(c => new { Stock = c.STOCK_ID, Employee = c.STOCKS_ERP.STAFF_ID });
                                    var ListUsers = new List<string>();
                                    foreach (var itemuser in DisteictTechnical)
                                    {
                                        ListUsers.Add(FixedERPValues.GetTechnicUser(itemuser.Key.Stock));
                                    }
                                    if (ListUsers.Count > 0)
                                        ListUsers = ListUsers.Distinct().ToList();

                                    var GroupListUsers = ListUsers.GroupBy(s => s).Select(c => new { ID = c.Key }).ToList();
                                    if (GroupListUsers.Count == 0)
                                    {
                                        OrderNext = db.PROCUREMENT_WK_SETUP_PERP.Where(c => c.ORDER_SEQ > OrderNext).OrderBy(c => c.ORDER_SEQ).FirstOrDefault().ORDER_SEQ;
                                        ListOrders = db.PROCUREMENT_WK_SETUP_PERP.Where(c => c.ORDER_SEQ == OrderNext).ToList();
                                        return BuildFirstSequence(ListOrders, UserID, obj, db);//Recursion Function when current logedin user it same the user of sequence
                                    }
                                    if (GroupListUsers.All(c => c.ID == UserID))
                                    {
                                        OrderNext = db.PROCUREMENT_WK_SETUP_PERP.Where(c => c.ORDER_SEQ > OrderNext).OrderBy(c => c.ORDER_SEQ).FirstOrDefault().ORDER_SEQ;
                                        ListOrders = db.PROCUREMENT_WK_SETUP_PERP.Where(c => c.ORDER_SEQ == OrderNext).ToList();
                                        return BuildSequence(ListOrders, UserID, objWF, obj, db);//Recursion Function when current loged in user it same the user of sequence

                                    }

                                    foreach (string itemtech in ListUsers)
                                    {
                                        if (UserID != itemtech)
                                        {
                                            check1 = true;
                                            var taskobj = new TASK_ERP()
                                            {
                                                TASK_TYPE_ID = 1,
                                                FROM_STAFF = UserID,
                                                TO_STAFF = itemtech,
                                                NAME_AR = "الرجاء متابعة طلب اللوازم بالرقم " + obj.ID + " ",
                                                URL = "\\ProcurementWkPerp\\Index\\?ID=" + obj.ID + "",
                                                DATE_CREATED = DateTime.Now,
                                                READ = "N",
                                                COMPLETE = "N",
                                                DISMISSED = "N"

                                            };
                                            db.TASK_ERP.Add(taskobj);
                                            db.SaveChanges();
                                            var msg = new Message();
                                            msg.SendTask(itemtech, taskobj.ID, "الرجاء متابعة طلب اللوازم بالرقم " + obj.ID + " ");
                      
                                            var Newobj = new PROCUREMENT_WK_PERP()
                                            {
                                                READ = "N",
                                                DATE_REC = DateTime.Now,
                                                REQUISITION_ID = obj.ID,
                                                WK_SETUP_ID = item.ID,
                                                TASK_ID = taskobj.ID,
                                                FORWARDED = "N",
                                                STAFF_ID = itemtech
                                            };
                                            db.PROCUREMENT_WK_PERP.Add(Newobj);
                                            db.SaveChanges();
                                            if (firstUserSequSet == null || firstUserSequSet == "")
                                                firstUserSequSet = itemtech;
                                        }

                                    }


                                }//////
                                else
                                {
                                    UserFromHr = FixedERPValues.GetStaffCodeFromHrunit((decimal)item.HR_ID, obj.STAFF_ID);
                                    if (UserFromHr == null || UserFromHr == "" )
                                    {
                                        OrderNext = db.PROCUREMENT_WK_SETUP_PERP.Where(c => c.ORDER_SEQ > OrderNext).OrderBy(c => c.ORDER_SEQ).FirstOrDefault().ORDER_SEQ;
                                        ListOrders = db.PROCUREMENT_WK_SETUP_PERP.Where(c => c.ORDER_SEQ == OrderNext).ToList();
                                        return BuildSequence(ListOrders, UserID, objWF, obj, db);//Recursion Function when current logedin user it same the user of sequence
                                    }
                                    if (UserFromHr != null && UserFromHr != "")
                                    {
                                        check2 = true;
                                        var taskobj = new TASK_ERP()
                                        {
                                            TASK_TYPE_ID = 1,
                                            FROM_STAFF = UserID,
                                            TO_STAFF = UserFromHr,
                                            NAME_AR = "الرجاء متابعة طلب اللوازم بالرقم " + obj.ID + " ",
                                            URL = "\\ProcurementWkPerp\\Index\\?ID=" + obj.ID + "",
                                            DATE_CREATED = DateTime.Now,
                                            READ = "N",
                                            COMPLETE = "N",
                                            DISMISSED = "N"
                                        };
                                        db.TASK_ERP.Add(taskobj);
                                        db.SaveChanges();
                                        var msg = new Message();
                                        msg.SendTask(UserFromHr, taskobj.ID, "الرجاء متابعة طلب اللوازم بالرقم " + obj.ID + " ");
                      
                                        var Newobj = new PROCUREMENT_WK_PERP()
                                        {
                                            READ = "N",
                                            DATE_REC = DateTime.Now,
                                            REQUISITION_ID = obj.ID,
                                            WK_SETUP_ID = item.ID,
                                            TASK_ID = taskobj.ID,
                                            FORWARDED = "N",
                                            STAFF_ID = UserFromHr
                                        };
                                        db.PROCUREMENT_WK_PERP.Add(Newobj);
                                        db.SaveChanges();
                                        if (firstUserSequSet == null || firstUserSequSet == "")
                                            firstUserSequSet = UserFromHr;
                                    }

                                }





                            }
                            else
                            {
                                if (UserID == item.STAFF_ID)
                                {
                                    OrderNext = db.PROCUREMENT_WK_SETUP_PERP.Where(c => c.ORDER_SEQ > OrderNext).OrderBy(c => c.ORDER_SEQ).FirstOrDefault().ORDER_SEQ;
                                    ListOrders = db.PROCUREMENT_WK_SETUP_PERP.Where(c => c.ORDER_SEQ == OrderNext).ToList();
                                    return BuildSequence(ListOrders, UserID, objWF, obj, db);//Recursion Function when current logedin user it same the user of sequence
                                }

                                if (UserID != item.STAFF_ID)
                                {
                                    check3 = true;
                                    var taskobj = new TASK_ERP()
                                    {
                                        TASK_TYPE_ID = 1,
                                        FROM_STAFF = UserID,
                                        TO_STAFF = item.STAFF_ID,
                                        NAME_AR = "الرجاء متابعة طلب اللوازم بالرقم " + obj.ID + " ",
                                        DATE_CREATED = DateTime.Now,
                                        URL = "\\ProcurementWkPerp\\Index\\?ID=" + obj.ID + "",
                                        READ = "N",
                                        COMPLETE = "N",
                                        DISMISSED = "N"
                                    };
                                    db.TASK_ERP.Add(taskobj);
                                    db.SaveChanges();
                                    var msg = new Message();
                                    msg.SendTask(item.STAFF_ID, taskobj.ID, "الرجاء متابعة طلب اللوازم بالرقم " + obj.ID + " ");
                      
                                    var Newobj = new PROCUREMENT_WK_PERP()
                                    {

                                        STAFF_ID = item.STAFF_ID,
                                        READ = "N",
                                        DATE_REC = DateTime.Now,
                                        REQUISITION_ID = obj.ID,
                                        WK_SETUP_ID = item.ID,
                                        TASK_ID = taskobj.ID,
                                        FORWARDED = "N",

                                    };
                                    db.PROCUREMENT_WK_PERP.Add(Newobj);
                                    db.SaveChanges();
                                    if (firstUserSequSet == null || firstUserSequSet == "")
                                        firstUserSequSet = item.STAFF_ID;

                                }

                            }

                        }
                    }
                }
                else
                {

                   
                    
                    //var taskobj = new TASK_ERP()
                    //{
                    //    TASK_TYPE_ID = 1,
                    //    FROM_STAFF = UserID,
                    //    TO_STAFF = countNotForwardForTech.FirstOrDefault().STAFF_ID,
                    //    NAME_AR = "قبول  طلب لوازم  بالرقم " + obj.ID + " ",
                    //    DATE_CREATED = DateTime.Now,
                    //    URL = "\\PurRequisitionMass\\GetTypeofRequestion\\?id=" + obj.ID + "",
                    //    READ = "N",
                    //    COMPLETE = "N",
                    //    DISMISSED = "N"
                    //};
                    //db.TASK_ERP.Add(taskobj);
                    //db.SaveChanges();
                    HttpContext.Current.Session["StaffName"] = countNotForwardForTech.FirstOrDefault().STAFF_ERP.NAME_AR;
                    return true;
                }


            }
            else//new Sequence 
            {

                foreach (var item in ListOrders)
                {
                    if (item.HR_ID != null)
                    {
                        var UserFromHr = "";
                        if (item.HR_ID == 4)
                        {
                            var listStock = obj.REQUISITION_DTL_PERP.Where(c => c.STOCKS_ERP.STAFF_ID != null).ToList();
                            var DisteictTechnical = listStock.GroupBy(c => new { Stock = c.STOCK_ID, Employee = c.STOCKS_ERP.STAFF_ID });
                            var ListUsers = new List<string>();
                            foreach (var itemuser in DisteictTechnical)
                            {
                                ListUsers.Add(FixedERPValues.GetTechnicUser(itemuser.Key.Stock));
                            }
                            if (ListUsers.Count > 0)
                                ListUsers = ListUsers.Distinct().ToList();

                            var GroupListUsers = ListUsers.GroupBy(s => s).Select(c => new { ID = c.Key }).ToList();
                            if (GroupListUsers.All(c => c.ID == UserID))
                            {
                                OrderNext = db.PROCUREMENT_WK_SETUP_PERP.Where(c => c.ORDER_SEQ > OrderNext).OrderBy(c => c.ORDER_SEQ).FirstOrDefault().ORDER_SEQ;
                                ListOrders = db.PROCUREMENT_WK_SETUP_PERP.Where(c => c.ORDER_SEQ == OrderNext).ToList();
                                return BuildSequence(ListOrders, UserID, objWF, obj, db);//Recursion Function when current logedin user it same the user of sequence

                            }

                            foreach (string itemtech in ListUsers)
                            {
                                if (UserID != itemtech)
                                {
                                    check1 = true;
                                    var taskobj = new TASK_ERP()
                                    {
                                        TASK_TYPE_ID = 1,
                                        FROM_STAFF = UserID,
                                        TO_STAFF = itemtech,
                                        NAME_AR = "الرجاء متابعة طلب اللوازم بالرقم " + obj.ID + " ",
                                        URL = "\\ProcurementWkPerp\\Index\\?ID=" + obj.ID + "",
                                        READ = "N",
                                        COMPLETE = "N",
                                        DISMISSED = "N",
                                        DATE_CREATED = DateTime.Now
                                    };
                                    db.TASK_ERP.Add(taskobj);
                                    db.SaveChanges();
                                    var msg = new Message();
                                    msg.SendTask(itemtech, taskobj.ID, "الرجاء متابعة طلب اللوازم بالرقم " + obj.ID + " ");
                      
                                    var Newobj = new PROCUREMENT_WK_PERP()
                                    {
                                        READ = "N",
                                        DATE_REC = DateTime.Now,
                                        REQUISITION_ID = obj.ID,
                                        WK_SETUP_ID = item.ID,
                                        TASK_ID = taskobj.ID,
                                        FORWARDED = "N",
                                        STAFF_ID = itemtech
                                    };
                                    db.PROCUREMENT_WK_PERP.Add(Newobj);
                                    db.SaveChanges();
                                    if (firstUserSequSet == null || firstUserSequSet == "")
                                        firstUserSequSet = itemtech;
                                }




                            }


                        }
                        else
                        {
                            UserFromHr = FixedERPValues.GetStaffCodeFromHrunit((decimal)item.HR_ID, obj.STAFF_ID);
                            if (UserFromHr == null || UserFromHr == "" || UserFromHr == UserID)
                            {
                                OrderNext = db.PROCUREMENT_WK_SETUP_PERP.Where(c => c.ORDER_SEQ > OrderNext).OrderBy(c => c.ORDER_SEQ).FirstOrDefault().ORDER_SEQ;
                                ListOrders = db.PROCUREMENT_WK_SETUP_PERP.Where(c => c.ORDER_SEQ == OrderNext).ToList();
                                return BuildSequence(ListOrders, UserID, objWF, obj, db);//Recursion Function when current logedin user it same the user of sequence
                            }
                            if (UserFromHr != null && UserFromHr != "")
                            {
                                check2 = true;
                                var taskobj = new TASK_ERP()
                                {
                                    TASK_TYPE_ID = 1,
                                    FROM_STAFF = UserID,
                                    TO_STAFF = UserFromHr,
                                    NAME_AR = "الرجاء متابعة طلب اللوازم بالرقم " + obj.ID + " ",
                                    DATE_CREATED = DateTime.Now,
                                    URL = "\\ProcurementWkPerp\\Index\\?ID=" + obj.ID + "",
                                    READ = "N",
                                    COMPLETE = "N",
                                    DISMISSED = "N"
                                };
                                db.TASK_ERP.Add(taskobj);
                                db.SaveChanges();

                                var msg = new Message();
                                msg.SendTask(UserFromHr, taskobj.ID, "الرجاء متابعة طلب اللوازم بالرقم " + obj.ID + " ");
                      
                                var Newobj = new PROCUREMENT_WK_PERP()
                                {
                                    READ = "N",
                                    DATE_REC = DateTime.Now,
                                    REQUISITION_ID = obj.ID,
                                    WK_SETUP_ID = item.ID,
                                    TASK_ID = taskobj.ID,
                                    FORWARDED = "N",
                                    STAFF_ID = UserFromHr
                                };
                                db.PROCUREMENT_WK_PERP.Add(Newobj);
                                db.SaveChanges();
                                if (firstUserSequSet == null || firstUserSequSet == "")
                                    firstUserSequSet = UserFromHr;
                            }


                        }





                    }
                    else
                    {
                        if (UserID == item.STAFF_ID)
                        {
                            OrderNext = db.PROCUREMENT_WK_SETUP_PERP.Where(c => c.ORDER_SEQ > OrderNext).OrderBy(c => c.ORDER_SEQ).FirstOrDefault().ORDER_SEQ;
                            ListOrders = db.PROCUREMENT_WK_SETUP_PERP.Where(c => c.ORDER_SEQ == OrderNext).ToList();
                            return BuildSequence(ListOrders, UserID, objWF, obj, db);//Recursion Function when current logedin user it same the user of sequence
                        }

                        if (UserID != item.STAFF_ID)
                        {
                            check3 = true;
                            var taskobj = new TASK_ERP()
                            {
                                TASK_TYPE_ID = 1,
                                FROM_STAFF = UserID,
                                TO_STAFF = item.STAFF_ID,
                                NAME_AR = "الرجاء متابعة طلب اللوازم بالرقم " + obj.ID + " ",
                                DATE_CREATED = DateTime.Now,
                                URL = "\\ProcurementWkPerp\\Index\\?ID=" + obj.ID + "",
                                READ = "N",
                                COMPLETE = "N",
                                DISMISSED = "N"

                            };
                            db.TASK_ERP.Add(taskobj);
                            db.SaveChanges();
                            var msg = new Message();
                            msg.SendTask(item.STAFF_ID, taskobj.ID, "الرجاء متابعة طلب اللوازم بالرقم " + obj.ID + " ");
                      
                            var Newobj = new PROCUREMENT_WK_PERP()
                            {

                                STAFF_ID = item.STAFF_ID,
                                READ = "N",
                                DATE_REC = DateTime.Now,
                                REQUISITION_ID = obj.ID,
                                WK_SETUP_ID = item.ID,
                                TASK_ID = taskobj.ID,
                                FORWARDED = "N",

                            };
                            db.PROCUREMENT_WK_PERP.Add(Newobj);
                            db.SaveChanges();
                            if (firstUserSequSet == null || firstUserSequSet == "")
                                firstUserSequSet = item.STAFF_ID;
                        }

                    }
                }


            }


            if (check1 || check2 || check3)
            {
                objWF.FORWARDED = "Y";
                objWF.RESPONSE = "A";
                objWF.DATE_FORWARDED = DateTime.Now;
                db.PROCUREMENT_WK_PERP.Attach(objWF);
                db.Entry(objWF).State = EntityState.Modified;
                db.SaveChanges();
                HttpContext.Current.Session["StaffName"] = db.STAFF_ERP.SingleOrDefault(c => c.ID == firstUserSequSet).NAME_AR;
                return true;

            }

            return false;
        }
        public static bool BuildFirstSequence(List<PROCUREMENT_WK_SETUP_PERP> ListOrders, string UserID, REQUISITION_MAS_PERP obj, DbModel db)
        {
            firstUserSequSet = "";
            db = Db.Get();
            var OrderNext = ListOrders.FirstOrDefault().ORDER_SEQ;
            foreach (var item in ListOrders)
            {
                if (item.HR_ID != null)
                {
                    var UserFromHr = "";
                    if (item.HR_ID == 4)
                    {
                        var listStock = obj.REQUISITION_DTL_PERP.Where(c => c.STOCKS_ERP.STAFF_ID != null).ToList();
                        var DisteictTechnical = listStock.GroupBy(c => new { Stock = c.STOCK_ID, Employee = c.STOCKS_ERP.STAFF_ID });
                        var ListUsers = new List<string>();
                        foreach (var itemuser in DisteictTechnical)
                        {
                            ListUsers.Add(FixedERPValues.GetTechnicUser(itemuser.Key.Stock));
                        }
                        if (ListUsers.Count > 0)
                            ListUsers = ListUsers.Distinct().ToList();

                        var GroupListUsers = ListUsers.GroupBy(s => s).Select(c => new { ID = c.Key }).ToList();
                        if (GroupListUsers.Count == 0)
                        {
                            OrderNext = db.PROCUREMENT_WK_SETUP_PERP.Where(c => c.ORDER_SEQ > OrderNext).OrderBy(c => c.ORDER_SEQ).FirstOrDefault().ORDER_SEQ;
                            ListOrders = db.PROCUREMENT_WK_SETUP_PERP.Where(c => c.ORDER_SEQ == OrderNext).ToList();
                            return BuildFirstSequence(ListOrders, UserID, obj, db);//Recursion Function when current logedin user it same the user of sequence
                        }

                        var db2 = Db.Get();
                        foreach (var itemtech in GroupListUsers)
                        {
                           
                                var taskobj = new TASK_ERP()
                                {
                                    TASK_TYPE_ID = 1,
                                    FROM_STAFF = UserID,
                                    TO_STAFF = itemtech.ID,
                                    NAME_AR = "الرجاء متابعة طلب اللوازم بالرقم " + obj.ID + " ",
                                    URL = "\\ProcurementWkPerp\\Index\\?ID=" + obj.ID + "",
                                    READ = "N",
                                    COMPLETE = "N",
                                    DISMISSED = "N",
                                    DATE_CREATED = DateTime.Now
                                };
                                db2.TASK_ERP.Add(taskobj);
                                db2.SaveChanges();
                                var msg = new Message();
                                msg.SendTask(itemtech.ID, taskobj.ID, "الرجاء متابعة طلب اللوازم بالرقم " + obj.ID + " ");
                      
                                var Newobj = new PROCUREMENT_WK_PERP()
                                {
                                    READ = "N",
                                    DATE_REC = DateTime.Now,
                                    REQUISITION_ID = obj.ID,
                                    WK_SETUP_ID = item.ID,
                                    TASK_ID = taskobj.ID,
                                    FORWARDED = "N",
                                    STAFF_ID = itemtech.ID,
                                };
                                db2.PROCUREMENT_WK_PERP.Add(Newobj);
                                db2.SaveChanges();
                                if (firstUserSequSet == null || firstUserSequSet == "")
                                    firstUserSequSet = itemtech.ID;
                            




                        }
                        if (ListUsers.Count > 0)
                        {
                            HttpContext.Current.Session["StaffName"] = db.STAFF_ERP.SingleOrDefault(c => c.ID == firstUserSequSet).NAME_AR;
                            return true;
                        }


                    }
                    else
                    {
                        UserFromHr = FixedERPValues.GetStaffCodeFromHrunit((decimal)item.HR_ID, obj.STAFF_ID);
                        if (UserFromHr == null || UserFromHr == "")
                        {
                            OrderNext = db.PROCUREMENT_WK_SETUP_PERP.Where(c => c.ORDER_SEQ > OrderNext).OrderBy(c => c.ORDER_SEQ).FirstOrDefault().ORDER_SEQ;
                            ListOrders = db.PROCUREMENT_WK_SETUP_PERP.Where(c => c.ORDER_SEQ == OrderNext).ToList();
                            return BuildFirstSequence(ListOrders, UserID, obj, db);//Recursion Function when current logedin user it same the user of sequence
                        }
                        if (UserFromHr != null && UserFromHr != "")
                        {
                            var taskobj = new TASK_ERP()
                            {
                                TASK_TYPE_ID = 1,
                                FROM_STAFF = UserID,
                                TO_STAFF = UserFromHr,
                                NAME_AR = "الرجاء متابعة طلب اللوازم بالرقم " + obj.ID + " ",
                                URL = "\\ProcurementWkPerp\\Index\\?ID=" + obj.ID + "",
                                READ = "N",
                                COMPLETE = "N",
                                DISMISSED = "N",
                                DATE_CREATED = DateTime.Now
                            };
                            db.TASK_ERP.Add(taskobj);
                            db.SaveChanges();
                            var msg = new Message();
                            msg.SendTask(UserFromHr, taskobj.ID, "الرجاء متابعة طلب اللوازم بالرقم " + obj.ID + " ");
                      
                            var Newobj = new PROCUREMENT_WK_PERP()
                            {
                                READ = "N",
                                DATE_REC = DateTime.Now,
                                REQUISITION_ID = obj.ID,
                                WK_SETUP_ID = item.ID,
                                TASK_ID = taskobj.ID,
                                FORWARDED = "N",
                                STAFF_ID = UserFromHr
                            };
                            db.PROCUREMENT_WK_PERP.Add(Newobj);
                            db.SaveChanges();
                            if (firstUserSequSet == null || firstUserSequSet == "")
                                firstUserSequSet = UserFromHr;

                            HttpContext.Current.Session["StaffName"] = db.STAFF_ERP.SingleOrDefault(c => c.ID == firstUserSequSet).NAME_AR;
                            return true;
                        }

                    }

                }
                else
                {
                    if (UserID == item.STAFF_ID)
                    {
                        OrderNext = db.PROCUREMENT_WK_SETUP_PERP.Where(c => c.ORDER_SEQ > OrderNext).OrderBy(c => c.ORDER_SEQ).FirstOrDefault().ORDER_SEQ;
                        ListOrders = db.PROCUREMENT_WK_SETUP_PERP.Where(c => c.ORDER_SEQ == OrderNext).ToList();
                        return BuildFirstSequence(ListOrders, UserID, obj, db);//Recursion Function when current logedin user it same the user of sequence
                    }

                    if (UserID != item.STAFF_ID)
                    {
                        var taskobj = new TASK_ERP()
                        {
                            TASK_TYPE_ID = 1,
                            FROM_STAFF = UserID,
                            TO_STAFF = item.STAFF_ID,
                            NAME_AR = "الرجاء متابعة طلب اللوازم بالرقم " + obj.ID + " ",
                            URL = "\\ProcurementWkPerp\\Index\\?ID=" + obj.ID + "",
                            DATE_CREATED = DateTime.Now,
                            READ = "N",
                            COMPLETE = "N",
                            DISMISSED = "N"
                        };
                        db.TASK_ERP.Add(taskobj);
                         db.SaveChanges();
                         var msg = new Message();
                         msg.SendTask(item.STAFF_ID, taskobj.ID, "الرجاء متابعة طلب اللوازم بالرقم " + obj.ID + " ");
                      
                        var Newobj = new PROCUREMENT_WK_PERP()
                        {

                            STAFF_ID = item.STAFF_ID,
                            READ = "N",
                            DATE_REC = DateTime.Now,
                            REQUISITION_ID = obj.ID,
                            WK_SETUP_ID = item.ID,
                            TASK_ID = taskobj.ID,
                            FORWARDED = "N",
                        };
                        db.PROCUREMENT_WK_PERP.Add(Newobj);
                        db.SaveChanges();
                        if (firstUserSequSet == null || firstUserSequSet == "")
                            firstUserSequSet = item.STAFF_ID;
                        HttpContext.Current.Session["StaffName"] = db.STAFF_ERP.SingleOrDefault(c => c.ID == firstUserSequSet).NAME_AR;
                        return true;
                    }
                }

            }
            return false;
        }


    }
}