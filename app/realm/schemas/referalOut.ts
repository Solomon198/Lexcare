

/* eslint-disable prettier/prettier */


import { RefreralOutProps} from '../../types/referalOut'; // typescript type validation for daily attendance


const Client : RefreralOutProps = {

  name : "referalOut",

  primaryKey: '_id',

  partitionKey:"health_facility_id",

  properties : {

      _id : 'objectId',

       health_facility_id: "string",

       age: "int?",

      any_referal_documents: "string?",

      client_address:"string?",

      client_name: "string?",

      clinical_history: "string?",

      findings_diagnosis: "string?",

      identity_number: "string?",

      initiating_facility_address: "string?",

      initiating_facility_name: "string?",

      initiating_facility_oic_name: "string?",

      initiating_facility_telephone_used: "string?",

      initiating_facility_transportation_arrangement: "string?",

      reason_for_referal: "string?",

      referal_date: "date",

      refered_by_designation: "string?",

      refered_by_name: "string?",

      refered_to_facility_address: "string?",

      refered_to_facility_name: "string?",

      sex: "string?",

      treatment_given: "string?",

      createdBy : "string",

      state_id:"string?",

      lga_id: "string?",



  }

}



export default Client;


