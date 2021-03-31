using System.ComponentModel.DataAnnotations;
using System.Linq;

namespace GSN_ERP.Helpers.Validators
{
    public class MustEqualValidatorAttribute : ValidationAttribute
    {
        public MustEqualValidatorAttribute(string masterPropertyName)
        {
            MasterPropertyName = masterPropertyName;
        }

        private string MasterPropertyName { get; set; }

        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {
            var masterProp = validationContext.ObjectType.GetProperties().Single(x => x.Name == MasterPropertyName);
            var masterPropVal = masterProp.GetValue(validationContext.ObjectInstance, null) as string;
            var currentPropVal = value as string;

            if (string.IsNullOrEmpty(currentPropVal) || string.IsNullOrEmpty(masterPropVal) ||
                !currentPropVal.Equals(masterPropVal))
            {
                return new ValidationResult(FormatErrorMessage(validationContext.DisplayName));
            }

            return null;
        }
    }
}