import React from "react";
import Schema from '../../realm/schemas/index'
import RenderData from '../components/pagination';


export default class Clients extends React.Component {


  componentDidMount(){

    window.scrollTo(0, 0)

  }


  render() {
    return (
      <div className="content-w">
        <div className="content-i">
          <div className="content-box">
            <div className="element-wrapper">
              <h6 className="element-header">Clients</h6>
              <div className="element-box">
                <h5 className="form-header">All Client Records</h5>

                <RenderData
                          ignoreFilter={true}
                          // showDetails
                          hideEdit
                          SchemaName={Schema.ClientSchema.name}
                          tableHead={
                            <thead>
                              <tr>
                                <th>#</th>
                                <th>Date</th>
                                <th>Client Name</th>
                                <th>Client Card No.</th>
                                <th>Sex</th>
                                <th>First Contact With Facility</th>
                                {/* <th>Action</th> */}
                              </tr>
                            </thead>}
                          properties={[
                            {key:"date",isDate:true},
                            {key:"client_name"},
                            {key:"client_card_number"},
                            {key:"sex"},
                            {key:"first_contact_with_facility"}
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
