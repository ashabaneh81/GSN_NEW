//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace ErpDal
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    using System.Data.Entity.Core.Objects;
    using System.Linq;
    
    public partial class DbModel : DbContext
    {
        public DbModel()
            : base("name=DbModel")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<ACCOUNT> ACCOUNT { get; set; }
        public virtual DbSet<ACCOUNT_BANK_ACCOUNTS_ERP> ACCOUNT_BANK_ACCOUNTS_ERP { get; set; }
        public virtual DbSet<ACCOUNT_BANK_ERP> ACCOUNT_BANK_ERP { get; set; }
        public virtual DbSet<ACCOUNT_SECTION_ERP> ACCOUNT_SECTION_ERP { get; set; }
        public virtual DbSet<BANK_HERP> BANK_HERP { get; set; }
        public virtual DbSet<BRANCH_HERP> BRANCH_HERP { get; set; }
        public virtual DbSet<BUDGETS_ACCOUNT_ERP> BUDGETS_ACCOUNT_ERP { get; set; }
        public virtual DbSet<CHECK_STATUS_ERP> CHECK_STATUS_ERP { get; set; }
        public virtual DbSet<CHEQUES_DATA_ERP> CHEQUES_DATA_ERP { get; set; }
        public virtual DbSet<COLLECTORS_BOXES_ERP> COLLECTORS_BOXES_ERP { get; set; }
        public virtual DbSet<CRNOTES_DTL_ERP> CRNOTES_DTL_ERP { get; set; }
        public virtual DbSet<CRNOTES_MAS_ERP> CRNOTES_MAS_ERP { get; set; }
        public virtual DbSet<CRNOTES_WK_ERP> CRNOTES_WK_ERP { get; set; }
        public virtual DbSet<CRNOTES_WKSETUP_ERP> CRNOTES_WKSETUP_ERP { get; set; }
        public virtual DbSet<CURN> CURN { get; set; }
        public virtual DbSet<CURN_RATES> CURN_RATES { get; set; }
        public virtual DbSet<DEPT_ERP> DEPT_ERP { get; set; }
        public virtual DbSet<EMPLOYEE_HERP> EMPLOYEE_HERP { get; set; }
        public virtual DbSet<FN> FN { get; set; }
        public virtual DbSet<FS> FS { get; set; }
        public virtual DbSet<FS_GROUP_ERP> FS_GROUP_ERP { get; set; }
        public virtual DbSet<FUND> FUND { get; set; }
        public virtual DbSet<FUNDERS_ERP> FUNDERS_ERP { get; set; }
        public virtual DbSet<JOURNAL> JOURNAL { get; set; }
        public virtual DbSet<JOURNAL_DETAILS> JOURNAL_DETAILS { get; set; }
        public virtual DbSet<JOURNAL_TYPES_ERP> JOURNAL_TYPES_ERP { get; set; }
        public virtual DbSet<JOURNAL_WK_ERP> JOURNAL_WK_ERP { get; set; }
        public virtual DbSet<JOURNAL_WKSETUP_ERP> JOURNAL_WKSETUP_ERP { get; set; }
        public virtual DbSet<LEVEL0> LEVEL0 { get; set; }
        public virtual DbSet<LEVEL1> LEVEL1 { get; set; }
        public virtual DbSet<LEVEL2> LEVEL2 { get; set; }
        public virtual DbSet<LEVEL3> LEVEL3 { get; set; }
        public virtual DbSet<MUN_CLASS_DTL_ERP> MUN_CLASS_DTL_ERP { get; set; }
        public virtual DbSet<MUN_CLASS_MAS_ERP> MUN_CLASS_MAS_ERP { get; set; }
        public virtual DbSet<PR> PR { get; set; }
        public virtual DbSet<SECTIONS_ERP> SECTIONS_ERP { get; set; }
        public virtual DbSet<STAFF_ERP> STAFF_ERP { get; set; }
        public virtual DbSet<STAKEHOLDER_EMPLOYEES_ERP> STAKEHOLDER_EMPLOYEES_ERP { get; set; }
        public virtual DbSet<STAKEHOLDERS_ACCOUNTS_ERP> STAKEHOLDERS_ACCOUNTS_ERP { get; set; }
        public virtual DbSet<STAKEHOLDERS_ERP> STAKEHOLDERS_ERP { get; set; }
        public virtual DbSet<STAKEHOLDERS_RELATING_ERP> STAKEHOLDERS_RELATING_ERP { get; set; }
        public virtual DbSet<TASK_ERP> TASK_ERP { get; set; }
        public virtual DbSet<TRANS> TRANS { get; set; }
        public virtual DbSet<UNITS_ERP> UNITS_ERP { get; set; }
        public virtual DbSet<UNITS_ACCOUNTS_ERP> UNITS_ACCOUNTS_ERP { get; set; }
        public virtual DbSet<FIXED_ERP> FIXED_ERP { get; set; }
        public virtual DbSet<DRNOTES_DTL_ERP> DRNOTES_DTL_ERP { get; set; }
        public virtual DbSet<DRNOTES_MAS_ERP> DRNOTES_MAS_ERP { get; set; }
        public virtual DbSet<DRNOTES_WK_ERP> DRNOTES_WK_ERP { get; set; }
        public virtual DbSet<DRNOTES_WKSETUP_ERP> DRNOTES_WKSETUP_ERP { get; set; }
        public virtual DbSet<FIXED_PRINT_ERP> FIXED_PRINT_ERP { get; set; }
        public virtual DbSet<GROUPS_ERP> GROUPS_ERP { get; set; }
        public virtual DbSet<GROUPS_STAFF_ERP> GROUPS_STAFF_ERP { get; set; }
        public virtual DbSet<HR_FUNCTION_PERP> HR_FUNCTION_PERP { get; set; }
        public virtual DbSet<PYVC_ATTACHMENTS_ERP> PYVC_ATTACHMENTS_ERP { get; set; }
        public virtual DbSet<PYVC_DTL_ERP> PYVC_DTL_ERP { get; set; }
        public virtual DbSet<PYVC_ERP> PYVC_ERP { get; set; }
        public virtual DbSet<RCVC_ATTACHMENTS_ERP> RCVC_ATTACHMENTS_ERP { get; set; }
        public virtual DbSet<RCVC_DTL_ERP> RCVC_DTL_ERP { get; set; }
        public virtual DbSet<RCVC_ERP> RCVC_ERP { get; set; }
        public virtual DbSet<RCVC_WK_ERP> RCVC_WK_ERP { get; set; }
        public virtual DbSet<RCVC_WKSETUP_ERP> RCVC_WKSETUP_ERP { get; set; }
        public virtual DbSet<DEPOSIT_ATTACHMENTS_ERP> DEPOSIT_ATTACHMENTS_ERP { get; set; }
        public virtual DbSet<DEPOSIT_BANK_DTL_ERP> DEPOSIT_BANK_DTL_ERP { get; set; }
        public virtual DbSet<DEPOSIT_BANK_ERP> DEPOSIT_BANK_ERP { get; set; }
        public virtual DbSet<DEPOSIT_WK_ERP> DEPOSIT_WK_ERP { get; set; }
        public virtual DbSet<DEPOSIT_WKSETUP_ERP> DEPOSIT_WKSETUP_ERP { get; set; }
        public virtual DbSet<ILTIZAM> ILTIZAM { get; set; }
        public virtual DbSet<ILTIZAM_ATTACHMENTS_ERP> ILTIZAM_ATTACHMENTS_ERP { get; set; }
        public virtual DbSet<ILTIZAM_DETAILS> ILTIZAM_DETAILS { get; set; }
        public virtual DbSet<ILTIZAM_WK_ERP> ILTIZAM_WK_ERP { get; set; }
        public virtual DbSet<ILTIZAM_WKSETUP_ERP> ILTIZAM_WKSETUP_ERP { get; set; }
        public virtual DbSet<PYVC_WK_ERP> PYVC_WK_ERP { get; set; }
        public virtual DbSet<PYVC_WKSETUP_ERP> PYVC_WKSETUP_ERP { get; set; }
        public virtual DbSet<ORACLE_ERROR_ERP> ORACLE_ERROR_ERP { get; set; }
        public virtual DbSet<NOTIFICATION_ERP> NOTIFICATION_ERP { get; set; }
        public virtual DbSet<GROUP_MODULES> GROUP_MODULES { get; set; }
        public virtual DbSet<GROUPS> GROUPS { get; set; }
        public virtual DbSet<MODULES> MODULES { get; set; }
        public virtual DbSet<STAFF_VIEWS> STAFF_VIEWS { get; set; }
        public virtual DbSet<VIEWS> VIEWS { get; set; }
        public virtual DbSet<CONTROLLERS_GROUPS_ERP> CONTROLLERS_GROUPS_ERP { get; set; }
        public virtual DbSet<CONTROLLERS_TABLE_ERP> CONTROLLERS_TABLE_ERP { get; set; }
        public virtual DbSet<TASK_ATTACHMENTS_ERP> TASK_ATTACHMENTS_ERP { get; set; }
        public virtual DbSet<TASK_TYPES_ERP> TASK_TYPES_ERP { get; set; }
    
        public virtual int GET_MAYOR(ObjectParameter p_MANAGER)
        {
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("GET_MAYOR", p_MANAGER);
        }
    
        public virtual int GET_MUNICIPALITY_MANAGER(ObjectParameter p_MANAGER)
        {
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("GET_MUNICIPALITY_MANAGER", p_MANAGER);
        }
    
        public virtual int GET_SECTION_MANAGER(string p_STAFF_ID, ObjectParameter p_MANAGER)
        {
            var p_STAFF_IDParameter = p_STAFF_ID != null ?
                new ObjectParameter("P_STAFF_ID", p_STAFF_ID) :
                new ObjectParameter("P_STAFF_ID", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("GET_SECTION_MANAGER", p_STAFF_IDParameter, p_MANAGER);
        }
    
        public virtual int GET_SUPERVISOR(string p_STAFF_ID, ObjectParameter p_MANAGER)
        {
            var p_STAFF_IDParameter = p_STAFF_ID != null ?
                new ObjectParameter("P_STAFF_ID", p_STAFF_ID) :
                new ObjectParameter("P_STAFF_ID", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("GET_SUPERVISOR", p_STAFF_IDParameter, p_MANAGER);
        }
    
        public virtual int GET_UNIT_MANAGER(string p_STAFF_ID, ObjectParameter p_MANAGER)
        {
            var p_STAFF_IDParameter = p_STAFF_ID != null ?
                new ObjectParameter("P_STAFF_ID", p_STAFF_ID) :
                new ObjectParameter("P_STAFF_ID", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("GET_UNIT_MANAGER", p_STAFF_IDParameter, p_MANAGER);
        }
    
        public virtual int GET_DEPARTMENT_MANAGER(string p_STAFF_ID, ObjectParameter p_MANAGER)
        {
            var p_STAFF_IDParameter = p_STAFF_ID != null ?
                new ObjectParameter("P_STAFF_ID", p_STAFF_ID) :
                new ObjectParameter("P_STAFF_ID", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("GET_DEPARTMENT_MANAGER", p_STAFF_IDParameter, p_MANAGER);
        }
    }
}
