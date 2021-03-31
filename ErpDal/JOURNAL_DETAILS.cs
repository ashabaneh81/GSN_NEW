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
    
    public partial class JOURNAL_DETAILS
    {
        public decimal JOURNAL_NO { get; set; }
        public string FUND_CODE { get; set; }
        public string FN_CODE { get; set; }
        public string ACCOUNT_NO { get; set; }
        public string CC_CODE { get; set; }
        public string SC_CODE { get; set; }
        public string CURN_CODE { get; set; }
        public Nullable<decimal> FCRATE { get; set; }
        public Nullable<decimal> LOCALDBAMT { get; set; }
        public Nullable<decimal> LOCALCRAMT { get; set; }
        public string TRTYPE { get; set; }
        public string CHECK_NO { get; set; }
        public Nullable<System.DateTime> CHECK_DATE { get; set; }
        public string BACCOUNT_NO { get; set; }
        public string BANK { get; set; }
        public string DETAILS { get; set; }
        public Nullable<decimal> CHECK_REFERENCE { get; set; }
        public decimal ID { get; set; }
        public Nullable<decimal> AMT { get; set; }
        public Nullable<decimal> SECTION_ID { get; set; }
        public Nullable<decimal> STAKEHOLDER_ID { get; set; }
        public Nullable<decimal> BOX_ID { get; set; }
        public Nullable<decimal> BANK_ID { get; set; }
        public Nullable<decimal> EMPLOYEE_ID { get; set; }
        public string UNIT_ID { get; set; }
        public string FUND_TYPE { get; set; }
        public Nullable<decimal> FS_CODE { get; set; }
        public Nullable<decimal> PR_CODE { get; set; }
        public string CHEQUE_NO { get; set; }
        public string CHEQUE_ACCOUNT_NO { get; set; }
        public Nullable<decimal> CHEQUE_BANK_ID { get; set; }
        public Nullable<decimal> CHEQUE_REF { get; set; }
        public Nullable<System.DateTime> DUE_DATE { get; set; }
        public Nullable<decimal> AMT_PAID { get; set; }
    
        public virtual ACCOUNT ACCOUNT { get; set; }
        public virtual ACCOUNT_BANK_ERP ACCOUNT_BANK_ERP { get; set; }
        public virtual BANK_HERP BANK_HERP { get; set; }
        public virtual COLLECTORS_BOXES_ERP COLLECTORS_BOXES_ERP { get; set; }
        public virtual CURN CURN { get; set; }
        public virtual EMPLOYEE_HERP EMPLOYEE_HERP { get; set; }
        public virtual FUNDERS_ERP FUNDERS_ERP { get; set; }
        public virtual JOURNAL JOURNAL { get; set; }
        public virtual MUN_CLASS_DTL_ERP MUN_CLASS_DTL_ERP { get; set; }
        public virtual STAKEHOLDERS_ERP STAKEHOLDERS_ERP { get; set; }
        public virtual UNITS_ERP UNITS_ERP { get; set; }
    }
}