import React,{useState} from 'react';
import {useField} from '@formiz/core'

type RadioButtonsComponentProps = {

      name : string,
      required?:any,
      title:string,
      options:any[],
      state?: any

}


const RadioButtonsComponent = (props:RadioButtonsComponentProps)=>{

  const {
    errorMessage,
    id,
    isValid,
    isSubmitted,
    setValue,
    value,
  } = useField(props);



  const { title, type, required, name } = props
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

  return(

    <div className="form-group">
        <label htmlFor="field-ta" className="col-sm-12 control-label">
       {title}
        {!!required && ' *'}
      </label>
        <div className="col-sm-12">
        {
            props.options.map((val:string)=>
                <div style={{flexDirection:'row',display:"flex",alignContent:'center',alignItems:'center'}}>

                    <input
                       onChange={()=>setValue(val)}
                       name={name}
                       onBlur={()=>setIsTouched(true)}
                       type="radio"
                       checked={value == val}

                      />
                      <label style={{marginTop:4,marginLeft:10}}>
                       {val}
                    </label>
                    <br />
                </div>
            )
        }
        </div>
        {showError && (
        <div style={{marginLeft:10,fontSize:13}} id={`${id}-error`} className="demo-form-feedback text-danger">
          { errorMessage }
        </div>
      )}
    </div>
)}

export default RadioButtonsComponent;
