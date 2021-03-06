import React,{useState} from 'react';
import {useField} from '@formiz/core'
import MultiSelect from "react-multi-select-component";
import { css } from "goober";



type MultiSelectAndSearchComponentProps = {

  name : string,
  required?:any,
  title:string,
  options:any[],
  state?:any,
   //fields for the depending fields
   isDependable?:boolean,
   dependableValue?:any,
   recievedValue?:any,

   //props for field that other fields depend on
   hasDependable?:boolean,
   onValueSelected?:(value:any)=>void


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

  const [selectOption,setOption] = useState([])

  const { title, required,options,hasDependable,onValueSelected } = props
  const [isTouched, setIsTouched] = React.useState(false)
  const showError = !isValid && (isTouched || isSubmitted);
  const [initialize,setInitialize] = useState(false);

  let data = [];
  options.forEach((val)=>{
    data.push({label:val,value:val})
  })

  if(!initialize){
    if(props.state){
      setValue(props.state[props.name]);
      let formatSelected:any = [];
      props.state[props.name].forEach((val:string)=>{
        formatSelected.push({label:val,value:val})
      })
      setOption(formatSelected)
      setInitialize(true);
    }else{
      setValue([]);
      setInitialize(true);
    }

 }

  const handleChange = (change)=>{
     let dataChanged:string[] = [];
     change.forEach((val:any)=>{
         dataChanged.push(val.label)
     })
     if(hasDependable){onValueSelected(dataChanged)}
     setValue(dataChanged);
     setOption(change);
  }


  return(
    <div className="form-group">
    <label htmlFor="field-ta" className="col-sm-12 control-label">
       {title}
        {!!required && ' *'}
      </label>
    <div className="col-sm-12" style={{maxWidth:500}}>




       <MultiSelect
         options={data}
         hasSelectAll={false}
         onChange={handleChange}
         labelledBy="Select"
         ItemRenderer={DefaultItemRenderer}
         value={selectOption|| []}
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
      <span onClick={()=>props.onClick(props.option.label)}>{props.option.label}</span>
    </div>
  );
};








