/* eslint-disable prettier/prettier */

import {TetanusProps} from '../../types/tetanus'; // typescript type validation for healthcare staffs admins and none admins

const Tetanus : TetanusProps = {

     name : "tetanus",

     primaryKey: '_id',

     partitionKey:"health_facility_id",

     properties : {

      _id : "objectId",

      health_facility_id: "string",

      card_no: "string?",

      client_name: "string?",

      date_of_birth: "date?",

      date_of_visit: "date",

      follow_up_address: "string?",

      phone_number: "string?",

      createdBy:"string",

      state_id:"string?",

      lga_id: "string?",




     }

}

export default Tetanus;
