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
    
    public partial class SECTIONS_ERP
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public SECTIONS_ERP()
        {
            this.EMPLOYEE_HERP = new HashSet<EMPLOYEE_HERP>();
            this.UNITS_ERP = new HashSet<UNITS_ERP>();
        }
    
        public string ID { get; set; }
        public string NAME_AR { get; set; }
        public string NAME_EN { get; set; }
        public string IS_VALID { get; set; }
        public string MANAGER_ID { get; set; }
        public string DEPT_CODE { get; set; }
        public Nullable<decimal> OVERTIME_CEILING_AMT { get; set; }
    
        public virtual DEPT_ERP DEPT_ERP { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<EMPLOYEE_HERP> EMPLOYEE_HERP { get; set; }
        public virtual STAFF_ERP STAFF_ERP { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<UNITS_ERP> UNITS_ERP { get; set; }
    }
}
