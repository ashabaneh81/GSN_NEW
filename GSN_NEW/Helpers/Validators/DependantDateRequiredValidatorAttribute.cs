using System;
using System.ComponentModel.DataAnnotations;
using System.Linq;

namespace GSN_ERP.Helpers.Validators
{
    public class DependantDateRequiredValidatorAttribute : ValidationAttribute
    {
        public DependantDateRequiredValidatorAttribute(string masterPropertyName, string masterPropertyRequiredValue)
        {
            MasterPropertyName = masterPropertyName;
            MasterPropertyRequiredValue = masterPropertyRequiredValue;
        }

        public DependantDateRequiredValidatorAttribute(string masterPropertyName)
        {
            MasterPropertyName = masterPropertyName;
        }

        private string MasterPropertyName { get; set; }
        private string MasterPropertyRequiredValue { get; set; }

        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {
            var masterProp = validationContext.ObjectType.GetProperties().Single(x => x.Name == MasterPropertyName);
            object masterPropVal;

            switch (masterProp.PropertyType.Name)
            {
                case "String":
                    masterPropVal = masterProp.GetValue(validationContext.ObjectInstance, null) as string;
                    break;
                case "DateTime":
                    masterPropVal = masterProp.GetValue(validationContext.ObjectInstance, null) as DateTime?;
                    break;
                default:
                    return new ValidationResult("Unknown property type");
            }

            var currentPropVal = value as DateTime?;

            if (MasterPropertyRequiredValue == null)
            {
                if (masterPropVal != null && currentPropVal == null)
                {
                    return new ValidationResult(FormatErrorMessage(validationContext.DisplayName));
                }
            }
            else if (masterPropVal != null && masterPropVal.ToString() == MasterPropertyRequiredValue &&
                     currentPropVal == null)
            {
                return new ValidationResult(FormatErrorMessage(validationContext.DisplayName));
            }

            return null;
        }
    }
}