
/* eslint-disable prettier/prettier */
import Bson from 'bson'

 type Services = {
  _id : string,

  health_facility_id: string,

  service_name:string,

  service_description:string,

  state_id:string,

  lga_id: string,


}


export  type ServicesProps = {

     name : string,

     primaryKey : string,

     partitionKey: string,

     properties : Services

}

