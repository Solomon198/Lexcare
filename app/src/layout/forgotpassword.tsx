import React from 'react';
import {Link} from 'react-router-dom';
import {image} from '../../img/logobase'
import { emailExist } from '../../realm/queries/readQueries';
import { API_URL } from '../../realm/queries/urls';
import { sendAxiosPostRequest } from '../../realm/utils/utils';


type Props = {
     Switch:()=>void
}

  class ForgotPassword extends React.Component <Props>{


    state = {
       email:"",
       password:"",
       status:"unitiated",
       error:""

    }


    sendEmailReset(){
          let  url:string = API_URL+ "sendPasswordResset";

          const {email,password} = this.state;
          if(!email || !password) return;
          this.setState({status:"started"},()=>{
            if(emailExist(email.trim().toLowerCase())){
              sendAxiosPostRequest(url,{email:email,password:password}).then((val)=>{
                const {data,status,message} = val.data;
                if(status == "Success"){
                  this.props.Switch();
                  this.setState({status:"success"})
                }else{
                  this.setState({status:"failed",error:message})
                }

              }).catch((err)=>{
                console.log(err);
                this.setState({status:"failed",error:err.message})
              })
            }else{
                this.setState({error:"Email does not exist!!",status:"failed"})
            }

          })
          //send passowrd reset

    }


     render(){
      return (
        <div  className="container-fluid card">
        <div className="row no-gutter">
          <div className="col-md-6 col-lg-5 my-auto">
            <div className="login d-flex align-items-center">
              <div className="container">
                <div className="row">
                  <div className="col-md-9 col-lg-8 mx-auto">
                      <button onClick={()=>this.props.Switch()} className="btn-sm btn btn-primary">
                         Cancel
                      </button>
                      <div className="text-center" style={{marginBottom:20}}>
                      <img style={{width:120,height:80}} src={image}/>
                      </div>

                           {
                                 this.state.error?
                                 <div className="alert text-light alert-danger" role="alert">
                                   {this.state.error}
                                 </div>:
                                     null
                               }

                      <h5 className="text-center">Reset Password</h5>
                      <div className="form-label-group my-2">
                        <label className="ml-2" for="inputEmail">Email</label>
                        <input value={this.state.email} onChange={(e)=>this.setState({email:e.target.value})}
                        style={{borderRadius:30}} type="email" id="inputEmail" className="form-control outlineInput bg-light py-4" placeholder="Enter email" required />
                      </div>

                      <div className="form-label-group my-3">
                        <label className="ml-2" for="inputPassword">New Password</label>
                        <input
                          value={this.state.password}
                          onChange={(e)=>this.setState({password:e.target.value})}
                          style={{borderRadius:30}}
                          type="password"
                          id="inputPassword"
                          className="form-control outlineInput bg-light py-4" placeholder="Password" required/>
                      </div>

                      <button
                      onClick={()=>this.sendEmailReset()}
                      style={{borderRadius:30,letterSpacing:4}} className="btn btn-lg btn-primary text-uppercase  btn-block btn-login py-3  mt-4" >
                      {this.state.status == "started"?
                         <>
                            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                            <span className="sr-only mr-1">Loading...</span>
                            <span style={{marginLeft:10,textTransform:"lowercase"}}>
                              Sending email....
                             </span>
                         </>
                       :"Reset"}


                        </button>

                        <p style={{marginTop:20,fontSize:12,textAlign:'center'}}>
                          A password resset email will be sent to your email. Please click on the link to confirm and reset password
                        </p>



                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{minHeight:window.innerHeight}} className="d-none d-md-flex col-md-6 col-lg-7 bg-image "></div>
        </div>
      </div>
      )

     }

    }



      export default ForgotPassword


