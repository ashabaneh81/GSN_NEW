using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Linq;
using System.Web;
using System.Web.Security;
using ErpDal;
using GSN_NEW.Helpers;

namespace GSN_NEW.Security
{
    public class GsnRoleProvider : RoleProvider
    {
        #region Properties

        private int _cacheTimeoutInMinutes = 30;

        #endregion

        #region Overrides of RoleProvider

        /// <summary>
        /// Initialize values from web.config.
        /// </summary>
        /// <param name="name">The friendly name of the provider.</param>
        /// <param name="config">A collection of the name/value pairs representing the provider-specific attributes specified in the configuration for this provider.</param>
        public override void Initialize(string name, NameValueCollection config)
        {
            // Set Properties
            int val;
            if (!string.IsNullOrEmpty(config["cacheTimeoutInMinutes"]) && Int32.TryParse(config["cacheTimeoutInMinutes"], out val))
                _cacheTimeoutInMinutes = val;

            // Call base method
            base.Initialize(name, config);
        }

        /// <summary>
        /// Gets a value indicating whether the specified user is in the specified role for the configured applicationName.
        /// </summary>
        /// <returns>
        /// true if the specified user is in the specified role for the configured applicationName; otherwise, false.
        /// </returns>
        /// <param name="username">The user name to search for.</param><param name="roleName">The role to search in.</param>
        public override bool IsUserInRole(string username, string roleName)
        {
            var userRoles = GetRolesForUser(username);
            return userRoles.Contains(roleName);
        }

        /// <summary>
        /// Gets a list of the roles that a specified user is in for the configured applicationName.
        /// </summary>
        /// <returns>
        /// A string array containing the names of all the roles that the specified user is in for the configured applicationName.
        /// </returns>
        /// <param name="username">The user to return a list of roles for.</param>
        public override string[] GetRolesForUser(string username)
        {
            //Return if the user is not authenticated
            if (!HttpContext.Current.User.Identity.IsAuthenticated)
                return null;

            //Return if present in Cache
            //var cacheKey = string.Format("UserRoles_{0}", username);
            //if (HttpRuntime.Cache[cacheKey] != null)
            //    return (string[])HttpRuntime.Cache[cacheKey];..
            //Get the roles from DB
            var userRoles = new List<string>();
            var db = Db.Get();
            var u = HttpContext.Current.User.Identity.Name.UserCode();
            var budjetCode = db.FIXED_ERP.Where(x => x.NAME.ToUpper() == "BUDGET_STAFF").Select(x => x.VALUE).FirstOrDefault();
            var managerCode = db.FIXED_ERP.Where(x => x.NAME.ToUpper() == "STRATEGY_MANAGER").Select(x => x.VALUE).FirstOrDefault();
            var manager = db.DEPT_ERP.Where(x => x.MANAGER_ID == u);
            //var ameenMostawda = db.STORES_ERP.Where(c => c.EMPLOYEE_ID == u);
            var PurchaseManager = db.FIXED_ERP.SingleOrDefault(c => c.NAME.ToUpper() == "Purchase_order_emp".ToUpper());
            if (u == PurchaseManager.VALUE) userRoles.Add("PurchaseManager");
            else userRoles.Remove("PurchaseManager");

            if(u == budjetCode) userRoles.Add("budget");
            else userRoles.Remove("budget");

            if (u == managerCode) userRoles.Add("manager");
            else userRoles.Remove("manager");

            if (manager.Any()) userRoles.Add("mudeer");
            else userRoles.Remove("mudeer");

            //if (ameenMostawda.Any()) userRoles.Add("ameen");
            //else userRoles.Remove("ameen");

            //Store in cache
            //HttpRuntime.Cache.Insert(cacheKey, userRoles.ToArray(), null, DateTime.Now.AddMinutes(_cacheTimeoutInMinutes), Cache.NoSlidingExpiration);

            // Return
            return userRoles.ToArray();
        }

        #endregion // Overrides of RoleProvider

        #region Overrides of RoleProvider that throw NotImplementedException

        public override void CreateRole(string roleName)
        {
            throw new NotImplementedException();
        }

        public override bool DeleteRole(string roleName, bool throwOnPopulatedRole)
        {
            throw new NotImplementedException();
        }

        public override bool RoleExists(string roleName)
        {
            throw new NotImplementedException();
        }

        public override void AddUsersToRoles(string[] usernames, string[] roleNames)
        {
            throw new NotImplementedException();
        }

        public override void RemoveUsersFromRoles(string[] usernames, string[] roleNames)
        {
            throw new NotImplementedException();
        }

        public override string[] GetUsersInRole(string roleName)
        {
            throw new NotImplementedException();
        }

        public override string[] GetAllRoles()
        {
            throw new NotImplementedException();
        }

        public override string[] FindUsersInRole(string roleName, string usernameToMatch)
        {
            throw new NotImplementedException();
        }

        public override string ApplicationName { get; set; }

        #endregion // Overrides of RoleProvider that throw NotImplementedException
    }
}