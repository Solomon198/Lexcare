import React from 'react';
import {useField} from '@formiz/core'

type InputComponentProps = {

      name : string,
      required?:any,
      title:string,
      type:any,
      placeholder:string,

}


const InputComponent  = (props:InputComponentProps)=> {

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

  return (
    <div className="form-group">
    <label htmlFor="field-ta" className="col-sm-12 control-label">
       {title}
        {!!required && ' *'}
      </label>
    <div className="col-sm-12">
      <input
          onChange={(e)=>setValue(e.target.value)}
          type={type ?? "text"}
          value={value ?? ""}
          name={props.name}
          id={props.name}
          style={{borderWidth:1}}
          placeholder={props.placeholder}
          autoComplete="off"
          className={`demo-input form-control ${showError && "border-danger"}`}
          onBlur={() => setIsTouched(true)}
      />
    </div>
    {showError && (
        <div style={{marginLeft:10,fontSize:13}} id={`${id}-error`} className="demo-form-feedback text-danger">
          { errorMessage }
        </div>
      )}
  </div>
)
}


export default InputComponent
