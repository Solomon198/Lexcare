

/* eslint-disable prettier/prettier */


import {LabourAndDeliveryProps} from '../../types/labourAndDelivery';


const LabourAndDelivery : LabourAndDeliveryProps = {

  name : "labourAndDelivery",

  primaryKey: '_id',

  partitionKey:"health_facility_id",

  properties : {

        _id : 'objectId',

        health_facility_id: "string",

        abortion: "string?",

        age: "string?",

        alive_status: "string?",

        baby_put_to_breast: "string?",

        child_delivery_by: "string?",

        client_card_number: "string?",

        client_names: "string?",

        client_type: "string?",

        cord_clamped_at: "string?",

        date: "date",

        dead_status: "string?",

        decision_in_care: "string?",

        delivery_date: "date?",

        delivery_mode: "string?",

        delivery_time: "string?",

        exact_age: "int?",

        live_birth: "string?",

        maternal_complication_seen: "string?",

        mother_status: "string?",

        parity: "int?",

        partograph_used: "string?",

        postpartum_fm_planning: "string?",

        pregnant_women_admt_eclamptic: "string?",

        recieved_milsoprostol: "string?",

        recieved_oxytocin: "string?",

        sex_of_baby: "string?",

        still_birth: "string?",

        temp_at_one_hour: "string?",

        transportation_in: "string?",

        transportation_out_status: "string?",

        who_took_delivery_name: "string?",

        baby_condition : "string[]",

        gel_applied : "string?",

        counselled : "string?",

        live_status : "string[]",

        createdBy : "string",

  }

}



export default LabourAndDelivery;


