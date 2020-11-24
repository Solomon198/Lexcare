import React,{useState} from 'react';
import {useField} from '@formiz/core'

type TextAreaProps = {

      name : string,
      required?:any,
      title:string,
      type?:any,
      placeholder:string,
      state?:any,
       //fields for the depending fields
       isDependable?:boolean,
       dependableValue?:any,
       recievedValue?:any,

       //props for field that other fields depend on
       hasDependable?:boolean,
       onValueSelected?:(value:any)=>void


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



  const { title, type, required,isDependable,dependableValue,recievedValue } = props
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

  const TextAreaUI = ()=>(
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
              value={value && value != "None" ? value : ""}
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
)

  if(isDependable && dependableValue == recievedValue){
      return TextAreaUI();
  }

  if(!isDependable){
    return TextAreaUI();
  }


     return <></>
}


export default TextArea
