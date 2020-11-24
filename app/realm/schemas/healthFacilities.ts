/* eslint-disable prettier/prettier */

import HealthCareFacilityTypes from '../../types/healthFacility'; // typescript type validation for health facility

const healthFacility : HealthCareFacilityTypes = {

     name : "HealthCareFacility",

     properties : {

          healthCareFacilityName : "string",

          health_facility_id : "string",

          state : "string?",

          lga : "string?",

          ward : "string?",

          zone : "string?",

     }

}

export default healthFacility;
