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
export default class ImmunizationRi extends React.Component<props> {
  addRecord() {
    this.props.history.push('/add-immunization-ri');
  }

  edit(payload: any) {
    this.props.history.push({
      pathname: '/add-immunization-ri',
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
              <h6 className="element-header">Immunization ( Routine Immunization Strategy And Operational Fund )</h6>
              <div className="element-box">
                <h5 className="form-header">All Immunization ( Routine Immunization Strategy And Operational Fund ) Records</h5>

                <RenderData
                  dataField="date"
                  addRecord={() => this.addRecord()}
                  editRecord={(payload) => this.edit(payload)}
                  onlyYear
                  SchemaName={schemas.ImmunizationRi.name}
                  tableHead={
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Month / Year</th>
                        <th>Fixed planned sessions</th>
                        <th>Fixed conducted sessions</th>
                        <th>Outreached planned sessions</th>
                        <th>Outreached conducted sessions</th>
                        <th>National</th>
                        <th>State</th>
                        <th>LGA</th>
                        <th>Amount Received (Naira)</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                  }
                  properties={[
                    { key: 'date', isDate: true },
                    { key: 'planned' },
                    { key: 'conducted' },
                    { key: 'planned2' },
                    { key: 'conducted2' },
                    { key: 'national' },
                    { key: 'state' },
                    { key: 'lga' },
                    { key: 'amount_received' },
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
