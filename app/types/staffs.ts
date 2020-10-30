/* eslint-disable prettier/prettier */


type PHC_STAFFS = {

  name : string,

  primaryKey: string,

  partitionKey:string,

  properties: {

      _id : string,

      role : string,

      full_name  : string,

      health_facility_id : string ,

      phone_number:string,

      staff_id : string,

      email:string,

      salt : string,

      hash : string,




  }

};


export default PHC_STAFFS;
