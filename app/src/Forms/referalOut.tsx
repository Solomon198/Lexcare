import React from 'react';
import Input from '../components/input'
import DatePicker from '../components/datePicker'
import SelectComponent from '../components/select'
import TextArea from '../components/textArea'
import CustomDatePicker from '../components/customDatePicker';
import StepWrapper from '../components/stepWrapper'
import StepFormWrapper from '../components/stepFormWrapper'
import RadioButton from '../components/radioButtons'

type Props = {
    history: any
}

class ReferalOut extends React.Component<Props> {

    state = {



    }



    componentDidMount(){



    }




    render() {
        return (
            <StepFormWrapper
            title="Add Referal Out"
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
                    required="Please enter name"
                    />

                    <Input
                    type="text"
                    placeholder="Enter referal designation"
                    name="refered_by_designation"
                    title="Designation"
                    required="Please enter referal designation"
                    />

                    <DatePicker
                       type="text"
                       placeholder="Enter referal date"
                       name="referal_date"
                       title="Date of Birth"
                       required="Please enter referal date"

                    />

                </StepWrapper>

                <StepWrapper
                position={2} // the current step position
                title="Initiating Facility" // title of the step
                >

                    <Input
                    type="text"
                    placeholder="Enter initiating facility name"
                    name="initiating_facility_name"
                    title="Name"
                    required="Please enter name"
                    />

                    <Input
                        type="text"
                        placeholder="Enter initiating facility name"
                        name="initiating_facility_address"
                        title="Address"
                        required="Please enter faclilty name"
                    />

                    <RadioButton
                       name="initiating_facility_telephone_used"
                       title="Any telephone arrangements made by initiating facility?"
                       options={["Yes", "No"]}
                       required="Please select an option"
                     />

                    <RadioButton
                         name="initiating_facility_transportation_arrangement"
                         title="Any transportation arrangements made by initiating facility?"
                         options={["Yes", "No"]}
                         required="Please select an option"
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
                        required="Please enter a name"
                    />

                    <Input
                        type="text"
                        placeholder="Enter refered facility address"
                        name="refered_to_facility_address"
                        title="Address"
                        required="Please enter facility address"
                    />



                </StepWrapper>

                <StepWrapper
                    position={4} // the current step position
                    title="Client Details" // title of the step
                >

                    <Input
                        type="text"
                        placeholder="Enter client name"
                        name="client_name"
                        title="Client Name"
                        required="Please enter client name"
                    />

                    <Input
                        type="text"
                        placeholder="Enter identity number"
                        name="identity_number"
                        title="Identity Number"
                        required="Please enter identity number"
                    />

                    <TextArea
                        type="text"
                        placeholder="Enter client address"
                        name="client_address"
                        title="Client Address"
                        required="Please enter client address"
                    />

                    <Input

                        type="text"
                        placeholder="Enter age"
                        name="age"
                        title="Age"
                        required="Please enter age"
                    />


                        <RadioButton
                         name="sex"
                         title="Sex"
                         options={["Male", "Female"]}
                         required="Please select a sex"
                         />

                        <TextArea

                            name="clinical_history"
                            placeholder="Enter clinical history"
                            title="Clinical History"
                            required="Please enter clinical history"

                        />

                        <TextArea

                            name="findings_diagnosis"
                            placeholder="Enter findings / diagnosis"
                            title="Findings / Diagnosis"
                            required="Please enter diagnosis"

                        />

                    <TextArea

                        name="treatment_given"
                        placeholder="Enter treatment given (if any)"
                        title="Treatment given (if any)"
                        required="Please enter treatment given"
                    />

                    <TextArea

                        name="reason_for_referal"
                        placeholder="Enter reason for referal"
                        title="Reason for referal"
                        required="Please enter reason for referal"

                    />


                       <RadioButton
                         name="any_referal_documents"
                         title="Any other documents accompanying referal from initiating faciliting?"
                         options={["Yes", "No"]}
                         required="Please select an option"
                         />

                </StepWrapper>

                <StepWrapper
                position={5} // the current step position
                title="Parent's Information" // title of the step
                >

                <Input
                type="text"
                placeholder="Enter OIC name"
                name="initiating_facility_oic_name"
                title="Name"
                required="Please enter name"
                />


                </StepWrapper>

            </StepFormWrapper>
        );
    }

}

export default ReferalOut;
