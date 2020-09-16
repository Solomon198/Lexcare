
import React from 'react';
import {useField} from '@formiz/core'
import $ from 'jquery'
import TextField from "@material-ui/core/TextField"
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

                        <TextField
                            id="date"
                            InputProps={{disableUnderline:true}}
                            label=""
                            onChange={(e)=> setValue(e.target.value)}
                            type="date"
                            name={name}
                            value={value}
                            placeholder={placeholder}
                            onBlur={()=>setIsTouched(true)}
                            className={`form-control demo-input ${showError && "border-danger"}`}
                            style={{borderWidth:1,borderColor:"lightgray",borderStyle:"solid",textDecoration:'none',padding:3}}
                            InputLabelProps={{
                              shrink: true,
                            }}
                          />
               </div>
                 {showError && (
                  <div style={{marginLeft:10,fontSize:13}} id={`${id}-error`} className="demo-form-feedback text-danger">
                    { errorMessage }
                  </div>
                )}
    </div>
)}


export default DatePickerComponent










