/* eslint-disable prettier/prettier */

import {ServicesProps} from '../../types/Services'; // typescript type validation for healthcare staffs admins and none admins

const Services : ServicesProps = {

     name : "services",

     primaryKey: '_id',

     partitionKey:"health_facility_id",

     properties : {

      _id : "objectId",

      health_facility_id:"string",

      service_description:"string?",

      service_name: "string?",

      state_id:"string?",

      lga_id: "string?",

     }

}

export default Services;
