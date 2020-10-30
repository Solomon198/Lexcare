import React from 'react';
import {image} from '../../img/logobase'

const ConfigApp = ({setApiKey,error,status,configure})=>
      (
        <div  className="container-fluid card">
        <div className="row no-gutter bg-light">
          <div className="col-md-6 col-lg-5" style={{marginTop:50}}>
            <div className="login d-flex align-items-center py-5 ">
              <div className="container">
                <div className="row">
                  <div className="col-md-9 col-lg-8 mx-auto  text-center">

                     <img style={{width:150,height:100,marginBottom:30,marginTop:80}} src={image}/>


                                {
                                 error?
                                 <div className="alert text-light alert-danger" role="alert">
                                  {error}
                                 </div>:
                                     null
                               }


                      <div className="form-label-group my-2">
                        <input
                        onChange={(e)=>setApiKey(e.target.value)}
                        style={{borderRadius:30}} type="text" id="inputEmail" className="form-control outlineInput bg-light py-4" placeholder="Enter API key ..." required />
                      </div>









                      <button
                      onClick={()=>configure()}
                      style={{borderRadius:30,outline:'none',letterSpacing:4}} className="btn btn-lg btn-primary   btn-block btn-login py-3  mt-4" >
                      {status == "started"?
                         <>
                            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                            <span className="sr-only mr-1">Loading...</span>
                            <span style={{marginLeft:10}}>Setting up .... </span>
                         </>
                       :"CONFIRM KEY "}


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

      export default ConfigApp


