/* eslint-disable prettier/prettier */

type ImmunizationRiProperties = {
  _id: string;

  health_facility_id: string;

  date: string;

  selectedFacility: string;

  selectedFacilityStaff: string;

  selectedMeetingConducted: string;

  planned: string;

  conducted: string;

  planned2: string;

  conducted2: string;

  national: string;

  ri_state: string;

  lga: string;

  amount_received: string;

  state_id: string;

  lga_id: string;
};

export type ImmunizationRiTypes = {
  name: string;

  primaryKey: string;

  partitionKey: string;

  properties: ImmunizationRiProperties;
};
