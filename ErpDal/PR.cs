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
    
    public partial class PR
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public PR()
        {
            this.PYVC_ERP = new HashSet<PYVC_ERP>();
            this.RCVC_ERP = new HashSet<RCVC_ERP>();
            this.DEPOSIT_BANK_ERP = new HashSet<DEPOSIT_BANK_ERP>();
            this.ILTIZAM = new HashSet<ILTIZAM>();
        }
    
        public string PR_CODE { get; set; }
        public string PR_NAME { get; set; }
        public string PR_ENAME { get; set; }
        public string SHOW { get; set; }
        public Nullable<decimal> TASH { get; set; }
        public Nullable<decimal> INMA { get; set; }
        public Nullable<decimal> PAID { get; set; }
        public Nullable<decimal> DEV { get; set; }
        public Nullable<decimal> INMARESERVED { get; set; }
        public string CC_CODE { get; set; }
        public Nullable<decimal> PAIDRESERVED { get; set; }
        public Nullable<decimal> TASH2012 { get; set; }
        public Nullable<decimal> INMA2012 { get; set; }
        public Nullable<decimal> PAID2012 { get; set; }
        public Nullable<decimal> DEV2012 { get; set; }
        public Nullable<decimal> INMARESERVED2012 { get; set; }
        public Nullable<decimal> PAIDRESERVED2012 { get; set; }
        public Nullable<decimal> TASH2013 { get; set; }
        public Nullable<decimal> INMA2013 { get; set; }
        public Nullable<decimal> PAID2013 { get; set; }
        public Nullable<decimal> DEV2013 { get; set; }
        public Nullable<decimal> INMARESERVED2013 { get; set; }
        public Nullable<decimal> PAIDRESERVED2013 { get; set; }
        public Nullable<decimal> TASH2014 { get; set; }
        public Nullable<decimal> INMA2014 { get; set; }
        public Nullable<decimal> PAID2014 { get; set; }
        public Nullable<decimal> DEV2014 { get; set; }
        public Nullable<decimal> INMARESERVED2014 { get; set; }
        public Nullable<decimal> PAIDRESERVED2014 { get; set; }
        public Nullable<decimal> TASH2015 { get; set; }
        public Nullable<decimal> INMA2015 { get; set; }
        public Nullable<decimal> PAID2015 { get; set; }
        public Nullable<decimal> DEV2015 { get; set; }
        public Nullable<decimal> INMARESERVED2015 { get; set; }
        public Nullable<decimal> PAIDRESERVED2015 { get; set; }
        public Nullable<decimal> TASH2016 { get; set; }
        public Nullable<decimal> INMA2016 { get; set; }
        public Nullable<decimal> PAID2016 { get; set; }
        public Nullable<decimal> DEV2016 { get; set; }
        public Nullable<decimal> INMARESERVED2016 { get; set; }
        public Nullable<decimal> PAIDRESERVED2016 { get; set; }
        public Nullable<decimal> MAIN_SUB_ID { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<PYVC_ERP> PYVC_ERP { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<RCVC_ERP> RCVC_ERP { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<DEPOSIT_BANK_ERP> DEPOSIT_BANK_ERP { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<ILTIZAM> ILTIZAM { get; set; }
    }
}
