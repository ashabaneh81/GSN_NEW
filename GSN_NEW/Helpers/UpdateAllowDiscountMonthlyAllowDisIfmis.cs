using System;
using System.Collections.Generic;
using System.Linq;
using System.Transactions;
using System.Web;
using ErpDal;

namespace GSN_ERP.Helpers
{
    public class UpdateAllowDiscountMonthlyAllowDisIfmis
    {
        public static string UpdateData()
        {
            using (TransactionScope scope = new TransactionScope())
            {
                try
                {
                    var db = Db.Get();
                    /////UPDAE-AllowHERP/////
                    var allow = db.ALLW_HERP;
                    allow.ToList().ForEach(x =>
                    {
                        x.IS_INCLUDE = "Y";
                        db.ALLW_HERP.Attach(x);
                        db.Entry(x).Property(c => c.IS_INCLUDE).IsModified = true;
                        db.SaveChanges();
                    });

                    ////UPDATE-DISCOUNT
                    var discount = db.DISCOUNTS_HERP;
                    discount.ToList().ForEach(x =>
                    {
                        x.IS_INCLUDE = "N";
                        db.DISCOUNTS_HERP.Attach(x);
                        db.Entry(x).Property(c => c.IS_INCLUDE).IsModified = true;
                        db.SaveChanges();
                    });

                    ////UPDATE-MonthlyAllowDis
                    var monthlyAllowDis = db.MONTHLY_ALLW_DIS_HERP;
                    monthlyAllowDis.ToList().ForEach(x =>
                    {
                        x.IS_INCLUDE = "N";
                        db.MONTHLY_ALLW_DIS_HERP.Attach(x);
                        db.Entry(x).Property(c => c.IS_INCLUDE).IsModified = true;
                        db.SaveChanges();
                    });
                    scope.Complete();
                    return "";
                }
                catch (Exception exp)
                {
                    var error = "";
                    if (exp.InnerException == null)
                        error += "Failure " + exp.Message;
                    else
                        if (exp.InnerException.InnerException == null)
                            error += "Failure " + exp.Message + ". " + exp.InnerException.Message;
                        else
                            error += "Failure " + exp.Message + ". " + exp.InnerException.Message + ". " + exp.InnerException.InnerException.Message;
                    scope.Dispose();
               
                    return error;
                }
            }
            return "";
        }
    }
}