/* eslint-disable prettier/prettier */

import { ImmunizationAefiTypes } from '../../types/immunizationAefi'; // typescript type validation for daily attendance

const ImmunizationAefiSchema: ImmunizationAefiTypes = {
  name: 'immunizationAefi',

  primaryKey: '_id',

  partitionKey: 'health_facility_id',

  properties: {
    _id: 'objectId',

    health_facility_id: 'string',

    date: 'date?',

    non_serious: 'int?',

    serious: 'int?',

    seri_cases_invtg: 'int?',

    alive: 'int?',

    dead: 'int?',

    state_id: 'string?',

    lga_id: 'string?',
  },
};

export default ImmunizationAefiSchema;
