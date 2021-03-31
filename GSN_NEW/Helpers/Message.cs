using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using ErpDal;
using GSN_NEW.Hubs;
using Microsoft.AspNet.SignalR;

namespace GSN_NEW.Helpers
{
    public class Message
    {
        private string GetUserLogin(string userCode)
        {
            var db = Db.Get();

            var s = db.STAFF_ERP.FirstOrDefault(x => x.ID == userCode);

            return s != null ? string.Format("{0}:{1}", userCode, s.NAME_AR) : "";
        }

        public void SendTask(string to, decimal id, string task)
        {
            var hubContext = GlobalHost.ConnectionManager.GetHubContext<ChatHub>();
            
            hubContext.Clients.User(GetUserLogin(to)).addTask(HttpContext.Current.User.Identity.Name.UserName(), id, task);
        }

        public void SendNotification(string to, decimal id, string msg)
        {
            try
            {
                var hubContext = GlobalHost.ConnectionManager.GetHubContext<ChatHub>();
                var login = HttpContext.Current.User.Identity.Name;
                //hubContext.Clients.User(GetUserLogin(to)).addNotification(string.Format("To you: \r\nFrom: {0} \r\nMessage: {1}", from, msg));
                hubContext.Clients.User(GetUserLogin(to)).addNotification(String.IsNullOrEmpty(login) ? "" : login.UserName(), id, msg);
            }
            catch (Exception)
            {

                var hubContext = GlobalHost.ConnectionManager.GetHubContext<ChatHub>();
                // var login = HttpContext.Current.User.Identity.Name;
                //hubContext.Clients.User(GetUserLogin(to)).addNotification(string.Format("To you: \r\nFrom: {0} \r\nMessage: {1}", from, msg));
                hubContext.Clients.User(GetUserLogin(to)).addNotification("", id, msg);
            }
        }

        //public void BroadcastNotification(string msg)
        //{
        //    var hubContext = GlobalHost.ConnectionManager.GetHubContext<ChatHub>();

        //    //hubContext.Clients.All.addNotification(string.Format("From: {0} \r\nMessage: {1}", from, msg));
        //    hubContext.Clients.All.addNotification(HttpContext.Current.User.Identity.Name.UserName(), msg);
        //}

        public void SendError(string msg)
        {

           // throw new Exception(msg);
            var hubContext = GlobalHost.ConnectionManager.GetHubContext<ChatHub>();

            hubContext.Clients.User(HttpContext.Current.User.Identity.Name).addError(msg);
        }

        public void SendMsg(string toStaff, string type, decimal id, DateTime dateTime, string msg)
        {
            var hubContext = GlobalHost.ConnectionManager.GetHubContext<ChatHub>();

            hubContext.Clients.User(GetUserLogin(toStaff)).addMsg(HttpContext.Current.User.Identity.Name.UserName(), type, id, dateTime, msg);
        }

        public void SendMemo(string toStaff, decimal id, string subject)
        {
            var hubContext = GlobalHost.ConnectionManager.GetHubContext<ChatHub>();

            hubContext.Clients.User(GetUserLogin(toStaff)).addMemo(HttpContext.Current.User.Identity.Name.UserName(), subject, id);
        }
    }
}