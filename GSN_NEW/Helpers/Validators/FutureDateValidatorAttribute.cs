using System;
using System.ComponentModel.DataAnnotations;

namespace GSN_ERP.Helpers.Validators
{
    public class FutureDateValidatorAttribute : ValidationAttribute
    {
        public override bool IsValid(object value)
        {
            return value != null && (DateTime) value > DateTime.Now;
        }
    }
}