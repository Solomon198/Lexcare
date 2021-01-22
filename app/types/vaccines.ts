/* eslint-disable prettier/prettier */


type VaccinesProperties = {

  _id : string,

  health_facility_id: string,

  vaccine: string,

  max_stock: string,

  date:string,

  min_stock: string,

  records: any,

  state_id: string,

  lga_id: string

};

export type VacinnesTypes = {

  name :string

  primaryKey :string

  partitionKey:string

  properties : VaccinesProperties

}
