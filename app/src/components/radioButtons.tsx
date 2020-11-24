import React,{useState} from 'react';
import {useField} from '@formiz/core'

type RadioButtonsComponentProps = {

      name : string,
      required?:any,
      title:string,
      options:any[],
      state?: any,
       //fields for the depending fields
       isDependable?:boolean,
       dependableValue?:any,
       recievedValue?:any,

       //props for field that other fields depend on
       hasDependable?:boolean,
       onValueSelected?:(value:any)=>void


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



  const { title, type, required, name,hasDependable,onValueSelected} = props
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

  const handleValueChange = (v)=>{
    if(hasDependable){
      onValueSelected(v);
    }
    setValue(v)
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
                       onChange={()=>handleValueChange(val)}
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
