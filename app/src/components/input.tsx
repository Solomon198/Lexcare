import React from 'react';



type InputComponentProps = {

      title : string,
      name : string,
      placeholder: string,
      type:string,
      onChangeText:(text:string)=>void,

}

const InputComponent  = (props:InputComponentProps)=> (
    <div className="form-group">
    <label htmlFor="field-ta" className="col-sm-12 control-label">{props.title}</label>
    <div className="col-sm-12">
      <input
          onChange={(e)=>props.onChangeText(e.target.value)}
          type={props.type}
          name={props.name}
          id={props.name}
          className="form-control"
          placeholder={props.placeholder}
          autoComplete="off"

      />
    </div>
    <div className="help-block form-text with-errors form-control-feedback" />
  </div>
)


export default InputComponent
