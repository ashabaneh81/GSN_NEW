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
    
    public partial class DEPOSIT_WK_ERP
    {
        public decimal ID { get; set; }
        public Nullable<decimal> WK_ID { get; set; }
        public string STAFF_ID { get; set; }
        public decimal ORDERNO { get; set; }
        public decimal DEPOSIT_NO { get; set; }
        public string ACTION { get; set; }
        public Nullable<decimal> TASK_ID { get; set; }
        public Nullable<System.DateTime> DATE_ACTION { get; set; }
        public string RETURN_REASON { get; set; }
    
        public virtual DEPOSIT_BANK_ERP DEPOSIT_BANK_ERP { get; set; }
        public virtual DEPOSIT_WKSETUP_ERP DEPOSIT_WKSETUP_ERP { get; set; }
        public virtual STAFF_ERP STAFF_ERP { get; set; }
        public virtual TASK_ERP TASK_ERP { get; set; }
    }
}
