import React,{useState} from 'react';
import {useField} from '@formiz/core'

type TextAreaProps = {

      name : string,
      required?:any,
      title:string,
      type?:any,
      placeholder:string,
      state?:any

}

const TextArea  = (props:TextAreaProps)=> {

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
  const [initialize,setInitialize] = useState(false);

  if(!initialize){
    if(props.state){
      setValue(props.state[props.name]);
      setInitialize(true);
    }else{
      setInitialize(true);
    }

    }

  return (
    <div className="form-group">
        <label htmlFor="field-ta" className="col-sm-12 control-label">
       {title}
        {!!required && ' *'}
      </label>
     <div className="col-sm-12">

          <textarea

              cols={40}
              rows={5}
              className={`demo-input form-control ${showError && "border-danger"}`}
              defaultValue={""}
              onChange={(e)=>setValue(e.target.value)}
              value={value ?? ""}
              name={props.name}
              id={props.name}
              style={{borderWidth:1}}
              placeholder={props.placeholder}
              onBlur={() => setIsTouched(true)}

           />

        </div>
        {showError && (
        <div style={{marginLeft:10,fontSize:13}} id={`${id}-error`} className="demo-form-feedback text-danger">
          { errorMessage }
        </div>
      )}
  </div>

)}


export default TextArea
