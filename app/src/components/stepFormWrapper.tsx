import React from 'react';
import StepIndicatorComponent from '../components/stepIndicator';


type StepFormWrapperProps = {

    title:string,
    steps : number,
    active : number,
    jumpToIndex:(param:number)=>void,
    children : any,

}

 function   StepFormWrapper  (props:StepFormWrapperProps) {


              return (
                <div className="content-w">
                  <div className="element-wrapper">
                    <div className="content-i">
                      <div className="content-box">
                        <div className="element-wrapper">
                          <div className="element-box ">

                             <div className="row">

                             <div className="col-sm-3" />

                                  <div className="col-sm-6">

                                      <h5 className="form-header" style={{textAlign: 'center'}}>
                                        {props.title}
                                      </h5>

                                        <StepIndicatorComponent
                                          jumpToIndex={(index:number)=> props.jumpToIndex(index)}
                                          stepNumber={props.steps}
                                          active = {props.active}
                                        />



                                            {props.children}


                                    </div>

                             </div>
                           </div>
                          </div>
                         </div>
                       </div>
                      </div>
                    </div>
                      )



 }

export default StepFormWrapper
