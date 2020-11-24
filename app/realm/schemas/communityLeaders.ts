



/* eslint-disable prettier/prettier */

type CommunityLeadersProperties = {
   _id : string,

   health_facility_id: string,

   email:string,

   full_name : string,

   home_address:string,

   phone_number:string,

   leader_id:string
}

type CommunityLeadersProps = {
   name : string,

   primaryKey: string,

   partitionKey: string,

   properties:CommunityLeadersProperties


}



const CommunityLeaders : CommunityLeadersProps = {

  name : "communityLeaders",

  primaryKey: '_id',

  partitionKey:"health_facility_id",

  properties : {

       _id : 'objectId',

       leader_id: "string",

       health_facility_id: "string",

       email: "string?",

       full_name: "string?",

       home_address: "string?",

       phone_number: "string?",

  }

}



export default CommunityLeaders;


