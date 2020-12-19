
/* eslint-disable prettier/prettier */


import {OutPatientProps} from '../../types/outpatient'; // typescript type validation for daily attendance


const OutPatient : OutPatientProps = {

  name : "outpatient",

  primaryKey: '_id',

  partitionKey:"health_facility_id",

  properties : {

        _id : 'objectId',

        health_facility_id: "string",

        act: "string?",

        age: "string?",

        bmi_weight: "int?",

        card_number: "string?",

        client_name: "string?",

        clinical_diagnosis: "string?",

        clinical_scored: "string?",

        clinical_screening_score: "string?",

        clinically_screened: "string?",

        complaint: "string?",

        date: "date",

        date_of_birth: "date?",

        diagnosis: "string[]",

        drugs_given: "string?",

        gbv: "string?",

        gbv_refered: "string?",

        height: "int?",

        microscopy: "string?",

        other_anti_maleria: "string?",

        post_gbv: "string?",

        pre_referal_treatment: "string?",

        rdt: "string?",

        refered_or_treated: "string?",

        ro_reason: "string?",

        tested_hepatitis_b : "string?",

        result_hepatitis_b_test: "string?",

        hepatitis_b_refered_or_treated:"string?",

        tested_hepatitis_c : "string?",

        result_hepatitis_c_test: "string?",

        hepatitis_c_refered_or_treated:"string?",

        severe_maleria: "string?",

        sex: "string?",

        type_of_attendance: "string?",

        type_of_investigation: "string?",

        visit_outcome: "string?",

        weight: "int?",

        createdBy : "string?",

        state_id:"string?",

        lga_id: "string?",

  }

}



export default OutPatient;


