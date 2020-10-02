import React, {  useState} from 'react';
import {useField} from '@formiz/core'
import MultiSelect from "react-multi-select-component";
import { css } from "goober";
import {getDocuments} from '../../realm/queries/readQueries';
import Schema from '../../realm/schemas/index';
import TextField from "@material-ui/core/TextField";


function removeAttendedClient(dailyAttendanceRecords:any[],interventions:any[],interventionFilterKey:string){

     dailyAttendanceRecords.forEach((dailyClient:any,index)=>{
        interventions.forEach((interventionClient:any)=>{
            if(dailyClient.client_card_number == interventionClient[interventionFilterKey]){
              dailyAttendanceRecords.splice(index,1);
            }
        })
     })

     return dailyAttendanceRecords;
}


type DatePickerProps = {
     name : string,
     title: string,
     onChange:(v:any)=>void
}

type MultiSelectAndSearchComponentProps = {

  name : string,
  required?:any,
  name2 : string,
  title:string,

  date_name :string,
  date_title : string,
  date_required: string,

  intervention:string,


}


type ClientNumber = {

  name : string,
  value: any,
}

const DatePicker = (props:DatePickerProps) =>{

  const {
    setValue,
    value,
  } = useField(props);

  const handleChange = (v:any)=>{
      setValue(v);
      props.onChange(v)
  }


  return(
    <div className="col-sm-12 mb-3">
     <label style={{marginLeft:-10}} htmlFor="field-ta" className="col-sm-12 control-label">
               {props.title}
     </label>
    <TextField
      id="date"
      InputProps={{disableUnderline:true}}
      label=""
      onChange={(e)=> handleChange(e.target.value)}
      type="date"
      name={props.name}
      value={value}
      className={`form-control demo-input`}
      style={{borderWidth:1,borderColor:"lightgray",borderStyle:"solid",textDecoration:'none',padding:3}}
      InputLabelProps={{
        shrink: true,
      }}
    />
    </div>
  )
}



const InputClientNumber = (props:ClientNumber) => {

  const {
    setValue,
    value,
  } = useField(props);

  if(value != props.value){
    setValue(props.value)
  }


  return (
    <input
    value={value}
    type="text"
    disabled
    placeholder="Enter Client Card Number"
    className={`demo-input form-control mt-2`}
/>
  )
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


  const [cardNumber,setCardNumber] = useState(null);
  const [selected,setSelected] = useState([]);


  const { title, required } = props
  const [isTouched, setIsTouched] = React.useState(false)
  const [recordDate,setRecordDate] = useState();
  const showError = !isValid && (isTouched || isSubmitted);
  let data:any[] = [];
  if(recordDate){
      const docs:any[] = getDocuments(Schema.DailyAttendanceSchema.name,"date",recordDate,recordDate);
      const interventionRecord:any[] = getDocuments(props.intervention,props.date_name,recordDate,recordDate);
      const unAttendedClient = removeAttendedClient(docs,interventionRecord,props.name2);

      unAttendedClient.forEach((val:any)=>{
        data.push({...val,label:val.client_name,value:val.client_name})
      })
  }


  const handleChange = (valz:any)=> {
      if(valz.length > 1){
        valz.shift()
      }



      setValue(valz[0].label);
      setSelected(valz);
      setCardNumber(valz[0].client_card_number)
  }


  return(
    <div className="form-group mt-3">

   <DatePicker

      onChange={(date:any)=>setRecordDate(date)}
      title={props.date_title}
      name = {props.date_name}

   />


    <label htmlFor="field-ta" className="col-sm-12 control-label">
       {title}
        {!!required && ' *'}
      </label>
    <div className="col-sm-12" style={{maxWidth:500}}>

       <MultiSelect
         disabled={!recordDate?true:false}
         options={data}
         onChange={handleChange}
         hasSelectAll={false}
         labelledBy="Select"
         ItemRenderer={DefaultItemRenderer}
         value={selected|| []}
        //  multiple
       />

       <InputClientNumber
           name={props.name2}
           value={cardNumber}
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








