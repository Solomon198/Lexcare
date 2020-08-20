import React from 'react';


type MultiSelectAndSearchComponentProps = {

          name : string,
          title : string,
          selectId: string,
          options : string[],
          searchInputId: string,
          onChangeText:(selected:string)=>void


}


const MultiSelectAndSearchComponent = (props:MultiSelectAndSearchComponentProps)=> (
    <div className="form-group">
    <label htmlFor="field-ta" className="col-sm-12 control-label">
        {props.title}
    </label>
    <div className="col-sm-12">
      <div className="dropdown bootstrap-select show-tick disease" style={{width: '100%'}}>
        <select
            onChange={(e)=>props.onChangeText(e.target.value)}
            name={props.name}
            className="selectpicker disease"
            id={props.selectId}
            multiple
            data-live-search="true"
            data-width="100%"
            data-style="none"
            tabIndex={-98}
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
                 aria-controls={props.searchInputId}
                 aria-autocomplete="list" />
            </div>

            <div
                 className="inner show"
                 role="listbox"
                 id={props.searchInputId}
                 tabIndex={-1}
                 aria-multiselectable="true">

                 <ul className="dropdown-menu inner show" role="presentation" />

            </div>

        </div>



      </div>



    </div>
    <div className="help-block form-text with-errors form-control-feedback" />
  </div>
)

export default MultiSelectAndSearchComponent;










