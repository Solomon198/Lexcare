/* eslint-disable prettier/prettier */

import { EquipmentTypes } from '../../types/equipments'; // typescript type validation for daily attendance

const EquipmentSchema: EquipmentTypes = {
  name: 'equipments',

  primaryKey: '_id',

  partitionKey: 'health_facility_id',

  properties: {
    _id: 'objectId',

    health_facility_id: 'string',

    device: 'string?',

    date: 'date?',

    records: 'string[]',

    state_id: 'string?',

    lga_id: 'string?',
  },
};

export default EquipmentSchema;
