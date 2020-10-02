import React from "react";
import Schema from '../../../realm/schemas/index';
import RenderData from '../../components/pagination';


type props = {
  history : any
}

export default class InPatient extends React.Component<props> {

  addRecord(){
    this.props.history.push("/add-in-patient");
  }



  render() {
    return (
      <div className="content-w">
        <div className="content-i">
          <div className="content-box">
            <div className="element-wrapper">
              <h6 className="element-header">In Patient</h6>
              <div className="element-box">
                <h5 className="form-header">All In Patient Records</h5>

                <RenderData
                          SchemaName={Schema.Inpatient.name}
                          addRecord={()=>this.addRecord()}
                          tableHead={
                            <thead>
                            <tr>
                              <th>#</th>
                              <th>Date</th>
                              <th>Client Name</th>
                              <th>Card Number</th>
                              <th>Sex</th>
                              <th>Age</th>
                              <th>Action</th>

                            </tr>
                          </thead>
                          }
                          properties={[
                            {key:"date",isDate:true},
                            {key:"client_names"},
                            {key:"card_number"},
                            {key:"sex"},
                            {key:"age"},
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
