using System;
using System.Collections.Generic;
using System.Data.Objects;
using System.Linq;
using System.Web;
using ErpDal;
using GSN_ERP.Models;
using Telerik.OpenAccess.Metadata;

namespace GSN_ERP.Helpers
{
    public class SettingForWorkTime
    {
        public static IEnumerable<DateTime> GetAllDates(DateTime startingDate, DateTime endingDate)
        {
            List<DateTime> allDates = new List<DateTime>();


            for (DateTime i = startingDate; i <= endingDate; i = i.AddDays(1))
            {
                allDates.Add(i);
            }
            return allDates.AsReadOnly();
        }

        public static IsExistModel  IsHasVacation(DateTime date, decimal empId)
        {
            var db = Db.Get();
            var objExist = new IsExistModel();
            var vacation= db.TRANS_VACATIONS_HERP.Where(c => c.EMPLOYEE_ID == empId && c.LEAVES_REG_NO==null 
                && c.LEAVE_TRANS_ID==null
                                                    &&
                                                  EntityFunctions.TruncateTime(c.FROM_DATE) <=
                                                    EntityFunctions.TruncateTime(date)
                                                   &&
                                                    EntityFunctions.TruncateTime(c.TO_DATE) >=
                                                    EntityFunctions.TruncateTime(date)).FirstOrDefault();
            if (vacation != null)
            {
                objExist.IsExist = true;
                objExist.Type = vacation.VACATION_TYPES_HERP.NAME_AR;
                return objExist;
            }
            objExist.IsExist = false;
            return objExist;
        }


        public static List<LeaveModel> IsHasLeave(DateTime date, decimal empId)
        {
            var db = Db.Get();
            var objExist = new List<LeaveModel>();
            var leave = db.LEAVE_TRANS_HERP.Where(c => c.EMPLOYEE_ID == empId
                                                    &&
                                                  EntityFunctions.TruncateTime(c.LEAVE_DATE) >=
                                                    EntityFunctions.TruncateTime(date)
                                                   &&
                                                    EntityFunctions.TruncateTime(c.LEAVE_DATE) <=
                                                    EntityFunctions.TruncateTime(date)).ToList();
            if (leave != null)
            {
                foreach (var item in leave)
                {
                    var objExist1 = new LeaveModel();
                    objExist1.TypeLeave = item.LEAVE_TYPES_HERP.NAME_AR;
                    objExist1.StartTimeLeave = item.FROM_HOUR;
                    objExist1.EndTimeLeave = item.TO_HOUR;
                    objExist1.DiffLeave = item.TO_HOUR - item.FROM_HOUR;
                    objExist.Add(objExist1);
                }
           
                return objExist;
            }
            return objExist;
        }

        public static decimal GetEmployeeId(string empCode)
        {
            var db = Db.Get();
            return db.EMPLOYEE_HERP.First(c => c.EMPLOYEE_CODE == empCode).ID;
        }

        public static bool IsHoliday(DateTime date)
        {
            var db = Db.Get();
            return db.HOLIDAYS_HERP.Any(c => EntityFunctions.TruncateTime(c.FROM_DATE)
                                             <= EntityFunctions.TruncateTime(date)
                                             &&
                                             EntityFunctions.TruncateTime(c.TO_DATE) >=
                                             EntityFunctions.TruncateTime(date));
        }
        public static string HolidayName(DateTime date)
        {
            var db = Db.Get();
            return db.HOLIDAYS_HERP.Any(c => EntityFunctions.TruncateTime(c.FROM_DATE)
                                             <= EntityFunctions.TruncateTime(date)
                                             &&
                                             EntityFunctions.TruncateTime(c.TO_DATE) >=
                                             EntityFunctions.TruncateTime(date)) ?
                                             db.HOLIDAYS_HERP.FirstOrDefault(c => EntityFunctions.TruncateTime(c.FROM_DATE)
                                             <= EntityFunctions.TruncateTime(date)
                                             &&
                                             EntityFunctions.TruncateTime(c.TO_DATE) >=
                                             EntityFunctions.TruncateTime(date)).NAME_OF_HOLIDAYS_HERP.AR_NAME :
                                             "_"
                                             ;
        }

        
        public static bool IsHolidayShift(decimal dayNum , string empCode)
        {
            var db = Db.Get();
            return db.EMPLOYEE_SHIFTS_ERP.Any(c => c.DAY == dayNum && c.IS_HOLIDAY == "Y" && c.EMP_CODE == empCode);
        }

        public static string DayWeekArabic(string name)
        {
            var nameD = "";
            switch (name)
            {
                case "Sunday":
                    nameD= "الأحد";
                    break;
                case "Monday":
                     nameD= "الاثنين";
                    break;
                case "Tuesday":
                     nameD= "الثلاثاء";
                    break;
                case "Wednesday":
                     nameD= "الاربعاء";
                    break;
                case "Thursday":
                     nameD= "الخميس";
                    break;
                case "Friday":
                     nameD= "الجمعة";
                    break;
                case "Saturday":
                     nameD= "السبت";
                    break;

            }
            return nameD;
        }

        public static void SendNotiEmployeeAgeAbove60(string staffId)
        {
            var db = Db.Get();
            var sql =
                "SELECT E.Name_Ar FROM Employee_Herp E WHERE Extract(YEAR FROM SYSDATE)- Extract(YEAR FROM E.Birth_Date) >=60 and (Extract(month FROM SYSDATE)  - extract(month from E.Birth_Date))<=2";
            var resultSql = db.Database.SqlQuery<string>(sql).ToList();
            if (resultSql.Count() > 0)
            {
                var stringList = string.Join(",", resultSql);
                var noti = new NOTIFICATION_ERP
                {

                    NAME_AR = "الموظفون الذين يستكملون 60 عاما في شهر" + DateTime.Now.AddMonths(2) + ":" + "\t" + stringList,
                    DATE_CREATED = System.DateTime.Now,
                    FROM_STAFF = staffId,
                    TO_STAFF = staffId

                };

                db.NOTIFICATION_ERP.Add(noti);
                db.SaveChanges();
                var text1 = noti.NAME_AR;

                var msg = new Message();
                msg.SendNotification(noti.TO_STAFF, noti.ID, text1);
            }
        }
        public static void SendNotiEmployeeContractEndThroughWeek(string staffId)
        {
            var db = Db.Get();
            var sql =
                "SELECT E.Name_Ar FROM Employee_Herp E WHERE E.Employment_Id=3 AND (TRUNC(SYSDATE+7)- TRUNC(E.CONTRACT_END_DATE))<=7";
            var resultSql = db.Database.SqlQuery<string>(sql).ToList();
            if (resultSql.Count() > 0)
            {
                var stringList = string.Join(",", resultSql);
                var noti = new NOTIFICATION_ERP
                {

                    NAME_AR = "موظفي العقود الذين تنتهي عقودهم خلال اسبوع " + "\t" + stringList,
                    DATE_CREATED = System.DateTime.Now,
                    FROM_STAFF = staffId,
                    TO_STAFF = staffId

                };

                db.NOTIFICATION_ERP.Add(noti);
                db.SaveChanges();
                var text1 = noti.NAME_AR;

                var msg = new Message();
                msg.SendNotification(noti.TO_STAFF, noti.ID, text1);
            }
        }

        public static int GetDayNumber(string day)
        {
            if (day == "Saturday")  //1    get employee start and end for this day 
            {
                return 1;

            }
            if (day == "Sunday")   //2
            {
                return 2;

            }
            if (day == "Monday")  //3 
            {
                return 3;

            }
            if (day == "Tuesday") //4
            {
                return 4;

            }
            if (day == "Wednesday") //5
            {
                return 5;

            }
            if (day == "Thursday") //6
            {
                return 6;

            }
            if (day == "Friday") //7
            {
                return 7;
            }
            else
            {
                return 0;
            }
        }
    }
}