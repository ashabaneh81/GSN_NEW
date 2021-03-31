using ErpDal;
using GSN_NEW.Controllers;
using Kendo.Mvc;
using Kendo.Mvc.Extensions;
using Kendo.Mvc.UI;
using System;
using System.Data;
using System.Data.Entity.Validation;
using System.Linq;
using System.Web.Mvc;
using GSN_NEW.Helpers;
using System.Collections;
using System.Collections.Generic;
using System.Transactions;
using System.Data.Entity.Core.Objects;
using System.Data.Entity.Core.Objects;

namespace GSN_NEW.Helpers
{
    public static class FixedERPValues
    {
        public static string GetValueAccount(string name)
        {
            var db = Db.Get();
            var obj = db.FIXED_ERP.Where(c => c.NAME.ToUpper() == name.ToUpper()).FirstOrDefault();
            return obj!=null?obj.VALUE:"";
        }

        //public static bool CheckPermitionTaxAudit(DbModel db,decimal AD_V_ID,string Staff_ID,int CountWorkFlow,bool LastOrder)
        //{
        //    var listTax = db.ADDVOUCHER_TAX_DTL_ERP.Where(c => c.ADDVOUCHER_ID == AD_V_ID);
        //    foreach(var item in listTax)
        //    {
        //        int Permition = 0;
        //        if(CountWorkFlow==1|| LastOrder==true)
        //         Permition = db.PERMISSION_TAX_ERP.Where(c => c.TAX_CODE == item.TAX_CODE && c.STAFF_ID == Staff_ID && c.CAN_POST=="Y").Count();
        //        else
        //            Permition = db.PERMISSION_TAX_ERP.Where(c => c.TAX_CODE == item.TAX_CODE && c.STAFF_ID == Staff_ID && c.CAN_AUDIT == "Y").Count();
        //        if (Permition == 0)
        //            return false;

        //    }
        //    return true;

        //}

        public static decimal NVL(decimal? val)
        {
            try
            {
                if (val == null) return 0;
                return (decimal)val;
            }
            catch
            {
                return 0;
            }
          

        }
        public static decimal GetRateCurrency(string Code)
        {
            var db = Db.Get();
            if (Code == "NIS" || Code == null)
                return 1;
            var dataTodaey = DateTime.Today;
            //  var CurrencyRate = db.CURN_RATES;
            decimal rate = 1;
            try
            {
                var maxID = db.CURN_RATES.Where(c => c.CURN_CODE == Code).Max(c => c.ID);
                var obj = db.CURN_RATES.SingleOrDefault(c => c.ID == maxID);
                rate = (decimal)obj.RATE;

            }
            catch
            {
                rate = 0;
            }


            return (decimal)rate;
        }

        public static string GetFund(string ID)
        {
            var db = Db.Get();
            var val = db.FIXED_ERP.FirstOrDefault(c => c.NAME.ToUpper() == ID.ToUpper()).VALUE;
            return val;

        }

        public static string GetVal(string ID)
        {
            var db = Db.Get();
            try
            {
                var val = db.FIXED_ERP.FirstOrDefault(c => c.NAME.ToUpper() == ID.ToUpper()).VALUE;
                return val;

            }
          catch
            {
                return null;
            }
          

        }


        //public static string GetStaffCodeFromHrunit(decimal HR_ID, string UserID)
        //{
        //    var db = Db.Get();
        //    var ouTParam = new ObjectParameter("P_MANAGER", typeof(string));
        //    var UserFromHr = "";
        //    var sqlStored = db.HR_FUNCTION_PERP.SingleOrDefault(c => c.ID == HR_ID).SQL_QUERY;
        //    if (sqlStored == "GET_DEPARTMENT_MANAGER")
        //        db.GET_DEPARTMENT_MANAGER(UserID, ouTParam);

        //    else if (sqlStored == "GET_UNIT_MANAGER")
        //        db.GET_UNIT_MANAGER(UserID, ouTParam);
        //    else if (sqlStored == "GET_SECTION_MANAGER")
        //        db.GET_SECTION_MANAGER(UserID, ouTParam);

        //    else if (sqlStored == "GET_MAYOR")
        //        db.GET_MAYOR(ouTParam);
        //    else if (sqlStored == "GET_MUNICIPALITY_MANAGER")
        //        db.GET_MUNICIPALITY_MANAGER(ouTParam);
        //    else if (sqlStored == "GET_SUPERVISOR")
        //        db.GET_SUPERVISOR(UserID, ouTParam);
        //    //else if (sqlStored == "GET_SUPERVISOR")
        //    //    db.get(UserID, ouTParam);



        //    //if (HR_ID == 1)
        //    //{

        //    //}
        //    //else if (HR_ID == 2)
        //    //{
        //    //    {

        //    //    }
        //    //}
        //    //else
        //    //{
        //    //    db.GET_DEPARTMENT_MANAGER(UserID, ouTParam);
        //    //}
        //    if (ouTParam.Value.GetType() != typeof(DBNull))
        //    {
        //        UserFromHr = ouTParam.Value.ToString();
        //    }
        //    return UserFromHr;
        //}

        public static bool CheckHaveFcrate()
        {
            var db = Db.Get();
            var datenow = DateTime.Now.Date;
          
            var obj = db.CURN_RATES.Any(c => (c.CURN_CODE == "JD") && EntityFunctions.TruncateTime(c.UDATE) == datenow);
            if (obj == false)
                return false;

            var obj2 = db.CURN_RATES.Any(c => (c.CURN_CODE == "US") && EntityFunctions.TruncateTime(c.UDATE) == datenow);
            if (obj2 == false)
                return false;


            var obj3 = db.CURN_RATES.Any(c => (c.CURN_CODE == "EUO") && EntityFunctions.TruncateTime(c.UDATE) == datenow);
            if (obj3 == false)
                return false;
            return true;
        }
            
        //public static string GetTechnicUser(decimal StockID)
        //{
        //    var db = Db.Get();
        //    var ouTParam = new ObjectParameter("P_TECHNICIAN_STAFF", typeof(string));
        //    var UserFromHr = "";
        //    db.GET_TECHNICIAN(StockID, ouTParam);
        //    if (ouTParam.Value.GetType() != typeof(DBNull))
        //    {
        //        UserFromHr = ouTParam.Value.ToString();
        //    }
        //    return UserFromHr;
        //}
        public static bool CheckStringIsNumber(string val)
        {
            decimal n;
            bool isNumeric = decimal.TryParse(val, out n);
            return isNumeric;

        }
        //public static decimal GetQntRemain(decimal StockID)
        //{
        //    var db = Db.Get();
        //    var AvailableDept = default(decimal);
        //    var AvailableCredit = default(decimal);
        //    var ReservedDept = default(decimal);
        //    var ReservedCredit = default(decimal);
        //    try
        //    {
        //        AvailableDept = (decimal)db.STKTRANS_ERP.Where(c => c.STOCK_ID == StockID && c.TRANS_TYPE == "D").ToList().Sum(c => c.QUANTITY);
        //    }
        //    catch
        //    {
        //        AvailableDept = 0;
        //    }
        //    try
        //    {
        //        AvailableCredit = (decimal)db.STKTRANS_ERP.Where(c => c.STOCK_ID == StockID && c.TRANS_TYPE == "C").ToList().Sum(c => c.QUANTITY);

        //    }
        //    catch
        //    {
        //        AvailableCredit = 0;
        //    }

        //    try
        //    {
        //        ReservedDept = (decimal)db.STKTRANS_TEMP_ERP.Where(c => c.STOCK_ID == StockID && c.TRANS_TYPE == "D").ToList().Sum(c => c.QUANTITY);
        //    }
        //    catch
        //    {
        //        ReservedDept = 0;

        //    }
        //    try
        //    {
        //        ReservedCredit = (decimal)db.STKTRANS_TEMP_ERP.Where(c => c.STOCK_ID == StockID && c.TRANS_TYPE == "C").ToList().Sum(c => c.QUANTITY);
        //    }
        //    catch
        //    {
        //        ReservedCredit = 0;

        //    }
        //    var ReamainStock = (AvailableDept - AvailableCredit) - (ReservedDept - ReservedCredit);
        //    return ReamainStock;

        //}
        //public static decimal GetQntRemainForStore(decimal StockID, decimal STORE_ID)
        //{
        //    var db = Db.Get();
        //    var AvailableDept = default(decimal);
        //    var AvailableCredit = default(decimal);
        //    var ReservedDept = default(decimal);
        //    var ReservedCredit = default(decimal);
        //    try
        //    {
        //        AvailableDept = (decimal)db.STKTRANS_ERP.Where(c => c.STOCK_ID == StockID && c.TRANS_TYPE == "D" && c.STORE_ID == STORE_ID).Sum(c => c.QUANTITY == null ? 0 : c.QUANTITY);
        //    }
        //    catch
        //    {
        //        AvailableDept = 0;
        //    }
        //    try
        //    {
        //        AvailableCredit = (decimal)db.STKTRANS_ERP.Where(c => c.STOCK_ID == StockID && c.TRANS_TYPE == "C" && c.STORE_ID == STORE_ID).Sum(c => c.QUANTITY == null ? 0 : c.QUANTITY);

        //    }
        //    catch
        //    {
        //        AvailableCredit = 0;
        //    }

        //    try
        //    {
        //        ReservedDept = (decimal)db.STKTRANS_TEMP_ERP.Where(c => c.STOCK_ID == StockID && c.TRANS_TYPE == "D" && c.STORE_ID == STORE_ID).Sum(c => c.QUANTITY == null ? 0 : c.QUANTITY);
        //    }
        //    catch
        //    {
        //        ReservedDept = 0;

        //    }
        //    try
        //    {
        //        ReservedCredit = (decimal)db.STKTRANS_TEMP_ERP.Where(c => c.STOCK_ID == StockID && c.TRANS_TYPE == "C" && c.STORE_ID == STORE_ID).Sum(c => c.QUANTITY == null ? 0 : c.QUANTITY);
        //    }
        //    catch
        //    {
        //        ReservedCredit = 0;

        //    }
        //    var ReamainStock = (AvailableDept - AvailableCredit) - (ReservedDept - ReservedCredit);
        //    return ReamainStock;

        //}
        public static string GetStaffName(string id)
        {
            var db = Db.Get();
            try
            {
                var name = db.STAFF_ERP.SingleOrDefault(c => c.ID == id).NAME_AR;
                return name;
            }
            catch
            {
                return "";
            }

        }
        public static string EncodeUrl(string encodeMe)
        {
            byte[] encoded = System.Text.Encoding.UTF8.GetBytes(encodeMe);
            return Convert.ToBase64String(encoded);
        }

        public static string DecodeUrl(string decodeMe)
        {
            //byte[] encoded = Convert.FromBase64String(decodeMe);
            //return System.Text.Encoding.UTF8.GetString(encoded);
            return decodeMe;
        }

        //public static bool CheckHaveReciveStocks(string UserID)
        //{
        //    return false;
        //    var db = Db.Get();
        //    var StocOut = db.STOCKOUT_MAS_SERP.Where(c => c.IS_RECEIVED == "N" && c.STATUS == "P" && c.REQUISITION_MAS_PERP.STAFF_ID == UserID).Count();
        //    var purchase = db.PURCHASE_ORDER_MAS_ERP.Count(c => c.IS_RECEIVE == "N" && c.PURCHASE_GROUP_PERP != null && c.PURCHASE_GROUP_PERP.WAY_PURCHASE_ERP != null && c.CANCELED == "N" &&c.PURCHASE_GROUP_PERP.REQUEST_PURCHASE_MAS_PERP.REQUISITION_MAS_PERP.STAFF_ID == UserID && (c.PURCHASE_ORDER_DTL_ERP.All(b => b.STOCKS_ERP.STOCKS_TYPE_ERP.IS_STORABLE == "N") || c.FOR_DEPT == "Y")); 
        //    if (purchase > 0 || StocOut > 0)
        //        return true;
        //    return false;

        //}

        public static IDictionary<string, int> Slugs = new Dictionary<string, int>
  {
    {"this-is-a-slug", 100},
    {"another-slug", 101},
    {"and-another", 102}
  };


        public static EMPLOYEE_HERP GetEmpViaStaffId(string staffId)
        {
            var db = Db.Get();
            var staffObj = db.STAFF_ERP.Where(c => c.ID == staffId).SingleOrDefault();
            var emp = db.EMPLOYEE_HERP.Where(c => c.ID == staffObj.EMPLOYEE_CODE).SingleOrDefault();
            return emp;
        }

        public static string ManagerDep(string depId)
        {
            var db = Db.Get();
            var depManager = db.DEPT_ERP.Where(c => c.ID == depId).SingleOrDefault();
            return depManager.MANAGER_ID;
        }

        public static string ManagerSection(string secId)
        {
            var db = Db.Get();
            var depManager = db.SECTIONS_ERP.Where(c => c.ID == secId).SingleOrDefault();
            return depManager.MANAGER_ID;
        }
        //public static string GetStaffCodeViaHrFunction(decimal hrId, string userID)
        //{
        //    var db = Db.Get();
        //    var staffCode = "";
        //   // var node = db.EDIT_REMOVE_TAX_WF_SETUP_ERP.Where(c => c.ID == hrId).SingleOrDefault();
        //    var sqlStored = db.HR_FUNCTION_PERP.SingleOrDefault(c => c.ID == hrId).SQL_QUERY;
        //    if (sqlStored == "GET_DEPARTMENT_MANAGER")
        //    {
        //    var emp = FixedERPValues.GetEmpViaStaffId(userID);
        //    staffCode = FixedERPValues.ManagerDep(emp.DEPT_ID);
        //    }
        //    else if (sqlStored == "GET_SECTION_MANAGER")
        //    {
        //        var emp = FixedERPValues.GetEmpViaStaffId(userID);
        //        staffCode = FixedERPValues.ManagerSection(emp.SECTION_ID);
        //    }
        //     else if (sqlStored == "GET_MUNICIPALITY_MANAGER")
        //     {
        //         var munManager = FixedERPValues.GetValueAccount("MUNICIPALITY_MANAGER");
        //         staffCode = munManager;
        //     }
        //    else if (sqlStored == "GET_FINANCIAL_MANAGER")
        //     {
        //         var financialManagerId = FixedERPValues.GetValueAccount("FINANCIAL_MANAGER");
        //         staffCode = financialManagerId;
        //     }
        //    return staffCode;
        //}
    }
}