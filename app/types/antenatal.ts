

/* eslint-disable prettier/prettier */
import Bson from 'bson'

 type AntenatalProperties = {

    _id : string,

    state_id:string,

    lga_id: string,

    health_facility_id: string,

    actual_age: string,

    age: string,

    anemia: string,

    associated_problems: string,

    attendance_type: string,

    blood_pressure: string,

    client_names: string,

    date: string,

    dob: string,

    early_breast_feeding: string,

    exclusive_breast_feeding: string,

    family_planning: string,

    fgm: string,

    hepatitis_b_testing: string,

    hepatitis_b_treated: string,

    hepatitis_c_testing: string,

    hepatitis_c_treated: string,

    hiv_testing: string,

    ipt_greater_three: string,

    ipt_one: string,

    ipt_three: string,

    ipt_two: string,

    llin_given: string,

    maternal_nutrition: string,

    mothers_card_no: string,

    parity: string,

    pregnancy_age: string,

    protein: string,

    referral_reason: string,

    sugar_test_result: string,

    syphilis_testing: string,

    syphilis_treated: string,

    td: string,

    transportation: string,

    urinalysis_sugar: string,

    visit_outcome: string,

    visits: string,

    weight: string,

    createdBy : string,

}


export type AntenatalProps = {

     name :string

     primaryKey :string

     partitionKey:string

     properties : AntenatalProperties

}




