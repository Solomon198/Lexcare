/* eslint-disable prettier/prettier */


type AdministerVaccineProps = {

  _id : string,

  health_facility_id: string,

  child_card_no: string,

  immunization_record_id:string,


  hepB0:string,

  hepB0_date:string,

  hepB0_comment:string,


  opv0:string,

  opv0_date:string,

  opv0_comment:string,


  bcg:string,

  bcg_date:string,

  bcg_comment:string,


  opv1:string,

  opv1_date:string,

  opv1_comment:string,


  penta1:string,

  penta1_date:string,

  penta1_comment:string,


  pcv1:string,

  pcv1_date:string,

  pcv1_comment:string,


  rota1:string,

  rota1_date:string,

  rota1_comment:string,


  opv2:string,

  opv2_date:string,

  opv2_comment:string,


  penta2:string,

  penta2_date:string,

  penta2_comment:string,


  pcv2:string,

  pcv2_date:string,

  pcv2_comment:string,


  rota2:string,

  rota2_date:string,

  rota2_comment:string,


  opv3:string,

  opv3_date:string,

  opv3_comment:string,


  penta3:string,

  penta3_date:string,

  penta3_comment:string,


  pcv3:string,

  pcv3_date:string,

  pcv3_comment:string,


  rota3:string,

  rota3_date:string,

  rota3_comment:string,


  ipv:string,

  ipv_date:string,

  ipv_comment:string,


  vitaminA:string,

  vitaminA_date:string,

  vitaminA_comment:string,


  measles1:string,

  measles1_date:string,

  measles1_comment:string,


  yellowfever:string,

  yellowfever_date:string,

  yellowfever_comment:string,


  menA:string,

  menA_date:string,

  menA_comment:string,


  measles2:string,

  measles2_date:string,

  measles2_comment:string,

  hpv:string,

  hpv_date:string,

  hpv_comment:string,



};

export type AdministerVaccine = {

  name :string

  primaryKey :string

  partitionKey:string

  properties : AdministerVaccineProps

}
