import React from "react";
import schemas from "../../../realm/schemas";
import RenderData from '../../components/pagination';

type props = {
  history : any
}

export default class Antenatal extends React.Component<props> {

  addRecord(){
    this.props.history.push("/add-antenatal");
  }


  componentDidMount(){

    window.scrollTo(0, 0)

  }

  edit(payload:any){
       this.props.history.push({
         pathname:"/add-antenatal",
         state:payload
       })
  }



  render() {
    return (
      <div className="content-w">
        <div className="content-i">
          <div className="content-box">
            <div className="element-wrapper">
              <h6 className="element-header">Antenatal</h6>
              <div className="element-box">
                <h5 className="form-header">All Antenatal Records</h5>

                <RenderData
                          SchemaName={schemas.Antenatal.name}
                          addRecord={()=>this.addRecord()}
                          editRecord={(payload)=>this.edit(payload)}
                          tableHead={
                            <thead>
                            <tr>
                              <th>#</th>
                              <th>Date</th>
                              <th>Client Name</th>
                              <th>Client Card No.</th>
                              <th>Date of Birth</th>
                              <th>Age Range</th>
                              <th>Parity</th>
                              <th>Action</th>

                            </tr>
                          </thead>}
                          properties={[
                            {key:"date",isDate:true},
                            {key:"client_names"},
                            {key:"mothers_card_no"},
                            {key:"dob",isDate:true},
                            {key:"age"},
                            {key:"parity"}
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
