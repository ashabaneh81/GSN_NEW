using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using ErpDal;
using GSN_NEW.Controllers;
using GSN_NEW.Models;

namespace GSN_NEW.Helpers
{
    public class MinTask
    {
        public string Staff { get; set; }
        public decimal Task_No { get; set; }
    }

    public class ParallelStaff
    {
        public string Staff { get; set; }
        public bool Done { get; set; }
    }

    public class ParallelWorkFlow
    {
        public bool ParallelWork(decimal id, decimal act, decimal formId, string fromStaff)
        {
            var db = Db.Get();
            var obj = db.SERVICE_WORKFLOW_ERP.SingleOrDefault(c => c.ID == id);
            var response = obj.SERVICE_ROUTE_ERP.RESPONSE_TYPE;
            var done= PathWork(response, act,(decimal) obj.ROUTE_ID ,formId,id,fromStaff);
            return done;
        }

        public bool PathWork(string response, decimal action, decimal sr,decimal formId,decimal id,string fromStaff)
        {
            var db = Db.Get();
            var act = action.ToString();
            List<SERVICE_WORKFLOW_ERP> wF =new List<SERVICE_WORKFLOW_ERP>();
            bool done;
            switch (response)
            {            
                case "A":
                  wF =db.SERVICE_WORKFLOW_ERP.Where(c => c.SERVICE_FORM_SEQ == formId && c.ROUTE_ID==sr).ToList();
                            done = wF.All(c => c.ACTION_TAKEN != null);
                    return done;
                            
                case "N":
                    wF =db.SERVICE_WORKFLOW_ERP.Where(c => c.SERVICE_FORM_SEQ == formId && c.ROUTE_ID==sr).ToList();
                     done = wF.Any(c => c.ACTION_TAKEN != null);
                    if (done)
                    {
                        EditWorkFlow(fromStaff, formId, action, sr);
                    }
                    return done;
                    
                case "M":
                    wF =db.SERVICE_WORKFLOW_ERP.Where(c => c.SERVICE_FORM_SEQ == formId && c.ROUTE_ID==sr).ToList();
                    done = wF.Any(c => c.ACTION_TAKEN != null);
                            return done;
                 
                case "R":
                   wF =db.SERVICE_WORKFLOW_ERP.Where(c => c.SERVICE_FORM_SEQ == formId && c.ROUTE_ID == sr).ToList();
                    done = wF.Any(c => c.ACTION_TAKEN != null);
                            return done;
              
            }
            return false;
        }

        public bool InsertWorkFlow(decimal sr, decimal formId, decimal serviceSeq,string fromStaff,string response,decimal groupId=0)
        {
            var db = Db.Get();
            var selectO = new SelectsController();
            var serviceObj = selectO.BySeq(serviceSeq);
            var objStaff = db.SERVICE_ROUTE_STAFF_ERP.Where(c => c.NODE_ID == sr
                && (groupId==0 || c.GROUP_ID==groupId)).ToList();
            Message msg1 ;
            var text1="";
            SERVICE_WORKFLOW_ERP o = new SERVICE_WORKFLOW_ERP();

            switch (response)
            {
                case "A":
                    foreach (var item in objStaff)
                    {
                        var task = db.TASK_ERP.Add(new TASK_ERP()
                        {
                            TASK_TYPE_ID = 8,
                            NAME_AR = serviceObj.A_SERVICE_NAME,
                            NAME_EN = serviceObj.E_SERVICE_NAME,
                            PLANNED_START_DATE = DateTime.Now,

                            COMPLETE = "N",
                            FROM_STAFF = fromStaff,
                            TO_STAFF = item.STAFF_ID,
                            DATE_CREATED = DateTime.Now,
                            READ = "N",
                            DISMISSED = "N",
                            URL = "\\UnderFollowUp\\Index\\?ID=" + formId + "",

                        });
                        db.SaveChanges();

                        o.SERVICE_FORM_SEQ = formId;
                        o.STAFF_REF = item.STAFF_ID;
                        o.ROUTE_ID = sr;
                        o.READ = "N";
                        o.DATE_RECEIVED = DateTime.Now;
                        o.TASK_ID = task.ID;
                        o.SUSPEND = "N";
                        db.SERVICE_WORKFLOW_ERP.Add(o);
                        db.SaveChanges();

                         msg1 = new Message();
                         text1 = " خدمات الجمهور :" + "" + task.NAME_AR + " " + "طلب رقم" + formId;
                        msg1.SendTask(item.STAFF_ID, task.ID, text1);
                    }
                    break;

                case "N":
                    foreach (var item in objStaff)
                    {
                        var task1 = db.TASK_ERP.Add(new TASK_ERP()
                        {
                            TASK_TYPE_ID = 8,
                            NAME_AR = serviceObj.A_SERVICE_NAME,
                            NAME_EN = serviceObj.E_SERVICE_NAME,
                            PLANNED_START_DATE = DateTime.Now,

                            COMPLETE = "N",
                            FROM_STAFF = fromStaff,
                            TO_STAFF = item.STAFF_ID,
                            DATE_CREATED = DateTime.Now,
                            READ = "N",
                            DISMISSED = "N",
                            URL = "\\UnderFollowUp\\Index\\?ID=" + formId + "",

                        });
                        db.SaveChanges();

                        o.SERVICE_FORM_SEQ = formId;
                        o.STAFF_REF = item.STAFF_ID;
                        o.ROUTE_ID = sr;
                        o.READ = "N";
                        o.DATE_RECEIVED = DateTime.Now;
                        o.TASK_ID = task1.ID;
                        o.SUSPEND = "N";
                        db.SERVICE_WORKFLOW_ERP.Add(o);
                        db.SaveChanges();

                         msg1 = new Message();
                         text1 = " خدمات الجمهور :" + "" + task1.NAME_AR + " " + "طلب رقم" + formId;
                        msg1.SendTask(item.STAFF_ID, task1.ID, text1);
                    }
                    break;

                case "M":

                    List<MinTask> objListTask = new List<MinTask>();

                    foreach (var item in objStaff)
                    {
                        MinTask oo = new MinTask();
                        oo.Staff = item.STAFF_ID;
                        oo.Task_No =
                            db.TASK_ERP.Count(c => c.TO_STAFF == item.STAFF_ID && c.TASK_TYPE_ID == 8);
                        objListTask.Add(oo);
                    }

                    var objMin = objListTask.Min(c=>c.Task_No);
                    var lowestValues = objListTask.SingleOrDefault(x => x.Task_No == objMin);

                        var task2 = db.TASK_ERP.Add(new TASK_ERP()
                        {
                            TASK_TYPE_ID = 8,
                            NAME_AR = serviceObj.A_SERVICE_NAME,
                            NAME_EN = serviceObj.E_SERVICE_NAME,
                            PLANNED_START_DATE = DateTime.Now,

                            COMPLETE = "N",
                            FROM_STAFF = fromStaff,
                            TO_STAFF = lowestValues.Staff,
                            DATE_CREATED = DateTime.Now,
                            READ = "N",
                            DISMISSED = "N",
                            URL = "\\UnderFollowUp\\Index\\?ID=" + formId + "",

                        });
                        db.SaveChanges();

                        o.SERVICE_FORM_SEQ = formId;
                        o.STAFF_REF = lowestValues.Staff;
                        o.ROUTE_ID = sr;
                        o.READ = "N";
                        o.DATE_RECEIVED = DateTime.Now;
                        o.TASK_ID = task2.ID;
                        o.SUSPEND = "N";
                        db.SERVICE_WORKFLOW_ERP.Add(o);
                        db.SaveChanges();

                         msg1 = new Message();
                         text1 = " خدمات الجمهور :" + "" + task2.NAME_AR + " " + "طلب رقم" + formId;
                         msg1.SendTask(lowestValues.Staff, task2.ID, text1);
                  
                    break;

                case "R":
                    var staffOrder = objStaff.OrderBy(c => c.ID);
                    var serviceRoute = db.SERVICE_ROUTE_ERP.SingleOrDefault(c => c.ID == sr);
                    if (serviceRoute.LAST_STAFF == null)
                    {
                        serviceRoute.LAST_STAFF = staffOrder.First().ID;
                        db.SERVICE_ROUTE_ERP.Attach(serviceRoute);
                        db.Entry(serviceRoute).Property(c => c.LAST_STAFF).IsModified = true;
                        db.SaveChanges();

                        var task3 = db.TASK_ERP.Add(new TASK_ERP()
                        {
                            TASK_TYPE_ID = 8,
                            NAME_AR = serviceObj.A_SERVICE_NAME,
                            NAME_EN = serviceObj.E_SERVICE_NAME,
                            PLANNED_START_DATE = DateTime.Now,

                            COMPLETE = "N",
                            FROM_STAFF = fromStaff,
                            TO_STAFF = staffOrder.First().STAFF_ID,
                            DATE_CREATED = DateTime.Now,
                            READ = "N",
                            DISMISSED = "N",
                            URL = "\\UnderFollowUp\\Index\\?ID=" + formId + "",

                        });
                        db.SaveChanges();

                        o.SERVICE_FORM_SEQ = formId;
                        o.STAFF_REF = staffOrder.First().STAFF_ID;
                        o.ROUTE_ID = sr;
                        o.READ = "N";
                        o.DATE_RECEIVED = DateTime.Now;
                        o.TASK_ID = task3.ID;
                        o.SUSPEND = "N";
                        db.SERVICE_WORKFLOW_ERP.Add(o);
                        db.SaveChanges();

                        msg1 = new Message();
                        text1 = " خدمات الجمهور :" + "" + task3.NAME_AR + " " + "طلب رقم" + formId;
                        msg1.SendTask(staffOrder.First().STAFF_ID, task3.ID, text1);

                    }
                    else
                    {
                        try
                        {
                            serviceRoute.LAST_STAFF = staffOrder.FirstOrDefault(c => c.ID > serviceRoute.LAST_STAFF).ID;
                            var staff = staffOrder.FirstOrDefault(c => c.ID > serviceRoute.LAST_STAFF).STAFF_ID;
                            db.SERVICE_ROUTE_ERP.Attach(serviceRoute);
                            db.Entry(serviceRoute).Property(c => c.LAST_STAFF).IsModified = true;
                            db.SaveChanges();

                            var task3 = db.TASK_ERP.Add(new TASK_ERP()
                            {
                                TASK_TYPE_ID = 8,
                                NAME_AR = serviceObj.A_SERVICE_NAME,
                                NAME_EN = serviceObj.E_SERVICE_NAME,
                                PLANNED_START_DATE = DateTime.Now,

                                COMPLETE = "N",
                                FROM_STAFF = fromStaff,
                                TO_STAFF = staff,
                                DATE_CREATED = DateTime.Now,
                                READ = "N",
                                DISMISSED = "N",
                                URL = "\\UnderFollowUp\\Index\\?ID=" + formId + "",

                            });
                            db.SaveChanges();

                            o.SERVICE_FORM_SEQ = formId;
                            o.STAFF_REF = staff;
                            o.ROUTE_ID = sr;
                            o.READ = "N";
                            o.DATE_RECEIVED = DateTime.Now;
                            o.TASK_ID = task3.ID;
                            o.SUSPEND = "N";
                            db.SERVICE_WORKFLOW_ERP.Add(o);
                            db.SaveChanges();

                            msg1 = new Message();
                            text1 = " خدمات الجمهور :" + "" + task3.NAME_AR + " " + "طلب رقم" + formId;
                            msg1.SendTask(staff, task3.ID, text1);
                        }
                        catch (Exception)
                        {
                            serviceRoute.LAST_STAFF = staffOrder.First().ID;
                            var staff = staffOrder.First().STAFF_ID;

                            db.SERVICE_ROUTE_ERP.Attach(serviceRoute);
                            db.Entry(serviceRoute).Property(c => c.LAST_STAFF).IsModified = true;
                            db.SaveChanges();

                            var task3 = db.TASK_ERP.Add(new TASK_ERP()
                            {
                                TASK_TYPE_ID = 8,
                                NAME_AR = serviceObj.A_SERVICE_NAME,
                                NAME_EN = serviceObj.E_SERVICE_NAME,
                                PLANNED_START_DATE = DateTime.Now,

                                COMPLETE = "N",
                                FROM_STAFF = fromStaff,
                                TO_STAFF = staff,
                                DATE_CREATED = DateTime.Now,
                                READ = "N",
                                DISMISSED = "N",
                                URL = "\\UnderFollowUp\\Index\\?ID=" + formId + "",

                            });
                            db.SaveChanges();

                            o.SERVICE_FORM_SEQ = formId;
                            o.STAFF_REF = staff;
                            o.ROUTE_ID = sr;
                            o.READ = "N";
                            o.DATE_RECEIVED = DateTime.Now;
                            o.TASK_ID = task3.ID;
                            o.SUSPEND = "N";
                            db.SERVICE_WORKFLOW_ERP.Add(o);
                            db.SaveChanges();

                            msg1 = new Message();
                            text1 = " خدمات الجمهور :" + "" + task3.NAME_AR + " " + "طلب رقم" + formId;
                            msg1.SendTask(staff, task3.ID, text1);
                        }
                     
                    }
                    break;
            }
                    return true;
            }


        public void EditWorkFlow(string fromStaff, decimal id,decimal act,decimal sr,decimal groupId=0)
        {
            var db = Db.Get();
            var objStaff = db.SERVICE_ROUTE_STAFF_ERP.Where(c => c.NODE_ID == sr && (groupId==0 || c.GROUP_ID==groupId)).ToList();

       

            foreach (var item in objStaff)
            {


                var obj =
                    db.SERVICE_WORKFLOW_ERP.FirstOrDefault(
                        c => c.ROUTE_ID == sr && c.STAFF_REF == item.STAFF_ID && c.ACTION_TAKEN == null 
                            && c.SERVICE_FORM_SEQ==id);
                if (obj != null)
                {

                    if (obj.TASK_ID != null)
                    {
                        var taskOss = db.TASK_ERP.Where(c => c.ID == obj.TASK_ID).SingleOrDefault();
                        if (taskOss != null)
                        {
                            taskOss.COMPLETE = "Y";
                            taskOss.COMPLETE_DATE = DateTime.Now;
                            db.TASK_ERP.Attach(taskOss);
                            db.Entry(taskOss).Property(c => c.COMPLETE).IsModified = true;
                            db.Entry(taskOss).Property(c => c.COMPLETE_DATE).IsModified = true;
                            db.SaveChanges();

                        }
                    }


                    obj.ACTION_DATE = DateTime.Now;
                    obj.ACTION_TAKEN = act;
                    obj.RESPONSE_STAFF = fromStaff;

                db.SERVICE_WORKFLOW_ERP.Attach(obj);

                db.Entry(obj).Property(x => x.ACTION_DATE).IsModified = true;
                db.Entry(obj).Property(x => x.ACTION_TAKEN).IsModified = true;
                db.Entry(obj).Property(x => x.RESPONSE_STAFF).IsModified = true;


                db.SaveChanges();
                }
            
            }
         
        }



        public ServiceWorkFlowModel SelectBySeq(decimal seq)
        {
            var db = Db.Get();

            return db.SERVICE_WORKFLOW_ERP
                     .Where(x => x.ID == seq)
                     .Select(x => new ServiceWorkFlowModel()
                     {
                         SERVICE_FORM_SEQ = x.SERVICE_FORM_SEQ,
                         STAFF_REF = x.STAFF_REF,
                         ID = x.ID,
                         READ = x.READ,
                         DATE_RECEIVED = x.DATE_RECEIVED,
                         DATE_READ = x.DATE_READ,
                         ACTION_TAKEN = x.ACTION_TAKEN,
                         ACTION_DATE = x.ACTION_DATE,
                         STAFF_NOTES = x.STAFF_NOTES,
                         MESSAGES = x.MESSAGES,
                         OPINIONS = x.OPINIONS,
                         NameService = x.SERVICE_FORM_ERP.SERVICE.A_SERVICE_NAME,
                         NameServiceEn = x.SERVICE_FORM_ERP.SERVICE.E_SERVICE_NAME,
                         TASK_ID = x.TASK_ID,

                     }).Single();
        }


        public List<ServiceWorkFlowModel> SelectWorkFlowViaSr(decimal seq, decimal formId)
        {
            var db = Db.Get();

            return db.SERVICE_WORKFLOW_ERP
                     .Where(x => x.ROUTE_ID == seq && x.SERVICE_FORM_SEQ==formId)
                     .Select(x => new ServiceWorkFlowModel()
                     {
                         SERVICE_FORM_SEQ = x.SERVICE_FORM_SEQ,
                         STAFF_REF = x.STAFF_REF,
                         ID = x.ID,
                         READ = x.READ,
                         DATE_RECEIVED = x.DATE_RECEIVED,
                         DATE_READ = x.DATE_READ,
                         ACTION_TAKEN = x.ACTION_TAKEN,
                         ACTION_DATE = x.ACTION_DATE,
                         STAFF_NOTES = x.STAFF_NOTES,
                         MESSAGES = x.MESSAGES,
                         OPINIONS = x.OPINIONS,
                         NameService = x.SERVICE_FORM_ERP.SERVICE.A_SERVICE_NAME,
                         NameServiceEn = x.SERVICE_FORM_ERP.SERVICE.E_SERVICE_NAME,
                         TASK_ID = x.TASK_ID,

                     }).ToList();
        }

        public void AddWf(ServiceWorkFlowModel p)
        {
            var db = Db.Get();
            var o = new SERVICE_WORKFLOW_ERP()
            {
                SERVICE_FORM_SEQ = p.SERVICE_FORM_SEQ,
                STAFF_REF = p.STAFF_REF,
                READ = p.READ,
                DATE_RECEIVED = p.DATE_RECEIVED,
                DATE_READ = p.DATE_READ,
                ACTION_TAKEN = p.ACTION_TAKEN,
                ACTION_DATE = p.ACTION_DATE,
                STAFF_NOTES = p.STAFF_NOTES,
                MESSAGES = p.MESSAGES,
                OPINIONS = p.OPINIONS,
                DELEGATE_STAFF = p.DELEGATE_STAFF,
                ROUTE_ID = p.ROUTE_ID,
                TASK_ID = p.TASK_ID
            };
            db.SERVICE_WORKFLOW_ERP.Add(o);
            db.SaveChanges();
        }


        public bool ParallelWorkMultiGroup(decimal id, decimal act, decimal formId, string fromStaff,decimal groupId)
        {
            var db = Db.Get();
            var obj = db.SERVICE_WORKFLOW_ERP.SingleOrDefault(c => c.ID == id);
            var group = db.SERVICE_ROUTE_GROUP_ERP.Where(c=>c.NODE_ID==obj.ROUTE_ID && c.ID==groupId).SingleOrDefault();
            var done = PathWorkMultiGroup(group.RESPONSE_TYPE, act, (decimal)obj.ROUTE_ID, formId, id, fromStaff,groupId);
            return done;
        }

        public bool PathWorkMultiGroup(string response, decimal action, decimal sr, decimal formId, decimal id, string fromStaff,decimal groupId)
        {
            var db = Db.Get();
            var act = action.ToString();
            List<SERVICE_WORKFLOW_ERP> wF = new List<SERVICE_WORKFLOW_ERP>();
            bool done;
            switch (response)
            {
                case "A":
                    wF = (from grp in db.SERVICE_ROUTE_STAFF_ERP.Where(c => c.NODE_ID == sr && c.GROUP_ID == groupId)
                        join swf in db.SERVICE_WORKFLOW_ERP.Where(c => c.SERVICE_FORM_SEQ == formId && c.ROUTE_ID == sr)
                            on grp.NODE_ID equals swf.ROUTE_ID
                            into g
                          from x in g
                          select x
                    ).ToList();
                    //wF = db.SERVICE_WORKFLOW_ERP.Where(c => c.SERVICE_FORM_SEQ == formId && c.ROUTE_ID == sr ).ToList();
                    done = wF.All(c => c.ACTION_TAKEN != null);
                    return done;

                case "N":
                    //wF = db.SERVICE_WORKFLOW_ERP.Where(c => c.SERVICE_FORM_SEQ == formId && c.ROUTE_ID == sr).ToList();
                    wF = (from grp in db.SERVICE_ROUTE_STAFF_ERP.Where(c => c.NODE_ID == sr && c.GROUP_ID == groupId)
                          join swf in db.SERVICE_WORKFLOW_ERP.Where(c => c.SERVICE_FORM_SEQ == formId && c.ROUTE_ID == sr)
                             // on grp.NODE_ID equals swf.ROUTE_ID
                              on grp.STAFF_ID equals swf.STAFF_REF
                              into g
                          from x in g
                          select x
                ).ToList();
                    done = wF.Any(c => c.ACTION_TAKEN != null);
                    if (done)
                    {
                        EditWorkFlow(fromStaff, formId, action, sr,groupId);
                    }
                    return done;

                case "M":
                    //wF = db.SERVICE_WORKFLOW_ERP.Where(c => c.SERVICE_FORM_SEQ == formId && c.ROUTE_ID == sr).ToList();
                    wF = (from grp in db.SERVICE_ROUTE_STAFF_ERP.Where(c => c.NODE_ID == sr && c.GROUP_ID == groupId)
                          join swf in db.SERVICE_WORKFLOW_ERP.Where(c => c.SERVICE_FORM_SEQ == formId && c.ROUTE_ID == sr)
                              on grp.NODE_ID equals swf.ROUTE_ID
                              into g
                          from x in g
                          select x
            ).ToList();
                    done = wF.Any(c => c.ACTION_TAKEN != null);
                    return done;

                case "R":
                    //wF = db.SERVICE_WORKFLOW_ERP.Where(c => c.SERVICE_FORM_SEQ == formId && c.ROUTE_ID == sr).ToList();
                    wF = (from grp in db.SERVICE_ROUTE_STAFF_ERP.Where(c => c.NODE_ID == sr && c.GROUP_ID == groupId)
                          join swf in db.SERVICE_WORKFLOW_ERP.Where(c => c.SERVICE_FORM_SEQ == formId && c.ROUTE_ID == sr)
                              on grp.NODE_ID equals swf.ROUTE_ID
                              into g
                          from x in g
                          select x
            ).ToList();
                    done = wF.Any(c => c.ACTION_TAKEN != null);
                    return done;

            }
            return false;
        }
    }



}