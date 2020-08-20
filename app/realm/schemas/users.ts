/* eslint-disable prettier/prettier */

import HealthCareFacilityUserTypes from '../../types/users'; // typescript type validation for healthcare staffs admins and none admins

const Users : HealthCareFacilityUserTypes = {

     name : "Users",

     properties : {

          fullName : "string",// user name can be optional

          role     : "string", // role of the user either super-admin or normal admin

          healthCareFacility : {type: 'linkingObjects', objectType: 'HealthCareFacility',property:"healthFacilityId"},

          user_id : "string",

          health_facility_id : 'string',

          password : 'string',

          email : 'string'


     }

}

export default Users;
