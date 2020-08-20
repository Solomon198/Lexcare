/* eslint-disable prettier/prettier */
import Bson from 'bson'

export type dailyAttendanceProperties = {

  health_facility_id: string,

  _id : string,

  // healthCareFacility: unknown,

  // client_id: string,

  // client : unknown,

  date: any,

  client_name: string,

  client_card_number: string,

  date_of_birth: string,

  sex: string,

  age: string,

  exact_age: string,

  contact_address: string,

  state_of_origin: string,

  telephone_no: string,

  first_contact_with_facility: string,

  reference_in: string,

  next_of_kin_name: string,

  kin_relationship_with_client: string,

  kin_address: string,

  kin_phone: string,

  // created_at: string,

  // updated_at: string,

  // created_by: unknown,

  // updated_by: unknown,

}


export type DailyAttendanceTypes = {

     name : string,

     primaryKey : string,

     properties : dailyAttendanceProperties

}

