import React from 'react';
import Input from '../components/input'
import DatePicker from '../components/datePicker';
import SelectComponent from '../components/select'
import CheckBox from '../components/checkBox'
import StepWrapper from '../components/stepWrapper'
import StepFormWrapper from '../components/stepFormWrapper';
import RadioButton from '../components/radioButtons'
import SelectClient from '../components/selectClient'
import {createNutrition} from '../../realm/queries/writeQueries'
import schemas from '../../realm/schemas';
import { AgeRange } from '../../realm/utils/utils';

type Props = {
    history: any,
    location:any
}

class Nutrition extends React.Component<Props> {

    state = {


       client:null
    }


    componentDidMount(){

      window.scrollTo(0, 0)

    }


      async createNutritionRecord(info:any){
        const state = this.props.location.state;
        const isUpdate = state ? true : false;
        if(state){
          info._id = state._id
        }
        createNutrition(info,isUpdate).then((val)=>{

        if(val == "success") this.props.history.push("/nutrition");


        }).catch(e=>{

            console.log(e);

        })

        }




    render() {

      const state = this.props.location.state;

        return (
            <StepFormWrapper
            onSubmit={(record)=>this.createNutritionRecord(record)}
            title="Add Nutrition"
            steps={5} // holds total number of steps required
            >

                <StepWrapper
                    position={1} // the current step position
                    title="Client's Basic Details" // title of the step
                >

                    {/* Use a date picker here */}


                       <SelectClient
                            name="client_name"
                            name2="card_number"
                            title="Select Client"
                            required="please select client"
                            date_name="date"
                            onValueSelected={(value)=>this.setState({client:value})}
                            date_title="Client Date of Visit"
                            date_required="Please select a date"
                            state={state}
                            intervention={schemas.Nutrition.name}
                         />




                    <RadioButton
                        name="sex"
                        title="Sex"
                        options={["Male","Female"]}
                        required="Please select a sex"
                        state={state}
                         />


                     <DatePicker
                        type="text"
                        placeholder="Date of birth"
                        name="date_of_birth"
                        title="Client Date of Birth"
                        state={state}
                    />


                </StepWrapper>

                <StepWrapper
                    position={2} // the current step position
                    title="" // title of the step

                >

                    <RadioButton

                        name="age_in_months"
                        options={AgeRange().nutrition}
                        title="Age in Months"
                        state={state}

                    />

                    <RadioButton
                       name="visit_type"
                       title="Type of Visit"
                       options={["N", "R"]}
                       state={state}

                    />

                    <h5>
                       Infant and Young Child Feeding (0 - 23 months)
                    </h5>

                    <SelectComponent
                        type="text"
                        placeholder=""
                        options={[
                          "Exclusive BF",
                          "BF + Water",
                          "BF + with other foods",
                          "Not B/F"
                        ]}
                        name="infant_feeding"
                        title="Infant feeding (0 -5 months)"
                        state={state}
                    />

                   <SelectComponent
                        type="text"
                        placeholder=""
                        options={[
                          "Exclusive BF",
                          "Other foods only",
                          "BF + with Other foods",
                          "Not started CF"
                        ]}
                        name="complimentary_feeding"
                        title="Complementary feeding (6 - 23 months)"
                        state={state}
                    />



                </StepWrapper>

                <StepWrapper
                position={3} // the current step position
                title="Counselling Provided" // title of the step
                >

                    <RadioButton
                      name="unknown"
                      state={state}
                      title=""
                      options={[
                        "Maternal",
                        "Exclusive Breastfeeding",
                        "ComplementaryFeeding",
                        "Water, Sanitation and Hygiene"
                      ]}
                    />

                    <RadioButton
                       name="referred_support"
                       title="Referred to Support Group"
                       options={["Y", "N"]}
                       state={state}

                    />


                </StepWrapper>

                <StepWrapper
                    position={4} // the current step position
                    title="Anthropometry (0 - 59 months)" // title of the step
                >
                      <Input
                        type="number"
                        placeholder="Enter Height/Length (cm)"
                        name="height"
                        title="Height/Length (cm)"
                        state={state}
                      />

                     <Input
                        type="number"
                        placeholder="Enter Weight (kg)"
                        name="weight"
                        title="Weight (kg)"
                        state={state}
                      />


                    <SelectComponent
                        name="bilateral_oedema"
                        title="Bilateral Oedema"
                        placeholder=""
                        options={["0", "+", "++","+++"]}
                        state={state}
                     />

                    <RadioButton
                       name="muac"
                       title="MUAC - enter in CM (measure for children 6 - 59 months)"
                       options={["Red", "Yellow", "Green"]}
                       state={state}
                     />

                      <RadioButton
                         name="growth_according_to_health"
                         title="Growth according to the Child Health Card (Tick as appropriate for child 0 - 59 months)"
                         options={["Growing Well", "Not Growing Well"]}
                         state={state}
                         />

                       <RadioButton
                         name="vitamin_a_suplement"
                         title="Vitamin A Supplement (Tick if child6 - 59 months was given Vit. A)"
                         options={["6 - 11 months", "12 - 59 months"]}
                         state={state}
                         />

                      <RadioButton
                        name="deworming"
                        title="Deworming (Tick if child 12 - 59 months was given Deworming tablet)"
                        options={["12 - 23 months", "24 - 59 months"]}
                        state={state}
                         />

                      <CheckBox
                         name="micronutrient_powder"
                         title="Micronutrient powder (Tick if child aged 6 - 23 months was given Micronutrient Powder (MNP)"
                         state={state}
                      />

                </StepWrapper>

                <StepWrapper
                    position={5} // the current step position
                    title="Treatment of Severe Acute Malnutrition (SAM)" // title of the step
                >

                    <SelectComponent
                        type="text"
                        placeholder=""
                        name="source_of_referral"
                        options={["Self","HF not Providing OTP","Community Volunteer/CHIPS"]}
                        title="Source of Referral to OTP"
                        state={state}
                    />

                    <RadioButton
                          name="eligibility_for_otp"
                          title="Eligibility for OTP Admission (tick as appropriate for admission)"
                          options={[
                            "Yes, admitted in HF (OTP)",
                            "Yes, Transferred in from another OTP/SC",
                            "No, Referred to SC",
                            "No, does not meet OTP Admission Criteria"

                          ]}
                          state={state}

                    />



                    <RadioButton
                          name="outcome_of_treament"
                          title="Outcome of Treatment (tick and insert date as appropriate)"
                          options={[
                            "Transferred out to another OTP/SC",
                            "Recovered",
                            "Defaulted",
                            "Died",
                            "Non-recovered"
                          ]}
                          state={state}

                      />

                      <DatePicker
                         title="Outcome of Treatment Date"
                         type=""
                         placeholder="Please enter treatment outcome date"
                         name="outcome_treatment"
                         state={state}

                      />

                </StepWrapper>



            </StepFormWrapper>
        );
    }

}

export default Nutrition;
