import React from 'react';
import Input from '../components/input';
import DatePicker from '../components/datePicker';
import SelectComponent from '../components/select';
import SelectComponentFree from '../components/component-free/select';
import InputFree from '../components/component-free/input';
import Auth from '../../realm/queries/auth';
import TextArea from '../components/textArea';
import StepWrapper from '../components/stepWrapper';
import StepFormWrapper from '../components/stepFormWrapper';
import { getPHC_configSettings } from '../../realm/queries/readQueries';
import {
  createVaccineUtilRecord,
  createDeviceRecord,
} from '../../realm/queries/writeQueries';
import SelectCommunityLeader from '../components/selectCommunityLeader';
import NigeriaStates from '../data/states';
import 'toasted-notes/src/styles.css';
import { AgeRange, getDaysInAMonth } from '../../realm/utils/utils';
import moment from 'moment';

type Props = {
  history: any;
  location: any;
};
class ImmunizationRi extends React.Component<Props> {
  state = {
    selectedFacility: '',
    selectedFacilityStaff: '',
    selectedMeetingConducted: '',
    date: null,
    planned: null,
    conducted: null,
    planned2: null,
    conducted2: null,
    nationality: null,
    ri_state: null,
    lga: null,
    amount_received: null,
  };

  _submit() {}

  // resetSelectionsOnDeviceOrFormChanged() {}

  // _add = () => {};

  // _edit = (col, index) => {};

  // _remove = (index) => {};

  getDays(date?: any) {
    let _date = date ? new Date(date) : new Date();
    let daysInMonth = getDaysInAMonth(
      _date.getMonth() + 1,
      _date.getFullYear()
    );
    let days = [];
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }

    this.setState({ days: days });

    return days;
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const state = this.props.location.state;

    const {
      selectedFacility,
      selectedFacilityStaff,
      selectedMeetingConducted,
      date,
      planned,
      conducted,
      planned2,
      conducted2,
      nationality,
      ri_state,
      lga,
      amount_received,
    } = this.state;

    return (
      <div
        className="card"
        style={{
          paddingRight: 80,
          paddingLeft: 80,
          paddingTop: 20,
          marginTop: 10,
          marginRight: 10,
          marginLeft: 10,
        }}
      >
        <h5 style={{ marginLeft: 10, marginBottom: 20, marginTop: 20 }}>
          Add Immunization RI
        </h5>
        <hr className="mx-3" />

        <InputFree
          type="date"
          placeholder="Enter date"
          name="date"
          disabled={state}
          title="Date"
          hideSubtxt={true}
          value={date}
          onChange={(v) => this.setState({ date: v }, () => this.getDays(v))}
        />

        <SelectComponentFree
          name="facility"
          options={['YES', 'NO']}
          title="Facility has updated ***********"
          // disabled={state}
          hideSubtxt={true}
          value={selectedFacility}
          placeholder="Select Vaccine"
          onSelected={(value) => this.setState({ selectedFacility: value })}
          required="Please select facility"
          state={state}
        />

        <h5 style={{ marginLeft: 10, marginBottom: 20, marginTop: 20 }}>
          RI Fixed Sessions
        </h5>

        <div className="row">
          <InputFree
            type="number"
            placeholder="Enter Planned Session"
            name="planned"
            title="Planned Session"
            hideSubtxt={true}
            value={planned}
            onChange={(value) => this.setState({ planned: value })}
          />

          <InputFree
            type="number"
            placeholder="Enter Conducted Session"
            name="conducted"
            title="Conducted Session"
            hideSubtxt={true}
            onChange={(value) => this.setState({ conducted: value })}
            value={conducted}
          />
        </div>

        <h5 style={{ marginLeft: 10, marginBottom: 20, marginTop: 20 }}>
          RI Outreached Sessions
        </h5>

        <div className="d-flex align-items-center justify-content-start">
          <InputFree
            type="number"
            placeholder="Enter Planned Session"
            name="planned2"
            title="Planned Session"
            hideSubtxt={true}
            value={planned2}
            onChange={(value) => this.setState({ planned2: value })}
          />

          <InputFree
            type="number"
            placeholder="Enter Conducted Session"
            name="conducted2"
            title="Conducted Session"
            hideSubtxt={true}
            onChange={(value) => this.setState({ conducted2: value })}
            value={conducted2}
          />
        </div>

        <SelectComponentFree
          name="meeting_conducted"
          options={['YES', 'NO']}
          title="Facility has updated ***********"
          // disabled={state}
          hideSubtxt={true}
          value={selectedFacilityStaff}
          placeholder="Select Vaccine"
          onSelected={(value) =>
            this.setState({ selectedFacilityStaff: value })
          }
          required="Please select facility"
          state={state}
        />

        <h5 style={{ marginLeft: 10, marginBottom: 20, marginTop: 20 }}>
          Level of Supportive ***************
        </h5>

        <div className="d-flex align-items-center justify-content-start">
          <InputFree
            type="number"
            placeholder="Enter Nationality"
            name="nationality"
            title="Nationality"
            hideSubtxt={true}
            value={nationality}
            onChange={(value) => this.setState({ nationality: value })}
          />

          <InputFree
            type="number"
            placeholder="Enter State"
            name="ri_state"
            title="State"
            hideSubtxt={true}
            onChange={(value) => this.setState({ ri_state: value })}
            value={ri_state}
          />

          <InputFree
            type="number"
            placeholder="Enter LGA"
            name="lga"
            title="LGA"
            hideSubtxt={true}
            onChange={(value) => this.setState({ lga: value })}
            value={lga}
          />
        </div>

        <InputFree
          type="number"
          placeholder="Enter Amount of RI Funds Received(Naira)"
          name="amount_received"
          title="Amount of RI Funds Received(Naira)"
          hideSubtxt={true}
          onChange={(value) => this.setState({ amount_received: value })}
          value={amount_received}
        />

        <SelectComponentFree
          name="meeting_conducted"
          options={['YES', 'NO']}
          title="(VDC) meeting was conducted"
          // disabled={state}
          hideSubtxt={true}
          value={selectedMeetingConducted}
          placeholder="Select Vaccine"
          onSelected={(value) =>
            this.setState({ selectedMeetingConducted: value })
          }
          // required="Please select "
          state={state}
        />

        {/* <div className="d-flex align-items-center justify-content-center"> */}

        {/* <div className="">
            <button
              type="button"
              disabled={disabled}
              onClick={() => this._add()}
              className="btn btn-secondary"
            >
              Add
            </button>
          </div> */}
        {/* </div> */}

        {/* <div>
          <table className="table table-striped table-bordered">
            <tr>
              <td style={{ fontSize: 12, fontWeight: 'bold' }}>Day of Month</td>
              <td style={{ fontSize: 12, fontWeight: 'bold' }}>
                Opening Balance
              </td>
              <td style={{ fontSize: 12, fontWeight: 'bold' }}>Received</td>
              <td style={{ fontSize: 12, fontWeight: 'bold' }}>Doses Opened</td>
              <td style={{ fontSize: 12, fontWeight: 'bold' }}>
                Ending Balance
              </td>
              <td style={{ fontSize: 12, fontWeight: 'bold' }}>
                Quatity Returned to LGA
              </td>
              <td style={{ fontSize: 12, fontWeight: 'bold' }}>Action</td>
            </tr>
            {this.state.categoryCollection.map((col, index) => (
              <tr>
                <td>{col.day_of_month}</td>
                <td>{col.opening_balance}</td>
                <td>{col.received}</td>
                <td>{col.doses_opened}</td>
                <td>{col.ending_balance}</td>
                <td>{col.qty_ret_lga}</td>
                <td>
                  <button
                    onClick={() => this._remove(index)}
                    className="btn btn-danger btn-sm mr-1"
                  >
                    Remove
                  </button>
                  <button
                    onClick={() => this._edit(col, index)}
                    className="btn btn-primary btn-sm"
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </table>
        </div> */}
        <button
          onClick={() => this._submit()}
          // disabled={disabledSubmit}
          style={{ marginTop: 10, marginBottom: 10, width: 100 }}
          type="button"
          className="btn btn-primary"
        >
          SUBMIT
        </button>
      </div>
    );
  }
}

export default ImmunizationRi;
