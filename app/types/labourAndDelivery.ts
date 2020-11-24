/* eslint-disable prettier/prettier */

export type LabourAndDeliveryProperties = {

       _id : string,

        health_facility_id: string,

        abortion: string,

        age: string,

        alive_status: string,

        baby_put_to_breast: string,

        child_delivery_by: string,

        client_card_number: string,

        client_names: string,

        baby_condition:string,

        live_status:string,

        client_type: string,

        cord_clamped_at: string,

        gel_applied : string,

        counselled : string,

        date: string,

        dead_status: string,

        decision_in_care: string,

        delivery_date: string,

        delivery_mode: string,

        delivery_time: string,

        exact_age: string,

        live_birth: string,

        maternal_complication_seen: string,

        mother_status: string,

        parity: string,

        partograph_used: string,

        postpartum_fm_planning: string,

        pregnant_women_admt_eclamptic: string,

        recieved_milsoprostol: string,

        recieved_oxytocin: string,

        sex_of_baby: string,

        still_birth: string,

        temp_at_one_hour: string,

        transportation_in: string,

        transportation_out_status: string,

        who_took_delivery_name: string,


        createdBy : string,

}


export type LabourAndDeliveryProps = {

     name : string,

     primaryKey : string,

     partitionKey: string,


     properties : LabourAndDeliveryProperties

}

