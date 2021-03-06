

import {CONFIGURATION_KEY,ADMIN_EXIST} from './keys';

import Realm from 'realm';


import  PHC_staffs from '../schemas/staffs'

import {getPHC_configSettings} from './readQueries'

import {_unwrapJson,getRealmObjectCollection} from '../utils/utils'
import { _APP_INSTANCE_ } from './dbConfig';
import Schemas from '../schemas';
import context from 'react-bootstrap/esm/AccordionContext';

//check if configuration exist

export function checkIfAppIsConfig(){
  try{

   const configValue = localStorage.getItem(CONFIGURATION_KEY);

   if(configValue) return _unwrapJson(configValue);

      return false;

  }catch(e){

     return false

  }
}


// check if an admin exist after sync for staff have taken place;

export async function checkIfAdminExist(){

   try{
    const staffs = await checkIfStaffExist();
    if(staffs){
       return true
    }

    return false
   }catch(e){
      return false
   }

}

export async function checkIfStaffExist(phc_id?:string){
  try{



      const appSetting = getPHC_configSettings();

      const realm = await Realm.open({

        schema:[


          Schemas.BirthRegister,

          Schemas.DailyAttendanceSchema,

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

          Schemas.Services,

          Schemas.AdministerVaccine,

          Schemas.TetanusAdministration,


          Schemas.StaffSchema,



        ],

        schemaVersion:1,


        sync:{

            user : _APP_INSTANCE_?.currentUser,

            partitionValue:appSetting?.phc_id ?? phc_id,

        }

      });

      let obj = realm.objects(Schemas.StaffSchema.name);
      let staffs = getRealmObjectCollection(obj);

      console.log(staffs);
      console.log("phc user called")

      if(staffs.length > 0){
        console.log("staff exist")
        return true;
      }else{
        console.log("staff does not exist")
         return false
      }


  }catch(e){
       console.log("caught error");
       console.log(e);
      return e;

  }
}


