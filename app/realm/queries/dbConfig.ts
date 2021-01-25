//

import Realm from 'realm';
import schemas from '../schemas/index';

import Schemas from '../schemas/index';

import Auth from './auth';
import { getPHC_configSettings } from './readQueries';

//export app instance for global usage;
export let _APP_INSTANCE_: Realm.App;

//export synced database intance

export let _DATA_BASE_INSTACE_: Realm;

//initializes the app
export function initializeApplication(appName?: string) {
  _APP_INSTANCE_ = new Realm.App({
    id: getPHC_configSettings()?.realm ?? appName,
  });
}

export function reInitializApplicationConfigs() {
  // renitialize app
  initializeApplication();

  // openSync connection;

  openSyncronizedRealm();
}

export function checkActiveConnection() {
  if (!_APP_INSTANCE_) {
    // renitialize app
    initializeApplication();
  } else if (!_DATA_BASE_INSTACE_) {
    // openSync connection;
    openSyncronizedRealm();
  } else {
    let syncStatus = _DATA_BASE_INSTACE_.syncSession?.state;

    let connectionStatus = _DATA_BASE_INSTACE_.syncSession?.connectionState;

    if (syncStatus != 'active') {
      reInitializApplicationConfigs();

      console.log('connction not active just fired reniti');
    } else if (connectionStatus == 'disconnected') {
      console.log('connction disconnected just fired reniti');

      reInitializApplicationConfigs();
    } else {
      console.log('everything ok no need for re-initializing');
    }
  }
}

export function openSyncronizedRealm() {
  //check if a valid user exist before making attempts to open Database

  if (_APP_INSTANCE_.currentUser) {
    _DATA_BASE_INSTACE_ = new Realm({
      schema: [
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

        Schemas.Services,

        Schemas.AdministerVaccine,

        Schemas.TetanusAdministration,

        Schemas.Vaccine,

        Schemas.Device,

        schemas.DosesDiscarded,
      ],

      // schemaVersion:1,

      //  sync:{

      //    partitionValue:getPHC_configSettings().phc_id,

      //    user:_APP_INSTANCE_.currentUser,

      //    error:(error)=>{

      //      console.log(error)

      //    },

      //  }
    });
  } else {
    Auth.login(getPHC_configSettings().phc_realm_api_key);
  }
}
