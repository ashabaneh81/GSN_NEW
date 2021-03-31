using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web.Mvc;

namespace GSN_ERP.Helpers.Validators
{
    internal class YearRangeValidatorAttribute : ValidationAttribute, IClientValidatable
    {
        //
        public YearRangeValidatorAttribute(string fromYearPropertyName)
        {
            FromYearPropertyName = fromYearPropertyName;
        }

        private string FromYearPropertyName { get; set; }

        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {
            var fromYearProp = validationContext.ObjectType.GetProperties().Single(x => x.Name == FromYearPropertyName);
            var fromYearVal = fromYearProp.GetValue(validationContext.ObjectInstance, null) as decimal?;
            var toYearVal = value as decimal?;

            if (fromYearVal == null || toYearVal == null || fromYearVal >= toYearVal)
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
                ValidationType = "yearrangevalidator"
            };

            rule.ValidationParameters["fromyearproperty"] = FromYearPropertyName;

            yield return rule;
        }
    }
}
