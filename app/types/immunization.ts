/* eslint-disable prettier/prettier */
import Bson from 'bson'

export type ImmunizationProperties = {

      _id : string,

       health_facility_id: string,

       child_card_no: string,

       child_name: string,

       comment: string,

       date: string,

       dob: string,

       followup_address: string,

       phone: string,

       sex: string,

       createdBy : string,


}


export type ImmunizationProps = {

     name : string,

     primaryKey : string,

     partitionKey: string,


     properties : ImmunizationProperties

}

