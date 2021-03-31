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
    
    public partial class TASK_ERP
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public TASK_ERP()
        {
            this.CRNOTES_WK_ERP = new HashSet<CRNOTES_WK_ERP>();
            this.JOURNAL_WK_ERP = new HashSet<JOURNAL_WK_ERP>();
            this.DRNOTES_WK_ERP = new HashSet<DRNOTES_WK_ERP>();
            this.RCVC_WK_ERP = new HashSet<RCVC_WK_ERP>();
            this.DEPOSIT_WK_ERP = new HashSet<DEPOSIT_WK_ERP>();
            this.ILTIZAM_WK_ERP = new HashSet<ILTIZAM_WK_ERP>();
            this.PYVC_WK_ERP = new HashSet<PYVC_WK_ERP>();
            this.NOTIFICATION_ERP = new HashSet<NOTIFICATION_ERP>();
            this.TASK_ATTACHMENTS_ERP = new HashSet<TASK_ATTACHMENTS_ERP>();
        }
    
        public decimal ID { get; set; }
        public Nullable<decimal> TASK_TYPE_ID { get; set; }
        public string NAME_AR { get; set; }
        public string NAME_EN { get; set; }
        public string URL { get; set; }
        public Nullable<System.DateTime> DATE_CREATED { get; set; }
        public string FROM_STAFF { get; set; }
        public string TO_STAFF { get; set; }
        public string READ { get; set; }
        public Nullable<System.DateTime> DATE_READ { get; set; }
        public string COMPLETE { get; set; }
        public Nullable<System.DateTime> COMPLETE_DATE { get; set; }
        public string DISMISSED { get; set; }
        public Nullable<System.DateTime> DISMISSED_DATE { get; set; }
        public Nullable<decimal> ACTIVITY_ID { get; set; }
        public Nullable<System.DateTime> PLANNED_START_DATE { get; set; }
        public Nullable<System.DateTime> PLANNED_END_DATE { get; set; }
        public Nullable<System.DateTime> ACTUAL_STRAT_DATE { get; set; }
        public Nullable<System.DateTime> ACTUAL_END_DATE { get; set; }
        public string DESCRIPTION { get; set; }
        public Nullable<decimal> MEMO_ID { get; set; }
        public string NOTES { get; set; }
        public Nullable<decimal> STOCK_OUT_REQUEST_ID { get; set; }
        public Nullable<decimal> REQUEST_PURCHASE_ID { get; set; }
        public Nullable<decimal> STOCK_OUT_ID { get; set; }
        public Nullable<decimal> PURCHASE_ORDER_ID { get; set; }
        public Nullable<decimal> VACATION_ID { get; set; }
        public Nullable<decimal> CLEARANCE_ID { get; set; }
        public Nullable<decimal> SYS_STS_OWMVU7N9Z9K6H9R0Q7P7RZ { get; set; }
        public Nullable<decimal> SYS_STS0O8_XGW6RLXZ94E_CR66T_G { get; set; }
        public Nullable<decimal> SYS_STS1P7_F61GUG0ZCG5__TVME6F { get; set; }
        public Nullable<decimal> SYS_STS1WEZ5DO28WWUA_BTRP_V_MK { get; set; }
        public Nullable<decimal> SYS_STS4UU37BZM7VC4LY_X_3I5FAN { get; set; }
        public Nullable<decimal> SYS_STS809RU24THI3R1M9ZFKI_7T_ { get; set; }
        public Nullable<decimal> SYS_STSA_F9MC6QWB_IYN_3SLOFMYO { get; set; }
        public Nullable<decimal> SYS_STSAJPHDS0070WU3K7WEWUHRVR { get; set; }
        public Nullable<decimal> SYS_STSBIXC_C_URGAXR4_L62PHINP { get; set; }
        public Nullable<decimal> SYS_STSHT_07L10KLNWC7IZQA7VML3 { get; set; }
        public Nullable<decimal> SYS_STSIUGX_7SQH_A668N6YOU19S8 { get; set; }
        public Nullable<decimal> SYS_STSNG0Y9U9T98I_DCNFRB1W0I5 { get; set; }
        public Nullable<decimal> SYS_STSRFR7K8HWILTDH9NH_E3EAGZ { get; set; }
        public Nullable<decimal> SYS_STSUYQ_ZP2ABIWHMRATLTGZ4YB { get; set; }
        public Nullable<decimal> SYS_STSY_0YRSXYL0_SVU7APYCD5SV { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<CRNOTES_WK_ERP> CRNOTES_WK_ERP { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<JOURNAL_WK_ERP> JOURNAL_WK_ERP { get; set; }
        public virtual STAFF_ERP STAFF_ERP { get; set; }
        public virtual STAFF_ERP STAFF_ERP1 { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<DRNOTES_WK_ERP> DRNOTES_WK_ERP { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<RCVC_WK_ERP> RCVC_WK_ERP { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<DEPOSIT_WK_ERP> DEPOSIT_WK_ERP { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<ILTIZAM_WK_ERP> ILTIZAM_WK_ERP { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<PYVC_WK_ERP> PYVC_WK_ERP { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<NOTIFICATION_ERP> NOTIFICATION_ERP { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<TASK_ATTACHMENTS_ERP> TASK_ATTACHMENTS_ERP { get; set; }
        public virtual TASK_TYPES_ERP TASK_TYPES_ERP { get; set; }
    }
}