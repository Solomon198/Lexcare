

/* eslint-disable prettier/prettier */

type OutpatientProperties = {

  _id : string,

  health_facility_id: string,

  act: string,

  age: string,

  bmi_weight: string,

  card_number: string,

  client_name: string,

  clinical_diagnosis: string,

  clinical_scored: string,

  clinical_screening_score: string,

  clinically_screened: string,

  complaint: string,

  date: string,

  date_of_birth: string,

  diagnosis: string,

  drugs_given: string,

  gbv: string,

  gbv_refered: string,

  height: string,

  microscopy: string,

  other_anti_maleria: string,

  post_gbv: string,

  pre_referal_treatment: string,

  rdt: string,

  refered_or_treated: string,

  result_hepatitis_screening: string,

  result_hepatitis_test: string,

  severe_maleria: string,

  sex: string,

  tested_hepatitis: string,

  type_of_attendance: string,

  type_of_investigation: string,

  visit_outcome: string,

  weight: string,

  createdBy : string,

}


export type OutPatientProps = {

     name :string

     primaryKey :string

     partitionKey:string

     properties : OutpatientProperties

}




