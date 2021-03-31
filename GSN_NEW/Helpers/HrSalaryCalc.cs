using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using ErpDal;
using System.Data.Objects;
using System.Web.Helpers;
using System.Web.Mvc;
using GSN_NEW.Models;

namespace GSN_NEW.Helpers
{


    public class HrSalaryCalc
    {
        public static decimal GetFinalGross(decimal empId, int grossType, int?month, int?year)
        {
            var db = Db.Get();
            var forRamallah = FixedERPValues.GetValueAccount("IS_RAMALLAH");
            var emp = db.EMPLOYEE_HERP.Include("EMPLOYEE_ALLOWANCES_HERP").SingleOrDefault(a => a.ID == empId);
            var basicSal =forRamallah=="Y"? GetBasicSalary(empId):GetBasicSalaryIfmis(empId,month,year);
            //var basicSal =  GetBasicSalary(empId) ;
            int m = DateTime.Now.Month;
            int y = DateTime.Now.Year;
            if (month.HasValue && year.HasValue)
            {
                m = (int)month;
                y = (int)year;
            }
            ObjectParameter allws1 = new ObjectParameter("P_ALLWS1", typeof(decimal));
            ObjectParameter allws2 = new ObjectParameter("P_ALLWS2", typeof(decimal));
            ObjectParameter allws3 = new ObjectParameter("P_ALLWS3", typeof(decimal));
            ObjectParameter allws4 = new ObjectParameter("P_ALLWS4", typeof(decimal));
            ObjectParameter allws5 = new ObjectParameter("P_ALLWS5", typeof(decimal));
            ObjectParameter g1 = new ObjectParameter("P_G1", typeof(decimal));
            ObjectParameter g2 = new ObjectParameter("P_G2", typeof(decimal));
            ObjectParameter g3 = new ObjectParameter("P_G3", typeof(decimal));
            db.GETTOTALALLWS(empId, basicSal, (emp.DIFF_AMT ?? 0), m, y, allws1, allws2, allws3, allws4, allws5, g1, g2, g3);
            if (grossType == 1) return g1 != null ? (decimal)g1.Value : 0;
            else if(grossType == 2) return g2 != null ? (decimal)g2.Value : 0;
            else if (grossType == 3) return g3 != null ? (decimal)g3.Value : 0;
            else return g2 != null ? (decimal)g2.Value : 0;
        }

        public static decimal GetOvertimeAmount(decimal empId, decimal hours, int month,int year,string excption = "N")
        {
            ObjectParameter amt = new ObjectParameter("P_AMT", typeof(decimal));
            var db = Db.Get();
            db.CALCULATE_OVERTIME_AMOUNT(empId, hours, month, year,excption, amt);
            return amt != null ? amt.Value != null ? (decimal)amt.Value : 0 : 0;
        }

        public static decimal GetHourSalary(decimal empId, int grossType, int? month, int? year)
        {
            var db = Db.Get();
            var isDiffAmt = FixedERPValues.GetVal("INCLUDE_DIFFAMT_OVERTIME");
            var gross = GetFinalGross(empId, grossType, month, year);
            var emp = db.EMPLOYEE_HERP.Where(e => e.ID == empId)
                            .Select(s => new EmployeeModel
                            {
                                ID = s.ID,
                                DIFF_AMT = s.DIFF_AMT,
                                EMPLOYMENT_ID = s.EMPLOYMENT_ID,
                                STEP_ID = s.STEP_ID
                            }).FirstOrDefault();
            gross = isDiffAmt == "N" ? gross - (emp.DIFF_AMT??0) : gross;
            var hours = db.EMPLOYMENT_TYPE_HERP.SingleOrDefault(f => f.ID == emp.EMPLOYMENT_ID).NO_OF_HOURS;
            return hours != null ? Math.Round((gross / (decimal)hours), 6) : 0;
        }


        public static decimal GetTotalAllws(IList<EMPLOYEE_ALLOWANCES_HERP> allws, EMP_MONTHLY_CALC_DTL_HERP emp, int grossType, out decimal gross1, out decimal gross2, out decimal gross3)
        {
            decimal sum = 0;
            gross3 = 0;
            decimal tempAmt = 0;
            foreach (var a1 in allws.Where(x => x.ALLW_HERP.ON_WHAT != "G1"))
            {              
                if (a1.ALLW_HERP.METHOD == "A")
                {
                    var amt = a1.ALLW_HERP.AMOUNT_PRCNT;
                    if (a1.ALLW_HERP.IS_ALLW_CHILD == "Y")
                    {
                        //var dt = DateTime.Now.Date.AddYears(-18);
                        int noOfChildren = (int)(emp.NO_OF_CHILDREN ?? 0);//db.DEPENDENTS_CHILDREN_HERP.Where(x => x.EMP_ID == empId && x.LINK_ID == 3 || x.LINK_ID == 4 && x.BIRTHDATE >= dt).Count();
                        amt = amt * noOfChildren;                     
                    }
                    tempAmt = amt;
                    sum += amt;
                    if (a1.ALLW_HERP.IS_TRANSPORT == "Y")//rimah
                    {
                        decimal amtTransport = emp.REGIONS_ERP != null
                            ? emp.REGIONS_ERP.TRANS_AMOUNT != null
                                ? (decimal)emp.REGIONS_ERP.TRANS_AMOUNT
                                : 0
                            : 0;
                        sum += amtTransport;
                    }
                }
                else if (a1.ALLW_HERP.METHOD == "M")
                {
                    tempAmt = (decimal)(a1.AMT.HasValue ? a1.AMT : 0);
                    sum += tempAmt;
                    
                }
                else if (a1.ALLW_HERP.METHOD == "P")
                {
                    if (a1.ALLW_HERP.ON_WHAT == "B")
                    {
                        var amt = (emp.BASIC_SALARY??0) * (decimal)(a1.ALLW_HERP.AMOUNT_PRCNT / (decimal)100);                       
                        sum += amt;
                        tempAmt = amt;
                    }                
                }
                if (a1.ALLW_HERP.IS_RETIREMENT_ALLW == "Y") gross3 += tempAmt;
            }
            gross1 = sum;
            if (grossType == 2)
            {
                foreach (var a2 in allws.Where(x => x.ALLW_HERP.ON_WHAT == "G1"))
                {
                    if (a2.ALLW_HERP.METHOD == "P")
                    {
                        if (a2.ALLW_HERP.ON_WHAT == "G1")
                        {
                            var orgGross = (emp.BASIC_SALARY ?? 0) + (emp.DIFF_AMT??0) + sum;
                            tempAmt = orgGross * (decimal)(a2.ALLW_HERP.AMOUNT_PRCNT / (decimal)100);
                            sum += tempAmt;
                        }
                    }
                    if (a2.ALLW_HERP.IS_RETIREMENT_ALLW == "Y") gross3 += tempAmt;
                }
            }
            gross2 = sum;
            return sum;
        }

        public static decimal GetTotalDiscounts(IList<EMPLOYEE_DISCOUNTS_HERP> discounts, EMP_MONTHLY_CALC_DTL_HERP emp, out decimal taxDiscounts)
        {
            taxDiscounts = 0;
            decimal totalDiscounts = 0; 
            foreach (var d in discounts)
            {
                decimal tempDisc = 0;
                if (d.DISCOUNTS_HERP.METHOD == "P")
                {
                    if (d.DISCOUNTS_HERP.ON_WHAT == "B")
                    {
                        tempDisc = (decimal)(d.DISCOUNTS_HERP.AMOUNT_PRCNT / 100) * (decimal)emp.BASIC_SALARY;
                    }
                    else if (d.DISCOUNTS_HERP.ON_WHAT == "G1")
                    {
                        tempDisc = (decimal)(d.DISCOUNTS_HERP.AMOUNT_PRCNT / 100) * (decimal)emp.ORIGNAL_GROSS;
                    }
                    else if (d.DISCOUNTS_HERP.ON_WHAT == "G2")
                    {
                        tempDisc = (decimal)(d.DISCOUNTS_HERP.AMOUNT_PRCNT / 100) * (decimal)emp.SALARYTOTTAX;
                    }
                    else if (d.DISCOUNTS_HERP.ON_WHAT == "R")
                    {
                        tempDisc = (decimal)(d.DISCOUNTS_HERP.AMOUNT_PRCNT / 100) * (decimal)emp.RETIREMENT_SALARY;
                    }
                }
                else if (d.DISCOUNTS_HERP.METHOD == "A")
                {
                    if (d.DISCOUNTS_HERP.IS_DEPENDENT == "Y")
                    {
                        var db = Db.Get();
                        var cnt = db.DEPENDENTS_CHILDREN_HERP.Where(a => a.EMP_ID == emp.EMP_ID && a.INSURANCE == "Y" && a.CONFIRMED == "Y").Count() + 1;
                        tempDisc = d.DISCOUNTS_HERP.AMOUNT_PRCNT * cnt;
                    }
                    else
                    {
                        tempDisc = d.DISCOUNTS_HERP.AMOUNT_PRCNT;
                    }
                }
                else if (d.DISCOUNTS_HERP.METHOD == "M")
                {
                    tempDisc = d.AMT != null ? (decimal)d.AMT : 0;
                }

                if (d.DISCOUNTS_HERP.MIN_VALUE != null)
                {
                    if (tempDisc < d.DISCOUNTS_HERP.MIN_VALUE)
                        tempDisc = (decimal)d.DISCOUNTS_HERP.MIN_VALUE;
                }
                if (d.DISCOUNTS_HERP.MAX_VALUE != null)
                {
                    if (tempDisc > d.DISCOUNTS_HERP.MAX_VALUE)
                        tempDisc = (decimal)d.DISCOUNTS_HERP.MAX_VALUE;
                }
                if (d.DISCOUNTS_HERP.INCOME_TAX == "Y") { taxDiscounts += tempDisc; }
                totalDiscounts += tempDisc;
            }
            return totalDiscounts;
        }

        public static decimal GetMonthlyDisconts(EMP_MONTHLY_CALC_DTL_HERP emp, int month, int year, out decimal taxmDiscounts, DbModel db)
        {
            taxmDiscounts = 0;
            decimal totalDiscounts = 0;
            var monDiscs = db.EMPLOYEE_MONTHLY_TRANS_HERP
                     .Where(x => x.EMP_ID == emp.EMP_ID
                                 && x.MONTHLY_ALLW_DIS_HERP.TYPE == "-"
                                 && x.MON_YEAR.Month == month
                                 && x.MON_YEAR.Year == year && (x.MONTH13 == "N" || x.MONTH13 == null)).ToList();
            foreach (var da in monDiscs)
            {
                decimal tempDisc = 0;

                if (da.MONTHLY_ALLW_DIS_HERP.PAYMENT_METHOD == "P")
                {
                    if (da.MONTHLY_ALLW_DIS_HERP.ON_WHAT == "B")
                    {
                        tempDisc = (decimal)(da.AMT / 100) * (decimal)emp.BASIC_SALARY;
                    }
                    else if (da.MONTHLY_ALLW_DIS_HERP.ON_WHAT == "G1")
                    {
                        tempDisc = (decimal)(da.AMT / 100) * (decimal)emp.ORIGNAL_GROSS;
                    }
                    else if (da.MONTHLY_ALLW_DIS_HERP.ON_WHAT == "G2")
                    {
                        tempDisc = (decimal)(da.AMT / 100) * (decimal)emp.SALARYTOTTAX;
                    }
                }
                else if (da.MONTHLY_ALLW_DIS_HERP.PAYMENT_METHOD == "A")
                {
                    tempDisc = da.AMT;
                }
                else if (da.MONTHLY_ALLW_DIS_HERP.PAYMENT_METHOD == "D")
                {
                    int days = DateTime.DaysInMonth(year, month);
                    tempDisc = da.AMT * ((decimal)(emp.SALARYTOTTAX ?? 0) / (decimal)days);
                }

                if (da.MONTHLY_ALLW_DIS_HERP.INCOME_TAX == "Y") { taxmDiscounts += tempDisc; }
                totalDiscounts += tempDisc;
            }
            return totalDiscounts;
        }

        public static decimal GetMonthlyAllws(EMP_MONTHLY_CALC_DTL_HERP emp,int month, int year, out decimal taxAllws, DbModel db)
        {
            decimal mAllws = 0;
            taxAllws = 0;
            var monAllws = db.EMPLOYEE_MONTHLY_TRANS_HERP
                     .Where(x => x.EMP_ID == emp.EMP_ID
                                 && x.MONTHLY_ALLW_DIS_HERP.TYPE == "+"
                                 && x.MON_YEAR.Month == month
                                 && x.MON_YEAR.Year == year && (x.MONTH13 == "N" || x.MONTH13 == null)).ToList();
            foreach (var ma in monAllws)
            {
                decimal tempAllw = 0;
                if (ma.MONTHLY_ALLW_DIS_HERP.PAYMENT_METHOD == "P")
                {
                    if (ma.MONTHLY_ALLW_DIS_HERP.ON_WHAT == "B")
                    {
                        tempAllw = (decimal)(ma.AMT / 100) * (decimal)emp.BASIC_SALARY;
                    }
                    else if (ma.MONTHLY_ALLW_DIS_HERP.ON_WHAT == "G1")
                    {
                        tempAllw = (decimal)(ma.AMT / 100) * (decimal)emp.ORIGNAL_GROSS;
                    }
                    else if (ma.MONTHLY_ALLW_DIS_HERP.ON_WHAT == "G2")
                    {
                        tempAllw = (decimal)(ma.AMT / 100) * (decimal)emp.SALARYTOTTAX;
                    }
                }
                else if (ma.MONTHLY_ALLW_DIS_HERP.PAYMENT_METHOD == "A")
                {
                    tempAllw = ma.AMT;
                }

                if (ma.MONTHLY_ALLW_DIS_HERP.INCOME_TAX == "Y") taxAllws += tempAllw;
                mAllws += tempAllw;
            }
            return mAllws;
        }

        public static decimal GetTotalAllws(IList<EMPLOYEE_ALLOWANCES_HERP> allws,decimal empId, decimal basicSal, decimal diffAmt, out decimal rallw, int grossType, DbModel db)
        {
            rallw = 0;
            decimal sum = 0;
            foreach (var a1 in allws.Where(x => x.ALLW_HERP.ON_WHAT != "G1"))
            {
                decimal amt = 0;
                int noOfChildren = 0;
                var NoChildren = Helpers.FixedERPValues.GetValueAccount("NUMBER_OF_CHILDREN");//get No_children from employee_TBL
                if (a1.ALLW_HERP.METHOD == "A")
                {
                    amt = a1.ALLW_HERP.AMOUNT_PRCNT;
                    if (a1.ALLW_HERP.IS_ALLW_CHILD == "Y")
                    {
                        var dt = DateTime.Now.Date.AddYears(-18);
                        if (NoChildren == "Y")
                        {
                            var obj = db.EMPLOYEE_HERP.Where(c => c.ID == empId).SingleOrDefault();
                            noOfChildren = (int) (obj != null ? obj.NO_OF_CHILDREN != null ? obj.NO_OF_CHILDREN : 0 : 0);
                        }
                        else
                        {
                         noOfChildren = db.DEPENDENTS_CHILDREN_HERP.Where(x => x.EMP_ID == empId && (x.LINK_ID == 3 || x.LINK_ID == 4) && x.BIRTHDATE >= dt && x.CONFIRMED=="Y").Count();
                        }
                        amt = amt * noOfChildren;
                        
                    }
                    if (a1.ALLW_HERP.IS_TRANSPORT == "Y")//rimah
                    {
                        var emp = db.EMPLOYEE_HERP.Where(c => c.ID == empId).SingleOrDefault();

                        decimal amtTransport = emp.REGIONS_ERP != null
                            ? emp.REGIONS_ERP.TRANS_AMOUNT != null
                                ?(decimal) emp.REGIONS_ERP.TRANS_AMOUNT
                                : 0
                            : 0;
                        sum += amtTransport;
                    }

                    sum += amt;
                }
                else if (a1.ALLW_HERP.METHOD == "M")
                {
                    amt = (decimal)(a1.AMT.HasValue ? a1.AMT : 0);
                    sum += amt;
                }
                else if (a1.ALLW_HERP.METHOD == "P")
                {
                    if (a1.ALLW_HERP.ON_WHAT == "B")
                    {
                        amt = basicSal * (decimal)(a1.ALLW_HERP.AMOUNT_PRCNT / (decimal)100);
                        sum += amt;
                    }
                }
                if (a1.ALLW_HERP.IS_RETIREMENT_ALLW == "Y") rallw += amt;
            }
            if (grossType == 2)
            {
                foreach (var a2 in allws.Where(x => x.ALLW_HERP.ON_WHAT == "G1"))
                {
                    decimal amt = 0;
                    if (a2.ALLW_HERP.METHOD == "P")
                    {
                        if (a2.ALLW_HERP.ON_WHAT == "G1")
                        {
                            var orgGross = basicSal + diffAmt + sum;
                            amt = orgGross * (decimal)(a2.ALLW_HERP.AMOUNT_PRCNT / (decimal)100);
                            sum += amt;
                        }
                    }
                    if (a2.ALLW_HERP.IS_RETIREMENT_ALLW == "Y") rallw += amt;
                }
            }
            return sum;
        }

        public static decimal GetTotalDiscounts(IList<EMPLOYEE_DISCOUNTS_HERP> Discounts, decimal empId, decimal basicSal, decimal gross2, decimal diffAmt, decimal rallw, DbModel db)
        {
            decimal damount = 0;
            foreach (var Discount in Discounts)
            {
                decimal dAmount = 0;
                if (Discount.DISCOUNTS_HERP.METHOD == "P")
                {
                    if (Discount.DISCOUNTS_HERP.ON_WHAT == "B")
                    {
                        dAmount = basicSal * (decimal)(Discount.DISCOUNTS_HERP.AMOUNT_PRCNT / 100);
                    }
                    else if (Discount.DISCOUNTS_HERP.ON_WHAT == "G2")
                    {
                        dAmount = gross2 * (decimal)(Discount.DISCOUNTS_HERP.AMOUNT_PRCNT / 100);
                    }
                    else if (Discount.DISCOUNTS_HERP.ON_WHAT == "R")
                    {
                        dAmount = (basicSal + diffAmt + rallw) * (Discount.DISCOUNTS_HERP.AMOUNT_PRCNT / (decimal)100);//m.Total_Salary * (decimal)(Discount.DISCOUNTS_HERP.AMOUNT_PRCNT / 100);
                    }
                }
                else if (Discount.DISCOUNTS_HERP.METHOD == "A")
                {
                    dAmount = Discount.DISCOUNTS_HERP.AMOUNT_PRCNT;
                }
                else if (Discount.DISCOUNTS_HERP.METHOD == "M")
                {
                    dAmount = Discount.AMT != null ? (decimal)Discount.AMT : 0;
                }
                if (Discount.DISCOUNTS_HERP.IS_DEPENDENT == "Y")
                {
                    var dependents = db.DEPENDENTS_CHILDREN_HERP.Where(x => x.EMP_ID == empId && x.INSURANCE == "Y" && x.CONFIRMED == "Y").Count() + 1;
                    dAmount = dAmount * dependents;
                }
                damount = damount + dAmount;
            }
            return damount;
        }

        public static decimal GetBasicSalary(decimal empId)
        {
            var db = Db.Get();
            var forRamallah = FixedERPValues.GetValueAccount("IS_RAMALLAH");

            var emp = db.EMPLOYEE_HERP.SingleOrDefault(e => e.ID == empId);
            ObjectParameter basic = new ObjectParameter("P_BASIC_SALARY", typeof(decimal));
            ObjectParameter basicIfmis = new ObjectParameter("P_BASIC_SALARY_IFMIS", typeof(decimal));
            db.GET_BASIC_SALARY(empId, emp.EMPLOYMENT_ID, emp.STEP_ID, basic);
            return ((basic.GetType() != typeof(DBNull)) ? (decimal)basic.Value : 0);

        }

        public static decimal GetBasicSalaryIfmis(decimal empId, int? month, int? year)
        {
            var db = Db.Get();
            var forRamallah = FixedERPValues.GetValueAccount("IS_RAMALLAH");

            var emp = db.EMPLOYEE_HERP.SingleOrDefault(e => e.ID == empId);
            ObjectParameter basic = new ObjectParameter("P_BASIC_SALARY", typeof(decimal));
            ObjectParameter basicIfmis = new ObjectParameter("P_BASIC_SALARY_IFMIS", typeof(decimal));
            db.GET_BASIC_SALARY(empId, emp.EMPLOYMENT_ID, emp.STEP_ID, basic);
            int m = month.HasValue ? (int)month : DateTime.Now.Month;
            int y = year.HasValue ? (int)year : DateTime.Now.Year;

            decimal basicSalary = 0;
            if (forRamallah == "Y")
            {
                if (basic.Value.GetType() != typeof(DBNull))
                {
                    basicSalary = ((basic.GetType() != typeof(DBNull)) ? (decimal)basic.Value : 0);
                }
            }
            else
            {
                int days = DateTime.DaysInMonth(y, m);

                db.GET_BASIC_SALARY_IFMIS(empId, emp.EMPLOYMENT_ID, emp.STEP_ID, days, null, null, basicIfmis);

                if (basicIfmis.Value.GetType() != typeof(DBNull))
                {
                    basicSalary = ((basicIfmis.GetType() != typeof(DBNull)) ? (decimal)basicIfmis.Value : 0);
                }
            }
            return basicSalary;
        }

        private static Boolean IsOnLawEmpType(decimal empTypeId)
        {
            var db = Db.Get();
            var empType = db.EMPLOYMENT_TYPE_HERP.SingleOrDefault(a => a.ID == empTypeId);
            if (empType.ON_LAW == "Y")
            {
                return true;
            }
            return false;
        }

        public static decimal GetChildNo(decimal empId, int month, int year)
        {
            var db = Db.Get();
            var NoChildren = Helpers.FixedERPValues.GetValueAccount("NUMBER_OF_CHILDREN");//get No_children from employee_TBL
            if (NoChildren == "Y")
            {
                var obj = db.EMPLOYEE_HERP.Where(c => c.ID == empId).SingleOrDefault();
                int noOfChildren = (int)(obj != null ? obj.NO_OF_CHILDREN != null ? obj.NO_OF_CHILDREN : 0 : 0);
                return noOfChildren;
            }
            else
            {
           var lastDay = new DateTime(year, month, DateTime.DaysInMonth(year, month));
            var q = db.DEPENDENTS_CHILDREN_HERP.Where(x => x.EMP_ID == empId && x.FAMILIES_LINK_HERP.IS_SON == "Y" && x.CONFIRMED == "Y"
                                                       && ((x.BIRTHDATE.Value.Year > year-18) ||
                                                           (x.BIRTHDATE.Value.Month >= month && x.BIRTHDATE.Value.Year==year-18) ||
                                                           (x.GENDER == "F" && x.MARRIAGE_DATE == null) ||
                                                           (x.IS_STUDENT == "Y")));
            return q.Any() ? q.Count(): 0;
            }
     
        }

        public static decimal GetCalculatedAlw(decimal alwId)
        {
            var db = Db.Get();
            var empAlw = db.EMPLOYEE_ALLOWANCES_HERP.SingleOrDefault(a => a.ID == alwId);
            var allw = empAlw.ALLW_HERP;
            var method = allw.METHOD;
            var onWhat = allw.ON_WHAT;
            decimal amt = 0;
            if (method == "A")
                amt =  allw.AMOUNT_PRCNT;
            if (allw.IS_ALLW_CHILD == "Y")
            {
                var cnt = GetChildNo(empAlw.EMP_ID, DateTime.Now.Month, DateTime.Now.Year);
                amt = amt * cnt;
            }
            if (allw.IS_TRANSPORT == "Y")//rimah
            {
                var empObj = db.EMPLOYEE_HERP.Where(c => c.ID == empAlw.EMP_ID).SingleOrDefault();
                decimal amtTransport = empObj.REGIONS_ERP != null
                    ? empObj.REGIONS_ERP.TRANS_AMOUNT != null ?(decimal) empObj.REGIONS_ERP.TRANS_AMOUNT : 0
                    : 0;
                amt = amtTransport;
            }
            else if (method == "M")
                amt = empAlw.AMT ?? 0;
            else if (method == "P")
            {
                if (onWhat == "B")
                {
                    var basicSal = HrSalaryCalc.GetBasicSalary(empAlw.EMP_ID);
                    amt = Math.Round(basicSal*(decimal) allw.AMOUNT_PRCNT/(decimal) 100, 2);
                }
                else if (onWhat == "G1")
                {
                    var gross1 = HrSalaryCalc.GetFinalGross(empAlw.EMP_ID, 1, DateTime.Now.Month, DateTime.Now.Year);
                    amt = Math.Round(gross1*(decimal) allw.AMOUNT_PRCNT/(decimal) 100, 2);
                }
                else if (onWhat == "G2")
                {
                    var gross2 = HrSalaryCalc.GetFinalGross(empAlw.EMP_ID, 2, DateTime.Now.Month, DateTime.Now.Year);
                    amt = Math.Round(gross2*(decimal) allw.AMOUNT_PRCNT/(decimal) 100, 2);
                }
            }
            return Math.Round(amt,2);
        }

        public static decimal GetCalculatedAmt(decimal transId, decimal empId, decimal amt, DateTime dt)
        {
            var db = Db.Get();
            var mtrans = db.MONTHLY_ALLW_DIS_HERP.SingleOrDefault(a => a.ID == transId);
            var method = mtrans.PAYMENT_METHOD;
            var month = dt.Month;
            var year = dt.Year;
            var forRamallah = FixedERPValues.GetValueAccount("IS_RAMALLAH");

            if (method == "P")
            {
                var onWhat = mtrans.ON_WHAT;
                if (onWhat == "B")
                {
                    var basicSal = forRamallah == "Y" ? HrSalaryCalc.GetBasicSalary(empId) : HrSalaryCalc.GetBasicSalaryIfmis(empId,month,year);
                    return Math.Round(basicSal * (decimal)amt / (decimal)100, 2);
                }
                else if (onWhat == "G1")
                {
                    var gross1 =  HrSalaryCalc.GetFinalGross(empId, 1, month, year) ;
                    return Math.Round(gross1 * (decimal)amt / (decimal)100, 2);
                }
                else if (onWhat == "G2")
                {
                    var gross2 = HrSalaryCalc.GetFinalGross(empId, 2, month, year);
                    return Math.Round(gross2 * (decimal)amt / (decimal)100, 2);
                }
            }
            else if (method == "D")
            {
                var gross2 = HrSalaryCalc.GetFinalGross(empId, 2, month, year);
                var dayAmt = gross2 / (decimal)DateTime.DaysInMonth(year, month);
                return Math.Round((dayAmt * amt),2);
            }
            return Math.Round(amt,2);
        }

        public static decimal GetDiscAmt(decimal discEmpId)
        {
            var db = Db.Get();
            var empDisc = db.EMPLOYEE_DISCOUNTS_HERP.Include("EMPLOYEE_HERP").Include("DISCOUNTS_HERP").SingleOrDefault(a => a.ID == discEmpId);
            var emp = empDisc.EMPLOYEE_HERP;
            var disc = empDisc.DISCOUNTS_HERP;

            if (disc.METHOD == "P")
            {
                if (disc.ON_WHAT == "B")
                {
                    var basicSalary = HrSalaryCalc.GetBasicSalary(emp.ID);
                    return (basicSalary * (decimal)(disc.AMOUNT_PRCNT / 100));
                }
                else
                {
                    if (disc.ON_WHAT == "G1")
                    {
                        var Gross1 = HrSalaryCalc.GetFinalGross(emp.ID, 1, null, null);
                        return (Gross1 * (decimal)(disc.AMOUNT_PRCNT / 100));
                    }
                    else if (disc.ON_WHAT == "G2")
                    {
                        var Gross2 = HrSalaryCalc.GetFinalGross(emp.ID, 2, null, null);
                        return (Gross2 * (decimal)(disc.AMOUNT_PRCNT / 100));
                    }
                    else if (disc.ON_WHAT == "R")
                    {
                        var Gross3 = HrSalaryCalc.GetFinalGross(emp.ID, 3, null, null);
                        return (Gross3 * (decimal)(disc.AMOUNT_PRCNT / 100));
                    }
                }

            }
            else if (disc.METHOD == "A")
            {
                if (disc.IS_DEPENDENT == "Y")
                {
                    var cnt = db.DEPENDENTS_CHILDREN_HERP.Where(x => x.EMP_ID == emp.ID && x.INSURANCE == "Y" && x.CONFIRMED == "Y").Count() + 1;
                    return disc.AMOUNT_PRCNT * cnt;
                }
                return disc.AMOUNT_PRCNT;
            }

            return 0;
        }
        //RIMAH
        public static decimal GetTotalAllwsNotIncludeOverTime( decimal empId, 
            DbModel db)
        {
            decimal rallw = 0;
            decimal sum = 0;
            int grossType = 2;
            var allws = db.EMPLOYEE_ALLOWANCES_HERP.Where(x => x.EMP_ID == empId).ToList();
            var basicSal = GetBasicSalary(empId);
            var diffAmt = db.EMPLOYEE_HERP.SingleOrDefault(a => a.ID == empId).DIFF_AMT;

            foreach (var a1 in allws.Where(x => x.ALLW_HERP.ON_WHAT != "G1" && x.ALLW_HERP.IS_OVERTIME=="N"))
            {
                decimal amt = 0;
                int noOfChildren = 0;
                var NoChildren = Helpers.FixedERPValues.GetValueAccount("NUMBER_OF_CHILDREN");//get No_children from employee_TBL
                if (a1.ALLW_HERP.METHOD == "A")
                {
                    amt = a1.ALLW_HERP.AMOUNT_PRCNT;
                    if (a1.ALLW_HERP.IS_ALLW_CHILD == "Y")
                    {
                        var dt = DateTime.Now.Date.AddYears(-18);
                        if (NoChildren == "Y")
                        {
                            var obj = db.EMPLOYEE_HERP.Where(c => c.ID == empId).SingleOrDefault();
                            noOfChildren = (int)(obj != null ? obj.NO_OF_CHILDREN != null ? obj.NO_OF_CHILDREN : 0 : 0);
                        }
                        else
                        {
                            noOfChildren = db.DEPENDENTS_CHILDREN_HERP.Where(x => x.EMP_ID == empId && (x.LINK_ID == 3 || x.LINK_ID == 4) && x.BIRTHDATE >= dt && x.CONFIRMED == "Y").Count();
                        }
                        amt = amt * noOfChildren;

                    }
                    if (a1.ALLW_HERP.IS_TRANSPORT == "Y")//rimah
                    {
                        var emp = db.EMPLOYEE_HERP.Where(c => c.ID == empId).SingleOrDefault();

                        decimal amtTransport = emp.REGIONS_ERP != null
                            ? emp.REGIONS_ERP.TRANS_AMOUNT != null
                                ? (decimal)emp.REGIONS_ERP.TRANS_AMOUNT
                                : 0
                            : 0;
                        sum += amtTransport;
                    }

                    sum += amt;
                }
                else if (a1.ALLW_HERP.METHOD == "M")
                {
                    amt = (decimal)(a1.AMT.HasValue ? a1.AMT : 0);
                    sum += amt;
                }
                else if (a1.ALLW_HERP.METHOD == "P")
                {
                    if (a1.ALLW_HERP.ON_WHAT == "B")
                    {
                        amt = basicSal * (decimal)(a1.ALLW_HERP.AMOUNT_PRCNT / (decimal)100);
                        sum += amt;
                    }
                }
                if (a1.ALLW_HERP.IS_RETIREMENT_ALLW == "Y") rallw += amt;
            }
            if (grossType == 2)
            {
                foreach (var a2 in allws.Where(x => x.ALLW_HERP.ON_WHAT == "G1" && x.ALLW_HERP.IS_OVERTIME == "N"))
                {
                    decimal amt = 0;
                    if (a2.ALLW_HERP.METHOD == "P")
                    {
                        if (a2.ALLW_HERP.ON_WHAT == "G1")
                        {
                            var orgGross = basicSal + diffAmt + sum;
                            amt = (decimal) (orgGross * (decimal)(a2.ALLW_HERP.AMOUNT_PRCNT / (decimal)100));
                            sum += amt;
                        }
                    }
                    if (a2.ALLW_HERP.IS_RETIREMENT_ALLW == "Y") rallw += amt;
                }
            }
            return sum;
        }
        public static bool CheckEmployeeCompleteSixMonthsWork(decimal empId)
        {
            try
            {
                var db = Db.Get();
                var emp =
                    db.EMPLOYEE_HERP.FirstOrDefault(c => c.ID == empId);
           
                var monthBeforeSixMonth = DateTime.Today.AddMonths(-6);
                bool isCompleteSixMonthsWork = emp.START_DATE <= monthBeforeSixMonth;
                //var isCompleteSixMonthsWork1 = (DateTime.Now.Date - emp.START_DATE.Value);
                return isCompleteSixMonthsWork;
            }
            catch (Exception exp)
            {
                  return false;
            }
        }
        private static decimal GetTotalHours(DateTime from, DateTime to)
        {
            var diffHours = (decimal)(to - from).Hours;
            var diffMinutes = (decimal)(to - from).Minutes / (decimal)60;
            decimal minutes = diffHours + diffMinutes;
            return minutes;
        }
        public static decimal GetHourSalaryIncludeAllwsForOverTime(decimal empId, int grossType, int? month, int? year)
        {
            var db = Db.Get();
            var isDiffAmt = FixedERPValues.GetVal("INCLUDE_DIFFAMT_OVERTIME");
            var emp = db.EMPLOYEE_HERP.Where(e => e.ID == empId)
                            .Select(s => new EmployeeModel
                            {
                                ID = s.ID,
                                DIFF_AMT = s.DIFF_AMT,
                                EMPLOYMENT_ID = s.EMPLOYMENT_ID,
                                STEP_ID = s.STEP_ID,
                                DAILY_AMT = s.DAILY_AMT,
                                WorkStartDate= s.WORK_START_TIME,
                                WorkEndDate = s.WORK_END_TIME
                            }).FirstOrDefault();
            var employmentObj = db.EMPLOYMENT_TYPE_HERP.SingleOrDefault(f => f.ID == emp.EMPLOYMENT_ID);
            var requireDaysEntry = employmentObj.REQUIRE_DAYS_ENTRY;

            if (requireDaysEntry == "N")
            {
                var gross = GetFinalGross(empId, grossType, month, year);

                var allwNotIncludeOverTime = HrSalaryCalc.GetTotalAllwsNotIncludeOverTime(empId, db);
                gross = gross - allwNotIncludeOverTime;
                gross = isDiffAmt == "N" ? gross - (emp.DIFF_AMT ?? 0) : gross;
                var hours = employmentObj.NO_OF_HOURS;

                return hours != null ? Math.Round((gross/(decimal) hours), 2) : 0;
            }
            decimal hoursWork = GetTotalHours(emp.WorkStartDate.Value, emp.WorkEndDate.Value);
            return Math.Round((decimal)(emp.DAILY_AMT / hoursWork), 2);

        }

        public static bool IsCalculatedMonth(int month, int year, string isContract="N",string isMonth13="N")
        {
            var db = Db.Get();
            var forRamallah = FixedERPValues.GetValueAccount("IS_RAMALLAH");
            var monthCalc = db.EMPLOYEE_MONTHLY_CALC_HERP.Where(x => x.TRANS_MONTH.Month == month && x.TRANS_MONTH.Year == year && x.MONTH13 == isMonth13 && x.IS_CONTRACT == isContract).FirstOrDefault();
            if (forRamallah == "N")
            {
                monthCalc = db.EMPLOYEE_MONTHLY_CALC_HERP.Where(x => x.TRANS_MONTH.Month == month && x.TRANS_MONTH.Year == year && x.MONTH13 == isMonth13 && x.IS_CONTRACT == isContract && x.POSTED=="Y").FirstOrDefault();
                if (monthCalc == null) return false;
            }
            if (monthCalc == null) return false;
            var details = db.EMP_MONTHLY_CALC_DTL_HERP.Where(a => a.MONTHLY_CALC_ID == monthCalc.ID).Any();
            if (!details) return false;
            return true;
        }
    
    }
}