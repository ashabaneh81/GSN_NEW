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
    
    public partial class ILTIZAM_ATTACHMENTS_ERP
    {
        public decimal ID { get; set; }
        public string TITLE { get; set; }
        public string FILE_NAME { get; set; }
        public byte[] LOB_FILE { get; set; }
        public Nullable<decimal> JOURNAL_ID { get; set; }
        public Nullable<decimal> DBNOTE_ID { get; set; }
        public Nullable<decimal> CRNOTE_ID { get; set; }
        public Nullable<decimal> ILTIZAM_ID { get; set; }
    
        public virtual CRNOTES_MAS_ERP CRNOTES_MAS_ERP { get; set; }
        public virtual DRNOTES_MAS_ERP DRNOTES_MAS_ERP { get; set; }
        public virtual ILTIZAM ILTIZAM { get; set; }
        public virtual JOURNAL JOURNAL { get; set; }
    }
}