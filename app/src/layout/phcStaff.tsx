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

  edit(payload:any){
    this.props.history.push({
      pathname:"/add-phc-staff",
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
              <h6 className="element-header">Primary Healthcare Staff</h6>
              <div className="element-box">
                <h5 className="form-header">All Staff</h5>

                         <RenderData

                          SchemaName={schemas.StaffSchema.name}
                          editRecord={(payload)=>this.edit(payload)}
                          ignoreFilter={true}
                          addRecord={()=>this.addRecord()}
                          tableHead={
                            <thead>
                              <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Phone Number</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                              </tr>
                            </thead>}
                          properties={[

                            {key:"full_name"},
                            {key:"phone_number"},
                            {key:"email"},
                            {key:"role"},

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
