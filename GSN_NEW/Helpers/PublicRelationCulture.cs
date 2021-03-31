using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.SessionState;
using System.Threading;
using System.Globalization;

namespace GSN_NEW.Helpers
{
    public class PublicRelationCulture
    {
                protected HttpSessionState session;

        //constructor   
      public PublicRelationCulture(HttpSessionState httpSessionState)
        {
            session = httpSessionState;
        }
        // Properties  
        public static int CurrentCulture
        {
            get
            {
                if (Thread.CurrentThread.CurrentUICulture.Name == "en")
                {
                    return 0;
                }
                else if (Thread.CurrentThread.CurrentUICulture.Name == "ar")
                {
                    return 1;
                }
                else
                {
                    return 0;
                }
            }
            set
            {
                CultureInfo gbCulture = new CultureInfo("en-GB");
                if (value == 0)
                {
                    //Thread.CurrentThread.CurrentUICulture = new CultureInfo("en");
                    CultureInfo ci = new CultureInfo("en");
                    CultureInfo myCulture = (CultureInfo)ci.Clone();
                    //myCulture.DateTimeFormat.ShortDatePattern = "dd/MM/yyyy";
                    //myCulture.DateTimeFormat.ShortTimePattern = "HH:mm";
                    //myCulture.DateTimeFormat.LongTimePattern = "HH:mm";
                    myCulture.DateTimeFormat = gbCulture.DateTimeFormat;
                    Thread.CurrentThread.CurrentUICulture = myCulture;
                }
                else if (value == 1)
                {
                    //Thread.CurrentThread.CurrentUICulture = new CultureInfo("ar");
                    CultureInfo ci = new CultureInfo("ar");
                    CultureInfo myCulture = (CultureInfo)ci.Clone();
                    //myCulture.DateTimeFormat.ShortDatePattern = "dd/MM/yyyy";
                    //myCulture.DateTimeFormat.ShortTimePattern = "HH:mm:ss";
                    myCulture.DateTimeFormat = gbCulture.DateTimeFormat;
                    Thread.CurrentThread.CurrentUICulture = myCulture;
                }
                else
                {
                    Thread.CurrentThread.CurrentUICulture = CultureInfo.InvariantCulture;
                }

                Thread.CurrentThread.CurrentCulture = Thread.CurrentThread.CurrentUICulture;
            }
        }
    }
}