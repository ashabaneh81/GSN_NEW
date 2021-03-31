using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GSN_NEW.Models
{
  public  class SubTasksAttachmentModel
    {
        [Display(Name = " رقم المرفق ")]
        public decimal SubTasksAttachmentID { get; set; }
        public decimal SUB_TASK_ID { get; set; }

        [Display(Name = "المرفقات")]
        [UIHint("SubTasksAttachmentFileUploadEditor")]
        public byte[] LOB_FILE { get; set; }

        [Display(Name = " اسم المرفق باللغة العربية  ")]
        public string TITLE_AR { get; set; }
        
        [Display(Name = " اسم المرفق باللغة الانجليزية  ")]
        public string TITLE_EN { get; set; }

        [Display(Name = " اسم الملف    ")]
        public string FILE_NAME { get; set; }
    }
}
