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
import { createDosesDiscardedRecord } from '../../realm/queries/writeQueries';
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
    date: null,
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

  resetSelectionOnAntigenDiluentChanged = () => {
    this.setState({
      expiry: null,
      breakage: null,
      vvm_change: null,
      freezing: null,
      label_rmvd: null,
      other: null,
      total: null,
      discardedCategory: [],
    });
  };

  _edit = (row, index) => {
    let discardedCategory = Object.assign([], this.state.discardedCategory);

    discardedCategory.splice(index, 1);

    let antigen_diluent = Object.assign([], this.state.antigen_diluent);
    antigen_diluent.push(this.state.selectedCategory);

    this.setState({
      discardedCategory,
      antigen_diluent,
      expiry: row.expiry,
      breakage: row.breakage,
      vvm_change: row.vvm_change,
      freezing: row.freezing,
      label_rmvd: row.label_rmvd,
      other: row.other,
      total: row.total,
    });
  };

  _remove = (index) => {
    let discardedCategory = Object.assign([], this.state.discardedCategory);

    discardedCategory.splice(index, 1);

    this.setState({ discardedCategory });
  };

  _submit() {
    let {
      selectedCategory,
      date,
      expiry,
      breakage,
      vvm_change,
      freezing,
      label_rmvd,
      other,
      total,
    } = this.state;
    // let stringifyCategoryCollection: string[] = [];
    // categoryCollection.forEach((val) => {
    //   let strValue = JSON.stringify(val);
    //   stringifyCategoryCollection.push(strValue);
    // });
    let data: any = {
      // records: stringifyCategoryCollection,
      expiry: date,
      breakage: parseInt(breakage),
      vvm_change: parseInt(vvm_change),
      freezing: parseInt(freezing),
      label_rmvd: parseInt(label_rmvd),
      other: parseInt(other),
      total: parseInt(total),
      date: date,
    };

    const state = this.props.location.state;
    const isUpdate = state ? true : false;
    if (state) {
      data._id = state._id;
      data.health_facility_id = state.health_facility_id;
    }

    data['antigen_diluent'] = selectedCategory;
    createDosesDiscardedRecord(data, isUpdate)
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

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const state = this.props.location.state;

    const {
      selectedCategory,
      date,
      expiry,
      breakage,
      vvm_change,
      freezing,
      label_rmvd,
      other,
      total,
    } = this.state;

    // let disabledSubmit = false;
    // if (
    //   selectedCategory != '' &&
    //   date != null &&
    //   expiry != null &&
    //   breakage != null &&
    //   vvm_change != null &&
    //   freezing != null &&
    //   label_rmvd != null &&
    //   other != null &&
    //   total != null
    // ) {
    //   disabledSubmit = true;
    // }

    // this.state.discardedCategory.length === 0 ? false : true;

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
          value={date}
          onChange={(v) => this.setState({ date: v })}
        />

        <SelectComponentFree
          options={this.state.antigen_diluent}
          placeholder="Select Antigen/Diluent"
          name="antigen_diluent"
          title="Antigen / Diluent"
          disabled={state}
          hideSubtxt={true}
          value={selectedCategory}
          onSelected={(value) =>
            this.setState({ selectedCategory: value }, () =>
              this.resetSelectionOnAntigenDiluentChanged()
            )
          }
          state={state}
        />

        <h4>Quantity (doses) Discarded Due To:</h4>
        <div>
          <InputFree
            type="date"
            placeholder="Enter Expiry Date"
            disabled={state}
            name="expiry"
            title="Expiry"
            value={expiry}
            onChange={(value) => this.setState({ expiry: value })}
            // state={state}
          />

          <InputFree
            type="number"
            placeholder="Enter Breakage"
            name="breakage"
            title="Breakage"
            disabled={state}
            value={breakage}
            onChange={(value) => this.setState({ breakage: value })}
            state={state}
          />

          <InputFree
            type="number"
            placeholder="Enter VVM Change"
            name="vvm_change"
            title="VVM Change"
            disabled={state}
            value={vvm_change}
            onChange={(value) => this.setState({ vvm_change: value })}
            state={state}
          />

          <InputFree
            type="number"
            placeholder="Enter Freezing"
            name="freezing"
            title="Freezing"
            disabled={state}
            value={freezing}
            onChange={(value) => this.setState({ freezing: value })}
            state={state}
          />

          <InputFree
            type="number"
            placeholder="Enter Label Removed"
            name="label_emoved"
            title="Label Rmvd"
            disabled={state}
            value={label_rmvd}
            onChange={(value) => this.setState({ label_rmvd: value })}
            state={state}
          />

          <InputFree
            type="number"
            placeholder="Enter Other"
            name="other"
            title="Other"
            disabled={state}
            value={other}
            onChange={(value) => this.setState({ other: value })}
            state={state}
          />

          <InputFree
            type="number"
            placeholder="Enter Total"
            name="total"
            disabled={state}
            title="Total"
            value={total}
            onChange={(value) => this.setState({ total: value })}
            state={state}
          />
        </div>

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

export default DoseDiscarded;
