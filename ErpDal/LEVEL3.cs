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
    
    public partial class LEVEL3
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public LEVEL3()
        {
            this.ACCOUNT = new HashSet<ACCOUNT>();
        }
    
        public string LEVEL3_CODE { get; set; }
        public string LEVEL1_CODE { get; set; }
        public string LEVEL2_CODE { get; set; }
        public string A_NAME { get; set; }
        public string E_NAME { get; set; }
        public string FN_CODE { get; set; }
        public string MOLG_ID { get; set; }
        public Nullable<decimal> SYS_STSAXXQ220UARB8CXK831GWBT4 { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<ACCOUNT> ACCOUNT { get; set; }
        public virtual FN FN { get; set; }
        public virtual LEVEL2 LEVEL2 { get; set; }
    }
}
