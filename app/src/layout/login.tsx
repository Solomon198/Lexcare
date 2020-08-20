import React from 'react';
import {Link} from 'react-router-dom'

  const Login = (props)=>
      (
        <div  className="container-fluid card">
        <div className="row no-gutter">
          <div className="col-md-6 col-lg-5" style={{marginTop:150}}>
            <div className="login d-flex align-items-center py-5 ">
              <div className="container">
                <div className="row">
                  <div className="col-md-9 col-lg-8 mx-auto">
                    <h3 style={{letterSpacing:3}} className="login-heading text-dark text-center mb-4">Lexcare</h3>


                    {
                                 props.error?
                                 <div className="alert text-light alert-danger" role="alert">
                                   {props.error}
                                 </div>:
                                     null
                               }


                      <div className="form-label-group my-2">
                        <label className="ml-2" for="inputEmail">Email address</label>
                        <input
                        onChange={(e)=>props.setEmail(e.target.value)}
                        style={{borderRadius:30}} type="email" id="inputEmail" className="form-control outlineInput bg-light py-4" placeholder="Email address" required />
                      </div>

                      <div className="form-label-group my-3">
                        <label className="ml-2" for="inputPassword">Password</label>
                        <input
                        onChange={(e)=>props.setPassword(e.target.value)}
                        style={{borderRadius:30}}  type="password" id="inputPassword" className="form-control outlineInput bg-light py-4" placeholder="Password" required/>
                      </div>

                      <button
                      onClick={()=>props.loginUser()}
                      style={{borderRadius:30}} className="btn btn-lg btn-primary text-uppercase  btn-block btn-login py-3  mt-4" >
                      {props.login == "started"?
                         <>
                            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                            <span className="sr-only mr-1">Loading...</span>
                            <span style={{marginLeft:10}}>Signing in .... </span>
                         </>
                       :"Login"}


                        </button>



                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{minHeight:720}} className="d-none d-md-flex col-md-6 col-lg-7 bg-image "></div>
        </div>
      </div>
      )

      export default Login


