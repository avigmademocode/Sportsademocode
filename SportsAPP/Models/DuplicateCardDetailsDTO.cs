using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SportsAPP.Models
{
    public class DuplicateCardDetailsDTO
    {
        public Int64 pkey_duplicate_id { get; set; }
        public Int64 member_id { get; set; }
        public String expiry_date { get; set; }
        public int no_of_count { get; set; }
        public Int64 UserID { get; set; }
        public int IsDeleted { get; set; }

        public int Type { get; set; }
    }
}