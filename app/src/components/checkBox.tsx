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




  return (

    <div className="form-group">



         <div style={{display:'flex'}} >
            <input
              name={name}
              type="checkbox"
              style={{marginTop:5,marginRight:10}}
              onChange={(e)=> e.target.checked?setValue(title):setValue("")}
              onBlur={()=>setIsTouched(true)}

            />

            {title}
       </div>

     {showError && (
        <div style={{marginLeft:10,fontSize:13}} id={`${id}-error`} className="demo-form-feedback text-danger">
          { errorMessage }
        </div>
      )}


     </div>

)}


export default CheckBox;
