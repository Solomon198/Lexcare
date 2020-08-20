import React from 'react';


type StepIndicatorComponentProps = {
      stepNumber : number,
      jumpToIndex : (param:number)=>void,
      active : number,


}

const StepIndicatorComponent  = (props:StepIndicatorComponentProps)=> (

  <div className="stepwizard">

        <div className="stepwizard-row setup-panel">

        { Array(props.stepNumber).fill(null).map((_value:any,index:number)=>

              <div onClick={()=>props.jumpToIndex(index+1)} className="stepwizard-step">

                <a

                    type="button"
                    className={`btn btn-circle btn-default ${props.active == (index+1)?"btn-primary text-white":null}`}>
                    {index+1}


                  </a>

                  <p>Step {index+1}</p>

                </div>
          )}

          </div>

  </div>



)



export default StepIndicatorComponent;
