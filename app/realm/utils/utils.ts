
import axios from 'axios';

import BSON from 'bson';

import crypto from 'crypto';

export function _jsonify(data:any){

   return JSON.stringify(data);

}

export function _unwrapJson(data:any){

    return JSON.parse(data);

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

