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
import { createDailyAttendance } from '../../realm/queries/writeQueries';
import SelectCommunityLeader from '../components/selectCommunityLeader';
import NigeriaStates from '../data/states';
import 'toasted-notes/src/styles.css';
import { AgeRange } from '../../realm/utils/utils';

type Props = {
  history: any;
  location: any;
};
class DoseDiscarded extends React.Component<Props> {
  state = {};

  SubmitRealm(info: any) {
    const state = this.props.location.state;
    const isUpdate = state ? true : false;
    if (state) {
      info._id = state._id;
    }
    createDailyAttendance(info, isUpdate)
      .then((val) => {
        if (val == 'success') {
          this.props.history.push('/daily-attendance');
          window.scrollTo(0, 0);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const state = this.props.location.state;

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
          Add Doses Discarded
        </h5>
        <hr className="mx-3" />

        <InputFree
          type="date"
          placeholder="Enter date"
          name="date"
          disabled={state}
          title="Date"
          hideSubtxt={true}
          value={''} // value={this.state.date}
          onChange={(v) => v} // onChange={(v) => this.setState({ date: v }, () => this.getDays(v))}
        />

        {/* <DatePicker
            type="date"
            placeholder="Select registration date Y-m-d"
            name="date"
            isAttendance={true}
            state={state}
            title="Date"
            required="please select date"
          /> */}

        <InputFree
          type="text"
          placeholder="Enter Antigen/Diluent"
          name="antigen_diluent"
          title="Antigen / Diluent"
          hideSubtxt={true}
          value={''}
          onChange={(value) => value}
          state={state}
        />

        <h4>Quantity (doses) Discarded Due To:</h4>
        <div
          className="
          d-flex
          align-items-center
          justify-content-center"
        >
          <InputFree
            type="number"
            placeholder="Enter Expiry Date"
            name="expiry"
            title="Expiry"
            hideSubtxt={true}
            value={''}
            onChange={(value) => value}
            state={state}
          />

          <InputFree
            type="number"
            placeholder="Enter Breakage"
            name="breakage"
            title="Breakage"
            hideSubtxt={true}
            value={''}
            onChange={(value) => value}
            state={state}
          />

          <InputFree
            type="number"
            placeholder="Enter VVM Change"
            name="vvm_change"
            title="VVM Change"
            hideSubtxt={true}
            value={''}
            onChange={(value) => value}
            state={state}
          />

          <InputFree
            type="number"
            placeholder="Enter Freezing"
            name="freezing"
            title="Freezing"
            hideSubtxt={true}
            value={''}
            onChange={(value) => value}
            state={state}
          />

          <InputFree
            type="number"
            placeholder="Enter Label Removed"
            name="label_emoved"
            title="Label Rmvd"
            hideSubtxt={true}
            value={''}
            onChange={(value) => value}
            state={state}
          />

          <InputFree
            type="number"
            placeholder="Enter Other"
            name="other"
            title="Other"
            hideSubtxt={true}
            value={''}
            onChange={(value) => value}
            state={state}
          />

          <InputFree
            type="number"
            placeholder="Enter Total"
            name="total"
            title="Total"
            hideSubtxt={true}
            value={''}
            onChange={(value) => value}
            state={state}
          />

          <div className="">
            <button
              type="button"
              // disabled={disabled}
              // onClick={() => this._add()}
              className="btn btn-secondary"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default DoseDiscarded;
