import React from 'react';
import Input from '../components/input';
import InputFree from '../components/component-free/input';
import TextArea from '../components/textArea';
import DatePicker from '../components/datePicker';
import SelectComponent from '../components/select';
import SelectComponentFree from '../components/component-free/select';
import StepWrapper from '../components/stepWrapper';
import StepFormWrapper from '../components/stepFormWrapper';
import { createFacilityService } from '../../realm/queries/writeQueries';

type Props = {
  history: any;
  location: any;
};

class Equipment extends React.Component<Props> {
  state = {
    day_of_month: null,
    qty: null,
    num_func: null,
    num_nonfunc: null,
    selectedDevice: '',
    deviceCollection: [],
    devices: [
      'Ice packs (0.3/0.4L)',
      'Vacince Carrier',
      'Cold boxes',
      'Vaccine fridges',
    ],

    showHideQty: false,
    showHideFunc: false,
    showHideNonfunc: false,
  };

  async CreateFacilityService(info: any) {
    const state = this.props.location.state;
    const isUpdate = state ? true : false;
    if (state) {
      info._id = state._id;
    }
    createFacilityService(info, isUpdate)
      .then((val) => {
        if (val == 'success') this.props.history.push('/facility-services');
      })
      .catch((e) => {
        console.log(e);
      });
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleDeviceSelected = (value) => {
    this.setState(
      {
        selectedDevice: value,
      },
      () => {
        this.state.selectedDevice === 'Ice packs (0.3/0.4L)'
          ? this.setState({
              showHideQty: true,
              showHideFunc: false,
              showHideNonfunc: false,
            })
          : this.setState({
              showHideFunc: true,
              showHideNonfunc: true,
              showHideQty: false,
            });
      }
    );
  };

  _add = () => {
    const { day_of_month, qty, num_func, num_nonfunc } = this.state;

    let deviceCollection = Object.assign([], this.state.deviceCollection);

    let newObj = {
      day_of_month: day_of_month,
      qty: qty,
      num_func: num_func,
      num_nonfunc: num_nonfunc,
    };

    deviceCollection.push(newObj);

    this.setState({ deviceCollection: deviceCollection });
  };

  _remove = (index) => {
    let deviceCollection = Object.assign([], this.state.deviceCollection);
    deviceCollection.splice(index, 1);
    this.setState({ deviceCollection });
  };

  render() {
    const state = this.props.location.state;

    const {
      day_of_month,
      qty,
      num_func,
      num_nonfunc,
      showHideQty,
      showHideFunc,
      showHideNonfunc,
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
        <h3>Add Equipment</h3>
        <InputFree
          type="date"
          placeholder="Enter date"
          name="date"
          title="Date"
          hideSubtxt={true}
        />

        <SelectComponentFree
          name="device"
          options={this.state.devices}
          title="Device"
          onSelected={(value) => this.handleDeviceSelected(value)}
          placeholder="Select Device"
          required="Please select device"
          state={state}
        />

        <div className="d-flex align-items-center justify-content-start">
          <InputFree
            hideSubtxt={true}
            state={state}
            type="number"
            placeholder="Enter Day of Month"
            name="day_of_month"
            title="Day of month"
            value={day_of_month}
            onChange={(value) => this.setState({ day_of_month: value })}
          />

          {showHideQty && (
            <InputFree
              hideSubtxt={true}
              state={state}
              type="number"
              placeholder="Enter Quantity"
              name="qty"
              title="Quantity"
              value={qty}
              onChange={(value) => this.setState({ qty: value })}
            />
          )}

          {showHideFunc && (
            <InputFree
              hideSubtxt={true}
              state={state}
              type="num"
              placeholder="Enter Numb Func"
              name="num_func"
              title="Number Functional"
              value={num_func}
              onChange={(value) => this.setState({ num_func: value })}
            />
          )}

          {showHideNonfunc && (
            <InputFree
              hideSubtxt={true}
              state={state}
              type="num"
              placeholder="Enter Numb Non-func"
              name="num_nonfunc"
              title="Number Non-functional"
              value={num_nonfunc}
              onChange={(value) => this.setState({ num_nonfunc: value })}
            />
          )}
          <button
            onClick={() => this._add()}
            className="btn btn-primary btn-sm"
          >
            Add
          </button>
        </div>

        <div>
          <table className="table table-striped table-borderd">
            <tr>
              <th>Day of Month</th>
              <th>Quantity</th>
              <th>Number Functional</th>
              <th>Number Non-functional</th>
              <th>Action</th>
            </tr>

            {this.state.deviceCollection.map((val, index) => (
              <tr>
                <td>{val.day_of_month}</td>
                <td>{val.qty}</td>
                <td>{val.num_func}</td>
                <td>{val.num_nonfunc}</td>
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

export default Equipment;
