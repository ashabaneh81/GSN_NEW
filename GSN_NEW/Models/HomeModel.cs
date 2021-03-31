using System;
using System.Collections.Generic;
using ErpDal;

namespace GSN_NEW.Models
{
    public class HomeModel
    {

        public string type { get; set; }
        public Nullable<decimal> memoId { get; set; }
        public decimal NewMemo { get; set; }
        public decimal OldMemo { get; set; }
        public decimal OldWard { get; set; }
         public decimal NewWard { get; set; }
         public decimal SendMemo { get; set; }
         public decimal DecisionMemo { get; set; }
         public decimal DecisionAdministrationMemo { get; set; }
         public decimal DecisionTotal { set; get;  }
         public decimal AllFw { get; set; }
         public List<STAFF_ERP> staff { get; set; }
         public decimal taskUncomplete { get; set; }
         public decimal taskSendUncomplete { get; set; }

        //
         public decimal taskUncompleteHr { get; set; }
         public decimal taskUncompleteEmun { get; set; }
         public decimal taskUncompleteFinance { get; set; }
         public decimal taskUncompleteProcurment { get; set; }
         public decimal taskUncompleteOthers { get; set; }
        //
         public decimal News1New { set; get; }
         public decimal News1old { set; get; }
         public decimal News2New { set; get; }
         public decimal News2old { set; get; }
         public decimal News3New { set; get; }
         public decimal News3old { set; get; }
         public decimal News4New { set; get; }
         public decimal News4old { set; get; }

         public decimal NewsTotalNew { set; get; }
         public decimal NewsTotalOld { set; get; }



        //
        public decimal Circulars { get; set; }
        public decimal Circulars2 { get; set; }

        public decimal CircularsTotal { get; set; }
        public decimal CircularsOldTotal { get; set; }
        public decimal CircularsOld { get; set; }
         public decimal CircularsOld2 { get; set; }
        public bool IsManager { get; set; }
        public bool isSectionM { get; set; }

        public bool IsRaqabaSehaManger { set; get; }

        public decimal Administrative { get; set; }
        public decimal AdministrativeOld { get; set; }

        public string LoginUser { get; set; }

        
    }
}