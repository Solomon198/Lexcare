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
  state = {
    selectedCategory: '',
    expiry: null,
    breakage: null,
    vvm_change: null,
    freezing: null,
    label_rmvd: null,
    other: null,
    total: null,
    antigen_diluent: [
      'BCG Vaccine',
      'BCG Diluent',
      'Hep B vaccine',
      'OPV Vaccine',
      'PENTA Vaccine',
      'PCV',
      'IPV',
      'Rotavirus vaccine',
      'Measles Vaccine',
      'Measles Diluent',
      'Yellow fever vaccine',
      'Yellow fever diluent',
      'CSM Vaccine',
      'CSM Diluent',
      'Tetanus Dipteria Toxoid',
      'HPV',
    ],
    discardedCategory: [],
  };

  _add = () => {
    const {
      expiry,
      breakage,
      vvm_change,
      freezing,
      label_rmvd,
      other,
      total,
    } = this.state;

    let discardedCategory = Object.assign([], this.state.discardedCategory);

    let newObj = {
      expiry: expiry,
      breakage: breakage,
      vvm_change: vvm_change,
      freezing: freezing,
      label_rmvd: label_rmvd,
      other: other,
      total: total,
    };

    discardedCategory.push(newObj);

    this.setState({ discardedCategory });
  };

  _remove = (index) => {
    let discardedCategory = Object.assign([], this.state.discardedCategory);

    discardedCategory.splice(index, 1);

    this.setState({ discardedCategory });
  };

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

    const {
      selectedCategory,
      expiry,
      breakage,
      vvm_change,
      freezing,
      label_rmvd,
      other,
      total,
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

        <SelectComponentFree
          options={this.state.antigen_diluent}
          placeholder="Select Antigen/Diluent"
          name="antigen_diluent"
          title="Antigen / Diluent"
          hideSubtxt={true}
          value={selectedCategory}
          onSelected={(value) => this.setState({ selectedCategory: value })}
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
            type="date"
            placeholder="Enter Expiry Date"
            disabled={state}
            name="expiry"
            title="Expiry"
            value={this.state.expiry}
            onChange={(value) => this.setState({ expiry: value })}
            // state={state}
          />

          <InputFree
            type="number"
            placeholder="Enter Breakage"
            name="breakage"
            title="Breakage"
            value={breakage}
            onChange={(value) => this.setState({ breakage: value })}
            state={state}
          />

          <InputFree
            type="number"
            placeholder="Enter VVM Change"
            name="vvm_change"
            title="VVM Change"
            value={vvm_change}
            onChange={(value) => this.setState({ vvm_change: value })}
            state={state}
          />

          <InputFree
            type="number"
            placeholder="Enter Freezing"
            name="freezing"
            title="Freezing"
            value={freezing}
            onChange={(value) => this.setState({ freezing: value })}
            state={state}
          />

          <InputFree
            type="number"
            placeholder="Enter Label Removed"
            name="label_emoved"
            title="Label Rmvd"
            value={label_rmvd}
            onChange={(value) => this.setState({ label_rmvd: value })}
            state={state}
          />

          <InputFree
            type="number"
            placeholder="Enter Other"
            name="other"
            title="Other"
            value={other}
            onChange={(value) => this.setState({ other: value })}
            state={state}
          />

          <InputFree
            type="number"
            placeholder="Enter Total"
            name="total"
            title="Total"
            value={total}
            onChange={(value) => this.setState({ total: value })}
            state={state}
          />

          <div className="">
            <button
              type="button"
              // disabled={disabled}
              onClick={() => this._add()}
              className="btn btn-secondary"
            >
              Add
            </button>
          </div>
        </div>

        <div>
          <table className="table table-striped table-bordered">
            <tr>
              <td style={{ fontSize: 12, fontWeight: 'bold' }}>Expiry</td>
              <td style={{ fontSize: 12, fontWeight: 'bold' }}>Breakage</td>
              <td style={{ fontSize: 12, fontWeight: 'bold' }}>VVM Change</td>
              <td style={{ fontSize: 12, fontWeight: 'bold' }}>Freezing</td>
              <td style={{ fontSize: 12, fontWeight: 'bold' }}>
                Label Removed
              </td>
              <td style={{ fontSize: 12, fontWeight: 'bold' }}>Other</td>
              <td style={{ fontSize: 12, fontWeight: 'bold' }}>Total</td>
              <td style={{ fontSize: 12, fontWeight: 'bold' }}>Action</td>
            </tr>
            {this.state.discardedCategory.map((row, index) => (
              <tr>
                <td>{row.expiry}</td>
                <td>{row.breakage}</td>
                <td>{row.vvm_change}</td>
                <td>{row.freezing}</td>
                <td>{row.label_rmvd}</td>
                <td>{row.other}</td>
                <td>{row.total}</td>
                <td>
                  <button
                    onClick={() => this._remove(index)}
                    className="btn btn-danger btn-sm mr-1"
                  >
                    Remove
                  </button>
                  <button className="btn btn-primary btn-sm">Edit</button>
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    );
  }
}

export default DoseDiscarded;
