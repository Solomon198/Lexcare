import React from "react";
import Schema from '../../../realm/schemas/index'
import RenderData from '../../components/pagination';

type props = {
  history : any
}

export default class PostNatal extends React.Component<props> {

  addRecord(){
    this.props.history.push("/add-post-natal");
  }


  componentDidMount(){

    window.scrollTo(0, 0)

  }


edit(payload:any){
    this.props.history.push({
      pathname:"/add-post-natal",
      state:payload,
    })
  }

  render() {
    return (
      <div className="content-w">
        <div className="content-i">
          <div className="content-box">
            <div className="element-wrapper">
              <h6 className="element-header">Post Natal</h6>
              <div className="element-box">
                <h5 className="form-header">All Post Natal Records</h5>

                     <RenderData
                          editRecord={(payload)=>this.edit(payload)}
                          addRecord={()=>this.addRecord()}
                          SchemaName={Schema.PostNatal.name}
                          tableHead={
                            <thead>
                            <tr>
                              <th>#</th>
                              <th>Date</th>
                              <th>Client Name</th>
                              <th>Client Card Number</th>
                              <th>Age</th>
                              <th>Exact Age</th>
                              <th>Action</th>
                            </tr>
                          </thead>}
                          properties={[
                            {key:"date",isDate:true},
                            {key:"client_names"},
                            {key:"client_card_number"},
                            {key:"age"},
                            {key:"exact_age"},
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
