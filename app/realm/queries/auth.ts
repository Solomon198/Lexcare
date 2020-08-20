import Realm from 'realm';

import {_APP_INSTANCE_,initializeApplication} from './dbConfig';

 async function login(email:string,password:string,appName:string){

           try{

                //call intialize app first
                initializeApplication(appName);

                const credentials = Realm.Credentials.emailPassword(email,password);

                await _APP_INSTANCE_.logIn(credentials);


                return 'login success'

           }catch(e){

               return e;

           }
}


export async function LogOut(){

  try{

    await getCurrentUser()?.logOut();

  }catch(e){

   return e;

  }

}




function getCurrentUser(appName?:string){

    if(!_APP_INSTANCE_){

        let _appName:string = appName ? appName : '';

        initializeApplication(_appName);

        return _APP_INSTANCE_.currentUser;



    }
    return _APP_INSTANCE_.currentUser;

}

export default {

    getCurrentUser,

    login,

    LogOut,

}


