/* eslint-disable prettier/prettier */

import { DosesDiscardedTypes } from '../../types/dosesDiscarded'; // typescript type validation for daily attendance

const DosesDiscardedSchema: DosesDiscardedTypes = {
  name: 'dosesDiscarded',

  primaryKey: '_id',

  partitionKey: 'health_facility_id',

  properties: {
    _id: 'objectId',

    health_facility_id: 'string',

    antigen_diluent: 'string?',

    date: 'date?',

    records: 'string[]',

    state_id: 'string?',

    lga_id: 'string?',
  },
};

export default DosesDiscardedSchema;
