import React from 'react';
import InputFree from '../components/component-free/input';
import SelectComponentFree from '../components/component-free/select';
import { createEquipmentRecord } from '../../realm/queries/writeQueries';
import { createFacilityService } from '../../realm/queries/writeQueries';
import {  getDaysInAMonth } from '../../realm/utils/utils';
import moment from 'moment';
import  {getDocuments} from '../../realm/queries/readQueries'
import Schemas from '../../realm/schemas/index'

type Props = {
  history: any;
  location: any;
};

const Devices =  [
  'Ice packs (0.3/0.4L)',
  'Vacince Carrier',
  'Cold boxes',
  'Vaccine fridges',
]

class Equipment extends React.Component<Props> {
  state = {
    day_of_month: null,
    qty: null,
    num_func: null,
    num_nonfunc: null,
    date: null,
    selectedDevice: '',
    days: [],
    deviceCollection: [],
    devices: Object.assign([],Devices),
    showHideQty: false,
    showHideFunc: false,
    showHideNonfunc: false,
  };




  onDateSelected(date:string){
    let docs:any[] = getDocuments(
      Schemas.Equipments.name,
      "date",
       date,
       date,
       false,
       null,
       true
      );

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

    let { date, deviceCollection, selectedDevice,showHideFunc,showHideQty,showHideNonfunc } = this.state;


    if (state) {

      if(state.records[0].qty){
        showHideQty = true;
      }else{
        showHideFunc = true;
        showHideNonfunc = true;
      }



      let days = this.getDays(state.date);
      let formattDate = moment(state.date).format('L').split('/');

      date = formattDate[2] + '-' + formattDate[0] + '-' + formattDate[1];

      deviceCollection = state.records;

      state.records.forEach((val) => {
        let searchDate = days.indexOf(parseInt(val.day_of_month));
        if (searchDate != -1) {
          days.splice(searchDate, 1);
        }
      });

      selectedDevice = state.device;

      this.setState({
        date,
        deviceCollection,
        selectedDevice,
        days: days,
        showHideFunc:showHideFunc,
        showHideQty : showHideQty,
        showHideNonfunc : showHideNonfunc
      });
    } else {
      let days = this.getDays();
      this.setState({ days: days });
    }

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

        this.setState({
          day_of_month: null,
          qty: null,
          num_func: null,
          num_nonfunc: null,
          deviceCollection: [],
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

    let days = Object.assign([], this.state.days);
    let indexOfDay = days.indexOf(parseInt(day_of_month));
    days.splice(indexOfDay, 1);

    deviceCollection.push(newObj);

    this.setState({
      deviceCollection: deviceCollection,
      day_of_month: null,
      qty: null,
      num_func: null,
      num_nonfunc: null,
      days: days,
    });
  };

  _edit = (val, index) => {
    let deviceCollection = Object.assign([], this.state.deviceCollection);

    let editedItem = deviceCollection.splice(index, 1);
    let day = parseInt(editedItem[0].day_of_month);
    let days = Object.assign([], this.state.days);
    days.push(day);
    days.sort((a, b) => {
      return a - b;
    });

    this.setState({
      deviceCollection,
      day_of_month: val.day_of_month,
      qty: val.qty,
      num_func: val.num_func,
      num_nonfunc: val.num_nonfunc,
      days: days,
    });
  };

  _remove = (index) => {
    let deviceCollection = Object.assign([], this.state.deviceCollection);
    deviceCollection.splice(index, 1);
    this.setState({ deviceCollection });
  };

  _submit() {
    let { deviceCollection, date, selectedDevice } = this.state;
    let stringifyDeviceCollection: string[] = [];
    deviceCollection.forEach((val) => {
      let strValue = JSON.stringify(val);
      stringifyDeviceCollection.push(strValue);
    });
    let data: any = {
      records: stringifyDeviceCollection,
      date: date,
    };

    const state = this.props.location.state;
    const isUpdate = state ? true : false;
    if (state) {
      data._id = state._id;
      data.health_facility_id = state.health_facility_id;
    }

    data['device'] = selectedDevice;
    createEquipmentRecord(data, isUpdate)
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
      date,
      selectedDevice,
      deviceCollection
    } = this.state;

    let disableAdd = false;
    let disableSubmit = false;
    if(!day_of_month || !date || !selectedDevice  ){
      disableAdd = true;
    }

    if(showHideFunc){
      if(!num_func || !num_nonfunc){
        disableAdd = true;
      }
    }

    if(showHideQty){
      if(!qty){
        disableAdd =true;
      }
    }

    if(!date || !selectedDevice || deviceCollection.length == 0 ){
        disableSubmit = true;
    }





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
        <h3>Devices Status Report Form</h3>
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
          name="device"
          options={this.state.devices}
          title="Device"
          disabled={!date || state}
          value={this.state.selectedDevice}
          onSelected={(value) => this.handleDeviceSelected(value)}
          placeholder="Select Device"
          required="Please select device"
          state={state}
        />

        <div className="d-flex align-items-center justify-content-start">
          <SelectComponentFree
            name="day_of_month"
            options={this.state.days}
            title="Day of Month"
            placeholder="Select Day of Month"
            value={day_of_month}
            onSelected={(value) => this.setState({ day_of_month: value })}
            required="Please select day"
            state={state}
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
              type="number"
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
              type="number"
              placeholder="Enter Numb Non-func"
              name="num_nonfunc"
              title="Number Non-functional"
              value={num_nonfunc}
              onChange={(value) => this.setState({ num_nonfunc: value })}
            />
          )}
          <button
            onClick={() => this._add()}
            disabled={disableAdd}
            className="btn btn-primary"
          >
            Add
          </button>
        </div>

        <div>
          <table className="table table-striped table-borderd">
            <tr>
              <th>Day of Month</th>
              {showHideQty && <th>Quantity</th>}
              {showHideFunc && <th>Number Functional</th>}
              {showHideNonfunc && <th>Number Non-functional</th>}
              <th colSpan="2">Action</th>
            </tr>

            {this.state.deviceCollection.map((val, index) => (
              <tr>
                <td>{val.day_of_month}</td>
                {showHideQty && <td>{val.qty}</td>}
                {showHideFunc && <td>{val.num_func}</td>}
                {showHideNonfunc && <td>{val.num_nonfunc}</td>}
                <td>
                  <button
                    onClick={() => this._remove(index)}
                    className="btn btn-danger btn-sm"
                  >
                    Remove
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => this._edit(val, index)}
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
          disabled={disableSubmit}
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

export default Equipment;
