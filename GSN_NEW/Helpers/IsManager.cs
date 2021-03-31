using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using ErpDal;
using GSN_NEW.Models;
using Microsoft.Ajax.Utilities;

namespace GSN_NEW.Helpers
{
    public class IsManager
    {
        public static List<DepSectionUnitModel> GetDepSectionUnitManager(string staffId)
        {
            var db = Db.Get();
            List<DepSectionUnitModel> obj=new List<DepSectionUnitModel>();
            var dep = db.DEPT_ERP.Any(c => c.MANAGER_ID == staffId);
            if (dep)
            {
                var oo = db.DEPT_ERP.Where(c => c.MANAGER_ID == staffId).Select(x => new DepSectionUnitModel()
                {
                    CodeDep = x.ID,
                    NameAr = x.NAME_AR,
                    NameEn = x.NAME_EN,
                    ManagerId = x.MANAGER_ID,
                }).ToList();
                obj.AddRange(oo);
            }

            var section = db.SECTIONS_ERP.Any(c => c.MANAGER_ID == staffId);
            if (section)
            {
                var oo = db.SECTIONS_ERP.Where(c => c.MANAGER_ID == staffId).Select(x => new DepSectionUnitModel()
                {
                    CodeDep = x.DEPT_CODE,
                    CodeSection = x.ID,
                    NameAr = x.NAME_AR,
                    NameEn = x.NAME_EN,
                    ManagerId = x.MANAGER_ID,
                }).ToList();
                obj.AddRange(oo);
            }

            var unit = db.UNITS_ERP.Any(c => c.MANAGER_ID == staffId);
            if (unit)
            {
                var oo = db.UNITS_ERP.Where(c => c.MANAGER_ID == staffId).Select(x => new DepSectionUnitModel()
                {
                    CodeDep = x.SECTIONS_ERP.DEPT_CODE,
                    CodeSection = x.SECTION_CODE,
                    CodeUnit = x.ID,
                    NameAr = x.NAME_AR,
                    NameEn = x.NAME_EN,
                    ManagerId = x.MANAGER_ID,
                }).ToList();
                obj.AddRange(oo);
            }
            return obj;
        }


        public static List<StaffModel> GetAllManager()
        {
            var db = Db.Get();
            List<StaffModel> obj = new List<StaffModel>();
            var managerDep = db.DEPT_ERP.Where(c=>c.MANAGER_ID!=null).Select(x => new StaffModel()
            {
                STAFF_CODE = x.MANAGER_ID,
                STAFF_NAME = x.STAFF_ERP.NAME_AR,
            }).ToList();
            obj.AddRange(managerDep);

            var managerSection = db.SECTIONS_ERP.Where(c => c.MANAGER_ID != null).Select(x => new StaffModel()
            {
                STAFF_CODE = x.MANAGER_ID,
                STAFF_NAME = x.STAFF_ERP.NAME_AR,
            }).ToList();
            obj.AddRange(managerSection);

            var managerUnit = db.UNITS_ERP.Where(c => c.MANAGER_ID != null).Select(x => new StaffModel()
            {
                STAFF_CODE = x.MANAGER_ID,
                STAFF_NAME = x.STAFF_ERP.NAME_AR,
            }).ToList();
            obj.AddRange(managerUnit);
            return obj.DistinctBy(c=>c.STAFF_CODE).ToList();
        }

        public static bool IsDepManager(string staffId)
        {
                        var db = Db.Get();
                        return db.DEPT_ERP.Any(c => c.MANAGER_ID == staffId);
        }
        public static bool IsSectionManager(string staffId)
        {
            var db = Db.Get();
            return db.SECTIONS_ERP.Any(c => c.MANAGER_ID == staffId);
        }

        public static bool IsUnitManager(string staffId)
        {
            var db = Db.Get();
            return db.UNITS_ERP.Any(c => c.MANAGER_ID == staffId);
        }

        public static string GetDepId(string staffId)
        {
            var db = Db.Get();
            return db.DEPT_ERP.FirstOrDefault(c => c.MANAGER_ID == staffId).ID;
        }
    }
}