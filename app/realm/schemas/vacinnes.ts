

/* eslint-disable prettier/prettier */


import {VacinnesTypes} from '../../types/vaccines'; // typescript type validation for daily attendance


const VaccineSchema : VacinnesTypes = {

  name : "vaccines",

  primaryKey: '_id',

  partitionKey:"health_facility_id",

  properties : {

        _id : 'objectId',

        health_facility_id: "string",

        vaccine: 'string?',

        max_stock: "int?",

        date:"date?",

        min_stock: "int?",

        records: "string[]",

        state_id:"string?",

        lga_id: "string?",

  }

}



export default VaccineSchema;


