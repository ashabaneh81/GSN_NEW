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
    
    public partial class ACCOUNT_BANK_ACCOUNTS_ERP
    {
        public decimal ID { get; set; }
        public string ACCOUNT_NO { get; set; }
        public decimal BANK_ID { get; set; }
    
        public virtual ACCOUNT ACCOUNT { get; set; }
        public virtual ACCOUNT_BANK_ERP ACCOUNT_BANK_ERP { get; set; }
    }
}
