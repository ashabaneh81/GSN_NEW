using System.ComponentModel.DataAnnotations;
using System.Linq;

namespace GSN_ERP.Helpers.Validators
{
    public class DependantRequiredValidatorAttribute : ValidationAttribute
    {
        public DependantRequiredValidatorAttribute(string masterPropertyName, string masterPropertyRequiredValue)
        {
            MasterPropertyName = masterPropertyName;
            MasterPropertyRequiredValue = masterPropertyRequiredValue;
        }

        public DependantRequiredValidatorAttribute(string masterPropertyName)
        {
            MasterPropertyName = masterPropertyName;
        }

        private string MasterPropertyName { get; set; }
        private string MasterPropertyRequiredValue { get; set; }

        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {
            var masterProp = validationContext.ObjectType.GetProperties().Single(x => x.Name == MasterPropertyName);
            var masterPropVal = masterProp.GetValue(validationContext.ObjectInstance, null) as string;

            var currentPropVal = value as string;

            if (MasterPropertyRequiredValue == null)
            {
                if (masterPropVal != null && currentPropVal != null)
                {
                    return new ValidationResult(FormatErrorMessage(validationContext.DisplayName));
                }
            }
            else if (masterPropVal == MasterPropertyRequiredValue && currentPropVal == null)
            {
                return new ValidationResult(FormatErrorMessage(validationContext.DisplayName));
            }

            return null;
        }
    }
}