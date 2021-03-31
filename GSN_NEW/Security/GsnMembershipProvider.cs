using System;
using System.Linq;
using System.Web.Security;
using ErpDal;

namespace GSN_NEW.Security
{
    public class GsnMembershipProvider : MembershipProvider
    {
        #region Implemented

        public override bool ValidateUser(string username, string password)
        {
            var db = Db.Get();
            return  db.STAFF_ERP.Any(x => x.ID == username && x.STAFF_PASSWORD == password);
        }

        public override MembershipUser GetUser(string username, bool userIsOnline)
        {
            var db = Db.Get();
            var u = db.STAFF_ERP.Single(x => x.ID == username);

            return u == null
                       ? new MembershipUser
                             (
                             "",
                             "",
                             null,
                             "",
                             "",
                             "",
                             false,
                             true,
                             DateTime.UtcNow,
                             DateTime.UtcNow,
                             DateTime.UtcNow,
                             DateTime.UtcNow,
                             DateTime.UtcNow
                             )
                       : new MembershipUser
                             (
                             string.Format("{0}_{1}", u.ID, DateTime.UtcNow),
                             u.ID,
                             null,
                             string.Format("{0}_{1}@yandex.ru", u.ID, DateTime.UtcNow),//u.EMail,
                             string.Format("{0}_{1}_PasswordQuestion", u.ID, DateTime.UtcNow),
                             string.Format("{0}_{1}_Comment", u.ID, DateTime.UtcNow),
                             true,
                             false,
                             DateTime.UtcNow,
                             DateTime.UtcNow,
                             DateTime.UtcNow,
                             DateTime.UtcNow,
                             DateTime.UtcNow
                             );
        }

        #endregion // Implemented

        #region Unimplemented

        public override string ApplicationName
        {
            get
            {
                throw new NotImplementedException();
            }
            set
            {
                throw new NotImplementedException();
            }
        }

        public override bool ChangePassword(string username, string oldPassword, string newPassword)
        {
            throw new NotImplementedException();
        }

        public override bool ChangePasswordQuestionAndAnswer(string username, string password, string newPasswordQuestion, string newPasswordAnswer)
        {
            throw new NotImplementedException();
        }

        public override MembershipUser CreateUser(string username, string password, string email, string passwordQuestion, string passwordAnswer, bool isApproved, object providerUserKey, out MembershipCreateStatus status)
        {
            throw new NotImplementedException();
        }

        public override bool DeleteUser(string username, bool deleteAllRelatedData)
        {
            throw new NotImplementedException();
        }

        public override bool EnablePasswordReset
        {
            get { throw new NotImplementedException(); }
        }

        public override bool EnablePasswordRetrieval
        {
            get { throw new NotImplementedException(); }
        }

        public override MembershipUserCollection FindUsersByEmail(string emailToMatch, int pageIndex, int pageSize, out int totalRecords)
        {
            throw new NotImplementedException();
        }

        public override MembershipUserCollection FindUsersByName(string usernameToMatch, int pageIndex, int pageSize, out int totalRecords)
        {
            throw new NotImplementedException();
        }

        public override MembershipUserCollection GetAllUsers(int pageIndex, int pageSize, out int totalRecords)
        {
            throw new NotImplementedException();
        }

        public override int GetNumberOfUsersOnline()
        {
            throw new NotImplementedException();
        }

        public override string GetPassword(string username, string answer)
        {
            throw new NotImplementedException();
        }

        public override MembershipUser GetUser(object providerUserKey, bool userIsOnline)
        {
            throw new NotImplementedException();
        }

        public override string GetUserNameByEmail(string email)
        {
            throw new NotImplementedException();
        }

        public override int MaxInvalidPasswordAttempts
        {
            get { throw new NotImplementedException(); }
        }

        public override int MinRequiredNonAlphanumericCharacters
        {
            get { throw new NotImplementedException(); }
        }

        public override int MinRequiredPasswordLength
        {
            get { throw new NotImplementedException(); }
        }

        public override int PasswordAttemptWindow
        {
            get { throw new NotImplementedException(); }
        }

        public override MembershipPasswordFormat PasswordFormat
        {
            get { throw new NotImplementedException(); }
        }

        public override string PasswordStrengthRegularExpression
        {
            get { throw new NotImplementedException(); }
        }

        public override bool RequiresQuestionAndAnswer
        {
            get { throw new NotImplementedException(); }
        }

        public override bool RequiresUniqueEmail
        {
            get { throw new NotImplementedException(); }
        }

        public override string ResetPassword(string username, string answer)
        {
            throw new NotImplementedException();
        }

        public override bool UnlockUser(string userName)
        {
            throw new NotImplementedException();
        }

        public override void UpdateUser(MembershipUser user)
        {
            throw new NotImplementedException();
        }

        #endregion // Unimplemented
    }
}