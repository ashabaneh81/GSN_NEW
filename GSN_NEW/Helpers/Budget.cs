using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using GSN_NEW.Controllers;
using ErpDal;
using GSN_NEW.Models;
namespace GSN_NEW.Helpers
{
    public class Budget
    {//
        public Nullable<decimal> Dedicated { get; set; }
        public Nullable<decimal> Reserved { get; set; }
        public Nullable<decimal> Expense { get; set; }
        public Nullable<decimal> Remaining { get; set; }
        public Nullable<decimal> AllReqBudget { get; set; }

        //public Budget GetAllBudgeProject(REQUISITION_MAS_PERP obj = null, decimal MainSubID = 0, string FUND_TYPE = "", decimal FUNDER_CODE = 0)
        //{
        //    var db = Db.Get();
        //    var budgt = new Budget();
        //    var currency = db.CURN;
        //    var name = "";
        //    var fundName = "";
        //    var taccounT = "";
        //    var Tfund = "";
        //    DateTime fromYear = new DateTime(DateTime.Now.Year, 1, 1); ;
        //    DateTime toYear= new DateTime((DateTime.Now.Year + 1), 1, 1);

        //    if (obj != null)
        //    {
        //        fromYear = new DateTime(obj.TRANS_DATE.Year, 1, 1);
        //        toYear = new DateTime((obj.TRANS_DATE.Year + 1), 1, 1);
        //    }
            

        //    if (obj != null)
        //    {
               

        //        budgt.AllReqBudget = obj.REQUISITION_DTL_PERP.Where(c => c.CANCELED == "N").ToList().Sum(c => c.EXPECT_PRICE * c.NEW_QTY);
        //        try
        //        {
        //            if (obj.FUND_TYPE == "1")
        //            {
        //                budgt.Dedicated = obj.STRATEGY_MAIN_SUB_ACTIVITY_ERP.BUDGET_AMT != null ? obj.STRATEGY_MAIN_SUB_ACTIVITY_ERP.BUDGET_AMT : 0;

        //            }
        //            else if (obj.FUND_TYPE == "2")
        //            {
        //                if (obj.STRATEGY_MAIN_SUB_ACTIVITY_ERP.STRATEGY_DEVELOPMENT_ERP.Count > 0)
        //                    budgt.Dedicated = obj.STRATEGY_MAIN_SUB_ACTIVITY_ERP.STRATEGY_DEVELOPMENT_ERP.Sum(c => c.AMT!=null?c.AMT:0);
        //                else budgt.Dedicated = 0;

        //            }
        //            else if (obj.FUND_TYPE == "3")
        //            {
        //                if (obj.STRATEGY_MAIN_SUB_ACTIVITY_ERP.STRATEGY_FUND_ERP.Count > 0)
        //                    budgt.Dedicated = obj.STRATEGY_MAIN_SUB_ACTIVITY_ERP.STRATEGY_FUND_ERP.Sum(c => c.AMT != null ? c.AMT : 0);
        //            }
        //            else
        //            {
        //                budgt.Dedicated = 0;
        //            }


        //        }
        //        catch
        //        {
        //            budgt.Dedicated = 0;
        //        }
        //        if (obj.FUND_TYPE == "1")
        //        {

        //            name = Convert.ToString("Budget_acc").ToUpper();
        //            fundName = Convert.ToString("Budget_FUND").ToUpper();

        //        }



        //        else if (obj.FUND_TYPE == "2")
        //        {
        //            name = Convert.ToString("Development_acc").ToUpper();
        //            fundName = Convert.ToString("Development_FUND").ToUpper();


        //        }

        //        else
        //        {
        //            name = Convert.ToString("Funded_acc").ToUpper();
        //            fundName = Convert.ToString("Funded_FUND").ToUpper();

        //        }

        //        try
        //        {
        //            taccounT = db.FIXED_ERP.Where(x => x.NAME.ToUpper() == name).FirstOrDefault().VALUE;
        //        }
        //        catch
        //        {
        //            taccounT = null;
        //        }

        //        try
        //        {
        //            Tfund = FixedERPValues.GetFund(fundName);
        //        }
        //        catch
        //        {
        //            Tfund = null;
        //        }

        //        try
        //        {
        //            decimal Dept = 0;
        //            decimal Credit = 0;
        //            try
        //            {
        //                Dept = (decimal)db.TRANS_TEMP_ERP.Where(c => c.PR_NEW == obj.MAIN_SUB_ID && c.TACCOUNT_NO == taccounT && c.TRANS_TYPE == "D"
        //                                                          && c.TRANS_DATE >= fromYear && c.TRANS_DATE < toYear).Sum(c => c.LOCAL_AMOUNT != null ? c.LOCAL_AMOUNT : 0);

        //            }
        //            catch
        //            {
        //                Dept = 0;
        //            }
        //            try
        //            {
        //                Credit = (decimal)db.TRANS_TEMP_ERP.Where(c => c.PR_NEW == obj.MAIN_SUB_ID && c.TACCOUNT_NO == taccounT && c.TRANS_TYPE == "C"
        //                                                           && c.TRANS_DATE >= fromYear && c.TRANS_DATE < toYear).Sum(c => c.LOCAL_AMOUNT != null ? c.LOCAL_AMOUNT : 0);

        //            }
        //            catch
        //            {
        //                Credit = 0;
        //            }

        //            budgt.Reserved = Dept - Credit;
        //        }
        //        catch
        //        {
        //            budgt.Reserved = 0;
        //        }
        //        try
        //        {

        //            decimal Dept = 0;
        //            decimal Credit = 0;

        //            try
        //            {
        //                Dept = (decimal)db.TRANS.Where(c => c.PR_NEW == obj.MAIN_SUB_ID && c.TACCOUNT_NO == taccounT && c.TRANS_TYPE == "D"
        //                                                && c.TRANS_DATE >= fromYear && c.TRANS_DATE < toYear).Sum(c => c.LOCAL_AMOUNT != null ? c.LOCAL_AMOUNT : 0);
        //            }
        //            catch
        //            {
        //                Dept = 0;
        //            }

        //            try
        //            {
        //                Credit = (decimal)db.TRANS.Where(c => c.PR_NEW == obj.MAIN_SUB_ID && c.TACCOUNT_NO == taccounT && c.TRANS_TYPE == "C"
        //                 && c.TRANS_DATE >= fromYear && c.TRANS_DATE < toYear).Sum(c => c.LOCAL_AMOUNT != null ? c.LOCAL_AMOUNT : 0);

        //            }
        //            catch
        //            {
        //                Credit = 0;

        //            }
        //            budgt.Expense = Dept - Credit;
        //        }
        //        catch
        //        {
        //            budgt.Expense = 0;

        //        }
        //        budgt.Remaining = budgt.Dedicated - (budgt.Expense + budgt.Reserved);





        //    }
        //    else
        //    {
        //        var MainSub = db.STRATEGY_MAIN_SUB_ACTIVITY_ERP.SingleOrDefault(c => c.ID == MainSubID);
               
        //        try
        //        {
        //            if (FUND_TYPE == "1")
        //            {
        //                budgt.Dedicated = (decimal)MainSub.BUDGET_AMT;
        //            }
        //            else if (FUND_TYPE == "2")
        //            {
        //                if (MainSub.STRATEGY_DEVELOPMENT_ERP.Count > 0)
        //                    budgt.Dedicated = MainSub.STRATEGY_DEVELOPMENT_ERP.Sum(c => c.AMT!=null?c.AMT:0);

        //            }
        //            else if (FUND_TYPE == "3")
        //            {

        //                if (MainSub.STRATEGY_FUND_ERP.Count > 0)
        //                    budgt.Dedicated = MainSub.STRATEGY_FUND_ERP.ToList().Sum(c => c.AMT!=null?c.AMT:0);
        //            }
        //            else
        //                budgt.Dedicated = 0;


        //            if (budgt.Dedicated == null)
        //                budgt.Dedicated = 0;
        //        }
        //        catch
        //        {
        //            budgt.Dedicated = 0;
        //        }
        //        if (FUND_TYPE == "1")
        //        {
        //            name = Convert.ToString("Budget_acc").ToUpper();
        //            fundName = Convert.ToString("Budget_FUND").ToUpper();


        //        }


        //        else if (FUND_TYPE == "2")
        //        {
        //            name = Convert.ToString("Development_acc").ToUpper();
        //            fundName = Convert.ToString("Development_FUND").ToUpper();

        //        }

        //        else
        //        {
        //            name = Convert.ToString("Funded_acc").ToUpper();
        //            fundName = Convert.ToString("Funded_FUND").ToUpper();

        //        }

        //        name = db.FIXED_ERP.Where(x => x.NAME.ToUpper() == name).FirstOrDefault().VALUE;
        //        try
        //        {
        //            decimal Dept = 0;
        //            decimal Credit = 0;
        //            try
        //            {


        //                Dept = (decimal)db.TRANS_TEMP_ERP.Where(c => c.PR_NEW == MainSubID && c.TACCOUNT_NO == name && c.TRANS_TYPE == "D"
        //                 && c.TRANS_DATE >= fromYear && c.TRANS_DATE < toYear).Sum(c => c.LOCAL_AMOUNT != null ? c.LOCAL_AMOUNT : 0);


        //            }
        //            catch
        //            {
        //                Dept = 0;
        //            }
        //            try
        //            {
        //                Credit = (decimal)db.TRANS_TEMP_ERP.Where(c => c.PR_NEW == MainSubID && c.TACCOUNT_NO == name && c.TRANS_TYPE == "C"
        //                 && c.TRANS_DATE >= fromYear && c.TRANS_DATE < toYear).Sum(c => c.LOCAL_AMOUNT != null ? c.LOCAL_AMOUNT : 0);


        //            }
        //            catch
        //            {
        //                Credit = 0;
        //            }
        //            budgt.Reserved = Dept - Credit;

        //        }
        //        catch
        //        {
        //            budgt.Reserved = 0;
        //        }
        //        try
        //        {
        //            decimal Dept = 0;
        //            decimal Credit = 0;
        //            try
        //            {
        //                Dept = (decimal)db.TRANS.Where(c => c.PR_NEW == MainSubID && c.TACCOUNT_NO == name && c.TRANS_TYPE == "D"
        //                 && c.TRANS_DATE >= fromYear && c.TRANS_DATE < toYear).Sum(c => c.LOCAL_AMOUNT != null ? c.LOCAL_AMOUNT : 0);
        //            }
        //            catch
        //            {
        //                Dept = 0;
        //            }
        //            try
        //            {
        //                Credit = (decimal)db.TRANS.Where(c => c.PR_NEW == MainSubID && c.TACCOUNT_NO == name && c.TRANS_TYPE == "C"
        //                 && c.TRANS_DATE >= fromYear && c.TRANS_DATE < toYear).Sum(c => c.LOCAL_AMOUNT != null ? c.LOCAL_AMOUNT : 0);

        //            }
        //            catch
        //            {
        //                Credit = 0;
        //            }
        //            budgt.Expense = Dept - Credit;

        //        }
        //        catch
        //        {
        //            budgt.Expense = 0;

        //        }
        //        budgt.Remaining = budgt.Dedicated - (budgt.Expense + budgt.Reserved);

        //    }
        //    budgt.Dedicated = Math.Round((decimal)budgt.Dedicated, 2);
        //    budgt.Expense = Math.Round((decimal)budgt.Expense, 2);
        //    budgt.Reserved = Math.Round((decimal)budgt.Reserved, 2);
        //    budgt.Remaining = Math.Round((decimal)budgt.Remaining, 2);
        //    return budgt;
        //}

        //public Budget GetAmountBlockStrategy(decimal STRATEGY_MAIN_SUB = 0, string FUND_TYPE = "")
        //{
        //    var db = Db.Get();
        //    var budgt = new Budget();
        //    string name;
        //    var currency = db.CURN.ToList();
        //    var obj = db.STRATEGY_MAIN_SUB_ACTIVITY_ERP.SingleOrDefault(c => c.ID == STRATEGY_MAIN_SUB);
        //    try
        //    {
        //        if (FUND_TYPE == "1")//انمائية
        //        {
        //            budgt.Dedicated = obj.BUDGET_AMT;
        //        }
        //        else if (FUND_TYPE == "2")//تطويرية
        //        {
        //            if (obj.STRATEGY_DEVELOPMENT_ERP.Count > 0)
        //                budgt.Dedicated = obj.STRATEGY_DEVELOPMENT_ERP.ToList().Sum(c => c.AMT);
        //            if (budgt.Dedicated == null)
        //                budgt.Dedicated = 0;
        //        }
        //        else if (FUND_TYPE == "3")
        //        {
        //            if (obj.STRATEGY_FUND_ERP.Count > 0)
        //                budgt.Dedicated = obj.STRATEGY_FUND_ERP.ToList().Sum(c => c.AMT);
        //            if (budgt.Dedicated == null)
        //                budgt.Dedicated = 0;
        //        }

        //        else
        //            budgt.Dedicated = 0;

        //    }
        //    catch
        //    {
        //        budgt.Dedicated = 0;
        //    }

        //    if (FUND_TYPE == "1")

        //        name = Convert.ToString("Budget_acc").ToUpper();

        //    else if (FUND_TYPE == "2")
        //        name = Convert.ToString("Development_acc").ToUpper();

        //    else
        //        name = Convert.ToString("Funded_acc").ToUpper();
        //    try
        //    {
        //        decimal Dept;
        //        decimal Credit;
        //        try
        //        {
        //            Dept = (decimal)db.TRANS_TEMP_ERP.Where(c => c.PR_NEW == STRATEGY_MAIN_SUB && c.TACCOUNT_NO == db.FIXED_ERP.Where(x => x.NAME.ToUpper() == name).FirstOrDefault().VALUE && c.TRANS_TYPE == "D").Sum(c => c.LOCAL_AMOUNT != null ? c.LOCAL_AMOUNT : 0);
        //        }
        //        catch
        //        {
        //            Dept = 0;
        //        }

        //        try
        //        {
        //            Credit = (decimal)db.TRANS_TEMP_ERP.Where(c => c.PR_NEW ==  STRATEGY_MAIN_SUB && c.TACCOUNT_NO == db.FIXED_ERP.Where(x => x.NAME.ToUpper() == name).FirstOrDefault().VALUE && c.TRANS_TYPE == "C").Sum(c => c.LOCAL_AMOUNT != null ? c.LOCAL_AMOUNT : 0);
        //        }
        //        catch
        //        {
        //            Credit = 0;
        //        }
        //        budgt.Reserved = Dept - Credit;

        //    }
        //    catch
        //    {
        //        budgt.Reserved = 0;
        //    }
        //    try
        //    {
        //        decimal Dept;
        //        decimal Credit;
        //        try
        //        {
        //            Dept = (decimal)db.TRANS.Where(c => c.PR_NEW == STRATEGY_MAIN_SUB && c.TACCOUNT_NO == db.FIXED_ERP.Where(x => x.NAME.ToUpper() == name).FirstOrDefault().VALUE && c.TRANS_TYPE == "D").Sum(c => c.LOCAL_AMOUNT != null ? c.LOCAL_AMOUNT : 0);
        //        }
        //        catch
        //        {
        //            Dept = 0;
        //        }
        //        try
        //        {
        //            Credit = (decimal)db.TRANS.Where(c => c.PR_NEW ==  STRATEGY_MAIN_SUB && c.TACCOUNT_NO == db.FIXED_ERP.Where(x => x.NAME.ToUpper() == name).FirstOrDefault().VALUE && c.TRANS_TYPE == "C").Sum(c => c.LOCAL_AMOUNT != null ? c.LOCAL_AMOUNT : 0);
        //        }
        //        catch
        //        {
        //            Credit = 0;
        //        }
        //        budgt.Expense = Dept - Credit;
        //    }
        //    catch
        //    {
        //        budgt.Expense = 0;

        //    }
        //    budgt.Remaining = budgt.Dedicated - (budgt.Expense + budgt.Reserved);
        //    return budgt;


        //}
        //public Budget GetAmountOperational(STOCKS_ERP stock, String UNIT_ID,DateTime ReqYear,string Fund_Code,string purchase_account_no)
        //{
        //    var db = Db.Get();
        //    var budgt = new Budget();
        //    var fromYear = new DateTime(ReqYear.Year, 1, 1);
        //    var toYear = new DateTime((ReqYear.Year + 1), 1, 1);
        //    var purAccount = purchase_account_no;
        //    try
        //    {
        //        budgt.Dedicated = db.UNITS_ACCOUNTS_ERP.Where(c => c.UNIT_ID == UNIT_ID && c.ACCOUNT_NO == purAccount &&c.YEAR== ReqYear.Year).FirstOrDefault().AMOUNT;
        //        if (budgt.Dedicated == null)
        //            budgt.Dedicated = 0;
        //    }
        //    catch
        //    {
        //        budgt.Dedicated = 0;
        //    }
        //    try
        //    {
        //        decimal Debit;
        //        decimal Credit;
        //        try
        //        {
        //            Debit = (decimal)db.TRANS_TEMP_ERP.Where(c => c.TACCOUNT_NO == purchase_account_no && c.UNIT_ID == UNIT_ID &&c.TFUND_CODE==Fund_Code && c.TRANS_TYPE == "D" && c.TRANS_DATE >= fromYear && c.TRANS_DATE<toYear ).Sum(c => c.LOCAL_AMOUNT != null ? c.LOCAL_AMOUNT : 0);
        //        }
        //        catch
        //        {
        //            Debit = 0;
        //        }
        //        try
        //        {
        //            Credit = (decimal)db.TRANS_TEMP_ERP.Where(c => c.TACCOUNT_NO == purchase_account_no && c.UNIT_ID==UNIT_ID &&c.TFUND_CODE==Fund_Code  && c.TRANS_TYPE == "C" && c.TRANS_DATE >= fromYear && c.TRANS_DATE < toYear).Sum(c => c.LOCAL_AMOUNT != null ? c.LOCAL_AMOUNT : 0);
        //        }
        //        catch
        //        {
        //            Credit = 0;
        //        }

        //        budgt.Reserved = Debit - Credit;

        //    }
        //    catch
        //    {
        //        budgt.Reserved = 0;
        //    }



        //    try
        //    {
        //        decimal Debit;
        //        decimal Credit;
        //        try
        //        {
        //            Debit = (decimal)db.TRANS.Where(c => c.TACCOUNT_NO == purchase_account_no && c.UNIT_ID == UNIT_ID && c.TFUND_CODE==Fund_Code && c.TRANS_TYPE == "D" && c.TRANS_DATE >= fromYear && c.TRANS_DATE < toYear).Sum(c => c.LOCAL_AMOUNT != null ? c.LOCAL_AMOUNT : 0);
        //        }
        //        catch
        //        {
        //            Debit = 0;
        //        }
        //        try
        //        {
        //            Credit = (decimal)db.TRANS.Where(c => c.TACCOUNT_NO == purchase_account_no && c.UNIT_ID == UNIT_ID && c.TFUND_CODE==Fund_Code && c.TRANS_TYPE == "C" && c.TRANS_DATE >= fromYear && c.TRANS_DATE < toYear).Sum(c => c.LOCAL_AMOUNT != null ? c.LOCAL_AMOUNT : 0);
        //        }
        //        catch
        //        {
        //            Credit = 0;

        //        }
        //        budgt.Expense = Debit - Credit;
        //    }
        //    catch
        //    {
        //        budgt.Expense = 0;
        //    }
        //    budgt.Remaining = budgt.Dedicated - (budgt.Reserved + budgt.Expense);

        //    budgt.Dedicated = Math.Round((decimal)budgt.Dedicated, 2);
        //    budgt.Expense = Math.Round((decimal)budgt.Expense, 2);
        //    budgt.Reserved = Math.Round((decimal)budgt.Reserved, 2);
        //    budgt.Remaining = Math.Round((decimal)budgt.Remaining, 2);
        //    return budgt;
        //}
        //public Budget GetAmountOperational1(String UNIT_ID, decimal ReqYear, string Fund_Code, string purchase_account_no)
        //{
        //    var db = Db.Get();
        //    var budgt = new Budget();

        //    var purAccount = purchase_account_no;
        //    try
        //    {
        //        budgt.Dedicated = db.UNITS_ACCOUNTS_ERP.Where(c => c.UNIT_ID == UNIT_ID && c.ACCOUNT_NO == purAccount && c.YEAR == ReqYear).FirstOrDefault().AMOUNT;
        //        if (budgt.Dedicated == null)
        //            budgt.Dedicated = 0;
        //    }
        //    catch
        //    {
        //        budgt.Dedicated = 0;
        //    }
        //    try
        //    {
        //        decimal Debit;
        //        decimal Credit;
        //        try
        //        {
        //            Debit = (decimal)db.TRANS_TEMP_ERP.Where(c => c.TACCOUNT_NO == purchase_account_no && c.UNIT_ID == UNIT_ID && c.TFUND_CODE == Fund_Code && c.TRANS_TYPE == "D").Sum(c => c.LOCAL_AMOUNT != null ? c.LOCAL_AMOUNT : 0);
        //        }
        //        catch
        //        {
        //            Debit = 0;
        //        }
        //        try
        //        {
        //            Credit = (decimal)db.TRANS_TEMP_ERP.Where(c => c.TACCOUNT_NO == purchase_account_no && c.UNIT_ID == UNIT_ID && c.TFUND_CODE == Fund_Code && c.TRANS_TYPE == "C").Sum(c => c.LOCAL_AMOUNT != null ? c.LOCAL_AMOUNT : 0);
        //        }
        //        catch
        //        {
        //            Credit = 0;
        //        }

        //        budgt.Reserved = Debit - Credit;

        //    }
        //    catch
        //    {
        //        budgt.Reserved = 0;
        //    }



        //    try
        //    {
        //        decimal Debit;
        //        decimal Credit;
        //        try
        //        {
        //            Debit = (decimal)db.TRANS.Where(c => c.TACCOUNT_NO == purchase_account_no && c.UNIT_ID == UNIT_ID && c.TFUND_CODE == Fund_Code && c.TRANS_TYPE == "D").Sum(c => c.LOCAL_AMOUNT != null ? c.LOCAL_AMOUNT : 0);
        //        }
        //        catch
        //        {
        //            Debit = 0;
        //        }
        //        try
        //        {
        //            Credit = (decimal)db.TRANS.Where(c => c.TACCOUNT_NO == purchase_account_no && c.UNIT_ID == UNIT_ID && c.TFUND_CODE == Fund_Code && c.TRANS_TYPE == "C").Sum(c => c.LOCAL_AMOUNT != null ? c.LOCAL_AMOUNT : 0);
        //        }
        //        catch
        //        {
        //            Credit = 0;

        //        }
        //        budgt.Expense = Debit - Credit;
        //    }
        //    catch
        //    {
        //        budgt.Expense = 0;
        //    }
        //    budgt.Remaining = budgt.Dedicated - (budgt.Reserved + budgt.Expense);

        //    budgt.Dedicated = Math.Round((decimal)budgt.Dedicated, 2);
        //    budgt.Expense = Math.Round((decimal)budgt.Expense, 2);
        //    budgt.Reserved = Math.Round((decimal)budgt.Reserved, 2);
        //    budgt.Remaining = Math.Round((decimal)budgt.Remaining, 2);
        //    return budgt;
        //}

        //public Budget GetAllBudgeBidding(BIDDING_ERP obj = null, decimal MainSubID = 0, string FUND_TYPE = "", decimal FUNDER_CODE = 0)
        //{
        //    var db = Db.Get();
        //    var budgt = new Budget();
        //    var name = "";
        //    var fundName = "";
        //    var taccounT = "";
        //    var Tfund = "";
           

        //    if (obj != null)
        //    {
               

        //        try
        //        {
        //            if (obj.FUND_TYPE == "1")
        //            {
        //                budgt.Dedicated = obj.STRATEGY_MAIN_SUB_ACTIVITY_ERP.BUDGET_AMT != null ? obj.STRATEGY_MAIN_SUB_ACTIVITY_ERP.BUDGET_AMT : 0;

        //            }
        //            else if (obj.FUND_TYPE == "2")
        //            {
        //                if (obj.STRATEGY_MAIN_SUB_ACTIVITY_ERP.STRATEGY_DEVELOPMENT_ERP.Count > 0)
        //                    budgt.Dedicated = obj.STRATEGY_MAIN_SUB_ACTIVITY_ERP.STRATEGY_DEVELOPMENT_ERP.ToList().Sum(c => c.AMT);
        //                else budgt.Dedicated = 0;

        //            }
        //            else if (obj.FUND_TYPE == "3")
        //            {
        //                if (obj.STRATEGY_MAIN_SUB_ACTIVITY_ERP.STRATEGY_FUND_ERP.Count > 0)
        //                    budgt.Dedicated = obj.STRATEGY_MAIN_SUB_ACTIVITY_ERP.STRATEGY_FUND_ERP.ToList().Sum(c => c.AMT);
        //            }
        //            else
        //            {
        //                budgt.Dedicated = 0;
        //            }


        //        }
        //        catch
        //        {
        //            budgt.Dedicated = 0;
        //        }
        //        if (obj.FUND_TYPE == "1")
        //        {

        //            name = Convert.ToString("Budget_acc").ToUpper();
        //            fundName = Convert.ToString("Budget_FUND").ToUpper();

        //        }



        //        else if (obj.FUND_TYPE == "2")
        //        {
        //            name = Convert.ToString("Development_acc").ToUpper();
        //            fundName = Convert.ToString("Development_FUND").ToUpper();


        //        }

        //        else
        //        {
        //            name = Convert.ToString("Funded_acc").ToUpper();
        //            fundName = Convert.ToString("Funded_FUND").ToUpper();

        //        }

        //        try
        //        {
        //            taccounT = db.FIXED_ERP.Where(x => x.NAME.ToUpper() == name).FirstOrDefault().VALUE;
        //        }
        //        catch
        //        {
        //            taccounT = null;
        //        }

        //        try
        //        {
        //            Tfund = FixedERPValues.GetFund(fundName);
        //        }
        //        catch
        //        {
        //            Tfund = null;
        //        }

        //        try
        //        {
        //            decimal Dept = 0;
        //            decimal Credit = 0;
        //            try
        //            {
        //                Dept = (decimal)db.TRANS_TEMP_ERP.Where(c => c.PR_NEW == obj.MAIN_SUB_ID && c.TACCOUNT_NO == taccounT && c.TRANS_TYPE == "D").Sum(c => c.LOCAL_AMOUNT != null ? c.LOCAL_AMOUNT : 0);


        //            }
        //            catch
        //            {
        //                Dept = 0;
        //            }
        //            try
        //            {
        //                Credit = (decimal)db.TRANS_TEMP_ERP.Where(c => c.PR_NEW == obj.MAIN_SUB_ID && c.TACCOUNT_NO == taccounT && c.TRANS_TYPE == "C").Sum(c => c.LOCAL_AMOUNT != null ? c.LOCAL_AMOUNT : 0);

        //            }
        //            catch
        //            {
        //                Credit = 0;
        //            }

        //            budgt.Reserved = Dept - Credit;
        //        }
        //        catch
        //        {
        //            budgt.Reserved = 0;
        //        }
        //        try
        //        {

        //            decimal Dept = 0;
        //            decimal Credit = 0;

        //            try
        //            {
        //                Dept = (decimal)db.TRANS.Where(c => c.PR_NEW == obj.MAIN_SUB_ID && c.TACCOUNT_NO == taccounT && c.TRANS_TYPE == "D").Sum(c => c.LOCAL_AMOUNT != null ? c.LOCAL_AMOUNT : 0);
        //            }
        //            catch
        //            {
        //                Dept = 0;
        //            }

        //            try
        //            {
        //                Credit = (decimal)db.TRANS.Where(c => c.PR_NEW == obj.MAIN_SUB_ID && c.TACCOUNT_NO == taccounT && c.TRANS_TYPE == "C").Sum(c => c.LOCAL_AMOUNT != null ? c.LOCAL_AMOUNT : 0);

        //            }
        //            catch
        //            {
        //                Credit = 0;

        //            }
        //            budgt.Expense = Dept - Credit;
        //        }
        //        catch
        //        {
        //            budgt.Expense = 0;

        //        }
        //        budgt.Remaining = budgt.Dedicated - (budgt.Expense + budgt.Reserved);





        //    }
        //    else
        //    {
        //        var MainSub = db.STRATEGY_MAIN_SUB_ACTIVITY_ERP.SingleOrDefault(c => c.ID == MainSubID);
                
        //        try
        //        {
        //            if (FUND_TYPE == "1")
        //            {
        //                budgt.Dedicated = (decimal)MainSub.BUDGET_AMT;
        //            }
        //            else if (FUND_TYPE == "2")
        //            {
        //                if (MainSub.STRATEGY_DEVELOPMENT_ERP.Count > 0)
        //                    budgt.Dedicated = MainSub.STRATEGY_DEVELOPMENT_ERP.ToList().Sum(c => c.AMT);

        //            }
        //            else if (FUND_TYPE == "3")
        //            {

        //                if (MainSub.STRATEGY_FUND_ERP.Count > 0)
        //                    budgt.Dedicated = MainSub.STRATEGY_FUND_ERP.ToList().Sum(c => c.AMT);
        //            }
        //            else
        //                budgt.Dedicated = 0;


        //            if (budgt.Dedicated == null)
        //                budgt.Dedicated = 0;
        //        }
        //        catch
        //        {
        //            budgt.Dedicated = 0;
        //        }
        //        if (FUND_TYPE == "1")
        //        {
        //            name = Convert.ToString("Budget_acc").ToUpper();
        //            fundName = Convert.ToString("Budget_FUND").ToUpper();


        //        }


        //        else if (FUND_TYPE == "2")
        //        {
        //            name = Convert.ToString("Development_acc").ToUpper();
        //            fundName = Convert.ToString("Development_FUND").ToUpper();

        //        }

        //        else
        //        {
        //            name = Convert.ToString("Funded_acc").ToUpper();
        //            fundName = Convert.ToString("Funded_FUND").ToUpper();

        //        }

        //        try
        //        {
        //            decimal Dept = 0;
        //            decimal Credit = 0;
        //            try
        //            {

        //                Dept = (decimal)db.TRANS_TEMP_ERP.Where(c => c.PR_NEW == MainSubID && c.TACCOUNT_NO == db.FIXED_ERP.Where(x => x.NAME.ToUpper() == name).FirstOrDefault().VALUE && c.TRANS_TYPE == "D").Sum(c => c.LOCAL_AMOUNT != null ? c.LOCAL_AMOUNT : 0);


        //            }
        //            catch
        //            {
        //                Dept = 0;
        //            }
        //            try
        //            {
        //                Credit = (decimal)db.TRANS_TEMP_ERP.Where(c => c.PR_NEW == MainSubID && c.TACCOUNT_NO == db.FIXED_ERP.Where(x => x.NAME.ToUpper() == name).FirstOrDefault().VALUE && c.TRANS_TYPE == "C").Sum(c => c.LOCAL_AMOUNT != null ? c.LOCAL_AMOUNT : 0);


        //            }
        //            catch
        //            {
        //                Credit = 0;
        //            }
        //            budgt.Reserved = Dept - Credit;

        //        }
        //        catch
        //        {
        //            budgt.Reserved = 0;
        //        }
        //        try
        //        {
        //            decimal Dept = 0;
        //            decimal Credit = 0;
        //            try
        //            {
        //                Dept = (decimal)db.TRANS.Where(c => c.PR_NEW == MainSubID && c.TACCOUNT_NO == db.FIXED_ERP.Where(x => x.NAME.ToUpper() == name).FirstOrDefault().VALUE && c.TRANS_TYPE == "D").Sum(c => c.LOCAL_AMOUNT != null ? c.LOCAL_AMOUNT : 0);
        //            }
        //            catch
        //            {
        //                Dept = 0;
        //            }
        //            try
        //            {
        //                Credit = (decimal)db.TRANS.Where(c => c.PR_NEW == MainSubID && c.TACCOUNT_NO == db.FIXED_ERP.Where(x => x.NAME.ToUpper() == name).FirstOrDefault().VALUE && c.TRANS_TYPE == "C").Sum(c => c.LOCAL_AMOUNT != null ? c.LOCAL_AMOUNT : 0);

        //            }
        //            catch
        //            {
        //                Credit = 0;
        //            }
        //            budgt.Expense = Dept - Credit;

        //        }
        //        catch
        //        {
        //            budgt.Expense = 0;

        //        }
        //        budgt.Remaining = budgt.Dedicated - (budgt.Expense + budgt.Reserved);




        //    }
        //    budgt.Remaining = Math.Round((decimal)budgt.Remaining,2);
        //    budgt.Reserved = Math.Round((decimal)budgt.Reserved,2);
        //    budgt.Expense = Math.Round((decimal)budgt.Expense,2);
        //    budgt.Dedicated = Math.Round((decimal)budgt.Dedicated,2);
        //    return budgt;
        //}
        //public bool CheckBudgetOperationalBidding(BIDDING_ERP obj,decimal UNIT_ID,string purchase_account_no)
        //{

        //    var db = Db.Get();

        //    var CategoryItem = obj.BIDDING_QTY_ERP.ToList();
        //    List<BiddingQTYModel> CatModel = new List<BiddingQTYModel>();
        //    foreach (var item in CategoryItem)
        //    {
        //        var modelObj = new BiddingQTYModel()
        //        {



        //            AvaragePrice = (decimal)item.STOCKS_ERP.AVERAGE_PRICE,
        //            QTY = item.QTY,
        //            Category = item.ID



        //        };
        //        try
        //        {
        //            var purAccount = purchase_account_no;
        //            modelObj.Tash2016 = db.BUDGETS_ACCOUNT_ERP.Where(c => c.SECTION_ID == UNIT_ID && c.ACCOUNT_NO == purAccount).FirstOrDefault().FINAL_READ;
        //            if (modelObj.Tash2016 == null)
        //                modelObj.Tash2016 = 0;
        //        }
        //        catch
        //        {
        //            modelObj.Tash2016 = 0;
        //        }
        //        try
        //        {
        //            decimal dept = 0;
        //            decimal Credit = 0;
        //            try
        //            {
        //                dept = (decimal)db.TRANS.Where(c => c.TACCOUNT_NO == purchase_account_no && c.TRANS_TYPE == "D" &&  c.TCC_CODE == obj.CC_CODE ).Sum(c => c.LOCAL_AMOUNT != null ? c.LOCAL_AMOUNT : 0);

        //            }
        //            catch
        //            {
        //                dept = 0;
        //            }
        //            try
        //            {
        //                Credit = (decimal)db.TRANS.Where(c => c.TACCOUNT_NO == purchase_account_no && c.TRANS_TYPE == "C" &&  c.TCC_CODE == obj.CC_CODE ).Sum(c => c.LOCAL_AMOUNT != null ? c.LOCAL_AMOUNT : 0);


        //            }
        //            catch
        //            {
        //                Credit = 0;
        //            }
        //            modelObj.Expense = dept - Credit;
        //        }

        //        catch
        //        {
        //            modelObj.Expense = 0;
        //        }
        //        try
        //        {
        //            //  m.Reserved = (decimal)db.TRANS_TEMP_ERP.Where(c => c.TACCOUNT_NO == stocks.CATEGORIES_ERP.PURCHASE_ACC && c.TRANS_TYPE == "D").Sum(b => b.LOCAL_AMOUNT) - (decimal)db.TRANS_TEMP_ERP.Where(c => c.TACCOUNT_NO == stocks.CATEGORIES_ERP.PURCHASE_ACC && c.TRANS_TYPE == "C").Sum(b => b.LOCAL_AMOUNT);
        //            decimal dept = 0;
        //            decimal Credit = 0;
        //            try
        //            {
        //                dept = (decimal)db.TRANS_TEMP_ERP.Where(c => c.TACCOUNT_NO == purchase_account_no && c.TCC_CODE == obj.CC_CODE  && c.TRANS_TYPE == "D").Sum(c => c.LOCAL_AMOUNT != null ? c.LOCAL_AMOUNT : 0);

        //            }
        //            catch
        //            {
        //                dept = 0;
        //            }
        //            try
        //            {
        //                Credit = (decimal)db.TRANS_TEMP_ERP.Where(c => c.TACCOUNT_NO == purchase_account_no && c.TCC_CODE == obj.CC_CODE &&  c.TRANS_TYPE == "C" ).Sum(c => c.LOCAL_AMOUNT != null ? c.LOCAL_AMOUNT : 0);

        //            }

        //            catch
        //            {
        //                Credit = 0;
        //            }

        //            modelObj.Reserved = dept - Credit;

        //        }
        //        catch
        //        {
        //            modelObj.Reserved = 0;
        //        }

        //        modelObj.Remain = modelObj.Tash2016 - (modelObj.Reserved + modelObj.Expense);
        //        //modelObj.QtyMulExpectPrice =obj.BIDDING_QTY_ERP.ToList().Where(c=>c.STOCKS_ERP.CATEGORIES_ERP.PURCHASE_ACC== purchase_account_no).Sum(c=>c.QTY*c.STOCKS_ERP.AVERAGE_PRICE);
        //        if (modelObj.Remain < modelObj.QtyMulExpectPrice)
        //            return false;

        //    }


        //    return true;

        //}
    }
}
