/* eslint-disable prettier/prettier */

import ClientTypes from '../../types/clients'; // typescript types validation for client

const Clients : ClientTypes = {

     name : "Client",

     properties : {

      health_facility_id: "string",

      healthCareFacility : {type: 'linkingObjects', objectType: 'HealthCareFacility',property:"healthFacilityId"},

      client_id: "string",

      date:  "date",

      client_name: "string",

      client_card_number: "string",

      date_of_birth:  "date",

      sex: "string",

      age: "int",

      exact_age: "int",

      contact_address: "string",

      state_of_origin: "string",

      telephone_no: "string",

      first_contact_with_facility: "bool",

      reference_in: "string",

      next_of_kin_name: "string",

      kin_relationship_with_client: "string",

      kin_address: "string",

      kin_phone: "string",

      created_at: "date",

      updated_at: "date",

      created_by: {type: 'linkingObjects', objectType: 'Users',property:"user_id"},

      updated_by: {type: 'linkingObjects', objectType: 'Users',property:"user_id"},

     }

}


// array of date for client to reduce daily attendance redundancy ;

export default Clients;
