using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace GSN_NEW.Models
{
    public class JournalWKModel
    {
        [Display(Name="الكود")]
        public decimal ID { get; set; }
        public Nullable<decimal> WK_ID { get; set; }
        [Display(Name = "الموظف")]
        public string STAFF_ID { get; set; }
        [Display(Name = "الترتيب")]
        public decimal ORDERNO { get; set; }
        [Display(Name = "السند")]
        public decimal JOURNAL_NO { get; set; }
        [Display(Name = "العملية")]
        public string ACTION { get; set; }
        public Nullable<decimal> TASK_ID { get; set; }
        [Display(Name = "تاريخ العملية")]
        [DataType(DataType.Date)]
        public Nullable<System.DateTime> DATE_ACTION { get; set; }
        [Display(Name = "الموظف")]
        public string StaffName { get; set; }

        public decimal? AttachmentsNo{get; set;}
        [Display(Name="سبب الارجاع")]
        public string ReturnReason { get; set; }
    }
}