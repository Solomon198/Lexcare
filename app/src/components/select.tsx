import React,{useState} from 'react';
import {useField} from '@formiz/core'

type SelectComponentProps = {

      name : string,
      required?:any,
      title:string,
      type?:any,
      placeholder:string,
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


const SelectComponent = (props:SelectComponentProps)=> {

  const {
    errorMessage,
    id,
    isValid,
    isSubmitted,
    setValue,
    value,
  } = useField(props);



  const { title, type, required,hasDependable,onValueSelected,isDependable,dependableValue,recievedValue } = props
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





  const handleChange = (v)=>{



    if(type == "number"){

      const _num =  parseInt(v);
      const _isNaN = isNaN(_num);
      if(!_isNaN){
        if(hasDependable){onValueSelected(_num)}
        return setValue(_num)
      }

      return;

    }

    if(hasDependable){onValueSelected(v)}
    return setValue(v);
}


     const UISelect = ()=>(
        <>
          <input type="hidden" name="intervention" id="intervention" defaultValue="out_patient" />
          <div className="form-group">
          <label htmlFor="field-ta" className="col-sm-12 control-label">
             {title}
              {!!required && ' *'}
            </label>
          <div className="col-sm-12">

              <select

              onChange={(e)=>handleChange(e.target.value)}
              name={name}
              style={{borderWidth:1}}
              onBlur={()=>setIsTouched(true)}
              value={value}
              className={`demo-input form-control ${showError && "border-danger"}`}


      >
                 <option >--- {props.placeholder} ---</option>
                 {
                     props.options.map((val:string)=>
                       <option selected={value == val} value={val}>{val}</option>
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

     )


     if(isDependable && recievedValue == dependableValue ){

       return UISelect();

      }

      if(!isDependable){
       return UISelect();
      }

      return<></>

  }

export default SelectComponent;



