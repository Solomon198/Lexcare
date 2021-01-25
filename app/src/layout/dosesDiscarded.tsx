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
export default class DosesDiscarded extends React.Component<props> {
  addRecord() {
    this.props.history.push('/add-dose-discarded');
  }

  edit(payload: any) {
    this.props.history.push({
      pathname: '/add-dose-discarded',
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
              <h6 className="element-header">Doses Discarded</h6>
              <div className="element-box">
                <h5 className="form-header">All Dose Discarded Records</h5>

                <RenderData
                  dataField="date"
                  addRecord={() => this.addRecord()}
                  editRecord={(payload) => this.edit(payload)}
                  SchemaName={schemas.DosesDiscarded.name}
                  tableHead={
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Date</th>
                        <th>Antigen/Diluent</th>
                        <th>Expiry</th>
                        <th>Breakage</th>
                        <th>VVM Change</th>
                        <th>Freezing</th>
                        <th>Label Removed</th>
                        <th>Total</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                  }
                  properties={[
                    { key: 'date', isDate: true },
                    { key: 'antigen_diluent' },
                    { key: 'expiry', isDate: true },
                    { key: 'breakage' },
                    { key: 'vvm_change' },
                    { key: 'freezing' },
                    { key: 'label_rmvd' },
                    { key: 'total' },
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
