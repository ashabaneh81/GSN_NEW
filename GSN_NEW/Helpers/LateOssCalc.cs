using System;
using System.Collections.Generic;
using System.Data.Entity.Core.Objects;
using System.Linq;
using System.Web;
using ErpDal;

namespace GSN_NEW.Helpers
{
    public class LateOssCalc
    {
        //public static string LateOssDays(double daysDiff,decimal day,decimal hour,decimal minute,DateTime recivedDate,string staffId)
        //{
        //    try
        //    {
        //        var totalReqMin = (day*5*24*60) + (hour*60) + minute;
        //        var daysDiffWithoutWeekend = 0;
        //        int offDay = (int) TotalOffDays(staffId, recivedDate);
        //        double daysDiffWithoutHoliday = daysDiff - offDay;
        //        int dayT = (int) daysDiffWithoutHoliday;
        //        double hourPartialOfDay = Math.Abs(daysDiffWithoutHoliday - dayT) * 24;
        //        int hourT = (int)hourPartialOfDay;
        //        double minPartialOfHour = Math.Round(Math.Abs((hourPartialOfDay - hourT)) * 60, 0);
        //        var totalLate = dayT + ":" + hourT + ":" + minPartialOfHour;
        //        return totalLate;
        //        #region old
        //        //var daysInt = Convert.ToInt32(daysDiff.ToString().Split('.')[0]);
        //        //if (daysInt != 0)
        //        //{
        //        //    int numberWeekend = daysInt%5;
        //        //    daysDiffWithoutWeekend = daysInt - numberWeekend;
        //        //}

        //        //decimal partionOfDays =(decimal) (daysDiff-daysInt)*24;
        //        //var tHour = partionOfDays.ToString().Split('.')[0];
        //        //decimal totalLateMin = (daysDiffWithoutWeekend +partionOfDays) *5*24*60;
        //        //decimal totalDifMin =  (totalLateMin -  totalReqMin);
        //        //decimal daysLate = totalDifMin*(decimal) 0.0006944;
        //        //int dLate = (int)Math.Round(daysLate, 0);
        //        //decimal partionOfhours = daysLate - dLate;
        //        //    //(float)Convert.ToDouble(daysLate.ToString().Split('.')[1]);
        //        //decimal hoursLate = partionOfhours / 60;
        //        //int hLate = (int)Math.Round(hoursLate, 0);
        //        //decimal partionOfMin = hoursLate - hLate;
        //        //    //(float)Convert.ToDouble(hoursLate.ToString().Split('.')[1]);
        //        //decimal mintLate = partionOfMin * 60;
        //        //int mLate = (int)Math.Round(mintLate, 0);
        //        //var totalLate = dLate + ":" + hLate + ":" + mLate;
        //        return totalLate;
        //        #endregion
        //    }
        //    catch (Exception)
        //    {
                
        //        throw;
        //    }
        //}

        //public static decimal TotalOffDays(string staffId, DateTime reciveDate)
        //{
        //    try
        //    {
        //        var db = Db.Get();
        //        var empId = db.STAFF_ERP.FirstOrDefault(c => c.ID == staffId).EMPLOYEE_CODE;
        //        var objEmp = db.EMPLOYEE_HERP.FirstOrDefault(c => c.ID == empId);
        //        int friCount = 0;
        //        int sunCount = 0;
        //        int holidayCount = 0;
        //        int total = 0;
        //        for (DateTime i = reciveDate; i <= DateTime.Today; i = i.AddDays(1))
        //        {
        //            if (objEmp.IS_SUNDAY == "Y" && objEmp.IS_FRIDAY == "Y")
        //            {
        //                if (i.DayOfWeek == DayOfWeek.Friday)
        //                    friCount++;
        //                if (i.DayOfWeek == DayOfWeek.Sunday)
        //                    sunCount++;
        //            }
        //            else if (objEmp.IS_SUNDAY == "Y")
        //            {
        //                if (i.DayOfWeek == DayOfWeek.Sunday)
        //                    sunCount++;
        //            }
        //            else if (objEmp.IS_FRIDAY == "Y")
        //            {
        //                if (i.DayOfWeek == DayOfWeek.Friday)
        //                    friCount++;
        //            }
                  
        //        }
        //        var holidayNumber = db.HOLIDAYS_HERP.Any(c =>
        //              EntityFunctions.TruncateTime(c.FROM_DATE) >= EntityFunctions.TruncateTime(reciveDate)
        //              && EntityFunctions.TruncateTime(c.TO_DATE) >= EntityFunctions.TruncateTime(DateTime.Today))?
        //        db.HOLIDAYS_HERP.Where(c =>
        //              EntityFunctions.TruncateTime(c.FROM_DATE) >= EntityFunctions.TruncateTime(reciveDate)
        //              && EntityFunctions.TruncateTime(c.TO_DATE) >= EntityFunctions.TruncateTime(DateTime.Today)).FirstOrDefault().HOLIDAY_NAME_ID
        //              :0;
        //        holidayCount = (int) holidayNumber;
        //        total = sunCount + friCount + holidayCount;
        //        return total;

        //    }
        //    catch (Exception)
        //    {
                
        //        throw;
        //    }
        //}

    }
}