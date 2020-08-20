import React from "react";

export default class Clients extends React.Component {
  render() {
    return (
      <div className="content-w">
        <div className="content-i">
          <div className="content-box">
            <div className="element-wrapper">
              <h6 className="element-header">Clients</h6>
              <div className="element-box">
                <h5 className="form-header">All Client Records</h5>
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
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </form>
                </div>
                <div className="table-responsive">
                  <table
                    id="client"
                    width="100%"
                    className="table table-striped table-lightfont display"
                  >
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Date</th>
                        <th>Client Name</th>
                        <th>Client Card No.</th>
                        <th>Sex</th>
                        <th>First Contact With Facility</th>
                        <th>More</th>
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
                        <th>Client Card No.</th>
                        <th>Sex</th>
                        <th>First Contact With Facility</th>
                        <th>More</th>
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
