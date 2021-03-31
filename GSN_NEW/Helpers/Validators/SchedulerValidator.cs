using ErpDal;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Mvc;

namespace GSN_ERP.Helpers.Validators
{
   public class SchedulerValidator : ValidationAttribute, IClientValidatable
    {

        //public SchedulerValidator(string betweenFromPropertyName, string betweenToPropertyName)
        //{
        //    BetweenFromPropertyName = betweenFromPropertyName;
        //    BetweenToPropertyName = betweenToPropertyName;
        //}
        public IEnumerable<ModelClientValidationRule> GetClientValidationRules(ModelMetadata metadata, ControllerContext context)
        {
            throw new NotImplementedException();
        }
        private string from { get; set; }
        private string Session { get; set; }
        private string to { get; set; }
        private string Id { get; set; }

        public  SchedulerValidator(string hallId ,string sessionDate , string from_hour ,string to_hour)
        {
             from = from_hour;
             Session = sessionDate;
             to = to_hour;
             Id = hallId;

           
           
           
           
        }

        protected override ValidationResult IsValid(object value, ValidationContext validationContext)

        {

            var db = Db.Get();
            var bfProp = validationContext.ObjectType.GetProperties().Single(x => x.Name == from);
            var bfVal = Convert.ToDateTime( bfProp.GetValue(validationContext.ObjectInstance, null)) ;

            var btProp = validationContext.ObjectType.GetProperties().Single(x => x.Name == to);
            var btVal =Convert.ToDateTime( btProp.GetValue(validationContext.ObjectInstance, null)) ;

            var sProp = validationContext.ObjectType.GetProperties().Single(x => x.Name ==Session );
            var sVal =Convert.ToDateTime( btProp.GetValue(validationContext.ObjectInstance, null)) ;

            var hProp = validationContext.ObjectType.GetProperties().Single(x => x.Name == Id);
            var hVal = btProp.GetValue(validationContext.ObjectInstance, null) as decimal?;

               var val = value as DateTime?;

            var result = db.SESSIONS_COMMITTEES_CERP.Where(z =>
               z.HALL_ID == hVal
               &&
               z.SESSION_DATE == sVal
               // DateTime.Compare(z.SESSION_DATE, x.SESSION_DATE) == 0
               && (
               (DateTime.Compare(z.FROM_HOUR, bfVal) == 0 && DateTime.Compare(z.TO_HOUR, btVal) == 0)
               || (DateTime.Compare(z.TO_HOUR, bfVal) > 0 && DateTime.Compare(z.FROM_HOUR, bfVal) < 0)
               || (DateTime.Compare(z.TO_HOUR, btVal) > 0 && DateTime.Compare(z.FROM_HOUR, btVal) < 0)
               || DateTime.Compare(z.TO_HOUR, btVal) == 0
               || DateTime.Compare(z.FROM_HOUR, btVal) == 0
               )
               );

             var COUNT = result.Count();
            if (COUNT >= 1)
            {
                return new ValidationResult(string.Format("هذه القاعة مشغولة في هذا الوقت"));
               // error = "هذه القاعة مشغولة في هذا الوقت";

            }

                  return null;
        }

    }
}
