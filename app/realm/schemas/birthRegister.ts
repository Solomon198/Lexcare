

/* eslint-disable prettier/prettier */


import {BirthRegisterProps} from '../../types/birthRegister'; // typescript type validation for daily attendance


const BirthRegister : BirthRegisterProps = {

  name : "birthRegister",

  primaryKey: '_id',

  partitionKey:"health_facility_id",

  properties : {

        _id : 'objectId',

        health_facility_id: "string",

        certificate_collection_date: "string?",

        certificate_collector_name: "string?",

        certificate_no: "string?",

        child_reg_date: "date",

        childs_firstname: "string?",

        childs_other_name: "string?",

        childs_surname: "string?",

        date_b_certificate_issued: "string?",

        dob: "date?",

        fathers_fullname: "string?",

        fathers_state_of_origin: "string?",

        mothers_age: "int?",

        mothers_card_no: "string?",

        mothers_fullname: "string?",

        parent_residential_address: "string?",

        parents_phone_number: "string?",

        responsible_officer: "string?",

        sex: "string?",

        createdBy : "string",

        state_id:"string?",

        lga_id: "string?",



  }

}



export default BirthRegister;


