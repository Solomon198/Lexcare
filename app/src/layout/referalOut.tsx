import React from "react";
import RenderData from '../components/pagination';
import schemas from "../../realm/schemas/index";

type props = {
  history : any
}

export default class ReferalOut extends React.Component<props> {

  addRecord(){
    this.props.history.push("/add-referal-out");
  }

  render() {
    return (
      <div className="content-w">
        <div className="content-i">
          <div className="content-box">
            <div className="element-wrapper">
              <h6 className="element-header">Referal Out</h6>
              <div className="element-box">
                <h5 className="form-header">All Referal Out</h5>


                      <RenderData
                          dataField="referal_date"
                          ignoreFilter={false}
                          SchemaName={schemas.ReferalOut.name}
                          addRecord={()=>this.addRecord()}
                          tableHead={
                            <thead>
                              <tr>
                                <th>#</th>
                                <th>Refered by</th>
                                <th>Designation</th>
                                <th>Referal Date</th>
                                <th>Initiating Facility Name</th>
                                <th>Address</th>
                              </tr>
                            </thead>}
                          properties={[
                            {key:"refered_by_name"},
                            {key:"refered_by_designation"},
                            {key:"referal_date",isDate:true},
                            {key:"initiating_facility_name"},
                            {key:"initiating_facility_address"}
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
