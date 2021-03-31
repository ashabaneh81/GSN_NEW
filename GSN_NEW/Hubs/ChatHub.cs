using System.Linq;
using System.Threading.Tasks;
using System.Web;
using ErpDal;
using GSN_NEW.Helpers;
using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Hubs;

namespace GSN_NEW.Hubs
{
    [HubName("chatHub")]
    public class ChatHub : Hub
    {
        public void Hello()
        {
            Clients.All.hello();
        }

        public void BroadCastMessage(string name, string message)
        {
            Clients.All.recieveMesage(name, message);
        }

        public void Send(string name, string message)
        {
            Clients.All.addNewMessageToPage(name, message);
            //Clients.User(name).send(message);
            //Clients.All.hello();
            //Clients.All.recieveMesage(name, message);

            //var db = Db.Get();
            //var staffId = HttpContext.Current.User.Identity.Name.UserCode();

            //var staffConnections = db.STAFF_CONNECTIONS
            //                         .Where(x => x.STAFF_ID == staffId).Select(x => x.CONNECTION_ID).ToList();
        }

        public void AddTask(string to, string task)
        {
            Clients.All.addTaskToUser(to, task);
        }

        public override Task OnConnected()
        {
            var staffId = HttpContext.Current.User.Identity.Name;//.UserCode();
            var connectionId = Context.ConnectionId;

            //var db = Db.Get();

            //db.STAFF_CONNECTIONS.Add(new STAFF_CONNECTIONS
            //{
            //    STAFF_ID = staffId,
            //    CONNECTION_ID = connectionId
            //});

            //db.SaveChanges();

            //var staffConnections = db.STAFF_CONNECTIONS
            //                         .Where(x => x.STAFF_ID == staffId).Select(x => x.CONNECTION_ID).ToList();

            //Clients.AllExcept(staffConnections.ToArray()).userConnected(staffId);

            return base.OnConnected();
        }

        public override Task OnDisconnected(bool stopCalled)
        {
            //var staffId = HttpContext.Current.User.Identity.Name;
            //var connectionId = Context.ConnectionId;

            //var db = Db.Get();

            //db.STAFF_CONNECTIONS.ToList().ForEach(x =>
            //{
            //    db.STAFF_CONNECTIONS.Remove(x);
            //});

            //var staffConnections = db.STAFF_CONNECTIONS
            //                         .Where(x => x.STAFF_ID == staffId);

            //if (staffConnections.Count() == 1 && staffConnections.Any(x => x.CONNECTION_ID == connectionId))
            //{
            //    var currentConnection = staffConnections.FirstOrDefault(x => x.STAFF_ID == staffId);
            //    db.STAFF_CONNECTIONS.Remove(currentConnection);
            //}
            //else if (staffConnections.Count() > 1 && staffConnections.Any(x => x.CONNECTION_ID == connectionId))
            //{
            //    var currentConnection = staffConnections.FirstOrDefault(x => x.CONNECTION_ID == connectionId);
            //    db.STAFF_CONNECTIONS.Remove(currentConnection);
            //}

            //db.SaveChanges();

            //Clients.Others.userDisconnected(staffId);

            return base.OnDisconnected(stopCalled);
        }
    }
}