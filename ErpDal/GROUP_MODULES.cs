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
    
    public partial class GROUP_MODULES
    {
        public decimal ID { get; set; }
        public Nullable<decimal> STAFF_GROUP { get; set; }
        public Nullable<decimal> MODULE_ID { get; set; }
        public Nullable<decimal> SUB_MODULE_ID { get; set; }
    
        public virtual MODULES MODULES { get; set; }
        public virtual GROUPS GROUPS { get; set; }
        public virtual GROUPS_ERP GROUPS_ERP { get; set; }
    }
}
