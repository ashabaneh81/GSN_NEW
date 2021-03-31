using System;
using System.Collections.Generic;
using System.IO;
using System.Net.Mail;
using System.Web;
using System.Web.Mvc;
using System.Linq;
using ErpDal;
using System.Linq.Expressions;
using System.Data.Entity.Core.Objects;
using System.Net.Http;
using GSN_NEW.Models;

//using BTUtilities.Extensions;
//using PcCenter.Enums;
//
namespace GSN_NEW.Helpers
{
    public static class Helper
    {
        public static string RenderPartialViewToString(Controller thisController, string viewName, object model)
        {
            // assign the model of the controller from which this method was called to the instance of the passed controller (a new instance, by the way)
            thisController.ViewData.Model = model;

            // initialize a string builder
            using (var sw = new StringWriter())
            {
                // find and load the view or partial view, pass it through the controller factory
                var viewResult = ViewEngines.Engines.FindPartialView(thisController.ControllerContext, viewName);
                var viewContext = new ViewContext(thisController.ControllerContext, viewResult.View,
                    thisController.ViewData, thisController.TempData, sw);

                // render it
                viewResult.View.Render(viewContext, sw);

                //return the razorized view/partial-view as a string
                return sw.ToString();
            }
        }

        //public static decimal GetBudgetBalance(string unitId, decimal? prCode, decimal? fsCode, string fundType, string accountNo,DateTime dt)
        //{
        //    var db = Db.Get();
        //    var year = dt.Year;
        //    var fromDate = new DateTime(dt.Year, 1, 1);
        //    var toDate = new DateTime(dt.Year + 1, 1, 1);
        //    decimal crSum = 0, drSum = 0, balance = 0;
        //    decimal budgetAmt = 0;
        //    decimal remainedAmt = 0;
        //    decimal reservedAmt = 0, crReserved = 0, drReserved = 0;
        //    //decimal budgetFsAmt = 0;
        //    if (!String.IsNullOrEmpty(unitId))
        //    {
        //        var credit = db.TRANS.Where(t => t.TACCOUNT_NO == accountNo && t.UNIT_ID == unitId && t.TRANS_TYPE == "C" && t.TRANS_DATE>=fromDate && t.TRANS_DATE<toDate);
        //        if (credit.Any())
        //        {
        //            crSum = credit.Sum(s => s.LOCAL_AMOUNT);
        //        }
        //        var debit = db.TRANS.Where(t => t.TACCOUNT_NO == accountNo && t.UNIT_ID == unitId && t.TRANS_TYPE == "D" && t.TRANS_DATE >= fromDate && t.TRANS_DATE < toDate);
        //        if (debit.Any())
        //        {
        //            drSum = debit.Sum(s => s.LOCAL_AMOUNT);
        //        }
        //        var budget = db.UNITS_ACCOUNTS_ERP.FirstOrDefault(b => b.UNIT_ID == unitId && b.ACCOUNT_NO == accountNo && b.YEAR == year);
        //        budgetAmt = budget != null ? budget.AMOUNT : 0;
        //        var rdebit = db.TRANS_TEMP_ERP.Where(c => c.UNIT_ID == unitId && c.TACCOUNT_NO == accountNo && c.TRANS_TYPE == "D" && c.TRANS_DATE >= fromDate && c.TRANS_DATE < toDate);
        //        if (rdebit.Any()) drReserved = rdebit.Sum(s => s.LOCAL_AMOUNT ?? 0);
        //        var rcredit = db.TRANS_TEMP_ERP.Where(c => c.UNIT_ID == unitId && c.TACCOUNT_NO == accountNo && c.TRANS_TYPE == "C" && c.TRANS_DATE >= fromDate && c.TRANS_DATE < toDate);
        //        if (rcredit.Any()) crReserved = rcredit.Sum(s => s.LOCAL_AMOUNT ?? 0);
        //    }
        //    else if (prCode.HasValue)
        //    {
        //        string taccountNo = null;
        //        var obj = db.STRATEGY_MAIN_SUB_ACTIVITY_ERP.SingleOrDefault(c => c.ID == prCode);
        //        try
        //        {
        //            if (fundType == "1")//انمائية
        //            {
        //                budgetAmt = obj.BUDGET_AMT ?? 0;
        //                var fixed1 = db.FIXED_ERP.Single(x => x.NAME.ToUpper() == "Budget_acc".ToUpper());
        //                taccountNo = fixed1 != null ? fixed1.VALUE : "";

        //            }
        //            else if (fundType == "2")//تطويرية
        //            {
        //                if (obj.STRATEGY_DEVELOPMENT_ERP.Count > 0)
        //                {
        //                    budgetAmt = obj.STRATEGY_DEVELOPMENT_ERP.ToList().Sum(c => c.AMT ?? 0);
        //                }
        //                var fixed1 = db.FIXED_ERP.Single(x => x.NAME.ToUpper() == "Development_acc".ToUpper());
        //                taccountNo = fixed1 != null ? fixed1.VALUE : "";
        //            }
        //            else if (fundType == "3")
        //            {
        //                if (obj.STRATEGY_FUND_ERP.Count > 0)
        //                {
        //                    budgetAmt = obj.STRATEGY_FUND_ERP.Where(x => x.FUND_ID == fsCode).ToList().Sum(c => c.AMT ?? 0); 
        //                }
        //                budgetAmt = obj.STRATEGY_FUND_ERP.ToList().Sum(c => c.AMT ?? 0);
        //                var fixed1 = db.FIXED_ERP.Single(x => x.NAME.ToUpper() == "Funded_acc".ToUpper());
        //                taccountNo = fixed1 != null ? fixed1.VALUE : "";

        //            }
        //        }
        //        catch
        //        {
        //            budgetAmt = 0;
        //        }

        //        var rdebit = db.TRANS_TEMP_ERP.Where(c => c.PR_NEW == prCode && c.TACCOUNT_NO == taccountNo && c.TRANS_TYPE == "D" && c.TRANS_DATE >= fromDate && c.TRANS_DATE < toDate);
        //        var rcredit = db.TRANS_TEMP_ERP.Where(c => c.PR_NEW == prCode && c.TACCOUNT_NO == taccountNo && c.TRANS_TYPE == "C" && c.TRANS_DATE >= fromDate && c.TRANS_DATE < toDate);

        //        if (fsCode.HasValue)
        //        {
        //            rdebit = rdebit.Where(x => x.FS_NEW == fsCode);
        //            rcredit = rcredit.Where(x => x.FS_NEW == fsCode);
        //        }

        //        if (rdebit.Any()) drReserved = rdebit.Sum(s => s.LOCAL_AMOUNT ?? 0);
        //        if (rcredit.Any()) crReserved = rcredit.Sum(s => s.LOCAL_AMOUNT ?? 0);

        //        var debit = db.TRANS.Where(t => t.PR_NEW == prCode && t.TRANS_TYPE == "D" && t.TACCOUNT_NO == taccountNo && t.TRANS_DATE >= fromDate && t.TRANS_DATE < toDate);
        //        var credit = db.TRANS.Where(t => t.PR_NEW == prCode && t.TRANS_TYPE == "C" && t.TACCOUNT_NO == taccountNo && t.TRANS_DATE >= fromDate && t.TRANS_DATE < toDate);
        //        if (fsCode.HasValue)
        //        {
        //            debit = debit.Where(x => x.FS_NEW == fsCode);
        //            credit = credit.Where(x => x.FS_NEW == fsCode);
        //        }
        //        if (debit.Any())
        //        {
        //            drSum = debit.Sum(s => s.LOCAL_AMOUNT);
        //        }
                
        //        if (credit.Any())
        //        {
        //            crSum = credit.Sum(s => s.LOCAL_AMOUNT);
        //        }
        //    }
        //    reservedAmt = drReserved - crReserved;
        //    balance = Math.Round(drSum - crSum, 2);
        //    remainedAmt = budgetAmt - (reservedAmt + balance);
        //    return remainedAmt;
            
        //}

        public static string GetLoginUser()
        {
            return HttpContext.Current.User.Identity.Name.UserCode();
        }

        public static bool InRange(this DateTime dateToCheck, DateTime startDate, DateTime endDate)
        {
            return dateToCheck >= startDate && dateToCheck <= endDate;
        }


        public static SelectList ClockApprovalStatus
        {
            get
            {
                return new SelectList(new List<SelectListItem>
                                      {
                                          new SelectListItem {Text = "تم الموافقة", Value = "Y"},
                                          new SelectListItem {Text = "عالق", Value = "N"},
                                           new SelectListItem {Text = "تم الرفض", Value = "R"},
                                      }, "Value", "Text");
            }
        }
        //public static bool HasVoucherPermission(string login, string op, string voucherType)
        //{
        //    var db = Db.Get();
        //    bool hasPermission = false;
        //    if (op == "C")
        //    {
        //        hasPermission = db.VOUCHER_PERMISIONS_ERP.Any(x => x.STAFF_CANCEL == login && x.VOUCHER_TYPE == voucherType);
        //    }
        //    else if (op == "O")
        //    {
        //        hasPermission = db.VOUCHER_PERMISIONS_ERP.Any(x => x.STAFF_REVERSE == login && x.VOUCHER_TYPE == voucherType);
        //    }
        //    else if (op == "U")
        //    {
        //        hasPermission = db.VOUCHER_PERMISIONS_ERP.Any(x => x.STAFF_DATE_CHANGE == login && x.VOUCHER_TYPE == voucherType);
        //    }
        //    return hasPermission;
        //}

        public static string GetErrorString(Exception ex)
        {
            return ex.Message;

            #region Error Details (Commented)

            //var sb = new StringBuilder();

            ////sb.AppendLine();
            ////sb.AppendLine("\r\n============| Exception |============\r\n");
            ////sb.AppendLine();

            //if (!string.IsNullOrEmpty(ex.Message))
            //{
            //    //sb.AppendLine("\r\n===========================================\r\n");
            //    sb.AppendFormat("Message: {0}", ex.Message);
            //}

            ////if (!string.IsNullOrEmpty(ex.Source))
            ////{
            ////    //sb.AppendLine("\r\n===========================================\r\n");
            ////    sb.AppendFormat("Source: {0}", ex.Source);
            ////}

            ////if (!string.IsNullOrEmpty(ex.StackTrace))
            ////{
            ////    //sb.AppendLine("\r\n===========================================\r\n");
            ////    sb.AppendFormat("Stack Trace: {0}", ex.StackTrace);
            ////}

            ////if (ex.InnerException != null)
            ////{
            ////    //sb.AppendLine("\r\n===========================================\r\n");
            ////    sb.AppendLine("Inner Exception:");
            ////    sb.AppendLine();

            ////    if (!string.IsNullOrEmpty(ex.InnerException.Message)) sb.AppendFormat("Message: {0}", ex.InnerException.Message);

            ////    if (!string.IsNullOrEmpty(ex.InnerException.Source))
            ////    {
            ////        //sb.AppendLine("\r\n===========================================\r\n");
            ////        sb.AppendFormat("Source: {0}", ex.InnerException.Source);
            ////    }

            ////    if (!string.IsNullOrEmpty(ex.InnerException.StackTrace))
            ////    {
            ////        //sb.AppendLine("\r\n===========================================\r\n");
            ////        sb.AppendFormat("Stack Trace: {0}", ex.InnerException.StackTrace);
            ////    }
            ////}

            ////sb.AppendLine();
            ////sb.AppendLine("\r\n===========================================\r\n");
            ////sb.AppendLine();

            //return sb.ToString();

            #endregion // Error Details (Commented)
        }
        
       public static bool HasFcRate(string curn)
       {
           if (curn == "NIS") return true;
           var db = Db.Get();
           var currentdt = DateTime.Now.Date;
            var maxDate = db.CURN_RATES.Where(c => c.CURN_CODE == curn).Max(m => m.UDATE);
            if (maxDate == null) return false;
            return (((DateTime)maxDate).Date >= currentdt);
       }

        public static bool IsEditableVoucher(decimal voucherNo, string voucherType)
        {
            var db = Db.Get();
            bool editable = true;
            string status = "";
            var login = HttpContext.Current.User.Identity.Name.UserCode();
            switch (voucherType)
            {
                case "CR":
                    var cr = db.CRNOTES_MAS_ERP.SingleOrDefault(a => a.ID == voucherNo);
                    status = cr.STATUS;
                    if (status == "P" || status == "C" || status == "O") editable = false;
                    
                    break;
                case "DR":
                   var dr = db.DRNOTES_MAS_ERP.SingleOrDefault(a => a.ID == voucherNo);
                   status = dr.STATUS;
                   if (status == "P" || status == "C" || status == "O") editable = false;
                    break;
                case "R":
                    var r = db.RCVC_ERP.SingleOrDefault(a => a.ID == voucherNo);
                   status = r.STATUS;
                   if (status == "P" || status == "C" || status == "O") editable = false;
                    break;
                case "P":
                    var p = db.PYVC_ERP.SingleOrDefault(a => a.ID == voucherNo);
                   status = p.STATUS;
                   if (status == "P" || status == "C" || status == "O") editable = false;
                    break;
                case "I":
                   var i = db.ILTIZAM.SingleOrDefault(a => a.ILTIZAM_NO == voucherNo);
                   status = i.STATUS;
                   if (status == "P" || status == "C" || status == "O") editable = false;
                    break;
                case "DP":
                    var dp = db.DEPOSIT_BANK_ERP.SingleOrDefault(a => a.ID == voucherNo);
                   status = dp.STATUS;
                   if (status == "P" || status == "C" || status == "O") editable = false;
                    break;
                case "J":
                    var j = db.JOURNAL.SingleOrDefault(a => a.JOURNAL_NO == voucherNo);
                   status = j.STATUS;
                   if (status == "P" || status == "C" || status == "O") editable = false;
                    break;
            }
            return editable;
        }

        //public static decimal GetDeservedVacBalance(decimal empId, decimal vacTypeId)
        //{
        //    var db = Db.Get();
        //    //DateTime firtsDay = new DateTime(DateTime.Now.Year, 1, 1);
        //    //DateTime toDate = new DateTime(DateTime.Now.Year, 12, 31);
        //    //var days = (DateTime.Now.Date - firtsDay).Days;
        //    //decimal fraction = Math.Round((decimal)days / (decimal)365, 2);
        //    //var deserved = db.TRANS_VACATIONS_HERP.Where(x => x.EMPLOYEE_ID == empId && x.VACATION_TYPE_ID == vacTypeId
        //    //                                             && EntityFunctions.TruncateTime(x.FROM_DATE) >= firtsDay && EntityFunctions.TruncateTime(x.FROM_DATE) <= toDate)
        //    //                 .Sum(x => (x.TRANS_TYPE == "D" ? (x.TRANS_CODE == "D" ? (x.NO_OF_DAYS??0) * fraction : (x.NO_OF_DAYS??0)) : (-1 * (x.NO_OF_DAYS??0))));
        //    //return Math.Round(deserved, 2);
        //    var vacs = db.VACATION_BALANCE_VW.Where(x => x.EMPLOYEE_ID == empId && x.VACATION_TYPE_ID == vacTypeId).FirstOrDefault();
        //    if (vacs != null)
        //    {
        //        if (vacTypeId == 1)
        //            return vacs.DATE_RESERVED ?? 0;
        //        else
        //            return vacs.BALANCE??0;
        //    }
        //    return 0;
        //}

        //public static int GetVacationDays(DateTime s, DateTime e)
        //{
        //    var totalDays = ((int)(e - s).Days) + 1;
        //    var db = Db.Get();
        //    var holidays = db.HOLIDAYS_HERP.Where(x => x.FROM_DATE.Year == DateTime.Now.Year);
        //    var overlapDays = 0;
        //    foreach (var h in holidays)
        //    {
        //        if (s.Date <= h.TO_DATE.Date && e.Date >= h.FROM_DATE.Date)
        //        {
        //            var fromDate = s.Date >= h.FROM_DATE.Date ? s.Date : h.FROM_DATE.Date;
        //            var endDate = e.Date <= h.TO_DATE.Date ? e.Date : h.TO_DATE.Date;
        //            overlapDays += (int)(endDate - fromDate).Days + 1;
        //        }
        //    }
        //        return (totalDays - overlapDays);
        //}
        //private static decimal? GetEmpEvalTemplate(EMPLOYEE_HERP emp, DbModel db)
        //{
        //    var EvalId = emp.POSITION_HERP.EVAL_ID;
        //    if (emp.EVAL_ID.HasValue)
        //    {
        //        EvalId = (decimal)emp.EVAL_ID;
        //    }

        //    return EvalId;
        //}

        //public static string GetEvaluationEmployee(EMPLOYEE_HERP emp, decimal? currSetupId, EVAL_TEMPLATE_MAS_HERP temp, decimal maxId,DbModel db,decimal?periodId)
        //{
        //    var empId = emp.ID;
        //    var staff = emp.STAFF_ERP.FirstOrDefault();
        //    var staffId = staff != null ? staff.ID : null;
        //    var outParam = new ObjectParameter("P_MANAGER", typeof(string));
        //    var templateId = GetEmpEvalTemplate(emp, db);
        //    if (templateId == null)
        //    {
        //        return string.Empty;
        //    }
        //    var wfEvalSetup = temp.EVAL_WF_SETUP_HERP;
        //    if (!currSetupId.HasValue)
        //    {
        //        currSetupId = wfEvalSetup.Min(m => m.ID);
        //    }
        //    while (currSetupId <= maxId)
        //    {
        //        var procName = wfEvalSetup.SingleOrDefault(x => x.ID == currSetupId).HR_FUNCTION_PERP.SQL_QUERY;
        //        switch (procName.ToUpper())
        //        {
        //            case "GET_SUPERVISOR":
        //                var supervisor = emp.SUPERVISOR;
        //                var supervisorLogin = db.STAFF_ERP.SingleOrDefault(s => s.EMPLOYEE_CODE == supervisor);
        //                if (supervisor == empId || supervisorLogin == null)
        //                {
        //                    ++currSetupId;
        //                    continue;
        //                }
        //                return supervisorLogin.ID;

        //            case "GET_UNIT_MANAGER":
        //                var unitManager = emp.UNITS_ERP != null ? emp.UNITS_ERP.MANAGER_ID : null;
        //                if (unitManager == null || unitManager == staffId)
        //                {
        //                    ++currSetupId;
        //                    continue;
        //                }
        //                return unitManager;

        //            case "GET_SECTION_MANAGER":
        //                var sectionManager = emp.SECTIONS_ERP != null ? emp.SECTIONS_ERP.MANAGER_ID : null;
        //                if (periodId.HasValue && periodId == 3)
        //                {
        //                    if (sectionManager == "200002")
        //                    {
        //                        sectionManager = "100006";
        //                    }
        //                }
        //                    if (sectionManager == null || sectionManager == staffId)
        //                {
        //                    ++currSetupId;
        //                    continue;
        //                }
        //                return sectionManager;

        //            case "GET_DEPARTMENT_MANAGER":
        //                var deptManager = emp.DEPT_ERP != null ? emp.DEPT_ERP.MANAGER_ID : null;
        //                if (periodId.HasValue && periodId == 3)
        //                {
        //                    if (deptManager == "700001")
        //                    {
        //                        deptManager = "300028";
        //                    }
        //                    if (deptManager == "400054")
        //                    {
        //                        deptManager = "300004";
        //                    }
        //                    if (deptManager == "800000")
        //                    {
        //                        deptManager = "100013";
        //                    }
        //                }
        //                if (deptManager == null || deptManager == staffId)
        //                {
        //                    ++currSetupId;
        //                    continue;
        //                }                      
                        
        //                return deptManager;
        //            case "GET_MUNICIPALITY_MANAGER":
        //                db.GET_MUNICIPALITY_MANAGER(outParam);
        //                if (outParam.Value.GetType() == typeof(DBNull) || outParam.Value.ToString() == staffId)
        //                {
        //                    ++currSetupId;
        //                    continue;
        //                }
        //                var managerStr = outParam.Value.ToString();
        //                return managerStr;
        //            case "GET_MAYOR":
        //                db.GET_MAYOR(outParam);
        //                if (outParam.Value.GetType() == typeof(DBNull) || outParam.Value.ToString() == staffId)
        //                {
        //                    ++currSetupId;
        //                    continue;
        //                }
        //                var mayorStr = outParam.Value.ToString();
        //                return mayorStr;
        //        }
        //    }
        //    return null;
        //}

        public static Boolean IsValidFile(HttpPostedFileBase LOB_FILE)
        {
            if (LOB_FILE != null)
            {
                if (LOB_FILE.ContentLength <= 15 * 1024 * 1024)
                {
                    string[] formats = new string[] { ".jpg", ".png", ".gif", ".jpeg", ".pdf", ".doc", ".docx",".txt",".zip",".xls",".xlsx" };
                    return formats.Any(item => LOB_FILE.FileName.EndsWith(item, StringComparison.OrdinalIgnoreCase));
                }
            }
            return false;
        }


        public static bool IsEmailValid(string email)
        {
            try
            {
                var m = new MailAddress(email);
                return true;
            }
            catch (FormatException)
            {
                return false;
            }
        }

    

        public static string GetDateRanges()
        {
            var today = string.Format("{0}|{1}",
                DateTime.Now.Date.ToString("yyyy-MM-dd"),
                DateTime.Now.Date.ToString("yyyy-MM-dd"));

            var yesterday = string.Format("{0}|{1}",
                DateTime.Now.Date.AddDays(-1).ToString("yyyy-MM-dd"),
                DateTime.Now.Date.AddDays(-1).ToString("yyyy-MM-dd"));

            var lastSevenDays = string.Format("{0}|{1}",
                DateTime.Now.Date.AddDays(-7).ToString("yyyy-MM-dd"),
                DateTime.Now.Date.ToString("yyyy-MM-dd"));

            var lastThirtyDays = string.Format("{0}|{1}",
                DateTime.Now.Date.AddDays(-30).ToString("yyyy-MM-dd"),
                DateTime.Now.Date.ToString("yyyy-MM-dd"));

            var thisMonth = string.Format("{0}|{1}",
                new DateTime(DateTime.Now.Year, DateTime.Now.Month, 1).ToString("yyyy-MM-dd"),
                new DateTime(DateTime.Now.Year, DateTime.Now.Month, 1).AddMonths(1).AddDays(-1).ToString("yyyy-MM-dd"));

            string lastMonth;
            if (DateTime.Now.Month == 1)
                lastMonth = string.Format("{0}|{1}",
                    new DateTime(DateTime.Now.Year - 1, 12, 1).ToString("yyyy-MM-dd"),
                    new DateTime(DateTime.Now.Year - 1, 12, 1).AddMonths(1).AddDays(-1).ToString("yyyy-MM-dd"));
            else
                lastMonth = string.Format("{0}|{1}",
                    new DateTime(DateTime.Now.Year, DateTime.Now.Month - 1, 1).ToString("yyyy-MM-dd"),
                    new DateTime(DateTime.Now.Year, DateTime.Now.Month - 1, 1).AddMonths(1)
                        .AddDays(-1)
                        .ToString("yyyy-MM-dd"));


            return string.Format("{0}+{1}+{2}+{3}+{4}+{5}",
                today,
                yesterday,
                lastSevenDays,
                lastThirtyDays,
                thisMonth,
                lastMonth
                );
        }

        public static User Parse(string name)
        {
            return User.Parse(name);
        }

        public static SelectList APSelect
        {
            get
            {
                return new SelectList(new List<SelectListItem>
                                      {
                                          new SelectListItem {Text = "مبلغ ثابت", Value = "A"},
                                          new SelectListItem {Text = "يدوي", Value = "M"},
                                          new SelectListItem {Text = "نسبة من ", Value = "P"},
                                      }, "Value", "Text");
            }
        }
        public static SelectList BussTypesSelect
        {
            get
            {
                return new SelectList(new List<SelectListItem>
                                      {
                                          new SelectListItem {Text = "دخول", Value = "I"},
                                          new SelectListItem {Text = "خروج", Value = "O"},
                                      }, "Value", "Text");
            }
        }

        public static SelectList BussPaymntMethod    //الرقابة والتفتيش 
        {
            get
            {
                return new SelectList(new List<SelectListItem>
                                      {
                                          new SelectListItem {Text = "نقدي", Value = "C"},
                                          new SelectListItem {Text = "ذمة", Value = "S"},
                                           new SelectListItem {Text = "مجاني", Value = "F"},
                                      }, "Value", "Text");
            }
        }
        public static SelectList BussSizeTypesSelect
        {
            get
            {
                return new SelectList(new List<SelectListItem>
                                      {
                                          new SelectListItem {Text = "كبير", Value = "L"},
                                          new SelectListItem {Text = "صغير", Value = "S"},
                                      }, "Value", "Text");
            }
        }
        public static SelectList FundType {
            get {
                return new SelectList(new List<SelectListItem>
                                      {
                                          new SelectListItem {Text = "انمائية", Value = "1"},
                                          new SelectListItem {Text = "تطويرية", Value = "2"},
                                          new SelectListItem {Text = "تمويلية", Value = "3"},
                                      }, "Value", "Text");
            }
        }

        public static SelectList TransType
        {
            get
            {
                return new SelectList(new List<SelectListItem>
                                      {
                                          new SelectListItem {Text = "مدين", Value = "D"},
                                          new SelectListItem {Text = "دائن", Value = "C"},
                                      }, "Value", "Text");
            }
        }

        public static SelectList TransCalcMethod
        {
            get
            {
                return new SelectList(new List<SelectListItem>
                                      {
                                          new SelectListItem {Text = "مبلغ ثابت", Value = "A"},
                                          new SelectListItem {Text = "نسبة من ", Value = "P"},
                                      }, "Value", "Text");
            }
        }
        public static SelectList ClockStatusBitunia    //الرقابة والتفتيش 
        {
            get
            {
                return new SelectList(new List<SelectListItem>
                                      {
                                          new SelectListItem {Text = "حضور", Value = "A001"},
                                          new SelectListItem {Text = "انصراف", Value = "B002"},
                                             new SelectListItem {Text = "بدايه مغادره خاصه", Value = "C003"},
                                                new SelectListItem {Text = "نهاية مغادرة خاص", Value = "D004"},
                                                   new SelectListItem {Text = "بدايه مغادره رسميه", Value = "E005"},
                                                      new SelectListItem {Text = "نهايه مغادره رسميه", Value = "F006"},
                                      }, "Value", "Text");
            }
        }
        public static SelectList ClockStatuslahem    //الرقابة والتفتيش 
        {
            get
            {
                return new SelectList(new List<SelectListItem>
                                      {
                                          new SelectListItem {Text = "In", Value = "I"},
                                          new SelectListItem {Text = "Out", Value = "O"},
                                             new SelectListItem {Text = " Out", Value = "0"},
                                                new SelectListItem {Text = " Out back", Value = "1"},
                                                   new SelectListItem {Text = "  Over Time In", Value = "i"},
                                                      new SelectListItem {Text = "  Over Time Out", Value = "o"},

                                      }, "Value", "Text");
            }
        }
        public static SelectList YearSelect
        {
            get
            {
                return new SelectList(new List<SelectListItem>
                                      {
                                          new SelectListItem {Text = "2000", Value = "2000"},
                                          new SelectListItem {Text = "2001", Value = "2001"},
                                          new SelectListItem {Text = "2002 ", Value = "2002"},
                                          new SelectListItem {Text = "2003 ", Value = "2003"},
                                          new SelectListItem {Text = "2004 ", Value = "2004"},
                                          new SelectListItem {Text = "2005 ", Value = "2005"},
                                          new SelectListItem {Text = "2006 ", Value = "2006"},
                                          new SelectListItem {Text = "2007 ", Value = "2007"},
                                          new SelectListItem {Text = "2008 ", Value = "2008"},
                                          new SelectListItem {Text = "2009 ", Value = "2009"},
                                          new SelectListItem {Text = "2010 ", Value = "2010"},
                                          new SelectListItem {Text = "2011 ", Value = "2011"},
                                          new SelectListItem {Text = "2012 ", Value = "2012"},
                                          new SelectListItem {Text = "2013 ", Value = "2013"},
                                          new SelectListItem {Text = "2014 ", Value = "2014"},
                                          new SelectListItem {Text = "2015 ", Value = "2015"},
                                          new SelectListItem {Text = "2016 ", Value = "2016"},
                                          new SelectListItem {Text = "2017 ", Value = "2017"},
                                          new SelectListItem {Text = "2018 ", Value = "2018"},
                                          new SelectListItem {Text = "2019 ", Value = "2019"},
                                          new SelectListItem {Text = "2020 ", Value = "2020"},
                                          new SelectListItem {Text = "2021 ", Value = "2021"},
                                          new SelectListItem {Text = "2022 ", Value = "2022"},
                                          new SelectListItem {Text = "2023 ", Value = "2023"},
                                          new SelectListItem {Text = "2024 ", Value = "2024"},
                                          new SelectListItem {Text = "2025 ", Value = "2025"},
                                          new SelectListItem {Text = "2026 ", Value = "2026"},
                                          new SelectListItem {Text = "2027 ", Value = "2002"},
                                          new SelectListItem {Text = "2028 ", Value = "2028"},
                                          new SelectListItem {Text = "2029 ", Value = "2029"},
                                          new SelectListItem {Text = "2030 ", Value = "2030"},
                                          new SelectListItem {Text = "2031 ", Value = "2031"},
                                          new SelectListItem {Text = "2032 ", Value = "2032"},
                                          new SelectListItem {Text = "2033 ", Value = "2033"},
                                          new SelectListItem {Text = "2034 ", Value = "2034"},
                                          new SelectListItem {Text = "2035 ", Value = "2035"},
                                          new SelectListItem {Text = "2036 ", Value = "2036"},
                                          new SelectListItem {Text = "2037 ", Value = "2037"},
                                          new SelectListItem {Text = "2038 ", Value = "2038"},
                                      }, "Value", "Text");
            }
        }

        public static SelectList MonthSelect
        {
            get
            {
                return new SelectList(new List<SelectListItem>
                                      {
                                         new SelectListItem {Text = "1", Value = "1"},
                                          new SelectListItem {Text = "2", Value = "2"},
                                          new SelectListItem {Text = "3 ", Value = "3"},
                                          new SelectListItem {Text = "4 ", Value = "4"},
                                          new SelectListItem {Text = "5 ", Value = "5"},
                                          new SelectListItem {Text = "6 ", Value = "6"},
                                          new SelectListItem {Text = "7 ", Value = "7"},
                                          new SelectListItem {Text = "8 ", Value = "8"},
                                          new SelectListItem {Text = "9 ", Value = "9"},
                                          new SelectListItem {Text = "10 ", Value = "10"},
                                          new SelectListItem {Text = "11 ", Value = "11"},
                                          new SelectListItem {Text = "12 ", Value = "12"}, 
                                      }, "Value", "Text");
            }
        }
   

        public static SelectList IsProject
        {
            get
            {
                return new SelectList(new List<SelectListItem>
                                      {
                                          new SelectListItem {Text = "مشروع", Value = "Y"},
                                          new SelectListItem {Text = "موازنة تشغيلية", Value = "N"},
                                      }, "Value", "Text");
            }
        }

        public static SelectList PaymentMethodPYVC
        {
            get
            {
                return new SelectList(new List<SelectListItem>
                                      {
                                          new SelectListItem {Text = "نقدي", Value = "C"},
                                          new SelectListItem {Text = "شيك", Value = "CH"},
                                           new SelectListItem {Text = "حوالة بنكية", Value = "T"},
                                            new SelectListItem {Text = "فيزا", Value = "V"}
                                      }, "Value", "Text");
            }
        }

        public static SelectList BudgetYearStatus
        {
            get
            {
                return new SelectList(new List<SelectListItem>
                                      {
                                          new SelectListItem {Text = "قيد العمل", Value = "N"},
                                          new SelectListItem {Text = "معتمد", Value = "Y"},
                                      }, "Value", "Text");
            }
        }


        public static SelectList VoutcherType
        {
            get
            {
                return new SelectList(new List<SelectListItem>
                                      {
                                          new SelectListItem {Text = "غير محول", Value = "N"},
                                          new SelectListItem {Text = "قيد العمل", Value = "F"},
                                           new SelectListItem {Text = "مرحل", Value = "P"},
                                            new SelectListItem {Text = "ملغي", Value = "C"},
                                            new SelectListItem {Text = "معكوس", Value = "O"}
                                      }, "Value", "Text");
            }
        }

        public static SelectList AreaWasteType
        {
            get
            {
                return new SelectList(new List<SelectListItem>
                                      {
                                          new SelectListItem {Text = "على المساحة", Value = "A"},
                                          new SelectListItem {Text = "مبلغ", Value = "M"},
                                      }, "Value", "Text");
            }
        }


        public static SelectList SelectedService
        {
            get
            {
                return new SelectList(new List<SelectListItem>
                                      {
                                          new SelectListItem {Text = "خدمة مرفق ", Value = "FAS"},
                                           new SelectListItem {Text = "خدمة طابق ", Value = "FLS"},
                                          new SelectListItem {Text = "خدمة غرف", Value = "ROS"},
                                      }, "Value", "Text");
            }
        }

        public static SelectList RESPONSEStatus
        {
            get
            {
                return new SelectList(new List<SelectListItem>
                                      {
                                          new SelectListItem {Text = "مقبول", Value = "A"},
                                          new SelectListItem {Text = " مرفوض", Value = "R"},
                                      }, "Value", "Text");
            }
        }
        public static SelectList OnWhatSelect
        {
            get
            {
                return new SelectList(new List<SelectListItem>
                                      {
                                          new SelectListItem {Text = "الراتب الأساسي", Value = "B"},
                                          new SelectListItem {Text = " الراتب الاجمالي 1", Value = "G1"}
                                      }, "Value", "Text");
            }
        }

        public static SelectList MonthlyTrans
        {
            get
            {
                return new SelectList(new List<SelectListItem>
                                      {
                                          new SelectListItem {Text = "اضافة", Value = "+"},
                                          new SelectListItem {Text = "خصم", Value = "-"},
                                      }, "Value", "Text");
            }
        }



        public static SelectList TrainingCancelDelete
        {
            get
            {
                return new SelectList(new List<SelectListItem>
                                      {
                                          new SelectListItem {Text = "حذف من القائمة", Value = "C"},
                                          new SelectListItem {Text = "تراجع عن الحذف", Value = "U"},
                                      }, "Value", "Text");
            }
        }

        public static SelectList VacStatus
        {
            get
            {
                return new SelectList(new List<SelectListItem>
                                      {
                                          new SelectListItem {Text = "في الانتظار", Value = "I"},
                                          new SelectListItem {Text = "موافق", Value = "F"},
                                           new SelectListItem {Text = "مرفوضة", Value = "R"},
                                            new SelectListItem {Text = "تمت الموافقة", Value = "A"}
                                      }, "Value", "Text");
            }
        }

        public static SelectList AdvStatus
        {
            get
            {
                return new SelectList(new List<SelectListItem>
                                      {
                                          new SelectListItem {Text = "في الانتظار", Value = "I"},
                                          new SelectListItem {Text = "محولة", Value = "F"},
                                           new SelectListItem {Text = "مرفوضة", Value = "R"},
                                            new SelectListItem {Text = "تمت الموافقة", Value = "A"}
                                      }, "Value", "Text");
            }
        }

        public static SelectList QuestionType
        {
            get
            {
                return new SelectList(new List<SelectListItem>
                                      {
                                          new SelectListItem {Text = "توصيفي", Value = "D"},
                                          new SelectListItem {Text = "نعم/لا", Value = "Y"},
                                           new SelectListItem {Text = "تقييمي", Value = "R"}
                                      }, "Value", "Text");
            }
        }

        //public static SelectList DepstMethod
        //{
        //    get
        //    {
        //        return new SelectList(new List<SelectListItem>
        //                              {
        //                                  new SelectListItem {Text = "نقدي", Value = "C"},
        //                                  new SelectListItem {Text = "شك", Value = "CH"},
        //                                   new SelectListItem {Text = "حوالة", Value = "T"}
        //                              }, "Value", "Text");
        //    }
        //}
        public static SelectList VacPosted
        {
            get
            {
                return new SelectList(new List<SelectListItem>
                                      {
                                          new SelectListItem {Text = "لم يتم الخصم من رصيد الاجازات", Value = "N"},
                                          new SelectListItem {Text = "تم الخصم من رصيد الاجازات", Value = "Y"}
                                      }, "Value", "Text");
            }
        }

        public static SelectList PurMassStatus
        {
            get
            {
                return new SelectList(new List<SelectListItem>
                                      {
                                          new SelectListItem {Text = " محولة", Value = "Y"},
                                          new SelectListItem {Text = "غير محولة", Value = "N"},
                                      }, "Value", "Text");
            }
        }


        public static SelectList YesNoSelect
        {
            get
            {
                return new SelectList(new List<SelectListItem>
                                      {
                                          new SelectListItem {Text = "نعم", Value = "Y"},
                                          new SelectListItem {Text = "لا", Value = "N"},
                                      }, "Value", "Text");
            }
        }
        public static SelectList EmployeeJawalTypes
        {
            get
            {
                return new SelectList(new List<SelectListItem>
                                      {
                                          new SelectListItem {Text = "جوال", Value = "J"},
                                          new SelectListItem {Text = "وطنية", Value = "W"},
                                      }, "Value", "Text");
            }
        }

        public static SelectList EmployeeJawalSimTypes
        {
            get
            {
                return new SelectList(new List<SelectListItem>
                                      {
                                          new SelectListItem {Text = "مكالمات", Value = "C"},
                                          new SelectListItem {Text = "بيانات", Value = "D"},
                                           new SelectListItem {Text = "FLEET", Value = "F"},
                                      }, "Value", "Text");
            }
        }
        public static SelectList Title
        {
            get
            {
                return new SelectList(new List<SelectListItem>
                                      {
                                          new SelectListItem {Text = "المحترم", Value = "M"},
                                          new SelectListItem {Text = "المحترمة", Value = "F"},
                                      }, "Value", "Text");
            }
        }

        public static SelectList ResvType    // اداره المرافق 
        {
            get
            {
                return new SelectList(new List<SelectListItem>
                                      {
                                          new SelectListItem {Text = "ساعة", Value = "H"},
                                          new SelectListItem {Text = "يوم", Value = "D"},
                                      }, "Value", "Text");
            }
        }

        public static SelectList IsPreviusOwnerAppartment
        {
            get
            {
                return new SelectList(new List<SelectListItem>
                                      {
                                          new SelectListItem {Text = "سابق", Value = "Y"},
                                          new SelectListItem {Text = "حالي", Value = "N"},
                                      }, "Value", "Text");
            }
        }


        public static SelectList REPETATIVETax
        {
            get
            {
                return new SelectList(new List<SelectListItem>
                                      {
                                          new SelectListItem {Text = "دوري", Value = "1"},
                                          new SelectListItem {Text = "غير دوري", Value = "2"},
                                            new SelectListItem {Text = "تأمينات", Value = "3"}
                                      }, "Value", "Text");
            }
        }

        public static SelectList SessionTypeSelect
        {
            get
            {
                return new SelectList(new List<SelectListItem>
                                      {
                                          new SelectListItem {Text = "مجلس", Value = "M"},
                                          new SelectListItem {Text = "لجنة", Value = "L"},
                                          new SelectListItem {Text = "لجان اخرى", Value = "O"},
                                          new SelectListItem {Text = "شخصي", Value = "P"}
                                      }, "Value", "Text");
            }
        }

        public static SelectList BiddingPaymentType
        {
            get
            {
                return new SelectList(new List<SelectListItem>
                                      {
                                          new SelectListItem {Text = "نقدي", Value = "C"},
                                          new SelectListItem {Text = "بطاقة فيزا", Value = "V"},
                                      }, "Value", "Text");
            }
        }
        public static SelectList ChequePaymentType
        {
            get
            {
                return new SelectList(new List<SelectListItem>
                                      {
                                          new SelectListItem {Text = "شيك", Value = "B"},
                                          new SelectListItem {Text = "حوالة", Value = "T"},
                                          new SelectListItem {Text = "بطاقة", Value = "V"}
                                      }, "Value", "Text");
            }
        }
        public static SelectList EvalRecommevdation
        {
            get
            {
                return new SelectList(new List<SelectListItem>
                                      {
                                          new SelectListItem {Text = "اجراء تأديبي", Value = "D"},
                                          new SelectListItem {Text = "شكر", Value = "T"},
                                          new SelectListItem {Text = "انهاء خدمات", Value = "E"},
                                          new SelectListItem {Text = "ترقية", Value = "P"},
                                          new SelectListItem {Text = "مكافأة", Value = "R"},
                                          new SelectListItem {Text = "نقل", Value = "M"},
                                          new SelectListItem {Text = "تغيير درجة", Value = "G"}
                                      }, "Value", "Text");
            }
        }

        public static SelectList BiidingType
        {
            get
            {
                return new SelectList(new List<SelectListItem>
                                      {
                                          new SelectListItem {Text = "مالي", Value = "F"},
                                          new SelectListItem {Text = "فني", Value = "T"},
                                           new SelectListItem {Text = "معا", Value = "B"},
                                      }, "Value", "Text");
            }
        }

        public static SelectList Gender
        {
            get
            {
                return new SelectList(new List<SelectListItem>
                                      {
                                          new SelectListItem {Text = "ذكر", Value = "M"},
                                          new SelectListItem {Text = "أنثى", Value = "F"},
                                      }, "Value", "Text");
            }
        }
        public static SelectList VacancyStatus
        {
            get
            {
                return new SelectList(new List<SelectListItem>
                                      {
                                          new SelectListItem {Text = "مفتوح", Value = "O"},
                                          new SelectListItem {Text = "مغلق", Value = "C"},
                                      }, "Value", "Text");
            }
        }




        public static SelectList VehiclesTypesBussStation
        {
            get
            {
                return new SelectList(new List<SelectListItem>
                                      {
                                          new SelectListItem {Text = "باص", Value = "B"},
                                          new SelectListItem {Text = "فان", Value = "V"},
                                           new SelectListItem {Text = "سياره خاصة", Value = "P"},
                                          
                                      }, "Value", "Text");
            }
        }
        public static SelectList VanRatesTypesSelect
        {
            get
            {
                return new SelectList(new List<SelectListItem>
                                      {
                                          new SelectListItem {Text = "بحسب عدد الركاب", Value = "N"},
                                          new SelectListItem {Text = "ثابت", Value = "F"},
                                      }, "Value", "Text");
            }
        }

        //nuha  

        public static SelectList ControllerNameSeha    // المساكن 
        {
            get
            {
                return new SelectList(new List<SelectListItem>
                                      {
                                          new SelectListItem {Text = "اخطار مكرهة صحية", Value = "I"},
                                          new SelectListItem {Text = "تنبيه", Value = "T"},
                                            new SelectListItem {Text = "  ضبط ومصادرة", Value = "M"},
                                               new SelectListItem {Text = "بسطات وازالة عوالق", Value = "B"},
                                               new SelectListItem {Text = "ازاله طمم", Value = "IZ"},
                                                new SelectListItem {Text = "اتلاف", Value = "IT"},
                                      }, "Value", "Text");
            }
        }

        public static SelectList WeakDay   //{ "SAT", "SUN", "MON", "TUE", "WED", "THU", "FRI" };
        {
            get
            {
                return new SelectList(new List<SelectListItem>
                                      {
                                          new SelectListItem {Text = "SAT", Value = "1"},
                                          new SelectListItem {Text = "SUN", Value = "2"},
                                            new SelectListItem {Text = "MON", Value = "3"},
                                             new SelectListItem {Text = "TUE", Value = "4"},
                                              new SelectListItem {Text = "WED", Value = "5"},
                                                 new SelectListItem {Text = "THU", Value = "6"},
                                                   new SelectListItem {Text = "FRI", Value = "7"},
                                      }, "Value", "Text");
            }
        }
        public static SelectList DocumntStatus    //الرقابة والتفتيش 
        {
            get
            {
                return new SelectList(new List<SelectListItem>
                                      {
                                          new SelectListItem {Text = "ممتاز", Value = "1"},
                                          new SelectListItem {Text = "جيد جدا", Value = "2"},
                                           new SelectListItem {Text = "جيد ", Value = "3"},
                                          new SelectListItem {Text = "مقبول ", Value = "4"},
                                           new SelectListItem {Text = "ضعيف", Value = "5"},

                                      }, "Value", "Text");
            }
        }
        public static SelectList action_status_For_SakanLog    // المساكن 
        {
            get
            {
                return new SelectList(new List<SelectListItem>
                                      {
                                          new SelectListItem {Text = "تعديل", Value = "U"},
                                          new SelectListItem {Text = "حذف", Value = "D"},
                                            new SelectListItem {Text = "تراجع عن حذف", Value = "N"},
                                               new SelectListItem {Text = "  اضافة", Value = "A"},
                                      }, "Value", "Text");
            }
        }

        public static SelectList ClockStatus    //الرقابة والتفتيش 
        {
            get
            {
                return new SelectList(new List<SelectListItem>
                                      {
                                          new SelectListItem {Text = "حضور", Value = "01"},
                                          new SelectListItem {Text = "انصراف", Value = "02"},
                                             new SelectListItem {Text = "بدايه مغادره خاصه", Value = "03"},
                                                new SelectListItem {Text = "نهاية مغادرة خاص", Value = "04"},
                                                   new SelectListItem {Text = "بدايه مغادره رسميه", Value = "05"},
                                                      new SelectListItem {Text = "نهايه مغادره رسميه", Value = "06"},

                                      }, "Value", "Text");
            }
        }
        
        public static SelectList RelatedTo    //الرقابة والتفتيش 
        {
            get
            {
                return new SelectList(new List<SelectListItem>
                                      {
                                          new SelectListItem {Text = "الحرف", Value = "C"},
                                          new SelectListItem {Text = "الأبنية", Value = "B"},
                                      }, "Value", "Text");
            }
        }

        public static SelectList Procedure    //الرقابة والتفتيش
        {
            get
            {
                return new SelectList(new List<SelectListItem>
                                      {
                                          new SelectListItem {Text = "محكمة", Value = "J"},
                                          new SelectListItem {Text = "رسوم", Value = "B"},
                                      }, "Value", "Text");
            }
        }

        public static SelectList Department
        {
            get
            {
                return new SelectList(new List<SelectListItem>
                                      {
                                          new SelectListItem {Text = "دائرة الصحة والبيئة ", Value = "H"},
                                          new SelectListItem {Text = "دائرة الهندسة", Value = "E"},
                                            new SelectListItem {Text = "دائرة الحرف والصناعات", Value = "C"},
                                      }, "Value", "Text");
            }
        }

        public static SelectList Pstatuse
        {
            get
            {
                return new SelectList(new List<SelectListItem>
                                      {
                                          new SelectListItem {Text = " استدراج", Value = "1"},
                                          new SelectListItem {Text = "تحليل", Value = "2"},
                                            new SelectListItem {Text = " احالة ", Value = "3"},
                                      }, "Value", "Text");
            }
        }
       
        public static SelectList TaxEducationSelect
        {
            get
            {
                return new SelectList(new List<SelectListItem>
                                      {
                                          new SelectListItem {Text = "المالك", Value = "O"},
                                          new SelectListItem {Text = "المستفيد ", Value = "U"},
                                      }, "Value", "Text");
            }
        }

        public static SelectList ExcutionType
        {
            get
            {
                return new SelectList(new List<SelectListItem>
                                      {
                                          new SelectListItem {Text = "شريك خارجي ", Value = "S"},
                                          new SelectListItem {Text = "فريق داخلي ", Value = "I"},
                                            new SelectListItem {Text = "غير ذلك", Value = "O"},
                                      }, "Value", "Text");
            }
        }
        public static SelectList IS_COMPLETEDSelect
        {
            get
            {
                return new SelectList(new List<SelectListItem>
                                      {
                                          new SelectListItem {Text = "نعم", Value = "Y"},
                                          new SelectListItem {Text = "لا", Value = "N"},
                                          new SelectListItem {Text = "لا ينطبق", Value = "D"},
                                      }, "Value", "Text");
            }
        }

        /////////
        public static SelectList InsuranceType
        {
            get
            {
                return new SelectList(new List<SelectListItem>
                                      {
                                          new SelectListItem {Text = "حكومي", Value = "G"},
                                          new SelectListItem {Text = "خاص", Value = "S"},
                                          
                                      }, "Value", "Text");
            }
        }
        //nuha

        //public static decimal GetVacBalance(decimal empId)
        //{
        //    //var db = Db.Get();
        //    //var fromYear = new DateTime(DateTime.Now.Year,1,1);
        //    //var toYear = new DateTime(DateTime.Now.Year,12,31);
        //    //var vacId = db.VACATION_TYPES_HERP.SingleOrDefault(v => v.BALNACE == "Y" && v.IS_PAID == "Y" && v.TAKEN_TO_NEXT_YEAR == "Y").ID;
        //    //var depit = db.TRANS_VACATIONS_HERP.Where(x => x.EMPLOYEE_ID == empId && x.VACATION_TYPE_ID == vacId && x.TRANS_TYPE == "D" 
        //    //&& EntityFunctions.TruncateTime(x.FROM_DATE) >= fromYear && EntityFunctions.TruncateTime(x.FROM_DATE) <= toYear).ToList().Sum(s => (decimal)(s.NO_OF_DAYS ?? 0));
        //    //var credit = db.TRANS_VACATIONS_HERP.Where(x => x.EMPLOYEE_ID == empId && x.VACATION_TYPE_ID == vacId && x.TRANS_TYPE == "C" 
        //    //&& EntityFunctions.TruncateTime(x.FROM_DATE) >= fromYear && EntityFunctions.TruncateTime(x.FROM_DATE) <= toYear).ToList().Sum(s => (decimal)(s.NO_OF_DAYS ?? 0));
        //    //return (depit - credit);
        //    var db = Db.Get();
        //    var vacId = db.VACATION_TYPES_HERP.SingleOrDefault(v => v.BALNACE == "Y" && v.IS_PAID == "Y" && v.TAKEN_TO_NEXT_YEAR == "Y").ID;
        //    var vacs = db.VACATION_BALANCE_VW.Where(x => x.EMPLOYEE_ID == empId && x.VACATION_TYPE_ID == vacId).FirstOrDefault();
        //    if (vacs != null)
        //    {
        //        return vacs.BALANCE??0;
        //    }
        //    return 0;
        //}

        //public static decimal GetSickVacBalance(decimal empId)
        //{
        //    var db = Db.Get();
        //    var fromYear = new DateTime(DateTime.Now.Year, 1, 1);
        //    var toYear = new DateTime(DateTime.Now.Year, 12, 31);
        //    var vacId = db.VACATION_TYPES_HERP.SingleOrDefault(v => v.IS_SICK == "Y").ID;
        //    var depit = db.TRANS_VACATIONS_HERP.Where(x => x.EMPLOYEE_ID == empId && x.VACATION_TYPE_ID == vacId && x.TRANS_TYPE == "D" && EntityFunctions.TruncateTime(x.FROM_DATE) >= fromYear && EntityFunctions.TruncateTime(x.FROM_DATE) <= toYear).ToList().Sum(s => (decimal)(s.NO_OF_DAYS ?? 0));
        //    var credit = db.TRANS_VACATIONS_HERP.Where(x => x.EMPLOYEE_ID == empId && x.VACATION_TYPE_ID == vacId && x.TRANS_TYPE == "C").ToList().Sum(s => (decimal)(s.NO_OF_DAYS ?? 0));
        //    return (depit - credit);
        //}

        //public static decimal GetLeaveHours(decimal empId)
        //{
        //    var db = Db.Get();
        //    var leaveTypeId = db.LEAVE_TYPES_HERP.SingleOrDefault(x => x.IS_OFFICIAL == "N" && x.EXCLUDED == "N").ID;
        //    var trans = db.LEAVE_TRANS_HERP.Where(x => x.EMPLOYEE_ID == empId && x.LEAVE_TYPE_ID == leaveTypeId && ((DateTime)x.LEAVE_DATE).Year == DateTime.Now.Year).ToList();
        //    if (trans.Any())
        //    {

        //        return trans.Sum(s => (decimal)(((DateTime)s.TO_HOUR - (DateTime)s.FROM_HOUR).TotalHours));
        //    }
        //    return 0;
        //}

        public static decimal GetFcRate(string curn)
        {
            var db = Db.Get();
            var maxDate = db.CURN_RATES.Where(c => c.CURN_CODE == curn).Max(m => m.UDATE);
            if (maxDate == null) maxDate = DateTime.Now;
            decimal? fcRate = 1;
            var rate = db.CURN_RATES.Where(x => x.CURN_CODE == curn && x.UDATE == maxDate).FirstOrDefault();
            if (rate != null) fcRate = ((rate.RATE != null) ? rate.RATE : 1);
            return (decimal)fcRate;
        }

        public static bool IsCreatorStaff(string login, string voucherType)
        {
            decimal? minOrder = 0;
            var setup = new JournalWFSetupModel();
            var db = Db.Get();
            switch (voucherType)
            {
                case "J":
                    minOrder = db.JOURNAL_WKSETUP_ERP.Min(m => m.ORDERNO);
                    setup = db.JOURNAL_WKSETUP_ERP.Where(x => x.ORDERNO == minOrder).Select(x => new JournalWFSetupModel
                    {
                        ID = x.ID,
                        STAFF_ID = x.STAFF_ID,
                        GROUP_ID = x.GROUP_ID,
                        HrId = x.HR_ID
                    }).FirstOrDefault();
                    break;
                case "P":
                    minOrder = db.PYVC_WKSETUP_ERP.Min(m => m.ORDERNO);
                    setup = db.PYVC_WKSETUP_ERP.Where(x => x.ORDERNO == minOrder).Select(x => new JournalWFSetupModel
                    {
                        ID = x.ID,
                        STAFF_ID = x.STAFF_ID,
                        GROUP_ID = x.GROUP_ID,
                        HrId = x.HR_ID
                    }).FirstOrDefault();
                    break;
                case "I":
                    minOrder = db.ILTIZAM_WKSETUP_ERP.Min(m => m.ORDERNO);
                    setup = db.ILTIZAM_WKSETUP_ERP.Where(x => x.ORDERNO == minOrder).Select(x => new JournalWFSetupModel
                    {
                        ID = x.ID,
                        STAFF_ID = x.STAFF_ID,
                        GROUP_ID = x.GROUP_ID,
                        HrId = x.HR_ID
                    }).FirstOrDefault();
                    break;
                case "R":
                    minOrder = db.RCVC_WKSETUP_ERP.Min(m => m.ORDERNO);
                    setup = db.RCVC_WKSETUP_ERP.Where(x => x.ORDERNO == minOrder).Select(x => new JournalWFSetupModel
                    {
                        ID = x.ID,
                        STAFF_ID = x.STAFF_ID,
                        GROUP_ID = x.GROUP_ID,
                        HrId = x.HR_ID
                    }).FirstOrDefault();
                    break;
                case "DR":
                    minOrder = db.DRNOTES_WKSETUP_ERP.Min(m => m.ORDERNO);
                    setup = db.DRNOTES_WKSETUP_ERP.Where(x => x.ORDERNO == minOrder).Select(x => new JournalWFSetupModel
                    {
                        ID = x.ID,
                        STAFF_ID = x.STAFF_ID,
                        GROUP_ID = x.GROUP_ID,
                        HrId = x.HR_ID
                    }).FirstOrDefault();
                    break;
                case "CR":
                    minOrder = db.CRNOTES_WKSETUP_ERP.Min(m => m.ORDERNO);
                    setup = db.CRNOTES_WKSETUP_ERP.Where(x => x.ORDERNO == minOrder).Select(x => new JournalWFSetupModel
                    {
                        ID = x.ID,
                        STAFF_ID = x.STAFF_ID,
                        GROUP_ID = x.GROUP_ID,
                        HrId = x.HR_ID
                    }).FirstOrDefault();
                    break;
            }
            if (!string.IsNullOrEmpty(setup.STAFF_ID))
            {
                return (login == setup.STAFF_ID);
            }
            else if (setup.HrId.HasValue)
            {
                var ps = db.HR_FUNCTION_PERP.SingleOrDefault(x => x.ID == setup.HrId).SQL_QUERY;
                var manager = Helper.GetManagerSp(ps, db, login);
                return (manager == login);
            }

            else if (setup.GROUP_ID.HasValue)
            {
                var groupStaff = db.GROUPS_STAFF_ERP.Where(x => x.GROUP_ID == setup.GROUP_ID).Select(x => x.STAFF_ID);
                return groupStaff.Any(s => s == login);
            }

            return false;
        }

        public static string GetManagerSp(string hrFunc, DbModel db, string login)
        {
            //var staffCode = User.Identity.Name.UserCode();
            string manager;
            var managerObjectParameter = new ObjectParameter("p_MANAGER", typeof(string));

            switch (hrFunc)
            {
                case "GET_UNIT_MANAGER":
                    db.GET_UNIT_MANAGER(login, managerObjectParameter);

                    if (managerObjectParameter.Value.GetType() != typeof(DBNull))
                        manager = managerObjectParameter.Value.ToString();
                    else throw new Exception(string.Format("{0}: returned null", hrFunc));

                    break;
                case "GET_SECTION_MANAGER":
                    db.GET_SECTION_MANAGER(login, managerObjectParameter);

                    if (managerObjectParameter.Value.GetType() != typeof(DBNull))
                        manager = managerObjectParameter.Value.ToString();
                    else throw new Exception(string.Format("{0}: returned null", hrFunc));

                    break;
                case "GET_DEPARTMENT_MANAGER":
                    db.GET_DEPARTMENT_MANAGER(login, managerObjectParameter);

                    if (managerObjectParameter.Value.GetType() != typeof(DBNull))
                        manager = managerObjectParameter.Value.ToString();
                    else throw new Exception(string.Format("{0}: returned null", hrFunc));

                    break;
                case "GET_SUPERVISOR":
                    db.GET_SUPERVISOR(login, managerObjectParameter);

                    if (managerObjectParameter.Value.GetType() != typeof(DBNull))
                        manager = managerObjectParameter.Value.ToString();
                    else throw new Exception(string.Format("{0}: returned null", hrFunc));

                    break;
                case "GET_MUNICIPALITY_MANAGER":
                    db.GET_MUNICIPALITY_MANAGER(managerObjectParameter);

                    if (managerObjectParameter.Value.GetType() != typeof(DBNull))
                        manager = managerObjectParameter.Value.ToString();
                    else throw new Exception(string.Format("{0}: returned null", hrFunc));

                    break;
                case "GET_MAYOR":
                    db.GET_MAYOR(managerObjectParameter);

                    if (managerObjectParameter.Value.GetType() != typeof(DBNull))
                        manager = managerObjectParameter.Value.ToString();
                    else throw new Exception(string.Format("{0}: returned null", hrFunc));

                    break;
                default:
                    throw new Exception(string.Format("Unknown HR_FUNCTION_PERP: {0}", hrFunc));
            }

            return manager;
        }

        //public static IDictionary<int, int> GetTotalVacationDays(DateTime s, DateTime e)
        //{
        //    var db = Db.Get();
        //    IDictionary<int, int> data = new Dictionary<int, int>();
        //    var holidays = db.HOLIDAYS_HERP.Where(x => x.FROM_DATE<=s &&  x.TO_DATE>=e);
        //    foreach (var h in holidays)
        //    {
        //        var overlapDays = 0;

        //        if (s.Date <= h.TO_DATE.Date && e >= h.FROM_DATE.Date)
        //        {
        //            var fromDate = s.Date >= h.FROM_DATE.Date ? s.Date : h.FROM_DATE.Date;
        //            var endDate = e.Date <= h.TO_DATE.Date ? e.Date : h.TO_DATE.Date;
        //            overlapDays += (int)(endDate - fromDate).Days + 1;
        //            data.Add((int) h.ID,overlapDays);
        //        }
        //    }
        //    return data;
        //}

        public static decimal GetSupervisor(decimal empid)
        {
            try
            {
            var db = Db.Get();
                var obj = db.EMPLOYEE_HERP.Where(c => c.ID == empid).FirstOrDefault();
                if (obj != null) return obj.SUPERVISOR!=null?(decimal)obj.SUPERVISOR:0;
                return 0;
            }
            catch 
            {
                return 0;
            }
        }
    }

    //

    public class User
    {
        //public string LoginAs { get; set; }
        public string UserCode { get; set; }
        public string UserName { get; set; }
        //public string Role { get; set; }

        //public User()
        //{
        //}

        //public User(string loginAs, string role)
        //{
        //    LoginAs = loginAs;
        //    //Role = role;
        //}

        //public User(string loginAs)
        //{
        //    LoginAs = loginAs;
        //}

        public static User Parse(string name)
        {
            return new User
            {
                UserCode = name.Split(':')[0],
                UserName = name.Split(':')[1],
            };


        }


        public static bool IsEmailValid(string email)
        {
            try
            {
                var m = new MailAddress(email);
                return true;
            }
            catch (FormatException)
            {
                return false;
            }
        }

        public static SelectList WfEditRemoveTax
        {
            get
            {
                return new SelectList(new List<SelectListItem>
                                      {
                                          new SelectListItem {Text = "مدير دائرة", Value = "1"},
                                          new SelectListItem {Text = "المدير المالي", Value = "2"},
                                          new SelectListItem {Text = "المدير العام", Value = "3"},
       
                                      }, "Value", "Text");
            }
        }

       public static Boolean IsValidFile(HttpPostedFileBase LOB_FILE)
        {
            if (LOB_FILE != null)
            {
                if (LOB_FILE.ContentLength <= 20 * 1024 * 1024)
                {
                    string[] formats = new string[] { ".jpg", ".png", ".gif", ".jpeg", ".pdf", ".doc", ".docx","txt","xls","xlsx" };
                    return formats.Any(item => LOB_FILE.FileName.EndsWith(item, StringComparison.OrdinalIgnoreCase));
                }
            }
            return false;
        }

    }
}