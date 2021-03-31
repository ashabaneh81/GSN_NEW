using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using ReportsLibrary;

namespace GSN_NEW.Helpers
{
    public class RemoveHtmlTag
    {
        public static string GetBody(string body, string lan, decimal serviceFId, decimal user)
        {
            string bb = null;
            var da = new SelectTbl();
            var obj1 = da.FormBySeq(serviceFId);
            var infoMuni = da.GetInfoMun();
            var hod = obj1.NewHod;
            var hay = obj1.NewHay ;
            var piece = obj1.NewPiece ;
            if ((string)lan == "ar")
            {
                bb = (body);

                var test = bb.Split('!').ToList();

                var test2 = new List<string>();

                test.ForEach(x =>
                {
                    //test2.Add(x.Replace("*", string.Empty).Replace("&nbsp;", string.Empty));
                    test2.Add(x.Split('*')[0]);

                });

                var xx = test;
                List<InputFieldsReportModel> inputField = da.AllFields(test2);
                List<InputFieldValueReportModel> inputFieldValue = da.AllInputFieldValue(inputField, serviceFId);


                List<InputFieldValueReportModel> fieldValue = new List<InputFieldValueReportModel>();
                fieldValue = da.NameFieldsValueCitizen(test2, user);

                //if (idCitizen != 0)
                //{
                //    fieldValue = da.Select.ServiceFields.NameFieldsValueCitizen(test2, idCitizen);
                //}
                //else
                //{
                //    fieldValue = da.Select.ServiceFields.NameFieldsValueProf(test2, idProf);
                //}
                foreach (var item in inputFieldValue)
                {
                    if (string.IsNullOrEmpty(item.ValueField))
                    {
                        bb = bb.Replace("!" + item.NameField + "*",  " ");
                    }
                    else
                    {
                        var value = item.ValueField.Contains('_') ? item.ValueField.Split('_')[1] : item.ValueField;
                        
                        bb = bb.Replace("!" + item.NameField + "*", value) ;


                    }
                   
                }
                foreach (var zz in fieldValue)
                {
                    bb = bb.Replace("!" + zz.NameField + "*", zz.ValueField + " ");
                }
               // bb = bb.Replace("!اسم البلدية*", "بلدية رام الله");
                bb = bb.Replace("!اسم البلدية*", infoMuni.MUNICIPALITY_NAME_AR);
                bb = bb.Replace("!السنة الحالية*", DateTime.Now.Year.ToString());
                bb = bb.Replace("!تاريخ اليوم*", DateTime.Now.ToShortDateString());
                bb = bb.Replace("!الحوض*", hod);
                bb = bb.Replace("!الحي*", hay);
                bb = bb.Replace("!القطعة*", piece);
                bb = bb.Replace("<o:p>", "");
                bb = bb.Replace("</o:p>", "");
                bb = bb.Replace("! *", " ");
                //bb = bb.Replace("&nbsp;", "");
            }
            else
            {
                bb = (body);
                //textBox4.Value = "Date:" + DateTime.Now.ToShortDateString();

                var test = bb.Split('!').ToList();

                var test2 = new List<string>();

                test.ForEach(x =>
                {
                    //test2.Add(x.Replace("*", string.Empty).Replace("&nbsp;", string.Empty));
                    test2.Add(x.Split('*')[0]);

                });

                var xx = test;
                List<InputFieldsReportModel> inputField = da.AllFields(test2);
                List<InputFieldValueReportModel> inputFieldValue = da.AllInputFieldValue(inputField, serviceFId);


                List<InputFieldValueReportModel> fieldValue = new List<InputFieldValueReportModel>();
                fieldValue = da.NameFieldsValueCitizen(test2, user);

                //if (idCitizen != 0)
                //{
                //    fieldValue = da.Select.ServiceFields.NameFieldsValueCitizen(test2, idCitizen);
                //}
                //else
                //{
                //    fieldValue = da.Select.ServiceFields.NameFieldsValueProf(test2, idProf);
                //}

                foreach (var item in inputFieldValue)
                {
                    if (string.IsNullOrEmpty(item.ValueField))
                    {
                        bb = bb.Replace("!" + item.NameField + "*", " ");
                    }
                    else
                    {
                        var value = item.ValueField.Contains('_') ? item.ValueField.Split('_')[1] : item.ValueField;

                        bb = bb.Replace("!" + item.NameField + "*", value);


                    }
                }
                 
                foreach (var zz in fieldValue)
                {
                    bb = bb.Replace("!" + zz.NameField + "*", zz.ValueField);
                }
                //bb = bb.Replace("!NameMunicipality*", "Ramallah Municipality");
                bb = bb.Replace("!NameMunicipality*", infoMuni.MUNICIPALITY_NAME_EN);
                bb = bb.Replace("!DateToday*", DateTime.Now.ToShortDateString());
                bb = bb.Replace("!CurrentYear*", DateTime.Now.Year.ToString());
                bb = bb.Replace("!Hod*", hod);
                bb = bb.Replace("!Hay*", hay);
                bb = bb.Replace("!Piece*", piece);
                bb = bb.Replace("<o:p>", "");
                bb = bb.Replace("</o:p>", "");
                bb = bb.Replace("! *", " ");
                //bb = bb.Replace("&nbsp;", "");

                // htmlTextBox1.Value = bb.ToString();
            }

            return bb;
        }
    }
}