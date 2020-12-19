/* eslint-disable prettier/prettier */


type TetanusProperties = {

  _id : string,

  health_facility_id: string,

  card_no: string,

  client_name: string,

  date_of_birth: string,

  date_of_visit: string,

  follow_up_address: string,

  phone_number: string,

  createdBy:string,

  state_id:string,

  lga_id: string,





};

export type TetanusProps = {

  name :string

  primaryKey :string

  partitionKey:string

  properties : TetanusProperties

}
