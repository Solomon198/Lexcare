import Realm from 'realm';

import Schemas from '../schemas/index';

import {_APP_INSTANCE_,initializeApplication} from './dbConfig';

import PHC_STAFFS from '../schemas/staffs';

import {getPHC_configSettings} from '../queries/readQueries'

import {getRealmObjectCollection,validatePassword,_jsonify,_unwrapJson} from '../utils/utils';

import {LOCAL_USER} from './keys'


export async function localLogin(phoneNumber:string,password:string){

    try{

         const realm = new Realm({
          schema:[



            Schemas.StaffSchema,



          ],
          schemaVersion:1,
          sync:{
              user : _APP_INSTANCE_.currentUser,
              partitionValue : getPHC_configSettings().phc_id,
          }

          });

         const staffs = realm.objects(PHC_STAFFS.name).filtered('phone_number = $0',phoneNumber);

         const _filtered = getRealmObjectCollection(staffs);


         console.log(_filtered)

         if(_filtered.length > 0 ){
              let user = _filtered[0];

              let checkPassword = validatePassword(password,user.salt,user.hash);



              if(!checkPassword){

                  return {status:false,message:"Invalid password"};

              }

                localStorage.setItem(LOCAL_USER,_jsonify(user));

                return {status:true,message:'success'}
         }else{
              return {status:false, message:"Invalid Phone number"}
         }



    }catch(e){

       console.log(e);

       return {status:false,message:e.message}
    }


}

 async function login(apiKey:string){

           try{


                const credentials = Realm.Credentials.userApiKey(apiKey);

                await _APP_INSTANCE_.logIn(credentials);


                return 'login success'

           }catch(e){

               return e;

           }
}


export async function LogOut(){

  try{

    // await getCurrentUser()?.logOut();
    localStorage.removeItem(LOCAL_USER);

  }catch(e){

   return e;

  }

}




function getCurrentUser(appName?:string){


     let user = localStorage.getItem(LOCAL_USER);

     let userData = _unwrapJson(user);

     return userData;


    // if(!_APP_INSTANCE_){

    //     let _appName:string = appName ? appName : '';

    //     initializeApplication(_appName);

    //     return _APP_INSTANCE_.currentUser;



    // }
    // return _APP_INSTANCE_.currentUser;

}

export default {

    getCurrentUser,

    login,

    LogOut,

    localLogin

}


