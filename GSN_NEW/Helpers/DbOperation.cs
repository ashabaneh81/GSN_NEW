using ErpDal;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity.Validation;
using System.Linq;
using System.Web;
using System.Web.Mvc;

using System.Data.Objects;

namespace GSN_NEW.Helpers
{
    public struct GltaxField
    {
        public Nullable<decimal> SumAllBefore { get; set; }
        public Nullable<decimal> DedVal { get; set; }
        public Nullable<decimal> SumAllafter { get; set; }

    }

    public struct GltaxDedLate
    {
        public Nullable<decimal> LATE_PER { get; set; }
        public Nullable<decimal> DED_PER { get; set; }


    }


    public struct OutPutReturned
    {
        public bool Sucses;
        public string ErrorMessage;



    }

    public static class DbOperation
    {
        public static bool AddTrans(DbModel db, string UserID, string TACCOUNT_NO, string VOUCHER_TYPE,
            decimal VOUCHER_NO, string TRANS_TYPE, string CURN_CODE, decimal CURN_AMOUNT, decimal LOCAL_AMOUNT,
            decimal FCRATE, string DETAILS, REQUISITION_MAS_PERP requestion = null, BIDDING_ERP Bidding = null)
        {
            var Tr = new TRANS()
            {

                VOUCHER_TYPE = VOUCHER_TYPE,
                VOUCHER_NO = VOUCHER_NO,
                TRANS_TYPE = TRANS_TYPE,
                CURN_CODE = CURN_CODE,
                CURN_AMOUNT = CURN_AMOUNT,
                LOCAL_AMOUNT = LOCAL_AMOUNT,
                FCRATE = FCRATE,
                DETAILS = DETAILS,
                ENTRY_DATE = DateTime.Now,
                TRANS_DATE = DateTime.Now,
                TACCOUNT_NO = TACCOUNT_NO,
                STAFF_CODE = UserID,
                UNIT_ID = requestion != null ? requestion.UNIT_ID : null,




            };
            if (VOUCHER_TYPE == "WS" || VOUCHER_TYPE == "SO" || VOUCHER_TYPE == "SR" || VOUCHER_TYPE == "SB")
            {

                if (requestion != null)
                {
                    if (requestion.IS_PROJECT == "Y")
                    {
                        Tr.PR_NEW = requestion.MAIN_SUB_ID;
                        Tr.FS_NEW = requestion.FUNDER_CODE;


                        Tr.PR_NEW = requestion.MAIN_SUB_ID;

                        if (requestion.FUND_TYPE == "1")
                            Tr.TFUND_CODE = FixedERPValues.GetFund("Budget_FUND");
                        else if (requestion.FUND_TYPE == "2")
                            Tr.TFUND_CODE = FixedERPValues.GetFund("Development_FUND");
                        else if (requestion.FUND_TYPE == "3")
                            Tr.TFUND_CODE = FixedERPValues.GetFund("Funded_FUND");
                    }
                    else
                    {
                        Tr.TFUND_CODE = FixedERPValues.GetFund("tash_fund");
                        Tr.UNIT_ID = requestion.UNIT_ID;

                    }
                }
                if (Bidding != null)
                {
                    if (Bidding.IS_PROJECT == "Y")
                    {
                        Tr.PR_NEW = Bidding.MAIN_SUB_ID;
                        Tr.FS_NEW = Bidding.FUNDER_CODE;


                        Tr.PR_NEW = Bidding.MAIN_SUB_ID;

                        if (Bidding.FUND_TYPE == "1")
                            Tr.TFUND_CODE = FixedERPValues.GetFund("Budget_FUND");

                        else if (Bidding.FUND_TYPE == "2")
                            Tr.TFUND_CODE = FixedERPValues.GetFund("Development_FUND");

                        else if (Bidding.FUND_TYPE == "3")
                            Tr.TFUND_CODE = FixedERPValues.GetFund("Funded_FUND");
                    }
                    else
                    {
                        Tr.TFUND_CODE = FixedERPValues.GetFund("tash_fund");
                        Tr.TCC_CODE = Bidding.CC_CODE;

                    }

                }

            }

            db.TRANS.Add(Tr);
            db.SaveChanges();






            return true;
        }


        public static bool AddSTKTrans(DbModel db, decimal STOCK_ID, string UNIT_ID, decimal STORE_ID, decimal QUANTITY,
            decimal UNIT_AMOUNT, string TRANS_TYPE, string VOUCHER_TYPE, decimal VOUCHER_NO, decimal FCRATE, string CURN)
        {
            var StkTrans = new STKTRANS_ERP()
            {
                ENTRY_DATE = DateTime.Now,
                UNIT_ID = UNIT_ID,
                TRANS_DATE = DateTime.Now,
                STOCK_ID = STOCK_ID,
                QUANTITY = (decimal) QUANTITY,
                STORE_ID = STORE_ID,
                VOUCHER_TYPE = VOUCHER_TYPE,
                TRANS_TYPE = TRANS_TYPE,
                VOUCHER_NO = VOUCHER_NO,
                FCRATE = FCRATE,
                CURN = CURN,
                UNIT_AMOUNT = UNIT_AMOUNT,




            };
            db.STKTRANS_ERP.Add(StkTrans);
            db.SaveChanges();
            return true;

        }


        /// <summary>
        /// ipoiopio
        /// </summary>
        /// <param name="db"></param>
        /// <param name="UserID"></param>
        /// <param name="VOUCHER_TYPE"></param>
        /// <param name="VOUCHER_NO"></param>
        /// <param name="TRANS_TYPE"></param>
        /// <param name="CURN_CODE"></param>
        /// <param name="CURN_AMOUNT"></param>
        /// <param name="LOCAL_AMOUNT"></param>
        /// <param name="FCRATE"></param>
        /// <param name="DETAILS"></param>
        /// <param name="Requestion"></param>
        /// <param name="Bidding"></param>
        /// <param name="Stock"></param>
        /// <returns></returns>
        public static bool AddTransTemp(DbModel db, string UserID, string VOUCHER_TYPE, decimal VOUCHER_NO,
            string TRANS_TYPE, string CURN_CODE, decimal CURN_AMOUNT, decimal LOCAL_AMOUNT, decimal FCRATE,
            string DETAILS, REQUISITION_MAS_PERP Requestion = null, BIDDING_ERP Bidding = null, STOCKS_ERP Stock = null)
        {

            var transTemp2 = new TRANS_TEMP_ERP()
            {
                TRANS_DATE = DateTime.Now,
                ENTRY_DATE = DateTime.Now,
                TRANS_TYPE = TRANS_TYPE,
                VOUCHER_TYPE = VOUCHER_TYPE,
                VOUCHER_NO = VOUCHER_NO,
                CURN_CODE = CURN_CODE,
                CURN_AMOUNT = CURN_AMOUNT,
                LOCAL_AMOUNT = LOCAL_AMOUNT,
                FCRATE = FCRATE,
                STAFF_CODE = UserID,
                DETAILS = DETAILS,

            };

            if (Requestion != null)
            {
                var stockReq =
                    Requestion.REQUISITION_DTL_PERP.Where(v => v.CANCELED == "N" && v.STOCK_ID == Stock.ID)
                        .FirstOrDefault();
                if (Requestion.IS_PROJECT == "Y")
                {
                    transTemp2.PR_NEW = Requestion.MAIN_SUB_ID; //النشاط الفعلي
                    transTemp2.FS_NEW = Requestion.FUNDER_CODE; //جهة التمويل
                    try
                    {
                        transTemp2.PR_NEW = Requestion.MAIN_SUB_ID;
                    }
                    catch
                    {
                        transTemp2.PR_NEW = null;
                    }

                    if (Requestion.FUND_TYPE == "1")
                    {
                        var name = Convert.ToString("Budget_acc").ToUpper();
                        transTemp2.TACCOUNT_NO = FixedERPValues.GetValueAccount(name);
                        transTemp2.TFUND_CODE = FixedERPValues.GetFund("Budget_FUND");

                    }
                    else if (Requestion.FUND_TYPE == "2")
                    {

                        var name = Convert.ToString("Development_acc").ToUpper();
                        transTemp2.TACCOUNT_NO = FixedERPValues.GetValueAccount(name);
                        transTemp2.TFUND_CODE = FixedERPValues.GetFund("Development_FUND");

                    }
                    else
                    {
                        var name = Convert.ToString("Funded_acc").ToUpper();
                        transTemp2.TACCOUNT_NO = FixedERPValues.GetValueAccount(name);
                        transTemp2.TFUND_CODE = FixedERPValues.GetFund("Funded_FUND");
                    }
                }
                else
                {
                    transTemp2.TACCOUNT_NO = stockReq.PURCHASE_ACCOUNT_NO;
                    transTemp2.UNIT_ID = Requestion.UNIT_ID;

                    transTemp2.TFUND_CODE = FixedERPValues.GetFund("tash_fund");
                }





            }

            if (Bidding != null)
            {
                if (Bidding.IS_PROJECT == "Y")
                {
                    transTemp2.PR_NEW = Bidding.MAIN_SUB_ID; //النشاط الفعلي
                    transTemp2.FS_NEW = Bidding.FUNDER_CODE; //جهة التمويل
                    try
                    {
                        transTemp2.PR_NEW = Bidding.MAIN_SUB_ID;
                    }
                    catch
                    {
                        transTemp2.TPR_CODE = null;
                    }

                    if (Bidding.FUND_TYPE == "1")
                    {
                        var name = Convert.ToString("Budget_acc").ToUpper();
                        transTemp2.TACCOUNT_NO = FixedERPValues.GetValueAccount(name);
                        transTemp2.TFUND_CODE = FixedERPValues.GetFund("Budget_FUND");

                    }
                    else if (Bidding.FUND_TYPE == "2")
                    {

                        var name = Convert.ToString("Development_acc").ToUpper();
                        transTemp2.TACCOUNT_NO = FixedERPValues.GetValueAccount(name);
                        transTemp2.TFUND_CODE = FixedERPValues.GetFund("Development_FUND");

                    }
                    else
                    {
                        var name = Convert.ToString("Funded_acc").ToUpper();
                        transTemp2.TACCOUNT_NO = FixedERPValues.GetValueAccount(name);
                        transTemp2.TFUND_CODE = FixedERPValues.GetFund("Funded_FUND");
                    }
                }
                else
                {
                    //transTemp2.TACCOUNT_NO = stockReq.PURCHASE_ACCOUNT_NO;
                    transTemp2.TCC_CODE = Bidding.CC_CODE;
                    transTemp2.TFUND_CODE = FixedERPValues.GetFund("tash_fund");
                }


            }
            db.TRANS_TEMP_ERP.Add(transTemp2);
            db.SaveChanges();
            return true;
        }


        public static bool AddSTKTransTemp(DbModel db, decimal STOCK_ID, string UNIT_ID, decimal Price, decimal STORE_ID,
            decimal QUANTITY, string TRANS_TYPE, string VOUCHER_TYPE, decimal VOUCHER_NO, decimal FCRATE, string CURN,
            decimal? MAIN_SUB_ID = null)
        {
            var StkTrans = new STKTRANS_TEMP_ERP()
            {
                ENTRY_DATE = DateTime.Now,
                TRANS_DATE = DateTime.Now,
                STOCK_ID = STOCK_ID,
                QUANTITY = (decimal) QUANTITY,
                STORE_ID = STORE_ID,
                VOUCHER_TYPE = VOUCHER_TYPE,
                TRANS_TYPE = TRANS_TYPE,
                VOUCHER_NO = VOUCHER_NO,
                FCRATE = FCRATE,
                CURN = CURN,
                UNIT_AMOUNT = Price,
                UNIT_ID = UNIT_ID,
                BATCH_QTY = (decimal) QUANTITY,
                MAIN_SUB_ID = MAIN_SUB_ID

            };
            db.STKTRANS_TEMP_ERP.Add(StkTrans);
            db.SaveChanges();
            return true;

        }


        public static GltaxField GetSumGltax(GLTAX_ERP gltax, DbModel db, decimal Rate)
        {
            var obj = new GltaxField();
            if (gltax.LATE_AMT == null) gltax.LATE_AMT = 0;
            if (gltax.TAX_AMT == null) gltax.TAX_AMT = 0;
            decimal SumAllBefore = 0;
            decimal DedSum = 0;
            decimal sumAllAfter = 0;
            var YearTax = Convert.ToDateTime(gltax.TAX_DATE).Year;
            var YearNow = Convert.ToDateTime(DateTime.Now).Year;
            var dataTodaey = DateTime.Today;
            SumAllBefore = (decimal) (gltax.TAX_AMT + (gltax.LATE_AMT != null ? gltax.LATE_AMT : 0))*Rate;

            var DedList =
                db.TAX_DED.Where(
                    c => c.TAX_CODE == gltax.TAX_CODE && c.DEDUCTION_TYPE_ID == gltax.STAKEHOLDERS_ERP.DEDUCTION_TYPE_ID)
                    .ToList();
            if (gltax.TAX.IS_IN_DED == "Y" && ((gltax.TAX_AMT + NVL(gltax.LATE_AMT)) > 0))
            {
                if (gltax.IS_SCHEDULE == "N")
                {
                    if (gltax.SP_DED_CURR > 0 || gltax.SP_LATE > 0 || gltax.SP_DED_PREV > 0)
                    {
                        if (gltax.SP_DED_UNTIL_DATE != null)
                        {

                            if (DateTime.Now.Date <= gltax.SP_DED_UNTIL_DATE.Value.Date)
                            {
                                if (YearTax == YearNow)
                                {
                                    DedSum += ((decimal) gltax.TAX_AMT*
                                               (gltax.SP_DED_CURR != null ? (decimal) gltax.SP_DED_CURR : 0))/100;
                                }
                                else
                                {
                                    DedSum += ((decimal) gltax.TAX_AMT*
                                               (gltax.SP_DED_PREV != null ? (decimal) gltax.SP_DED_PREV : 0))/100;

                                }
                                DedSum += ((decimal) gltax.LATE_AMT*
                                           (gltax.SP_LATE != null ? (decimal) gltax.SP_LATE : 0))/100;

                                DedSum = DedSum*Rate;
                            }

                        }

                    }
                    else
                        foreach (var item in DedList)
                        {
                            if (dataTodaey.Date >= item.FROM_DATE.Value.Date &&
                                dataTodaey.Date <= item.TO_DATE.Value.Date)
                            {
                                if (YearTax == YearNow)
                                {
                                    DedSum += ((decimal) gltax.TAX_AMT*
                                               (item.DED_PRCNT_CURR != null ? (decimal) item.DED_PRCNT_CURR : 0))/100;
                                    DedSum += (decimal) gltax.LATE_AMT*
                                              (item.DED_PRCNT_LATE != null ? (decimal) item.DED_PRCNT_LATE : 0)/100;


                                }
                                else
                                {
                                    DedSum += (decimal) gltax.TAX_AMT*
                                              (item.DED_PRCNT_PREV != null ? (decimal) item.DED_PRCNT_PREV : 0)/100;
                                    DedSum += (decimal) gltax.LATE_AMT*
                                              (item.DED_PRCNT_LATE_PREV != null ? (decimal) item.DED_PRCNT_LATE_PREV : 0)/
                                              100;

                                }
                                DedSum = DedSum*Rate;
                                break;
                            }

                        }
                }
                else
                {
                    var listSchedul =
                        db.TAX_SCHEDULE_ERP.Where(
                            c =>
                                c.DEDUCTION_TYPE_ID == gltax.STAKEHOLDERS_ERP.DEDUCTION_TYPE_ID &&
                                c.TAX_CODE == gltax.TAX_CODE);
                    foreach (var item in listSchedul)
                    {
                        if (dataTodaey.Date >= item.FROM_DATE.Value.Date && dataTodaey.Date <= item.TO_DATE.Value.Date)
                        {
                            if (YearTax == YearNow)
                            {
                                DedSum += ((decimal) gltax.TAX_AMT*(item.DED_PER != null ? (decimal) item.DED_PER : 0))/
                                          100;
                                DedSum += (decimal) gltax.LATE_AMT*(item.LATE_PER != null ? (decimal) item.LATE_PER : 0)/
                                          100;
                            }
                            else
                            {
                                DedSum += ((decimal) gltax.TAX_AMT*
                                           ((item.DED_PER_PREVY != null) ? (decimal) item.DED_PER_PREVY : 0))/100;
                                DedSum += (decimal) gltax.LATE_AMT*(item.LATE_PER != null ? (decimal) item.LATE_PER : 0)/
                                          100;
                            }

                            DedSum = DedSum*Rate;
                            break;
                        }
                    }

                }
            }



            sumAllAfter = SumAllBefore - DedSum;
            obj.SumAllBefore = SumAllBefore;
            obj.SumAllafter = sumAllAfter;
            obj.DedVal = DedSum;


            return obj;
        }

        public static GltaxDedLate GetLateDedLate(GLTAX_ERP gltax, DbModel db)
        {
            var obj = new GltaxDedLate();
            decimal Ded = 0;
            decimal Late = 0;
            var YearTax = Convert.ToDateTime(gltax.TAX_DATE).Year;
            var YearNow = Convert.ToDateTime(DateTime.Now).Year;
            var dataTodaey = DateTime.Today;
            if (gltax.TAX.IS_IN_DED == "Y" && (gltax.TAX_AMT + NVL(gltax.LATE_AMT)) > 0)
            {
                if (gltax.IS_SCHEDULE == "N")
                {

                    var DedList =
                        db.TAX_DED.Where(
                            c =>
                                c.TAX_CODE == gltax.TAX_CODE &&
                                c.DEDUCTION_TYPE_ID == gltax.STAKEHOLDERS_ERP.DEDUCTION_TYPE_ID).ToList();
                    if (gltax.SP_DED_CURR > 0 || gltax.SP_LATE > 0 || gltax.SP_DED_PREV > 0)
                    {
                        if (gltax.SP_DED_UNTIL_DATE != null)
                        {

                            if (DateTime.Now.Date <= gltax.SP_DED_UNTIL_DATE.Value.Date)
                            {

                                if (YearTax == YearNow)
                                {
                                    Ded = (Convert.ToDecimal(gltax.SP_DED_CURR != null ? gltax.SP_DED_CURR : 0));
                                }
                                else
                                {
                                    Ded = (Convert.ToDecimal(gltax.SP_DED_PREV != null ? gltax.SP_DED_PREV : 0));

                                }
                                Late = (Convert.ToDecimal(gltax.SP_LATE != null ? gltax.SP_LATE : 0));
                            }
                        }

                    }

                    else
                        foreach (var item in DedList)
                        {
                            if (dataTodaey.Date >= item.FROM_DATE.Value.Date &&
                                dataTodaey.Date <= item.TO_DATE.Value.Date)
                            {

                                if (YearTax == YearNow)
                                {
                                    Ded = (Convert.ToDecimal(item.DED_PRCNT_CURR != null ? item.DED_PRCNT_CURR : 0));
                                    Late = (Convert.ToDecimal(item.DED_PRCNT_LATE != null ? item.DED_PRCNT_LATE : 0));
                                }
                                else
                                {
                                    Ded = (Convert.ToDecimal(item.DED_PRCNT_PREV != null ? item.DED_PRCNT_PREV : 0));
                                    Late =
                                        (Convert.ToDecimal(item.DED_PRCNT_LATE_PREV != null
                                            ? item.DED_PRCNT_LATE_PREV
                                            : 0));

                                }
                                break;
                            }

                        }
                }
                else
                {


                    var listSchedul =
                        db.TAX_SCHEDULE_ERP.Where(
                            c =>
                                c.DEDUCTION_TYPE_ID == gltax.STAKEHOLDERS_ERP.DEDUCTION_TYPE_ID &&
                                c.TAX_CODE == gltax.TAX_CODE);
                    foreach (var item in listSchedul)
                    {
                        if (dataTodaey.Date >= item.FROM_DATE.Value.Date && dataTodaey.Date <= item.TO_DATE.Value.Date)
                        {
                            if (YearTax == YearNow)
                            {
                                Ded = (Convert.ToDecimal(item.DED_PER != null ? item.DED_PER : 0));
                                Late = (Convert.ToDecimal(item.LATE_PER != null ? item.LATE_PER : 0));
                            }
                            else
                            {
                                Ded = (Convert.ToDecimal(item.DED_PER_PREVY != null ? item.DED_PER_PREVY : 0));
                                Late = (Convert.ToDecimal(item.LATE_PER != null ? item.LATE_PER : 0));
                            }


                            break;
                        }
                    }


                }
            }
            obj.DED_PER = Ded;
            obj.LATE_PER = Late;
            return obj;
        }

        public static decimal NVL(decimal? val)
        {
            if (val == null) return 0;
            return (decimal) val;

        }

        public static OutPutReturned CalculateTaxForBussiness(decimal ID, decimal AREA, decimal CALCULATED_FROM_YEAR,
            decimal CALCULATED_TO_YEAR, string UserID, DbModel db, bool NewYear = false)
        {
            //
            var output = new OutPutReturned();
            var obj = db.BUSINESS_ERP.SingleOrDefault(c => c.ID == ID);
            obj.AREA = AREA;
            if (obj.IS_CLCULATED == "N")
                obj.CALCULATED_FROM_YEAR = CALCULATED_FROM_YEAR;
            obj.IS_CLCULATED = "Y";
            obj.CALCULATED_TO_YEAR = CALCULATED_TO_YEAR;
            db.BUSINESS_ERP.Attach(obj);
            db.Entry(obj).State = EntityState.Modified;
            db.SaveChanges();
            if (NewYear == true)
                CALCULATED_FROM_YEAR = CALCULATED_TO_YEAR;

            /////////////احتساب رسوم الرخصة


            for (var i = CALCULATED_FROM_YEAR; i <= CALCULATED_TO_YEAR; i++)
            {

                if (obj.BUSINESS_STATUS_ID == 3 && obj.LIC_STATUS_ID == 1)
                    if (obj.B3_ERP != null)
                    {
                        if (obj.B3_ERP.B2_ERP != null)
                        {
                            if (obj.B3_ERP.B2_ERP.B1_ERP != null)
                            {
                                if (obj.B3_ERP.B2_ERP.B1_ERP.TAX_CODE != null)
                                {
                                    var taxBussnis =
                                        db.TAX.SingleOrDefault(c => c.TAX_CODE == obj.B3_ERP.B2_ERP.B1_ERP.TAX_CODE);
                                    var gltax1 = new GLTAX_ERP()
                                    {
                                        BUSINESS_ID = ID,
                                        CURN_CODE = obj.B3_ERP.CURN_CODE,
                                        ENTRY_BY = UserID,
                                        ENTRY_DATE = DateTime.Now,
                                        FCRATE = FixedERPValues.GetRateCurrency(obj.B3_ERP.CURN_CODE),
                                        FUND_CODE = taxBussnis.TFUND_CODE,
                                        HAY_ID = obj.HAY_ID,
                                        HOD_CODE = obj.HOD_CODE,
                                        LAND_ID = obj.LAND_ID,
                                        IS_FREEZE = "N",
                                        IS_INSTALLMENT = "N",
                                        IS_IN_DED = "N",
                                        IS_POSTPONE = "N",
                                        IS_SCHEDULE = "N",
                                        IS_UPDATED = "N",
                                        NOTES =
                                            "احتساب رسوم  رخصة للحرفة " + obj.NAME_AR + " على المكلف " +
                                            obj.STAKEHOLDERS_ERP.NAME_AR + "",
                                        PAID = "N",
                                        YEAR_NO = (short) CALCULATED_FROM_YEAR,
                                        STATUS = "V",
                                        STAKEHOLDER_ID = obj.STAKEHOLDER_ID,
                                        TABUO_APARTMENT = Convert.ToString(obj.TABUO_APRTMENT),
                                        TABUO_BUILDING = obj.TABUO_BUILDING,
                                        TABUO_FLOOR = obj.TABUO_FLOOR,
                                        TAX_DATE =
                                            Convert.ToDateTime("" + DateTime.Now.Day + "/" + DateTime.Now.Month + "/" +
                                                               CALCULATED_FROM_YEAR),
                                        TAX_CODE = taxBussnis.TAX_CODE,
                                        TAX_AMT = (obj.B3_ERP.AMT),
                                    };
                                    if (NewYear)
                                        gltax1.TAX_DATE = Convert.ToDateTime("1/1/" + CALCULATED_TO_YEAR);
                                    db.GLTAX_ERP.Add(gltax1);
                                    db.SaveChanges();
                                    var FundAccountBus = taxBussnis.FUND.ACCOUNT_NO;
                                    var CurrntAccountBus = taxBussnis.THIS_ACCOUNT;
                                    if (FundAccountBus == null)
                                    {
                                        output.ErrorMessage = "خطأ...لا يوجد لا يوجد حساب ذمم للموازنة " +
                                                              taxBussnis.FUND.FUND_NAME + " المربوطة مع الرسم " +
                                                              taxBussnis.TAX_NAME + "";
                                        output.Sucses = false;
                                        return output;
                                    }
                                    if (CurrntAccountBus == null)
                                    {
                                        output.ErrorMessage = "خطأ...لا يوجد لا يوجد حساب حالي للرسم " +
                                                              taxBussnis.TAX_NAME + " ";
                                        output.Sucses = false;
                                        return output;
                                    }
                                    var TransDebit = new TRANS() //Debit ذمم مدينة
                                    {
                                        TACCOUNT_NO = FundAccountBus,
                                        CURN_CODE = gltax1.CURN_CODE,
                                        CURN_AMOUNT = gltax1.TAX_AMT ?? 0,
                                        LOCAL_AMOUNT = (gltax1.TAX_AMT ?? 0)*(gltax1.FCRATE ?? 0),
                                        ENTRY_DATE = DateTime.Now,
                                        FCRATE = (gltax1.FCRATE ?? 0),
                                        TFUND_CODE = taxBussnis.TFUND_CODE,
                                        NOTES =
                                            obj.NOTES + " _   احتساب رسوم تحقق حرفة على حساب الذمم المدينة للرسم " +
                                            taxBussnis.TAX_NAME + "",
                                        DETAILS =
                                            obj.NOTES + " _   احتساب رسوم تحقق حرفة على حساب الذمم المدينة للرسم " +
                                            taxBussnis.TAX_NAME + "",
                                        TRANS_DATE = (DateTime) gltax1.TAX_DATE,
                                        TRANS_TYPE = "D",
                                        //STAKEHOLDER_ID = obj.STAKEHOLDER_ID,
                                        VOUCHER_NO = 0,
                                        VOUCHER_TYPE = "YR",
                                        STAFF_ID = UserID,
                                    };
                                    SetRefAccountforTrans(TransDebit, obj.STAKEHOLDER_ID, null);
                                    db.TRANS.Add(TransDebit);
                                    db.SaveChanges();
                                    var TransCredit = new TRANS() // ذمم دائنة
                                    {
                                        TACCOUNT_NO = CurrntAccountBus,
                                        CURN_CODE = gltax1.CURN_CODE,
                                        CURN_AMOUNT = gltax1.TAX_AMT ?? 0,
                                        LOCAL_AMOUNT = (gltax1.TAX_AMT ?? 0)*(gltax1.FCRATE ?? 0),
                                        ENTRY_DATE = DateTime.Now,
                                        FCRATE = gltax1.FCRATE ?? 0,
                                        TFUND_CODE = taxBussnis.TFUND_CODE,
                                        NOTES = obj.NOTES + " _   احتساب رسوم حرفة  للرسم " + taxBussnis.TAX_NAME + "",
                                        DETAILS = obj.NOTES + " _   احتساب رسوم حرفة  للرسم " + taxBussnis.TAX_NAME + "",
                                        TRANS_DATE = (DateTime) gltax1.TAX_DATE,
                                        TRANS_TYPE = "C",
                                        //STAKEHOLDER_ID = obj.STAKEHOLDER_ID,
                                        VOUCHER_NO = 0,
                                        VOUCHER_TYPE = "YR",
                                        STAFF_ID = UserID,
                                    };
                                    SetRefAccountforTrans(TransCredit, obj.STAKEHOLDER_ID, null);
                                    db.TRANS.Add(TransCredit);
                                    db.SaveChanges();

                                }

                                else
                                {
                                    output.ErrorMessage = "خطأ...لا يوجد رسم للرخص مربوط مع الحرفة " + obj.NAME_AR + " ";
                                    output.Sucses = false;
                                    return output;
                                }
                            }
                            else
                            {
                                output.ErrorMessage = "خطأ...لا يوجد قانون للحرفة " + obj.NAME_AR + " ";
                                output.Sucses = false;
                                return output;
                            }
                        }
                        else
                        {
                            output.ErrorMessage = "خطأ...لا يوجد قانون للحرفة " + obj.NAME_AR + " ";
                            output.Sucses = false;
                            return output;
                        }



                        ///////////////////////احتساب رسوم مواقف السيارات
                        if (obj.IS_PARKING_TAX == "Y")
                        {
                            var taxParking =
                                db.TAX.SingleOrDefault(c => c.TAX_CODE == obj.B3_ERP.B2_ERP.B1_ERP.TAX_PARKING_CODE);
                            var gltaxParking = new GLTAX_ERP()
                            {
                                BUSINESS_ID = ID,
                                CURN_CODE = obj.B3_ERP.B2_ERP.B1_ERP.CURN_CODE_PER_CAR_TRUCK,
                                ENTRY_BY = UserID,
                                ENTRY_DATE = DateTime.Now,
                                FCRATE =
                                    FixedERPValues.GetRateCurrency(obj.B3_ERP.B2_ERP.B1_ERP.CURN_CODE_PER_CAR_TRUCK),
                                FUND_CODE = taxParking.TFUND_CODE,
                                HAY_ID = obj.HAY_ID,
                                HOD_CODE = obj.HOD_CODE,
                                LAND_ID = obj.LAND_ID,
                                IS_FREEZE = "N",
                                IS_INSTALLMENT = "N",
                                IS_IN_DED = "N",
                                IS_POSTPONE = "N",
                                IS_SCHEDULE = "N",
                                IS_UPDATED = "N",
                                NOTES =
                                    "احتساب رسوم  مواقف سيارات للحرفة " + obj.NAME_AR + " على المكلف " +
                                    obj.STAKEHOLDERS_ERP.NAME_AR + "",
                                PAID = "N",
                                YEAR_NO = (short) CALCULATED_FROM_YEAR,
                                STATUS = "V",
                                STAKEHOLDER_ID = obj.STAKEHOLDER_ID,
                                TABUO_APARTMENT = Convert.ToString(obj.TABUO_APRTMENT),
                                TABUO_BUILDING = obj.TABUO_BUILDING,
                                TABUO_FLOOR = obj.TABUO_FLOOR,
                                TAX_DATE =
                                    Convert.ToDateTime("" + DateTime.Now.Day + "/" + DateTime.Now.Month + "/" +
                                                       CALCULATED_FROM_YEAR),
                                TAX_CODE = taxParking.TAX_CODE,
                                //TAX_AMT = (obj.NO_PARKING_CARS*obj.B3_ERP.B2_ERP.B1_ERP.YEARLY_AMT_PER_CAR),
                            };

                            if (obj.BUSS_CLASS == "T")
                                gltaxParking.TAX_AMT = (obj.NO_PARKING_CARS*obj.B3_ERP.B2_ERP.B1_ERP.YEARLY_AMT_PER_CAR);
                            else
                                gltaxParking.TAX_AMT = (obj.NO_PARKING_CARS*obj.B3_ERP.B2_ERP.B1_ERP.YEARLY_AMT_PER_CAR) +
                                                       (obj.NO_PARKING_TRUCK*
                                                        obj.B3_ERP.B2_ERP.B1_ERP.YEARLY_AMT_PER_TRUCK);

                            if (NewYear)
                                gltaxParking.TAX_DATE = Convert.ToDateTime("1/1/" + CALCULATED_TO_YEAR);
                            db.GLTAX_ERP.Add(gltaxParking);
                            db.SaveChanges();
                            var FundAccountpark = taxParking.FUND.ACCOUNT_NO;
                            var CurrntAccountpark = taxParking.THIS_ACCOUNT;
                            if (FundAccountpark == null)
                            {
                                output.ErrorMessage = "خطأ...لا يوجد لا يوجد حساب ذمم للموازنة " +
                                                      taxParking.FUND.FUND_NAME + " المربوطة مع الرسم " +
                                                      taxParking.TAX_NAME + "";
                                output.Sucses = false;
                                return output;
                            }
                            if (CurrntAccountpark == null)
                            {
                                output.ErrorMessage = "خطأ...لا يوجد لا يوجد حساب حالي للرسم " + taxParking.TAX_NAME +
                                                      " ";
                                output.Sucses = false;
                                return output;
                            }
                            var TransDebitPark = new TRANS() //Debit ذمم مدينة
                            {
                                TACCOUNT_NO = FundAccountpark,
                                CURN_CODE = gltaxParking.CURN_CODE,
                                CURN_AMOUNT = gltaxParking.TAX_AMT ?? 0,
                                LOCAL_AMOUNT = (gltaxParking.TAX_AMT ?? 0)*(gltaxParking.FCRATE ?? 0),
                                ENTRY_DATE = DateTime.Now,
                                FCRATE = (gltaxParking.FCRATE ?? 0),
                                TFUND_CODE = taxParking.TFUND_CODE,
                                NOTES =
                                    obj.NOTES + " _   احتساب رسوم مواقف سيارات على حساب الذمم المدينة للرسم " +
                                    taxParking.TAX_NAME + "",
                                DETAILS =
                                    obj.NOTES + " _   احتساب رسوم تحقق حرفة على حساب الذمم المدينة للرسم " +
                                    taxParking.TAX_NAME + "",
                                TRANS_DATE = (DateTime) gltaxParking.TAX_DATE,
                                TRANS_TYPE = "D",
                                //STAKEHOLDER_ID = obj.STAKEHOLDER_ID,
                                VOUCHER_NO = 0,
                                VOUCHER_TYPE = "YR",
                                STAFF_ID = UserID,
                            };
                            SetRefAccountforTrans(TransDebitPark, obj.STAKEHOLDER_ID, null);
                            db.TRANS.Add(TransDebitPark);
                            db.SaveChanges();
                            var TransCreditPark = new TRANS() // ذمم دائنة
                            {
                                TACCOUNT_NO = CurrntAccountpark,
                                CURN_CODE = gltaxParking.CURN_CODE,
                                CURN_AMOUNT = gltaxParking.TAX_AMT ?? 0,
                                LOCAL_AMOUNT = (gltaxParking.TAX_AMT ?? 0)*(gltaxParking.FCRATE ?? 0),
                                ENTRY_DATE = DateTime.Now,
                                FCRATE = gltaxParking.FCRATE ?? 0,
                                TFUND_CODE = taxParking.TFUND_CODE,
                                NOTES = obj.NOTES + " _   احتساب رسوم مواقف سياراتة  للرسم " + taxParking.TAX_NAME + "",
                                DETAILS =
                                    obj.NOTES + " _   احتساب رسوم مواقف سيارات   للرسم " + taxParking.TAX_NAME + "",
                                TRANS_DATE = (DateTime) gltaxParking.TAX_DATE,
                                TRANS_TYPE = "C",
                                //STAKEHOLDER_ID = obj.STAKEHOLDER_ID,
                                VOUCHER_NO = 0,
                                VOUCHER_TYPE = "YR",
                                STAFF_ID = UserID,
                            };
                            SetRefAccountforTrans(TransCreditPark, obj.STAKEHOLDER_ID, null);
                            db.TRANS.Add(TransCreditPark);
                            db.SaveChanges();
                        }


                        var RemainParking = (obj.NO_PARKING_REQUIRED != null ? obj.NO_PARKING_REQUIRED : 0) -
                                            (obj.NO_PARKING_AVAILABLE != null ? obj.NO_PARKING_AVAILABLE : 0);
                        if (RemainParking > 0)
                        {
                            var taxNoAvailabeParking =
                                db.TAX.SingleOrDefault(
                                    c => c.TAX_CODE == obj.B3_ERP.B2_ERP.B1_ERP.TAX_NOT_AVAILABLE_PARKING_CODE);
                            var gltaxNotParking = new GLTAX_ERP()
                            {
                                BUSINESS_ID = ID,
                                CURN_CODE = obj.B3_ERP.B2_ERP.CURN_CODE_PARKING,
                                ENTRY_BY = UserID,
                                ENTRY_DATE = DateTime.Now,
                                FCRATE = FixedERPValues.GetRateCurrency(obj.B3_ERP.B2_ERP.CURN_CODE_PARKING),
                                FUND_CODE = taxNoAvailabeParking.TFUND_CODE,
                                HAY_ID = obj.HAY_ID,
                                HOD_CODE = obj.HOD_CODE,
                                LAND_ID = obj.LAND_ID,
                                IS_FREEZE = "N",
                                IS_INSTALLMENT = "N",
                                IS_IN_DED = "N",
                                IS_POSTPONE = "N",
                                IS_SCHEDULE = "N",
                                IS_UPDATED = "N",
                                NOTES =
                                    "احتساب رسوم عدم توفر مواقف " + obj.NAME_AR + " على المكلف " +
                                    obj.STAKEHOLDERS_ERP.NAME_AR + "",
                                PAID = "N",
                                YEAR_NO = (short) CALCULATED_FROM_YEAR,
                                STATUS = "V",
                                STAKEHOLDER_ID = obj.STAKEHOLDER_ID,
                                TABUO_APARTMENT = Convert.ToString(obj.TABUO_APRTMENT),
                                TABUO_BUILDING = obj.TABUO_BUILDING,
                                TABUO_FLOOR = obj.TABUO_FLOOR,
                                TAX_DATE =
                                    Convert.ToDateTime("" + DateTime.Now.Day + "/" + DateTime.Now.Month + "/" +
                                                       CALCULATED_FROM_YEAR),
                                TAX_CODE = taxNoAvailabeParking.TAX_CODE,
                                TAX_AMT = (RemainParking*obj.B3_ERP.B2_ERP.AMT_PARKING),
                            };
                            if (gltaxNotParking.TAX_AMT > obj.B3_ERP.B2_ERP.MAX_AMT_PARKING)
                                gltaxNotParking.TAX_AMT = obj.B3_ERP.B2_ERP.MAX_AMT_PARKING;


                            if (NewYear)
                                gltaxNotParking.TAX_DATE = Convert.ToDateTime("1/1/" + CALCULATED_TO_YEAR);
                            db.GLTAX_ERP.Add(gltaxNotParking);
                            db.SaveChanges();
                            var FundAccountpark = taxNoAvailabeParking.FUND.ACCOUNT_NO;
                            var CurrntAccountpark = taxNoAvailabeParking.THIS_ACCOUNT;
                            if (FundAccountpark == null)
                            {
                                output.ErrorMessage = "خطأ...لا يوجد لا يوجد حساب ذمم للموازنة " +
                                                      taxNoAvailabeParking.FUND.FUND_NAME + " المربوطة مع الرسم " +
                                                      taxNoAvailabeParking.TAX_NAME + "";
                                output.Sucses = false;
                                return output;
                            }
                            if (CurrntAccountpark == null)
                            {
                                output.ErrorMessage = "خطأ...لا يوجد لا يوجد حساب حالي للرسم " +
                                                      taxNoAvailabeParking.TAX_NAME + " ";
                                output.Sucses = false;
                                return output;
                            }
                            var TransDebitNotPark = new TRANS() //Debit ذمم مدينة
                            {
                                TACCOUNT_NO = FundAccountpark,
                                CURN_CODE = gltaxNotParking.CURN_CODE,
                                CURN_AMOUNT = gltaxNotParking.TAX_AMT ?? 0,
                                LOCAL_AMOUNT = (gltaxNotParking.TAX_AMT ?? 0)*(gltaxNotParking.FCRATE ?? 0),
                                ENTRY_DATE = DateTime.Now,
                                FCRATE = gltaxNotParking.FCRATE ?? 0,
                                TFUND_CODE = taxNoAvailabeParking.TFUND_CODE,
                                NOTES =
                                    obj.NOTES + " _   احتساب رسوم عدم توفر مواقف على حساب الذمم المدينة للرسم " +
                                    taxNoAvailabeParking.TAX_NAME + "",
                                DETAILS =
                                    obj.NOTES + " _   احتساب رسوم عدم توفر مواقف على حساب الذمم المدينة للرسم " +
                                    taxNoAvailabeParking.TAX_NAME + "",
                                TRANS_DATE = (DateTime) gltaxNotParking.TAX_DATE,
                                TRANS_TYPE = "D",
                                //STAKEHOLDER_ID = obj.STAKEHOLDER_ID,
                                VOUCHER_NO = 0,
                                VOUCHER_TYPE = "YR",
                                STAFF_ID = UserID,
                            };
                            SetRefAccountforTrans(TransDebitNotPark, obj.STAKEHOLDER_ID, null);
                            db.TRANS.Add(TransDebitNotPark);
                            db.SaveChanges();
                            var TransCreditNotPark = new TRANS() // ذمم دائنة
                            {
                                TACCOUNT_NO = CurrntAccountpark,
                                CURN_CODE = gltaxNotParking.CURN_CODE,
                                CURN_AMOUNT = gltaxNotParking.TAX_AMT ?? 0,
                                LOCAL_AMOUNT = (gltaxNotParking.TAX_AMT ?? 0)*(gltaxNotParking.FCRATE ?? 0),
                                ENTRY_DATE = DateTime.Now,
                                FCRATE = gltaxNotParking.FCRATE ?? 0,
                                TFUND_CODE = taxNoAvailabeParking.TFUND_CODE,
                                NOTES =
                                    obj.NOTES + " _   احتساب رسوم عدم توفر مواقف سيارات  للرسم " +
                                    taxNoAvailabeParking.TAX_NAME + "",
                                DETAILS =
                                    obj.NOTES + " _   احتساب رسوم مواقف سيارات   للرسم " + taxNoAvailabeParking.TAX_NAME +
                                    "",
                                TRANS_DATE = (DateTime) gltaxNotParking.TAX_DATE,
                                TRANS_TYPE = "C",
                                //STAKEHOLDER_ID = obj.STAKEHOLDER_ID,
                                VOUCHER_NO = 0,
                                VOUCHER_TYPE = "YR",
                                STAFF_ID = UserID,
                            };
                            SetRefAccountforTrans(TransCreditNotPark, obj.STAKEHOLDER_ID, null);
                            db.TRANS.Add(TransCreditNotPark);
                            db.SaveChanges();

                        }
                        //////////////////////////


                    }
                    else
                    {
                        output.ErrorMessage = "خطأ...لا يوجد درجة للحرفة " + obj.NAME_AR + " ";
                        output.Sucses = false;
                        return output;
                    }
                ///////////////////////////////////////////////////////////////////////////////////////////////



                ////// احتساب رسوم النفايات

                if ((obj.BUSINESS_STATUS_ID == 3 || obj.BUSINESS_STATUS_ID == 2))
                    if (obj.B3_ERP != null)
                    {
                        if (obj.B3_ERP.B2_ERP != null)
                        {
                            if (obj.B3_ERP.B2_ERP.B1_ERP != null)
                            {
                                if (obj.B3_ERP.B2_ERP.B1_ERP.TAX_WASTE_CODE != null)
                                {
                                    decimal minAmtWaste = 0;
                                    decimal MaxAmtWaste = 0;
                                    decimal FROM_AREAWaste = 0;
                                    decimal TO_AREAWaste = 0;
                                    decimal AmtWaste = 0;
                                    decimal TaxAmt = 0;
                                    bool inB2Waste = false;
                                    var taxWasteobj =
                                        db.TAX.SingleOrDefault(
                                            c => c.TAX_CODE == obj.B3_ERP.B2_ERP.B1_ERP.TAX_WASTE_CODE);
                                    var FundAccountwast = taxWasteobj.FUND.ACCOUNT_NO;
                                    var CurrntAccountwast = taxWasteobj.THIS_ACCOUNT;
                                    if (FundAccountwast == null)
                                    {
                                        output.ErrorMessage = "خطأ...لا يوجد لا يوجد حساب ذمم للموازنة " +
                                                              taxWasteobj.FUND.FUND_NAME + " المربوطة مع الرسم " +
                                                              taxWasteobj.TAX_NAME + "";
                                        output.Sucses = false;
                                        return output;
                                    }

                                    if (CurrntAccountwast == null)
                                    {
                                        output.ErrorMessage = "خطأ...لا يوجد لا يوجد حساب حالي للرسم " +
                                                              taxWasteobj.TAX_NAME + " ";
                                        output.Sucses = false;
                                        return output;
                                    }
                                    if (obj.AREA > 2000)
                                    {
                                        var AreaFor2000 =
                                            obj.B3_ERP.B2_ERP.B2_WASTE_ERP.OrderBy(c => c.FROM_AREA).FirstOrDefault();
                                        TaxAmt = AreaFor2000.AMT*2000;
                                        if (TaxAmt < AreaFor2000.MIN_AMT)
                                            TaxAmt = AreaFor2000.MIN_AMT;
                                        if (TaxAmt > AreaFor2000.MAX_AMT)
                                            TaxAmt = AreaFor2000.MAX_AMT;

                                        var Areagrater2000 =
                                            obj.B3_ERP.B2_ERP.B2_WASTE_ERP.Where(c => c.FROM_AREA >= 2000)
                                                .OrderBy(c => c.FROM_AREA)
                                                .FirstOrDefault();
                                        var part2Amt = (obj.AREA - 2000)*Areagrater2000.AMT;
                                        if (part2Amt < Areagrater2000.MIN_AMT)
                                            part2Amt = Areagrater2000.MIN_AMT;
                                        if (part2Amt > Areagrater2000.MAX_AMT)
                                            part2Amt = Areagrater2000.MAX_AMT;
                                        TaxAmt += (decimal) part2Amt;

                                    }
                                    else
                                    {
                                        foreach (var itemsB2_Waste in obj.B3_ERP.B2_ERP.B2_WASTE_ERP)
                                        {


                                            if (obj.AREA >= itemsB2_Waste.FROM_AREA && obj.AREA <= itemsB2_Waste.TO_AREA)
                                            {
                                                inB2Waste = true;
                                                FROM_AREAWaste = (decimal) itemsB2_Waste.FROM_AREA;
                                                TO_AREAWaste = (decimal) itemsB2_Waste.TO_AREA;
                                                minAmtWaste = (decimal) itemsB2_Waste.MIN_AMT;
                                                MaxAmtWaste = (decimal) itemsB2_Waste.MAX_AMT;
                                                AmtWaste = (decimal) itemsB2_Waste.AMT;
                                                break;
                                            }

                                            if (inB2Waste == true)
                                            {
                                                TaxAmt = (decimal) obj.AREA*AmtWaste;
                                                if (TaxAmt < minAmtWaste)
                                                    TaxAmt = minAmtWaste;
                                                if (TaxAmt > MaxAmtWaste)
                                                    TaxAmt = MaxAmtWaste;

                                            }
                                            else
                                            {
                                                output.ErrorMessage = "خطأ...يوجد خطأ في قانون النفايات  للحرفة " +
                                                                      obj.NAME_AR + " ";
                                                output.Sucses = false;
                                                return output;
                                            }



                                        }
                                    }



                                    //else
                                    //   {
                                    //       TaxAmt= (decimal)obj.AREA * AmtMainWaste;
                                    //   }
                                    //if(TaxAmt< minAmtMainWaste)
                                    //   {
                                    //       TaxAmt =(decimal) minAmtMainWaste;
                                    //   }
                                    //   if (TaxAmt > maxAmtMainWaste)
                                    //   {
                                    //       TaxAmt = (decimal)maxAmtMainWaste;
                                    //   }

                                    if (TaxAmt > 0)
                                    {
                                        var gltaxWaste = new GLTAX_ERP()
                                        {
                                            BUSINESS_ID = ID,
                                            CURN_CODE = taxWasteobj.CURN_CODE,
                                            ENTRY_BY = UserID,
                                            ENTRY_DATE = DateTime.Now,
                                            FCRATE = FixedERPValues.GetRateCurrency(taxWasteobj.CURN_CODE),
                                            FUND_CODE = taxWasteobj.TFUND_CODE,
                                            HAY_ID = obj.HAY_ID,
                                            HOD_CODE = obj.HOD_CODE,
                                            LAND_ID = obj.LAND_ID,
                                            IS_FREEZE = "N",
                                            IS_INSTALLMENT = "N",
                                            IS_IN_DED = "N",
                                            IS_POSTPONE = "N",
                                            IS_SCHEDULE = "N",
                                            IS_UPDATED = "N",
                                            NOTES =
                                                "احتساب تحققات لنفايات الحرفة " + obj.NAME_AR + " على المكلف " +
                                                obj.STAKEHOLDERS_ERP.NAME_AR + "",
                                            PAID = "N",
                                            YEAR_NO = (short) CALCULATED_FROM_YEAR,
                                            STATUS = "V",
                                            STAKEHOLDER_ID = obj.STAKEHOLDER_ID,
                                            TABUO_APARTMENT = Convert.ToString(obj.TABUO_APRTMENT),
                                            TABUO_BUILDING = obj.TABUO_BUILDING,
                                            TABUO_FLOOR = obj.TABUO_FLOOR,
                                            TAX_DATE =
                                                Convert.ToDateTime("" + DateTime.Now.Day + "/" + DateTime.Now.Month +
                                                                   "/" + CALCULATED_FROM_YEAR),
                                            TAX_CODE = obj.B3_ERP.B2_ERP.B1_ERP.TAX_WASTE_CODE,
                                            TAX_AMT = TaxAmt,
                                        };
                                        if (NewYear)
                                            gltaxWaste.TAX_DATE = Convert.ToDateTime("1/1/" + CALCULATED_TO_YEAR);
                                        db.GLTAX_ERP.Add(gltaxWaste);
                                        db.SaveChanges();

                                        var TransDebitw = new TRANS() //Debit ذمم مدينة
                                        {
                                            TACCOUNT_NO = FundAccountwast,
                                            CURN_CODE = taxWasteobj.CURN_CODE,
                                            CURN_AMOUNT = gltaxWaste.TAX_AMT ?? 0,
                                            LOCAL_AMOUNT = (gltaxWaste.TAX_AMT ?? 0)*(gltaxWaste.FCRATE ?? 0),
                                            ENTRY_DATE = DateTime.Now,
                                            FCRATE = (gltaxWaste.FCRATE ?? 0),
                                            TFUND_CODE = taxWasteobj.TFUND_CODE,
                                            NOTES =
                                                obj.NOTES + " _ احتساب رسوم  تحقق نفايات  للرسم " + taxWasteobj.TAX_NAME +
                                                "",
                                            DETAILS =
                                                obj.NOTES + " _ احتساب رسوم تحقق نفايات للرسم " + taxWasteobj.TAX_NAME +
                                                "",
                                            TRANS_DATE = (DateTime) gltaxWaste.TAX_DATE,
                                            TRANS_TYPE = "D",
                                            // STAKEHOLDER_ID = obj.STAKEHOLDER_ID,
                                            VOUCHER_NO = 0,
                                            VOUCHER_TYPE = "YR",
                                            STAFF_ID = UserID,
                                        };
                                        SetRefAccountforTrans(TransDebitw, obj.STAKEHOLDER_ID, null);
                                        db.TRANS.Add(TransDebitw);
                                        db.SaveChanges();
                                        var TransCreditw = new TRANS() // حساب الرسم الحالي
                                        {
                                            TACCOUNT_NO = CurrntAccountwast,
                                            CURN_CODE = taxWasteobj.CURN_CODE,
                                            CURN_AMOUNT = gltaxWaste.TAX_AMT ?? 0,
                                            LOCAL_AMOUNT = (gltaxWaste.TAX_AMT ?? 0)*(gltaxWaste.FCRATE ?? 0),
                                            ENTRY_DATE = DateTime.Now,
                                            FCRATE = gltaxWaste.FCRATE ?? 0,
                                            TFUND_CODE = taxWasteobj.TFUND_CODE,
                                            NOTES =
                                                obj.NOTES + " _   احتساب رسوم تحقق نفايات   للرسم " +
                                                taxWasteobj.TAX_NAME + "",
                                            DETAILS =
                                                obj.NOTES + " _   احتساب رسوم تحقق نفايات  للرسم " +
                                                taxWasteobj.TAX_NAME + "",
                                            TRANS_DATE = (DateTime) gltaxWaste.TAX_DATE,
                                            TRANS_TYPE = "C",
                                            //STAKEHOLDER_ID = obj.STAKEHOLDER_ID,
                                            VOUCHER_NO = 0,
                                            VOUCHER_TYPE = "YR",
                                            STAFF_ID = UserID,
                                        };
                                        SetRefAccountforTrans(TransCreditw, obj.STAKEHOLDER_ID, null);
                                        db.TRANS.Add(TransCreditw);
                                        db.SaveChanges();

                                    }


                                }
                                else
                                {
                                    output.ErrorMessage = "خطأ...لا يوجد رسم نفايات مربوط مع الحرفة " + obj.NAME_AR +
                                                          " ";
                                    output.Sucses = false;
                                    return output;
                                }


                            }
                            else
                            {
                                output.ErrorMessage = "خطأ...لا يوجد قانون للحرفة " + obj.NAME_AR + " ";
                                output.Sucses = false;
                                return output;
                            }

                        }
                        else
                        {
                            output.ErrorMessage = "خطأ...لا يوجد قانون للحرفة " + obj.NAME_AR + " ";
                            output.Sucses = false;
                            return output;

                        }

                    }
                    else
                    {
                        output.ErrorMessage = "خطأ...لا يوجد قانون للحرفة " + obj.NAME_AR + " ";
                        output.Sucses = false;
                        return output;
                    }

                //////////////////////////////////////////////////////////////

                ///////// احتساب رسوم الصرف الصحي
                if ((obj.BUSINESS_STATUS_ID == 3 || obj.BUSINESS_STATUS_ID == 2))
                    if (obj.SEWAGE_LAW_ID != null && obj.SEWAGE == "Y")
                    {
                        var taxSewage = obj.SEWAGE_LAW_ERP.TAX;
                        var FundAccountSewage = taxSewage.FUND.ACCOUNT_NO;
                        var CurrntAccountSewage = taxSewage.THIS_ACCOUNT;

                        if (FundAccountSewage == null)
                        {
                            output.ErrorMessage = "خطأ...لا يوجد لا يوجد حساب ذمم للموازنة " + taxSewage.FUND.FUND_NAME +
                                                  " المربوطة مع الرسم " + taxSewage.TAX_NAME + "";
                            output.Sucses = false;
                            return output;
                        }

                        if (CurrntAccountSewage == null)
                        {
                            output.ErrorMessage = "خطأ...لا يوجد لا يوجد حساب حالي للرسم " + taxSewage.TAX_NAME + " ";
                            output.Sucses = false;
                            return output;
                        }
                        var minamt = obj.SEWAGE_LAW_ERP.AMT_MIN;
                        var maxamt = obj.SEWAGE_LAW_ERP.AMT_MAX;
                        var AMT_WITH_AREA_CONDITION = obj.SEWAGE_LAW_ERP.AMT_WITH_AREA_CONDITION;
                        var areacondition = obj.SEWAGE_LAW_ERP.AREA_CONDITION;
                        var gltaxSewage = new GLTAX_ERP()
                        {
                            BUSINESS_ID = ID,
                            CURN_CODE = taxSewage.CURN_CODE,
                            ENTRY_BY = UserID,
                            ENTRY_DATE = DateTime.Now,
                            FCRATE = FixedERPValues.GetRateCurrency(taxSewage.CURN_CODE),
                            FUND_CODE = taxSewage.TFUND_CODE,
                            HAY_ID = obj.HAY_ID,
                            HOD_CODE = obj.HOD_CODE,
                            LAND_ID = obj.LAND_ID,
                            IS_FREEZE = "N",
                            IS_INSTALLMENT = "N",
                            IS_IN_DED = "N",
                            IS_POSTPONE = "N",
                            IS_SCHEDULE = "N",
                            IS_UPDATED = "N",
                            NOTES = "احتساب رسوم تحققات صرف صحي",
                            PAID = "N",
                            YEAR_NO = (short) CALCULATED_FROM_YEAR,
                            STATUS = "V",
                            STAKEHOLDER_ID = obj.STAKEHOLDER_ID,
                            TABUO_APARTMENT = Convert.ToString(obj.TABUO_APRTMENT),
                            TABUO_BUILDING = obj.TABUO_BUILDING,
                            TABUO_FLOOR = obj.TABUO_FLOOR,
                            TAX_DATE =
                                Convert.ToDateTime("" + DateTime.Now.Day + "/" + DateTime.Now.Month + "/" +
                                                   CALCULATED_FROM_YEAR),

                            TAX_CODE = obj.SEWAGE_LAW_ERP.TAX_CODE,

                        };
                        if (NewYear)
                            gltaxSewage.TAX_DATE = Convert.ToDateTime("1/1/" + CALCULATED_TO_YEAR);
                        if (DbOperation.NVL(obj.AREA) <= obj.SEWAGE_LAW_ERP.AREA_CONDITION)
                        {
                            gltaxSewage.TAX_AMT = obj.SEWAGE_LAW_ERP.AMT_WITH_AREA_CONDITION;
                        }
                        else
                        {
                            gltaxSewage.TAX_AMT = obj.SEWAGE_LAW_ERP.AMT*obj.AREA;
                            if (gltaxSewage.TAX_AMT < minamt)
                                gltaxSewage.TAX_AMT = minamt;
                            if (gltaxSewage.TAX_AMT > maxamt)
                                gltaxSewage.TAX_AMT = maxamt;
                        }

                        db.GLTAX_ERP.Add(gltaxSewage);
                        db.SaveChanges();


                        var TransDebitw = new TRANS() //Debit ذمم مدينة
                        {
                            TACCOUNT_NO = FundAccountSewage,
                            CURN_CODE = obj.SEWAGE_LAW_ERP.TAX.CURN_CODE,
                            CURN_AMOUNT = gltaxSewage.TAX_AMT ?? 0,
                            LOCAL_AMOUNT = (gltaxSewage.TAX_AMT ?? 0)*(gltaxSewage.FCRATE ?? 0),
                            ENTRY_DATE = DateTime.Now,
                            FCRATE = gltaxSewage.FCRATE ?? 0,
                            TFUND_CODE = obj.SEWAGE_LAW_ERP.TAX.TFUND_CODE,
                            NOTES =
                                obj.NOTES + " _   احتساب رسوم صرف صحي على حساب الذمم المدينة للرسم " +
                                taxSewage.TAX_NAME + "",
                            DETAILS =
                                obj.NOTES + " _   احتساب رسوم صرف صحي على حساب الذمم المدينة للرسم " +
                                taxSewage.TAX_NAME + "",
                            TRANS_DATE = (DateTime) gltaxSewage.TAX_DATE,
                            TRANS_TYPE = "D",
                            // STAKEHOLDER_ID = obj.STAKEHOLDER_ID,
                            VOUCHER_NO = 0,
                            VOUCHER_TYPE = "YR",
                            STAFF_ID = UserID,
                        };
                        SetRefAccountforTrans(TransDebitw, obj.STAKEHOLDER_ID, null);
                        db.TRANS.Add(TransDebitw);
                        db.SaveChanges();
                        var TransCreditw = new TRANS() //c ذمم دائنة
                        {
                            TACCOUNT_NO = CurrntAccountSewage,
                            CURN_CODE = taxSewage.CURN_CODE,
                            CURN_AMOUNT = gltaxSewage.TAX_AMT ?? 0,
                            LOCAL_AMOUNT = (gltaxSewage.TAX_AMT ?? 0)*(gltaxSewage.FCRATE ?? 0),
                            ENTRY_DATE = DateTime.Now,
                            FCRATE = gltaxSewage.FCRATE ?? 0,
                            TFUND_CODE = obj.SEWAGE_LAW_ERP.TAX.TFUND_CODE,
                            NOTES = obj.NOTES + " _   احتساب رسوم صرف صحي  للرسم " + taxSewage.TAX_NAME + "",
                            DETAILS = obj.NOTES + " _   احتساب رسوم صرف صحي   للرسم " + taxSewage.TAX_NAME + "",
                            TRANS_DATE = (DateTime) gltaxSewage.TAX_DATE,
                            TRANS_TYPE = "C",
                            // STAKEHOLDER_ID = obj.STAKEHOLDER_ID,
                            VOUCHER_NO = 0,
                            VOUCHER_TYPE = "YR",
                            STAFF_ID = UserID,
                        };
                        SetRefAccountforTrans(TransCreditw, obj.STAKEHOLDER_ID, null);
                        db.TRANS.Add(TransCreditw);
                        db.SaveChanges();

                    }
            }
            output.ErrorMessage = "";
            output.Sucses = true;
            return output;
        }

        public static bool CalculateTaxForHouses(decimal ID, decimal AREA, decimal CALCULATED_FROM_YEAR,
            decimal CALCULATED_TO_YEAR, string UserID, DbModel db, bool NewYear = false)
        {

            var obj = db.HOUSES_ERP.SingleOrDefault(c => c.ID == ID);
            if (obj.REALITY == "Y")
            {
                obj.AREA = AREA;
                if (obj.IS_CLCULATED == "N")
                    obj.CALCULATED_FROM_YEAR = CALCULATED_FROM_YEAR;
                obj.IS_CLCULATED = "Y";
                obj.CALCULATED_TO_YEAR = CALCULATED_TO_YEAR;
                db.HOUSES_ERP.Attach(obj);
                db.Entry(obj).State = EntityState.Modified;
                //db.SaveChanges();
                if (NewYear == true)
                    CALCULATED_FROM_YEAR = CALCULATED_TO_YEAR;

                var FundAccountT = obj.TAX_WASTE_DTL_ERP.TAX.FUND.ACCOUNT_NO;
                var CurrntAccountT = obj.TAX_WASTE_DTL_ERP.TAX.THIS_ACCOUNT;
                if (FundAccountT == null)
                    return false;
                if (CurrntAccountT == null)
                    return false;

                for (var i = CALCULATED_FROM_YEAR; i <= CALCULATED_TO_YEAR; i++)
                {
                    if (obj.TAX_WASTE_DTL_ERP != null)
                    {
                        var gltax1 = new GLTAX_ERP()
                        {

                            CURN_CODE = obj.TAX_WASTE_DTL_ERP.TAX.CURN_CODE,
                            ENTRY_BY = UserID,
                            ENTRY_DATE = DateTime.Now,
                            FCRATE = FixedERPValues.GetRateCurrency(obj.TAX_WASTE_DTL_ERP.TAX.CURN_CODE),
                            FUND_CODE = obj.TAX_WASTE_DTL_ERP.TAX.TFUND_CODE,
                            HAY_ID = obj.HAY_ID,
                            HOD_CODE = obj.HOD_CODE,
                            LAND_ID = obj.LAND_ID,
                            IS_FREEZE = "N",
                            IS_INSTALLMENT = "N",
                            IS_IN_DED = "N",
                            IS_POSTPONE = "N",
                            IS_SCHEDULE = "N",
                            IS_UPDATED = "N",
                            NOTES = "احتساب رسوم   " + obj.ID + " على المكلف " + obj.STAKEHOLDERS_ERP.NAME_AR + "",
                            PAID = "N",
                            YEAR_NO = (short) CALCULATED_FROM_YEAR,
                            STATUS = "V",
                            STAKEHOLDER_ID = obj.STAKEHOLDER_ID,
                            TABUO_APARTMENT = Convert.ToString(obj.TABUO_APRTMENT),
                            TABUO_BUILDING = obj.TABUO_BUILDING,
                            TABUO_FLOOR = obj.TABUO_FLOOR,
                            TAX_DATE =
                                Convert.ToDateTime("" + DateTime.Now.Day + "/" + DateTime.Now.Month + "/" +
                                                   CALCULATED_FROM_YEAR),
                            TAX_CODE = obj.TAX_WASTE_DTL_ERP.TAX.TAX_CODE,
                            // TAX_AMT = Convert.ToDecimal(obj.TAX_WASTE_DTL_ERP.VALUE),


                        };
                        if (NewYear)
                            gltax1.TAX_DATE = Convert.ToDateTime("1/1/" + CALCULATED_TO_YEAR);
                        if (obj.TAX_WASTE_DTL_ERP.AREA_AMT == "A")
                        {
                            if (DbOperation.NVL(obj.AREA) <= DbOperation.NVL(obj.TAX_WASTE_DTL_ERP.FROM_AREA))
                            {
                                gltax1.TAX_AMT = obj.TAX_WASTE_DTL_ERP.VALUE_WITH_CONDITION;
                            }
                            else
                            {
                                gltax1.TAX_AMT = obj.TAX_WASTE_DTL_ERP.VALUE*obj.AREA;
                                if (gltax1.TAX_AMT >= obj.TAX_WASTE_DTL_ERP.MAX_VALUE)
                                    gltax1.TAX_AMT = obj.TAX_WASTE_DTL_ERP.MAX_VALUE;
                                if (gltax1.TAX_AMT <= obj.TAX_WASTE_DTL_ERP.MIN_VALUE)
                                    gltax1.TAX_AMT = obj.TAX_WASTE_DTL_ERP.MIN_VALUE;

                            }

                        }
                        else
                            gltax1.TAX_AMT = obj.TAX_WASTE_DTL_ERP.VALUE;


                        db.GLTAX_ERP.Add(gltax1);
                        //db.SaveChanges();



                        var TransDebitw = new TRANS() //Debit ذمم مدينة
                        {
                            TACCOUNT_NO = FundAccountT,
                            CURN_CODE = obj.TAX_WASTE_DTL_ERP.TAX.CURN_CODE,
                            CURN_AMOUNT = gltax1.TAX_AMT ?? 0,
                            LOCAL_AMOUNT = (gltax1.TAX_AMT ?? 0)*(gltax1.FCRATE ?? 0),
                            ENTRY_DATE = DateTime.Now,
                            FCRATE = gltax1.FCRATE ?? 0,
                            TFUND_CODE = obj.TAX_WASTE_DTL_ERP.TAX.TFUND_CODE,
                            NOTES = obj.NOTES + "احتساب رسوم تحقق نفايات ",
                            DETAILS = obj.NOTES + "احتساب رسوم تحقق نفايات ",
                            TRANS_DATE = (DateTime) gltax1.TAX_DATE,
                            TRANS_TYPE = "D",
                            STAKEHOLDER_ID = obj.STAKEHOLDER_ID,
                            VOUCHER_NO = 0,
                            VOUCHER_TYPE = "YR",
                            STAFF_ID = UserID,
                        };
                        db.TRANS.Add(TransDebitw);
                        // db.SaveChanges();
                        var TransCrw = new TRANS()
                        {
                            TACCOUNT_NO = CurrntAccountT,
                            CURN_CODE = obj.TAX_WASTE_DTL_ERP.TAX.CURN_CODE,
                            CURN_AMOUNT = gltax1.TAX_AMT ?? 0,
                            LOCAL_AMOUNT = (gltax1.TAX_AMT ?? 0)*(gltax1.FCRATE ?? 0),
                            ENTRY_DATE = DateTime.Now,
                            FCRATE = gltax1.FCRATE ?? 0,
                            TFUND_CODE = obj.TAX_WASTE_DTL_ERP.TAX.TFUND_CODE,
                            NOTES = obj.NOTES + "احتساب رسوم تحقق نفايات ",
                            DETAILS = obj.NOTES + " احتساب رسوم تحقق نفايات ",
                            TRANS_DATE = (DateTime) gltax1.TAX_DATE,
                            TRANS_TYPE = "C",
                            STAKEHOLDER_ID = obj.STAKEHOLDER_ID,
                            VOUCHER_NO = 0,
                            VOUCHER_TYPE = "YR",
                            STAFF_ID = UserID,
                        };
                        db.TRANS.Add(TransCrw);
                        // db.SaveChanges();
                    }


                    if (obj.SEWAGE_LAW_ID != null && obj.SEWAGE == "Y")
                    {
                        var minamt = obj.SEWAGE_LAW_ERP.AMT_MIN;
                        var maxamt = obj.SEWAGE_LAW_ERP.AMT_MAX;

                        var FundAccounts = obj.SEWAGE_LAW_ERP.TAX.FUND.ACCOUNT_NO;
                        var CurrntAccounts = obj.SEWAGE_LAW_ERP.TAX.THIS_ACCOUNT;

                        if (FundAccounts == null)
                            return false;
                        if (CurrntAccounts == null)
                            return false;
                        var gltaxSewage = new GLTAX_ERP()
                        {

                            CURN_CODE = obj.SEWAGE_LAW_ERP.TAX.CURN_CODE,
                            ENTRY_BY = UserID,
                            ENTRY_DATE = DateTime.Now,
                            FCRATE = FixedERPValues.GetRateCurrency(obj.SEWAGE_LAW_ERP.TAX.CURN_CODE),
                            FUND_CODE = obj.SEWAGE_LAW_ERP.TAX.TFUND_CODE,
                            HAY_ID = obj.HAY_ID,
                            HOD_CODE = obj.HOD_CODE,
                            LAND_ID = obj.LAND_ID,
                            IS_FREEZE = "N",
                            IS_INSTALLMENT = "N",
                            IS_IN_DED = "N",
                            IS_POSTPONE = "N",
                            IS_SCHEDULE = "N",
                            IS_UPDATED = "N",
                            NOTES = "احتساب تحققات الصرف الصحي",
                            PAID = "N",
                            YEAR_NO = (short) CALCULATED_FROM_YEAR,
                            STATUS = "V",
                            STAKEHOLDER_ID = obj.STAKEHOLDER_ID,
                            TABUO_APARTMENT = Convert.ToString(obj.TABUO_APRTMENT),
                            TABUO_BUILDING = obj.TABUO_BUILDING,
                            TABUO_FLOOR = obj.TABUO_FLOOR,
                            TAX_DATE =
                                Convert.ToDateTime("" + DateTime.Now.Day + "/" + DateTime.Now.Month + "/" +
                                                   CALCULATED_FROM_YEAR),
                            TAX_CODE = obj.SEWAGE_LAW_ERP.TAX_CODE,
                            TAX_AMT = (obj.SEWAGE_LAW_ERP.AMT)*AREA,
                        };
                        if (NewYear)
                            gltaxSewage.TAX_DATE = Convert.ToDateTime("1/1/" + CALCULATED_TO_YEAR);
                        if (DbOperation.NVL(obj.AREA) <= DbOperation.NVL(obj.SEWAGE_LAW_ERP.AREA_CONDITION))
                        {
                            gltaxSewage.TAX_AMT = obj.SEWAGE_LAW_ERP.AMT_WITH_AREA_CONDITION;
                        }
                        else
                        {
                            gltaxSewage.TAX_AMT = obj.SEWAGE_LAW_ERP.AMT*obj.AREA;
                            if (gltaxSewage.TAX_AMT < minamt)
                                gltaxSewage.TAX_AMT = minamt;
                            if (gltaxSewage.TAX_AMT > maxamt)
                                gltaxSewage.TAX_AMT = maxamt;
                        }

                        db.GLTAX_ERP.Add(gltaxSewage);
                        // db.SaveChanges();




                        var TransDebits = new TRANS() //Debit ذمم مدينة
                        {
                            TACCOUNT_NO = FundAccounts,
                            CURN_CODE = obj.SEWAGE_LAW_ERP.TAX.CURN_CODE,
                            CURN_AMOUNT = gltaxSewage.TAX_AMT ?? 0,
                            LOCAL_AMOUNT = (gltaxSewage.TAX_AMT ?? 0)*(gltaxSewage.FCRATE ?? 0),
                            ENTRY_DATE = DateTime.Now,
                            FCRATE = gltaxSewage.FCRATE ?? 0,
                            TFUND_CODE = obj.SEWAGE_LAW_ERP.TAX.TFUND_CODE,
                            NOTES = obj.NOTES + "احتساب رسوم تحققات ",
                            DETAILS = obj.NOTES + " رسوم تحققات ",
                            TRANS_DATE = (DateTime) gltaxSewage.TAX_DATE,
                            TRANS_TYPE = "D",
                            STAKEHOLDER_ID = obj.STAKEHOLDER_ID,
                            VOUCHER_NO = 0,
                            VOUCHER_TYPE = "YR",
                            STAFF_ID = UserID,
                        };
                        db.TRANS.Add(TransDebits);
                        // db.SaveChanges();
                        var TransCrs = new TRANS()
                        {
                            TACCOUNT_NO = CurrntAccounts,
                            CURN_CODE = obj.SEWAGE_LAW_ERP.TAX.CURN_CODE,
                            CURN_AMOUNT = gltaxSewage.TAX_AMT ?? 0,
                            LOCAL_AMOUNT = (gltaxSewage.TAX_AMT ?? 0)*(gltaxSewage.FCRATE ?? 0),
                            ENTRY_DATE = DateTime.Now,
                            FCRATE = gltaxSewage.FCRATE ?? 0,
                            TFUND_CODE = obj.SEWAGE_LAW_ERP.TAX.TFUND_CODE,
                            NOTES = obj.NOTES + "احتساب رسوم تحققات ",
                            DETAILS = obj.NOTES + " رسوم تحققات ",
                            TRANS_DATE = (DateTime) gltaxSewage.TAX_DATE,
                            TRANS_TYPE = "C",
                            STAKEHOLDER_ID = obj.STAKEHOLDER_ID,
                            VOUCHER_NO = 0,
                            VOUCHER_TYPE = "YR",
                            STAFF_ID = UserID,
                        };
                        db.TRANS.Add(TransCrs);
                        //db.SaveChanges();

                    }








                }

            }

            return true;
        }

        public static bool CalculateTaxForSign(decimal ID, decimal AREA, decimal CALCULATED_FROM_YEAR,
            decimal CALCULATED_TO_YEAR, string UserID, DbModel db, bool NewYear = false)
        {

            var obj = db.STAKEHOLDER_SIGN_ERP.SingleOrDefault(c => c.ID == ID);
            obj.AREA = AREA;
            if (obj.IS_CLCULATED == "N")
                obj.CALCULATED_FROM_YEAR = CALCULATED_FROM_YEAR;
            obj.IS_CLCULATED = "Y";
            obj.CALCULATED_TO_YEAR = CALCULATED_TO_YEAR;
            db.STAKEHOLDER_SIGN_ERP.Attach(obj);
            db.Entry(obj).State = EntityState.Modified;
            db.SaveChanges();

            if (NewYear == true)
                CALCULATED_FROM_YEAR = CALCULATED_TO_YEAR;

            var FundAccountT = obj.SIGN_LAW_ERP.TAX.FUND.ACCOUNT_NO;
            var CurrntAccountT = obj.SIGN_LAW_ERP.TAX.THIS_ACCOUNT;
            if (FundAccountT == null)
                return false;
            if (CurrntAccountT == null)
                return false;
            for (var i = CALCULATED_FROM_YEAR; i <= CALCULATED_TO_YEAR; i++)
            {

                var gltax1 = new GLTAX_ERP()
                {
                    CURN_CODE = obj.SIGN_LAW_ERP.TAX.CURN_CODE,
                    ENTRY_BY = UserID,
                    ENTRY_DATE = DateTime.Now,
                    FCRATE = FixedERPValues.GetRateCurrency(obj.SIGN_LAW_ERP.TAX.CURN_CODE),
                    FUND_CODE = obj.SIGN_LAW_ERP.TAX.TFUND_CODE,
                    HAY_ID = obj.HAY_ID,
                    HOD_CODE = obj.HOD_CODE,
                    LAND_ID = obj.LAND_ID,
                    IS_FREEZE = "N",
                    IS_INSTALLMENT = "N",
                    IS_IN_DED = "N",
                    IS_POSTPONE = "N",
                    IS_SCHEDULE = "N",
                    IS_UPDATED = "N",
                    NOTES = "احتساب رسوم   " + obj.ID + " على المكلف " + obj.STAKEHOLDERS_ERP.NAME_AR + "",
                    PAID = "N",
                    YEAR_NO = (short) CALCULATED_FROM_YEAR,
                    STATUS = "V",
                    STAKEHOLDER_ID = obj.STAKEHOLDER_ID,
                    TAX_DATE =
                        Convert.ToDateTime("" + DateTime.Now.Day + "/" + DateTime.Now.Month + "/" + CALCULATED_FROM_YEAR),
                    TAX_CODE = obj.SIGN_LAW_ERP.TAX.TAX_CODE,
                    TAX_AMT = Convert.ToDecimal(obj.SIGN_LAW_ERP.AMT)*obj.AREA,
                };
                if (NewYear)
                    gltax1.TAX_DATE = Convert.ToDateTime("1/1/" + CALCULATED_TO_YEAR);
                db.GLTAX_ERP.Add(gltax1);
                db.SaveChanges();



                var TransDebitw = new TRANS() //Debit ذمم مدينة
                {
                    TACCOUNT_NO = FundAccountT,
                    CURN_CODE = obj.SIGN_LAW_ERP.TAX.CURN_CODE,
                    CURN_AMOUNT = gltax1.TAX_AMT ?? 0,
                    LOCAL_AMOUNT = (gltax1.TAX_AMT ?? 0)*(gltax1.FCRATE ?? 0),
                    ENTRY_DATE = DateTime.Now,
                    FCRATE = gltax1.FCRATE ?? 0,
                    TFUND_CODE = obj.SIGN_LAW_ERP.TAX.TFUND_CODE,
                    NOTES = obj.NOTES + "احتساب رسوم تحققات ",
                    DETAILS = obj.NOTES + " رسوم تحققات ",
                    TRANS_DATE = (DateTime) gltax1.TAX_DATE,
                    TRANS_TYPE = "D",
                    STAKEHOLDER_ID = obj.STAKEHOLDER_ID,
                    VOUCHER_NO = 0,
                    VOUCHER_TYPE = "YR",
                    STAFF_ID = UserID,
                };
                db.TRANS.Add(TransDebitw);
                db.SaveChanges();
                var TransCrw = new TRANS()
                {
                    TACCOUNT_NO = CurrntAccountT,
                    CURN_CODE = obj.SIGN_LAW_ERP.TAX.CURN_CODE,
                    CURN_AMOUNT = gltax1.TAX_AMT ?? 0,
                    LOCAL_AMOUNT = (gltax1.TAX_AMT ?? 0)*(gltax1.FCRATE ?? 0),
                    ENTRY_DATE = DateTime.Now,
                    FCRATE = gltax1.FCRATE ?? 0,
                    TFUND_CODE = obj.SIGN_LAW_ERP.TAX.TFUND_CODE,
                    NOTES = obj.NOTES + "احتساب رسوم تحققات ",
                    DETAILS = obj.NOTES + " رسوم تحققات ",
                    TRANS_DATE = (DateTime) gltax1.TAX_DATE,
                    TRANS_TYPE = "C",
                    STAKEHOLDER_ID = obj.STAKEHOLDER_ID,
                    VOUCHER_NO = 0,
                    VOUCHER_TYPE = "YR",
                    STAFF_ID = UserID,
                };
                db.TRANS.Add(TransCrw);
                db.SaveChanges();

            }

            return true;
        }




        public static OutPutReturned CalculateTaxForRents(RENT_ERP Rent, string UserID, DbModel db, TAX tax,
            string FundAccountBus, string CurrntAccountBus, bool NewYear = false)
        {

            var output = new OutPutReturned();
            if (Rent.RENT_DATE == null || Rent.RENT_AMT == null)
            {
                output.Sucses = false;
                output.ErrorMessage = "خطأ....يجب التحقق من تاريخ الايجار ومبلغ الايجار لجميع اليافطات";
                return output;
            }
            //    
            var RentYear = Rent.RENT_DATE.Value.Year;
            var curentYear = DateTime.Now.Year;
            if (NewYear == true)
                curentYear += 1;
            decimal lastYear = 0;
            ;
            if (Rent.LAST_CALC_YEAR != null)
            {
                var countYear = curentYear - Rent.LAST_CALC_YEAR;
                for (var i = (Rent.LAST_CALC_YEAR + 1); i <= curentYear; i++)
                {
                    if (Rent.RENT_PAYMENT_ERP.Count() > 0)
                    {
                        foreach (var item in Rent.RENT_PAYMENT_ERP)
                        {
                            var gltax1 = new GLTAX_ERP()
                            {
                                //BUSINESS_ID = ID,
                                CURN_CODE = Rent.CURN,
                                ENTRY_BY = UserID,
                                ENTRY_DATE = DateTime.Now,
                                FCRATE = FixedERPValues.GetRateCurrency(Rent.CURN),
                                FUND_CODE = tax.TFUND_CODE,
                                HAY_ID = Rent.HAY_ID,
                                HOD_CODE = Rent.HOD_CODE,
                                LAND_ID = Rent.LAND_ID,
                                IS_FREEZE = "N",
                                IS_INSTALLMENT = "N",
                                IS_IN_DED = "N",
                                IS_POSTPONE = "N",
                                IS_SCHEDULE = "N",
                                IS_UPDATED = "N",
                                NOTES = "احتساب رسوم  ايجارات للمكلف " + Rent.STAKEHOLDERS_ERP.NAME_AR,
                                PAID = "N",
                                YEAR_NO = Convert.ToInt16(i),
                                STATUS = "V",
                                STAKEHOLDER_ID = Rent.STAKEHOLDER_ID,
                                TABUO_APARTMENT = Convert.ToString(Rent.TABUO_APRTMENT),
                                TABUO_BUILDING = Rent.TABUO_BUILDING,
                                TABUO_FLOOR = Rent.TABUO_FLOOR,
                                TAX_DATE =
                                    Convert.ToDateTime("" + item.DUE_DATE.Day + "/" + item.DUE_DATE.Month + "/" + i),
                                TAX_CODE = tax.TAX_CODE,
                                TAX_AMT = (item.AMT),
                            };

                            db.GLTAX_ERP.Add(gltax1);
                            db.SaveChanges();


                            var TransDebit = new TRANS() //Debit ذمم مدينة
                            {
                                TACCOUNT_NO = FundAccountBus,
                                CURN_CODE = gltax1.CURN_CODE,
                                CURN_AMOUNT = gltax1.TAX_AMT ?? 0,
                                LOCAL_AMOUNT = (gltax1.TAX_AMT ?? 0)*(gltax1.FCRATE ?? 0),
                                ENTRY_DATE = DateTime.Now,
                                FCRATE = gltax1.FCRATE ?? 0,
                                TFUND_CODE = tax.TFUND_CODE,
                                NOTES = Rent.NOTES + " _  رسوم ايجارات للمكلف " + Rent.STAKEHOLDERS_ERP.NAME_AR + "",
                                DETAILS = Rent.NOTES + " _  رسوم ايجارات للمكلف " + Rent.STAKEHOLDERS_ERP.NAME_AR + "",
                                TRANS_DATE = (DateTime) gltax1.TAX_DATE,
                                TRANS_TYPE = "D",
                                //STAKEHOLDER_ID = obj.STAKEHOLDER_ID,
                                VOUCHER_NO = 0,
                                VOUCHER_TYPE = "YR",
                                STAFF_ID = UserID,
                            };
                            DbOperation.SetRefAccountforTrans(TransDebit, Rent.STAKEHOLDER_ID, null);
                            db.TRANS.Add(TransDebit);
                            db.SaveChanges();
                            var TransCredit = new TRANS() // ذمم دائنة
                            {
                                TACCOUNT_NO = CurrntAccountBus,
                                CURN_CODE = gltax1.CURN_CODE,
                                CURN_AMOUNT = gltax1.TAX_AMT ?? 0,
                                LOCAL_AMOUNT = (gltax1.TAX_AMT ?? 0)*(gltax1.FCRATE ?? 0),
                                ENTRY_DATE = DateTime.Now,
                                FCRATE = gltax1.FCRATE ?? 0,
                                TFUND_CODE = tax.TFUND_CODE,
                                NOTES = Rent.NOTES + " _  رسوم ايجارات للمكلف " + Rent.STAKEHOLDERS_ERP.NAME_AR + "",
                                DETAILS = Rent.NOTES + " _  رسوم ايجارات للمكلف " + Rent.STAKEHOLDERS_ERP.NAME_AR + "",
                                TRANS_DATE = (DateTime) gltax1.TAX_DATE,
                                TRANS_TYPE = "C",
                                //STAKEHOLDER_ID = obj.STAKEHOLDER_ID,
                                VOUCHER_NO = 0,
                                VOUCHER_TYPE = "YR",
                                STAFF_ID = UserID,
                            };
                            DbOperation.SetRefAccountforTrans(TransCredit, Rent.STAKEHOLDER_ID, null);
                            db.TRANS.Add(TransCredit);
                            db.SaveChanges();

                        }

                    }
                    else
                    {

                        var gltax1 = new GLTAX_ERP()
                        {
                            // BUSINESS_ID = ID,
                            CURN_CODE = Rent.CURN,
                            ENTRY_BY = UserID,
                            ENTRY_DATE = DateTime.Now,
                            FCRATE = FixedERPValues.GetRateCurrency(Rent.CURN),
                            FUND_CODE = tax.TFUND_CODE,
                            HAY_ID = Rent.HAY_ID,
                            HOD_CODE = Rent.HOD_CODE,
                            LAND_ID = Rent.LAND_ID,
                            IS_FREEZE = "N",
                            IS_INSTALLMENT = "N",
                            IS_IN_DED = "N",
                            IS_POSTPONE = "N",
                            IS_SCHEDULE = "N",
                            IS_UPDATED = "N",
                            NOTES = "احتساب رسوم  ايجارات للمكلف " + Rent.STAKEHOLDERS_ERP.NAME_AR,
                            PAID = "N",
                            YEAR_NO = Convert.ToInt16(i),
                            STATUS = "V",
                            STAKEHOLDER_ID = Rent.STAKEHOLDER_ID,
                            TABUO_APARTMENT = Convert.ToString(Rent.TABUO_APRTMENT),
                            TABUO_BUILDING = Rent.TABUO_BUILDING,
                            TABUO_FLOOR = Rent.TABUO_FLOOR,
                            TAX_DATE = Convert.ToDateTime("1/1/" + i),
                            TAX_CODE = tax.TAX_CODE,
                            TAX_AMT = (Rent.RENT_AMT),
                        };

                        db.GLTAX_ERP.Add(gltax1);
                        db.SaveChanges();


                        var TransDebit = new TRANS() //Debit ذمم مدينة
                        {
                            TACCOUNT_NO = FundAccountBus,
                            CURN_CODE = gltax1.CURN_CODE,
                            CURN_AMOUNT = gltax1.TAX_AMT ?? 0,
                            LOCAL_AMOUNT = (gltax1.TAX_AMT ?? 0)*(gltax1.FCRATE ?? 0),
                            ENTRY_DATE = DateTime.Now,
                            FCRATE = gltax1.FCRATE ?? 0,
                            TFUND_CODE = tax.TFUND_CODE,
                            NOTES = Rent.NOTES + " _  رسوم ايجارات للمكلف " + Rent.STAKEHOLDERS_ERP.NAME_AR + "",
                            DETAILS = Rent.NOTES + " _  رسوم ايجارات للمكلف " + Rent.STAKEHOLDERS_ERP.NAME_AR + "",
                            TRANS_DATE = (DateTime) gltax1.TAX_DATE,
                            TRANS_TYPE = "D",
                            //STAKEHOLDER_ID = obj.STAKEHOLDER_ID,
                            VOUCHER_NO = 0,
                            VOUCHER_TYPE = "YR",
                            STAFF_ID = UserID,
                        };
                        DbOperation.SetRefAccountforTrans(TransDebit, Rent.STAKEHOLDER_ID, null);
                        db.TRANS.Add(TransDebit);
                        db.SaveChanges();
                        var TransCredit = new TRANS() // ذمم دائنة
                        {
                            TACCOUNT_NO = CurrntAccountBus,
                            CURN_CODE = gltax1.CURN_CODE,
                            CURN_AMOUNT = gltax1.TAX_AMT ?? 0,
                            LOCAL_AMOUNT = (gltax1.TAX_AMT ?? 0)*(gltax1.FCRATE ?? 0),
                            ENTRY_DATE = DateTime.Now,
                            FCRATE = gltax1.FCRATE ?? 0,
                            TFUND_CODE = tax.TFUND_CODE,
                            NOTES = Rent.NOTES + " _  رسوم ايجارات للمكلف " + Rent.STAKEHOLDERS_ERP.NAME_AR + "",
                            DETAILS = Rent.NOTES + " _  رسوم ايجارات للمكلف " + Rent.STAKEHOLDERS_ERP.NAME_AR + "",
                            TRANS_DATE = (DateTime) gltax1.TAX_DATE,
                            TRANS_TYPE = "C",
                            //STAKEHOLDER_ID = obj.STAKEHOLDER_ID,
                            VOUCHER_NO = 0,
                            VOUCHER_TYPE = "YR",
                            STAFF_ID = UserID,
                        };
                        DbOperation.SetRefAccountforTrans(TransCredit, Rent.STAKEHOLDER_ID, null);
                        db.TRANS.Add(TransCredit);
                        db.SaveChanges();

                    }
                    lastYear = (decimal) i;
                }
            }
            else
            {
                for (var i = RentYear; i <= curentYear; i++)
                {
                    if (Rent.RENT_PAYMENT_ERP.Count() > 0)
                    {
                        foreach (var item in Rent.RENT_PAYMENT_ERP.OrderBy(c => c.DUE_DATE))
                        {
                            if (item.DUE_DATE.Day >= Rent.RENT_DATE.Value.Day &&
                                item.DUE_DATE.Month >= Rent.RENT_DATE.Value.Month)
                            {
                                var gltax1 = new GLTAX_ERP()
                                {
                                    // BUSINESS_ID = ID,
                                    CURN_CODE = Rent.CURN,
                                    ENTRY_BY = UserID,
                                    ENTRY_DATE = DateTime.Now,
                                    FCRATE = FixedERPValues.GetRateCurrency(Rent.CURN),
                                    FUND_CODE = tax.TFUND_CODE,
                                    HAY_ID = Rent.HAY_ID,
                                    //HOD_CODE = Rent.HOD_CODE,
                                    LAND_ID = Rent.LAND_ID,
                                    IS_FREEZE = "N",
                                    IS_INSTALLMENT = "N",
                                    IS_IN_DED = "N",
                                    IS_POSTPONE = "N",
                                    IS_SCHEDULE = "N",
                                    IS_UPDATED = "N",
                                    NOTES = "احتساب رسوم  ايجارات للمكلف " + Rent.STAKEHOLDERS_ERP.NAME_AR,
                                    PAID = "N",
                                    YEAR_NO = Convert.ToInt16(i),
                                    STATUS = "V",
                                    STAKEHOLDER_ID = Rent.STAKEHOLDER_ID,
                                    TABUO_APARTMENT = Convert.ToString(Rent.TABUO_APRTMENT),
                                    TABUO_BUILDING = Rent.TABUO_BUILDING,
                                    TABUO_FLOOR = Rent.TABUO_FLOOR,
                                    TAX_DATE =
                                        Convert.ToDateTime("" + item.DUE_DATE.Day + "/" + item.DUE_DATE.Month + "/" + i),
                                    TAX_CODE = tax.TAX_CODE,
                                    TAX_AMT = (item.AMT),
                                };

                                db.GLTAX_ERP.Add(gltax1);
                                db.SaveChanges();


                                var TransDebit = new TRANS() //Debit ذمم مدينة
                                {
                                    TACCOUNT_NO = FundAccountBus,
                                    CURN_CODE = gltax1.CURN_CODE,
                                    CURN_AMOUNT = gltax1.TAX_AMT ?? 0,
                                    LOCAL_AMOUNT = (gltax1.TAX_AMT ?? 0)*(gltax1.FCRATE ?? 0),
                                    ENTRY_DATE = DateTime.Now,
                                    FCRATE = gltax1.FCRATE ?? 0,
                                    TFUND_CODE = tax.TFUND_CODE,
                                    NOTES = Rent.NOTES + " _  رسوم ايجارات للمكلف " + Rent.STAKEHOLDERS_ERP.NAME_AR + "",
                                    DETAILS =
                                        Rent.NOTES + " _  رسوم ايجارات للمكلف " + Rent.STAKEHOLDERS_ERP.NAME_AR + "",
                                    TRANS_DATE = (DateTime) gltax1.TAX_DATE,
                                    TRANS_TYPE = "D",
                                    //STAKEHOLDER_ID = obj.STAKEHOLDER_ID,
                                    VOUCHER_NO = 0,
                                    VOUCHER_TYPE = "YR",
                                    STAFF_ID = UserID,
                                };
                                DbOperation.SetRefAccountforTrans(TransDebit, Rent.STAKEHOLDER_ID, null);
                                db.TRANS.Add(TransDebit);
                                db.SaveChanges();
                                var TransCredit = new TRANS() // ذمم دائنة
                                {
                                    TACCOUNT_NO = CurrntAccountBus,
                                    CURN_CODE = gltax1.CURN_CODE,
                                    CURN_AMOUNT = gltax1.TAX_AMT ?? 0,
                                    LOCAL_AMOUNT = (gltax1.TAX_AMT ?? 0)*(gltax1.FCRATE ?? 0),
                                    ENTRY_DATE = DateTime.Now,
                                    FCRATE = gltax1.FCRATE ?? 0,
                                    TFUND_CODE = tax.TFUND_CODE,
                                    NOTES = Rent.NOTES + " _  رسوم ايجارات للمكلف " + Rent.STAKEHOLDERS_ERP.NAME_AR + "",
                                    DETAILS =
                                        Rent.NOTES + " _  رسوم ايجارات للمكلف " + Rent.STAKEHOLDERS_ERP.NAME_AR + "",
                                    TRANS_DATE = (DateTime) gltax1.TAX_DATE,
                                    TRANS_TYPE = "C",
                                    //STAKEHOLDER_ID = obj.STAKEHOLDER_ID,
                                    VOUCHER_NO = 0,
                                    VOUCHER_TYPE = "YR",
                                    STAFF_ID = UserID,
                                };
                                DbOperation.SetRefAccountforTrans(TransCredit, Rent.STAKEHOLDER_ID, null);
                                db.TRANS.Add(TransCredit);
                                db.SaveChanges();

                            }


                        }

                    }
                    else
                    {

                        var gltax1 = new GLTAX_ERP()
                        {
                            // BUSINESS_ID = ID,
                            CURN_CODE = Rent.CURN,
                            ENTRY_BY = UserID,
                            ENTRY_DATE = DateTime.Now,
                            FCRATE = FixedERPValues.GetRateCurrency(Rent.CURN),
                            FUND_CODE = tax.TFUND_CODE,
                            HAY_ID = Rent.HAY_ID,
                            HOD_CODE = Rent.HOD_CODE,
                            LAND_ID = Rent.LAND_ID,
                            IS_FREEZE = "N",
                            IS_INSTALLMENT = "N",
                            IS_IN_DED = "N",
                            IS_POSTPONE = "N",
                            IS_SCHEDULE = "N",
                            IS_UPDATED = "N",
                            NOTES = "احتساب رسوم  ايجارات للمكلف " + Rent.STAKEHOLDERS_ERP.NAME_AR,
                            PAID = "N",
                            YEAR_NO = Convert.ToInt16(i),
                            STATUS = "V",
                            STAKEHOLDER_ID = Rent.STAKEHOLDER_ID,
                            TABUO_APARTMENT = Convert.ToString(Rent.TABUO_APRTMENT),
                            TABUO_BUILDING = Rent.TABUO_BUILDING,
                            TABUO_FLOOR = Rent.TABUO_FLOOR,
                            TAX_DATE = Convert.ToDateTime("1/1/" + i),
                            TAX_CODE = tax.TAX_CODE,
                            TAX_AMT = (Rent.RENT_AMT),
                        };

                        db.GLTAX_ERP.Add(gltax1);
                        db.SaveChanges();


                        var TransDebit = new TRANS() //Debit ذمم مدينة
                        {
                            TACCOUNT_NO = FundAccountBus,
                            CURN_CODE = gltax1.CURN_CODE,
                            CURN_AMOUNT = gltax1.TAX_AMT ?? 0,
                            LOCAL_AMOUNT = (gltax1.TAX_AMT ?? 0)*(gltax1.FCRATE ?? 0),
                            ENTRY_DATE = DateTime.Now,
                            FCRATE = gltax1.FCRATE ?? 0,
                            TFUND_CODE = tax.TFUND_CODE,
                            NOTES = Rent.NOTES + " _  رسوم ايجارات للمكلف " + Rent.STAKEHOLDERS_ERP.NAME_AR + "",
                            DETAILS = Rent.NOTES + " _  رسوم ايجارات للمكلف " + Rent.STAKEHOLDERS_ERP.NAME_AR + "",
                            TRANS_DATE = (DateTime) gltax1.TAX_DATE,
                            TRANS_TYPE = "D",
                            //STAKEHOLDER_ID = obj.STAKEHOLDER_ID,
                            VOUCHER_NO = 0,
                            VOUCHER_TYPE = "YR",
                            STAFF_ID = UserID,
                        };
                        DbOperation.SetRefAccountforTrans(TransDebit, Rent.STAKEHOLDER_ID, null);
                        db.TRANS.Add(TransDebit);
                        db.SaveChanges();
                        var TransCredit = new TRANS() // ذمم دائنة
                        {
                            TACCOUNT_NO = CurrntAccountBus,
                            CURN_CODE = gltax1.CURN_CODE,
                            CURN_AMOUNT = gltax1.TAX_AMT ?? 0,
                            LOCAL_AMOUNT = (gltax1.TAX_AMT ?? 0)*(gltax1.FCRATE ?? 0),
                            ENTRY_DATE = DateTime.Now,
                            FCRATE = gltax1.FCRATE ?? 0,
                            TFUND_CODE = tax.TFUND_CODE,
                            NOTES = Rent.NOTES + " _  رسوم ايجارات للمكلف " + Rent.STAKEHOLDERS_ERP.NAME_AR + "",
                            DETAILS = Rent.NOTES + " _  رسوم ايجارات للمكلف " + Rent.STAKEHOLDERS_ERP.NAME_AR + "",
                            TRANS_DATE = (DateTime) gltax1.TAX_DATE,
                            TRANS_TYPE = "C",
                            //STAKEHOLDER_ID = obj.STAKEHOLDER_ID,
                            VOUCHER_NO = 0,
                            VOUCHER_TYPE = "YR",
                            STAFF_ID = UserID,
                        };
                        DbOperation.SetRefAccountforTrans(TransCredit, Rent.STAKEHOLDER_ID, null);
                        db.TRANS.Add(TransCredit);
                        db.SaveChanges();

                    }

                    lastYear = i;
                }
            }
            Rent.LAST_CALC_YEAR = Convert.ToDecimal(lastYear);
            db.RENT_ERP.Attach(Rent);
            db.Entry(Rent).State = EntityState.Modified;
            db.SaveChanges();
            output.Sucses = true;
            return output;
        }







        #region CalculatedNewYear Rimah

        //public static bool CalculateTaxForBussinessNew1(decimal ID, decimal AREA, decimal CALCULATED_FROM_YEAR, decimal CALCULATED_TO_YEAR, string UserID, DbModel db)
        //{

        //    var obj = db.BUSINESS_ERP.SingleOrDefault(c => c.ID == ID);
        //    obj.AREA = AREA;
        //    obj.IS_CLCULATED = "Y";
        //    obj.CALCULATED_TO_YEAR = CALCULATED_TO_YEAR;
        //    db.BUSINESS_ERP.Attach(obj);
        //    db.Entry(obj).State = EntityState.Modified;
        //    db.SaveChanges();

        //        var gltax1 = new GLTAX_ERP()
        //        {
        //            BUSINESS_ID = ID,
        //            CURN_CODE = obj.B3_ERP.B2_ERP.B1_ERP.TAX.CURN_CODE,
        //            ENTRY_BY = UserID,
        //            //ENTRY_DATE = DateTime.Now,
        //            ENTRY_DATE =Convert.ToDateTime("1/1/"+CALCULATED_TO_YEAR),
        //            FCRATE = FixedERPValues.GetRateCurrency(obj.B3_ERP.B2_ERP.B1_ERP.TAX.CURN_CODE),
        //            FUND_CODE = obj.B3_ERP.B2_ERP.B1_ERP.TAX.TFUND_CODE,
        //            HAY_ID = obj.HAY_ID,
        //            HOD_CODE = obj.HOD_CODE,
        //            LAND_ID = obj.LAND_ID,
        //            IS_FREEZE = "N",
        //            IS_INSTALLMENT = "N",
        //            IS_IN_DED = "N",
        //            IS_POSTPONE = "N",
        //            IS_SCHEDULE = "N",
        //            IS_UPDATED = "N",
        //            NOTES = "احتساب رسوم  رخصة للحرفة " + obj.NAME_AR + " على المكلف " + obj.STAKEHOLDERS_ERP.NAME_AR + "",
        //            PAID = "N",
        //            YEAR_NO = (short)CALCULATED_FROM_YEAR,
        //            STATUS = "V",
        //            STAKEHOLDER_ID = obj.STAKEHOLDER_ID,
        //            TABUO_APARTMENT = Convert.ToString(obj.TABUO_APRTMENT),
        //            TABUO_BUILDING = obj.TABUO_BUILDING,
        //            TABUO_FLOOR = obj.TABUO_FLOOR,
        //            //TAX_DATE = DateTime.Now,
        //            TAX_DATE = Convert.ToDateTime("1/1/"+CALCULATED_TO_YEAR),
        //            TAX_CODE = obj.B3_ERP.B2_ERP.B1_ERP.TAX.TAX_CODE,
        //            TAX_AMT = (obj.B3_ERP.AMT),


        //        };
        //        db.GLTAX_ERP.Add(gltax1);
        //        db.SaveChanges();
        //        var FundAccount = obj.B3_ERP.B2_ERP.B1_ERP.TAX.FUND.ACCOUNT_NO;
        //        var CurrntAccount = obj.B3_ERP.B2_ERP.B1_ERP.TAX.THIS_ACCOUNT;
        //        if (FundAccount == null)
        //            return false;
        //        if (CurrntAccount == null)
        //            return false;
        //        var TransDebit = new TRANS()//Debit ذمم مدينة
        //        {
        //            TACCOUNT_NO = FundAccount,
        //            CURN_CODE = obj.B3_ERP.B2_ERP.B1_ERP.TAX.CURN_CODE,
        //            CURN_AMOUNT = gltax1.TAX_AMT,
        //            LOCAL_AMOUNT = gltax1.TAX_AMT * gltax1.FCRATE,
        //            //ENTRY_DATE = DateTime.Now,
        //            ENTRY_DATE = Convert.ToDateTime("1/1/" + CALCULATED_TO_YEAR),
        //            FCRATE = gltax1.FCRATE,
        //            TFUND_CODE = obj.B3_ERP.B2_ERP.B1_ERP.TAX.TFUND_CODE,
        //            NOTES = obj.NOTES + " _   احتساب رسوم حرفة على حساب الذمم المدينة للرسم " + obj.B3_ERP.B2_ERP.B1_ERP.TAX.TAX_NAME + "",
        //            DETAILS = obj.NOTES + " _   احتساب رسوم حرفة على حساب الذمم المدينة للرسم " + obj.B3_ERP.B2_ERP.B1_ERP.TAX.TAX_NAME + "",
        //           // TRANS_DATE = DateTime.Now,
        //            TRANS_DATE = Convert.ToDateTime("1/1/" + CALCULATED_TO_YEAR),
        //            TRANS_TYPE = "D",
        //            STAKEHOLDER_ID = obj.STAKEHOLDER_ID,
        //            VOUCHER_NO = obj.ID,
        //            VOUCHER_TYPE = "TA",
        //            STAFF_ID = UserID,
        //        };
        //        db.TRANS.Add(TransDebit);
        //        db.SaveChanges();
        //        var TransCredit = new TRANS()// ذمم دائنة
        //        {
        //            TACCOUNT_NO = CurrntAccount,
        //            CURN_CODE = obj.B3_ERP.B2_ERP.B1_ERP.TAX.CURN_CODE,
        //            CURN_AMOUNT = gltax1.TAX_AMT,
        //            LOCAL_AMOUNT = gltax1.TAX_AMT * gltax1.FCRATE,
        //           // ENTRY_DATE = DateTime.Now,
        //            ENTRY_DATE =Convert.ToDateTime("1/1/"+CALCULATED_TO_YEAR),
        //            FCRATE = gltax1.FCRATE,
        //            TFUND_CODE = obj.B3_ERP.B2_ERP.B1_ERP.TAX.TFUND_CODE,
        //            NOTES = obj.NOTES + " _   احتساب رسوم حرفة على حساب الذمم المدينة للرسم " + obj.B3_ERP.B2_ERP.B1_ERP.TAX.TAX_NAME + "",
        //            DETAILS = obj.NOTES + " _   احتساب رسوم حرفة على حساب الذمم المدينة للرسم " + obj.B3_ERP.B2_ERP.B1_ERP.TAX.TAX_NAME + "",
        //            //TRANS_DATE = DateTime.Now,
        //            TRANS_DATE = Convert.ToDateTime("1/1/" + CALCULATED_TO_YEAR),
        //            TRANS_TYPE = "C",
        //            STAKEHOLDER_ID = obj.STAKEHOLDER_ID,
        //            VOUCHER_NO = obj.ID,
        //            VOUCHER_TYPE = "TA",
        //            STAFF_ID = UserID,
        //        };
        //        db.TRANS.Add(TransCredit);
        //        db.SaveChanges();


        //        if (obj.B3_ERP.B2_ERP.B1_ERP.TAX_WASTE_CODE != null)
        //        {
        //            var minamt = obj.B3_ERP.MIN_AMT;
        //            var maxamt = obj.B3_ERP.MAX_AMT;
        //            var FundAccountw = obj.B3_ERP.B2_ERP.B1_ERP.TAX1.FUND.ACCOUNT_NO;
        //            var CurrntAccountw = obj.B3_ERP.B2_ERP.B1_ERP.TAX1.THIS_ACCOUNT;
        //            if (FundAccountw == null)
        //                return false;
        //            if (CurrntAccountw == null)
        //                return false;
        //            var gltaxWaste = new GLTAX_ERP()
        //            {
        //                BUSINESS_ID = ID,
        //                CURN_CODE = obj.B3_ERP.B2_ERP.B1_ERP.TAX1.CURN_CODE,
        //                ENTRY_BY = UserID,
        //                //ENTRY_DATE = DateTime.Now,
        //                ENTRY_DATE=Convert.ToDateTime("1/1/"+CALCULATED_TO_YEAR),
        //                FCRATE = FixedERPValues.GetRateCurrency(obj.B3_ERP.B2_ERP.B1_ERP.TAX1.CURN_CODE),
        //                FUND_CODE = obj.B3_ERP.B2_ERP.B1_ERP.TAX1.TFUND_CODE,
        //                HAY_ID = obj.HAY_ID,
        //                HOD_CODE = obj.HOD_CODE,
        //                LAND_ID = obj.LAND_ID,
        //                IS_FREEZE = "N",
        //                IS_INSTALLMENT = "N",
        //                IS_IN_DED = "N",
        //                IS_POSTPONE = "N",
        //                IS_SCHEDULE = "N",
        //                IS_UPDATED = "N",
        //                NOTES = "احتساب تحققات لنفايات الحرفة " + obj.NAME_AR + " على المكلف " + obj.STAKEHOLDERS_ERP.NAME_AR + "",
        //                PAID = "N",
        //                YEAR_NO = (short)CALCULATED_FROM_YEAR,
        //                STATUS = "V",
        //                STAKEHOLDER_ID = obj.STAKEHOLDER_ID,
        //                TABUO_APARTMENT = Convert.ToString(obj.TABUO_APRTMENT),
        //                TABUO_BUILDING = obj.TABUO_BUILDING,
        //                TABUO_FLOOR = obj.TABUO_FLOOR,
        //                //TAX_DATE = DateTime.Now,
        //                TAX_DATE=Convert.ToDateTime("1/1/"+CALCULATED_TO_YEAR),
        //                TAX_CODE = obj.B3_ERP.B2_ERP.B1_ERP.TAX_WASTE_CODE,
        //                TAX_AMT = (obj.B3_ERP.AMT_PER_METER) * AREA,
        //            };
        //            if (gltaxWaste.TAX_AMT < minamt)
        //                gltaxWaste.TAX_AMT = minamt;
        //            if (gltaxWaste.TAX_AMT > maxamt)
        //                gltaxWaste.TAX_AMT = maxamt;
        //            db.GLTAX_ERP.Add(gltaxWaste);
        //            db.SaveChanges();

        //            var TransDebitw = new TRANS()//Debit ذمم مدينة
        //            {
        //                TACCOUNT_NO = FundAccountw,
        //                CURN_CODE = obj.B3_ERP.B2_ERP.B1_ERP.TAX1.CURN_CODE,
        //                CURN_AMOUNT = gltaxWaste.TAX_AMT,
        //                LOCAL_AMOUNT = gltaxWaste.TAX_AMT * gltaxWaste.FCRATE,
        //                //ENTRY_DATE = DateTime.Now,
        //                ENTRY_DATE=Convert.ToDateTime("1/1/"+CALCULATED_TO_YEAR),
        //                FCRATE = gltaxWaste.FCRATE,
        //                TFUND_CODE = obj.B3_ERP.B2_ERP.B1_ERP.TAX1.TFUND_CODE,
        //                NOTES = obj.NOTES + " _   احتساب رسوم نفايات على حساب الذمم المدينة للرسم " + obj.B3_ERP.B2_ERP.B1_ERP.TAX1.TAX_NAME + "",
        //                DETAILS = obj.NOTES + " _   احتساب رسوم نفايات على حساب الذمم المدينة للرسم " + obj.B3_ERP.B2_ERP.B1_ERP.TAX1.TAX_NAME + "",
        //                //TRANS_DATE = DateTime.Now,
        //                TRANS_DATE=Convert.ToDateTime("1/1/"+CALCULATED_TO_YEAR),
        //                TRANS_TYPE = "D",
        //                STAKEHOLDER_ID = obj.STAKEHOLDER_ID,
        //                VOUCHER_NO = obj.ID,
        //                VOUCHER_TYPE = "TA",
        //                STAFF_ID = UserID,
        //            };
        //            db.TRANS.Add(TransDebitw);
        //            db.SaveChanges();
        //            var TransCreditw = new TRANS()// ذمم دائنة
        //            {
        //                TACCOUNT_NO = CurrntAccountw,
        //                CURN_CODE = obj.B3_ERP.B2_ERP.B1_ERP.TAX1.CURN_CODE,
        //                CURN_AMOUNT = gltaxWaste.TAX_AMT,
        //                LOCAL_AMOUNT = gltaxWaste.TAX_AMT * gltaxWaste.FCRATE,
        //                //ENTRY_DATE = DateTime.Now,
        //                ENTRY_DATE=Convert.ToDateTime("1/1/"+CALCULATED_TO_YEAR),
        //                FCRATE = gltaxWaste.FCRATE,
        //                TFUND_CODE = obj.B3_ERP.B2_ERP.B1_ERP.TAX1.TFUND_CODE,
        //                NOTES = obj.NOTES + " _   احتساب رسوم نفايات على حساب الذمم المدينة للرسم " + obj.B3_ERP.B2_ERP.B1_ERP.TAX1.TAX_NAME + "",
        //                DETAILS = obj.NOTES + " _   احتساب رسوم نفايات على حساب الذمم المدينة للرسم " + obj.B3_ERP.B2_ERP.B1_ERP.TAX1.TAX_NAME + "",
        //                //TRANS_DATE = DateTime.Now,
        //                TRANS_DATE=Convert.ToDateTime("1/1/"+CALCULATED_TO_YEAR),
        //                TRANS_TYPE = "C",
        //                STAKEHOLDER_ID = obj.STAKEHOLDER_ID,
        //                VOUCHER_NO = obj.ID,
        //                VOUCHER_TYPE = "TA",
        //                STAFF_ID = UserID,
        //            };
        //            db.TRANS.Add(TransCreditw);
        //            db.SaveChanges();



        //        }
        //        if (obj.SEWAGE_LAW_ID != null && obj.SEWAGE == "Y")
        //        {
        //            var FundAccountl = obj.SEWAGE_LAW_ERP.TAX.FUND.ACCOUNT_NO;
        //            var CurrntAccountl = obj.SEWAGE_LAW_ERP.TAX.THIS_ACCOUNT;
        //            if (FundAccountl == null)
        //                return false;
        //            if (CurrntAccountl == null)
        //                return false;
        //            var minamt = obj.SEWAGE_LAW_ERP.AMT_MIN;
        //            var maxamt = obj.SEWAGE_LAW_ERP.AMT_MAX;
        //            var amtNoarea = obj.SEWAGE_LAW_ERP.AMT_WITH_AREA_CONDITION;
        //            var gltaxSewage = new GLTAX_ERP()
        //            {
        //                BUSINESS_ID = ID,
        //                CURN_CODE = obj.SEWAGE_LAW_ERP.TAX.CURN_CODE,
        //                ENTRY_BY = UserID,
        //                //ENTRY_DATE = DateTime.Now,
        //                ENTRY_DATE=Convert.ToDateTime("1/1/"+CALCULATED_TO_YEAR),
        //                FCRATE = FixedERPValues.GetRateCurrency(obj.SEWAGE_LAW_ERP.TAX.CURN_CODE),
        //                FUND_CODE = obj.SEWAGE_LAW_ERP.TAX.TFUND_CODE,
        //                HAY_ID = obj.HAY_ID,
        //                HOD_CODE = obj.HOD_CODE,
        //                LAND_ID = obj.LAND_ID,
        //                IS_FREEZE = "N",
        //                IS_INSTALLMENT = "N",
        //                IS_IN_DED = "N",
        //                IS_POSTPONE = "N",
        //                IS_SCHEDULE = "N",
        //                IS_UPDATED = "N",
        //                NOTES = "احتساب رسوم تحققات",
        //                PAID = "N",
        //                YEAR_NO = (short)CALCULATED_FROM_YEAR,
        //                STATUS = "V",
        //                STAKEHOLDER_ID = obj.STAKEHOLDER_ID,
        //                TABUO_APARTMENT = Convert.ToString(obj.TABUO_APRTMENT),
        //                TABUO_BUILDING = obj.TABUO_BUILDING,
        //                TABUO_FLOOR = obj.TABUO_FLOOR,
        //                //TAX_DATE = DateTime.Now,
        //                TAX_DATE=Convert.ToDateTime("1/1/"+CALCULATED_TO_YEAR),
        //                TAX_CODE = obj.SEWAGE_LAW_ERP.TAX_CODE,
        //                TAX_AMT = (obj.SEWAGE_LAW_ERP.AMT) * AREA,
        //            };
        //        if (DbOperation.NVL(obj.AREA) <= DbOperation.NVL(obj.SEWAGE_LAW_ERP.AREA_CONDITION))
        //        {
        //            gltaxSewage.TAX_AMT = obj.SEWAGE_LAW_ERP.AMT_WITH_AREA_CONDITION;
        //        }
        //        else
        //        {
        //            gltaxSewage.TAX_AMT = obj.SEWAGE_LAW_ERP.AMT * obj.AREA;
        //            if (gltaxSewage.TAX_AMT < minamt)
        //                gltaxSewage.TAX_AMT = minamt;
        //            if (gltaxSewage.TAX_AMT > maxamt)
        //                gltaxSewage.TAX_AMT = maxamt;
        //        }

        //        db.GLTAX_ERP.Add(gltaxSewage);
        //            db.SaveChanges();


        //            var TransDebitw = new TRANS()//Debit ذمم مدينة
        //            {
        //                TACCOUNT_NO = FundAccountl,
        //                CURN_CODE = obj.SEWAGE_LAW_ERP.TAX.CURN_CODE,
        //                CURN_AMOUNT = gltaxSewage.TAX_AMT,
        //                LOCAL_AMOUNT = gltaxSewage.TAX_AMT * gltaxSewage.FCRATE,
        //                //ENTRY_DATE = DateTime.Now,
        //                ENTRY_DATE=Convert.ToDateTime("1/1/"+CALCULATED_TO_YEAR),
        //                FCRATE = gltaxSewage.FCRATE,
        //                TFUND_CODE = obj.SEWAGE_LAW_ERP.TAX.TFUND_CODE,
        //                NOTES = obj.NOTES + " _   احتساب رسوم صرف صحي على حساب الذمم المدينة للرسم " + obj.SEWAGE_LAW_ERP.TAX.TAX_NAME + "",
        //                DETAILS = obj.NOTES + " _   احتساب رسوم صرف صحي على حساب الذمم المدينة للرسم " + obj.SEWAGE_LAW_ERP.TAX.TAX_NAME + "",
        //                //TRANS_DATE = DateTime.Now,
        //                TRANS_DATE=Convert.ToDateTime("1/1/"+CALCULATED_TO_YEAR),
        //                TRANS_TYPE = "D",
        //                STAKEHOLDER_ID = obj.STAKEHOLDER_ID,
        //                VOUCHER_NO = obj.ID,
        //                VOUCHER_TYPE = "TA",
        //                STAFF_ID = UserID,
        //            };
        //            db.TRANS.Add(TransDebitw);
        //            db.SaveChanges();
        //            var TransCreditw = new TRANS()//c ذمم دائنة
        //            {
        //                TACCOUNT_NO = CurrntAccountl,
        //                CURN_CODE = obj.SEWAGE_LAW_ERP.TAX.CURN_CODE,
        //                CURN_AMOUNT = gltaxSewage.TAX_AMT,
        //                LOCAL_AMOUNT = gltaxSewage.TAX_AMT * gltaxSewage.FCRATE,
        //                //ENTRY_DATE = DateTime.Now,
        //                ENTRY_DATE=Convert.ToDateTime("1/1/"+CALCULATED_TO_YEAR),
        //                FCRATE = gltaxSewage.FCRATE,
        //                TFUND_CODE = obj.SEWAGE_LAW_ERP.TAX.TFUND_CODE,
        //                NOTES = obj.NOTES + " _   احتساب رسوم صرف صحي  على حساب الذمم المدينة للرسم " + obj.SEWAGE_LAW_ERP.TAX.TAX_NAME + "",
        //                DETAILS = obj.NOTES + " _   احتساب رسوم صرف صحي   على حساب الذمم المدينة للرسم " + obj.SEWAGE_LAW_ERP.TAX.TAX_NAME + "",
        //                //TRANS_DATE = DateTime.Now,
        //                TRANS_DATE=Convert.ToDateTime("1/1/"+CALCULATED_TO_YEAR),
        //                TRANS_TYPE = "C",
        //                STAKEHOLDER_ID = obj.STAKEHOLDER_ID,
        //                VOUCHER_NO = obj.ID,
        //                VOUCHER_TYPE = "TA",
        //                STAFF_ID = UserID,
        //            };
        //            db.TRANS.Add(TransCreditw);
        //            db.SaveChanges();

        //        }


        //    return true;
        //}

        //public static bool CalculateTaxForHousesNew1(decimal ID, decimal AREA, decimal CALCULATED_FROM_YEAR, decimal CALCULATED_TO_YEAR, string UserID, DbModel db)
        //{

        //    var obj = db.HOUSES_ERP.SingleOrDefault(c => c.ID == ID);
        //    obj.AREA = AREA;
        //    obj.IS_CLCULATED = "Y";
        //    obj.CALCULATED_FROM_YEAR = CALCULATED_FROM_YEAR;
        //    obj.CALCULATED_TO_YEAR = CALCULATED_TO_YEAR;
        //    db.HOUSES_ERP.Attach(obj);
        //    db.Entry(obj).State = EntityState.Modified;
        //    db.SaveChanges();



        //    var FundAccountT = obj.TAX_WASTE_DTL_ERP.TAX.FUND.ACCOUNT_NO;
        //    var CurrntAccountT = obj.TAX_WASTE_DTL_ERP.TAX.THIS_ACCOUNT;
        //    if (FundAccountT == null)
        //        return false;
        //    if (CurrntAccountT == null)
        //        return false;

        //        var gltax1 = new GLTAX_ERP()
        //        {

        //            CURN_CODE = obj.TAX_WASTE_DTL_ERP.TAX.CURN_CODE,
        //            ENTRY_BY = UserID,
        //            //ENTRY_DATE = DateTime.Now,
        //            ENTRY_DATE=Convert.ToDateTime("1/1/"+CALCULATED_TO_YEAR),
        //            FCRATE = FixedERPValues.GetRateCurrency(obj.TAX_WASTE_DTL_ERP.TAX.CURN_CODE),
        //            FUND_CODE = obj.TAX_WASTE_DTL_ERP.TAX.TFUND_CODE,
        //            HAY_ID = obj.HAY_ID,
        //            HOD_CODE = obj.HOD_CODE,
        //            LAND_ID = obj.LAND_ID,
        //            IS_FREEZE = "N",
        //            IS_INSTALLMENT = "N",
        //            IS_IN_DED = "N",
        //            IS_POSTPONE = "N",
        //            IS_SCHEDULE = "N",
        //            IS_UPDATED = "N",
        //            NOTES = "احتساب رسوم   " + obj.ID + " على المكلف " + obj.STAKEHOLDERS_ERP.NAME_AR + "",
        //            PAID = "N",
        //            YEAR_NO = (short)CALCULATED_FROM_YEAR,
        //            STATUS = "V",
        //            STAKEHOLDER_ID = obj.STAKEHOLDER_ID,
        //            TABUO_APARTMENT = Convert.ToString(obj.TABUO_APRTMENT),
        //            TABUO_BUILDING = obj.TABUO_BUILDING,
        //            TABUO_FLOOR = obj.TABUO_FLOOR,
        //            //TAX_DATE = DateTime.Now,
        //            TAX_DATE=Convert.ToDateTime("1/1/"+CALCULATED_TO_YEAR),
        //            TAX_CODE = obj.TAX_WASTE_DTL_ERP.TAX.TAX_CODE,
        //            TAX_AMT = Convert.ToDecimal(obj.TAX_WASTE_DTL_ERP.VALUE),


        //        };
        //        db.GLTAX_ERP.Add(gltax1);
        //        db.SaveChanges();



        //        var TransDebitw = new TRANS()//Debit ذمم مدينة
        //        {
        //            TACCOUNT_NO = FundAccountT,
        //            CURN_CODE = obj.TAX_WASTE_DTL_ERP.TAX.CURN_CODE,
        //            CURN_AMOUNT = gltax1.TAX_AMT,
        //            LOCAL_AMOUNT = gltax1.TAX_AMT * gltax1.FCRATE,
        //            //ENTRY_DATE = DateTime.Now,
        //            ENTRY_DATE=Convert.ToDateTime("1/1/"+CALCULATED_TO_YEAR),
        //            FCRATE = gltax1.FCRATE,
        //            TFUND_CODE = obj.TAX_WASTE_DTL_ERP.TAX.TFUND_CODE,
        //            NOTES = obj.NOTES + "احتساب رسوم تحققات ",
        //            DETAILS = obj.NOTES + " رسوم تحققات ",
        //           // TRANS_DATE = DateTime.Now,
        //           TRANS_DATE=Convert.ToDateTime("1/1/"+CALCULATED_TO_YEAR),
        //            TRANS_TYPE = "D",
        //            STAKEHOLDER_ID = obj.STAKEHOLDER_ID,
        //            VOUCHER_NO = obj.ID,
        //            VOUCHER_TYPE = "TA",
        //            STAFF_ID = UserID,
        //        };
        //        db.TRANS.Add(TransDebitw);
        //        db.SaveChanges();
        //        var TransCrw = new TRANS()
        //        {
        //            TACCOUNT_NO = FundAccountT,
        //            CURN_CODE = obj.TAX_WASTE_DTL_ERP.TAX.CURN_CODE,
        //            CURN_AMOUNT = gltax1.TAX_AMT,
        //            LOCAL_AMOUNT = gltax1.TAX_AMT * gltax1.FCRATE,
        //            //ENTRY_DATE = DateTime.Now,
        //            ENTRY_DATE=Convert.ToDateTime("1/1/"+CALCULATED_TO_YEAR),
        //            FCRATE = gltax1.FCRATE,
        //            TFUND_CODE = obj.TAX_WASTE_DTL_ERP.TAX.TFUND_CODE,
        //            NOTES = obj.NOTES + "احتساب رسوم تحققات ",
        //            DETAILS = obj.NOTES + " رسوم تحققات ",
        //            //TRANS_DATE = DateTime.Now,
        //            TRANS_DATE=Convert.ToDateTime("1/1/"+CALCULATED_TO_YEAR),
        //            TRANS_TYPE = "C",
        //            STAKEHOLDER_ID = obj.STAKEHOLDER_ID,
        //            VOUCHER_NO = obj.ID,
        //            VOUCHER_TYPE = "TA",
        //            STAFF_ID = UserID,
        //        };
        //        db.TRANS.Add(TransCrw);
        //        db.SaveChanges();

        //        if (obj.SEWAGE_LAW_ID != null && obj.SEWAGE == "Y")
        //        {
        //            var minamt = obj.SEWAGE_LAW_ERP.AMT_MIN;
        //            var maxamt = obj.SEWAGE_LAW_ERP.AMT_MAX;
        //            var amtNoarea = obj.SEWAGE_LAW_ERP.AMT_WITH_AREA_CONDITION;
        //            var FundAccounts = obj.SEWAGE_LAW_ERP.TAX.FUND.ACCOUNT_NO;
        //            var CurrntAccounts = obj.SEWAGE_LAW_ERP.TAX.THIS_ACCOUNT;

        //            if (FundAccountT == null)
        //                return false;
        //            if (CurrntAccounts == null)
        //                return false;
        //            var gltaxSewage = new GLTAX_ERP()
        //            {

        //                CURN_CODE = obj.SEWAGE_LAW_ERP.TAX.CURN_CODE,
        //                ENTRY_BY = UserID,
        //               // ENTRY_DATE = DateTime.Now,
        //               ENTRY_DATE=Convert.ToDateTime("1/1/"+CALCULATED_TO_YEAR),
        //                FCRATE = FixedERPValues.GetRateCurrency(obj.SEWAGE_LAW_ERP.TAX.CURN_CODE),
        //                FUND_CODE = obj.SEWAGE_LAW_ERP.TAX.TFUND_CODE,
        //                HAY_ID = obj.HAY_ID,
        //                HOD_CODE = obj.HOD_CODE,
        //                LAND_ID = obj.LAND_ID,
        //                IS_FREEZE = "N",
        //                IS_INSTALLMENT = "N",
        //                IS_IN_DED = "N",
        //                IS_POSTPONE = "N",
        //                IS_SCHEDULE = "N",
        //                IS_UPDATED = "N",
        //                NOTES = "احتساب تحققات الصرف الصحي",
        //                PAID = "N",
        //                YEAR_NO = (short)CALCULATED_FROM_YEAR,
        //                STATUS = "V",
        //                STAKEHOLDER_ID = obj.STAKEHOLDER_ID,
        //                TABUO_APARTMENT = Convert.ToString(obj.TABUO_APRTMENT),
        //                TABUO_BUILDING = obj.TABUO_BUILDING,
        //                TABUO_FLOOR = obj.TABUO_FLOOR,
        //                //TAX_DATE = DateTime.Now,
        //                TAX_DATE=Convert.ToDateTime("1/1/"+CALCULATED_TO_YEAR),
        //                TAX_CODE = obj.SEWAGE_LAW_ERP.TAX_CODE,
        //                TAX_AMT = (obj.SEWAGE_LAW_ERP.AMT) * AREA,
        //            };
        //        if (DbOperation.NVL(obj.AREA) <= DbOperation.NVL(obj.SEWAGE_LAW_ERP.AREA_CONDITION))
        //        {
        //            gltaxSewage.TAX_AMT = obj.SEWAGE_LAW_ERP.AMT_WITH_AREA_CONDITION;
        //        }
        //        else
        //        {
        //            gltaxSewage.TAX_AMT = obj.SEWAGE_LAW_ERP.AMT * obj.AREA;
        //            if (gltaxSewage.TAX_AMT < minamt)
        //                gltaxSewage.TAX_AMT = minamt;
        //            if (gltaxSewage.TAX_AMT > maxamt)
        //                gltaxSewage.TAX_AMT = maxamt;
        //        }

        //        db.GLTAX_ERP.Add(gltaxSewage);
        //            db.SaveChanges();




        //            var TransDebits = new TRANS()//Debit ذمم مدينة
        //            {
        //                TACCOUNT_NO = FundAccounts,
        //                CURN_CODE = obj.SEWAGE_LAW_ERP.TAX.CURN_CODE,
        //                CURN_AMOUNT = gltaxSewage.TAX_AMT,
        //                LOCAL_AMOUNT = gltaxSewage.TAX_AMT * gltaxSewage.FCRATE,
        //                //ENTRY_DATE = DateTime.Now,
        //                ENTRY_DATE=Convert.ToDateTime("1/1/"+CALCULATED_TO_YEAR),
        //                FCRATE = gltaxSewage.FCRATE,
        //                TFUND_CODE = obj.SEWAGE_LAW_ERP.TAX.TFUND_CODE,
        //                NOTES = obj.NOTES + "احتساب رسوم تحققات ",
        //                DETAILS = obj.NOTES + " رسوم تحققات ",
        //                //TRANS_DATE = DateTime.Now,
        //                TRANS_DATE=Convert.ToDateTime("1/1/"+CALCULATED_TO_YEAR),
        //                TRANS_TYPE = "D",
        //                STAKEHOLDER_ID = obj.STAKEHOLDER_ID,
        //                VOUCHER_NO = obj.ID,
        //                VOUCHER_TYPE = "TA",
        //                STAFF_ID = UserID,
        //            };
        //            db.TRANS.Add(TransDebits);
        //            db.SaveChanges();
        //            var TransCrs = new TRANS()
        //            {
        //                TACCOUNT_NO = CurrntAccounts,
        //                CURN_CODE = obj.SEWAGE_LAW_ERP.TAX.CURN_CODE,
        //                CURN_AMOUNT = gltaxSewage.TAX_AMT,
        //                LOCAL_AMOUNT = gltaxSewage.TAX_AMT * gltaxSewage.FCRATE,
        //                //ENTRY_DATE = DateTime.Now,
        //                ENTRY_DATE=Convert.ToDateTime("1/1/"+CALCULATED_TO_YEAR),
        //                FCRATE = gltaxSewage.FCRATE,
        //                TFUND_CODE = obj.SEWAGE_LAW_ERP.TAX.TFUND_CODE,
        //                NOTES = obj.NOTES + "احتساب رسوم تحققات ",
        //                DETAILS = obj.NOTES + " رسوم تحققات ",
        //                //TRANS_DATE = DateTime.Now,
        //                TRANS_DATE=Convert.ToDateTime("1/1/"+CALCULATED_TO_YEAR),
        //                TRANS_TYPE = "C",
        //                STAKEHOLDER_ID = obj.STAKEHOLDER_ID,
        //                VOUCHER_NO = obj.ID,
        //                VOUCHER_TYPE = "TA",
        //                STAFF_ID = UserID,
        //            };
        //            db.TRANS.Add(TransCrs);
        //            db.SaveChanges();

        //        }
        //    return true;
        //}

        //public static bool CalculateTaxForSignNew1(decimal ID, decimal AREA, decimal CALCULATED_FROM_YEAR, decimal CALCULATED_TO_YEAR, string UserID, DbModel db)
        //{

        //    var obj = db.STAKEHOLDER_SIGN_ERP.SingleOrDefault(c => c.ID == ID);
        //    obj.AREA = AREA;
        //    obj.IS_CLCULATED = "Y";
        //    obj.CALCULATED_FROM_YEAR = CALCULATED_FROM_YEAR;
        //    obj.CALCULATED_TO_YEAR = CALCULATED_TO_YEAR;
        //    db.STAKEHOLDER_SIGN_ERP.Attach(obj);
        //    db.Entry(obj).State = EntityState.Modified;
        //    db.SaveChanges();
        //    var FundAccountT = obj.SIGN_LAW_ERP.TAX.FUND.ACCOUNT_NO;
        //    var CurrntAccountT = obj.SIGN_LAW_ERP.TAX.THIS_ACCOUNT;
        //    if (FundAccountT == null)
        //        return false;
        //    if (CurrntAccountT == null)
        //        return false;

        //        var gltax1 = new GLTAX_ERP()
        //        {

        //            CURN_CODE = obj.SIGN_LAW_ERP.TAX.CURN_CODE,
        //            ENTRY_BY = UserID,
        //            //ENTRY_DATE = DateTime.Now,
        //            ENTRY_DATE=Convert.ToDateTime("1/1/"+CALCULATED_TO_YEAR),
        //            FCRATE = FixedERPValues.GetRateCurrency(obj.SIGN_LAW_ERP.TAX.CURN_CODE),
        //            FUND_CODE = obj.SIGN_LAW_ERP.TAX.TFUND_CODE,
        //            HAY_ID = obj.HAY_ID,
        //            HOD_CODE = obj.HOD_CODE,
        //            LAND_ID = obj.LAND_ID,
        //            IS_FREEZE = "N",
        //            IS_INSTALLMENT = "N",
        //            IS_IN_DED = "N",
        //            IS_POSTPONE = "N",
        //            IS_SCHEDULE = "N",
        //            IS_UPDATED = "N",
        //            NOTES = "احتساب رسوم   " + obj.ID + " على المكلف " + obj.STAKEHOLDERS_ERP.NAME_AR + "",
        //            PAID = "N",
        //            YEAR_NO = (short)CALCULATED_FROM_YEAR,
        //            STATUS = "V",
        //            STAKEHOLDER_ID = obj.STAKEHOLDER_ID,
        //            //TAX_DATE = DateTime.Now,
        //            TAX_DATE=Convert.ToDateTime("1/1/"+CALCULATED_TO_YEAR),
        //            TAX_CODE = obj.SIGN_LAW_ERP.TAX.TAX_CODE,
        //            TAX_AMT = Convert.ToDecimal(obj.SIGN_LAW_ERP.AMT),
        //        };
        //        db.GLTAX_ERP.Add(gltax1);
        //        db.SaveChanges();



        //        var TransDebitw = new TRANS()//Debit ذمم مدينة
        //        {
        //            TACCOUNT_NO = FundAccountT,
        //            CURN_CODE = obj.SIGN_LAW_ERP.TAX.CURN_CODE,
        //            CURN_AMOUNT = gltax1.TAX_AMT,
        //            LOCAL_AMOUNT = gltax1.TAX_AMT * gltax1.FCRATE,
        //            //ENTRY_DATE = DateTime.Now,
        //            ENTRY_DATE=Convert.ToDateTime("1/1/"+CALCULATED_TO_YEAR),
        //            FCRATE = gltax1.FCRATE,
        //            TFUND_CODE = obj.SIGN_LAW_ERP.TAX.TFUND_CODE,
        //            NOTES = obj.NOTES + "احتساب رسوم تحققات ",
        //            DETAILS = obj.NOTES + " رسوم تحققات ",
        //            //TRANS_DATE = DateTime.Now,
        //            TRANS_DATE=Convert.ToDateTime("1/1/"+CALCULATED_TO_YEAR),
        //            TRANS_TYPE = "D",
        //            STAKEHOLDER_ID = obj.STAKEHOLDER_ID,
        //            VOUCHER_NO = obj.ID,
        //            VOUCHER_TYPE = "TA",
        //            STAFF_ID = UserID,
        //        };
        //        db.TRANS.Add(TransDebitw);
        //        db.SaveChanges();
        //        var TransCrw = new TRANS()
        //        {
        //            TACCOUNT_NO = CurrntAccountT,
        //            CURN_CODE = obj.SIGN_LAW_ERP.TAX.CURN_CODE,
        //            CURN_AMOUNT = gltax1.TAX_AMT,
        //            LOCAL_AMOUNT = gltax1.TAX_AMT * gltax1.FCRATE,
        //            //ENTRY_DATE = DateTime.Now,
        //            ENTRY_DATE=Convert.ToDateTime("1/1/"+CALCULATED_TO_YEAR),
        //            FCRATE = gltax1.FCRATE,
        //            TFUND_CODE = obj.SIGN_LAW_ERP.TAX.TFUND_CODE,
        //            NOTES = obj.NOTES + "احتساب رسوم تحققات ",
        //            DETAILS = obj.NOTES + " رسوم تحققات ",
        //            //TRANS_DATE = DateTime.Now,
        //            TRANS_DATE=Convert.ToDateTime("1/1/"+CALCULATED_TO_YEAR),
        //            TRANS_TYPE = "C",
        //            STAKEHOLDER_ID = obj.STAKEHOLDER_ID,
        //            VOUCHER_NO = obj.ID,
        //            VOUCHER_TYPE = "TA",
        //            STAFF_ID = UserID,
        //        };
        //        db.TRANS.Add(TransCrw);
        //        db.SaveChanges();         

        //    return true;
        //}

        public static bool CalculateTaxForEducationNew(decimal ID, decimal Amount, decimal CALCULATED_FROM_YEAR,
            decimal CALCULATED_TO_YEAR, string UserID, DbModel db)
        {
            var fixedObj = db.FIXED_ERP.Where(c => c.NAME == "education_tax_code").SingleOrDefault();
            var taxCode = fixedObj.VALUE;
            var fixedObj1 = db.FIXED_ERP.Where(c => c.NAME == "education_tax_percent").SingleOrDefault();
            var educationPercent = fixedObj1.VALUE;
            var obj = db.LAND_ERP.SingleOrDefault(c => c.ID == ID);

            obj.IS_CLCULATED = "Y";
            obj.CALCULATED_TO_YEAR = CALCULATED_TO_YEAR;
            db.LAND_ERP.Attach(obj);
            db.Entry(obj).State = EntityState.Modified;
            db.SaveChanges();
            var objTax = db.TAX.Where(c => c.TAX_CODE == taxCode).SingleOrDefault();
            if (obj.EDUCATION_TAX == "O")
            {
                var ownerLand = db.LAND_OWNER_ERP.Where(c => c.LAND_ID == obj.ID && c.IS_PREVIOUS == "N").ToList();
                foreach (var item in ownerLand)
                {
                    var share = item.SHARE_OFF/item.SHARE_ALL;
                    var gltax1 = new GLTAX_ERP()
                    {
                        //BUSINESS_ID = ID,
                        CURN_CODE = objTax.CURN_CODE,
                        ENTRY_BY = UserID,
                        //ENTRY_DATE = DateTime.Now,
                        ENTRY_DATE = Convert.ToDateTime("1/1/" + CALCULATED_TO_YEAR),
                        FCRATE = FixedERPValues.GetRateCurrency(objTax.CURN_CODE),
                        FUND_CODE = objTax.TFUND_CODE,
                        HAY_ID = obj.HAY_CODE,
                        HOD_CODE = obj.HOD_CODE,
                        LAND_ID = obj.ID,
                        IS_FREEZE = "N",
                        IS_INSTALLMENT = "N",
                        IS_IN_DED = "N",
                        IS_POSTPONE = "N",
                        IS_SCHEDULE = "N",
                        IS_UPDATED = "N",
                        NOTES = "احتساب رسوم " + objTax.TAX_NAME + " على المكلف " + item.STAKEHOLDERS_ERP.NAME_AR + "",
                        PAID = "N",
                        YEAR_NO = (short) CALCULATED_FROM_YEAR,
                        STATUS = "V",
                        STAKEHOLDER_ID = (decimal) item.STAKEHOLDER_ID,
                        //TABUO_APARTMENT = Convert.ToString(obj.BUILDINGS_ERP.TABUO_APRTMENT),
                        //TABUO_BUILDING = obj.TABUO_BUILDING,
                        //TABUO_FLOOR = obj.TABUO_FLOOR,
                        TAX_DATE = Convert.ToDateTime("1/1/" + CALCULATED_TO_YEAR),
                        TAX_CODE = objTax.TAX_CODE,
                        TAX_AMT = Amount*share,


                    };
                    db.GLTAX_ERP.Add(gltax1);
                    db.SaveChanges();
                    var FundAccount = objTax.FUND.ACCOUNT_NO;
                    var CurrntAccount = objTax.THIS_ACCOUNT;
                    if (FundAccount == null)
                        return false;
                    if (CurrntAccount == null)
                        return false;
                    var TransDebit = new TRANS() //Debit ذمم مدينة
                    {
                        TACCOUNT_NO = FundAccount,
                        CURN_CODE = objTax.CURN_CODE,
                        CURN_AMOUNT = gltax1.TAX_AMT ?? 0,
                        LOCAL_AMOUNT = (gltax1.TAX_AMT ?? 0)*(gltax1.FCRATE ?? 0),
                        //ENTRY_DATE = DateTime.Now,
                        ENTRY_DATE = Convert.ToDateTime("1/1/" + CALCULATED_TO_YEAR),
                        FCRATE = gltax1.FCRATE ?? 0,
                        TFUND_CODE = objTax.TFUND_CODE,
                        NOTES =
                            obj.NOTES + " _   احتساب رسوم معارف على حساب الذمم المدينة للرسم " + objTax.TAX_NAME + "",
                        DETAILS =
                            obj.NOTES + " _   احتساب رسوم معارف على حساب الذمم المدينة للرسم " + objTax.TAX_NAME + "",
                        // TRANS_DATE = DateTime.Now,
                        TRANS_DATE = Convert.ToDateTime("1/1/" + CALCULATED_TO_YEAR),
                        TRANS_TYPE = "D",
                        STAKEHOLDER_ID = item.STAKEHOLDER_ID,
                        VOUCHER_NO = 0,
                        VOUCHER_TYPE = "YR",
                        STAFF_ID = UserID,
                    };
                    db.TRANS.Add(TransDebit);
                    db.SaveChanges();
                    var TransCredit = new TRANS() // ذمم دائنة
                    {
                        TACCOUNT_NO = CurrntAccount,
                        CURN_CODE = objTax.CURN_CODE,
                        CURN_AMOUNT = gltax1.TAX_AMT ?? 0,
                        LOCAL_AMOUNT = (gltax1.TAX_AMT ?? 0)*(gltax1.FCRATE ?? 0),
                        // ENTRY_DATE = DateTime.Now,
                        ENTRY_DATE = Convert.ToDateTime("1/1/" + CALCULATED_TO_YEAR),
                        FCRATE = gltax1.FCRATE ?? 0,
                        TFUND_CODE = objTax.TFUND_CODE,
                        NOTES =
                            obj.NOTES + " _   احتساب رسوم معارف على حساب الذمم المدينة للرسم " + objTax.TAX_NAME + "",
                        DETAILS =
                            obj.NOTES + " _   احتساب رسوم معارف على حساب الذمم المدينة للرسم " + objTax.TAX_NAME + "",
                        //TRANS_DATE = DateTime.Now,
                        TRANS_DATE = Convert.ToDateTime("1/1/" + CALCULATED_TO_YEAR),
                        TRANS_TYPE = "C",
                        STAKEHOLDER_ID = item.STAKEHOLDER_ID,
                        VOUCHER_NO = 0,
                        VOUCHER_TYPE = "YR",
                        STAFF_ID = UserID,
                    };
                    db.TRANS.Add(TransCredit);
                    db.SaveChanges();

                }
            }
            else if (obj.EDUCATION_TAX == "U")
            {
                var UsersLand = db.LAND_USERS_ERP.Where(c => c.LAND_ID == obj.ID && c.IS_PREVIOUS == "N").ToList();
                foreach (var item in UsersLand)
                {
                    var share = item.SHARE_OFF/item.SHARE_ALL;
                    var gltax1 = new GLTAX_ERP()
                    {
                        //BUSINESS_ID = ID,
                        CURN_CODE = objTax.CURN_CODE,
                        ENTRY_BY = UserID,
                        //ENTRY_DATE = DateTime.Now,
                        ENTRY_DATE = Convert.ToDateTime("1/1/" + CALCULATED_TO_YEAR),
                        FCRATE = FixedERPValues.GetRateCurrency(objTax.CURN_CODE),
                        FUND_CODE = objTax.TFUND_CODE,
                        HAY_ID = obj.HAY_CODE,
                        HOD_CODE = obj.HOD_CODE,
                        LAND_ID = obj.ID,
                        IS_FREEZE = "N",
                        IS_INSTALLMENT = "N",
                        IS_IN_DED = "N",
                        IS_POSTPONE = "N",
                        IS_SCHEDULE = "N",
                        IS_UPDATED = "N",
                        NOTES = "احتساب رسوم " + objTax.TAX_NAME + " على المكلف " + item.STAKEHOLDERS_ERP.NAME_AR + "",
                        PAID = "N",
                        YEAR_NO = (short) CALCULATED_FROM_YEAR,
                        STATUS = "V",
                        STAKEHOLDER_ID = (decimal) item.STAKEHOLDER_ID,
                        //TABUO_APARTMENT = Convert.ToString(obj.BUILDINGS_ERP.TABUO_APRTMENT),
                        //TABUO_BUILDING = obj.TABUO_BUILDING,
                        //TABUO_FLOOR = obj.TABUO_FLOOR,
                        TAX_DATE = Convert.ToDateTime("1/1/" + CALCULATED_TO_YEAR),
                        TAX_CODE = objTax.TAX_CODE,
                        TAX_AMT = Amount*share,


                    };
                    db.GLTAX_ERP.Add(gltax1);
                    db.SaveChanges();
                    var FundAccount = objTax.FUND.ACCOUNT_NO;
                    var CurrntAccount = objTax.THIS_ACCOUNT;
                    if (FundAccount == null)
                        return false;
                    if (CurrntAccount == null)
                        return false;
                    var TransDebit = new TRANS() //Debit ذمم مدينة
                    {
                        TACCOUNT_NO = FundAccount,
                        CURN_CODE = objTax.CURN_CODE,
                        CURN_AMOUNT = gltax1.TAX_AMT ?? 0,
                        LOCAL_AMOUNT = (gltax1.TAX_AMT ?? 0)*(gltax1.FCRATE ?? 0),
                        //ENTRY_DATE = DateTime.Now,
                        ENTRY_DATE = Convert.ToDateTime("1/1/" + CALCULATED_TO_YEAR),
                        FCRATE = gltax1.FCRATE ?? 0,
                        TFUND_CODE = objTax.TFUND_CODE,
                        NOTES =
                            obj.NOTES + " _   احتساب رسوم معارف على حساب الذمم المدينة للرسم " + objTax.TAX_NAME + "",
                        DETAILS =
                            obj.NOTES + " _   احتساب رسوم معارف على حساب الذمم المدينة للرسم " + objTax.TAX_NAME + "",
                        // TRANS_DATE = DateTime.Now,
                        TRANS_DATE = Convert.ToDateTime("1/1/" + CALCULATED_TO_YEAR),
                        TRANS_TYPE = "D",
                        STAKEHOLDER_ID = item.STAKEHOLDER_ID,
                        VOUCHER_NO = 0,
                        VOUCHER_TYPE = "YR",
                        STAFF_ID = UserID,
                    };
                    db.TRANS.Add(TransDebit);
                    db.SaveChanges();
                    var TransCredit = new TRANS() // ذمم دائنة
                    {
                        TACCOUNT_NO = CurrntAccount,
                        CURN_CODE = objTax.CURN_CODE,
                        CURN_AMOUNT = gltax1.TAX_AMT ?? 0,
                        LOCAL_AMOUNT = (gltax1.TAX_AMT ?? 0)*(gltax1.FCRATE ?? 0),
                        // ENTRY_DATE = DateTime.Now,
                        ENTRY_DATE = Convert.ToDateTime("1/1/" + CALCULATED_TO_YEAR),
                        FCRATE = gltax1.FCRATE ?? 0,
                        TFUND_CODE = objTax.TFUND_CODE,
                        NOTES =
                            obj.NOTES + " _   احتساب رسوم معارف على حساب الذمم المدينة للرسم " + objTax.TAX_NAME + "",
                        DETAILS =
                            obj.NOTES + " _   احتساب رسوم معارف على حساب الذمم المدينة للرسم " + objTax.TAX_NAME + "",
                        //TRANS_DATE = DateTime.Now,
                        TRANS_DATE = Convert.ToDateTime("1/1/" + CALCULATED_TO_YEAR),
                        TRANS_TYPE = "C",
                        STAKEHOLDER_ID = item.STAKEHOLDER_ID,
                        VOUCHER_NO = 0,
                        VOUCHER_TYPE = "YR",
                        STAFF_ID = UserID,
                    };
                    db.TRANS.Add(TransCredit);
                    db.SaveChanges();

                }
            }
            else
                return false;

            return true;
        }


        public static bool CalculateTaxForApartmentNew(decimal ID, decimal Amount, decimal CALCULATED_FROM_YEAR,
            decimal CALCULATED_TO_YEAR, string UserID, DbModel db)
        {
            var fixedObj = db.FIXED_ERP.Where(c => c.NAME == "education_tax_code").SingleOrDefault();
            var taxCode = fixedObj.VALUE;
            var fixedObj1 = db.FIXED_ERP.Where(c => c.NAME == "education_tax_percent").SingleOrDefault();
            var educationPercent = fixedObj1.VALUE;
            var obj = db.APARTMENTS_ERP.SingleOrDefault(c => c.ID == ID);
            obj.IS_CLCULATED = "Y";
            obj.CALCULATED_TO_YEAR = CALCULATED_TO_YEAR;
            db.APARTMENTS_ERP.Attach(obj);
            db.Entry(obj).State = EntityState.Modified;
            db.SaveChanges();

            var objTax = db.TAX.Where(c => c.TAX_CODE == taxCode).SingleOrDefault();
            if (obj.EDUCATION_TAX == "O")
            {
                var ownerLand =
                    db.APARTMENT_OWNER_ERP.Where(c => c.APARTMENT_ID == obj.ID && c.IS_PREVIOUS == "N").ToList();
                foreach (var item in ownerLand)
                {
                    var share = item.SHARE_OFF/item.SHARE_ALL;
                    var gltax1 = new GLTAX_ERP()
                    {
                        //BUSINESS_ID = ID,
                        CURN_CODE = objTax.CURN_CODE,
                        ENTRY_BY = UserID,
                        //ENTRY_DATE = DateTime.Now,
                        ENTRY_DATE = Convert.ToDateTime("1/1/" + CALCULATED_TO_YEAR),
                        FCRATE = FixedERPValues.GetRateCurrency(objTax.CURN_CODE),
                        FUND_CODE = objTax.TFUND_CODE,
                        HAY_ID = obj.BUILDINGS_ERP.LAND_ERP.HAY_CODE,
                        HOD_CODE = obj.BUILDINGS_ERP.LAND_ERP.HOD_CODE,
                        LAND_ID = obj.BUILDINGS_ERP.LAND_ERP.ID,
                        IS_FREEZE = "N",
                        IS_INSTALLMENT = "N",
                        IS_IN_DED = "N",
                        IS_POSTPONE = "N",
                        IS_SCHEDULE = "N",
                        IS_UPDATED = "N",
                        NOTES = "احتساب رسوم " + objTax.TAX_NAME + " على المكلف " + item.STAKEHOLDERS_ERP.NAME_AR + "",
                        PAID = "N",
                        YEAR_NO = (short) CALCULATED_FROM_YEAR,
                        STATUS = "V",
                        STAKEHOLDER_ID = (decimal) item.STAKEHOLDER_ID,
                        TABUO_APARTMENT = ID.ToString(),
                        TABUO_BUILDING = obj.BUILD_ID.ToString(),
                        TABUO_FLOOR = obj.FLOOR_NO,
                        TAX_DATE = Convert.ToDateTime("1/1/" + CALCULATED_TO_YEAR),
                        TAX_CODE = objTax.TAX_CODE,
                        TAX_AMT = Amount*share,


                    };
                    db.GLTAX_ERP.Add(gltax1);
                    db.SaveChanges();
                    var FundAccount = objTax.FUND.ACCOUNT_NO;
                    var CurrntAccount = objTax.THIS_ACCOUNT;
                    if (FundAccount == null)
                        return false;
                    if (CurrntAccount == null)
                        return false;
                    var TransDebit = new TRANS() //Debit ذمم مدينة
                    {
                        TACCOUNT_NO = FundAccount,
                        CURN_CODE = objTax.CURN_CODE,
                        CURN_AMOUNT = gltax1.TAX_AMT ?? 0,
                        LOCAL_AMOUNT = (gltax1.TAX_AMT ?? 0)*(gltax1.FCRATE ?? 0),
                        //ENTRY_DATE = DateTime.Now,
                        ENTRY_DATE = Convert.ToDateTime("1/1/" + CALCULATED_TO_YEAR),
                        FCRATE = gltax1.FCRATE ?? 0,
                        TFUND_CODE = objTax.TFUND_CODE,
                        NOTES = " _   احتساب رسوم معارف على حساب الذمم المدينة للرسم " + objTax.TAX_NAME + "",
                        DETAILS = " _   احتساب رسوم معارف على حساب الذمم المدينة للرسم " + objTax.TAX_NAME + "",
                        // TRANS_DATE = DateTime.Now,
                        TRANS_DATE = Convert.ToDateTime("1/1/" + CALCULATED_TO_YEAR),
                        TRANS_TYPE = "D",
                        STAKEHOLDER_ID = item.STAKEHOLDER_ID,
                        VOUCHER_NO = 0,
                        VOUCHER_TYPE = "YR",
                        STAFF_ID = UserID,
                    };
                    db.TRANS.Add(TransDebit);
                    db.SaveChanges();
                    var TransCredit = new TRANS() // ذمم دائنة
                    {
                        TACCOUNT_NO = CurrntAccount,
                        CURN_CODE = objTax.CURN_CODE,
                        CURN_AMOUNT = gltax1.TAX_AMT ?? 0,
                        LOCAL_AMOUNT = (gltax1.TAX_AMT ?? 0)*(gltax1.FCRATE ?? 0),
                        // ENTRY_DATE = DateTime.Now,
                        ENTRY_DATE = Convert.ToDateTime("1/1/" + CALCULATED_TO_YEAR),
                        FCRATE = gltax1.FCRATE ?? 0,
                        TFUND_CODE = objTax.TFUND_CODE,
                        NOTES = " _   احتساب رسوم معارف على حساب الذمم المدينة للرسم " + objTax.TAX_NAME + "",
                        DETAILS = " _   احتساب رسوم معارف على حساب الذمم المدينة للرسم " + objTax.TAX_NAME + "",
                        //TRANS_DATE = DateTime.Now,
                        TRANS_DATE = Convert.ToDateTime("1/1/" + CALCULATED_TO_YEAR),
                        TRANS_TYPE = "C",
                        STAKEHOLDER_ID = item.STAKEHOLDER_ID,
                        VOUCHER_NO = 0,
                        VOUCHER_TYPE = "YR",
                        STAFF_ID = UserID,
                    };
                    db.TRANS.Add(TransCredit);
                    db.SaveChanges();

                }

            }
            else if (obj.EDUCATION_TAX == "U")
            {
                var UserLand =
                    db.APARTMENT_USERS_ERP.Where(c => c.APARTMENT_ID == obj.ID && c.IS_PREVIOUS == "N").ToList();
                foreach (var item in UserLand)
                {
                    var share = item.SHARE_OFF/item.SHARE_ALL;
                    var gltax1 = new GLTAX_ERP()
                    {
                        //BUSINESS_ID = ID,
                        CURN_CODE = objTax.CURN_CODE,
                        ENTRY_BY = UserID,
                        //ENTRY_DATE = DateTime.Now,
                        ENTRY_DATE = Convert.ToDateTime("1/1/" + CALCULATED_TO_YEAR),
                        FCRATE = FixedERPValues.GetRateCurrency(objTax.CURN_CODE),
                        FUND_CODE = objTax.TFUND_CODE,
                        HAY_ID = obj.BUILDINGS_ERP.LAND_ERP.HAY_CODE,
                        HOD_CODE = obj.BUILDINGS_ERP.LAND_ERP.HOD_CODE,
                        LAND_ID = obj.BUILDINGS_ERP.LAND_ERP.ID,
                        IS_FREEZE = "N",
                        IS_INSTALLMENT = "N",
                        IS_IN_DED = "N",
                        IS_POSTPONE = "N",
                        IS_SCHEDULE = "N",
                        IS_UPDATED = "N",
                        NOTES = "احتساب رسوم " + objTax.TAX_NAME + " على المكلف " + item.STAKEHOLDERS_ERP.NAME_AR + "",
                        PAID = "N",
                        YEAR_NO = (short) CALCULATED_FROM_YEAR,
                        STATUS = "V",
                        STAKEHOLDER_ID = (decimal) item.STAKEHOLDER_ID,
                        TABUO_APARTMENT = ID.ToString(),
                        TABUO_BUILDING = obj.BUILD_ID.ToString(),
                        TABUO_FLOOR = obj.FLOOR_NO,
                        TAX_DATE = Convert.ToDateTime("1/1/" + CALCULATED_TO_YEAR),
                        TAX_CODE = objTax.TAX_CODE,
                        TAX_AMT = Amount*share,


                    };
                    db.GLTAX_ERP.Add(gltax1);
                    db.SaveChanges();
                    var FundAccount = objTax.FUND.ACCOUNT_NO;
                    var CurrntAccount = objTax.THIS_ACCOUNT;
                    if (FundAccount == null)
                        return false;
                    if (CurrntAccount == null)
                        return false;
                    var TransDebit = new TRANS() //Debit ذمم مدينة
                    {
                        TACCOUNT_NO = FundAccount,
                        CURN_CODE = objTax.CURN_CODE,
                        CURN_AMOUNT = gltax1.TAX_AMT ?? 0,
                        LOCAL_AMOUNT = (gltax1.TAX_AMT ?? 0)*(gltax1.FCRATE ?? 0),
                        //ENTRY_DATE = DateTime.Now,
                        ENTRY_DATE = Convert.ToDateTime("1/1/" + CALCULATED_TO_YEAR),
                        FCRATE = gltax1.FCRATE ?? 0,
                        TFUND_CODE = objTax.TFUND_CODE,
                        NOTES = " _   احتساب رسوم معارف على حساب الذمم المدينة للرسم " + objTax.TAX_NAME + "",
                        DETAILS = " _   احتساب رسوم معارف على حساب الذمم المدينة للرسم " + objTax.TAX_NAME + "",
                        // TRANS_DATE = DateTime.Now,
                        TRANS_DATE = Convert.ToDateTime("1/1/" + CALCULATED_TO_YEAR),
                        TRANS_TYPE = "D",
                        STAKEHOLDER_ID = item.STAKEHOLDER_ID,
                        VOUCHER_NO = 0,
                        VOUCHER_TYPE = "YR",
                        STAFF_ID = UserID,
                    };
                    db.TRANS.Add(TransDebit);
                    db.SaveChanges();
                    var TransCredit = new TRANS() // ذمم دائنة
                    {
                        TACCOUNT_NO = CurrntAccount,
                        CURN_CODE = objTax.CURN_CODE,
                        CURN_AMOUNT = gltax1.TAX_AMT ?? 0,
                        LOCAL_AMOUNT = (gltax1.TAX_AMT ?? 0)*(gltax1.FCRATE ?? 0),
                        // ENTRY_DATE = DateTime.Now,
                        ENTRY_DATE = Convert.ToDateTime("1/1/" + CALCULATED_TO_YEAR),
                        FCRATE = gltax1.FCRATE ?? 0,
                        TFUND_CODE = objTax.TFUND_CODE,
                        NOTES = " _   احتساب رسوم معارف على حساب الذمم المدينة للرسم " + objTax.TAX_NAME + "",
                        DETAILS = " _   احتساب رسوم معارف على حساب الذمم المدينة للرسم " + objTax.TAX_NAME + "",
                        //TRANS_DATE = DateTime.Now,
                        TRANS_DATE = Convert.ToDateTime("1/1/" + CALCULATED_TO_YEAR),
                        TRANS_TYPE = "C",
                        STAKEHOLDER_ID = item.STAKEHOLDER_ID,
                        VOUCHER_NO = 0,
                        VOUCHER_TYPE = "YR",
                        STAFF_ID = UserID,
                    };
                    db.TRANS.Add(TransCredit);
                    db.SaveChanges();

                }
            }
            else
                return false;

            return true;
        }

        #endregion

        public static void SetRefAccountforTrans(TRANS tr, decimal? StkID, decimal? refCode)
        {
            var db = Db.Get();
            var account = db.ACCOUNT.FirstOrDefault(c => c.ACCOUNT_NO == tr.TACCOUNT_NO);
            if (account.IS_ACCOUNT_REF == "Y")
            {
                if (account.REF_TYPE == "RC" || account.REF_TYPE == "PY")
                {
                    tr.STAKEHOLDER_ID = StkID;
                }
                else if (account.REF_TYPE == "C")
                {
                    tr.REFCASH_CODE = refCode;
                }
                else if (account.REF_TYPE == "B")
                {
                    tr.REFBANK_CODE = refCode;
                }

            }

        }

        //public static string TruncateTime(string date)
        //{
        //    return EntityFunctions.TruncateTime(date);
        //}

        public static GltaxField GetSumGltaxWithSpecificDate(Decimal ID, DbModel db, DateTime theSpDate,
            string Curn_code)
        {
            var obj = new GltaxField();
            decimal SumAllBefore = 0;
            decimal DedSum = 0;
            decimal sumAllAfter = 0;
            var list =
                db.GLTAX_ERP.Where(
                    c =>
                        c.STAKEHOLDER_ID == ID && c.STATUS == "V" && c.PAID == "N" && c.CURN_CODE == Curn_code &&
                        c.TAX_DATE.Value.Year <= theSpDate.Year);
            foreach (var itemFirst in list)
            {
                var gltax = itemFirst;
                if (gltax.LATE_AMT == null) gltax.LATE_AMT = 0;
                if (gltax.TAX_AMT == null) gltax.TAX_AMT = 0;

                var YearTax = Convert.ToDateTime(gltax.TAX_DATE).Year;
                var YearNow = Convert.ToDateTime(theSpDate).Year;
                var dataTodaey = theSpDate;
                SumAllBefore += (decimal) (gltax.TAX_AMT + (gltax.LATE_AMT != null ? gltax.LATE_AMT : 0));
                var listSchedul =
                    db.TAX_SCHEDULE_ERP.Where(c => c.DEDUCTION_TYPE_ID == gltax.STAKEHOLDERS_ERP.DEDUCTION_TYPE_ID)
                        .ToList();
                var DedList =
                    db.TAX_DED.Where(
                        c =>
                            c.TAX_CODE == gltax.TAX_CODE &&
                            c.DEDUCTION_TYPE_ID == gltax.STAKEHOLDERS_ERP.DEDUCTION_TYPE_ID).ToList();
                if (gltax.TAX.IS_IN_DED == "Y")
                {
                    if (gltax.IS_SCHEDULE == "N")
                    {

                        if (gltax.SP_DED_CURR > 0 || gltax.SP_LATE > 0 || gltax.SP_DED_PREV > 0)
                        {
                            if (gltax.SP_DED_UNTIL_DATE != null)
                            {
                                if (DateTime.Now.Date <= gltax.SP_DED_UNTIL_DATE.Value.Date)
                                {
                                    if (YearTax == YearNow)
                                    {
                                        DedSum += ((decimal) gltax.TAX_AMT*
                                                   (gltax.SP_DED_CURR != null ? (decimal) gltax.SP_DED_CURR : 0))/100;
                                    }
                                    else
                                    {
                                        DedSum += ((decimal) gltax.TAX_AMT*
                                                   (gltax.SP_DED_PREV != null ? (decimal) gltax.SP_DED_PREV : 0))/100;
                                    }
                                    DedSum += ((decimal) gltax.LATE_AMT*
                                               (gltax.SP_LATE != null ? (decimal) gltax.SP_LATE : 0))/100;

                                }


                            }
                        }
                        else
                            foreach (var item in DedList)
                            {
                                if (dataTodaey >= item.FROM_DATE && dataTodaey <= item.TO_DATE)
                                {
                                    if (YearTax == YearNow)
                                    {
                                        DedSum += ((decimal) gltax.TAX_AMT*
                                                   (item.DED_PRCNT_CURR != null ? (decimal) item.DED_PRCNT_CURR : 0))/
                                                  100;
                                        DedSum += (decimal) gltax.LATE_AMT*
                                                  (item.DED_PRCNT_LATE != null ? (decimal) item.DED_PRCNT_LATE : 0)/100;


                                    }
                                    else
                                    {
                                        DedSum += (decimal) gltax.TAX_AMT*
                                                  (item.DED_PRCNT_PREV != null ? (decimal) item.DED_PRCNT_PREV : 0)/100;
                                        DedSum += (decimal) gltax.LATE_AMT*
                                                  (item.DED_PRCNT_LATE_PREV != null
                                                      ? (decimal) item.DED_PRCNT_LATE_PREV
                                                      : 0)/100;

                                    }
                                    break;
                                }

                            }
                    }
                    else
                    {

                        foreach (var item in listSchedul)
                        {
                            if (dataTodaey >= item.FROM_DATE && dataTodaey <= item.TO_DATE)
                            {
                                DedSum += ((decimal) gltax.TAX_AMT*(item.DED_PER != null ? (decimal) item.DED_PER : 0))/
                                          100;
                                DedSum += (decimal) gltax.LATE_AMT*(item.LATE_PER != null ? (decimal) item.LATE_PER : 0)/
                                          100;

                                break;
                            }
                        }

                    }
                }




            }

            sumAllAfter = SumAllBefore - DedSum;
            obj.SumAllBefore = SumAllBefore;
            obj.SumAllafter = sumAllAfter;
            obj.DedVal = DedSum;


            return obj;

        }

        public static void CalculateLateAMT(GLTAX_ERP obj, int year, DbModel db)
        {
            var tax = db.TAX.FirstOrDefault(c => c.TAX_CODE == obj.TAX_CODE);

            var taxYear = obj.TAX_DATE.Value.Year;
            decimal perc = 0;


            if (tax.HAVE_LATE == "Y")
            {
                for (var i = taxYear; i <= taxYear; i++)
                {

                    perc += (decimal) tax.LATE_PERC;
                    if (perc > tax.MAX_LATE_PERC)
                    {
                        perc = (decimal) tax.MAX_LATE_PERC;
                        break;
                    }


                }
                if (perc > 0)
                {
                    obj.LATE_AMT = (perc/100)*obj.TAX_AMT;
                }
            }


        }

        public static string MyFormat(decimal num, decimal digit = 2)
        {
            string format = "{0:N" + digit + "}";
            if (num < 0)
            {
                format = "({0:N2})";
            }
            return string.Format(format, Math.Abs(num));
        }

        //public static string TruncateTime(string date)
        //{

        //    return EntityFunctions.TruncateTime(date).ToString();
        //}

        public static GltaxField GetSumGltaxWithoutDis(GLTAX_ERP gltax, DbModel db, decimal Rate)
        {
            var obj = new GltaxField();
            if (gltax.LATE_AMT == null) gltax.LATE_AMT = 0;
            if (gltax.TAX_AMT == null) gltax.TAX_AMT = 0;
            decimal SumAllBefore = 0;
            decimal DedSum = 0;
            decimal sumAllAfter = 0;
            var YearTax = Convert.ToDateTime(gltax.TAX_DATE).Year;
            var YearNow = Convert.ToDateTime(DateTime.Now).Year;
            var dataTodaey = DateTime.Today;
            SumAllBefore = (decimal) (gltax.TAX_AMT + (gltax.LATE_AMT != null ? gltax.LATE_AMT : 0))*Rate;

            sumAllAfter = SumAllBefore - DedSum;
            obj.SumAllBefore = SumAllBefore;
            obj.SumAllafter = sumAllAfter;
            obj.DedVal = DedSum;


            return obj;
        }

    }
}

//    private static bool allAreSelected()
//{
//   // if 
//    return false;
//}
