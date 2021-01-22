
import axios from 'axios';

import BSON from 'bson';

import crypto from 'crypto';

import {_STATES_} from './data'

export function _jsonify(data:any){

   return JSON.stringify(data);

}

export function _unwrapJson(data:any){

    return JSON.parse(data);

}


export const AgeRange = ()=>({

  atenatalRange:["10 - 14 years", "15 - 19 years", "20 - 24 years", "25 - 49 years", "≥ 50 years"],
  dailyAttendance:["0 - 28 Days","29 Days - 11 Months","12 - 59 Months","5 - 9 Years","10 - 19 Years", "> 20 Years"],
  outPatient:["0 - 28 Days","29 Days - 11 Months","12 - 59 Months","5 - 9 Years","10 - 19 Years", "> 20 Years"],
  familyPlaning:["10 - 14 years", "15 - 19 years", "20 - 24 years", "25 - 49 years", "≥ 50 years"],
  inPatient:["0 - 28 Days", "29 days - 11 Months", "12 - 59 Months", "5 - 9 Years", "10 - 19 Years", "> 20 Years"],
  labourAndDelivery:["0 - 28 Days", "29 days - 11 Months", "12 - 59 Months", "5 - 9 Years", "10 - 19 Years", "> 20 Years"],
  nutrition:["0 - 5 months","6 - 23 months", "24 - 59 months"],
  postNatal:["10 - 14 years", "15 - 19 years", "20 - 24 years", "25 - 49 years", "≥ 50 years"],

})


export function getLocationIDS(state_name:string,_lga:string){

   let ids:{state_id?:string,lga_id?:string} = {};

   _STATES_.forEach((state)=>{
      if(state.state.name == state_name){
        ids["state_id"] = state.state.id + "";
        state.state.locals.forEach((lga)=>{
          if(lga.name == _lga){
          ids["lga_id"] = lga.id + '';
          }
        })
      }
   })

   return ids;
}

export async function sendAxiosPostRequest(url:string,data:any){

       return axios({
         url :url,
         method:"POST",
         data:data
       })

}

export function getRealmObjectCollection(objs:any){

      let docs:any[] = [];

      for(let obj of objs){

         let doc:any = {};
         obj.keys().forEach((val:any)=>{
              doc[val] = obj[val];
         })

         docs.push(doc);

      }

      return docs;
}


export function getObjectId(){

    return new BSON.ObjectID();

}

export function generateRandomByte(){

    return crypto.randomBytes(16).toString('hex');

}

export function hashPassword(password:string){

    let salt:string   = generateRandomByte();

    let hash:string   = crypto.pbkdf2Sync(password,salt,1000,64,'sha512').toString('hex');

    return {salt,hash}

}

export function validatePassword(password:string,salt:string,hash:string){

          var _hash = crypto.pbkdf2Sync(password,salt,1000,64,'sha512').toString("hex");

          return _hash === hash;

  }

export function assignValuesToEmptyProps(obj:any){

      Object.keys(obj).forEach((key:string)=>{

       if(typeof(obj[key]) == "object"){
          if(obj[key]== null){
              delete obj[key]
          }else{
            let _data:any[]  = obj[key];

            if(_data.length == 0){
              _data.push(" ");
              obj[key] = _data;
            }
          }


        }

        })

        return obj

}

export function getDaysInAMonth (month:number,year:number) {
  // Here January is 1 based
  //Day 0 is the last day in the previous month
 return new Date(year, month, 0).getDate();
// Here January is 0 based
// return new Date(year, month+1, 0).getDate();
};

