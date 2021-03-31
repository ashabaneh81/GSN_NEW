using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web.Mvc;

namespace GSN_ERP.Helpers.Validators
{
    internal class DecimalBetweenValidatorAttribute : ValidationAttribute, IClientValidatable
    {
        public DecimalBetweenValidatorAttribute(string betweenFromPropertyName, string betweenToPropertyName)
        {
            BetweenFromPropertyName = betweenFromPropertyName;
            BetweenToPropertyName = betweenToPropertyName;
        }

        private string BetweenFromPropertyName { get; set; }
        private string BetweenToPropertyName { get; set; }

        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {
            var bfProp = validationContext.ObjectType.GetProperties().Single(x => x.Name == BetweenFromPropertyName);
            var bfVal = bfProp.GetValue(validationContext.ObjectInstance, null) as decimal?;

            var btProp = validationContext.ObjectType.GetProperties().Single(x => x.Name == BetweenToPropertyName);
            var btVal = btProp.GetValue(validationContext.ObjectInstance, null) as decimal?;

            var val = value as decimal?;

            if (bfVal == null || btVal == null || val == null || !(val >= bfVal && val <= btVal))
            {
                return new ValidationResult(string.Format("القيمة يجب ان تكون بين {0} و {1}", bfVal, btVal));
            }

            return null;
        }

        public IEnumerable<ModelClientValidationRule> GetClientValidationRules(ModelMetadata metadata, ControllerContext context)
        {
            var rule = new ModelClientValidationRule
            {
                ErrorMessage = ErrorMessage,
                ValidationType = "decimalbetweenvalidator"
            };

            rule.ValidationParameters["betweenfromproperty"] = BetweenFromPropertyName;
            rule.ValidationParameters["betweentoproperty"] = BetweenToPropertyName;

            yield return rule;
        }
    }
}