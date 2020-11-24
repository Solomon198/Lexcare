import React from "react";
import Schema from '../../../realm/schemas/index';
import RenderData from '../../components/pagination';


type props = {
  history: any
}
export default class Tetanus extends React.Component<props> {

  addRecord(){
    this.props.history.push("/add-tetanus")
  }

  administerTD(payload:any){
    this.props.history.push({
      pathname:"/administerTD",
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
              <h6 className="element-header">Tetanus Diphtheria</h6>
              <div className="element-box">
                <h5 className="form-header">All Tetanus Diphtheria Records</h5>

                      <RenderData
                          editRecord={(payload)=>this.edit(payload)}
                          SchemaName={Schema.Tetanus.name}
                          addRecord={()=>this.addRecord()}
                          dataField="date_of_visit"
                          isTetanus
                          administerTD={(value)=>this.administerTD(value)}
                          tableHead={
                            <thead>
                            <tr>
                              <th>SN</th>
                              <th>Card No</th>
                              <th>Name</th>
                              <th>Date of Birth</th>
                              <th>Phone No</th>
                              <th>Action</th>
                            </tr>
                          </thead>}
                          properties={[
                            {key:"card_no"},
                            {key:"client_name"},
                            {key:"date_of_birth",isDate:true},
                            {key:"phone_number"}
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
