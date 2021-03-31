using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Hosting;

namespace GSN_NEW.Helpers
{
    public static class ExceptionUtility
    {
        // Log an Exception 
        /// <summary>
        /// Logs the exception.
        /// </summary>
        /// <param name="exc">The exc.</param>
        /// <param name="source">The source.</param>
        public static void LogException(Exception exc, string source)
        {
            try
            {
                // Include enterprise logic for logging exceptions 
                // Get the absolute path to the log file 
                string logFile = "~/App_Data/ErrorLog.txt";
                try
                {
                    logFile = HttpContext.Current.Server.MapPath(logFile);
                }
                catch (Exception)
                {
                    logFile = HostingEnvironment.MapPath(logFile);
                }
                // Open the log file for append and write the log
                if (logFile != null)
                {
                    string str;
                    using (var sreader = new StreamReader(logFile))
                    {
                        str = sreader.ReadToEnd();
                        sreader.Close();
                    }
                    File.Delete(logFile);
                    var sw = new StreamWriter(logFile, true);
                    sw.WriteLine("********** {0} **********", DateTime.Now);
                    if (exc.InnerException != null)
                    {
                        sw.Write("Inner Exception Type: ");
                        sw.WriteLine(exc.InnerException.GetType().ToString());
                        sw.Write("Inner Exception: ");
                        sw.WriteLine(exc.InnerException.Message);
                        sw.Write("Inner Source: ");
                        sw.WriteLine(exc.InnerException.Source);
                        if (exc.InnerException.StackTrace != null)
                        {
                            sw.WriteLine("Inner Stack Trace: ");
                            sw.WriteLine(exc.InnerException.StackTrace);
                        }
                    }
                    sw.Write("Exception Type: ");
                    sw.WriteLine(exc.GetType().ToString());
                    sw.WriteLine("Exception: " + exc.Message);
                    sw.WriteLine("Source: " + source);
                    sw.WriteLine("Stack Trace: ");
                    if (exc.StackTrace != null)
                    {
                        sw.WriteLine(exc.StackTrace);
                        sw.WriteLine();
                    }
                    sw.WriteLine();
                    sw.Write(str);
                    sw.Close();
                }
            }
            catch (Exception e)
            {
            }
        }
    }
}