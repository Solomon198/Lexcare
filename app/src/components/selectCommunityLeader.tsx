import React, {  useState} from 'react';
import {useField} from '@formiz/core'
import MultiSelect from "react-multi-select-component";
import { css } from "goober";
import {getDocuments} from '../../realm/queries/readQueries';
import Schema from '../../realm/schemas/index';






type MultiSelectAndSearchComponentProps = {

  name : string,
  required?:any,
  title:string,
  state?:any

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



  const [selected,setSelected] = useState()
  const { title, required } = props
  const [isTouched, setIsTouched] = React.useState(false)
  const showError = !isValid && (isTouched || isSubmitted);
  const [initialize,setInitialize] = useState(false);

  if(!initialize){
    if(props.state){
      console.log(props.state)
      setValue(props.state[props.name]);
      setSelected([{label:props.state[props.name],value:props.state[props.name]}] as any);

      setInitialize(true);

    }else{
      setInitialize(true);
    }

  }

      let data:any[] = [];
      const docs:any[] = getDocuments(Schema.CommunityLeaders.name,"","","",true);

      docs.forEach((val:any)=>{
        data.push({label:val.full_name,value:val.leader_id})
      })



  const handleChange = (valz:any)=> {
      if(valz.length > 1){
        valz.shift()
      }



      setValue(valz[0].value);
      setSelected(valz);
  }


  return(
    <div className="form-group mt-3">



    <label htmlFor="field-ta" className="col-sm-12 control-label">
       {title}
        {!!required && ' *'}
      </label>
    <div onBlur={()=>setIsTouched(true)} className="col-sm-12" style={{maxWidth:500}}>

       <MultiSelect
         options={data}
         onChange={handleChange}
         hasSelectAll={false}
         disabled={props.state?true:false}
         labelledBy="Select"
         ItemRenderer={DefaultItemRenderer}
         value={selected|| []}
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
      <span style={{fontSize:17}}>{props.option.client_card_number}</span>
    </div>
  );
};








