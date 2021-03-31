using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace GSN_NEW.Models
{
    public class ViewsModel
    {
        public decimal ID { get; set; }
        public string NAME { get; set; }
        public string CONTROLLOER { get; set; }
        public Nullable<decimal> GROUP_ID { get; set; }
        public Nullable<decimal> MODULE_ID { get; set; }
        public Nullable<decimal> CONTROLLER_FK { get; set; }
        public string CAN_EDIT { get; set; }
        public string CAN_DELETE { get; set; }
        public string CAN_ADD { get; set; }

        [UIHint("ControllersTableComboBoxEditor")]
        [Display(Name = "Controllers  ")]
        public string CONTROLLER_FK_str { get; set; }
        public string METHOD_NAME { get; set; }
        public string MODULE_NAME { get; set; }

        [Display(Name = "GROUP_NAME  ")]
        public string GROUP_NAME { get; set; }

        #region DispaltProperty
         [Display(Name = "Controllers  ")]
        public string ControllersDisplayName { set; get; }
       
         public string STATUS { set; get; }
        #endregion

    }
}