
import { checkIfStaffExist} from './confirmSettings'

import {_unwrapJson,_jsonify,sendAxiosPostRequest} from '../utils/utils'

import {CONFIGURATION_KEY,ADMIN_EXIST,LOCAL_USER} from './keys';

import {_APP_INSTANCE_} from './dbConfig'

import Auth from './auth'

import {initializeApplication} from './dbConfig'

//helper functions


export function clearStorage(){

     localStorage.removeItem(CONFIGURATION_KEY);

     localStorage.removeItem(ADMIN_EXIST);

     localStorage.removeItem(LOCAL_USER);

     return true;

}

export function setAdminExist(status:string){
        localStorage.setItem(ADMIN_EXIST,status);
}

export function isAdminSet(){
    let admin = localStorage.getItem(ADMIN_EXIST);
    if(admin){
       if(admin == "true"){
        return true
       }else{
         return false
       }
    }else{
      return false;
    }
}

 function setConfiguration(config:any){
      try{
        localStorage.setItem(CONFIGURATION_KEY,_jsonify(config));
        return true;
      }catch(e){
          return false;
      }
}



export function configureApplication(apiKey:string){

  let  url:string = "https://lexcare-api.herokuapp.com/v1/phc/get-phc";

  return new Promise((resolve,reject)=>{

    sendAxiosPostRequest(url,{apiKey:apiKey}).then((result)=>{

      const payload = result.data;

      const {data,message,status} = payload;

      if(status != "Success") return reject({status:"failed",message:message})


      initializeApplication(data.realm);

      Auth.login(data.phc_realm_api_key).then(()=>{

        if(_APP_INSTANCE_.currentUser){


             checkIfStaffExist(data.phc_id).then((_checkIfStaffExist:boolean)=>{

                        if(typeof(_checkIfStaffExist) == "boolean"){

                          setConfiguration(data);

                          if(_checkIfStaffExist){
                            setAdminExist("true");
                          }else{
                            setAdminExist("false");
                          }

                          resolve({status:"success"})
                        // go on

                      }else{
                            reject({status:"failed",message:_checkIfStaffExist,admin:_checkIfStaffExist})
                      }
             }).catch((e)=>{

                     reject({status:"failed",message:e.message});

             })




        }else{

           reject({status:"failed",message:"app not logged in server"});

        }


      }).catch((e)=>{

           reject({status:"failed",message:e.message})

      })

    }).catch((e)=>{
         console.log(e)
         reject({status:"failed",message:e.message})
    })

  })

}
