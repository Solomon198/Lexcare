import React from "react";
import RenderData from '../components/pagination';
import schemas from "../../realm/schemas";

type props = {
  history : any
}

export default class BirthRegister extends React.Component<props> {

  addRecord(){
    this.props.history.push("/add-birth-register");
  }







  render() {
    return (
      <div className="content-w">
        <div className="content-i">
          <div className="content-box">
            <div className="element-wrapper">
              <h6 className="element-header">Birth Register</h6>
              <div className="element-box">
                <h5 className="form-header">All Birth Registers</h5>

                        <RenderData
                          dataField="child_reg_date"
                          addRecord={()=>this.addRecord()}
                          SchemaName={schemas.BirthRegister.name}
                          tableHead={
                            <thead>
                            <tr>
                              <th>#</th>
                              <th>Mother's Card No.</th>
                              <th>Child's Registration Date</th>
                              <th>Date of Birth</th>
                              <th>Sex</th>
                              <th>Child's Surname</th>
                              <th>Child's First Name</th>
                            </tr>
                          </thead>}
                          properties={[
                            {key:"mothers_card_no"},
                            {key:"child_reg_date",isDate:true},
                            {key:"dob",isDate:true},
                            {key:"sex"},
                            {key:"childs_surname"},
                            {key:"childs_firstname"}
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
