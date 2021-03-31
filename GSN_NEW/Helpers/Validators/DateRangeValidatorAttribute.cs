using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web.Mvc;

namespace GSN_ERP.Helpers.Validators
{
    public class DateRangeValidatorAttribute : ValidationAttribute, IClientValidatable
    {
        //
        public DateRangeValidatorAttribute(string fromDatePropertyName)
        {
            FromDatePropertyName = fromDatePropertyName;
        }

        private string FromDatePropertyName { get; set; }

        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {
            var fromDateProp = validationContext.ObjectType.GetProperties().Single(x => x.Name == FromDatePropertyName);
            var fromDateVal = fromDateProp.GetValue(validationContext.ObjectInstance, null) as DateTime?;
            var toDateVal = value as DateTime?;

            if (fromDateVal == null || toDateVal == null || fromDateVal >= toDateVal)
            {
                return new ValidationResult(FormatErrorMessage(validationContext.DisplayName));
            }

            return null;
        }

        public IEnumerable<ModelClientValidationRule> GetClientValidationRules(ModelMetadata metadata, ControllerContext context)
        {
            var rule = new ModelClientValidationRule
            {
                ErrorMessage = ErrorMessage,
                ValidationType = "daterangevalidator"
            };

            rule.ValidationParameters["fromdateproperty"] = FromDatePropertyName;

            yield return rule;
        }
    }
}