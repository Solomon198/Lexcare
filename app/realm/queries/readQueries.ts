

import  {_DATA_BASE_INSTACE_,reInitializApplicationConfigs} from './dbConfig';

import {startOfDay,endOfDay,startOfMonth,endOfMonth} from 'date-fns'

import {getRealmObjectCollection,_unwrapJson} from '../utils/utils'

import {app_connect,partition} from '../../Routes';

import {CONFIGURATION_KEY} from './keys'
import schemas from '../schemas';


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

export function getStatistics(){



  if(!_DATA_BASE_INSTACE_){

      reInitializApplicationConfigs();

  }

   try{

     let realm  = _DATA_BASE_INSTACE_;

     let defaultEndDate = new Date();

     let year = new Date().getFullYear();

     let startFormat = new Date(year + "-01-01");
     let endFormat = new Date(year + "-12-01");

     defaultEndDate.setDate(defaultEndDate.getDate() + 1);

     let start =  startOfDay(new Date(startFormat))

     let end =  endOfDay(new Date(endFormat)) ;

     let obj =  realm.objects(schemas.DailyAttendanceSchema.name).filtered(` date >= $0 && date < $1`,start,end);



     let documents = getRealmObjectCollection(obj);

     let statistics = Array(12).fill(0);

     documents.forEach((val:any)=>{
       let _date = new Date(val.date).getMonth();
       statistics[_date] = statistics[_date] + 1;
     })

     return statistics;


   }catch(e){

       return e;

   }

}

export function getDocuments(SchemaName:string,dateField="date",startDate?:string,endDate?:string,ignoreFilter?:boolean,searchValue?:any,onlyMonth?:boolean){

       if(!_DATA_BASE_INSTACE_){

           reInitializApplicationConfigs(app_connect,partition);

       }

        try{

          let realm  = _DATA_BASE_INSTACE_;

          let defaultEndDate = new Date();

          defaultEndDate.setDate(defaultEndDate.getDate() + 1);

          let start;
          let end;


          if(!onlyMonth){
           start =   startDate ? startOfDay(new Date(startDate)) : startOfDay(new Date());
           end = endDate ? endOfDay(new Date(endDate)) : startOfDay(defaultEndDate);
          }else{
            start = startDate ? startOfMonth(new Date(startDate)) : startOfMonth(new Date());
            end = endDate ? endOfMonth(new Date(startDate)) : endOfMonth(new Date());
          }

          console.log(start,end)

          if(!searchValue){
            let obj = ignoreFilter ? realm.objects(SchemaName) : realm.objects(SchemaName).filtered(`${dateField} >= $0 && ${dateField} < $1`,start,end);


            let documents = getRealmObjectCollection(obj);


             if(onlyMonth){
               documents.forEach((doc)=>{
                    let docArr = [];
                    doc.records.forEach((recordVal)=>{
                      let formatt = JSON.parse(recordVal)
                      docArr.push(formatt)
                    })

                    delete doc.records;

                    doc['records'] = docArr;

               })

             }

            return documents;
          }else{

            console.log(searchValue)
            console.log(dateField)

            let obj =  realm.objects(SchemaName).filtered(`${dateField} == $0`,searchValue);

            console.log(obj,"This is the object",obj)

            let documents = getRealmObjectCollection(obj);

            console.log(documents,"this sis ar")


            return documents;
          }



        }catch(e){

            return e;

        }

}


export function emailExist(email:string){



  if(!_DATA_BASE_INSTACE_){

      reInitializApplicationConfigs();

  }

   try{

     let realm  = _DATA_BASE_INSTACE_;

     let obj =  realm.objects(schemas.StaffSchema.name).filtered(`email = $0`,email);


     let documents = getRealmObjectCollection(obj);

     if(documents.length > 0){
       return true;
     }else{
       return false;
     }


   }catch(e){
       console.log(e);
       return false;

   }

}



