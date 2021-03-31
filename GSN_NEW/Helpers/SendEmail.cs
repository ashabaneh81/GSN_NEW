using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Mail;
using System.Text;
using System.Threading.Tasks;
using GSN_NEW.Models;

namespace GSN_NEW.Helpers
{
  public  class SendEmail
    {
      public bool Send1(string subject, string message1, string emailC, List<AttachEmailModel> attachmentFile = null, string cc = null, bool security = false)
      {
          //MailMessage mail = new MailMessage("rimahhammad@gmail.com", "rajwan89@hotmail.com");
          ////SmtpClient client = new SmtpClient();
          //client.Port = 25;
          //client.DeliveryMethod = SmtpDeliveryMethod.Network;
          //client.UseDefaultCredentials = false;
          //client.Host = "smtp.google.com";
          //mail.Subject = "this is a test email.";
          //mail.Body = "this is my test email body";

          //client.Send(mail);

          try
          {
              // MailMessage message = new MailMessage("rimahhammad@gmail.com","rajwan89@hotmail.com");

              var munEmail = FixedERPValues.GetValueAccount("MUN_EMAIL_USING_TO_SEND");
              var passWord = FixedERPValues.GetValueAccount("MUN_EMAIL_PASSWORD_TO_SEND");
              var munName = FixedERPValues.GetValueAccount("MUNICIPALITY_NAME");
              var host = FixedERPValues.GetValueAccount("EMAIL_HOST");
              var port = FixedERPValues.GetValueAccount("PORT");

              MailMessage objeto_mail = new MailMessage();
              SmtpClient client = new SmtpClient();
              //client.Port = 587;
              client.Port = 587;
              client.Host = "smtp.gmail.com";

              client.EnableSsl = true;
              client.Timeout = 900000;
              client.DeliveryMethod = SmtpDeliveryMethod.Network;
              //client.Credentials = new System.Net.NetworkCredential("alghassansystem@gmail.com", "GH123456789#");
              //objeto_mail.From = new MailAddress("alghassansystem@gmail.com");
              //client.Credentials = new System.Net.NetworkCredential("info@ramallah.ps", "what2do4me@");
              if (security)
              {
                  client.Credentials = new System.Net.NetworkCredential("info@ramallah.ps", "what2do4me@");
                  objeto_mail.From = new MailAddress("info@ramallah.ps");

              }
              else
              {
                  //client.Credentials = new System.Net.NetworkCredential("cityhall@ramallah.ps", "Invite*2019");
                  //objeto_mail.From = new MailAddress("cityhall@ramallah.ps");
                  client.Credentials = new System.Net.NetworkCredential("ramallah.eservices@gmail.com", "Ramallah*100");
                  objeto_mail.From = new MailAddress("ramallah.eservices@gmail.com");

              }

              //objeto_mail.From = new MailAddress("info@ramallah.ps");

              //objeto_mail.To.Add(new MailAddress(emailC));
              //objeto_mail.Subject = subject;
              objeto_mail.Subject = "البوابة الالكترونية لبلدية رام الله ";
              objeto_mail.IsBodyHtml = true;
              objeto_mail.Body = "<div style='text-align: right;direction:rtl'><div style='width: 100%'>" +
                                 "<h2>" + "البوابة الالكترونية لبلدية رام الله " + "</h2>" +
                                 "</div><br>" +
                                 "<div style='width: 100%;'>" +
                                 message1 + "</div>" + "<div style='text-align: right;direction:rtl;border-top: 1px solid;padding-top: 20px;'>" +
                  //"<img  src='data:image;base64," +
                  //Convert.ToBase64String(ImageUtils.ResizeImage(info.LOGO, 77, 77))+"' alt='Logo' />" +
                                 "</div>" + "</div>";
              //objeto_mail.Body = message1;
              if (attachmentFile != null)
              {
                  foreach (var item in attachmentFile)
                  {

                      Attachment att = new Attachment(new MemoryStream(item.AttachmentFile), item.Name);
                      objeto_mail.Attachments.Add(att);
                  }
              }

              var email11 = emailC.Replace('،', ',');
              var email111 = email11.Split(',').ToList();
              foreach (string CCEmail in email111)
              {
                  if (Helper.IsEmailValid(CCEmail))
                  {
                      objeto_mail.To.Add(new MailAddress(CCEmail)); //Adding Multiple CC email Id
                  }
              }

              if (!string.IsNullOrEmpty(cc))
              {
                  var email = cc.Replace('،', ',');
                  var email1 = email.Split(',').ToList();
                  foreach (string CCEmail in email1)
                  {
                      if (Helper.IsEmailValid(CCEmail))
                      {
                          objeto_mail.CC.Add(new MailAddress(CCEmail)); //Adding Multiple CC email Id
                      }
                  }
                  //var ccEmail = cc.ToString();
                  // objeto_mail.CC.Add(new MailAddress(cc.Replace(',', ';').Replace(" ،", ";")));

              }
              client.Send(objeto_mail);

              return true;
          }
          catch (Exception)
          {
              return false;
          }

      }

      public bool Send(string subject, string message1, string emailC, List<AttachEmailModel> attachmentFile = null, string cc = null)
      {

          try
          {
              var munEmail = FixedERPValues.GetValueAccount("MUN_EMAIL_USING_TO_SEND");
              var passWord = FixedERPValues.GetValueAccount("MUN_EMAIL_PASSWORD_TO_SEND");
              var munName = FixedERPValues.GetValueAccount("MUNICIPALITY_NAME");
              var host = FixedERPValues.GetValueAccount("EMAIL_HOST");
              var port = FixedERPValues.GetValueAccount("PORT");


              MailMessage objeto_mail = new MailMessage();
              SmtpClient client = new SmtpClient();
              // client.Port = 587;
              //client.Port = 465;
              // client.Host = "smtp.gmail.com";ramallah
              //client.Host = "smtp-mail.outlook.com";bethlehem
              client.Port = Convert.ToInt32(port);
              client.Host = host;
              client.EnableSsl = true;
              client.Timeout = 900000;
              client.DeliveryMethod = SmtpDeliveryMethod.Network;
              client.UseDefaultCredentials = false;
              //client.Credentials = new System.Net.NetworkCredential("info@ramallah.ps", "what2do4me@");
              //client.Credentials = new System.Net.NetworkCredential("cityhall@ramallah.ps", "Ramallah*2019");
              //client.Credentials = new System.Net.NetworkCredential("ramallah.eservices@gmail.com", "Ramallah*100");
              client.Credentials = new System.Net.NetworkCredential(munEmail, passWord);

              //objeto_mail.From = new MailAddress("info@ramallah.ps");
              //objeto_mail.From = new MailAddress("ramallah.eservices@gmail.com");
              objeto_mail.From = new MailAddress(munEmail);

              objeto_mail.Subject = subject;
              objeto_mail.IsBodyHtml = true;
              objeto_mail.Body = "<div style='text-align: right;direction:rtl'><div style='width: 100%'>" +
                                 "<h2>" + "البوابة الالكترونية  " + munName + "</h2>" +
                                 "</div><br>" +
                                 "<div style='width: 100%;'>" +
                                 message1 + "</div>" + "<div style='text-align: right;direction:rtl;border-top: 1px solid;padding-top: 20px;'>" +

                                 "</div>" + "</div>";
              if (attachmentFile != null)
              {
                  foreach (var item in attachmentFile)
                  {

                      Attachment att = new Attachment(new MemoryStream(item.AttachmentFile), item.Name);
                      objeto_mail.Attachments.Add(att);
                  }
              }
              objeto_mail.To.Add(new MailAddress(emailC));


              if (!string.IsNullOrEmpty(cc))
              {
                  var email = cc.Replace('،', ',');
                  var email1 = email.Split(',').ToList();
                  foreach (string CCEmail in email1)
                  {
                      if (Helper.IsEmailValid(CCEmail))
                      {
                          objeto_mail.CC.Add(new MailAddress(CCEmail)); //Adding Multiple CC email Id
                      }
                  }

              }
              client.Send(objeto_mail);

              return true;
          }
          catch (Exception)
          {
              return false;
          }

      }
    }
}
