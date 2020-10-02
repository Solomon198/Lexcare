/* eslint react/jsx-props-no-spreading: off */
import React from 'react';

import { Switch } from 'react-router-dom';

import Dashboard from '../app/src/layout/dashboard'

import Login from '../app/src/layout/login';

import AddStaff from '../app/src/Forms/RegisterAdmin';

import ConfigureApp from '../app/src/layout/configApp'

import Auth from './realm/queries/auth';

import {createPHC_Staff} from './realm/queries/writeQueries'

import {checkActiveConnection} from './realm/queries/dbConfig'

import {getPHC_configSettings} from './realm/queries/readQueries'

import { checkIfAppIsConfig} from './realm/queries/confirmSettings';

import {configureApplication,clearStorage,isAdminSet} from './realm/queries/configApp'

export const app_connect = "demo-lexcare-ijdjy";

export const partition  = "1"

 let _timer:any;
 function startTimer(){

     if(_timer){
       clearInterval(_timer)
     }
    _timer = setInterval(()=>{
        checkActiveConnection()
    },3000)

 }


export default class Routes extends React.Component {

    state = {
      password:'',
      email: "",
      login:'unitiated',
      error:"",
      showDashboard:false,
      apiKey:"",
      configStatus:"unitiated",
      configError:"",
      adminExist:false,
      successAdmin:false,
      loginStatus:"unitiated"
    }



    setApiKey(key:string){
         this.setState({apiKey:key})
    }


    _configureApplication(){
        if(!this.state.apiKey.trim()){
           return this.setState({configError:"Please enter api Key"})
        }
        this.setState({
          configError:"",
          configStatus:"started"
        },()=>{
          configureApplication(this.state.apiKey).then((val:any)=>{

                if(val.status == "failed"){
                  this.setState({configError:val.message,configStatus:"failed"});
                }else{
                  this.setState({configError:"",configStatus:"success"},()=>{
                    startTimer();
                  });
                }
          }).catch((err:any)=>{

            this.setState({configError:err.message,configStatus:"failed"})
          })
        })
    }



    async componentDidMount(){

      // clearStorage();
      if(getPHC_configSettings()){
          this.setState({adminExist:"kdk"})


        startTimer();


      }





    }

    validate(){
      const {email,password} = this.state;
      if(!email.trim()){
        this.setState({error:"Please Provide a valid email"})
      }else if(!password){
        this.setState({error:"Please enter a password"})
      }else{
        // this.login();
        Auth.localLogin(email,password).then((val)=>{
              if(val.status){
                  this.setState({error:"",loginStatus:"success"})
              }else{
                this.setState({error:val.message,loginStatus:"failed"})
              }
        }).catch((err)=>{
             this.setState({error:err.message})
        })
      }
    }



    logout(){
          Auth.LogOut().then(()=>{

               this.setState({error:"",loginStatus:"logout"})

           }).catch((e)=>{

               this.setState({error:e.message});

           })
    }

    async createAdmin(info:any){


         createPHC_Staff(info).then((val)=>{
            this.setState({adminExist: "kd"})


         }).catch(e=>{

          console.log(e);

         })
    }

    render(){
      return (
          <Switch>

            {
              // check if app is config
                 !checkIfAppIsConfig()?
                 <ConfigureApp
                      setApiKey={(key:string)=>this.setApiKey(key)}
                      error={this.state.configError}
                      status={this.state.configStatus}
                      configure={()=>this._configureApplication()}
                 />
                  :
                // check if Admin Exist after configuration
                 !isAdminSet() ?

                  <AddStaff
                     addStaff={(values:any)=> this.createAdmin(values)}
                  />

                :

                 !Auth.getCurrentUser()?

                 <Login

                 error={this.state.error}
                 loginUser={()=>this.validate()}
                 login={this.state.login}
                 setPassword={(password:string)=>this.setState({password:password})}
                 setEmail={(email:string)=> this.setState({email:email})}

              />
              :

                  <Dashboard
                      logout={()=>this.logout()}
                   />

            }



          </Switch>
      )
    }
}
