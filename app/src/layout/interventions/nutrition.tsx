import React from "react";
import Schema from '../../../realm/schemas/index';
import RenderData from '../../components/pagination';


type props = {
  history:any
}
export default class Nutrition extends React.Component<props> {

  addRecord(){
    this.props.history.push("/add-nutrition")
  }


  componentDidMount(){

    window.scrollTo(0, 0)

  }

  edit(payload:any){
    this.props.history.push({
      pathname:"/add-nutrition",
      state:payload
    })
  }



  render() {
    return (
      <div className="content-w">
        <div className="content-i">
          <div className="content-box">
            <div className="element-wrapper">
              <h6 className="element-header">Nutrition</h6>
              <div className="element-box">
                <h5 className="form-header">All Nutrition Records</h5>

                <RenderData
                          editRecord={(payload)=>this.edit(payload)}
                          SchemaName={Schema.Nutrition.name}
                          addRecord={()=>this.addRecord()}
                          tableHead={
                            <thead>
                            <tr>
                              <th>#</th>
                              <th>Date</th>
                              <th>Client Name</th>
                              <th>Client Card No.</th>
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
