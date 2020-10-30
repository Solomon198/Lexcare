
import React from 'react';
import TextField from "@material-ui/core/TextField"
type DatePickerComponentProps = {
     placeholder? : string,
     onChange:(value:any)=>void,
     disabled?:boolean
}



const DatePickerComponent   = (props:DatePickerComponentProps)=> {

  return(

                        <TextField

                            id="date"
                            disabled={props.disabled}
                            InputProps={{disableUnderline:false}}
                            label={props.placeholder}
                            onChange={(e)=> props.onChange(e.target.value)}
                            type="date"
                            name={name}


                            InputLabelProps={{
                              shrink: true,

                            }}
                          />

)}


export default DatePickerComponent










