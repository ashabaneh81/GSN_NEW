using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ErpDal
{
    public class Db
    {
        public static DbModel Get()
        {
            return new DbModel();
        }
    }
}
