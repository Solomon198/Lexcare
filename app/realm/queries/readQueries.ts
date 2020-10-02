

import  {_DATA_BASE_INSTACE_,reInitializApplicationConfigs} from './dbConfig';

import {startOfDay,endOfDay} from 'date-fns'

import {getRealmObjectCollection,_unwrapJson} from '../utils/utils'

import {app_connect,partition} from '../../Routes';

import {CONFIGURATION_KEY} from './keys'


export function getPHC_configSettings(){

       let data = localStorage.getItem(CONFIGURATION_KEY);


       return _unwrapJson(data);


}


export function documentExist(realmQuery:string,schemaName:string){
      if(!_DATA_BASE_INSTACE_){

        reInitializApplicationConfigs(app_connect,partition);

       }

       try{

        let realm = _DATA_BASE_INSTACE_;

        let obj = realm.objects(schemaName).filtered(realmQuery);

        let clients = getRealmObjectCollection(obj);

        console.log(clients);
        console.log("hi")

        if(clients.length > 0){
            return true;
        }else{
            return false;
        }



       }catch(e){
         console.log(e)
         return e
       }

}

export function getDocuments(SchemaName:string,dateField="date",startDate?:string,endDate?:string,ignoreFilter?:boolean){

        let syncStatus = _DATA_BASE_INSTACE_.syncSession?.state;

        if(syncStatus != "active"){




        }

       if(!_DATA_BASE_INSTACE_){

           reInitializApplicationConfigs(app_connect,partition);

       }

        try{

          let realm  = _DATA_BASE_INSTACE_;

          let defaultEndDate = new Date();

          defaultEndDate.setDate(defaultEndDate.getDate() + 1);

          let start = startDate ? startOfDay(new Date(startDate)) : startOfDay(new Date());

          let end = endDate ? endOfDay(new Date(endDate)) : startOfDay(defaultEndDate);

          let obj = ignoreFilter ? realm.objects(SchemaName) : realm.objects(SchemaName).filtered(`${dateField} >= $0 && ${dateField} < $1`,start,end);


          let documents = getRealmObjectCollection(obj);

          return documents;


        }catch(e){

            return e;

        }

}



