import React from "react";

export default class FamilyPlaning extends React.Component {
  render() {
    return (
      <div className="content-w">
        <div className="content-i">
          <div className="content-box">
            <div className="element-wrapper">
              <h6 className="element-header">Family Planning</h6>
              <div className="element-box">
                <h5 className="form-header">All Family Planning Records</h5>
                <div className="form-desc">
                  <form
                    role="form"
                    encType="multipart/form-data"
                    className="form-horizontal form-groups"
                    action="#"
                    method="post"
                  >
                    <table
                      border={0}
                      cellSpacing={0}
                      cellPadding={0}
                      className="table"
                    >
                      <tbody>
                        <tr>
                          <td>
                            <input
                              type="text"
                              name="from"
                              className="form-control date_filter"
                              data-format="D, dd MM yyyy"
                              placeholder="Select start date"
                              autoComplete="off"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              name="to"
                              className="form-control date_filter"
                              data-format="D, dd MM yyyy"
                              placeholder="Select end date (Optional)"
                              autoComplete="off"
                            />
                          </td>
                          <td>
                            <input
                              type="submit"
                              defaultValue="Filter Records"
                              className="btn btn-info"
                              value="Search Records"
                            />
                            &nbsp;
                            <a href="#" className="btn btn-success">
                              <i className="fa fa-plus" /> &nbsp; Add Record
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </form>
                </div>
                <div className="table-responsive">
                  <table
                    id="family_planning"
                    width="100%"
                    className="table table-striped table-lightfont display"
                  >
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Date</th>
                        <th>Client Name</th>
                        <th>Client Card Number</th>
                        <th>Date of Birth</th>
                        <th>Sex</th>
                        <th>View</th>
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
                        <td>...</td>
                        <td>...</td>
                        <td>...</td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <th>#</th>
                        <th>Date</th>
                        <th>Client Name</th>
                        <th>Client Card Number</th>
                        <th>Date of Birth</th>
                        <th>Sex</th>
                        <th>View</th>
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
