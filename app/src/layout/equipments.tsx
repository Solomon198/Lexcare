import React from 'react';
import RenderData from '../components/pagination';
import schemas from '../../realm/schemas';

type props = {
  history: any;
};

export default class Equipments extends React.Component<props> {
  addServices() {
    this.props.history.push('/add-equipment');
  }

  edit(payload: any) {
    this.props.history.push({
      pathname: '/add-services',
      state: payload,
    });
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="content-w">
        <div className="content-i">
          <div className="content-box">
            <div className="element-wrapper">
              <h6 className="element-header">Equipments</h6>
              <div className="element-box">
                <h5 className="form-header">All Equipments</h5>

                <RenderData
                  editRecord={(payload) => this.edit(payload)}
                  addRecord={() => this.addServices()}
                  SchemaName={schemas.Services.name}
                  ignoreFilter
                  tableHead={
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Date of Month</th>
                        <th>Device</th>
                        <th>Quantity</th>
                        <th>Number Functional</th>
                        <th>Number Non-functional</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                  }
                  properties={[
                    { key: 'service_name' },
                    { key: 'service_description' },
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
