using ControlAndInspectionDal;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity.Validation;
using System.Linq;
using System.Transactions;
using System.Web;
using System.Web.Mvc;


namespace GSN_NEW.Helpers
{
    public class OutPutReturnedVal
    {
        public bool Sucses;
        public string ErrorMessage;
    }
    public static class InsertGltax
    {
        public static OutPutReturnedVal AddVoucherTax(ControlModel db, string UserID, decimal Stakeholder_id, string Note, string Tax_code, decimal Amount, decimal Fcreate, string Curn_code, decimal? Bussnes_id)
        {
            var output = new OutPutReturnedVal();
            var Stakholder_name = db.STAKEHOLDERS_ERP.Single(s => s.ID == Stakeholder_id).NAME_AR;
            var rate = FixedERPValues.GetRateCurrency(Curn_code);
            if (!FixedERPValues.CheckHaveFcrate())
            {
                output.ErrorMessage = "خطأ....لا يوجد اسعار عملات مدخلة بتاريخ اليوم " ;
                output.Sucses = false;
                return output;
            }
            try
            {
                var Master = new ADDVOUCHER_TAX_ERP
                {
                    NOTES = Note,
                    ENTRY_BY = UserID,
                    ENTRY_DATE = DateTime.Now,
                    STATUS = "P",
                    STAKEHOLDER_ID = Stakeholder_id
                };
                db.ADDVOUCHER_TAX_ERP.Add(Master);
                db.SaveChanges();
                var MasterAddvoucherId = Master.ID;
                var Dtl = new ADDVOUCHER_TAX_DTL_ERP
                {
                    NOTES = Note,
                    ADDVOUCHER_ID = Master.ID,
                    TAX_CODE = Tax_code,
                    AMT = Amount,
                    BENEFICIARY_NAME = Stakholder_name,
                    FCRATE = rate,
                    CURN_CODE = Curn_code,
                   BUSINESS_ID = Bussnes_id,
                };
                db.ADDVOUCHER_TAX_DTL_ERP.Add(Dtl);
                db.SaveChanges();
                var AddvoucherTaxDtlId = Dtl.ID;
                AddGltax(UserID, Stakeholder_id, Tax_code, Curn_code, MasterAddvoucherId, AddvoucherTaxDtlId);
                //output.ErrorMessage = "خطأ....لا يوجد اسعار عملات مدخلة بتاريخ اليوم ";
                output.Sucses = true;
                return output;
            }
            catch(Exception ex)
            {
                output.ErrorMessage = ex.InnerException.InnerException.Message;
                output.Sucses = true;
                return output;
            }
        }
        public static OutPutReturnedVal AddGltax(string UserID, decimal Stakholder_id, string Tax_code, string Curn_code, decimal MasterAddvoucherId, decimal AddvoucherTaxDtlId)
        {
            var output = new OutPutReturnedVal();
            using (TransactionScope scope = new TransactionScope())
            {
                var db = DbControl.Get();
                var obj = db.ADDVOUCHER_TAX_ERP.SingleOrDefault(c => c.ID == MasterAddvoucherId);
                var done = "";
                var itemList = db.ADDVOUCHER_TAX_DTL_ERP.Where(c => c.ADDVOUCHER_ID == MasterAddvoucherId);
                foreach (var val in itemList)
                {
                    var count = db.PERMISSION_TAX_ERP.Count(c => c.TAX_CODE == val.TAX_CODE && c.STAFF_ID == UserID && c.CAN_POST == "Y");
                    if (count == 0)
                    {
                        output.ErrorMessage = "خطأ ....الموظف لا يوجد لديه صلاحية ترحيل للرسم " + val.TAX.TAX_NAME + " ";
                        output.Sucses = false;
                        return output;
                    }
                        //return Json(new { IsDone = false, Message = "خطأ ....الموظف لا يوجد لديه صلاحية ترحيل للرسم " + val.TAX.TAX_NAME + " " }, JsonRequestBehavior.AllowGet);
                }
                obj.STATUS = "P";
                db.ADDVOUCHER_TAX_ERP.Attach(obj);
                db.Entry(obj).State = EntityState.Modified;
                var stackeHolder = db.STAKEHOLDERS_ERP.SingleOrDefault(c => c.ID == obj.STAKEHOLDER_ID);
                foreach (var item in obj.ADDVOUCHER_TAX_DTL_ERP)
                {
                    var rate = FixedERPValues.GetRateCurrency(item.CURN_CODE);
                    item.FCRATE = rate;
                    db.ADDVOUCHER_TAX_DTL_ERP.Attach(item);
                    db.Entry(item).State = EntityState.Modified;
                    db.SaveChanges();
                    var glTax = new GLTAX_ERP()
                    {
                        STAKEHOLDER_ID = obj.STAKEHOLDER_ID,
                        TAX_CODE = item.TAX_CODE,
                        CURN_CODE = item.CURN_CODE,
                        TAX_DATE = item.TAX_DATE,
                        STATUS = "V",//valid
                        ENTRY_DATE = DateTime.Now,
                        IS_FREEZE = "N",
                        IS_INSTALLMENT = "N",
                        IS_POSTPONE = "N",
                        IS_SCHEDULE = "N",
                        FUND_CODE = item.TAX.TFUND_CODE,
                        ENTRY_BY = UserID,
                        FCRATE = rate,
                        ADDVOUHCER_DTL_ID = item.ID,
                        TAX_AMT = item.AMT,
                        PAID = "N",
                        NOTES = item.NOTES,
                        IS_UPDATED = "N",
                        TABUO_APARTMENT = Convert.ToString(item.TABUO_APARTMENT),
                        TABUO_BUILDING = item.TABUO_BUILDING,
                        TABUO_FLOOR = item.TABUO_FLOOR,
                        HAY_ID = item.HAY_ID,
                        HOD_CODE = item.HOD_CODE,
                        LAND_ID = item.LAND_PIECES_ID,
                        IS_IN_DED = "N",
                        LATE_AMT = item.LATE_AMT,
                        BUSINESS_ID = item.BUSINESS_ID
                    };
                    db.GLTAX_ERP.Add(glTax);
                    db.SaveChanges();
                    //تسجيل رسم
                   // var msg1 = "تم تسجيل مبلغ" + item.CURN_CODE + item.AMT + "عليكم حساب رقم" + stackeHolder.STAKEHOLDER_CODE + "للاستفسار يرجى مراجعة مركز خدمة الجمهور";
                    //done += "<br/>" + SendSmsAndEmail(stackeHolder.ID, msg1);
                    var FundAccount = item.TAX.FUND.ACCOUNT_NO;
                    var CurrntAccount = item.TAX.THIS_ACCOUNT;
                    if (item.TAX.REPETATIVE != "3")
                    {
                        if (FundAccount == null)
                        {
                            output.ErrorMessage = "خطا لا يوجد حساب ذمم مدينة للموازنة " + item.TAX.TFUND_CODE + "";
                            output.Sucses = false;
                            return output;
                            //return Json(new { IsDone = false, Message = "خطا لا يوجد حساب ذمم مدينة للموازنة " + item.TAX.TFUND_CODE + "" });
                        }

                        if (CurrntAccount == null) { 
                            output.ErrorMessage = "خطا لا يوجد حساب ايرادات للرسم  " + item.TAX.TAX_NAME + "";
                            output.Sucses = false;
                            return output;
                            //return Json(new { IsDone = false, Message = "خطا لا يوجد حساب ايرادات للرسم  " + item.TAX.TAX_NAME + "" });
                        }
                        var TransDebit = new TRANS()//Debit ذمم مدينة
                        {
                            TACCOUNT_NO = FundAccount,
                            CURN_CODE = item.CURN_CODE,
                            CURN_AMOUNT = (item.AMT ?? 0),
                            LOCAL_AMOUNT = (item.AMT ?? 0) * (rate),
                            ENTRY_DATE = DateTime.Now,
                            FCRATE = rate,
                            TFUND_CODE = item.TAX.TFUND_CODE,
                            NOTES = obj.NOTES + " _ سند ادخال رسم على المكلف " + item.ADDVOUCHER_TAX_ERP.STAKEHOLDERS_ERP.NAME_AR + "",
                            DETAILS = obj.NOTES + " _ سند ادخال رسم على المكلف " + item.ADDVOUCHER_TAX_ERP.STAKEHOLDERS_ERP.NAME_AR + "",
                            TRANS_DATE = DateTime.Now,
                            TRANS_TYPE = "D",
                            STAKEHOLDER_ID = obj.STAKEHOLDER_ID,
                            VOUCHER_NO = obj.ID,
                            VOUCHER_TYPE = "TA",
                            STAFF_ID = UserID,

                        };
                        db.TRANS.Add(TransDebit);
                        var TransCredit = new TRANS()//Credit الايرادات للرسم
                        {
                            TACCOUNT_NO = CurrntAccount,
                            CURN_CODE = item.CURN_CODE,
                            CURN_AMOUNT = (item.AMT ?? 0),
                            LOCAL_AMOUNT = (item.AMT ?? 0) * (rate),
                            ENTRY_DATE = DateTime.Now,
                            FCRATE = rate,
                            TFUND_CODE = item.TAX.TFUND_CODE,
                            NOTES = obj.NOTES + " _ سند ادخال رسم على المكلف " + item.ADDVOUCHER_TAX_ERP.STAKEHOLDERS_ERP.NAME_AR + "",
                            DETAILS = obj.NOTES + " _ سند ادخال رسم على المكلف " + item.ADDVOUCHER_TAX_ERP.STAKEHOLDERS_ERP.NAME_AR + "",
                            TRANS_DATE = DateTime.Now,
                            TRANS_TYPE = "C",
                            VOUCHER_NO = obj.ID,
                            VOUCHER_TYPE = "TA",
                            STAFF_ID = UserID,
                        };
                        db.TRANS.Add(TransCredit);
                        if (item.LATE_AMT != null && item.LATE_AMT != 0)
                        {
                            if (item.TAX.LATE_ACCOUNT == null) {
                                output.ErrorMessage = "خطا لا يوجد حساب غرامات للرسم  " + item.TAX.TAX_NAME + "";
                                output.Sucses = false;
                                return output;
                               // return Json(new { IsDone = false, Message = "خطا لا يوجد حساب غرامات للرسم  " + item.TAX.TAX_NAME + "" });
                            }
                            var TransDebitLate = new TRANS()//Debit ذمم مدينة
                            {
                                TACCOUNT_NO = FundAccount,
                                CURN_CODE = item.CURN_CODE,
                                CURN_AMOUNT = (item.LATE_AMT ?? 0),
                                LOCAL_AMOUNT = (item.LATE_AMT ?? 0) * (rate),
                                ENTRY_DATE = DateTime.Now,
                                FCRATE = rate,
                                TFUND_CODE = item.TAX.TFUND_CODE,
                                NOTES = obj.NOTES + " _ غرامات رسوم على المكلف " + item.ADDVOUCHER_TAX_ERP.STAKEHOLDERS_ERP.NAME_AR + "",
                                DETAILS = obj.NOTES + " _ غرامات رسوم على المكلف " + item.ADDVOUCHER_TAX_ERP.STAKEHOLDERS_ERP.NAME_AR + "",
                                TRANS_DATE = DateTime.Now,
                                TRANS_TYPE = "D",
                                STAKEHOLDER_ID = obj.STAKEHOLDER_ID,
                                VOUCHER_NO = obj.ID,
                                VOUCHER_TYPE = "TA",
                                STAFF_ID = UserID,
                                // TAX_CODE = item.TAX_CODE
                            };
                            db.TRANS.Add(TransDebitLate);
                            var TransCreditLate = new TRANS()//Credit الايرادات للرسم
                            {
                                TACCOUNT_NO = item.TAX.LATE_ACCOUNT,
                                CURN_CODE = item.CURN_CODE,
                                CURN_AMOUNT = (item.LATE_AMT ?? 0),
                                LOCAL_AMOUNT = (item.LATE_AMT ?? 0) * (rate),
                                ENTRY_DATE = DateTime.Now,
                                FCRATE = rate,
                                TFUND_CODE = item.TAX.TFUND_CODE,
                                NOTES = obj.NOTES + " _ غرامات رسوم على المكلف " + item.ADDVOUCHER_TAX_ERP.STAKEHOLDERS_ERP.NAME_AR + "",
                                DETAILS = obj.NOTES + " _ غرامات رسوم على المكلف " + item.ADDVOUCHER_TAX_ERP.STAKEHOLDERS_ERP.NAME_AR + "",
                                TRANS_DATE = DateTime.Now,
                                TRANS_TYPE = "C",
                                VOUCHER_NO = obj.ID,
                                VOUCHER_TYPE = "TA",
                                STAFF_ID = UserID,
                                TAX_CODE = item.TAX_CODE
                            };
                            db.TRANS.Add(TransCreditLate);
                        }

                    }

                }
                //if (type == "E")
                //{
                //    var listCom = obj.STAKEHOLDERS_ERP.COMMUNICATION_ERP.Where(c => c.STAKEHOLDER_ID == obj.STAKEHOLDER_ID && c.TYPE_ID == 4).ToList();


                //    var addemail = new COMMUNICATION_ERP()
                //    {
                //        STAKEHOLDER_ID = obj.STAKEHOLDER_ID,
                //        TYPE_ID = 4,
                //        VAL = obj.STAKEHOLDERS_ERP.EMAIL
                //    };
                //    listCom.Add(addemail);

                //    foreach (var itemcitizen in listCom)
                //    {
                //        var toCitizen = itemcitizen.VAL;
                //        if (!string.IsNullOrEmpty(toCitizen))
                //        {
                //            if (!Helper.IsEmailValid(toCitizen))
                //            {

                //                scope.Dispose();
                //                return Json(new { IsDone = false, Message = "يجب ان تكون صيغة ايميل المكلف  صحيحة" },
                //                    JsonRequestBehavior.AllowGet);


                //            }
                //            else
                //            {
                //                var sub = "بلدية رام الله" + " - " + "نظام الرسوم والجباية";
                //                SendEmail oo = new SendEmail();
                //                oo.Send(sub, "تم اضافة رسوم على حسابك بقيمة " + obj.ADDVOUCHER_TAX_DTL_ERP.ToList().Sum(c => c.AMT * c.FCRATE) + "  شيكل", toCitizen);

                //            }
                //        }
                //    }


                //}
                //if (type == "S")
                //{
                //    var listCom = obj.STAKEHOLDERS_ERP.COMMUNICATION_ERP.Where(c => c.STAKEHOLDER_ID == obj.STAKEHOLDER_ID && c.TYPE_ID == 3).ToList();
                //    var addMobile = new COMMUNICATION_ERP()
                //    {
                //        STAKEHOLDER_ID = obj.STAKEHOLDER_ID,
                //        TYPE_ID = 4,
                //        VAL = obj.STAKEHOLDERS_ERP.MOBILE
                //    };
                //    listCom.Add(addMobile);
                //    foreach (var itemcom in listCom)
                //    {
                //        var number = itemcom.VAL;
                //        number = number.Replace("+", "00").Trim();
                //        var msgSMS = "تم اضافة رسوم مالية على حسابك بقيمة " + obj.ADDVOUCHER_TAX_DTL_ERP.ToList().Sum(c => c.AMT * c.FCRATE) + " شيكل";
                //        var ss = "http://smsservice.hadara.ps:4545/SMS.ashx/bulkservice/sessionvalue/sendmessage/" +

                //                        "?apikey=A394AB4E269C6945D92FE4E20A4A5B8B&to=" + number + "&msg=" + msgSMS + "";
                //        string url = ss;
                //        HttpWebRequest webReq = (HttpWebRequest)WebRequest.Create(string.Format(url));
                //        webReq.Method = "GET";
                //        HttpWebResponse webResponse = (HttpWebResponse)webReq.GetResponse();

                //        //I don't use the response for anything right now. But I might log the response answer later on.   
                //        Stream answer = webResponse.GetResponseStream();
                //        StreamReader _recivedAnswer = new StreamReader(answer);
                //    }


                //}
                try
                {
                    db.SaveChanges();
                    scope.Complete();
                    output.ErrorMessage = "تم الترحيل بنجاح" + "<br/>" + done;
                    output.Sucses = true;
                    return output;
                    //return Json(new { IsDone = true, Message = "تم الترحيل بنجاح" + "<br/>" + done }, JsonRequestBehavior.AllowGet);
                }
                catch (DbEntityValidationException dbEx)
                {
                    var message = "";
                    scope.Dispose();
                    foreach (var validationErrors in dbEx.EntityValidationErrors)
                    {
                        foreach (var validationError in validationErrors.ValidationErrors)
                        {
                            message += validationError.ErrorMessage.ToString() + "\n";

                        }
                    }
                    output.ErrorMessage = message;
                    output.Sucses = false;
                    return output;
                    //return Json(new { IsDone = false, Message = message }, JsonRequestBehavior.AllowGet);

                }
            }


        }
    }
}