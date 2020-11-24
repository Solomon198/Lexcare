import React,{useState} from 'react';
import {useField} from '@formiz/core'

type InputComponentProps = {

      name : string,
      required?:any,
      title:string,
      type:any,
      placeholder:string,
      value?:string,
      state?:any,
        //fields for the depending fields
      isDependable?:boolean,
      dependableValue?:any,
      recievedValue?:any,

      //props for field that other fields depend on
      hasDependable?:boolean,
      onValueSelected?:(value:any)=>void


}


const InputComponent  = (props:InputComponentProps)=> {

  const {
    errorMessage,
    id,
    isValid,
    isSubmitted,
    setValue,
    value,
  } = useField({name:props.name,required:props.required,defaultValue:props.type=="number"?0:""});



  const { title, type, required,isDependable,dependableValue,recievedValue } = props
  const [initialize,setInitialize] = useState(false);
  const [isTouched, setIsTouched] = React.useState(false)
  const showError = !isValid && (isTouched || isSubmitted);

  if(!initialize){
     if(props.state){

       if(props.name == "first_name"){
             let name = props.state["client_name"].split(" ");
             setValue(name[0]);
             setInitialize(true);
       }else if(props.name == "last_name"){
           let name = props.state["client_name"].split(" ");
           setValue(name[1]);
           setInitialize(true);
       }else{
        setValue(props.state[props.name]);
        setInitialize(true);
       }

     }else{
       setInitialize(true);
     }

  }

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

  const InputUI = ()=>(
    <div className="form-group">
    <label htmlFor="field-ta" className="col-sm-12 control-label">
       {title}
        {!!required && ' *'}
      </label>
    <div className="col-sm-12">
      <input
          onChange={(e)=> handleChange(e.target.value)}
          type={type ?? "text"}
          defaultValue={0}
          value={value ? value : ""}
          name={props.name}
          disabled={ props.state && props.name == "client_card_number" ? true:false}
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
        let show = false;

        if(typeof(recievedValue) == "object"){
           let index = recievedValue.indexOf(dependableValue);
           if(index >= 0){
             show = true;
           }else{
             show = false;
           }
        }else{
            if(recievedValue == dependableValue){
              show = true;
            }else{
              show = false;
            }
        }

        if(isDependable && show ){

          return InputUI();

        }

        if(!isDependable){
          return InputUI();
        }

        return<></>



}


export default InputComponent
