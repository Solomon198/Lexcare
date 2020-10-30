import React from "react";

export default class AllUsers extends React.Component {

  componentDidMount(){

    window.scrollTo(0, 0)

  }

  render() {
    return (
      <div className="content-w">
        <div className="content-i">
          <div className="content-box">
            <div className="element-wrapper">
              <h6 className="element-header">Users</h6>
              <div className="element-box">
                <h5 className="form-header">All Users</h5>
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
                            <a href="#" className="btn btn-success">
                              <i className="fa fa-plus" /> &nbsp; Add User
                            </a>
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
                        <th>Email</th>
                        <th>Status</th>
                        <th>Group</th>
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
                        <th>Email</th>
                        <th>Status</th>
                        <th>Group</th>
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
