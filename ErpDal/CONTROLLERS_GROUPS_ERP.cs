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
    
    public partial class CONTROLLERS_GROUPS_ERP
    {
        public Nullable<decimal> GROUP_ID { get; set; }
        public string CONTROLLERS_ID { get; set; }
        public decimal ID { get; set; }
    
        public virtual GROUPS_ERP GROUPS_ERP { get; set; }
    }
}
