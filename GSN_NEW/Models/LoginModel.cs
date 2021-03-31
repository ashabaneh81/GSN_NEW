using System.ComponentModel.DataAnnotations;

namespace GSN_NEW.Models
{
    public class LoginModel
    {
        [Required(ErrorMessage = "الرجاء ادخال اسم المستخدم")]
        [Display(Name = "اسم المستخدم")]
        public string UserName { get; set; }

        [Required(ErrorMessage = "الرجاء ادخال كلمة المرور")]
        [DataType(DataType.Password)]
        [Display(Name = "كلمة المرور")]
        public string Password { get; set; }

        //[Required(ErrorMessage = "الرجاء إختيار الصلاحية")]
        //[DataType(DataType.Text)]
        //[Display(Name = "دخول بصلاحية")]
        //public string LoginAs { get; set; }
    }
}