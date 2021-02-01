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
export default class ImmunizationAefi extends React.Component<props> {
  addRecord() {
    this.props.history.push('/add-immunization-aefi');
  }

  edit(payload: any) {
    this.props.history.push({
      pathname: '/add-immunization-aefi',
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
              <h6 className="element-header">Immunization ( Adverse Events Following immunization )</h6>
              <div className="element-box">
                <h5 className="form-header">All Immunization ( Adverse Events Following immunization ) Records</h5>

                <RenderData
                  dataField="date"
                  onlyYear
                  addRecord={() => this.addRecord()}
                  editRecord={(payload) => this.edit(payload)}
                  SchemaName={schemas.ImmunizationAefi.name}
                  tableHead={
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Date</th>
                        <th>Non Serious</th>
                        <th>Serious</th>
                        <th>Serious Cases Investigated</th>
                        <th>Alive</th>
                        <th>Dead</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                  }
                  properties={[
                    { key: 'date', isDate: true },
                    { key: 'non_serious' },
                    { key: 'serious' },
                    { key: 'seri_cases_invtg' },
                    { key: 'alive' },
                    { key: 'dead' },
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
