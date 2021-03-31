using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GSN_NEW.Models
{
   public class TaskAttachmentModel
    {
        [Display(Name = " رقم المرفق ")]
        public decimal TaskAttachmentID { get; set; }

        public decimal TASK_ID { get; set; }
        [Display(Name = "المرفقات")]
        [UIHint("TasksAttachmentFileUploadEditor")]
        public byte[] LOB_FILE { get; set; }

        [Display(Name = " اسم المرفق باللغة العربية  ")]
        public string TITLE_AR { get; set; }

        [Display(Name = " اسم المرفق باللغة الانجليزية  ")]
        public string TITLE_EN { get; set; }

        [Display(Name = " اسم الملف    ")]
        public string FILE_NAME { get; set; }
    }
}
