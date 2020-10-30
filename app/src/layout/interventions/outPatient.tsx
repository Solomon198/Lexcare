import React from "react";
import Schema from '../../../realm/schemas/index';
import RenderData from '../../components/pagination';


type OutPatientProps = {
  history:any
}
export default class OutPatient extends React.Component<OutPatientProps>{

  addRecord(){
    this.props.history.push("/add-outpatient")
  }

  edit(payload:any){
    this.props.history.push({
      pathname:"/add-outpatient",
      state:payload
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
              <h6 className="element-header">Out Patient</h6>
              <div className="element-box">
                <h5 className="form-header">All Out Patient Records</h5>

                      <RenderData
                          SchemaName={Schema.OutPatient.name}
                          editRecord={(payload)=>this.edit(payload)}
                          addRecord={()=>this.addRecord()}
                          tableHead={
                            <thead>
                              <tr>
                                <th>#</th>
                                <th>Date</th>
                                <th>Client Name</th>
                                <th>Card Number</th>
                                <th>Sex</th>
                                <th>Date of Birth</th>
                                <th>Action</th>

                              </tr>
                            </thead>}
                          properties={[
                            {key:"date",isDate:true},
                            {key:"client_name"},
                            {key:"card_number"},
                            {key:"sex"},
                            {key:"date_of_birth",isDate:true}
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
