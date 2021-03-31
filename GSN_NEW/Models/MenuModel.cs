using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GSN_NEW.Models
{
    public class MenuModel
    {
        public decimal? ID { set; get; }
        public string NAME { set; get; }
        public string CONTROLLER { set; get; }
        public string METHOD_NAME { set; get; }

        public string Icon { get; set; }
        public List<MenuModel> listSubController { set; get; } 
        public List<MenuModel> listSubGroupController { set; get; } 

        //nuah
        public List<ViewsModel> listViewsTable { set; get; }
        
        //nuha
    }
}