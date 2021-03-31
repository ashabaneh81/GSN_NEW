namespace GSN_NEW.Models
{
    public class SubTasksErpModel
    {
        public decimal Id { get; set; }
        public string SubTaskDesc { get; set; }
        public string ManagerNotes { get; set; }
        public string StaffNotes { get; set; }
        public decimal? TaskId { get; set; }
    }
}