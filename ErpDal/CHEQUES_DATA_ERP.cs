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
    
    public partial class CHEQUES_DATA_ERP
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public CHEQUES_DATA_ERP()
        {
            this.CHEQUES_DATA_ERP1 = new HashSet<CHEQUES_DATA_ERP>();
            this.RCVC_ERP = new HashSet<RCVC_ERP>();
        }
    
        public decimal ID { get; set; }
        public Nullable<decimal> CHK_REF { get; set; }
        public string CHECK_NO { get; set; }
        public string ACCOUNT_NO { get; set; }
        public string CHECK_TYPE { get; set; }
        public decimal AMT { get; set; }
        public string CURN { get; set; }
        public System.DateTime DUE_DATE { get; set; }
        public string BANK_CODE { get; set; }
        public string NOTES { get; set; }
        public string FUND_CODE { get; set; }
        public string TACCOUNT_NO { get; set; }
        public Nullable<decimal> STATUS { get; set; }
        public Nullable<decimal> STAKEHOLDER_ID { get; set; }
        public Nullable<decimal> TBANK_CODE { get; set; }
        public Nullable<decimal> COLLECTOR_BOX_ID { get; set; }
        public string PAYMENT_TYPE { get; set; }
        public Nullable<decimal> CHECK_ID { get; set; }
        public string BANK_NO { get; set; }
        public byte[] FRONT_IMG { get; set; }
        public byte[] BACK_IMG { get; set; }
        public string FRONT_IMG_TITLE { get; set; }
        public string BACK_IMG_TITLE { get; set; }
        public Nullable<decimal> SYS_STS5485LCSJJG_6NM_CNR_KWL2 { get; set; }
    
        public virtual ACCOUNT ACCOUNT { get; set; }
        public virtual ACCOUNT_BANK_ERP ACCOUNT_BANK_ERP { get; set; }
        public virtual CHECK_STATUS_ERP CHECK_STATUS_ERP { get; set; }
        public virtual STAKEHOLDERS_ERP STAKEHOLDERS_ERP { get; set; }
        public virtual COLLECTORS_BOXES_ERP COLLECTORS_BOXES_ERP { get; set; }
        public virtual FUND FUND { get; set; }
        public virtual CURN CURN1 { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<CHEQUES_DATA_ERP> CHEQUES_DATA_ERP1 { get; set; }
        public virtual CHEQUES_DATA_ERP CHEQUES_DATA_ERP2 { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<RCVC_ERP> RCVC_ERP { get; set; }
    }
}
