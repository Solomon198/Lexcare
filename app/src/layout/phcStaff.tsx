import React from "react";
import schemas from "../../realm/schemas";
import RenderData from '../components/pagination';


type props = {
  history : any
}


export default class PhcStaffs extends React.Component<props> {




  addRecord(){
    this.props.history.push("/add-phc-staff");
  }



  render() {
    return (
      <div className="content-w">
        <div className="content-i">
          <div className="content-box">
            <div className="element-wrapper">
              <h6 className="element-header">Primary Healthcare Staff</h6>
              <div className="element-box">
                <h5 className="form-header">All Staff</h5>
                <div className="form-desc">
                <button onClick={()=>this.addRecord()}  className="btn btn-success">
                  <i className="fa fa-plus" /> &nbsp; Add Record
                </button>
                </div>
                         <RenderData
                          SchemaName={schemas.StaffSchema.name}
                          ignoreFilter={true}
                          tableHead={
                            <thead>
                              <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Phone Number</th>
                                <th>Role</th>
                              </tr>
                            </thead>}
                          properties={[

                            {key:"full_name"},
                            {key:"phone_number"},
                            {key:"role"},

                           ]}
                           hideEdit={true}
                           />

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
