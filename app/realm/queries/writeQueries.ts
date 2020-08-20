
import   DailyAttendanceSchema from '../schemas/dailyAttendance';

import {dailyAttendanceProperties} from '../../types/dailyAttendance';

import BSON from 'bson';

import {_DATA_BASE_INSTACE_} from './dbConfig'


export async  function createDailyAttendance(document:dailyAttendanceProperties){

      try{

          const realm = _DATA_BASE_INSTACE_

           realm.write(()=>{

           document._id = new BSON.ObjectID();

           realm.create(DailyAttendanceSchema.name,document);

          });

          return 'success'

      }catch(err){

         return err.message

      }

}



