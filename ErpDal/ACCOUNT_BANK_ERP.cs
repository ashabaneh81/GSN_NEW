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
    
    public partial class ACCOUNT_BANK_ERP
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public ACCOUNT_BANK_ERP()
        {
            this.ACCOUNT_BANK_ACCOUNTS_ERP = new HashSet<ACCOUNT_BANK_ACCOUNTS_ERP>();
            this.CHEQUES_DATA_ERP = new HashSet<CHEQUES_DATA_ERP>();
            this.JOURNAL_DETAILS = new HashSet<JOURNAL_DETAILS>();
            this.EMPLOYEE_HERP = new HashSet<EMPLOYEE_HERP>();
            this.CRNOTES_DTL_ERP = new HashSet<CRNOTES_DTL_ERP>();
            this.PYVC_DTL_ERP = new HashSet<PYVC_DTL_ERP>();
            this.PYVC_DTL_ERP1 = new HashSet<PYVC_DTL_ERP>();
            this.RCVC_DTL_ERP = new HashSet<RCVC_DTL_ERP>();
            this.DRNOTES_DTL_ERP = new HashSet<DRNOTES_DTL_ERP>();
        }
    
        public decimal ID { get; set; }
        public string NAME_AR { get; set; }
        public string NAME_EN { get; set; }
        public string ACCOUNT_NO { get; set; }
        public string IS_VALID { get; set; }
    
        public virtual ACCOUNT ACCOUNT { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<ACCOUNT_BANK_ACCOUNTS_ERP> ACCOUNT_BANK_ACCOUNTS_ERP { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<CHEQUES_DATA_ERP> CHEQUES_DATA_ERP { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<JOURNAL_DETAILS> JOURNAL_DETAILS { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<EMPLOYEE_HERP> EMPLOYEE_HERP { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<CRNOTES_DTL_ERP> CRNOTES_DTL_ERP { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<PYVC_DTL_ERP> PYVC_DTL_ERP { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<PYVC_DTL_ERP> PYVC_DTL_ERP1 { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<RCVC_DTL_ERP> RCVC_DTL_ERP { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<DRNOTES_DTL_ERP> DRNOTES_DTL_ERP { get; set; }
    }
}
