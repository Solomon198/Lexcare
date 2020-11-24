

/* eslint-disable prettier/prettier */


import {ImmunizationProps} from '../../types/immunization'; // typescript type validation for daily attendance


const Immunization : ImmunizationProps = {

  name : "immunization",

  primaryKey: '_id',

  partitionKey:"health_facility_id",

  properties : {

       _id : 'objectId',

       health_facility_id: "string",

       child_card_no: "string?",

       child_name: "string?",

       comment: "string?",

       date: "date",

       dob: "date?",

       followup_address: "string?",

       phone: "string?",

       sex: "string?",

       createdBy : "string",

  }

}



export default Immunization;


