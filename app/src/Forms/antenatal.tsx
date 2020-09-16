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

class Antenatal extends React.Component<Props> {

    state = {



    }



    render() {
        return (
            <StepFormWrapper
            title="Ante Natal Clinic Attendance Register"
            steps={6} // holds total number of steps required
            >

                <StepWrapper
                    position={1} // the current step position
                    title="Client's Basic Details" // title of the step
                >

                    {/* Use a date picker here */}
                    <DatePicker
                        type="text"
                        placeholder="Select registration date..."
                        name="date"
                        title="Client Date of Visit"
                        required="Please select reg date"
                    />

                    {/* This select is supposed to be autopopulated based on the date selected above. */}
                    <SelectComponent

                        name="client_names"
                        options={["Client 1","Client 2"]}
                        title="Name of Client"
                        placeholder=""
                        required="Please select client"


                    />

                    <Input

                        type="text"
                        placeholder="Enter client's card number"
                        name="mothers_card_no"
                        title="Client's Card Number"
                        required="Please enter card number"
                    />

                    {/* Use a date picker here */}
                    <DatePicker
                        type=""
                        placeholder="Select date of birth"
                        name="dob"
                        title="Date of Birth(DD/MM/YY)"
                        required="Please select date of birth"
                    />

                    <RadioButton
                        name="age"
                        title="Age Range"
                        options={["10 - 14 years", "15 - 19 years", "20 - 24 years", "25 - 49 years", "≥ 50 years"]}
                        required="Please select date range"
                         />

                    <Input
                        type="text"
                        placeholder="Enter actual age"
                        name="actual_age"
                        title="Actual Age"
                        required="Please enter actual age"
                    />

                </StepWrapper>

                <StepWrapper
                    position={2} // the current step position
                    title="Pregnancy" // title of the step

                >

                    <SelectComponent

                        name="parity"
                        options={["1","2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"]}
                        title="Parity"
                        placeholder="Select Parity"
                        required="Please select parity"

                    />

                    <RadioButton
                       name="attendance_type"
                       title="ANC Attendance"
                       options={["N", "R"]}
                       required="Please select an option"

                    />

                    <Input
                        type="text"
                        placeholder="Enter age of pregnancy (in weeks)"
                        name="pregnancy_age"
                        title="Age of Preganancy (in weeks)"
                        required="Please select pregnancy age"
                    />

                    <Input
                          type="text"
                          placeholder="Enter weight in kg"
                          name="weight"
                          title="Weight (in kg)"
                          required="Please select weight"
                    />

                    <Input
                        type="text"
                        placeholder="Format xxx/xxx"
                        name="blood_pressure"
                        title="Blood Pressure"
                        required="Plese enter bload presure"
                    />

                    <Input
                        type="text"
                        placeholder="Enter client number of visits"
                        name="visits"
                        title="No. of Antenatal clinic Visits to date"
                        required="Please enter number of visits"
                    />


                </StepWrapper>

                <StepWrapper
                position={3} // the current step position
                title="Counselling" // title of the step
                >

                    <RadioButton
                       name="hiv_testing"
                      title="HIV Testing Services"
                      options={["Yes", "No"]}
                      required="Please select an option"
                    />

                    <RadioButton
                       name="fgm"
                       title="Female Genital Mutilation (FGM)"
                       options={["Yes", "No"]}
                       required='Please select an option'

                    />

                    <RadioButton
                         name="family_planning"
                         title="Family Planning"
                         options={["Yes", "No"]}
                         required="Please select an option"
                       />

                    <RadioButton
                      name="maternal_nutrition"
                      title="Maternal Nutrition"
                      options={["Yes", "No"]}
                      required="Please select an option"
                      />

                    <RadioButton
                        name="early_breast_feeding"
                        title="Early Intiation of Breastfeeding"
                        options={["Yes", "No"]}
                        required="Please select an option"
                     />

                    <RadioButton
                       name="exclusive_breast_feeding"
                       title="Exclusive Breastfeeding"
                       options={["Yes", "No"]}
                       required="Please select an option"
                     />

                </StepWrapper>

                <StepWrapper
                    position={4} // the current step position
                    title="" // title of the step
                >

                    <RadioButton
                        name="syphilis_testing"
                        title="Syphilis Testing"
                        options={["Not Done", "Positive", "Negative"]}
                        required="Please select an option"
                         />

                    <RadioButton
                       name="syphilis_treated"
                       title="Syphilis Treated"
                       options={["Yes", "No", "Referred"]}
                       required="Please select an option"
                       />

                      <RadioButton
                         name="hepatitis_b_testing"
                         title="Hepatitis B Testing"
                         options={["Not Done", "Positive", "Negative"]}
                         required="Please select an option"
                         />

                    <RadioButton
                         name="hepatitis_b_treated"
                         title="Hepatitis B Treated"
                         options={["Not Done", "Positive", "Negative"]}
                         required="Please select an option"/>

                    <RadioButton
                        name="hepatitis_c_testing"
                        title="Hepatitis C Testing"
                        options={["Not Done", "Positive", "Negative"]}
                        required="Please select an option" />

                    <RadioButton
                         name="hepatitis_c_treated"
                         title="Hepatitis C Treated"
                         options={["Yes", "No", "Referred"]}
                         required="Please select an option"
                     />

                </StepWrapper>

                <StepWrapper
                    position={5} // the current step position
                    title="Haematology/  Blood Test (Write the result of the test)" // title of the step
                >

                    <Input
                        type="text"
                        placeholder="Enter HB/PCV (Anaemia)"
                        name="anemia"
                        title="HB/PCV (Anaemia)"
                        required="Please enter HB/PCV (Anaemia"
                    />

                    <Input
                          type="text"
                          placeholder="Enter clients sugar test result."
                          name="sugar_test_result"
                          title="Sugar (Gestational Diabetes)"
                          required="Please enter sugar test result"
                    />

                    <h5>Urianalysis</h5>

                    <Input
                        type="text"
                        placeholder="Enter clients test result."
                        name="urinalysis_sugar"
                        title="Sugar"
                        required="Please enter client test result"
                    />

                    <Input
                        type="text"
                        placeholder="Enter clients test result."
                        name="protein"
                        title="Protein"
                        required="Please enter client test result"
                    />

                    <RadioButton
                          name="llin_given"
                          title="LLIN Given"
                          options={["Yes", "No"]}
                          required="Please select an option"

                      />

                </StepWrapper>

                <StepWrapper
                    position={6} // the current step position
                    title="Doses of IPT given" // title of the step
                >

                    <RadioButton
                         name="ipt_one"
                         title="IPT1"
                         options={["Yes", "No"]}
                         required="Please select an option"
                    />

                    <RadioButton
                       name="ipt_two"
                       title="IPT2"
                       options={["Yes", "No"]}
                       required="Please select an option"

                       />

                    <RadioButton
                          name="ipt_three"
                          title="IPT3"
                          options={["Yes", "No"]}
                          required="Please select an option"  />

                    <RadioButton
                       name="ipt_greater_three"
                       title="IPT > 3"
                       options={["Yes", "No"]}
                       required="Please select an option"  />

                    <SelectComponent

                        name="td"
                        required="Please select an option"
                        options={["TD1","TD2", "TD3", "TD4", "TD5"]}
                        title="TD"
                        placeholder="Select TD"

                    />

                    <Input

                          type="text"
                          placeholder="Enter Associated Problems"
                          name="associated_problems"
                          title="Associated Problems"
                          required="Please enter associated problems"
                    />

                    <SelectComponent

                        name="visit_outcome"
                        options={["NT","T", "A", "RO"]}
                        title="Visit Out"
                        placeholder="Select Visit Out"
                        required="Please select an option"

                    />

                    <Input

                        type="text"
                        placeholder="Enter Reason of referral"
                        name="referral_reason"
                        title="Reason of referral"
                        required="Please enter reason of referal"
                    />

                    <SelectComponent

                        name="transportation"
                        required="Please select an option"
                        options={["Ambulance","Others"]}
                        title="Transportation"
                        placeholder="Select Transportation"

                    />

                </StepWrapper>

            </StepFormWrapper>
        );
    }

}

export default Antenatal;
