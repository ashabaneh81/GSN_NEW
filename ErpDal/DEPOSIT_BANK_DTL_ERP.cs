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
    
    public partial class DEPOSIT_BANK_DTL_ERP
    {
        public decimal ID { get; set; }
        public decimal DEPOSIT_BANK_NO { get; set; }
        public string ACCOUNT_NO { get; set; }
        public Nullable<decimal> REF_ID { get; set; }
        public decimal AMT { get; set; }
        public string FUND_CODE { get; set; }
        public string CHEQUE_NO { get; set; }
        public Nullable<decimal> CHEQUE_REF { get; set; }
        public string CURN_CODE { get; set; }
        public Nullable<decimal> FCRATE { get; set; }
    
        public virtual ACCOUNT ACCOUNT { get; set; }
        public virtual CURN CURN { get; set; }
        public virtual DEPOSIT_BANK_ERP DEPOSIT_BANK_ERP { get; set; }
        public virtual FUND FUND { get; set; }
    }
}