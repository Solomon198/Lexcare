import React from 'react';
import {useField} from '@formiz/core'


type CheckBoxProps = {
   name : string,
   title : string,
   required? : any,
   options ? : any[]
}

const CheckBox = (props:CheckBoxProps)=>{

  const {
    errorMessage,
    id,
    isValid,
    isSubmitted,
    setValue,
    value,

  } = useField(props);



  const { title, required , name} = props
  const [isTouched, setIsTouched] = React.useState(false)
  const showError = !isValid && (isTouched || isSubmitted);

  const options = ["red","blue","white","yellow","Fanta","Mirror","whitish","Fans"]

  const handleChange = (item:string)=> {
      let _data = value ? value : [];
      let search = value.indexOf(item);
      if(search == -1){
        _data.push(item);
      }else{
        _data.splice(search,1);
      }

      setValue(_data);
  }

  const checked = (item)=>{
      let _data = value ? value : [];
      let search = _data.indexOf(item);
      if(search == - 1) return false;
      return true;
  }


  return (

    <div className="form-group">

       <label htmlFor="field-ta" className="col-sm-12 control-label">
       {title}
        {!!required && ' *'}
      </label>
       {
         options.forEach((item)=>
         <div style={{display:'flex'}} >
            <input
              name={name}
              type="checkbox"
              checked={checked(item)}
              style={{marginTop:5,marginRight:10}}
              onChange={(e)=>handleChange(e.target.value)}
              onBlur={()=>setIsTouched(true)}

            />

            {item}
       </div>
         )
       }
     {showError && (
        <div style={{marginLeft:10,fontSize:13}} id={`${id}-error`} className="demo-form-feedback text-danger">
          { errorMessage }
        </div>
      )}


     </div>

)}


export default CheckBox;
