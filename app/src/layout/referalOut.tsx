import React from "react";

type props = {
  history : any
}

export default class ReferalOut extends React.Component<props> {

  addRecord(){
    this.props.history.push("/add-referal-out");
  }

  render() {
    return (
      <div className="content-w">
        <div className="content-i">
          <div className="content-box">
            <div className="element-wrapper">
              <h6 className="element-header">Referal Out</h6>
              <div className="element-box">
                <h5 className="form-header">All Referal Out</h5>
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
                              type="date"
                              name="from"
                              className="form-control"
                              data-format="D, dd MM yyyy"
                              placeholder="Select date"
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
                            <button onClick={()=>this.addRecord()}  className="btn btn-success">
                              <i className="fa fa-plus" /> &nbsp; Add Record
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </form>
                </div>
                <div className="table-responsive">
                  <table
                    id="nhis_referal_out"
                    width="100%"
                    className="table table-striped table-lightfont display"
                  >
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Refered by</th>
                        <th>Designation</th>
                        <th>Referal Date</th>
                        <th>Initiating Facility Name</th>
                        <th>Address</th>
                        <th>Telephone</th>
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
                        <th>Refered by</th>
                        <th>Designation</th>
                        <th>Referal Date</th>
                        <th>Initiating Facility Name</th>
                        <th>Address</th>
                        <th>Telephone</th>
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
