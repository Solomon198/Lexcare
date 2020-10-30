import React from "react";
import Schema from '../../../realm/schemas/index';
import RenderData from '../../components/pagination';

type props = {
  history : any
}

export default class LabourAndDelivery extends React.Component<props> {

  addRecord(){
    this.props.history.push("/add-labour-delivery");
  }


  componentDidMount(){

    window.scrollTo(0, 0)

  }

  edit(payload:any){
    this.props.history.push({
      pathname:"/add-labour-delivery",
      state:payload
    })
  }




  render() {
    return (
      <div className="content-w">
        <div className="content-i">
          <div className="content-box">
            <div className="element-wrapper">
              <h6 className="element-header">Labour & Delivery</h6>
              <div className="element-box">
                <h5 className="form-header">All Labour Delivery Records</h5>

                        <RenderData
                          editRecord={(payload)=>this.edit(payload)}
                          SchemaName={Schema.LabourAndDelivery.name}
                          addRecord={()=>this.addRecord()}
                          tableHead={
                            <thead>
                              <tr>
                                <th>#</th>
                                <th>Date</th>
                                <th>Client Name</th>
                                <th>Client Card No.</th>
                                <th>Age</th>
                                <th>Delivery Date</th>
                                <th>Action</th>
                              </tr>
                            </thead>}
                          properties={[
                            {key:"date",isDate:true},
                            {key:"client_names"},
                            {key:"client_card_number"},
                            {key:"age"},
                            {key:"delivery_date",isDate:true},
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
