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
    
    public partial class LEVEL1
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public LEVEL1()
        {
            this.LEVEL2 = new HashSet<LEVEL2>();
        }
    
        public string LEVEL1_CODE { get; set; }
        public string A_NAME { get; set; }
        public string E_NAME { get; set; }
        public string CAT { get; set; }
        public string MOLG_ID { get; set; }
        public string LEVEL0_CODE { get; set; }
        public Nullable<decimal> SYS_STSGZ_XCZ_SXJP8E1ET_QAD7U5 { get; set; }
    
        public virtual LEVEL0 LEVEL0 { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<LEVEL2> LEVEL2 { get; set; }
    }
}
