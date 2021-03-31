using System.Linq;
using System.Web.Mvc;
using System.Web.Routing;
using System.Web.Security;
using ErpDal;
using GSN_NEW.Interfaces;
using GSN_NEW.Models;
using GSN_NEW.Services;
using GSN_NEW.Helpers;
using System;
using Kendo.Mvc.Extensions;
using System.Web;
using System.Data.Entity.Core.Objects;

namespace GSN_NEW.Controllers
{

    [AllowAnonymous]
    public class LoginController : BaseDisposeController
    {
        public IFormsAuthenticationService FormsService { get; set; }
        public IMembershipService MembershipService { get; set; }

        protected override void Initialize(RequestContext requestContext)
        {
            if (FormsService == null)
            {
                FormsService = new FormsAuthenticationService();
            }
            if (MembershipService == null)
            {
                MembershipService = new AccountMembershipService();
            }

            base.Initialize(requestContext);
        }
        public ActionResult DailyWorkPage()
        {
            DateTime dt = DateTime.Now.Date.AddDays(-2);
            ViewBag.Date = dt;
            return View();
        }
        [AllowAnonymous]
        public ActionResult Index()
        {
            return View();
        }
        private bool IsBirthDay(string StaffId)
        {
            var user = db.STAFF_ERP.SingleOrDefault(s => s.ID == StaffId);
            var empId = user.EMPLOYEE_CODE;
            if (empId.HasValue)
            {
                var emp = db.EMPLOYEE_HERP.SingleOrDefault(e => e.ID == empId);
                var birthday = emp.BIRTH_DATE;
                if (birthday.HasValue)
                {
                    if (birthday.Value.Month == DateTime.Now.Month && birthday.Value.Day == DateTime.Now.Day)
                    {
                        return true;
                    }
                }
            }
            return false;
        }

        //private bool isWorkDay(DateTime dt, decimal empId)
        //{
        //    var emp = db.EMPLOYEE_HERP.SingleOrDefault(a => a.ID == empId);
        //    var day = dt.DayOfWeek;
        //    var shiftday = 0;
        //    switch (day)
        //    {
        //        case DayOfWeek.Saturday:
        //            shiftday = 1;
        //            break;
        //        case DayOfWeek.Sunday:
        //            shiftday = 2;
        //            break;
        //        case DayOfWeek.Monday:
        //            shiftday = 3;
        //            break;
        //        case DayOfWeek.Tuesday:
        //            shiftday = 4;
        //            break;
        //        case DayOfWeek.Wednesday:
        //            shiftday = 5;
        //            break;
        //        case DayOfWeek.Thursday:
        //            shiftday = 6;
        //            break;
        //        case DayOfWeek.Friday:
        //            shiftday = 7;
        //            break;
        //    }
        //    //check for vacations
        //    var isVacDay = db.TRANS_VACATIONS_HERP.Where(x => x.EMPLOYEE_ID == empId && x.TRANS_TYPE == "C" && EntityFunctions.TruncateTime(x.FROM_DATE) <= dt && EntityFunctions.TruncateTime(x.TO_DATE) >= dt).Any();
        //    if (isVacDay) return false;

        //    //check for shift holidays
        //    var isHoliday = db.EMPLOYEE_SHIFTS_ERP.Where(x => x.EMP_CODE == emp.EMPLOYEE_CODE && x.DAY == shiftday && x.IS_HOLIDAY == "Y").Any();
        //    if (isHoliday) return false;

        //    //check for holidays
        //    var isHoliday2 = db.HOLIDAYS_HERP.Where(x => EntityFunctions.TruncateTime(x.FROM_DATE) <= dt && EntityFunctions.TruncateTime(x.TO_DATE) >= dt).Any();
        //    if (isHoliday2) return false;
        //    return true;//(dt.DayOfWeek != DayOfWeek.Friday && dt.DayOfWeek != DayOfWeek.Sunday);
        //}

        //public ActionResult FirstPage(string staffId)
        //{
        //    var user = db.STAFF_ERP.SingleOrDefault(x => x.ID == staffId);
        //    DateTime dt = DateTime.Now.Date.AddDays(-2);
        //    if (user.EMPLOYEE_CODE != null && user.IS_COLLECTOR != "Y" && user.ID != "000351")
        //    {
        //        if (isWorkDay(dt, (decimal)user.EMPLOYEE_CODE))
        //        {
        //            var isExists = db.DAILY_WORK_HERP.Any(a => a.STAFF_CODE == staffId && a.ACTIVITY_DATE == dt);
        //            if (!isExists)
        //            {
        //                Session["IsValid"] = false;
        //                return RedirectToAction("DailyWorkPage", "Login");
        //            }
        //            else
        //            {
        //                Session["IsValid"] = true;
        //            }
        //        }
        //    }
        //    else
        //    {
        //        Session["IsValid"] = true;
        //    }
        //    return RedirectToAction("Index", "Home");
        //}

        //public ActionResult HappyBirthday(string staffId)
        //{
        //    var s = db.STAFF_ERP.SingleOrDefault(a => a.ID == staffId);
        //    var m = new StaffERPModel
        //    {
        //        ID = staffId,
        //        NAME_AR = s.NAME_AR
        //    };
        //    return View(m);
        //}
        [HttpPost]
        [AllowAnonymous]
        public ActionResult Index(LoginModel model, string returnUrl)
        {
            if (!ModelState.IsValid) return View(model);
            var user = db.STAFF_ERP.SingleOrDefault(x => x.ID == model.UserName);
            var forRamallah = FixedERPValues.GetValueAccount("IS_RAMALLAH");

            if (user == null)
            {
                ModelState.AddModelError(string.Empty, "اسم المستخدم غير صحيح.");
                return View(model);

            }


            if (user.EXPIRY_DATE == null || DateTime.Now.Date > user.EXPIRY_DATE.Value.Date)
            {
                return RedirectToAction("ChangePassword", "Login", new { expiryMsg = "تم انتهاء صلاحية كلمة المرور الرجاء تغييرها", login = user.ID });
            }
            if (MembershipService.ValidateUser(model.UserName, model.Password))
            {
                if (forRamallah == "Y")
                {
                    if (user.EMPLOYEE_HERP != null)
                    {
                        if (user.EMPLOYEE_HERP.CURRENT_STATUS_ID != 1)
                        {
                            ModelState.AddModelError(string.Empty, "الموظف غير قائم على رأس عمله");
                            return View(model);
                        }
                    }
                   
                }
                FormsService.SignIn(string.Format("{0}:{1}",
                        model.UserName, // user code
                        user.NAME_AR
                        ), false);
                var login = model.UserName;

                //string ip = GetIPAddress(this.Request).Trim();
                //IPAuthintacation(ip, model.UserName);
                //LoginTime(model.UserName, ip);

                var hrAdmin = FixedERPValues.GetValueAccount("HR_administrator_manager");
                bool isHrLogin = hrAdmin == model.UserName ? true : false;
                if (forRamallah == "Y")
                {
                    if (IsBirthDay(user.ID))
                    {
                        Session["IsBirthDay"] = true;
                        //redirect to happy birthday page
                        return RedirectToAction("HappyBirthday", "Login", new { staffId = user.ID });
                    }
                    else
                        Session["IsBirthDay"] = false;

                    //return FirstPage(user.ID);
                    //return RedirectToAction("Index", "Home");
                }
                else
                {
                    Session["IsValid"] = true;
                    if (isHrLogin)
                    {
                        SendNotiEmployeeAgeAbove60(user.ID);
                        SendNotiEmployeeContractEndThroughWeek(user.ID);
                    }
                }
                //nuha new
                if (user.IS_BUSSSTATION_STAFF == "Y")
                {
                    return RedirectToAction("AddNewEntry", "Busses");
                }
                if (user.IS_QR_STAFF == "Y")
                {
                    return RedirectToAction("Index", "Stakholder_QR_Code");
                }
                //endNuha new 

                if (Url.IsLocalUrl(returnUrl) && returnUrl.Length > 1 && returnUrl.StartsWith("/")
                    && !returnUrl.StartsWith("//") && !returnUrl.StartsWith("/\\"))
                {
                    return Redirect(returnUrl);
                }
                Session["userId"] = model.UserName;


                //string ip = GetIPAddress(this.Request).Trim();
                //IPAuthintacation(ip, model.UserName);
                // LoginTime(model.UserName, ip);
                return RedirectToAction("Index1", "Home");
            }
            else ModelState.AddModelError(string.Empty, "اسم المستخدم او كلمة المرور غير صحيحة.");

            // If we got this far, something failed, redisplay form
            return View(model);
        }
        #region ips

        public static string GetIPAddress(HttpRequestBase request)
        {
            string ip;
            try
            {
                ip = request.ServerVariables["HTTP_X_FORWARDED_FOR"];
                if (!string.IsNullOrEmpty(ip))
                {
                    if (ip.IndexOf(",") > 0)
                    {
                        string[] ipRange = ip.Split(',');
                        int le = ipRange.Length - 1;
                        ip = ipRange[le];
                    }
                }
                else
                {
                    ip = request.UserHostAddress;
                }
            }
            catch { ip = null; }

            return ip;
        }
        //public void LoginTime(string userName, string MAC)
        //{
        //    using (var db = new DbModel())
        //    {
        //        var user = db.STAFF_ERP.Single(u => u.ID == userName);   //.find
        //        var model = new LOGIN_LOG_TABLE
        //        {
        //            STAFF_ID = user.ID,
        //            LOGIN_HOUR = System.DateTime.Now,
        //            LOGOUT_HOUR = null,
        //            MAC_ADDRESS = MAC,

        //        };
        //        db.LOGIN_LOG_TABLE.Add(model);
        //        #region TryCatch
        //        try
        //        {
        //            db.SaveChanges();
        //        }
        //        catch (System.Data.Entity.Validation.DbEntityValidationException dbEx)
        //        {
        //            Exception raise = dbEx;
        //            foreach (var validationErrors in dbEx.EntityValidationErrors)
        //            {
        //                foreach (var validationError in validationErrors.ValidationErrors)
        //                {
        //                    string message = string.Format("{0}:{1}",
        //                        validationErrors.Entry.Entity.ToString(),
        //                        validationError.ErrorMessage);
        //                    // raise a new exception nesting
        //                    // the current instance as InnerException
        //                    raise = new InvalidOperationException(message, raise);
        //                }
        //            }
        //            throw raise;
        //        }

        //        #endregion
        //    }
        //}
        //public void LogOutTime(string userId)
        //{
        //    using (var db = new DbModel())
        //    {
        //        var model = db.LOGIN_LOG_TABLE.Where(u => u.STAFF_ID == userId).OrderByDescending(u => u.ID).First();
        //        if (model != null) { 
        //         model.LOGOUT_HOUR = DateTime.UtcNow;
        //        db.SaveChanges();
        //        }
               
        //    }
        //}
        //public ActionResult IPAuthintacation(string ip, string userId)
        //{
        //    string SavedIp = db.STAFF_ERP.Single(u => u.ID == userId).MAC_ADDRESS;
        //    string Username = db.STAFF_ERP.Single(u => u.ID == userId).NAME_AR;
        //    var loginhoure = System.DateTime.Now.Hour;
        //    var logindate = System.DateTime.Now;
        //    var UnauthinticatedUserName = "";
        //    var UnauthinticatedUser = db.STAFF_ERP.Any(s => s.MAC_ADDRESS.Trim().Equals(ip));
        //    if (UnauthinticatedUser == true)
        //    {
        //        UnauthinticatedUserName = db.STAFF_ERP.Single(s => s.MAC_ADDRESS.Trim().Equals(ip)).NAME_AR;
        //    }
        //    if (SavedIp != null && !ip.Equals(SavedIp.Trim()))
        //    {
        //        var text = "تم تسجيل الدخول الى حساب المستخدم/ة " + Username + "  " + "من جهاز غير جهازه/ها " + "  : عنوان الجهاز الجديد (ip)" + "  " + ip + " / " + UnauthinticatedUserName + " " + "<br>" + "  : تم الدخول بتاريخ " + logindate + "<br>";
        //        var mesg = "الموضوع: تنبيه امان الحساب" + "<br>";
        //        mesg += "نص الرسالة:" + text + "<br>";
        //        var sub = " بلدية رام الله الالكترونية/تنبيه امان الحساب";
        //        SendEmail oo = new SendEmail();
        //        //oo.Send(sub, mesg, "gis@ramallah.ps", null, "nuha.sbeahat@gmail.com");
        //        oo.Send1(sub, mesg, "gis@ramallah.ps", null, null, true);//rimah

        //        return Json("ok", JsonRequestBehavior.AllowGet);
        //        //
        //    }
        //    else
        //    {
        //        return Json("ok", JsonRequestBehavior.AllowGet);
        //    }
        //}
        #endregion
        [AllowAnonymous]
        public ActionResult LogOut()
        {
            //LogOutTime(User.Identity.Name.UserCode());
            FormsAuthentication.SignOut();
            Session.Abandon();
            FormsAuthentication.RedirectToLoginPage();
            return RedirectToAction("Index", "Home");
        }
        [AllowAnonymous]
        public ActionResult ChangePassword(string expiryMsg, string login)
        {
            string UserId = login;
            if (string.IsNullOrEmpty(login))
            {
                UserId = User.Identity.Name.UserCode();
            }
            var m = new LoginModel
            {
                UserName = UserId
            };
            ViewBag.ExpiryMsg = expiryMsg;
            return View(m);
        }
        [HttpPost]
        public ActionResult ChangePassword(LoginModel model, string newPassword, string newAgainPassword)
        {
            if (ModelState.IsValid)
            {
                if (newPassword == newAgainPassword)
                {
                    //var db = Db.Get();
                    var login = model.UserName;//User.Identity.Name.UserCode();
                    var staff = db.STAFF_ERP.SingleOrDefault(s => s.ID == login && s.STAFF_PASSWORD == model.Password);
                    if (staff != null)
                    {
                        staff.STAFF_PASSWORD = newPassword;
                        staff.EXPIRY_DATE = DateTime.Now.Date.AddMonths(3);
                        db.STAFF_ERP.Attach(staff);
                        db.Entry(staff).State = System.Data.Entity.EntityState.Modified;
                        db.SaveChanges();

                        FormsAuthentication.SignOut();
                        Session.Abandon();
                        return RedirectToAction("Index", "Login");
                    }
                }

            }
            return View(model);
        }
        public ActionResult NoPermition()
        {
            return View();
        }
        public ActionResult NoPermitionNoajax()
        {
            return View();
        }
        public void SendNotiEmployeeAgeAbove60(string staffId)
        {
            var db = Db.Get();
            var sql =
                "SELECT E.Name_Ar FROM Employee_Herp E WHERE Extract(YEAR FROM SYSDATE)- Extract(YEAR FROM E.Birth_Date) >=60 and (Extract(month FROM SYSDATE)  - extract(month from E.Birth_Date))<=2";
            var resultSql = db.Database.SqlQuery<string>(sql).ToList();
            if (resultSql.Count() > 0)
            {
                var stringList = string.Join(",", resultSql);
                var noti = new NOTIFICATION_ERP
                {

                    NAME_AR = "الموظفون الذين يستكملون 60 عاما في شهر" + DateTime.Now.AddMonths(2) + "\t" + stringList,
                    DATE_CREATED = System.DateTime.Now,
                    FROM_STAFF = staffId,
                    TO_STAFF = staffId

                };

                db.NOTIFICATION_ERP.Add(noti);
                db.SaveChanges();
                var text1 = noti.NAME_AR;

                var msg = new Message();
                msg.SendNotification(noti.TO_STAFF, noti.ID, text1);
            }
        }
        public void SendNotiEmployeeContractEndThroughWeek(string staffId)
        {
            var db = Db.Get();
            var sql =
                "SELECT E.Name_Ar FROM Employee_Herp E WHERE E.Employment_Id=3 AND (TRUNC(SYSDATE+7)- TRUNC(E.CONTRACT_END_DATE))<=7";
            var resultSql = db.Database.SqlQuery<string>(sql).ToList();
            if (resultSql.Count() > 0)
            {
                var stringList = string.Join(",", resultSql);
                var noti = new NOTIFICATION_ERP
                {

                    NAME_AR = "الموظفون الذين تنتهي عقودهم خلال اسبوع " + "\t" + stringList,
                    DATE_CREATED = System.DateTime.Now,
                    FROM_STAFF = staffId,
                    TO_STAFF = staffId

                };

                db.NOTIFICATION_ERP.Add(noti);
                db.SaveChanges();
                var text1 = noti.NAME_AR;

                var msg = new Message();
                msg.SendNotification(noti.TO_STAFF, noti.ID, text1);
            }
        }
    }
}