/* eslint-disable prettier/prettier */

import {AdministerVaccine} from '../../types/administerVaccine'; // typescript type validation for healthcare staffs admins and none admins

const AdministerVaccineSchema : AdministerVaccine = {

     name : "AdministerVaccine",

     primaryKey: '_id',

     partitionKey:"health_facility_id",

     properties : {

      _id : "objectId",

      health_facility_id: "string",

      child_card_no: "string",

      immunization_record_id:"objectId",


        hepB0:"string?",

        hepB0_date:"date?",

        hepB0_comment:"string?",


        opv0:"string?",

        opv0_date:"date?",

        opv0_comment:"string?",


        bcg:"string?",

        bcg_date:"date?",

        bcg_comment:"string?",


        opv1:"string?",

        opv1_date:"date?",

        opv1_comment:"string?",


        penta1:"string?",

        penta1_date:"date?",

        penta1_comment:"string?",


        pcv1:"string?",

        pcv1_date:"date?",

        pcv1_comment:"string?",


        rota1:"string?",

        rota1_date:"date?",

        rota1_comment:"string?",





        // limit 2


        opv2:"string?",

        opv2_date:"date?",

        opv2_comment:"string?",


        penta2:"string?",

        penta2_date:"date?",

        penta2_comment:"string?",


        pcv2:"string?",

        pcv2_date:"date?",

        pcv2_comment:"string?",


        rota2:"string?",

        rota2_date:"date?",

        rota2_comment:"string?",


        opv3:"string?",

        opv3_date:"date?",

        opv3_comment:"string?",


        penta3:"string?",

        penta3_date:"date?",

        penta3_comment:"string?",




        pcv3:"string?",

        pcv3_date:"date?",

        pcv3_comment:"string?",





                // lkmimt 3



        rota3:"string?",

        rota3_date:"date?",

        rota3_comment:"string?",


        ipv:"string?",

        ipv_date:"date?",

        ipv_comment:"string?",


        vitaminA:"string?",

        vitaminA_date:"date?",

        vitaminA_comment:"string?",


        measles1:"string?",

        measles1_date:"date?",

        measles1_comment:"string?",


        yellowfever:"string?",

        yellowfever_date:"date?",

        yellowfever_comment:"string?",


        menA:"string?",

        menA_date:"date?",

        menA_comment:"string?",


        measles2:"string?",

        measles2_date:"date?",

        measles2_comment:"string?",





        hpv:"string?",

        hpv_date:"date?",

        hpv_comment:"string?",






     }

}

export default AdministerVaccineSchema;
