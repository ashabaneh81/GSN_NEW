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
    
    public partial class TASK_TYPES_ERP
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public TASK_TYPES_ERP()
        {
            this.TASK_ERP = new HashSet<TASK_ERP>();
        }
    
        public decimal ID { get; set; }
        public string NAME_AR { get; set; }
        public string NAME_EN { get; set; }
        public string IS_VALID { get; set; }
        public string IS_MANUAL { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<TASK_ERP> TASK_ERP { get; set; }
    }
}