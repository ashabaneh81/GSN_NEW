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
    
    public partial class NOTIFICATION_ERP
    {
        public decimal ID { get; set; }
        public string NAME_AR { get; set; }
        public string NAME_EN { get; set; }
        public Nullable<System.DateTime> DATE_CREATED { get; set; }
        public string FROM_STAFF { get; set; }
        public string TO_STAFF { get; set; }
        public string READ { get; set; }
        public Nullable<System.DateTime> DATE_READ { get; set; }
        public Nullable<decimal> TASK_ID { get; set; }
        public Nullable<System.DateTime> REMINDER_DATE { get; set; }
        public string URL { get; set; }
        public Nullable<System.DateTime> NOTIFICATION_DATE { get; set; }
        public Nullable<decimal> STOP_WORKING_ID { get; set; }
        public string NOTIFICATION_TYPE { get; set; }
        public string IS_NEW { get; set; }
        public string IS_CLICKED { get; set; }
    
        public virtual TASK_ERP TASK_ERP { get; set; }
        public virtual STAFF_ERP STAFF_ERP { get; set; }
        public virtual STAFF_ERP STAFF_ERP1 { get; set; }
    }
}
