using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Mime;
using System.Web;
using DocumentFormat.OpenXml;
using DocumentFormat.OpenXml.Packaging;
using DocumentFormat.OpenXml.Wordprocessing;

namespace GSN_NEW.Helpers
{
    public class ReturnDocx
    {
        public static byte[] GenerateDocxFromHtml(string html)
        {
            //string filename = Server.MapPath(@"~/temp.docx");
           // if (System.IO.File.Exists(filename)) System.IO.File.Delete(filename);

            using (MemoryStream generatedDocument = new MemoryStream())
            {
                using (WordprocessingDocument package = WordprocessingDocument.Create(generatedDocument, WordprocessingDocumentType.Document))
                {
                    MainDocumentPart mainPart = package.MainDocumentPart;
                    if (mainPart == null)
                    {
                        mainPart = package.AddMainDocumentPart();
                        new Document(new Body()).Save(mainPart);
                    }

                    NotesFor.HtmlToOpenXml.HtmlConverter converter = new NotesFor.HtmlToOpenXml.HtmlConverter(mainPart);
                    // converter.ParseHtml(html); lazm terja3 msh mt3arf 3al ParseHtml

                    IEnumerable<DocumentFormat.OpenXml.Wordprocessing.Paragraph> paras = mainPart.Document.Body.Descendants<DocumentFormat.OpenXml.Wordprocessing.Paragraph>();
                    foreach (var p in paras)
                    {
                        if (p.Elements<ParagraphProperties>().Count() == 0)
                        {
                            p.PrependChild<ParagraphProperties>(new ParagraphProperties());
                        }
                        ParagraphProperties pp = p.Elements<ParagraphProperties>().First();
                        if (pp == null)
                        {
                            pp = new ParagraphProperties();
                            p.InsertBefore(pp, p.First());
                        }
                        BiDi bidi = new BiDi();
                        pp.Append(bidi);

                    }

                    mainPart.Document.Save();
                }

               // System.IO.File.WriteAllBytes(filename, generatedDocument.ToArray());
                //Process.Start("WINWORD.EXE", filename);
                //var docx = DocX.Load(filename);

                return generatedDocument.ToArray();
            }
        }

    }
}