using GSN_NEW.Helpers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using ErpDal;
using GSN_NEW.Models;
//using System.Data.Entity.Core.Objects;
using Kendo.Mvc.UI;
using System.Data.Entity.Core.Objects;
using Kendo.Mvc.Extensions;

namespace GSN_NEW.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult Index1()
        {
            var db = Db.Get();
            var userCode = User.Identity.Name.UserCode();
            var taskUncomplete = db.TASK_ERP.Count(x => x.TO_STAFF == userCode && x.COMPLETE == "N" && x.DISMISSED == "N" && x.TASK_TYPE_ID != 7 && x.TASK_TYPE_ID != 9);
            var taskSendUncomplete = db.TASK_ERP.Count(x => x.FROM_STAFF == userCode && x.COMPLETE == "N" && x.DISMISSED == "N" && x.TASK_TYPE_ID != 7 && x.TASK_TYPE_ID != 9);
            var taskUncompleteHr = db.TASK_ERP.Count(x => x.TO_STAFF == userCode && x.COMPLETE == "N" && x.DISMISSED == "N" && x.TASK_TYPE_ID != 7 && x.TASK_TYPE_ID != 9 && (x.TASK_TYPE_ID == 2 || x.TASK_TYPE_ID == 14 || x.TASK_TYPE_ID == 16 || x.TASK_TYPE_ID == 13 || x.TASK_TYPE_ID == 15 || x.TASK_TYPE_ID == 11));
            var taskUncompleteEmun = db.TASK_ERP.Count(x => x.TO_STAFF == userCode && x.COMPLETE == "N" && x.DISMISSED == "N" && x.TASK_TYPE_ID != 7 && x.TASK_TYPE_ID != 9 && (x.TASK_TYPE_ID == 8 || x.TASK_TYPE_ID == 12));
            var taskUncompleteFinance = db.TASK_ERP.Count(x => x.TO_STAFF == userCode && x.COMPLETE == "N" && x.DISMISSED == "N" && x.TASK_TYPE_ID != 7 && x.TASK_TYPE_ID != 9 && (x.TASK_TYPE_ID == 5 || x.TASK_TYPE_ID == 6));
            var taskUncompleteProcurment = db.TASK_ERP.Count(x => x.TO_STAFF == userCode && x.COMPLETE == "N" && x.DISMISSED == "N" && x.TASK_TYPE_ID != 7 && x.TASK_TYPE_ID != 9 && x.TASK_TYPE_ID == 1);
            var taskUncompleteOthers = db.TASK_ERP.Count(x => x.TO_STAFF == userCode && x.COMPLETE == "N" && x.DISMISSED == "N" && x.TASK_TYPE_ID != 9 && (x.TASK_TYPE_ID == 3 || x.TASK_TYPE_ID == 4 || x.TASK_TYPE_ID == 10 || x.TASK_TYPE_ID == 7));           
            int administrativeNew = 0, administrativeold = 0;

            var Hmodel = new HomeModel()
            {
                taskUncomplete = taskUncomplete,
                taskSendUncomplete = taskSendUncomplete,
                taskUncompleteHr = taskUncompleteHr,
                taskUncompleteEmun = taskUncompleteEmun,
                taskUncompleteFinance = taskUncompleteFinance,
                taskUncompleteOthers = taskUncompleteOthers,
                taskUncompleteProcurment = taskUncompleteProcurment,
                staff = new List<STAFF_ERP>(),
                Administrative = administrativeNew,
                AdministrativeOld = administrativeold,
                LoginUser = userCode
            };
            return View(Hmodel);
        }
        public ActionResult TaskUnCompleted()  //decimal? TYPE
        {
            var db = Db.Get();
            ViewBag.TYPE = 1;
            var userCode = User.Identity.Name.UserCode();
            ViewBag.taskUncompleteHr = db.TASK_ERP.Count(x => x.TO_STAFF == userCode && x.COMPLETE == "N" && x.DISMISSED == "N" && x.TASK_TYPE_ID != 7 && x.TASK_TYPE_ID != 9 && (x.TASK_TYPE_ID == 2 || x.TASK_TYPE_ID == 14 || x.TASK_TYPE_ID == 16 || x.TASK_TYPE_ID == 13 || x.TASK_TYPE_ID == 15 || x.TASK_TYPE_ID == 11));
            ViewBag.taskUncompleteEmun = db.TASK_ERP.Count(x => x.TO_STAFF == userCode && x.COMPLETE == "N" && x.DISMISSED == "N" && x.TASK_TYPE_ID != 7 && x.TASK_TYPE_ID != 9 && (x.TASK_TYPE_ID == 8 || x.TASK_TYPE_ID == 12));
            ViewBag.taskUncompleteFinance = db.TASK_ERP.Count(x => x.TO_STAFF == userCode && x.COMPLETE == "N" && x.DISMISSED == "N" && x.TASK_TYPE_ID != 7 && x.TASK_TYPE_ID != 9 && (x.TASK_TYPE_ID == 5 || x.TASK_TYPE_ID == 6));
            ViewBag.taskUncompleteProcurment = db.TASK_ERP.Count(x => x.TO_STAFF == userCode && x.COMPLETE == "N" && x.DISMISSED == "N" && x.TASK_TYPE_ID != 7 && x.TASK_TYPE_ID != 9 && x.TASK_TYPE_ID == 1);
            ViewBag.taskUncompleteOthers = db.TASK_ERP.Count(x => x.TO_STAFF == userCode && x.COMPLETE == "N" && x.DISMISSED == "N" && x.TASK_TYPE_ID != 9 && (x.TASK_TYPE_ID == 3 || x.TASK_TYPE_ID == 4 || x.TASK_TYPE_ID == 10 || x.TASK_TYPE_ID == 7));
            return PartialView();
        }
        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }
        public ActionResult TaskCompleted()
        {
            return PartialView();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
        public ActionResult ReadTaskCompleted([DataSourceRequest] DataSourceRequest request, string publicSearch)
        {
            var db = Db.Get();
            var userCode = User.Identity.Name.UserCode();
            if (!string.IsNullOrEmpty(publicSearch))
            {
                var wordList = publicSearch.Split(' ');
                var tasks1 = db.TASK_ERP
                    .Include("TASK_TYPES_ERP")
                    .Include("TASK_ATTACHMENTS_ERP")
                    .Where(x => x.TO_STAFF == userCode && x.COMPLETE == "Y"
                    &&
                    wordList.All(val => (x.NAME_AR + " " + x.TASK_TYPES_ERP.NAME_AR
                     + " " + x.STAFF_ERP.NAME_AR).Contains(val)));
                var data = tasks1.Select(x => new TasksModel()
                {
                    NAME_AR = x.NAME_AR,
                    TASK_TYPE_AR = x.TASK_TYPES_ERP.NAME_AR,
                    TASK_TYPE_EN = x.TASK_TYPES_ERP.NAME_EN,
                    COMPLETE = x.COMPLETE,
                    TaskID = x.ID,
                    TASK_TYPE_ID = x.TASK_TYPE_ID,
                    URL = x.URL,
                    IS_MANUAL = x.TASK_TYPES_ERP.IS_MANUAL,
                    DISMISSED = x.DISMISSED,
                    ACTUAL_STRAT_DATE = EntityFunctions.TruncateTime(x.ACTUAL_STRAT_DATE),
                    DATE_CREATED = EntityFunctions.TruncateTime(x.DATE_CREATED),
                    READ = x.READ,
                    HAS_ATTACH = x.TASK_ATTACHMENTS_ERP.Any(),
                    FROM_STAFF = x.STAFF_ERP1.NAME_AR,
                    PLANNED_START_DATE = EntityFunctions.TruncateTime(x.PLANNED_START_DATE),
                    PLANNED_END_DATE = EntityFunctions.TruncateTime(x.PLANNED_END_DATE),
                    DESCRIPTION = x.DESCRIPTION,
                    COMPLETE_DATE = EntityFunctions.TruncateTime(x.COMPLETE_DATE),
                    NOTES = x.NOTES,
                    MEMO_ID = x.MEMO_ID,
                    TITLE = x.NAME_AR,

                }).ToDataSourceResult(request);
                //data.Data.OfType<TasksModel>().ToList().ForEach(x =>
                //{
                //    var income = x.MEMO_ID != null
                //        ? db.INCOMING_ERP.Where(c => c.MEMO_ID == x.MEMO_ID).SingleOrDefault()
                //        : null;
                //    x.SenderWard =
                //       income != null ? income.STAKEHOLDERS_ERP != null ? income.STAKEHOLDERS_ERP.NAME_AR : "" : "";
                //    if (x.TASK_TYPE_ID == 8)
                //    {
                //        var servicrForm = db.SERVICE_WORKFLOW_ERP.Where(c => c.TASK_ID == x.TaskID).SingleOrDefault();
                //        if (servicrForm != null)
                //        {
                //            x.Form_ID = servicrForm.SERVICE_FORM_SEQ;
                //            x.WHO_APPLY_SERVICE = servicrForm.SERVICE_FORM_ERP != null ? servicrForm.SERVICE_FORM_ERP.STAFF_ERP != null ?
                //                servicrForm.SERVICE_FORM_ERP.STAFF_ERP.NAME_AR : "" : "";

                //        }
                //        if (servicrForm == null)
                //        {
                //            var opinion = db.OPINIONS.Where(c => c.TASK_ID == x.TaskID).SingleOrDefault();
                //            if (opinion != null)
                //            {
                //                x.Form_ID = opinion.SERVICE_WORKFLOW_ERP.SERVICE_FORM_SEQ;
                //            }
                //        }
                //    }
                //    else if (x.TASK_TYPE_ID == 7 || x.TASK_TYPE_ID == 9)
                //    {
                //        var id = x.MEMO_ID;
                //        x.Form_ID = id;
                //        var oo = db.MEMO_ERP.Where(c => c.ID == id).SingleOrDefault();
                //        x.TITLE = oo.SUBJECT;
                //    }
                //    else
                //    {
                //        if (x.URL != null)
                //        {
                //            if (x.URL.Contains('&'))
                //            {
                //                var aa = x.URL.Split('?')[1];
                //                var aa1 = aa.Split('&')[0];
                //                var id = Convert.ToDecimal(aa1.Split('=')[1]);
                //                x.Form_ID = id;
                //            }
                //            else if (x.URL.Contains('?'))
                //            {
                //                var id = Convert.ToDecimal(x.URL.Split('=')[1]);
                //                x.Form_ID = id;
                //            }

                //        }

                //    }

                //});

                return Json(data, JsonRequestBehavior.AllowGet);
            }
            var tasks = db.TASK_ERP
                        .Include("TASK_TYPES_ERP")
                        .Include("TASK_ATTACHMENTS_ERP")
                        //.Where(x => x.TO_STAFF == userCode && x.COMPLETE == "Y" && x.TASK_TYPE_ID != 7 && x.TASK_TYPE_ID != 9)
                        .Where(x => x.TO_STAFF == userCode && x.COMPLETE == "Y")
                        .Select(x => new TasksModel()
                        {
                            NAME_AR = x.NAME_AR,
                            TASK_TYPE_AR = x.TASK_TYPES_ERP.NAME_AR,
                            TASK_TYPE_EN = x.TASK_TYPES_ERP.NAME_EN,
                            COMPLETE = x.COMPLETE,
                            TaskID = x.ID,
                            TASK_TYPE_ID = x.TASK_TYPE_ID,
                            URL = x.URL,
                            IS_MANUAL = x.TASK_TYPES_ERP.IS_MANUAL,
                            DISMISSED = x.DISMISSED,
                            ACTUAL_STRAT_DATE = EntityFunctions.TruncateTime(x.ACTUAL_STRAT_DATE),
                            DATE_CREATED = EntityFunctions.TruncateTime(x.DATE_CREATED),
                            READ = x.READ,
                            HAS_ATTACH = x.TASK_ATTACHMENTS_ERP.Any(),
                            FROM_STAFF = x.STAFF_ERP1.NAME_AR,
                            PLANNED_START_DATE = EntityFunctions.TruncateTime(x.PLANNED_START_DATE),
                            PLANNED_END_DATE = EntityFunctions.TruncateTime(x.PLANNED_END_DATE),
                            DESCRIPTION = x.DESCRIPTION,
                            COMPLETE_DATE = EntityFunctions.TruncateTime(x.COMPLETE_DATE),
                            NOTES = x.NOTES,
                            MEMO_ID = x.MEMO_ID,
                            TITLE = x.NAME_AR,


                        }).ToDataSourceResult(request);
            //tasks.Data.OfType<TasksModel>().ToList().ForEach(x =>
            //{
            //    var income = x.MEMO_ID != null
            //       ? db.INCOMING_ERP.Where(c => c.MEMO_ID == x.MEMO_ID).SingleOrDefault()
            //       : null;
            //    x.SenderWard =
            //        income != null ? income.STAKEHOLDERS_ERP != null ? income.STAKEHOLDERS_ERP.NAME_AR : "" : "";
            //    if (x.TASK_TYPE_ID == 8)
            //    {
            //        var servicrForm = db.SERVICE_WORKFLOW_ERP.Where(c => c.TASK_ID == x.TaskID).SingleOrDefault();
            //        if (servicrForm != null)
            //        {
            //            x.Form_ID = servicrForm.SERVICE_FORM_SEQ;
            //        }
            //        if (servicrForm == null)
            //        {
            //            var opinion = db.OPINIONS.Where(c => c.TASK_ID == x.TaskID).SingleOrDefault();
            //            if (opinion != null)
            //            {
            //                x.Form_ID = opinion.SERVICE_WORKFLOW_ERP.SERVICE_FORM_SEQ;
            //            }
            //        }
            //    }

            //    else if (x.TASK_TYPE_ID == 7 || x.TASK_TYPE_ID == 9)
            //    {
            //        var id = x.MEMO_ID;
            //        x.Form_ID = id;
            //        var oo = db.MEMO_ERP.Where(c => c.ID == id).SingleOrDefault();
            //        x.TITLE = oo.SUBJECT;
            //    }
            //    else
            //    {
            //        if (x.URL != null)
            //        {
            //            if (x.URL.Contains('&'))
            //            {
            //                var aa = x.URL.Split('?')[1];
            //                var aa1 = aa.Split('&')[0];
            //                var id = Convert.ToDecimal(aa1.Split('=')[1]);
            //                x.Form_ID = id;
            //            }
            //            else if (x.URL.Contains('?'))
            //            {
            //                var id = Convert.ToDecimal(x.URL.Split('=')[1]);
            //                x.Form_ID = id;
            //            }

            //        }

            //    }

            //});
            return Json(tasks, JsonRequestBehavior.AllowGet);
        }

        public ActionResult ReadTaskUnCompletedSend([DataSourceRequest] DataSourceRequest request, string publicSearch)
        {
            var userCode = User.Identity.Name.UserCode();
            var db = Db.Get();
            #region generalSearch
            if (!string.IsNullOrEmpty(publicSearch))
            {
                var wordList = publicSearch.Split(' ');
                var tasks1 = db.TASK_ERP
                  .Include("TASK_TYPES_ERP")
                  .Include("TASK_ATTACHMENTS_ERP")
                  .Where(x => x.FROM_STAFF == userCode && x.COMPLETE == "N" && x.DISMISSED == "N"
                      && x.TASK_TYPE_ID != 7 && x.TASK_TYPE_ID != 9 &&
                      wordList.All(val => (x.NAME_AR + " " +
                       x.TASK_TYPES_ERP.NAME_AR + " " +
                       x.STAFF_ERP.NAME_AR).Contains(val))
                      )
                  .Select(x => new TasksModel()
                  {
                      NAME_AR = x.NAME_AR,
                      TASK_TYPE_AR = x.TASK_TYPES_ERP.NAME_AR,
                      TASK_TYPE_EN = x.TASK_TYPES_ERP.NAME_EN,
                      COMPLETE = x.COMPLETE,
                      TaskID = x.ID,
                      TASK_TYPE_ID = x.TASK_TYPE_ID,
                      URL = x.URL,
                      IS_MANUAL = x.TASK_TYPES_ERP.IS_MANUAL,
                      DISMISSED = x.DISMISSED,
                      ACTUAL_STRAT_DATE = EntityFunctions.TruncateTime(x.ACTUAL_STRAT_DATE),
                      DATE_CREATED = EntityFunctions.TruncateTime(x.DATE_CREATED),
                      READ = x.READ,
                      HAS_ATTACH = x.TASK_ATTACHMENTS_ERP.Any(),
                      FROM_STAFF = x.STAFF_ERP1.NAME_AR,
                      PLANNED_START_DATE = EntityFunctions.TruncateTime(x.PLANNED_START_DATE),
                      PLANNED_END_DATE = EntityFunctions.TruncateTime(x.PLANNED_END_DATE),
                      DESCRIPTION = x.DESCRIPTION,
                      NOTES = x.NOTES,
                      MEMO_ID = x.MEMO_ID,
                      TITLE = x.NAME_AR,
                  }).ToDataSourceResult(request);
                //tasks1.Data.OfType<TasksModel>().ToList().ForEach(x =>
                //{
                //    var income = x.MEMO_ID != null
                //       ? db.INCOMING_ERP.Where(c => c.MEMO_ID == x.MEMO_ID).SingleOrDefault()
                //       : null;
                //    x.SenderWard =
                //        income != null ? income.STAKEHOLDERS_ERP != null ? income.STAKEHOLDERS_ERP.NAME_AR : "" : "";
                //    if (x.TASK_TYPE_ID == 8)
                //    {
                //        var servicrForm = db.SERVICE_WORKFLOW_ERP.Where(c => c.TASK_ID == x.TaskID).SingleOrDefault();
                //        if (servicrForm != null)
                //        {
                //            x.Form_ID = servicrForm.SERVICE_FORM_SEQ;
                //        }
                //        if (servicrForm == null)
                //        {
                //            var opinion = db.OPINIONS.Where(c => c.TASK_ID == x.TaskID).SingleOrDefault();
                //            if (opinion != null)
                //            {
                //                x.Form_ID = opinion.SERVICE_WORKFLOW_ERP.SERVICE_FORM_SEQ;
                //            }
                //        }
                //    }
                //    else if (x.TASK_TYPE_ID == 7 || x.TASK_TYPE_ID == 9)
                //    {
                //        var id = x.MEMO_ID;
                //        x.Form_ID = id;
                //        var oo = db.MEMO_ERP.Where(c => c.ID == id).SingleOrDefault();
                //        x.TITLE = oo.SUBJECT;
                //    }
                //    else
                //    {
                //        if (x.URL != null)
                //        {
                //            if (x.URL.Contains('&'))
                //            {
                //                var aa = x.URL.Split('?')[1];
                //                var aa1 = aa.Split('&')[0];
                //                var id = Convert.ToDecimal(aa1.Split('=')[1]);
                //                x.Form_ID = id;
                //            }
                //            else if (x.URL.Contains('?'))
                //            {
                //                var id = Convert.ToDecimal(x.URL.Split('=')[1]);
                //                x.Form_ID = id;
                //            }

                //        }

                //    }

                //});
                return Json(tasks1, JsonRequestBehavior.AllowGet);
            }

            #endregion
            var tasks = db.TASK_ERP
                        .Include("TASK_TYPES_ERP")
                        .Include("TASK_ATTACHMENTS_ERP")
                        .Where(x => x.FROM_STAFF == userCode && x.COMPLETE == "N" && x.DISMISSED == "N" && x.TASK_TYPE_ID != 7 && x.TASK_TYPE_ID != 9)
                        .Select(x => new TasksModel()
                        {
                            NAME_AR = x.NAME_AR,
                            TASK_TYPE_AR = x.TASK_TYPES_ERP.NAME_AR,
                            TASK_TYPE_EN = x.TASK_TYPES_ERP.NAME_EN,
                            COMPLETE = x.COMPLETE,
                            TaskID = x.ID,
                            TASK_TYPE_ID = x.TASK_TYPE_ID,
                            URL = x.URL,
                            IS_MANUAL = x.TASK_TYPES_ERP.IS_MANUAL,
                            DISMISSED = x.DISMISSED,
                            ACTUAL_STRAT_DATE = EntityFunctions.TruncateTime(x.ACTUAL_STRAT_DATE),
                            DATE_CREATED = EntityFunctions.TruncateTime(x.DATE_CREATED),
                            READ = x.READ,
                            HAS_ATTACH = x.TASK_ATTACHMENTS_ERP.Any(),
                            FROM_STAFF = x.STAFF_ERP1.NAME_AR,
                            PLANNED_START_DATE = EntityFunctions.TruncateTime(x.PLANNED_START_DATE),
                            PLANNED_END_DATE = EntityFunctions.TruncateTime(x.PLANNED_END_DATE),
                            DESCRIPTION = x.DESCRIPTION,
                            NOTES = x.NOTES,
                            MEMO_ID = x.MEMO_ID,
                            TITLE = x.NAME_AR,
                        }).ToDataSourceResult(request);
            //tasks.Data.OfType<TasksModel>().ToList().ForEach(x =>
            //{
            //    var income = x.MEMO_ID != null
            //       ? db.INCOMING_ERP.Where(c => c.MEMO_ID == x.MEMO_ID).SingleOrDefault()
            //       : null;
            //    x.SenderWard =
            //        income != null ? income.STAKEHOLDERS_ERP != null ? income.STAKEHOLDERS_ERP.NAME_AR : "" : "";
            //    if (x.TASK_TYPE_ID == 8)
            //    {
            //        var servicrForm = db.SERVICE_WORKFLOW_ERP.Where(c => c.TASK_ID == x.TaskID).SingleOrDefault();
            //        if (servicrForm != null)
            //        {
            //            x.Form_ID = servicrForm.SERVICE_FORM_SEQ;
            //        }
            //        if (servicrForm == null)
            //        {
            //            var opinion = db.OPINIONS.Where(c => c.TASK_ID == x.TaskID).SingleOrDefault();
            //            if (opinion != null)
            //            {
            //                x.Form_ID = opinion.SERVICE_WORKFLOW_ERP.SERVICE_FORM_SEQ;
            //            }
            //        }
            //    }
            //    else if (x.TASK_TYPE_ID == 7 || x.TASK_TYPE_ID == 9)
            //    {
            //        var id = x.MEMO_ID;
            //        x.Form_ID = id;
            //        var oo = db.MEMO_ERP.Where(c => c.ID == id).SingleOrDefault();
            //        x.TITLE = oo.SUBJECT;
            //    }
            //    else
            //    {
            //        if (x.URL != null)
            //        {
            //            if (x.URL.Contains('&'))
            //            {
            //                var aa = x.URL.Split('?')[1];
            //                var aa1 = aa.Split('&')[0];
            //                var id = Convert.ToDecimal(aa1.Split('=')[1]);
            //                x.Form_ID = id;
            //            }
            //            else if (x.URL.Contains('?'))
            //            {
            //                var id = Convert.ToDecimal(x.URL.Split('=')[1]);
            //                x.Form_ID = id;
            //            }

            //        }

            //    }

            //});
            return Json(tasks, JsonRequestBehavior.AllowGet);
        }
        public ActionResult ReadTaskTypes([DataSourceRequest] DataSourceRequest request)
        {
            var db = Db.Get();
            #region Query
            var result = db.TASK_TYPES_ERP
                .Select(x => new
                {
                    Id = x.ID,
                    NameAr = x.NAME_AR
                })
               .ToDataSourceResult(request);

            #endregion
            return Json(result, JsonRequestBehavior.AllowGet);
        }
    }
}