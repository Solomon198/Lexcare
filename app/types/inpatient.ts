

/* eslint-disable prettier/prettier */

 type InpatientProperties = {

  _id : string,

  health_facility_id: string,

  addmission_outcome: string,

  age: string,

  card_number: string,

  client_names: string,

  date: string,

  disease: string,

  dob: string,

  drugs_given: string,

  investigation: string,

  sex: string,

  createdBy : string,


}


export type InPatientProps = {

     name :string

     primaryKey :string

     partitionKey:string

     properties : InpatientProperties

}



