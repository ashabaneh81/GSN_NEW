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
    
    public partial class STAFF_ERP
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public STAFF_ERP()
        {
            this.COLLECTORS_BOXES_ERP = new HashSet<COLLECTORS_BOXES_ERP>();
            this.CRNOTES_MAS_ERP = new HashSet<CRNOTES_MAS_ERP>();
            this.CRNOTES_WKSETUP_ERP = new HashSet<CRNOTES_WKSETUP_ERP>();
            this.DEPT_ERP = new HashSet<DEPT_ERP>();
            this.DEPT_ERP1 = new HashSet<DEPT_ERP>();
            this.JOURNAL = new HashSet<JOURNAL>();
            this.JOURNAL1 = new HashSet<JOURNAL>();
            this.JOURNAL_WK_ERP = new HashSet<JOURNAL_WK_ERP>();
            this.JOURNAL_WKSETUP_ERP = new HashSet<JOURNAL_WKSETUP_ERP>();
            this.SECTIONS_ERP = new HashSet<SECTIONS_ERP>();
            this.TASK_ERP = new HashSet<TASK_ERP>();
            this.TASK_ERP1 = new HashSet<TASK_ERP>();
            this.TRANS = new HashSet<TRANS>();
            this.UNITS_ERP = new HashSet<UNITS_ERP>();
            this.DRNOTES_MAS_ERP = new HashSet<DRNOTES_MAS_ERP>();
            this.DRNOTES_WK_ERP = new HashSet<DRNOTES_WK_ERP>();
            this.DRNOTES_WKSETUP_ERP = new HashSet<DRNOTES_WKSETUP_ERP>();
            this.GROUPS_STAFF_ERP = new HashSet<GROUPS_STAFF_ERP>();
            this.RCVC_ERP = new HashSet<RCVC_ERP>();
            this.RCVC_WK_ERP = new HashSet<RCVC_WK_ERP>();
            this.RCVC_WKSETUP_ERP = new HashSet<RCVC_WKSETUP_ERP>();
            this.DEPOSIT_BANK_ERP = new HashSet<DEPOSIT_BANK_ERP>();
            this.DEPOSIT_WK_ERP = new HashSet<DEPOSIT_WK_ERP>();
            this.DEPOSIT_WKSETUP_ERP = new HashSet<DEPOSIT_WKSETUP_ERP>();
            this.ILTIZAM = new HashSet<ILTIZAM>();
            this.ILTIZAM1 = new HashSet<ILTIZAM>();
            this.ILTIZAM2 = new HashSet<ILTIZAM>();
            this.ILTIZAM_WK_ERP = new HashSet<ILTIZAM_WK_ERP>();
            this.ILTIZAM_WKSETUP_ERP = new HashSet<ILTIZAM_WKSETUP_ERP>();
            this.PYVC_WK_ERP = new HashSet<PYVC_WK_ERP>();
            this.PYVC_WKSETUP_ERP = new HashSet<PYVC_WKSETUP_ERP>();
            this.NOTIFICATION_ERP = new HashSet<NOTIFICATION_ERP>();
            this.NOTIFICATION_ERP1 = new HashSet<NOTIFICATION_ERP>();
            this.STAFF_VIEWS = new HashSet<STAFF_VIEWS>();
        }
    
        public string ID { get; set; }
        public string NAME_AR { get; set; }
        public string NAME_EN { get; set; }
        public string STAFF_PASSWORD { get; set; }
        public Nullable<decimal> EMPLOYEE_CODE { get; set; }
        public string IS_VALID { get; set; }
        public Nullable<decimal> INTERVIEWER_ID { get; set; }
        public string THEMES { get; set; }
        public string IS_COLLECTOR { get; set; }
        public string LAND_NOTIFICATION { get; set; }
        public string LIKE_MANAGER { get; set; }
        public string MAC_ADDRESS { get; set; }
        public Nullable<System.DateTime> EXPIRY_DATE { get; set; }
        public Nullable<decimal> IFMIS_STAFF { get; set; }
        public string IS_BUSSSTATION_STAFF { get; set; }
        public string IS_QR_STAFF { get; set; }
        public string STAFF_CODE_HRMIS { get; set; }
        public Nullable<decimal> SYS_STSAFA__SKREI18MQWGGUI8K8U { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<COLLECTORS_BOXES_ERP> COLLECTORS_BOXES_ERP { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<CRNOTES_MAS_ERP> CRNOTES_MAS_ERP { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<CRNOTES_WKSETUP_ERP> CRNOTES_WKSETUP_ERP { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<DEPT_ERP> DEPT_ERP { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<DEPT_ERP> DEPT_ERP1 { get; set; }
        public virtual EMPLOYEE_HERP EMPLOYEE_HERP { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<JOURNAL> JOURNAL { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<JOURNAL> JOURNAL1 { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<JOURNAL_WK_ERP> JOURNAL_WK_ERP { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<JOURNAL_WKSETUP_ERP> JOURNAL_WKSETUP_ERP { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<SECTIONS_ERP> SECTIONS_ERP { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<TASK_ERP> TASK_ERP { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<TASK_ERP> TASK_ERP1 { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<TRANS> TRANS { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<UNITS_ERP> UNITS_ERP { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<DRNOTES_MAS_ERP> DRNOTES_MAS_ERP { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<DRNOTES_WK_ERP> DRNOTES_WK_ERP { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<DRNOTES_WKSETUP_ERP> DRNOTES_WKSETUP_ERP { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<GROUPS_STAFF_ERP> GROUPS_STAFF_ERP { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<RCVC_ERP> RCVC_ERP { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<RCVC_WK_ERP> RCVC_WK_ERP { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<RCVC_WKSETUP_ERP> RCVC_WKSETUP_ERP { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<DEPOSIT_BANK_ERP> DEPOSIT_BANK_ERP { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<DEPOSIT_WK_ERP> DEPOSIT_WK_ERP { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<DEPOSIT_WKSETUP_ERP> DEPOSIT_WKSETUP_ERP { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<ILTIZAM> ILTIZAM { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<ILTIZAM> ILTIZAM1 { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<ILTIZAM> ILTIZAM2 { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<ILTIZAM_WK_ERP> ILTIZAM_WK_ERP { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<ILTIZAM_WKSETUP_ERP> ILTIZAM_WKSETUP_ERP { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<PYVC_WK_ERP> PYVC_WK_ERP { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<PYVC_WKSETUP_ERP> PYVC_WKSETUP_ERP { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<NOTIFICATION_ERP> NOTIFICATION_ERP { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<NOTIFICATION_ERP> NOTIFICATION_ERP1 { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<STAFF_VIEWS> STAFF_VIEWS { get; set; }
    }
}