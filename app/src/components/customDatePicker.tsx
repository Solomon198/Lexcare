import React from 'react';


type CustomDatePickerProps = {

        title : string,
        day  : string,
        month : string,
        year : string,
        name : string,
        months:number[],
        days : number[],
        years : number[],
        onChangeDay:(text:string)=>void,
        onChangeMonth:(text:string)=>void,
        onChangeYear:(text:string)=>void



}

const CustomDatePicker = (props:CustomDatePickerProps)=>(

      <div className="form-group">

				<label>{props.title} </label>

				<div className="row">

					<div className="col-md-4">

            <label>Day</label>

              <select
                 onChange={(e)=>props.onChangeDay(e.target.value)} name={props.day} className="form-control">
								 { props.days.map((val:number)=>
                   <option value={val}>{val}</option>
                   )
                 }
							</select>

					</div>

					<div className="col-md-4">

						<label>Month</label>

            <select
              onChange={(e)=>props.onChangeMonth(e.target.value)}
             name={props.month} className="form-control">

              {props.months.map((val)=>

              <option value={val}>{val}</option>
                 )
                }
            </select>

					</div>

					<div className="col-md-4">

						<label>Year</label>

              <select
               onChange={(e)=>props.onChangeYear(e.target.value)}
              name={props.year} className="form-control">

                {props.years.map((val)=>

                  <option value={val}>{val}</option>
                    )
                }
						  </select>

					</div>

			  </div>

			</div>
)



export default CustomDatePicker
