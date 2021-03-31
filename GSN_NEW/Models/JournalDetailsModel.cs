using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;
using ErpDal;
using GSN_NEW.Helpers;
namespace GSN_NEW.Models
{
    public class JournalDetailsModel
    {
        [Display(Name="رقم المسند")]
        public decimal JOURNAL_NO { get; set; }
        [Display(Name = "الموازنة")]
        [UIHint("FUNDJournalEditor")]
        [Required(ErrorMessage="الرجاء ادخال الموازنة")]
        public string FUND_CODE { get; set; }
        [Display(Name = "مصدر التمويل")]
        [UIHint("FSJournalEditor")]
        public decimal? FS_CODE { get; set; }
        [Display(Name="نوع التمويل")]
        [UIHint("FundTypeEditor")]
        public string FundType { get; set; }
        [Display(Name = "الوظيفة")]
        [UIHint("FNJournalEditor")]
        public string FN_CODE { get; set; }
        [Display(Name = "رقم الحساب")]
        [UIHint("AccountsJournalEditor")]
        [Required(ErrorMessage = "الرجاء ادخال رقم الحساب")]
        public string ACCOUNT_NO { get; set; }
        [Display(Name = "مركز التكلفة")]
        [UIHint("CCComboboxEditor")]     
        public string CC_CODE { get; set; }
        [Display(Name = "المشروع")]
        [UIHint("PRJournalEditor")]
        public decimal? PR_CODE { get; set; }
        [Display(Name = "القطاع")]
        [UIHint("SCJournalEditor")]
        public string SC_CODE { get; set; }
        [Display(Name = "العملة")]
        [Required(ErrorMessage = "الرجاء ادخال العملة")]
        [UIHint("CurnEditor")]
        public string CURN_CODE { get; set; }
        [Display(Name = "سعر التحويل")]
        public Nullable<decimal> FCRATE { get; set; }
        [Display(Name = "المبلغ")]
        [Required(ErrorMessage="الرجاء ادخال المبلغ")]
        public Nullable<decimal> AMT { get; set; }
        [Display(Name = "معادل مدين")]
        public Nullable<decimal> LOCALDBAMT { get; set; }
        [Display(Name = "معادل دائن")]
        public Nullable<decimal> LOCALCRAMT { get; set; }
        [Display(Name = "نوع الحركة")]
        public string TRTYPE { get; set; }
        public string CHECK_NO { get; set; }
        public Nullable<System.DateTime> CHECK_DATE { get; set; }
        public string BACCOUNT_NO { get; set; }
        public string BANK { get; set; }
        [Display(Name = "البيان")]
        public string Notes { get; set; }
        public Nullable<decimal> CHECK_REFERENCE { get; set; }
        public decimal ID { get; set; }

        //public Nullable<decimal> STAKEHOLDER_ID { get; set; }
        //[Display(Name = "أصحاب المصلحة")]
        //[UIHint("StakeholderComboboxEditor")]
        //public decimal? StakeholderIdStr { get; set; }

        public string AccountName { get; set; }
        public string CCName {get; set;}

        public string FundName { get; set; }

        public string FnName { get; set; }

        public string ScName { get; set; }

        public string PrName { get; set; }

        public string FsName { get; set; }

        public string StakeHolderName { get; set; }

        public string CurnName { get; set; }
        [Display(Name="المرجع")]
        [UIHint("RefEditor")]
        public decimal? RefId { get; set; }
        public string RefName { get; set; }
        public string RefType { get; set; }
        [Display(Name="الجسم الاداري")]
        //[UIHint("MunClassEditor")]
        public decimal? SectionId { get; set; }

        public string SectionName { get; set; }
        [Display(Name="موازنة تشغيلية؟")]
        public string IsOperatingBudget { get; set; }
        [Display(Name="الدائرة")]
        //[UIHint("DeptEditor")]
        public string DEPT_ID { get; set; }
        [Display(Name = "القسم")]
        //[UIHint("SectionEditor")]
        public string SECTION_ID { get; set; }
        public string DeptName { get; set; }
        public string SecName { get; set; }
        [Display(Name="الشعبة")]
        [UIHint("UnitsEditor")]
        public string UNIT_ID { get; set; }

        public string UnitName { get; set; }

        public string CatId { get; set; }
        [Display(Name="رقم الشيك")]
        [Required(ErrorMessage="الرجاء ادخال رقم الشيك")]
        [StringLength(8, MinimumLength = 8, ErrorMessage = "عدد ارقام الشيك يجب ان تكون 8 على الاقل")]
        public string ChequeNo { get; set; }
        [Display(Name = "تاريخ الشيك")]
        [DataType(DataType.Date)]
        [Required(ErrorMessage = "الرجاء ادخال تاريخ الشيك")]
        public Nullable<System.DateTime> DueDate { get; set; }
        [Display(Name="رقم الحساب")]
        [Required(ErrorMessage = "الرجاء ادخال رقم حساب الشيك")]
        public string ChequeAccountNo { get; set; }
        [Display(Name="البنك المسحوب عليه")]
        [UIHint("ChequeBankEditor")]
        [Required(ErrorMessage = "الرجاء ادخال البنك المسحوب عليه الشيك")]
        public decimal? BANK_CODE { get; set; }
        public decimal? ChequeRef { get; set; }

        public string BankName { get; set; }

        
    }
}