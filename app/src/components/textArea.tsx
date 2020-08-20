import React from 'react';


type TextAreaProps = {
     id : string,
     title : string,
     name : string,
     placeholder : string,
     onChangeText:(text:string)=>void
}

const TextArea  = (props:TextAreaProps)=> (
    <div className="form-group">
        <label htmlFor={props.id} className="col-sm-12 control-label">{props.title}</label>
        <div className="col-sm-12">
        <textarea
           onChange={(e)=>props.onChangeText(e.target.value)}
           name={props.name}
           cols={40}
           rows={5}
           className="form-control"
           id={props.id}
           placeholder={props.placeholder}
           defaultValue={""} />
        </div>
        <div className="help-block form-text with-errors form-control-feedback" />
  </div>

)


export default TextArea
