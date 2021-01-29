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
class ImmunizationAefi extends React.Component<Props> {
  state = {
    date: null,
    non_serious: null,
    serious: null,
    seri_cases_invtg: null,
    alive: null,
    dead: null,
  };

  _submit() {}

  // resetSelectionsOnDeviceOrFormChanged() {}

  _add = () => {};

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

    const { non_serious, serious, seri_cases_invtg, alive, dead } = this.state;

    // let disabled = true;
    // if (
    //   max_stock &&
    //   min_stock &&
    //   day_of_month &&
    //   opening_balance &&
    //   received &&
    //   doses_opened &&
    //   ending_balance &&
    //   qty_ret_lga &&
    //   date &&
    //   selectedCategory
    // ) {
    //   disabled = false;
    // }

    // let disabledSubmit =
    //   this.state.categoryCollection.length == 0 ? true : false;

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
          Add Immunization AEFI
        </h5>
        <hr className="mx-3" />

        <InputFree
          type="date"
          placeholder="Enter date"
          name="date"
          disabled={state}
          title="Date"
          hideSubtxt={true}
          value={this.state.date}
          onChange={(v) => this.setState({ date: v }, () => this.getDays(v))}
        />

        {/* <SelectComponentFree
          name="category"
          options={this.state.devices}
          title="Category"
          disabled={state}
          value={this.state.selectedCategory}
          placeholder="Select Vaccine"
          onSelected={(value) =>
            this.setState({ selectedCategory: value }, () =>
              this.resetSelectionsOnDeviceOrFormChanged()
            )
          }
          required="Please select categroy"
          state={state}
        /> */}

        <h5 style={{ marginLeft: 10, marginBottom: 20, marginTop: 20 }}>
          AEFI Cases Reported
        </h5>

        <div className="d-flex align-items-center justify-content-start">
          <InputFree
            type="number"
            placeholder="Enter Non Serious"
            name="non_serious"
            title="Non Serious"
            hideSubtxt={true}
            value={non_serious}
            onChange={(value) => this.setState({ non_serious: value })}
          />

          <InputFree
            type="number"
            placeholder="Enter Serious"
            name="serious"
            title="Serious"
            hideSubtxt={true}
            onChange={(value) => this.setState({ serious: value })}
            value={serious}
          />

          <InputFree
            type="number"
            placeholder="Enter Serious Cases Investigated"
            name="seri_cases_invtg"
            title="Serious Cases of AEFI Investigated"
            hideSubtxt={true}
            onChange={(value) => this.setState({ seri_cases_invtg: value })}
            value={seri_cases_invtg}
          />
        </div>

        <h5 style={{ marginLeft: 10, marginBottom: 20, marginTop: 20 }}>
          Outcome of Serious Cases of AEFI Investigated
        </h5>

        <div className="d-flex align-items-center justify-content-start">
          {/* <SelectComponentFree
            name="day_of_month"
            options={this.state.days}
            title="Day"
            placeholder="Select Day"
            value={day_of_month}
            onSelected={(value) => this.setState({ day_of_month: value })}
            required="Please select day"
            state={state}
          /> */}

          <InputFree
            type="number"
            placeholder="Enter Alive"
            name="alive"
            title="Alive"
            hideSubtxt={true}
            value={alive}
            onChange={(value) => this.setState({ alive: value })}
            state={state}
          />

          <InputFree
            type="number"
            placeholder="Enter Dead"
            name="dead"
            title="Dead"
            hideSubtxt={true}
            value={dead}
            onChange={(value) => this.setState({ dead: value })}
            state={state}
          />
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
        </div>

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

export default ImmunizationAefi;
