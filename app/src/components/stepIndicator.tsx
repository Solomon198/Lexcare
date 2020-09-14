import React from 'react';


type StepIndicatorComponentProps = {
      stepNumber : number,
      jumpToIndex : (step:string)=>void,
      active : number,
}

const StepIndicatorComponent  = (props:StepIndicatorComponentProps)=> (

  <div className="stepwizard">

        <div className="stepwizard-row setup-panel">

        { props.stepNumber != 1?
        Array(props.stepNumber).fill(null).map((_value:any,index:number)=>

        <div onClick={()=>props.jumpToIndex("step"+(index+1))} className="stepwizard-step">

          <a

              type="button"
              className={`btn btn-circle btn-default ${props.active == index ?"btn-primary text-white":null}`}>
              {index+1}


            </a>

            <p>Step {index+1}</p>

          </div>
    ):null
         }

          </div>

  </div>



)



export default StepIndicatorComponent;
