using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using ErpDal;
using OpenAccessRuntime;
//using HRMIS_DAL;

namespace GSN_ERP.Helpers
{
    public static class StaffInfo
    {
        public static string NameSection(string staffId)
        {
            var db = Db.Get();
            var obj = db.STAFF_ERP.Where(c => c.ID == staffId).SingleOrDefault();
            decimal empCode = (decimal) (obj!= null?obj.EMPLOYEE_CODE:null);
            var obj2 = db.EMPLOYEE_HERP.Where(c => c.ID == empCode).Select(x => new
            {
                section = x.SECTIONS_ERP.NAME_AR,
            }).SingleOrDefault();
            return obj2!=null?obj2.section:null;
        }

        public static string NameDept(string staffId)
        {
            var db = Db.Get();
            var obj = db.STAFF_ERP.Where(c => c.ID == staffId).SingleOrDefault();
            decimal empCode = (decimal)(obj != null ? obj.EMPLOYEE_CODE : null);
            var obj2 = db.EMPLOYEE_HERP.Where(c => c.ID == empCode).Select(x => new
            {
                dep = x.DEPT_ERP.NAME_AR,
            }).SingleOrDefault();
            return obj2 != null ? obj2.dep : null;
        }


        public static string NameStaff(string staffId)
        {
            var db = Db.Get();
            var obj = db.STAFF_ERP.Where(c => c.ID == staffId).SingleOrDefault();
           
            return obj.NAME_AR;
        }

        //public static string NameSectionHrmis(string staffId)
        //{
        //    var db = new HrmisEntities();
        //    var db1 = Db.Get();
        //    var obj = db1.STAFF_ERP.Where(c => c.ID == staffId).SingleOrDefault();
        //    if (string.IsNullOrEmpty(obj.STAFF_CODE_HRMIS)) return null;
        //    var obj2 = db.EMPLOYEE.Where(c => c.EMPLOYEE_CODE == obj.STAFF_CODE_HRMIS).Select(x => new
        //    {
        //        section = x.SECTION.SECTION_ANAME,
        //    }).SingleOrDefault();
        //    return obj2 != null ? obj2.section : null;
        //}

        public static bool IsLastStationOfWard(string staffID)
        {
            var db = Db.Get();
         var finalStaton = db.FIXED_ERP.Where(c => c.NAME == "last_Station_group").SingleOrDefault();
            decimal finalStatonId = Convert.ToDecimal(finalStaton.VALUE);
            var staffFinal = db.GROUPS_STAFF_ERP.Where(c => c.GROUP_ID == finalStatonId).ToList();
            var isStaffInclude = staffFinal.Any(c => c.STAFF_ID == staffID);
            return isStaffInclude;
        }
    }
}