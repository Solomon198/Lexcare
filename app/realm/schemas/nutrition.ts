
/* eslint-disable prettier/prettier */


import {NutritionProps} from '../../types/nutrition'; // typescript type validation for daily attendance


const Nutrition : NutritionProps = {

  name : "nutrition",

  primaryKey: '_id',

  partitionKey:"health_facility_id",

  properties : {

        _id : 'objectId',

        health_facility_id: "string",

        age_in_months: "string?",

        bilateral_oedema: "string?",

        card_number: "string?",

        client_name: "string?",

        complimentary_feeding: "string?",

        date: "date",

        date_of_birth: "date?",

        deworming: "string?",

        eligibility_for_otp: "string?",

        growth_according_to_health: "string?",

        height: "int?",

        infant_feeding: "string?",

        micronutrient_powder: "string?",

        muac: "string?",

        outcome_of_treament: "string?",

        outcome_treatment: "date?",

        referred_support: "string?",

        sex: "string?",

        source_of_referral: "string?",

        unknown: "string?",

        visit_type: "string?",

        vitamin_a_suplement: "string?",

        weight: "int?",

        createdBy : "string",

  }

}



export default Nutrition;


