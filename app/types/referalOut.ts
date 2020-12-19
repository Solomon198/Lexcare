
/* eslint-disable prettier/prettier */
import Bson from 'bson'

 type ReferalOut = {
  _id : string,


  health_facility_id: string,

  age: string,

  any_referal_documents: string,

  state_id:string,

  lga_id: string,

  client_address:string,

  client_name: string,

  clinical_history: string,

  findings_diagnosis: string,

  identity_number: string,

  initiating_facility_address: string,

  initiating_facility_name: string,

  initiating_facility_oic_name: string,

  initiating_facility_telephone_used: string,

  initiating_facility_transportation_arrangement: string,

  reason_for_referal: string,

  referal_date: string,

  refered_by_designation: string,

  refered_by_name: string,

  refered_to_facility_address: string,

  refered_to_facility_name: string,

  sex: string,

  treatment_given: string,

  createdBy : string


}


export type RefreralOutProps = {

     name : string,

     primaryKey : string,

     partitionKey: string,

     properties : ReferalOut

}

