
import React from 'react';

type DatePickerComponentProps = {
     name : string,
     title : string,
     placeholder : string,
     type :string,
     onChangeText:(date:string)=>void
}

const DatePickerComponent   = (props:DatePickerComponentProps)=> (

    <div className="form-group ">

            <label htmlFor="field-ta" className="col-sm-12 control-label">{props.title}</label>
            <div className="col-sm-12">
                 <input
                  onChange={(e)=>props.onChangeText(e.target.value)}
                  type={props.type} name={props.name}  id={props.name} className="form-control"

                 autoComplete="off" placeholder={props.placeholder} />
                {/* <div className="help-block form-text with-errors form-control-feedback">
                    <ul className="list-unstyled">
                        <li>{props.dataError}</li>
                    </ul>
                </div> */}
               </div>
    </div>
)


export default DatePickerComponent










