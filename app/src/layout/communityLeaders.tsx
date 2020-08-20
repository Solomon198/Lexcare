import React from "react";

export default class COMMUNITYLEADERS extends React.Component {
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
                  <a
                    href="#"
                    className="btn btn-success"
                    style={{ float: "right", marginTop: "-20px" }}
                  >
                    <i className="fa fa-plus" /> &nbsp; Add Record
                  </a>
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
