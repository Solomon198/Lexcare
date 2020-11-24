import React from 'react';
import Input from '../components/input'
import DatePicker from '../components/datePicker';
import SelectComponent from '../components/select'
import TextArea from '../components/textArea';
import CheckBox from '../components/checkBox'
import StepWrapper from '../components/stepWrapper'
import StepFormWrapper from '../components/stepFormWrapper';
import RadioButton from '../components/radioButtons'
import MultiSelectAndSearch from "../components/multiSelectAndSearch"
import SelectClient from '../components/selectClient';
import {createOutpatient} from '../../realm/queries/writeQueries'
import schemas from '../../realm/schemas';
import Diseases from '../data/diseases'
type Props = {
    history: any,
    location:any
}

class OutPatient extends React.Component<Props> {

    state = {

         ro:''

    }

    componentDidMount(){

      window.scrollTo(0, 0)

    }

    async createOutPatient(info:any){
      const state = this.props.location.state;
      const isUpdate = state ? true : false;
      if(state){
        info._id = state._id
      }
      createOutpatient(info,isUpdate).then((val)=>{

      if(val == "success") this.props.history.push("/out-patient");


   }).catch(e=>{

       console.log(e);

   })

  }



    render() {

      const state = this.props.location.state;

        return (
            <StepFormWrapper
            onSubmit={(records)=>this.createOutPatient(records)}
            title="Add Daily Out-Patient (OPD) Register"
            steps={6} // holds total number of steps required
            >

                <StepWrapper
                    position={1} // the current step position
                    title="" // title of the step
                >


                    {/* Use a date picker here */}


                         <SelectClient
                              name="client_name"
                              name2="card_number"
                              title="Select Client"
                              required="please select client"
                              date_name="date"
                              date_title="Client Date of Visit"
                              date_required="Please select a date"
                              intervention={schemas.OutPatient.name}
                              state={state}
                         />


                        <RadioButton
                            name="sex"
                            title="Sex"
                            options={["Male","Female"]}
                            state={state}
                            />


                        <RadioButton
                            name="age"
                            title="Age"
                            options={["0 - 28 Days","29 - 11 months", "12 - 29 months","5 - 9 years"]}
                            state={state}
                        />

                        <DatePicker
                          type="date"
                          name="date_of_birth"
                          title="Date of Birth"
                          placeholder=""
                          state={state}
                        />


                </StepWrapper>

                <StepWrapper
                    position={2} // the current step position
                    title="Clients Visit Details" // title of the step

                >

                    <RadioButton

                        name="type_of_attendance"
                        options={["New","Follow Up"]}
                        title="Type of Attendance"
                        state={state}

                    />


                    <h5>
                        Nutritional Assessment
                    </h5>

                        <Input

                          type="number"
                          placeholder=""
                          name="weight"
                          title="Weight (Kg)"
                          state={state}

                        />

                        <Input

                          type="number"
                          placeholder=""
                          name="height"
                          title="Height (CM for children < 12 years) and (M for persons > 12 Years )"
                          state={state}

                        />


                          <Input

                              type="number"
                              placeholder=""
                              name="bmi_weight"
                              title="BMI [Weight (Kg) / Height² (M²)]"
                              state={state}

                        />







                </StepWrapper>

                <StepWrapper
                position={3} // the current step position
                title="" // title of the step
                >

                    <TextArea
                      name="complaint"
                      title="Presenting Complaint"
                      placeholder="Enter complaint"
                      state={state}
                    />

                    <MultiSelectAndSearch

                       name="diagnosis"
                       title="Diagnosis"
                       options={Diseases}
                       state={state}
                    />

                    <SelectComponent
                      title="Type of Laboratory Investigation"
                      options={["No investigation","Urine Analysis","RVS","Sugar Test","MPS/Widal"]}
                      name="type_of_investigation"
                      placeholder=""
                      state={state}
                    />

                    <TextArea
                      title="Drugs Given"
                      placeholder="drugs given"
                      name="drugs_given"
                      state={state}

                    />

                    <RadioButton
                        options={[
                          "Not Treated (NT)",
                          "Treated (T)",
                          "Admitted (A)",
                          "Referred Out(RO)",
                          "Dead (D)"
                        ]}
                        hasDependable
                        onValueSelected={(v)=>this.setState({ro:v})}
                        state={state}
                        title="Outcome of Visits"
                        name="visit_outcome"
                    />

                            <TextArea
                                name="ro_reason"
                                isDependable
                                dependableValue="Referred Out(RO)"
                                recievedValue={this.state.ro}
                                placeholder="Please write condition that require referal"
                                title="Please write condition that require referal"
                                state={state}
                            />





                </StepWrapper>

                <StepWrapper
                    position={4} // the current step position
                    title="Malaria" // title of the step
                >
                      <RadioButton
                        options={[
                          "< 5 Years",
                          ">=5 Years",
                          "PW",
                        ]}
                        state={state}
                        title="Clinical Diagnosis (Tick if no lab test was done before treatment)"
                        name="clinical_diagnosis"
                    />

                    <h5>
                       Laboratory Diagnosis
                    </h5>

                   <RadioButton
                        options={[
                          "+ve",
                          "-ve",
                        ]}
                        title="RDT (Indicate either +ve or -ve)"
                        name="rdt"
                        state={state}
                    />

                     <RadioButton
                        options={[
                          "< 5 Years",
                          ">=5 Years",
                        ]}
                        title="Age"
                        name="age"
                        state={state}
                    />

                     <RadioButton
                        options={[
                          "+ve",
                          "-ve",
                        ]}
                        state={state}
                        title="Microscopy (Indicate either +ve or -ve)"
                        name="microscopy"
                    />

                     <h5>
                        ACT given
                     </h5>

                     <RadioButton
                        options={[
                          "< 5 Years",
                          ">=5 Years",
                          "PW"
                        ]}
                        state={state}
                        title="(Tick if ACT was given)"
                        name="act"
                    />

                      <RadioButton
                        options={[
                          "Other Anti-Malaria",
                        ]}
                        title="Tick if other antimalaria is given)"
                        name="other_anti_maleria"
                        state={state}
                    />

                     <h5>
                         Severe Malaria
                     </h5>

                    <RadioButton
                        options={[
                          "< 5 Years",
                          ">=5 Years",
                        ]}
                        title="(Tick Only if tested positive for malaria)"
                        name="severe_maleria"
                        state={state}
                    />

                    <h5>

                       Pre referral Treatment

                    </h5>

                    <RadioButton
                        options={[
                          "IV artesunate",
                          "IM/IV artermether",
                          "Other pre referral"
                        ]}
                        title="(Tick any of the treatment given)"
                        name="pre_referal_treatment"
                        state={state}
                    />





                </StepWrapper>

                <StepWrapper
                    position={5} // the current step position
                    title="Tuberculosis" // title of the step
                >


                    <CheckBox
                       title="Clinically Screened for TB"
                       name="clinically_screened"
                       state={state}
                    />

                    <RadioButton
                          name="clinical_screening_score"
                          title="TB Clinical screening score # (Enter 0 or 1)"
                          options={[
                            "0",
                            "1"
                          ]}
                          state={state}
                    />

                     <CheckBox
                       title="Client scored 1 (TB suspect) and referred for further TB services"
                       name="clinical_scored"
                       state={state}
                    />


                    <h5>
                       Hepatitis B
                    </h5>

                    <CheckBox
                       title="Tested"
                       name="tested_hepatitis_b"
                       state={state}
                    />

                    <RadioButton
                      options={["Positive","Negative"]}
                      title="Result"
                      name="result_hepatitis_b_test"
                      state={state}
                    />

                    <RadioButton
                       title="Referred or Treated"
                       name="hepatitis_b_refered_or_treated"
                       options={["R","T"]}
                       state={state}
                    />

                    <h5>
                       Hepatitis C Screening
                    </h5>

                    <CheckBox
                       title="Tested"
                       name="tested_hepatitis_c"
                       state={state}
                    />

                    <RadioButton
                      options={["Positive","Negative"]}
                      title="Result"
                      name="result_hepatitis_c_test"
                      state={state}
                    />

                    <RadioButton
                       title="Referred or Treated"
                       name="hepatitis_c_refered_or_treated"
                       options={["R","T"]}
                       state={state}
                    />



                </StepWrapper>

                <StepWrapper
                    position={6} // the current step position
                    title="Gender Based Violence (GBV)" // title of the step
                >


                    <Input
                       title="GBV Case Seen (indicate type of case presented)"
                       name="gbv"
                       type=""
                       placeholder=""
                       state={state}
                    />

                    <Input
                       title="Post GBV Care Received"
                       name="post_gbv"
                       type=""
                       state={state}
                       placeholder=""
                    />

                    <Input
                       title="GBV Case Referred for further Treatment"
                       name="gbv_refered"
                       type=""
                       state={state}
                       placeholder=""
                    />






                </StepWrapper>



            </StepFormWrapper>
        );
    }

}

export default OutPatient;
