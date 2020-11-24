import React from 'react';
import Input from '../components/input'
import SelectComponent from '../components/select'
import StepWrapper from '../components/stepWrapper'
import StepFormWrapper from '../components/stepFormWrapper';
import RadioButton from '../components/radioButtons';
import SelectClient from '../components/selectClient'
import {createAntenatal} from '../../realm/queries/writeQueries'
import schemas from '../../realm/schemas';

type Props = {
    history: any,
    location:any,
}

class Antenatal extends React.Component<Props> {

    state = {

    }

    componentDidMount(){
      window.scrollTo(0, 0)
    }

    async createAntenatalRecord(info:any){
      const state = this.props.location.state;
      const isUpdate = state ? true : false;
      if(state){
        info._id = state._id
      }
      createAntenatal(info,isUpdate).then((val)=>{

      if(val == "success") this.props.history.push("/antenatal-care");


    }).catch(e=>{

     console.log(e);

    })

  }




    render() {

        const state = this.props.location.state;

        return (
            <StepFormWrapper
            onSubmit={(v)=>this.createAntenatalRecord(v)}
            title="Ante Natal Clinic Attendance Register"
            steps={6} // holds total number of steps required
            >

                <StepWrapper
                    position={1} // the current step position
                    title="Client's Basic Details" // title of the step
                >


                    <SelectClient
                      name="client_names"
                      name2="mothers_card_no"
                      title="Select Client"
                      required="please select client"
                      date_name="date"
                      date_title="Client Date of Visit"
                      date_required="Please select reg date"
                      state={state}
                      intervention={schemas.Antenatal.name}
                    />


                    <RadioButton
                        state={state}
                        name="age"
                        title="Age Range"
                        options={["10 - 14 years", "15 - 19 years", "20 - 24 years", "25 - 49 years", "≥ 50 years"]}
                        required="Please select date range"
                     />

                    <Input
                        state={state}
                        type="number"
                        placeholder="Enter actual age"
                        name="actual_age"
                        title="Actual Age"
                    />

                </StepWrapper>

                <StepWrapper
                    position={2} // the current step position
                    title="Pregnancy" // title of the step

                >

                    <SelectComponent
                        state={state}
                        type="number"
                        name="parity"
                        options={["1","2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"]}
                        title="Parity"
                        placeholder="Select Parity"

                    />

                    <RadioButton
                       name="attendance_type"
                       title="ANC Attendance"
                       options={["N", "R"]}
                       state={state}
                    />

                    <Input
                        type="number"
                        placeholder="Enter age of pregnancy (in weeks)"
                        name="pregnancy_age"
                        title="Age of Preganancy (in weeks)"
                        state={state}
                    />

                    <Input
                          type="number"
                          placeholder="Enter weight in kg"
                          name="weight"
                          title="Weight (in kg)"
                          state={state}
                    />

                    <Input
                        type="text"
                        placeholder="Format xxx/xxx"
                        name="blood_pressure"
                        title="Blood Pressure"
                        state={state}
                    />

                    <Input
                        type="number"
                        placeholder="Enter client number of visits"
                        name="visits"
                        title="No. of Antenatal clinic Visits to date"
                        state={state}
                    />


                </StepWrapper>

                <StepWrapper
                position={3} // the current step position
                title="Counselling" // title of the step
                >

                    <RadioButton
                      state={state}
                      name="hiv_testing"
                      title="HIV Testing Services"
                      options={["Yes", "No"]}
                    />

                    <RadioButton
                       name="fgm"
                       title="Female Genital Mutilation (FGM)"
                       options={["Yes", "No"]}
                       state={state}
                    />

                    <RadioButton
                         name="family_planning"
                         title="Family Planning"
                         options={["Yes", "No"]}
                         state={state}
                       />

                    <RadioButton
                      name="maternal_nutrition"
                      title="Maternal Nutrition"
                      options={["Yes", "No"]}
                      state={state}
                      />

                    <RadioButton
                        name="early_breast_feeding"
                        title="Early Intiation of Breastfeeding"
                        options={["Yes", "No"]}
                        state={state}
                     />

                    <RadioButton
                       name="exclusive_breast_feeding"
                       title="Exclusive Breastfeeding"
                       options={["Yes", "No"]}
                       state={state}
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
                        state={state}
                    />

                    <RadioButton
                       name="syphilis_treated"
                       title="Syphilis Treated"
                       options={["Yes", "No", "Referred"]}
                       state={state}
                       />

                      <RadioButton
                         name="hepatitis_b_testing"
                         title="Hepatitis B Testing"
                         options={["Not Done", "Positive", "Negative"]}
                         state={state}
                         />

                    <RadioButton
                         name="hepatitis_b_treated"
                         state={state}
                         title="Hepatitis B Treated"
                         options={["Not Done", "Positive", "Negative"]}
                         />

                    <RadioButton
                        name="hepatitis_c_testing"
                        state={state}
                        title="Hepatitis C Testing"
                        options={["Not Done", "Positive", "Negative"]}
                         />

                    <RadioButton
                         name="hepatitis_c_treated"
                         state={state}
                         title="Hepatitis C Treated"
                         options={["Yes", "No", "Referred"]}

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
                        state={state}
                        title="HB/PCV (Anaemia)"

                    />

                    <Input
                          type="text"
                          state={state}
                          placeholder="Enter clients sugar test result."
                          name="sugar_test_result"
                          title="Sugar (Gestational Diabetes)"

                    />

                    <h5>Urianalysis</h5>

                    <Input
                        type="text"
                        state={state}
                        placeholder="Enter clients test result."
                        name="urinalysis_sugar"
                        title="Sugar"

                    />

                    <Input
                        type="text"
                        state={state}
                        placeholder="Enter clients test result."
                        name="protein"
                        title="Protein"

                    />

                    <RadioButton
                          name="llin_given"
                          state={state}
                          title="LLIN Given"
                          options={["Yes", "No"]}


                      />

                </StepWrapper>

                <StepWrapper
                    position={6} // the current step position
                    title="Doses of IPT given" // title of the step
                >

                    <RadioButton
                         name="ipt_one"
                         title="IPT1"
                         state={state}
                         options={["Yes", "No"]}

                    />

                    <RadioButton
                       name="ipt_two"
                       title="IPT2"
                       state={state}
                       options={["Yes", "No"]}


                       />

                    <RadioButton
                          name="ipt_three"
                          state={state}
                          title="IPT3"
                          options={["Yes", "No"]}
                            />

                    <RadioButton
                       name="ipt_greater_three"
                       state={state}
                       title="IPT > 3"
                       options={["Yes", "No"]}
                         />

                    <SelectComponent

                        name="td"
                        state={state}

                        options={["TD1","TD2", "TD3", "TD4", "TD5"]}
                        title="TD"
                        placeholder="Select TD"

                    />

                    <Input
                          state={state}
                          type="text"
                          placeholder="Enter Associated Problems"
                          name="associated_problems"
                          title="Associated Problems"

                    />

                    <SelectComponent
                        state={state}
                        name="visit_outcome"
                        options={["NT","T", "A", "RO"]}
                        title="Visit Out"
                        placeholder="Select Visit Out"


                    />

                    <Input

                        type="text"
                        placeholder="Enter Reason of referral"
                        name="referral_reason"
                        title="Reason of referral"
                        state={state}
                    />

                    <SelectComponent
                        name="transportation"

                        options={["Ambulance","Others"]}
                        title="Transportation"
                        placeholder="Select Transportation"
                        state={state}

                    />

                </StepWrapper>

            </StepFormWrapper>
        );
    }

}

export default Antenatal;
