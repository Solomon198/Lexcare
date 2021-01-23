import React from 'react';

import { getDocuments } from '../../realm/queries/readQueries';

import RenderData from '../components/pagination';

import DatePicker from '../components/component-free/datePicker';

import { dailyAttendanceProperties } from '../../types/dailyAttendance';

import moment from 'moment';

import schemas from '../../realm/schemas';
import { showToast } from '../../realm/utils/utilsUI';

type props = {
  history: any;
};
export default class DeviceUtilization extends React.Component<props> {
  addRecord() {
    this.props.history.push('/add-device-utilization');
  }

  edit(payload: any) {
    this.props.history.push({
      pathname: '/add-device-utilization',
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
              <h6 className="element-header">Device Utilization</h6>
              <div className="element-box">
                <h5 className="form-header">All Device Utilization Records</h5>

                <RenderData
                  dataField="date"
                  onlyMonth={true}
                  addRecord={() => this.addRecord()}
                  editRecord={(payload) => this.edit(payload)}
                  SchemaName={schemas.Device.name}
                  tableHead={
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Month / Year</th>
                        <th>Vaccine</th>
                        <th>MAX Stock</th>
                        <th>MIN Stock</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                  }
                  properties={[
                    { key: 'date', isDate: true },
                    { key: 'device' },
                    { key: 'max_stock' },
                    { key: 'min_stock' },
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
