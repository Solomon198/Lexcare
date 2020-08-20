import React from "react";

export default class PhcStaffs extends React.Component {
  render() {
    return (
      <div className="content-w">
        <div className="content-i">
          <div className="content-box">
            <div className="element-wrapper">
              <h6 className="element-header">Primary Healthcare Staff</h6>
              <div className="element-box">
                <h5 className="form-header">All Staff</h5>
                <div className="form-desc">
                  <a href="#" className="btn btn-success">
                    <i className="fa fa-plus" /> &nbsp; Add Record
                  </a>
                </div>
                <div className="table-responsive">
                  <table
                    id="birth_register"
                    width="100%"
                    className="table table-striped table-lightfont"
                  >
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Phone Number</th>
                        <th>Role</th>
                        <th>Date Created</th>
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
                        <th>Name</th>
                        <th>Phone Number</th>
                        <th>Role</th>
                        <th>Date Created</th>
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
