import React from 'react';
import StepIndicatorComponent from '../components/stepIndicator';
import {Formiz,useForm} from '@formiz/core'
import Step from './stepWrapper';

type StepFormWrapperProps = {

    title:string,
    steps : number,
    children : any,

}

 function   StepFormWrapper  (props:StepFormWrapperProps) {

          const MyForm = useForm();


          const handleSubmit = (values) => {

            console.log(values) // Retrieves values after submit;

          }

          const  goNext = ()=> {


            window.scrollTo(0, 0)


          }

          const gotoStep = (step:string)=>{
               if(MyForm.isStepValid){
                  MyForm.goToStep(step);
               }
          }



              return (
                <Formiz onValidSubmit={handleSubmit}  onInvalidSubmit={handleSubmit} connect={MyForm}>
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
                                          jumpToIndex={(step:string)=> gotoStep(step)}
                                          stepNumber={props.steps}
                                          active = {MyForm.currentStep.index}
                                        />

                                           <form // create an html form
                                              noValidate // Disable native html validation
                                              onSubmit={MyForm.submitStep} // Pass the Formiz submit to the onSubmit
                                            >

                                            {props.children}
                                            {MyForm.isLastStep ? (
                                              <button
                                                type="submit" // Create a submit button
                                                disabled={!MyForm.isValid} // Disable the button if the form is not valid
                                                className="btn btn-primary btn-lg ">Submit</button>
                                            ) : (
                                              <button
                                              type="submit" // Create a submit button
                                              onClick={goNext}
                                              disabled={!MyForm.isStepValid} // Disable the button if the form is not valid
                                              className="btn btn-primary btn-lg ">Next</button>

                                            )}


                                           </form>


                                    </div>

                             </div>
                           </div>
                          </div>
                         </div>
                       </div>
                      </div>
                    </div>
                    </Formiz>
                      )



 }

export default StepFormWrapper
