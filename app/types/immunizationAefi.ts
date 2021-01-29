/* eslint-disable prettier/prettier */

type ImmunizationAefiProperties = {
  _id: string;

  health_facility_id: string;

  date: string;

  non_serious: string;

  serious: string;

  seri_cases_invtg: string;

  alive: string;

  dead: string;

  state_id: string;

  lga_id: string;
};

export type ImmunizationAefiTypes = {
  name: string;

  primaryKey: string;

  partitionKey: string;

  properties: ImmunizationAefiProperties;
};
