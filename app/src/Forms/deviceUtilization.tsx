import React from 'react';
import SelectComponentFree from '../components/component-free/select';
import InputFree from '../components/component-free/input';
import {
  createDeviceRecord,
} from '../../realm/queries/writeQueries';
import 'toasted-notes/src/styles.css';
import {  getDaysInAMonth } from '../../realm/utils/utils';
import moment from 'moment';
import  {getDocuments} from '../../realm/queries/readQueries'
import Schemas from '../../realm/schemas/index'



type Props = {
  history: any;
  location: any;
};

const Devices = [
  'BCG Syrines',
  'AD Syringes',
  '2 ml syringes',
  '5 ml syringes',
  'Safety boxes',
];

class DeviceUtilization extends React.Component<Props> {
  state = {
    categoryOption: [],

    selectedForm: '',
    selectedCategory: '',
    max_stock: '',
    date: null,
    min_stock: '',
    day_of_month: null,
    opening_balance: null,
    received: null,
    doses_opened: null,
    ending_balance: null,
    qty_ret_lga: null,
    categoryCollection: [],
    devices: Object.assign([],Devices),
    days: [],
  };



  onDateSelected(date:string){
    let docs:any[] = getDocuments(
      Schemas.Device.name,
      "date",
       date,
       date,
       false,
       null,
       true
      );

      console.log(docs)
     let devices = Object.assign([],Devices);
      docs.forEach((val:any)=>{
         let currentDevice = val.device;
         let search = devices.indexOf(currentDevice);
         if(search != -1){
           devices.splice(search,1);
         }
      })

      this.setState({devices:devices})



}

  _submit() {
    let {
      categoryCollection,
      max_stock,
      min_stock,
      date,
      selectedCategory,
      selectedForm,
    } = this.state;
    let stringifyCategoryCollection: string[] = [];
    categoryCollection.forEach((val) => {
      let strValue = JSON.stringify(val);
      stringifyCategoryCollection.push(strValue);
    });
    let data: any = {
      records: stringifyCategoryCollection,
      max_stock: parseInt(max_stock),
      min_stock: parseInt(min_stock),
      date: date,
    };

    const state = this.props.location.state;
    const isUpdate = state ? true : false;
    if (state) {
      data._id = state._id;
      data.health_facility_id = state.health_facility_id;
    }

    data['device'] = selectedCategory;
    createDeviceRecord(data, isUpdate)
      .then((val) => {
        if (val == 'success') {
          this.props.history.goBack();
          window.scrollTo(0, 0);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  resetSelectionsOnDeviceOrFormChanged() {
    this.setState({
      day_of_month: null,
      opening_balance: null,
      received: null,
      doses_opened: null,
      ending_balance: null,
      qty_ret_lga: null,
      categoryCollection: [],
      max_stock: null,
      min_stock: null,
    });
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

    let days = Object.assign([], this.state.days);
    let indexOfDay = days.indexOf(parseInt(day_of_month));
    days.splice(indexOfDay, 1);

    categoryCollection.push(newObj);

    this.setState({
      categoryCollection: categoryCollection,
      day_of_month: null,
      opening_balance: null,
      received: null,
      doses_opened: null,
      ending_balance: null,
      qty_ret_lga: null,
      days: days,
    });
  };

  _edit = (col, index) => {
    let categoryCollection = Object.assign([], this.state.categoryCollection);

    let editedItem = categoryCollection.splice(index, 1);
    let day = parseInt(editedItem[0].day_of_month);
    let days = Object.assign([], this.state.days);
    days.push(day);
    days.sort((a, b) => {
      return a - b;
    });

    this.setState({
      categoryCollection,
      day_of_month: col.day_of_month,
      opening_balance: col.opening_balance,
      received: col.received,
      doses_opened: col.doses_opened,
      ending_balance: col.ending_balance,
      qty_ret_lga: col.qty_ret_lga,
      days: days,
    });
  };

  _remove = (index) => {
    let categoryCollection = Object.assign([], this.state.categoryCollection);

    let deletedItem = categoryCollection.splice(index, 1);
    console.log(deletedItem);
    let dayOfMonth = deletedItem[0].day_of_month;
    let days = Object.assign([], this.state.days);
    days.push(parseInt(dayOfMonth));
    days.sort((a, b) => {
      return a - b;
    });

    this.setState({ categoryCollection, days: days });
  };

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
    const state = this.props.location.state;

    let {
      max_stock,
      min_stock,
      date,
      categoryCollection,
      selectedCategory,
    } = this.state;
    if (state) {
      let days = this.getDays(state.date);
      max_stock = state.max_stock;
      min_stock = state.min_stock;
      let formattDate = moment(state.date).format('L').split('/');

      date = formattDate[2] + '-' + formattDate[0] + '-' + formattDate[1];

      categoryCollection = state.records;

      state.records.forEach((val) => {
        let searchDate = days.indexOf(parseInt(val.day_of_month));
        if (searchDate != -1) {
          days.splice(searchDate, 1);
        }
      });

      selectedCategory = state.device;

      this.setState({
        max_stock,
        min_stock,
        date,
        categoryCollection,
        selectedCategory,
        days: days,
      });
    } else {
      let days = this.getDays();
      this.setState({ days: days });
    }

    window.scrollTo(0, 0);
  }

  render() {
    const state = this.props.location.state;

    const {
      max_stock,
      min_stock,
      day_of_month,
      opening_balance,
      received,
      doses_opened,
      ending_balance,
      qty_ret_lga,
      date,
      selectedCategory,
    } = this.state;

    let disabled = true;
    if (
      max_stock &&
      min_stock &&
      day_of_month &&
      opening_balance &&
      received &&
      doses_opened &&
      ending_balance &&
      qty_ret_lga &&
      date &&
      selectedCategory
    ) {
      disabled = false;
    }

    let disabledSubmit =
      this.state.categoryCollection.length == 0 ? true : false;

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
          Add Device Utilization
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
          onChange={(v) => this.setState({ date: v }, () => {
            this.getDays(v);
            this.onDateSelected(v);
          })}
        />

        <SelectComponentFree
          name="category"
          options={this.state.devices}
          title="Category"
          disabled={!date || state}
          value={this.state.selectedCategory}
          placeholder="Select Vaccine"
          onSelected={(value) =>
            this.setState({ selectedCategory: value }, () =>
              this.resetSelectionsOnDeviceOrFormChanged()
            )
          }
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
          placeholder="Enter MIN Stock"
          name="min_stock"
          title="MIN STOCK"
          hideSubtxt={true}
          onChange={(value) => this.setState({ min_stock: value })}
          value={min_stock}
        />

        <div className="d-flex align-items-center justify-content-center">
          <SelectComponentFree
            name="day_of_month"
            options={this.state.days}
            title="Day"
            placeholder="Select Day"
            value={day_of_month}
            onSelected={(value) => this.setState({ day_of_month: value })}
            required="Please select day"
            state={state}
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
            <button
              type="button"
              disabled={disabled}
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
        </div>
        <button
          onClick={() => this._submit()}
          disabled={disabledSubmit}
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

export default DeviceUtilization;
