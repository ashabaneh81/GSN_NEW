using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace GSN_NEW.Models
{
    public class JournalModel
    {
        [Display(Name="رقم السند")]
        public decimal JOURNAL_NO { get; set; }
        [Display(Name = "نوع السند")]
        [Required(ErrorMessage="الرجاء ادخال نوع السند")]
        public decimal? JournalType { get; set; }
        [Display(Name = "تاريخ الاعداد")]
        [DataType(DataType.Date)]
        public DateTime? JOURNAL_DATE { get; set; }
        [Display(Name = "البيان")]
        [Required(ErrorMessage="الرجاء ادخال اسم البيان")]
        [StringLength(255, MinimumLength = 0, ErrorMessage = "لقد تجاوزت الحد الأقصى المسموح به")]
        public string DETAILS { get; set; }
        [Display(Name = "الحالة")]
        public string STATUS { get; set; }        
        public Nullable<decimal> REVERSAL_NO { get; set; }
        public string REVERSAL_NOTES { get; set; }
        [Display(Name = "وصف السند")]
        [DataType(DataType.MultilineText)]
        [StringLength(255, MinimumLength = 0, ErrorMessage = "لقد تجاوزت الحد الأقصى المسموح به")]
        public string NOTES { get; set; }
        [Display(Name = "تاريخ العملية المالية")]
        [DataType(DataType.Date)]
        public Nullable<System.DateTime> TRANS_DATE { get; set; }
        public string REVERSAL_BY { get; set; }
        public Nullable<System.DateTime> REVERSAL_DATE { get; set; }
        public string CANCEL_BY { get; set; }
        public Nullable<System.DateTime> CANCEL_DATE { get; set; }

        public string CanPost { get; set; }

        public string CanAudit { get; set; }

        public decimal? OrderNo { get; set; }

        public decimal? MaxOrderNo { get; set; }
        [Display(Name="عدد المرفقات")]
        public decimal? AttachmentsNo { get; set; }

        public string CanEdit { get; set; }
        [Display(Name="رقم العكس")]
        public decimal? ReverseNo { get; set; }
        [Display(Name = "سبب العكس")]
        public string ReverseReason { get; set; }
    }
}