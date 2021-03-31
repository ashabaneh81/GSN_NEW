using System;
using System.Text;
using System.Web.Script.Serialization;

namespace GSN_NEW.Helpers
{
    public class JsonModel
    {
        public JsonModel()
        {
            HasError = false;
        }

        public JsonModel(string errorMessage)
        {
            HasError = true;
            ErrorMessage = errorMessage;
        }

        public JsonModel(bool hasError)
        {
            HasError = hasError;
        }

        public JsonModel(object data)
        {
            HasError = false;
            var js = new JavaScriptSerializer();
            Data = js.Serialize(data);
        }

        public JsonModel(Exception ex)
        {
            HasError = true;

            var sb = new StringBuilder();

            sb.Append(string.Format("Message: {0}", ex.Message));

            if (ex.InnerException != null)
            {
                sb.AppendLine("------");
                sb.AppendLine(string.Format("Inner Exception: {0}", ex.InnerException.Message));

                if (ex.InnerException.InnerException != null)
                {
                    sb.AppendLine("------");
                    sb.AppendLine(string.Format("Inner inner Exception: {0}", ex.InnerException.InnerException.Message));
                }
            }

            ErrorMessage = sb.ToString();
        }

        public bool HasError { get; set; }
        public string ErrorMessage { get; set; }
        public string Data { get; set; }
    }
}