/* eslint-disable prettier/prettier */


type AdministerTetanusProperties = {

  _id : string,

  health_facility_id: string,

  card_no: string,

  tetanus_record_id:string,

  td1:string,

  td1_date:string,

  td1_comment:string,

  td2:string,

  td2_date:string,

  td2_comment:string,

  td3:string,

  td3_date:string,

  td3_comment:string,

  td4:string,

  td4_date:string,

  td4_comment:string,

  td5:string,

  td5_date:string,

  td5_comment:string,

  state_id:string,

  lga_id: string,


};

export type AdministerTetanusProps = {

  name :string

  primaryKey :string

  partitionKey:string

  properties : AdministerTetanusProperties

}
