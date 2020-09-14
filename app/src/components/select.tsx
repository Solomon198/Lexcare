import React from 'react';
import {useField} from '@formiz/core'

type SelectComponentProps = {

      name : string,
      required?:any,
      title:string,
      type?:any,
      placeholder:string,
      options:any[]

}


const SelectComponent = (props:SelectComponentProps)=> {

  const {
    errorMessage,
    id,
    isValid,
    isSubmitted,
    setValue,
    value,
  } = useField(props);



  const { title, type, required } = props
  const [isTouched, setIsTouched] = React.useState(false)
  const showError = !isValid && (isTouched || isSubmitted);



  return(
  <>
    <input type="hidden" name="intervention" id="intervention" defaultValue="out_patient" />
    <div className="form-group">
    <label htmlFor="field-ta" className="col-sm-12 control-label">
       {title}
        {!!required && ' *'}
      </label>
    <div className="col-sm-12">

        <select
        onChange={(e)=>setValue(e.target.value)}
        name={name}
        style={{borderWidth:1}}
        onBlur={()=>setIsTouched(true)}
        value={value}
        className={`demo-input form-control ${showError && "border-danger"}`}


>
           <option >--- {props.placeholder} ---</option>
           {
               props.options.map((val:string)=>
                 <option value={val}>{val}</option>
               )
           }
        </select>

        <input type="hidden" name={name} id={name} />
        <input type="hidden" name="daily_register_id" id="daily_register_id" />
        {showError && (
        <div style={{marginLeft:10,fontSize:13}} id={`${id}-error`} className="demo-form-feedback text-danger">
          { errorMessage }
        </div>
      )}

    </div>
   </div>
</>
)}

export default SelectComponent;



