import React from 'react';
import {useField} from '@formiz/core'
import MultiSelect from "react-multi-select-component";
import { css } from "goober";



type MultiSelectAndSearchComponentProps = {

  name : string,
  required?:any,
  title:string,
  type:any,
  placeholder:string,
  options:any[]

}




const MultiSelectAndSearchComponent = (props:MultiSelectAndSearchComponentProps)=> {


  const {
    errorMessage,
    id,
    isValid,
    isSubmitted,
    setValue,
    value,
  } = useField(props);



  const { title, type, required,options } = props
  const [isTouched, setIsTouched] = React.useState(false)
  const showError = !isValid && (isTouched || isSubmitted);
  let data = [];
  options.forEach((val)=>{
    data.push({label:val,value:val})
  })


  return(
    <div className="form-group">
    <label htmlFor="field-ta" className="col-sm-12 control-label">
       {title}
        {!!required && ' *'}
      </label>
    <div className="col-sm-12" style={{maxWidth:500}}>




       <MultiSelect
         options={data}
         onChange={setValue}
         labelledBy="Select"
         ItemRenderer={DefaultItemRenderer}
         value={value|| []}
        //  multiple
       />
    </div>
    {showError && (
        <div style={{marginLeft:10,fontSize:13}} id={`${id}-error`} className="demo-form-feedback text-danger">
          { errorMessage }
        </div>
      )}
  </div>
)}

export default MultiSelectAndSearchComponent;





const DefaultRenderer = css({
  "& input,& span": {
    verticalAlign: "middle",
    margin: 0,
  },
  span: {
    display: "flex",
    paddingLeft: "5px",
  },
  "&.disabled": {
    opacity: 0.5,
  },
});

const DefaultItemRenderer = (props:any) => {
  return (
    <div
      className={`${DefaultRenderer} item-renderer d-flex align-items-center ${props.disabled && "disabled"}`}
    >
      <input
        type="checkbox"
        onChange={props.onClick}
        checked={props.checked}
        tabIndex={-1}
        disabled={props.disabled}
      />
      <span>{props.option.label}</span>
    </div>
  );
};








