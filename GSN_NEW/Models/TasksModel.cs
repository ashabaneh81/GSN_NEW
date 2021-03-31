using Kendo.Mvc.UI;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Mvc;

namespace GSN_NEW.Models
{
   public class TasksModel : ISchedulerEvent
    {
        [Display(Name = "رقم المهمة")]
        public decimal TaskID { get; set; }
        public decimal? TASK_TYPE_ID { get; set; }
        [Display(Name = "عنوان المهمة باللغة العربية")]
        [Required(ErrorMessage = "الرجاء ادخال عنوان المهمة باللغة العربية")]

        public string NAME_AR { get; set; }

        [Display(Name = " عنوان المهمة باللغة الانجليزية")]

        public string NAME_EN { get; set; }

        public string URL { get; set; }

        [Display(Name = "تاريخ الانشاء")]
        [Required(ErrorMessage = "الرجاء ادخال تاريخ الانشاء")]

        [DataType(DataType.Date)]
        public System.DateTime? DATE_CREATED { get; set; }

        [Display(Name = "من الشخص")]
        public string FROM_STAFF { get; set; }

        [Display(Name = "الشخص الموجهة له")]
        [Required(ErrorMessage = "الرجاء اختيار الشخص الموجهة له")]
        [UIHint("TaskToStafComboboxEditor")]
        public string TO_STAFF { get; set; }

        [Display(Name = "وصف المهمة")]
        [Required(ErrorMessage = "الرجاء ادخال وصف المهمة")]
        public string DESCRIPTION { get; set; }

        public string READ { get; set; }
        public System.DateTime? DATE_READ { get; set; }
        public string COMPLETE { get; set; }
        [DataType(DataType.Date)]
        public System.DateTime? COMPLETE_DATE { get; set; }
        public string DISMISSED { get; set; }
        public System.DateTime? DISMISSED_DATE { get; set; }

        [Display(Name = "اسم النشاط باللغة العربية")]
        public decimal? ACTIVITY_ID { get; set; }

       [Display(Name = "اسم النشاط باللغة العربية")]
       [UIHint("ActivitiesComboboxEditor")]
        public string MainActivityIDstr { set; get; }

        [Display(Name = "تاريخ بدء المهمة المخطط")]
        [Required(ErrorMessage = "الرجاء ادخال تاريخ بدء المهمة المخطط")]
        [DataType(DataType.Date)]
        public System.DateTime? PLANNED_START_DATE { get; set; }

        [Display(Name = "تاريخ انتهاء المهمة المخطط")]
        [Required(ErrorMessage = "الرجاء ادخال تاريخ انتهاء المهمة المخطط")]

        [DataType(DataType.Date)]
        public Nullable<System.DateTime> PLANNED_END_DATE { get; set; }

        [Display(Name = "تاريخ بدء المهمة الفعلي ")]
        [DataType(DataType.Date)]
        public System.DateTime? ACTUAL_STRAT_DATE { get; set; }

        [Display(Name = "تاريخ انتهاء المهمة الغعلي")]
        [DataType(DataType.Date)]
        public System.DateTime? ACTUAL_END_DATE { get; set; }
        public decimal? MEMO_ID { get; set; }
        public decimal? Form_ID { get; set; }
        public string SenderWard { set; get; }

        public string NOTES { get; set; }
        public string TASK_TYPE_AR { get; set; }
        public string TASK_TYPE_EN { get; set; }
        public string IS_MANUAL { get; set; }
        public bool HAS_ATTACH { get; set; }
        public string TITLE { get; set; }
        [Display(Name = "من الشخص")]
        public string WHO_APPLY_SERVICE { get; set; }
        #region Display prop

        [Display(Name = "الشخص الموجهة له ")]
        [HiddenInput(DisplayValue = false)]
        public string StafName { set; get; }

        [Display(Name = "اسم النشاط باللغة العربية ")]
        [HiddenInput(DisplayValue = false)]
        public string AllActvityName { set; get; }

        public string FromStaf { set; get; }

        [Display(Name = "النشاط ")]
        public string MainSubName { set; get; }

        [Display(Name = "المرحلة ")]
        [HiddenInput(DisplayValue = false)]
        public string ActivityName { set; get; }
        #endregion

        //1
        internal object ToEntity()
        {
            throw new NotImplementedException();
        }

        public string Description { set; get; }

        public DateTime? End
        {
            set; get;
            
        }

        public string EndTimezone
        {
            set; get;
                   }

        public bool IsAllDay
        {
            set; get;
           
        }

        public string RecurrenceException
        {
            set; get;
           
        }


        public string RecurrenceRule
        {
            set; get;
           
        }

        public DateTime? Start
        {
            set; get;
        }

        public string StartTimezone
        {
            set; get;
           
        }

        //  [Display(ShortName = "shortname")]
        [Display(Description = "desc")]
        public string Title
        {
            get; set;
           
        }

        DateTime ISchedulerEvent.Start
        {
            set; get;
          
        }

        DateTime ISchedulerEvent.End
        {
            set; get;
            
        }
        //2
    }
}
