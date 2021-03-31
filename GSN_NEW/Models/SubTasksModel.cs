using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GSN_NEW.Models
{
   public class SubTasksModel
    {
        [Display(Name = "رقم المهمة الفرعي")]
        public decimal SubTaskID { get; set; }

        [Display(Name = "وصف تفصيلي")]
        public string SUB_TASK_DESC { get; set; }

        [Display(Name = "ملاحظات المدير")]
        public string MANAGER_NOTES { get; set; }

        [Display(Name = "ملاحظات الموظف")]
        public string STAFF_NOTES { get; set; }

        public Nullable<decimal> TASK_ID { get; set; }

    }
}
