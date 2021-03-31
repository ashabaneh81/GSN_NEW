using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text.RegularExpressions;
using System.Web;
using System.Xml;
using System.Xml.Linq;

namespace GSN_ERP.Helpers
{
    public class SendSMS
    {
        public static bool Send(string mobileNo, string msg)
        {
            try {  using (var client = new WebClient())
            {
                var textmsg = Regex.Replace(msg, "<.*?>", String.Empty);
                string apiKey = "A394AB4E269C6945D92FE4E20A4A5B8B";
                string url = "http://smsservice.hadara.ps:4545/SMS.ashx/bulkservice/sessionvalue/sendmessage/?apikey=" + apiKey + "&to=" + mobileNo + "&msg=" + textmsg;
                string responseStr = client.DownloadString(url);
                XmlDocument xmlDoc = new XmlDocument(); // Create an XML document object
                xmlDoc.LoadXml(responseStr); // Load the XML document from the specified file

                // Get elements
                XmlNodeList elements = xmlDoc.GetElementsByTagName("Status");
                if (elements != null && elements.Count > 0)
                {
                    var status = elements[0].InnerText;
                    return status == "1" ? true : false;
                }
                
            }
            return false; }
            catch(Exception ex) {
                return false;
            }
          
        }
    }
}