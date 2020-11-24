import React from "react";
import RenderData from '../components/pagination';
import schemas from "../../realm/schemas/index";

type props = {
  history : any
}

export default class CommunityLeaders extends React.Component<props> {

  addRecord(){
    this.props.history.push("/add-community-leader");
  }

  edit(payload:any){
    this.props.history.push({
      pathname:"/add-community-leader",
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
              <h6 className="element-header">Commuunity Leaders</h6>
              <div className="element-box">
                <h5 className="form-header">All Commuunity Leaders</h5>
                <div className="form-desc">
                <button onClick={()=>this.addRecord()}  className="btn btn-success">
                              <i className="fa fa-plus" /> &nbsp; Add Record
                            </button>
                </div>

                <RenderData
                          SchemaName={schemas.CommunityLeaders.name}
                          ignoreFilter
                          editRecord={(record)=>this.edit(record)}
                          tableHead={
                            <thead>
                              <tr>
                                <th>#</th>
                                <th>Full Name</th>
                                <th>Phone Number</th>
                                <th>Email</th>
                                <th>Action</th>
                              </tr>
                            </thead>
                           }
                          properties={[

                            {key:"full_name"},
                            {key:"phone_number"},
                            {key:"email"},

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
