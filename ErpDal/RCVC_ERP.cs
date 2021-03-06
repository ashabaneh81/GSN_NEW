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
    
    public partial class RCVC_ERP
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public RCVC_ERP()
        {
            this.RCVC_ATTACHMENTS_ERP = new HashSet<RCVC_ATTACHMENTS_ERP>();
            this.RCVC_DTL_ERP = new HashSet<RCVC_DTL_ERP>();
            this.RCVC_WK_ERP = new HashSet<RCVC_WK_ERP>();
        }
    
        public decimal ID { get; set; }
        public string STATUS { get; set; }
        public string ACCOUNT_NO { get; set; }
        public Nullable<System.DateTime> ENTRY_DATE { get; set; }
        public string ENTRY_BY { get; set; }
        public Nullable<System.DateTime> TRANS_DATE { get; set; }
        public string NOTES { get; set; }
        public Nullable<decimal> SECTION_ID { get; set; }
        public string CC { get; set; }
        public string PR { get; set; }
        public string FN { get; set; }
        public string SC { get; set; }
        public string PAY_FOR { get; set; }
        public string REF_MANUAL { get; set; }
        public Nullable<decimal> STAKEHOLDER_ID { get; set; }
        public Nullable<decimal> EMPLOYEE_ID { get; set; }
        public Nullable<decimal> BOX_ID { get; set; }
        public string IDNO { get; set; }
        public Nullable<decimal> REVERSE_NO { get; set; }
        public string REVERSE_REASON { get; set; }
        public string UNIT_ID { get; set; }
        public string FUND_TYPE { get; set; }
        public Nullable<decimal> PR_CODE { get; set; }
        public Nullable<decimal> FS_CODE { get; set; }
        public Nullable<decimal> CHEQUE_ID { get; set; }
    
        public virtual ACCOUNT ACCOUNT { get; set; }
        public virtual CHEQUES_DATA_ERP CHEQUES_DATA_ERP { get; set; }
        public virtual COLLECTORS_BOXES_ERP COLLECTORS_BOXES_ERP { get; set; }
        public virtual EMPLOYEE_HERP EMPLOYEE_HERP { get; set; }
        public virtual FN FN1 { get; set; }
        public virtual FUNDERS_ERP FUNDERS_ERP { get; set; }
        public virtual JOURNAL JOURNAL { get; set; }
        public virtual MUN_CLASS_DTL_ERP MUN_CLASS_DTL_ERP { get; set; }
        public virtual PR PR1 { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<RCVC_ATTACHMENTS_ERP> RCVC_ATTACHMENTS_ERP { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<RCVC_DTL_ERP> RCVC_DTL_ERP { get; set; }
        public virtual STAKEHOLDERS_ERP STAKEHOLDERS_ERP { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<RCVC_WK_ERP> RCVC_WK_ERP { get; set; }
        public virtual STAFF_ERP STAFF_ERP { get; set; }
        public virtual UNITS_ERP UNITS_ERP { get; set; }
    }
}
