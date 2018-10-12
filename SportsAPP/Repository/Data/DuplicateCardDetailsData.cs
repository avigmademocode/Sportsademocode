using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using SportsAPP.Repository.Lib;
using SportsAPP.Models;

namespace SportsAPP.Repository.Data
{
    public class DuplicateCardDetailsData
    {
        MyDataSourceFactory obj = new MyDataSourceFactory();

        public List<dynamic> AddDuplicateCardDetails(DuplicateCardDetailsDTO duplicateCardDetailsDTO)
        {
            String insertProcedure = "[CRUD_Duplicate_CardMaster]";
            Dictionary<string, string> input_parameters = new Dictionary<string, string>();

            input_parameters.Add("@pkey_duplicate_id", 1 + " #bigint# " + duplicateCardDetailsDTO.pkey_duplicate_id);
            input_parameters.Add("@member_id ", 1 + " # bigint# " + duplicateCardDetailsDTO.member_id);
            input_parameters.Add("@expiry_date", 1 + " #datetime# " + duplicateCardDetailsDTO.expiry_date);
            input_parameters.Add("@no_of_count", 1 + "#int#" + duplicateCardDetailsDTO.no_of_count);

            input_parameters.Add("@UserID ", 1 + " #bigint# " + duplicateCardDetailsDTO.UserID);
            input_parameters.Add("@IsDeleted ", 1 + "#int#" + duplicateCardDetailsDTO.IsDeleted);
            input_parameters.Add("@Type", 1 + "#int#" + duplicateCardDetailsDTO.Type);
            input_parameters.Add("@pkey_duplicate_idOut", 2 + "#int#" + null);
            input_parameters.Add("@ReturnValue", 2 + "#int#" + null);

            return obj.SqlCRUD(insertProcedure, input_parameters);


        }


    }
}