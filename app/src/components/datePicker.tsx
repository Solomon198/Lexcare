
import React from 'react';
import {useField} from '@formiz/core'
import DatePicker from 'react-date-picker';


type DatePickerComponentProps = {
     name : string,
     title : string,
     placeholder : string,
     type :string,
     required:string,
}



const DatePickerComponent   = (props:DatePickerComponentProps)=> {
  const {
    errorMessage,
    id,
    isValid,
    isSubmitted,
    setValue,
    value,
  } = useField(props);



  const { title, type, required,name,placeholder} = props
  const [isTouched, setIsTouched] = React.useState(false)
  const showError = !isValid && (isTouched || isSubmitted);


  return(

    <div className="form-group ">

            <label htmlFor="field-ta" className="col-sm-12 control-label">
            {title}
              {!!required && ' *'}
            </label>

            <div className="col-sm-12">

                 <input
                  onChange={(e)=>setValue(e.target.value)}
                  type={type}
                  name={name}
                  id={name}
                  value={value}
                  style={{borderWidth:1}}
                  className={`demo-input form-control ${showError && "border-danger"}`}
                  autoComplete="off"
                  onBlur={() => setIsTouched(true)}
                  placeholder={placeholder} />

               </div>
               {showError && (
                  <div style={{marginLeft:10,fontSize:13}} id={`${id}-error`} className="demo-form-feedback text-danger">
                    { errorMessage }
                  </div>
                )}
    </div>
)}


export default DatePickerComponent










