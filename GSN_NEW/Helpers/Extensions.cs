using System;
using System.Linq;
using ErpDal;

//using PcCenterDAL;
//using PcCenterDAL.Proxy;

namespace GSN_NEW.Helpers
{
    public static class Extensions
    {
        //public static bool IsLoginAs(this string value, LoginAs loginAs)
        //{
        //    return User.Parse(value).LoginAs == loginAs.GetStringValue();
        //}

        public static string UserCode(this string value)
        {
            return User.Parse(value).UserCode;
        }
        public static string UserName(this string value)//
        {
            return User.Parse(value).UserName;
        }

        public static bool IsManager(this string value)
        {
            var db = Db.Get();
            var manager = db.FIXED_ERP.Where(c => c.NAME.ToUpper() == "MUNICIPALITY_MANAGER").SingleOrDefault().VALUE;
            var name = User.Parse(value).UserCode;
            bool isManager = manager == name;
            return isManager;
        }

        public static bool IsMayor(this string value)
        {
            var db = Db.Get();
            var manager = db.FIXED_ERP.Where(c => c.NAME.ToUpper() == "MAYOR").SingleOrDefault().VALUE;
            var name = User.Parse(value).UserCode;
            bool isManager = manager == name;
            return isManager;
        }

        public static bool IsOssManager(this string value)
        {
            var db = Db.Get();
            var manager = db.FIXED_ERP.Where(c => c.NAME.ToUpper() == "OSS_MANAGER").SingleOrDefault().VALUE;
            var name = User.Parse(value).UserCode;
            bool isManager = manager == name;
            return isManager;
        }

        //public static UserTypesFormsProxy FormActions(this string value, string formController)
        //{
        //    var da = new DataAccess();

        //    return da.Select.UserTypesForms.ByUserAndForm(value, formController);
        //}

        //public static List<UserTypesProxy> UserTypes(this string value)
        //{
        //    var da = new DataAccess();

        //    return da.Select.UsersUsersTypes.UserTypeByUserCode(User.Parse(value).UserCode);
        //}

        //public static bool Islimited(this string value)
        //{
        //    switch (User.Parse(value).Limited)
        //    {
        //        case "N":
        //            return false;
        //        case "Y":
        //            var now = new DateTime(DateTime.Now.Year, DateTime.Now.Month, DateTime.Now.Day, DateTime.Now.Hour,
        //                                   DateTime.Now.Minute, DateTime.Now.Second);
        //            var time8Am = new DateTime(DateTime.Now.Year, DateTime.Now.Month, DateTime.Now.Day, 8, 0, 0);
        //            var time4Pm = new DateTime(DateTime.Now.Year, DateTime.Now.Month, DateTime.Now.Day, 16, 0, 0);

        //            if (now.DayOfWeek == DayOfWeek.Friday || now.DayOfWeek == DayOfWeek.Sunday) return true;
        //            return now < time8Am || now > time4Pm;

        //        default:
        //            return true;
        //    }
        //}
    }
}