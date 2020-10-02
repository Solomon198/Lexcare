import React from 'react';
import {useField} from '@formiz/core'

type InputComponentProps = {

      name : string,
      required?:any,
      title:string,
      type:any,
      placeholder:string,
      inputValue?:string

}


const InputComponent  = (props:InputComponentProps)=> {

  const {
    errorMessage,
    id,
    isValid,
    isSubmitted,
    setValue,
    value = props.inputValue,
  } = useField(props);



  const { title, type, required, } = props
  const [isTouched, setIsTouched] = React.useState(false)
  const showError = !isValid && (isTouched || isSubmitted);
  const handleChange = (v)=>{

      if(type == "number"){

        const _num =  parseInt(v);
        const _isNaN = isNaN(_num);
        if(!_isNaN){
          return setValue(_num)
        }

        return;

      }

      return setValue(v);
  }

  return (
    <div className="form-group">
    <label htmlFor="field-ta" className="col-sm-12 control-label">
       {title}
        {!!required && ' *'}
      </label>
    <div className="col-sm-12">
      <input
          onChange={(e)=> handleChange(e.target.value)}
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
