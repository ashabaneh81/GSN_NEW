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
    
    public partial class GROUPS_STAFF_ERP
    {
        public decimal ID { get; set; }
        public decimal GROUP_ID { get; set; }
        public string STAFF_ID { get; set; }
    
        public virtual GROUPS_ERP GROUPS_ERP { get; set; }
        public virtual STAFF_ERP STAFF_ERP { get; set; }
    }
}