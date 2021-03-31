using System.ComponentModel.DataAnnotations;
using System.Linq;

namespace GSN_ERP.Helpers.Validators
{
    public class OptionalRequiredValidatorAttribute : ValidationAttribute
    {
        public OptionalRequiredValidatorAttribute(string masterPropertyName)
        {
            MasterPropertyName = masterPropertyName;
        }

        private string MasterPropertyName { get; set; }

        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {
            var masterProp = validationContext.ObjectType.GetProperties().Single(x => x.Name == MasterPropertyName);
            var masterPropVal = masterProp.GetValue(validationContext.ObjectInstance, null) as string;

            var currentPropVal = value as string;

            if (masterPropVal == null && currentPropVal == null)
            {
                return new ValidationResult(FormatErrorMessage(validationContext.DisplayName));
            }

            return null;
        }
    }
}