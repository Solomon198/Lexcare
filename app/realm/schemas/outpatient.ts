
/* eslint-disable prettier/prettier */


import {OutPatientProps} from '../../types/outpatient'; // typescript type validation for daily attendance


const OutPatient : OutPatientProps = {

  name : "outpatient",

  primaryKey: '_id',

  partitionKey:"health_facility_id",

  properties : {

        _id : 'objectId',

        health_facility_id: "string",

        act: "string",

        age: "string",

        bmi_weight: "int",

        card_number: "string",

        client_name: "string",

        clinical_diagnosis: "string",

        clinical_scored: "string",

        clinical_screening_score: "string",

        clinically_screened: "string",

        complaint: "string",

        date: "date",

        date_of_birth: "date",

        diagnosis: "string[]",

        drugs_given: "string",

        gbv: "string",

        gbv_refered: "string",

        height: "int",

        microscopy: "string",

        other_anti_maleria: "string",

        post_gbv: "string",

        pre_referal_treatment: "string",

        rdt: "string",

        refered_or_treated: "string",

        result_hepatitis_screening: "string",

        result_hepatitis_test: "string",

        severe_maleria: "string",

        sex: "string",

        tested_hepatitis: "string",

        type_of_attendance: "string",

        type_of_investigation: "string",

        visit_outcome: "string",

        weight: "int",

        createdBy : "string",

  }

}



export default OutPatient;


