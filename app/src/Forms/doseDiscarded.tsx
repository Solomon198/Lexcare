import React from 'react';
import Input from '../components/input';
import DatePicker from '../components/datePicker';
import SelectComponent from '../components/select';
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
      <StepFormWrapper
        onSubmit={(info: any) => this.SubmitRealm(info)}
        title="Add Dose Discarded"
        steps={1} // holds total number of steps required
      >
        <StepWrapper
          position={1} // the current step position
          title="Dose Discarded" // title of the step
        >
          <DatePicker
            type="date"
            placeholder="Select registration date Y-m-d"
            name="date"
            isAttendance={true}
            state={state}
            title="Date"
            required="please select date"
          />

          <Input
            type="text"
            placeholder="Enter Antigen/Diluent"
            name="antigen_diluent"
            title="Antigen / Diluent"
            required="Please enter antigen/diluent"
            state={state}
          />

          <h4>Quantity (doses) Discarded Due To:</h4>
          <div className="row">
            <Input
              type="number"
              placeholder="Enter Expiry Date"
              name="expiry"
              title="Expiry"
              required="Please enter expiry date"
              state={state}
            />

            <Input
              type="number"
              placeholder="Enter Breakage"
              name="breakage"
              title="Breakage"
              required="Please enter breakage"
              state={state}
            />

            <Input
              type="number"
              placeholder="Enter VVM Change"
              name="vvm_change"
              title="VVM Change"
              required="Please enter VVM Change"
              state={state}
            />

            <Input
              type="number"
              placeholder="Enter Freezing"
              name="freezing"
              title="Freezing"
              required="Please enter freezing"
              state={state}
            />

            <Input
              type="number"
              placeholder="Enter Label Removed"
              name="label_emoved"
              title="Label Removed"
              required="Please enter label removed"
              state={state}
            />

            <Input
              type="number"
              placeholder="Enter Other"
              name="other"
              title="Other"
              required="Please enter other"
              state={state}
            />

            <Input
              type="number"
              placeholder="Enter Total"
              name="total"
              title="Total"
              required="Please enter total"
              state={state}
            />
          </div>
        </StepWrapper>
      </StepFormWrapper>
    );
  }
}

export default DoseDiscarded;
