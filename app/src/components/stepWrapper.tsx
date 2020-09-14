import React from 'react';
import {FormizStep} from '@formiz/core'

type  StepProps = {
     position : number,
     title : string,
     children : any
}
export default function Step (props:StepProps){

     return (
      <FormizStep name={"step"+props.position}>
      <div
         className="row setup-content"
         >
        <div className="col-sm-12">
          <div className="col-md-12">

               <h5>{props.title}</h5>

               {props.children}
           </div>
         </div>
      </div>
      </FormizStep>

     )
}
