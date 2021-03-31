using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using ErpDal;
using GSN_NEW.Models;

namespace GSN_NEW.Helpers
{
    public class MenuStaff
    {
        public static List<MenuModel> GetMenuStaff(string user)
        {
            var db = Db.Get();
            List<MenuModel> menu = new List<MenuModel>();
            var q = db.STAFF_VIEWS.Where(c => c.STAFF_CODE == user && db.VIEWS.Where(v => v.ID==c.VIEW_ID && v.CONTROLLERS_TABLE_ERP.ON_MENU=="Y").Any());
            var modules = q.OrderBy(c => c.ID).GroupBy(g => g.VIEWS.MODULES.NAME).Select(c => new MenuModel()
            {
                ID = db.MODULES.FirstOrDefault(a => a.NAME == c.Key).ID,
                NAME = c.Key,
                Icon = db.MODULES.FirstOrDefault(a => a.NAME == c.Key).ICON_NAME
            });

            foreach (var item in modules)
            {
                MenuModel menu2 = new MenuModel();

                //var groups = db.GROUPS.Where(c => c.MODULE_ID == item.ID).GroupBy(c => c.NAME).Select(c => new MenuModel()
                //{
                //    ID = db.GROUPS.FirstOrDefault(a => a.NAME == c.Key && a.MODULE_ID==item.ID).ID,
                //    NAME = c.Key,
                //}).ToList();
                var groups = db.GROUPS.Where(c => c.MODULE_ID == item.ID).OrderBy(c => c.ID).Select(c => new MenuModel()
                {
                    ID = c.ID,
                    NAME = c.NAME,
                    Icon = c.MODULES.ICON_NAME
                }).ToList();

                var listSubController = db.STAFF_VIEWS
                                          .Where(a => a.STAFF_CODE == user && a.VIEWS.GROUP_ID == null && a.VIEWS.MODULE_ID == item.ID && a.VIEWS.CONTROLLERS_TABLE_ERP.ON_MENU == "Y")
                                          .Select(s => new MenuModel()
                                          {
                                              ID = s.VIEW_ID,
                                              NAME = s.VIEWS.CONTROLLERS_TABLE_ERP.DISPLAY_NAME,
                                              CONTROLLER = s.VIEWS.CONTROLLERS_TABLE_ERP.CONTROLLER_NAME,
                                              METHOD_NAME = s.VIEWS.CONTROLLERS_TABLE_ERP.METHOD_NAME,
                                          }).ToList();
                if (groups.Count > 0)
                {
                    List<MenuModel> menu1 = new List<MenuModel>();

                    foreach (var gg in groups)
                    {

                        MenuModel oo = new MenuModel();
                        var listSubGroupController = db.STAFF_VIEWS.Where(c => c.STAFF_CODE == user && c.VIEWS.GROUP_ID == gg.ID && db.VIEWS.Where(v => v.ID == c.VIEW_ID && v.CONTROLLERS_TABLE_ERP.ON_MENU=="Y").Any()).Select(a => new MenuModel()
                        {
                            ID = a.ID,
                            NAME = a.VIEWS.CONTROLLERS_TABLE_ERP.DISPLAY_NAME,
                            CONTROLLER = a.VIEWS.CONTROLLERS_TABLE_ERP.CONTROLLER_NAME,
                            METHOD_NAME = a.VIEWS.CONTROLLERS_TABLE_ERP.METHOD_NAME
                        }).ToList();

                        oo.ID = gg.ID;
                        oo.NAME = gg.NAME;
                        oo.Icon = gg.Icon;
                        oo.listSubGroupController = new List<MenuModel>();
                        oo.listSubGroupController.AddRange(listSubGroupController);
                        menu1.Add(oo);
                        menu2.listSubGroupController = new List<MenuModel>();
                        menu2.listSubGroupController.AddRange(menu1);
                    }
                    menu2.ID = item.ID;
                    menu2.NAME = item.NAME;
                    menu2.Icon = item.Icon;
                    menu2.listSubController = new List<MenuModel>();
                    menu2.listSubController.AddRange(listSubController);
                    //menu2.listSubGroupController = new List<MenuModel>();
                    menu.Add(menu2);
                }
                else
                {
                    menu2.ID = item.ID;

                    menu2.NAME = item.NAME;
                    menu2.Icon = item.Icon;
                    menu2.listSubController = new List<MenuModel>();
                    menu2.listSubController.AddRange(listSubController);
                    menu2.listSubGroupController = new List<MenuModel>();
                    menu.Add(menu2);
                }


            }
            return menu;
        }


    }
}
//