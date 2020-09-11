import React from "react";

type props = {
  history : any
}

export default class CommunityLeaders extends React.Component<props> {

  addRecord(){
    this.props.history.push("/add-community-leader");
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
                <div className="table-responsive">
                  <table className="table table-striped table-lightfont">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Full Name</th>
                        <th>Phone Number</th>
                        <th>Email</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>...</td>
                        <td>...</td>
                        <td>...</td>
                        <td>...</td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <th>#</th>
                        <th>Full Name</th>
                        <th>Phone Number</th>
                        <th>Email</th>
                        <th>Action</th>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
