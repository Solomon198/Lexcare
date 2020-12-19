/* eslint-disable prettier/prettier */

 type NutritionProperties = {

      _id : string,

      health_facility_id: string,

      state_id:string,

      lga_id: string,

      age_in_months: string,

      bilateral_oedema: string,

      card_number: string,

      client_name: string,

      complimentary_feeding: string,

      date: string,

      date_of_birth: string,

      deworming: string,

      eligibility_for_otp: string,

      growth_according_to_health: string,

      height: string,

      infant_feeding: string,

      micronutrient_powder: string,

      muac: string,

      outcome_of_treament: string,

      outcome_treatment: string,

      referred_support: string,

      sex: string,

      source_of_referral: string,

      unknown: string,

      visit_type: string,

      vitamin_a_suplement: string,

      weight: string,

      createdBy : string,


}


export type NutritionProps = {

     name : string,

     primaryKey : string,

     partitionKey: string,

     properties : NutritionProperties

}

