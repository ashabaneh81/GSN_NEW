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
    
    public partial class RCVC_WKSETUP_ERP
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public RCVC_WKSETUP_ERP()
        {
            this.RCVC_WK_ERP = new HashSet<RCVC_WK_ERP>();
        }
    
        public decimal ID { get; set; }
        public string STAFF_ID { get; set; }
        public Nullable<decimal> HR_ID { get; set; }
        public Nullable<decimal> GROUP_ID { get; set; }
        public Nullable<decimal> ORDERNO { get; set; }
        public string NAME_AR { get; set; }
        public string CAN_EDIT { get; set; }
    
        public virtual GROUPS_ERP GROUPS_ERP { get; set; }
        public virtual HR_FUNCTION_PERP HR_FUNCTION_PERP { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<RCVC_WK_ERP> RCVC_WK_ERP { get; set; }
        public virtual STAFF_ERP STAFF_ERP { get; set; }
    }
}
