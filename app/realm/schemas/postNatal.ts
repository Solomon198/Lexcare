

/* eslint-disable prettier/prettier */


import {PostNatalProps} from '../../types/postNatal'; // typescript type validation for daily attendance


const PostNatal : PostNatalProps = {

  name : "postNatal",

  primaryKey: '_id',

  partitionKey:"health_facility_id",

  properties : {

      _id : 'objectId',

       health_facility_id: "string",

       age: "string?",

       associated_problems: "string?",

       client_card_number: "string?",

       client_names: "string?",

       date: "date",

       exact_age: "string?",

       hb_pvc_test: "string?",

       kmc: "string?",

       maternal_care: "string[]",

       mother: "string?",

       neonatal_complications: "string[]",

       newborn: "string?",

       outcome_of_visit: "string?",

       parity: "int?",

       pnc_clinic_attendance: "string?",

       ro_reason: "string?",

       servies: "string[]",

       sex_of_child: "string?",

       transportation_out: "string?",

       urinal_test_result: "string?",

       createdBy : "string",

       state_id:"string?",

       lga_id: "string?",



  }

}



export default PostNatal;


