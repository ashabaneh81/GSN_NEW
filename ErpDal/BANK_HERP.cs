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
    
    public partial class BANK_HERP
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public BANK_HERP()
        {
            this.BRANCH_HERP = new HashSet<BRANCH_HERP>();
            this.EMPLOYEE_HERP = new HashSet<EMPLOYEE_HERP>();
            this.JOURNAL_DETAILS = new HashSet<JOURNAL_DETAILS>();
            this.RCVC_DTL_ERP = new HashSet<RCVC_DTL_ERP>();
        }
    
        public decimal ID { get; set; }
        public string NAME_AR { get; set; }
        public string NAME_EN { get; set; }
        public string IS_VALID { get; set; }
        public string HEADER { get; set; }
        public string FOOTER { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<BRANCH_HERP> BRANCH_HERP { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<EMPLOYEE_HERP> EMPLOYEE_HERP { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<JOURNAL_DETAILS> JOURNAL_DETAILS { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<RCVC_DTL_ERP> RCVC_DTL_ERP { get; set; }
    }
}
