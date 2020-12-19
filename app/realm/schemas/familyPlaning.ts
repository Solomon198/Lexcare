
/* eslint-disable prettier/prettier */


import {FamilyPlaningProps} from '../../types/familyplaning'; // typescript type validation for daily attendance


const FamilyPlaning : FamilyPlaningProps = {

  name : "familyPlaning",

  primaryKey: '_id',

  partitionKey:"health_facility_id",

  properties : {

        _id : 'objectId',

        health_facility_id: "string",

        age: "string?",

        blood_pressure: "string?",

        client_card_number: "string?",

        client_name: "string?",

        condom_na: "string?",

        condom_qty: "string?",

        condom_rv: "string?",

        condom_type: "string?",

        contraception: "string?",

        counselled_fp: "string?",

        counselled_ppfp: "string?",

        cycles_quantity: "int?",

        date: "date",

        natural_methods_cb : "string[]",

        natural_methods_others:"string[]",

        natural_methods_referal: "string[]",

        dob: "date?",

        followup_address: "string?",

        fp_client_type: "string?",

        implants_in: "string?",

        implants_out: "string?",

        implants_type: "string?",

        injectable_na: "string?",

        injectable_name: "string?",

        injectable_rv: "string?",

        iud_in_na: "string?",

        iud_in_rv: "string?",

        iud_out: "string?",

        modern_fp: "string?",

        new_acceptor: "string?",

        oral_pill_name: "string?",

        parity: "int?",

        phone_number: "string?",

        referral_source: "string?",

        revisit: "string?",

        self_injectibles_name: "string?",

        sex: "string?",

        type_of_iud: "string?",

        voluntary_sterilization: "string?",

        weight: "int?",

        createdBy : "string",

        state_id:"string?",

        lga_id: "string?",
  }

}



export default FamilyPlaning;


