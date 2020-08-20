/* eslint-disable prettier/prettier */


type HealthFacilityUsers = {

  name : string,

  properties: {

      role : string,

      email : string,

      fullName?  : string,

      health_facility_id : string,

      user_id : string,

      healthCareFacility : unknown ,

      password : string,


  }

};


export default HealthFacilityUsers;
