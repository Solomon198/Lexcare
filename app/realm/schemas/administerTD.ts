/* eslint-disable prettier/prettier */

import {AdministerTetanusProps} from '../../types/administerTD'; // typescript type validation for healthcare staffs admins and none admins

const AdministerTetanusSchema : AdministerTetanusProps = {

     name : "TetanusAdministration",

     primaryKey: '_id',

     partitionKey:"health_facility_id",

     properties : {


      _id : "objectId",

      health_facility_id: "string",

      card_no: "string",

      tetanus_record_id: "objectId",

      state_id:"string?",

      lga_id: "string?",

      td1:"string?",

      td1_date:"date?",

      td1_comment:"string?",

      td2:"string?",

      td2_date:"date?",

      td2_comment:"string?",

      td3:"string?",

      td3_date:"date?",

      td3_comment:"string?",

      td4:"string?",

      td4_date:"date?",

      td4_comment:"string?",

      td5:"string?",

      td5_date:"date?",

      td5_comment:"string?",





     }

}

export default AdministerTetanusSchema;
