import React from 'react';
import Input from '../components/input';
import DatePicker from '../components/datePicker';
import SelectComponent from '../components/select';
import SelectComponentFree from '../components/component-free/select';
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
import InputFree from '../components/component-free/input';

type Props = {
  history: any;
  location: any;
};
class Antigen extends React.Component<Props> {
  state = {
    categoryOption: [],
    selectedForm: '',
    categoryCollection: [],
    selectedCategory: '',
    form_type: ['Vaccine Utilization', 'Devices Utilization'],
    max_stock: null,
    min_stock: null,
    day_of_month: null,
    opening_balance: null,
    received: null,
    doses_opened: null,
    ending_balance: null,
    qty_ret_lga: null,
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
    devices: [
      'BCG Syrines',
      'AD Syringes',
      '2 ml syringes',
      '5 ml syringes',
      'Safety boxes',
    ],
  };

  handleFormTypeSelected(value) {
    if (value == this.state.form_type[0]) {
      this.setState({
        categoryOption: this.state.antigen_diluent,
        selectedForm: value,
      });
    } else {
      this.setState({
        categoryOption: this.state.devices,
        selectedForm: value,
      });
    }
  }

  _add = () => {
    const {
      day_of_month,
      opening_balance,
      received,
      doses_opened,
      ending_balance,
      qty_ret_lga,
    } = this.state;

    let categoryCollection = Object.assign([], this.state.categoryCollection);

    let newObj = {
      day_of_month: day_of_month,
      opening_balance: opening_balance,
      received: received,
      doses_opened: doses_opened,
      ending_balance: ending_balance,
      qty_ret_lga: qty_ret_lga,
    };

    categoryCollection.push(newObj);

    this.setState({ categoryCollection: categoryCollection });
  };

  _remove = (index) => {
    let categoryCollection = Object.assign([], this.state.categoryCollection);
    categoryCollection.splice(index, 1);
    this.setState({ categoryCollection });
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
      max_stock,
      mix_stock,
      day_of_month,
      opening_balance,
      received,
      doses_opened,
      ending_balance,
      qty_ret_lga,
    } = this.state;

    return (
      <div
        className="card"
        style={{
          paddingRight: 40,
          paddingLeft: 40,
          paddingTop: 20,
          marginTop: 10,
          marginRight: 10,
          marginLeft: 10,
        }}
      >
        <h3>Add Antigen</h3>
        <SelectComponentFree
          name="form_type"
          options={this.state.form_type}
          title="Form Type"
          onSelected={(value) => this.handleFormTypeSelected(value)}
          placeholder="Select Form Type"
          required="Please select form type"
          state={state}
        />

        <InputFree
          type="date"
          placeholder="Enter date"
          name="date"
          title="Date"
          hideSubtxt={true}
        />

        <SelectComponentFree
          name="category"
          options={this.state.categoryOption}
          title="Category"
          placeholder="Select Category"
          onSelected={(value) => this.setState({ selectedCategory: value })}
          required="Please select categroy"
          state={state}
        />

        <InputFree
          type="number"
          placeholder="Enter MAX Stock"
          name="max_stock"
          title="MAX STOCK"
          hideSubtxt={true}
          value={max_stock}
          onChange={(value) => this.setState({ max_stock: value })}
        />

        <InputFree
          type="number"
          placeholder="Enter MIX Stock"
          name="mix_stock"
          title="MIX STOCK"
          hideSubtxt={true}
          onChange={(value) => this.setState({ mix_stock: value })}
          value={mix_stock}
        />

        <div className="d-flex align-items-center justify-content-center">
          <InputFree
            type="number"
            placeholder="Enter DOM"
            name="day_of_month"
            title="Day"
            value={day_of_month}
            onChange={(value) => this.setState({ day_of_month: value })}
          />

          <InputFree
            type="number"
            placeholder="Enter Opening Balance"
            name="opening_balance"
            title="OP"
            value={opening_balance}
            onChange={(value) => this.setState({ opening_balance: value })}
            state={state}
          />

          <InputFree
            type="number"
            placeholder="Enter Received"
            name="received"
            title="R"
            value={received}
            onChange={(value) => this.setState({ received: value })}
            state={state}
          />

          <InputFree
            type="number"
            placeholder="Enter Doses Opened"
            name="doses_opened"
            title="DO"
            value={doses_opened}
            onChange={(value) => this.setState({ doses_opened: value })}
            state={state}
          />

          <InputFree
            type="number"
            placeholder="Enter Ending Balance"
            name="ending_balance"
            title="EB"
            value={ending_balance}
            onChange={(value) => this.setState({ ending_balance: value })}
            state={state}
          />

          <InputFree
            type="number"
            placeholder="Enter Qty Returned to LGA"
            name="qty_ret_lga"
            title="QRL"
            value={qty_ret_lga}
            onChange={(value) => this.setState({ qty_ret_lga: value })}
            state={state}
          />
          <div className="">
            <span onClick={() => this._add()} className="btn btn-secondary">
              Add
            </span>
          </div>
        </div>

        <div>
          <table className="table table-striped table-bordered">
            <tr>
              <th>Day of Month</th>
              <th>Opening Balance</th>
              <th>Received</th>
              <th>Doses Opened</th>
              <th>Ending Balance</th>
              <th>Quatity Returned to LGA</th>
              <th>Action</th>
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
                    className="btn btn-danger btn-sm"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    );
  }
}

export default Antigen;
