//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace ErpDal
{
    using System;
    using System.Collections.Generic;
    
    public partial class TASK_ATTACHMENTS_ERP
    {
        public decimal ID { get; set; }
        public decimal TASK_ID { get; set; }
        public byte[] LOB_FILE { get; set; }
        public string TITLE_AR { get; set; }
        public string TITLE_EN { get; set; }
        public string FILE_NAME { get; set; }
    
        public virtual TASK_ERP TASK_ERP { get; set; }
    }
}
