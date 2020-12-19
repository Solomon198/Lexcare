import React from 'react';
import {Link} from 'react-router-dom';
import {image} from '../../img/logobase'

  const Login = (props:any)=>
      (
        <div  className="container-fluid card">
        <div className="row no-gutter">
          <div className="col-md-6 col-lg-5 my-auto">
            <div className="login d-flex align-items-center ">
              <div className="container">
                <div className="row">
                  <div className="col-md-9 col-lg-8 mx-auto -auto">

                      <div className="text-center" style={{marginBottom:20}}>
                      <img style={{width:120,height:80}} src={image}/>
                      </div>

                    {
                                 props.error?
                                 <div className="alert text-light alert-danger" role="alert">
                                   {props.error}
                                 </div>:
                                     null
                               }


                      <div className="form-label-group my-2">
                        <label className="ml-2" for="inputEmail">Phone Number</label>
                        <input
                        onChange={(e)=>props.setEmail(e.target.value)}
                        style={{borderRadius:30}} type="text" id="inputEmail" className="form-control outlineInput bg-light py-4" placeholder="Phone number" required />
                      </div>

                      <div className="form-label-group my-3">
                        <label className="ml-2" for="inputPassword">Password</label>
                        <input
                        onChange={(e)=>props.setPassword(e.target.value)}
                        style={{borderRadius:30}}  type="password" id="inputPassword" className="form-control outlineInput bg-light py-4" placeholder="Password" required/>
                      </div>

                      <button
                      onClick={()=>props.loginUser()}
                      style={{borderRadius:30,letterSpacing:4}} className="btn btn-lg btn-primary text-uppercase  btn-block btn-login py-3  mt-4" >
                      {props.login == "started"?
                         <>
                            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                            <span className="sr-only mr-1">Loading...</span>
                            <span style={{marginLeft:10}}>Signing in .... </span>
                         </>
                       :"Login"}


                        </button>

                        <p onClick={()=>props.showResset()} style={{marginTop:15,cursor:"pointer"}} className="text-right text-primary">forgot password ?</p>



                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{minHeight:window.innerHeight}} className="d-none d-md-flex col-md-6 col-lg-7 bg-image "></div>
        </div>
      </div>
      )

      export default Login


