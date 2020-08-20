import React from 'react';


type CheckBoxProps = {
   name : string,
   title : string,
   onChangeText:(text:string)=>void
}

const CheckBox = (props:CheckBoxProps)=>(

    <div className="form-group">

      <label className="checkbox col-sm-12 control-label">

      <input value={props.title} onChange={(e)=>props.onChangeText(e.target.value)}  type="checkbox" name={props.name} />

           {props.title}

       </label>

     </div>

)


export default CheckBox;
