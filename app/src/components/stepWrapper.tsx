import React from 'react';



type  StepProps = {
     active : number,
     position : number,
     title : string,
     children : any
}
export default function Step (props:StepProps){

     return (
      <div
         className="row setup-content"
         style={{display:props.active == props.position ? 'block' : "none"}}>
        <div className="col-sm-12">
          <div className="col-md-12">

               <h5>{props.title}</h5>

               {props.children}
           </div>
         </div>
      </div>

     )
}
