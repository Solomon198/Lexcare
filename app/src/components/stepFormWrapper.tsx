import React from 'react';
import StepIndicatorComponent from '../components/stepIndicator';
import {Formiz,useForm} from '@formiz/core';
import {assignValuesToEmptyProps} from '../../realm/utils/utils'
import Step from './stepWrapper';

type StepFormWrapperProps = {

    title:string,
    steps : number,
    children : any,
    onSubmit:(formValue:any)=>void

}

 function   StepFormWrapper  (props:StepFormWrapperProps) {

          const MyForm = useForm();


          const handleSubmit = (values:any) => {
            console.log(values)
            //remove any value that is empty from object before submit to avoid crash
            let finalObj = assignValuesToEmptyProps(values);
            props.onSubmit(finalObj);

          }

          const  goNext = ()=> {


            window.scrollTo(0, 0)


          }

          const gotoStep = (step:string,stepNumber:number,active:number)=>{

               if(stepNumber < (active + 1 )){
                  MyForm.goToStep(step);
               }else{
                 if(MyForm.isStepValid){
                    MyForm.goToStep(step);
                 }
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

                                           {
                                             props.steps != 1?
                                             <StepIndicatorComponent
                                             jumpToIndex={(step:string,stepNumber,active)=> gotoStep(step,stepNumber,active)}
                                             stepNumber={props.steps}
                                             active = {MyForm.currentStep.index}
                                           />
                                           :null

                                           }
                                           <form // create an html form
                                              noValidate // Disable native html validation
                                              onSubmit={MyForm.submitStep} // Pass the Formiz submit to the onSubmit
                                            >

                                            {props.children}
                                            {MyForm.isLastStep ? (
                                              <button
                                                type="submit" // Create a submit button
                                                disabled={!MyForm.isValid} // Disable the button if the form is not valid
                                                className="btn ml-4 btn-primary btn-lg ">Submit</button>
                                            ) : (
                                              <button
                                              type="submit" // Create a submit button
                                              onClick={goNext}

                                              disabled={!MyForm.isStepValid} // Disable the button if the form is not valid
                                              className="btn ml-4 btn-primary btn-lg ">Next</button>

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
