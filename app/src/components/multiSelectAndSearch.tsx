import React from 'react';


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



  const { title, type, required } = props
  const [isTouched, setIsTouched] = React.useState(false)
  const showError = !isValid && (isTouched || isSubmitted);


  return(
    <div className="form-group">
    <label htmlFor="field-ta" className="col-sm-12 control-label">
       {title}
        {!!required && ' *'}
      </label>
    <div className="col-sm-12">
      <div className="dropdown bootstrap-select show-tick disease" style={{width: '100%'}}>
        <select

            onChange={(e)=>setValue(e.target.value)}
            name={name}
            onBlur={()=>setIsTouched(true)}
            style={{borderWidth:1}}
            id={name}
            multiple
            data-live-search="true"
            data-width="100%"
            data-style="none"
            tabIndex={-98}
            className={`demo-input form-control ${showError && "border-danger"}`}

          >

              <option>--- Please Select ---</option>
              <option>--- Add New disease ---</option>
              {
                  props.options.map((val:string,index:number)=>
                  <option value={index+1}>{val}</option>
                  )
              }

        </select>


         <div className="dropdown-menu ">

            <div className="bs-searchbox">
              <input
                 type="text"
                 className="form-control"
                 autoComplete="off"
                 role="combobox"
                 aria-label="Search"
                 aria-autocomplete="list" />
            </div>

            <div
                 className="inner show"
                 role="listbox"
                 tabIndex={-1}
                 aria-multiselectable="true">

                 <ul className="dropdown-menu inner show" role="presentation" />

            </div>

        </div>



      </div>



    </div>
    {showError && (
        <div style={{marginLeft:10,fontSize:13}} id={`${id}-error`} className="demo-form-feedback text-danger">
          { errorMessage }
        </div>
      )}
  </div>
)}

export default MultiSelectAndSearchComponent;










