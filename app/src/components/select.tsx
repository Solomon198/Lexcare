import React from 'react';


type SelectComponentProps = {
     title : string,
     placeholder : string,
     options : string[],
     name : string,
     onChangeText:(text:string)=>void

}

const SelectComponent = (props:SelectComponentProps)=> (
  <>
    <input type="hidden" name="intervention" id="intervention" defaultValue="out_patient" />
    <div className="form-group">
    <label htmlFor="field-ta" className="col-sm-12 control-label">
         {props.title}
    </label>
    <div className="col-sm-12">

        <select
        onChange={(e)=>props.onChangeText(e.target.value)}
        className="client_names form-control"

>
           <option >--- {props.placeholder} ---</option>
           {
               props.options.map((val:string)=>
                 <option value={val}>{val}</option>
               )
           }
        </select>

        <input type="hidden" name={props.name} id={props.name} />
        <input type="hidden" name="daily_register_id" id="daily_register_id" />
        <div className="help-block form-text with-errors form-control-feedback" />

    </div>
   </div>
</>
)

export default SelectComponent;



