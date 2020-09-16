import React from 'react';
import Input from '../components/input'
import DatePicker from '../components/datePicker';
import SelectComponent from '../components/select'
import TextArea from '../components/textArea';
import CustomDatePicker from '../components/customDatePicker';
import StepWrapper from '../components/stepWrapper'
import StepFormWrapper from '../components/stepFormWrapper';
import RadioButton from '../components/radioButtons'

type Props = {
    history: any
}

class Tetanus extends React.Component<Props> {

    state = {



    }



    render() {
        return (
            <StepFormWrapper
            title="Tetanus Diphtheria Register for Pregnant and Non Pregnant Women"
            steps={2} // holds total number of steps required
            >

                <StepWrapper
                    position={1} // the current step position
                    title="Client's Basic Details" // title of the step
                >

                    <SelectComponent

                    name="session_type"
                    options={["FIXED","OUTREACH","MOBILE"]}
                    title="SESSION TYPE"
                    placeholder=""
                    required="Please select session type"


                    />

                    {/* Use a date picker here */}
                    <DatePicker
                        type="text"
                        placeholder="Select registration date..."
                        name="date_of_visit"
                        title="Date of Visit"
                        required="Please select date of visit"
                    />

                      <SelectComponent

                      name="client_name"
                      options={["Client 1","Client 2","Client 3"]}
                      title="Client Name"
                      placeholder=""
                      required="Please select client name"

                      />

                    <Input

                        type="text"
                        placeholder="Enter child client's card number"
                        name="card_no"
                        title="Client's Card Number"
                        required="Please enter card number"

                    />


                </StepWrapper>

                <StepWrapper
                    position={2} // the current step position
                    title="Pregnancy" // title of the step

                >

                      <DatePicker
                        type="text"
                        placeholder="Select birth date..."
                        name="date_of_birth"
                        title="Date of Birth"
                        required="Please select date of birth"
                    />

                      <Input
                        type="text"
                        placeholder="Enter follow up address"
                        name="follow_up_address"
                        title="Follow up Address"
                        required="Please enter the childs follow up address."
                    />




                    <Input
                          type="text"
                          placeholder="Enter phone number"
                          name="phone_number"
                          title="Phone No."
                          required="Please enter phone number"
                    />


                </StepWrapper>



            </StepFormWrapper>
        );
    }

}

export default Tetanus;
