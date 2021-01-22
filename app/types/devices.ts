/* eslint-disable prettier/prettier */


type DeviceProperties = {

  _id : string,

  health_facility_id: string,

  device: string,

  max_stock: string,

  date:string,

  min_stock: string,

  records: any,

  state_id: string,

  lga_id: string

};

export type DeviceTYpes = {

  name :string

  primaryKey :string

  partitionKey:string

  properties : DeviceProperties

}
