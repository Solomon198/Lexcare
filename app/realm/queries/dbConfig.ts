//


import Realm from 'realm';

import DailyAttendanceSchema from '../schemas/dailyAttendance'

//export app instance for global usage;
export let  _APP_INSTANCE_ : Realm.App;

//export synced database intance

export let _DATA_BASE_INSTACE_ : Realm;

//initializes the app
export function initializeApplication(appName:string){

     _APP_INSTANCE_ = new Realm.App({ id: appName });


}

export function reInitializApplicationConfigs(appName : string,partition:string){
      // renitialize app
      initializeApplication(appName);

      // openSync connection;

      openSyncronizedRealm(partition)
}

export function checkActiveConnection(appName : string,partition:string){

  if(!_APP_INSTANCE_){
     // renitialize app
     initializeApplication(appName);
  }else if(!_DATA_BASE_INSTACE_){

     // openSync connection;
      openSyncronizedRealm(partition)
  }else{

      let syncStatus = _DATA_BASE_INSTACE_.syncSession?.state;

      let connectionStatus = _DATA_BASE_INSTACE_.syncSession?.connectionState;

      if(syncStatus != "active"){

           reInitializApplicationConfigs(appName,partition);

           console.log("connction not active just fired reniti")

      }else if(connectionStatus == "disconnected"){

          console.log("connction disconnected just fired reniti")

          reInitializApplicationConfigs(appName,partition);

      }else{
        console.log("everything ok no need for re-initializing")
      }
  }



}

export function openSyncronizedRealm(partition:string){

    //check if a valid user exist before making attempts to open Database

    if(_APP_INSTANCE_.currentUser){




            _DATA_BASE_INSTACE_ = new  Realm({

            schema:[DailyAttendanceSchema],

            sync:{

              partitionValue:partition,

              user:_APP_INSTANCE_.currentUser,

              error:(error)=>{

                console.log(error)

              },


            }
          })








    }
}
