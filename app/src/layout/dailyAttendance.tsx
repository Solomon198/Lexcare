import React from "react";

import {getDailyAttendance} from '../../realm/queries/readQueries';

import {dailyAttendanceProperties} from '../../types/dailyAttendance'

import moment from 'moment'


type props = {
  history : any
}
export default class DailyAttendance extends React.Component<props> {


  timer:any;

  state = {
    dailyAttendance:[]
  }
  addRecord(){
       this.props.history.push("/daily-attendance-register");
  }



  componentWillUnmount(){

    clearInterval(this.timer)

  }

  componentDidMount(){

    this.setState({dailyAttendance:getDailyAttendance(this)},()=>{

      this.timer = setInterval(()=>{
        this.setState({dailyAttendance:getDailyAttendance(this)})
      },2000)

    })


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
                <div className="form-desc">
                  <form
                    role="form"
                    encType="multipart/form-data"
                    className="form-horizontal form-groups"
                    action="#"
                    method="post"
                  >
                    <table
                      border={0}
                      cellSpacing={0}
                      cellPadding={0}
                      className="table"
                    >
                      <tbody>
                        <tr>
                          <td>
                            <input
                              type="text"
                              name="from"
                              className="form-control date_filter"
                              data-format="D, dd MM yyyy"
                              placeholder="Select start date"
                              autoComplete="off"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              name="to"
                              className="form-control date_filter"
                              data-format="D, dd MM yyyy"
                              placeholder="Select end date (Optional)"
                              autoComplete="off"
                            />
                          </td>
                          <td>
                            <input
                              type="submit"
                              className="btn btn-info"
                              value="Search Records"
                            />
                            &nbsp;
                            <button onClick={()=>this.addRecord()}  className="btn btn-success">
                              <i className="fa fa-plus" /> &nbsp; Add Record
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </form>
                </div>
                <div className="table-responsive">
                  <table
                    id="daily_attendance"
                    width="100%"
                    className="table table-striped table-lightfont display"
                  >
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
                    <tbody>
                        {
                          this.state.dailyAttendance.map((val:dailyAttendanceProperties,index)=>

                          <tr>
                              <td> {index + 1}</td>
                              <td>{moment(val.date).format('l')}</td>
                              <td>{val.client_name}</td>
                              <td>{val.client_card_number}</td>
                              <td>{moment(val.date_of_birth).format('l')}</td>
                              <td>{val.sex}</td>
                              <td>{val.first_contact_with_facility?"Yes":"No"}</td>
                              <td>
                                <button className="btn btn-success btn-small">Edit</button>
                              </td>
                        </tr>



                          )
                        }
                    </tbody>
                    {/* <tfoot>
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
                    </tfoot> */}
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
