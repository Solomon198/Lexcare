/* eslint-disable prettier/prettier */

type EquipmentProperties = {
  _id: string;

  health_facility_id: string;

  device: string;

  date: string;

  records: any;

  state_id: string;

  lga_id: string;
};

export type EquipmentTypes = {
  name: string;

  primaryKey: string;

  partitionKey: string;

  properties: EquipmentProperties;
};
