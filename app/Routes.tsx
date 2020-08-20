/* eslint react/jsx-props-no-spreading: off */
import React from 'react';

import { Switch } from 'react-router-dom';

import AppDefault from './containers/App';

import Dashboard from '../app/src/layout/dashboard'

import Login from '../app/src/layout/login'

import Auth from './realm/queries/auth';

import {reInitializApplicationConfigs,checkActiveConnection} from './realm/queries/dbConfig'


export const app_connect = "demo-lexcare-ijdjy";

export const partition  = "1"


setInterval(()=>{
    checkActiveConnection(app_connect,partition)
},3000)


export default class Routes extends React.Component {

    state = {
      password:'',
      email: "",
      login:'unitiated',
      error:"",
      showDashboard:false
    }



    componentDidMount(){

        reInitializApplicationConfigs(app_connect,partition);
        // this.props.history.push('/dashboard');

    }

    validate(){
      const {email,password} = this.state;
      if(!email.trim()){
        this.setState({error:"Please Provide a valid email"})
      }else if(!password){
        this.setState({error:"Please enter a password"})
      }else{
        this.login();
      }
    }

    login(){

         this.setState({error:"",login:"started"},()=>{

              Auth.login(this.state.email,this.state.password,app_connect).then((val)=>{
                  // console.log(val.indexOf("401"))
                  if(typeof(val) == 'string'){
                    this.setState({error:val,login:"failed"})
                  }else{

                    reInitializApplicationConfigs(app_connect,partition);

                    this.setState({error:"",login:"success"})
                  }
              }).catch((e)=>{

                  this.setState({error:e.message,login:"failed"});

              })

         })
    }

    logout(){
          Auth.LogOut().then(()=>{

               this.setState({error:""})

           }).catch((e)=>{

               this.setState({error:e.message});

           })
    }

    render(){
      return (
        <AppDefault>
          <Switch>


              {
                   !Auth.getCurrentUser(app_connect) ?
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
        </AppDefault>
      )
    }
}
