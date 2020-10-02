
import Schemas from '../schemas/index'

import {dailyAttendanceProperties} from '../../types/dailyAttendance';

import BSON from 'bson';

import Realm from 'realm';

import Auth from '../queries/auth';

import {showToast} from '../utils/utilsUI'

import {getObjectId,hashPassword,generateRandomByte} from '../utils/utils'

import {_APP_INSTANCE_, _DATA_BASE_INSTACE_} from './dbConfig';

import {documentExist, getPHC_configSettings} from './readQueries';





export async function createCommunityLeader(documents:any){

  try{


    documents._id = getObjectId();


    documents.health_facility_id = getPHC_configSettings().phc_id

    documents.leader_id = generateRandomByte();


    const leaderExist = documentExist(`email = "${documents.email}"`,Schemas.CommunityLeaders.name);

    if(leaderExist) {

      showToast("Email Already exist !!!")

      return new Error("Email aready In use");

    }else{

      const realm = _DATA_BASE_INSTACE_;


      realm.write(()=>{

          realm.create(Schemas.CommunityLeaders.name,documents);

       })

    }


   return "success";

  }catch(e){
     console.log(e)
     return e;

  }
}




export async function createPHC_Staff(documents:any){

  try{


    documents._id = getObjectId();

    let creds = hashPassword(documents.password);

    delete documents.password;

    documents.health_facility_id = getPHC_configSettings().phc_id

    documents.salt = creds.salt;

    documents.hash  = creds.hash;

    documents.staff_id = generateRandomByte();



    const realm =  new Realm({
      schema:[

        Schemas.BirthRegister,

        Schemas.DailyAttendanceSchema,

        Schemas.StaffSchema,

        Schemas.ClientSchema,

        Schemas.CommunityLeaders,

        Schemas.ReferalOut,

        Schemas.Antenatal,

        Schemas.FamilyPlaning,

        Schemas.Inpatient,

        Schemas.LabourAndDelivery,

        Schemas.PostNatal,

        Schemas.Immunization,

        Schemas.OutPatient,

        Schemas.Nutrition,

        Schemas.Tetanus,


      ],
      sync:{
          user : _APP_INSTANCE_.currentUser,
          partitionValue : getPHC_configSettings().phc_id,
      }
    });


     realm.write(()=>{

         realm.create(Schemas.StaffSchema.name,documents);

   })


   console.log("writing sucess")

   return "success";

  }catch(e){
     console.log(e)
     return e;

  }
}



export async  function createDailyAttendance(document:any){

      try{

          const realm = _DATA_BASE_INSTACE_

          document['client_name'] = document.first_name + " " + document.last_name;

          delete document.first_name;

          delete document.last_name;

          document["date_of_birth"]  = new Date(document.date_of_birth);

          document['health_facility_id'] = getPHC_configSettings().phc_id;

          document["createdBy"]  = Auth.getCurrentUser().staff_id

          document.date = new Date(document.date);

          document._id = new BSON.ObjectID();

           const check = documentExist(`client_card_number = "${document.client_card_number}"`,Schemas.ClientSchema.name);

           realm.write(()=>{



           if(check){
               const getClientDailyRecords = realm.objects(Schemas.DailyAttendanceSchema.name).filtered('client_card_number = $0',document.client_card_number);

               getClientDailyRecords.forEach((client:any)=>{
                  client.age = document.age;
                  client.client_name = document.client_name;
                  client.contact_address = document.contact_address;
                  client.date_of_birth = document.date_of_birth;
                  client.exact_age = document.exact_age;
                  client.telephone_no = document.telephone_no;
                  client.kin_address = document.kin_address;
                  client.kin_phone = document.kin_phone;
                  client.kin_relationship_with_client = document.kin_relationship_with_client;
                  client.next_of_kin_name = client.next_of_kin_name;
               });

               const clientFound = realm.objects(Schemas.ClientSchema.name).filtered('client_card_number = $0',document.client_card_number);

               clientFound.forEach((client:any)=>{
                    client.age = document.age;
                    client.client_name = document.client_name;
                    client.contact_address = document.contact_address;
                    client.date_of_birth = document.date_of_birth;
                    client.exact_age = document.exact_age;
                    client.telephone_no = document.telephone_no;
                    client.kin_address = document.kin_address;
                    client.kin_phone = document.kin_phone;
                    client.kin_relationship_with_client = document.kin_relationship_with_client;
                    client.next_of_kin_name = client.next_of_kin_name;
               })

           }else{
               realm.create(Schemas.ClientSchema.name,document);
           }

           realm.create(Schemas.DailyAttendanceSchema.name,document);


          });

          return 'success'

      }catch(err){

         return err

      }

}


export async function createBirthRegister(documents:any){

  try{


    documents._id = getObjectId();

    documents.child_reg_date = new Date(documents.child_reg_date);

    documents.health_facility_id = getPHC_configSettings().phc_id;

    documents.createdBy = Auth.getCurrentUser().staff_id;


    documents.dob = new Date(documents.dob);

    const realm =  _DATA_BASE_INSTACE_


     realm.write(()=>{

         realm.create(Schemas.BirthRegister.name,documents);

   })


    return "success";

  }catch(e){
     console.log(e)
     return e;

  }
}



export async function createReferalOut(documents:any){

  try{


    documents._id = getObjectId();

    documents.referal_date = new Date(documents.referal_date);

    documents.health_facility_id = getPHC_configSettings().phc_id;

    documents.createdBy = Auth.getCurrentUser().staff_id;


    const realm =  _DATA_BASE_INSTACE_;


     realm.write(()=>{

         realm.create(Schemas.ReferalOut.name,documents);

   })


    return "success";

  }catch(e){
     console.log(e)
     return e;

  }
}


export async function createAntenatal(documents:any){

  try{


    documents._id = getObjectId();

    documents.date = new Date(documents.date);

    documents.dob = new Date();

    documents.health_facility_id = getPHC_configSettings().phc_id;

    documents.createdBy = Auth.getCurrentUser().staff_id;

    const realm = _DATA_BASE_INSTACE_;

     realm.write(()=>{

         realm.create(Schemas.Antenatal.name,documents);

   })


    return "success";

  }catch(e){
     console.log(e)
     return e;

  }
}



export async function createFamilyPlaning(documents:any){

  try{


    documents._id = getObjectId();

    documents.date = new Date(documents.date);

    documents.dob = new Date();

    documents.health_facility_id = getPHC_configSettings().phc_id;

    documents.createdBy = Auth.getCurrentUser().staff_id;

    const realm = _DATA_BASE_INSTACE_;

     realm.write(()=>{

         realm.create(Schemas.FamilyPlaning.name,documents);

   })


    return "success";

  }catch(e){
     console.log(e)
     return e;

  }
}



export async function createInPatient(documents:any){

  try{

    documents._id = getObjectId();

    documents.date = new Date(documents.date);

    documents.dob = new Date(documents.dob);

    documents.health_facility_id = getPHC_configSettings().phc_id;

    documents.createdBy = Auth.getCurrentUser().staff_id;

    const realm = _DATA_BASE_INSTACE_;

     realm.write(()=>{

         realm.create(Schemas.Inpatient.name,documents);

   })


    return "success";

  }catch(e){
     console.log(e)
     return e;

  }
}



export async function createLabourAndDelivery(documents:any){

  try{

    documents._id = getObjectId();

    documents.date = new Date(documents.date);

    documents.delivery_date = new Date(documents.delivery_date);

    documents.health_facility_id = getPHC_configSettings().phc_id;

    documents.createdBy = Auth.getCurrentUser().staff_id;

    const realm = _DATA_BASE_INSTACE_;

     realm.write(()=>{

         realm.create(Schemas.LabourAndDelivery.name,documents);

     })


    return "success";

  }catch(e){
     console.log(e)
     return e;

  }
}








export async function createPostNatal(documents:any){

  try{

    documents._id = getObjectId();

    documents.date = new Date(documents.date);

    documents.health_facility_id = getPHC_configSettings().phc_id;

    documents.createdBy = Auth.getCurrentUser().staff_id;

    const realm = _DATA_BASE_INSTACE_;

     realm.write(()=>{

         realm.create(Schemas.PostNatal.name,documents);

     })


    return "success";

  }catch(e){
     console.log(e)
     return e;

  }
}


export async function createImmunization(documents:any){

  try{

    documents._id = getObjectId();

    documents.date = new Date(documents.date);

    documents.dob = new Date(documents.dob);

    documents.health_facility_id = getPHC_configSettings().phc_id;

    documents.createdBy = Auth.getCurrentUser().staff_id;

    const realm = _DATA_BASE_INSTACE_;

     realm.write(()=>{

         realm.create(Schemas.Immunization.name,documents);

   })


    return "success";

  }catch(e){
     console.log(e)
     return e;

  }
}



export async function createOutpatient(documents:any){

  try{

    documents._id = getObjectId();

    documents.date = new Date(documents.date);

    documents.date_of_birth = new Date(documents.date_of_birth);

    documents.health_facility_id = getPHC_configSettings().phc_id;

    documents.createdBy = Auth.getCurrentUser().staff_id;

    const realm = _DATA_BASE_INSTACE_;

     realm.write(()=>{

         realm.create(Schemas.OutPatient.name,documents);

   })


    return "success";

  }catch(e){
     console.log(e)
     return e;

  }
}




export async function createNutrition(documents:any){

  try{

    documents._id = getObjectId();

    documents.date = new Date(documents.date);

    documents.date_of_birth = new Date(documents.date_of_birth);

    documents.outcome_treatment = new Date(documents.outcome_treatment);

    documents.health_facility_id = getPHC_configSettings().phc_id;

    documents.createdBy = Auth.getCurrentUser().staff_id;

    const realm = _DATA_BASE_INSTACE_;

     realm.write(()=>{

         realm.create(Schemas.Nutrition.name,documents);

   })


    return "success";

  }catch(e){
     console.log(e)
     return e;

  }
}


export async function createTetanus(documents:any){

  try{

    documents._id = getObjectId();

    documents.date_of_visit = new Date(documents.date_of_visit);

    documents.date_of_birth = new Date(documents.date_of_birth);

    documents.health_facility_id = getPHC_configSettings().phc_id;

    documents.createdBy = Auth.getCurrentUser().staff_id;

    const realm = _DATA_BASE_INSTACE_;

     realm.write(()=>{

         realm.create(Schemas.Tetanus.name,documents);

   })


    return "success";

  }catch(e){
     console.log(e)
     return e;

  }
}




















