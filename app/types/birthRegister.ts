/* eslint-disable prettier/prettier */
import Bson from 'bson'

 type BirthRegisterProperties = {

  _id : string,

  health_facility_id: string,

  certificate_collection_date: string,

  certificate_collector_name: string,

  certificate_no: string,

  child_reg_date: string,

  childs_firstname: string,

  childs_other_name: string,

  childs_surname: string,

  date_b_certificate_issued: string,

  dob: string,

  fathers_fullname: string,

  fathers_state_of_origin: string,

  mothers_age: string,

  mothers_card_no: string,

  mothers_fullname: string,

  parent_residential_address: string,

  parents_phone_number: string,

  responsible_officer: string,

  sex: string,

  createdBy : string,


}


export type BirthRegisterProps = {

     name : string,

     primaryKey : string,

     partitionKey: string,

     properties : BirthRegisterProperties

}

