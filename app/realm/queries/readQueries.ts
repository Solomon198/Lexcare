
import DailyAttendanceSchema from '../../realm/schemas/dailyAttendance';

import  {_DATA_BASE_INSTACE_,reInitializApplicationConfigs} from './dbConfig'

import {app_connect,partition} from '../../Routes'

export function getDailyAttendance(component:any){

       if(!_DATA_BASE_INSTACE_){
           reInitializApplicationConfigs(app_connect,partition)
       }

        try{

          let realm  = _DATA_BASE_INSTACE_;

          let dailyAttendanceReg = [];

          let obj = realm.objects(DailyAttendanceSchema.name);

          for (let oo of obj){


            let client : any = {};

            oo.keys().forEach((val)=>{

                client[val] = oo[val];

            })

            client.date = client.date[client.date.length - 1];

            dailyAttendanceReg.push(client);


          }

          return dailyAttendanceReg;


        }catch(e){

            return e;

        }

}
