import React from "react";
import schemas from "../../../realm/schemas";
import RenderData from '../../components/pagination';

type props = {
  history : any
}

export default class FamilyPlaning extends React.Component<props> {

  addRecord(){
    this.props.history.push("/add-family-planning");
  }


  componentDidMount(){

    window.scrollTo(0, 0)

  }

  edit(payload:any){
    this.props.history.push({
      pathname:"/add-family-planning",
      state:payload
    })
  }



  render() {
    return (
      <div className="content-w">
        <div className="content-i">
          <div className="content-box">
            <div className="element-wrapper">
              <h6 className="element-header">Family Planning</h6>
              <div className="element-box">
                <h5 className="form-header">All Family Planning Records</h5>

                <RenderData
                          editRecord={(payload)=>this.edit(payload)}
                          addRecord={()=>this.addRecord()}
                          SchemaName={schemas.FamilyPlaning.name}
                          tableHead={
                            <thead>
                            <tr>
                              <th>#</th>
                              <th>Date</th>
                              <th>Client Name</th>
                              <th>Client Card Number</th>
                              <th>Date of Birth</th>
                              <th>Sex</th>
                              <th>Action</th>


                            </tr>
                          </thead>}
                          properties={[
                            {key:"date",isDate:true},
                            {key:"client_name"},
                            {key:"client_card_number"},
                            {key:"dob",isDate:true},
                            {key:"sex"},
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
