using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace GSN_NEW.Models
{
    public class JournalWFSetupModel
    {
        public decimal ID { get; set; }
        [UIHint("StaffComboboxEditor")]
        public string STAFF_ID { get; set; }
        [UIHint("HrsComboboxEditor")]
        public Nullable<decimal> HrNameIDString { get; set; }
        [UIHint("GroupsEditor")]
        public Nullable<decimal> GROUP_ID { get; set; }
        [Required(ErrorMessage="الرجاء ادخال الترتيب")]
        public Nullable<decimal> ORDERNO { get; set; }
        [Required(ErrorMessage = "الرجاء ادخال الوصف")]
        public string NAME_AR { get; set; }

        public string StaffName { get; set; }

        public string HRFunctionName { get; set; }

        public string GroupName { get; set; }
        [Display(Name="صلاحية التعديل؟")]
        public string CanEdit { get; set; }

        public decimal? HrId { get; set; }
    }
}