import React from 'react';
import Input from '../components/input'
import DatePicker from '../components/datePicker'
import TextArea from '../components/textArea'
import StepWrapper from '../components/stepWrapper'
import StepFormWrapper from '../components/stepFormWrapper'
import RadioButton from '../components/radioButtons';
import {createReferalOut} from '../../realm/queries/writeQueries'

type Props = {
    history: any,
    location:any
}

class ReferalOut extends React.Component<Props> {

    state = {


         client:null
    }



    componentDidMount(){


      window.scrollTo(0, 0)

    }

    async createReferalOutRecord(info:any){

      const state = this.props.location.state;
      const isUpdate = state ? true : false;
      if(state){
        info._id = state._id
      }
      createReferalOut(info,isUpdate).then((val)=>{

      if(val == "success") this.props.history.push("/referal-out");


    }).catch(e=>{

     console.log(e);

    })

  }






    render() {
      const state = this.props.location.state;
        return (
            <StepFormWrapper
            title="Add Referal Out"
            onSubmit={(record)=>this.createReferalOutRecord(record)}
            steps={5} // holds total number of steps required
            >

                <StepWrapper
                position={1} // the current step position
                title="Refered By" // title of the step
                >

                    <Input
                    type="text"
                    placeholder="Enter referal name"
                    name="refered_by_name"
                    title="Name"
                    state={state}
                    required="Please enter name"

                    />

                    <Input
                    type="text"
                    placeholder="Enter referal designation"
                    name="refered_by_designation"
                    title="Designation"
                    state={state}
                    required="Please enter referal designation"
                    />

                    <DatePicker
                       type="text"
                       placeholder="Enter referal date"
                       name="referal_date"
                       title="Referal Date"
                       state={state}
                       required="Please enter referal date"

                    />

                </StepWrapper>

                <StepWrapper
                position={2} // the current step position
                title="Initiating Facility" // title of the step
                >

                    <Input
                    type="text"
                    state={state}
                    placeholder="Enter initiating facility name"
                    name="initiating_facility_name"
                    title="Name"
                    />

                    <Input
                        type="text"
                        placeholder="Enter initiating facility name"
                        name="initiating_facility_address"
                        title="Address"
                        state={state}
                    />

                    <RadioButton
                       name="initiating_facility_telephone_used"
                       title="Any telephone arrangements made by initiating facility?"
                       options={["Yes", "No"]}
                       state={state}
                     />

                    <RadioButton
                         name="initiating_facility_transportation_arrangement"
                         title="Any transportation arrangements made by initiating facility?"
                         options={["Yes", "No"]}
                         state={state}
                         />


                </StepWrapper>

                <StepWrapper
                position={3} // the current step position
                title="Refered to Facility" // title of the step
                >

                    <Input
                        type="text"
                        placeholder="Enter refered facility name"
                        name="refered_to_facility_name"
                        title="Name"
                        state={state}
                    />

                    <Input
                        type="text"
                        placeholder="Enter refered facility address"
                        name="refered_to_facility_address"
                        title="Address"
                        state={state}
                    />



                </StepWrapper>

                <StepWrapper
                    position={4} // the current step position
                    title="Client Details" // title of the step
                >

                    <Input
                        type="text"
                        state={state}
                        placeholder="Enter client name"
                        name="client_name"
                        title="Client Name"
                    />

                    <Input
                        type="text"
                        placeholder="Enter identity number"
                        name="identity_number"
                        title="Identity Number"
                        state={state}
                    />

                    <TextArea
                        type="text"
                        placeholder="Enter client address"
                        name="client_address"
                        title="Client Address"
                        state={state}
                    />

                    <Input

                        type="number"
                        placeholder="Enter age"
                        name="age"
                        state={state}
                        title="Age"
                    />


                        <RadioButton
                         name="sex"
                         title="Sex"
                         options={["Male", "Female"]}
                         state={state}
                         />

                        <TextArea

                            name="clinical_history"
                            placeholder="Enter clinical history"
                            state={state}
                            title="Clinical History"

                        />

                        <TextArea

                            name="findings_diagnosis"
                            placeholder="Enter findings / diagnosis"
                            title="Findings / Diagnosis"
                            state={state}

                        />

                    <TextArea

                        name="treatment_given"
                        placeholder="Enter treatment given (if any)"
                        title="Treatment given (if any)"
                        state={state}
                    />

                    <TextArea

                        name="reason_for_referal"
                        placeholder="Enter reason for referal"
                        title="Reason for referal"
                        state={state}

                    />


                       <RadioButton
                         name="any_referal_documents"
                         title="Any other documents accompanying referal from initiating faciliting?"
                         options={["Yes", "No"]}
                         state={state}
                         />

                </StepWrapper>

                <StepWrapper
                position={5} // the current step position
                title="OIC of Initiating Facility" // title of the step
                >

                <Input
                type="text"
                placeholder="Enter OIC name"
                name="initiating_facility_oic_name"
                title="Name"
                state={state}
                />


                </StepWrapper>

            </StepFormWrapper>
        );
    }

}

export default ReferalOut;
