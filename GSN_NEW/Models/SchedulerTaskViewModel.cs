using System;
using Kendo.Mvc.UI;

namespace GSN_NEW.Models
{
    public class SchedulerTaskViewModel : ISchedulerEvent
    {
        public decimal TaskId { get; set; }
     
        public decimal RecurrenceId { get; set; }
        
        public decimal? TaskTypeId { get; set; }

        #region ISchedulerEvent Members

        public string Title { get; set; }

        public string Description { get; set; }

        public bool IsAllDay { get; set; }

        public DateTime? Start { get; set; }
        DateTime ISchedulerEvent.Start
        {
            set;
            get;
            
        }
        public DateTime? End { get; set; }
        DateTime ISchedulerEvent.End
        {
            set;
            get;
            
        }

        public string StartTimezone { get; set; }

        public string EndTimezone { get; set; }

        public string RecurrenceRule { get; set; }

        public string RecurrenceException { get; set; }

        #endregion // ISchedulerEvent Members
    }
}