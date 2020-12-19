

/* eslint-disable prettier/prettier */

type PostNatalProperties = {

       _id : string,

       health_facility_id: string,

       age: string,

       associated_problems: string,

       client_card_number: string,

       state_id:string,

       lga_id: string,

       client_names: string,

       date: string,

       exact_age: string,

       hb_pvc_test: string,

       kmc: string,

       maternal_care: string,

       mother: string,

       neonatal_complications: string,

       newborn: string,

       outcome_of_visit: string,

       parity: string,

       pnc_clinic_attendance: string,

       ro_reason: string,

       servies: string,

       sex_of_child: string,

       transportation_out: string,

       urinal_test_result: string,

       createdBy : string


}


export type PostNatalProps = {

     name :string

     primaryKey :string

     partitionKey:string

     properties : PostNatalProperties

}




