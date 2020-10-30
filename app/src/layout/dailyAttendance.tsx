import React from "react";

import {getDocuments} from '../../realm/queries/readQueries';

import RenderData from '../components/pagination';

import DatePicker from '../components/component-free/datePicker'

import {dailyAttendanceProperties} from '../../types/dailyAttendance'

import moment from 'moment'

import schemas from "../../realm/schemas";
import { showToast } from "../../realm/utils/utilsUI";


type props = {
  history : any
}
export default class DailyAttendance extends React.Component<props> {


  addRecord(){
       this.props.history.push("/daily-attendance-register");
  }

  edit(payload:any){
    this.props.history.push({
      pathname:"/daily-attendance-register",
      state:payload,
    })
  }


  componentDidMount(){

    window.scrollTo(0, 0)

  }




  render() {
    return (

      <div className="content-w">
        <div className="content-i">
          <div className="content-box">
            <div className="element-wrapper">
              <h6 className="element-header">Daily Attendance</h6>
              <div className="element-box">
                <h5 className="form-header">All Daily Attendance Records</h5>



                          <RenderData
                          dataField="date"
                          addRecord={()=>this.addRecord()}
                          editRecord={(payload)=>this.edit(payload)}
                          SchemaName={schemas.DailyAttendanceSchema.name}

                          tableHead={

                           <thead>
                            <tr>
                              <th>#</th>
                              <th>Date</th>
                              <th>Client Name</th>
                              <th>Client Card No.</th>
                              <th>Date of Birth</th>
                              <th>Sex</th>
                              <th>First Contact With Facility</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          }

                            properties={[
                              {key:"date",isDate:true},
                              {key:"client_name"},
                              {key:"client_card_number"},
                              {key:"date_of_birth",isDate:true},
                              {key:"sex"},
                              {key:"first_contact_with_facility"}
                            ]}


                          />






              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
