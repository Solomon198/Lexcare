/* eslint-disable prettier/prettier */

import PHC_STAFFS from '../../types/staffs'; // typescript type validation for healthcare staffs admins and none admins

const STAFFS : PHC_STAFFS = {

     name : "phcStaff",

     primaryKey: '_id',

     partitionKey:"health_facility_id",

     properties : {

      _id : "objectId",

      full_name: "string",

      health_facility_id: "string",

      phone_number: "string",

      role: "string",

      email:"string",

      staff_id: "string",

      hash : "string",

      salt : "string"




     }

}

export default STAFFS;
