import React from "react";

export default class FACILITYSERVICES extends React.Component {

  componentDidMount(){

    window.scrollTo(0, 0)

  }

  render() {
    return (
      <div className="content-w">
        <div className="content-i">
          <div className="content-box">
            <div className="element-wrapper">
              <h6 className="element-header">Services</h6>
              <div className="element-box">
                <h5 className="form-header">All Services</h5>
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
                        <th>Service Name</th>
                        <th>Description</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>...</td>
                        <td>...</td>
                        <td>...</td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <th>#</th>
                        <th>Service Name</th>
                        <th>Description</th>
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
