/* eslint-disable prettier/prettier */

type DosesDiscardedProperties = {
  _id: string;

  health_facility_id: string;

  antigen_diluent: string;

  date: string;

  records: any;

  state_id: string;

  lga_id: string;
};

export type DosesDiscardedTypes = {
  name: string;

  primaryKey: string;

  partitionKey: string;

  properties: DosesDiscardedProperties;
};
