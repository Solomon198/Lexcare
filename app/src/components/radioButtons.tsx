import React from 'react';

type  RadioButtonsComponentProps = {

     title : string,
     name : string,
     options : string[],
     onChangeText:(text:string)=>void

}

const RadioButtonsComponent = (props:RadioButtonsComponentProps)=> (

    <div className="form-group">
        <label htmlFor="field-ta" className="col-sm-12 control-label">{props.title}</label>
        <div className="col-sm-12">
        {
            props.options.map((val:string)=>
                <>
                    <label className="radio-inline">
                    <input
                    onChange={(e)=>props.onChangeText(e.target.value)}
                    type="radio" name={props.name} defaultValue={val.toLowerCase()} /> {val}
                    </label><br />
                </>
            )
        }
        </div>
        <div className="help-block form-text with-errors form-control-feedback" />
    </div>
)

export default RadioButtonsComponent;
