

/* eslint-disable prettier/prettier */


import {DeviceTYpes} from '../../types/devices'; // typescript type validation for daily attendance


const DeviceSchema : DeviceTYpes = {

  name : "devices",

  primaryKey: '_id',

  partitionKey:"health_facility_id",

  properties : {

        _id : 'objectId',

        health_facility_id: "string",

        device: 'string?',

        max_stock: "int?",

        date:"date?",

        min_stock: "int?",

        records: "string[]",

        state_id:"string?",

        lga_id: "string?",

  }

}



export default DeviceSchema;


