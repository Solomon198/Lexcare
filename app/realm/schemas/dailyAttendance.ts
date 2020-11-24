/* eslint-disable prettier/prettier */


import {DailyAttendanceTypes} from '../../types/dailyAttendance'; // typescript type validation for daily attendance


const DailyAttendance : DailyAttendanceTypes = {

  name : "dailyAttendance",

  primaryKey: '_id',

  partitionKey:"health_facility_id",

  properties : {

      _id : 'objectId',

       health_facility_id: "string",

       date: "date",

       client_name: "string?",

       client_card_number: "string?",

       date_of_birth: "date?",

       sex: "string?",

       age: "string?",

       exact_age: "int?",

       contact_address: "string?",

       state_of_origin: "string?",

       telephone_no: "string?",

       first_contact_with_facility: "string?",

       reference_in: "string?",

       next_of_kin_name: "string?",

       kin_relationship_with_client: "string?",

       kin_address: "string?",

       kin_phone: "string?",

       createdBy : "string"


  }

}



export default DailyAttendance;


