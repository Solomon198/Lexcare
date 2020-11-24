import React from "react";
import Schema from '../../../realm/schemas/index';
import RenderData from '../../components/pagination';

type props = {
  history : any
}

export default class Immunization extends React.Component<props> {

  addRecord(){
    this.props.history.push("/add-immunization");
  }

  administerVaccine(payload:any){
    this.props.history.push({
      pathname:"/administerVaccine",
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
              <h6 className="element-header">Child Immunization</h6>
              <div className="element-box">
                <h5 className="form-header">All Child Immunization Records</h5>

                <RenderData
                          editRecord={(payload)=>this.edit(payload)}
                          isImmunization
                          administerVaccine={(client)=>this.administerVaccine(client)}
                          SchemaName={Schema.Immunization.name}
                          addRecord={()=>this.addRecord()}
                          tableHead={
                            <thead>
                            <tr>
                              <th>SN</th>
                              <th>Name</th>
                              <th>Card No</th>
                              <th>Sex</th>
                              <th>Date of Birth</th>
                              <th>Phone</th>
                              <th>Action</th>
                            </tr>
                          </thead>}
                          properties={[
                            {key:"child_name"},
                            {key:"child_card_no"},
                            {key:"sex"},
                            {key:"dob",isDate:true},
                            {key:"phone"},
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
