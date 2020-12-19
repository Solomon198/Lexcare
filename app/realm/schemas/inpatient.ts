
/* eslint-disable prettier/prettier */


import {InPatientProps} from '../../types/inpatient'; // typescript type validation for daily attendance


const InPatient : InPatientProps = {

  name : "inpatient",

  primaryKey: '_id',

  partitionKey:"health_facility_id",

  properties : {

        _id : 'objectId',

        health_facility_id: "string",

        addmission_outcome: "string?",

        age: "string?",

        card_number: "string?",

        client_names: "string?",

        date: "date",

        diagnosis: "string[]",

        dob: "date?",

        drugs_given: "string?",

        investigation: "string?",

        sex: "string?",

        createdBy : "string",

        state_id:"string?",

        lga_id: "string?",

  }

}



export default InPatient;


