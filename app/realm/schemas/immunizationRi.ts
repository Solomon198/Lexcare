/* eslint-disable prettier/prettier */

import { ImmunizationRiTypes } from '../../types/immunizationRi'; // typescript type validation for daily attendance

const ImmunizationRiSchema: ImmunizationRiTypes = {
  name: 'immunizationRi',

  primaryKey: '_id',

  partitionKey: 'health_facility_id',

  properties: {
    _id: 'objectId',

    health_facility_id: 'string',

    date: 'date?',

    selectedFacility: 'string?',

    selectedFacilityStaff: 'string?',

    selectedMeetingConducted: 'string?',

    planned: 'int?',

    conducted: 'int?',

    planned2: 'int?',

    conducted2: 'int?',

    national: 'int?',

    ri_state: 'int?',

    lga: 'int?',

    amount_received: 'int?',

    state_id: 'string?',

    lga_id: 'string?',
  },
};

export default ImmunizationRiSchema;
