import React from 'react';
import Input from '../components/input';
import DatePicker from '../components/datePicker';
import SelectComponent from '../components/select';
import TextArea from '../components/textArea';
import StepWrapper from '../components/stepWrapper';
import MultiSelectAndSearchComponent from '../components/multiSelectAndSearch';
import StepFormWrapper from '../components/stepFormWrapper';
import 'toasted-notes/src/styles.css';
import SelectClient from '../components/selectClient';
import RadioButton from '../components/radioButtons';
import {createPostNatal} from '../../realm/queries/writeQueries';
import schemas from '../../realm/schemas';




type Props = {
  history: any,
  location :any
}
class PostNatal extends React.Component<Props> {

   state = {

          days:[],
          months:[],
          years:[],
          services:[],
          ro:""






   }

   componentDidMount(){

    window.scrollTo(0, 0)

   }

   async createPostNatalRecord(info:any){
    const state = this.props.location.state;
    const isUpdate = state ? true : false;
    if(state){
      info._id = state._id
    }
    createPostNatal(info,isUpdate).then((val)=>{

    if(val == "success") this.props.history.push("/post-natal");


    }).catch(e=>{

        console.log(e);

    })

    }







   render(){

    const state = this.props.location.state;

    return(



                       <StepFormWrapper
                            onSubmit={(record)=>this.createPostNatalRecord(record)}
                            title="Post Natal Care"
                            steps={4} // holds total number of steps required
                        >

                           <StepWrapper
                              position={1} // the current step position
                              title="Patient / Client" // title of the step
                           >



                                <SelectClient
                                  name="client_names"
                                  name2="client_card_number"
                                  title="Select Client"
                                  required="please select client"
                                  date_name="date"
                                  date_title="Select registration date"
                                  date_required="Please select a date"
                                  intervention={schemas.PostNatal.name}
                                  state={state}
                                />


                            <SelectComponent

                            name="age"
                            options={["0 - 28 Days", "29 days - 11 Months", "12 - 59 Months", "5 - 9 Years", "10 - 19 Years", "> 20 Years"]}
                            title="Age"
                            required="Please Select Age"
                            placeholder="Select Age"
                            state={state}

                            />

                            <Input
                                type="number"
                                placeholder="Enter the exact age of client"
                                name="exact_age"
                                state={state}
                                title="Write Exact Age"
                              />

                              <Input
                                type="number"
                                placeholder="Record the number of times the woman has carried pregnancies to 28 weeks and above."
                                name="parity"
                                title="Parity"
                                state={state}
                              />

                        <RadioButton state={state}        name="pnc_clinic_attendance"  title="Postnatal Clinic Attendance<"
                              options={["10 - 14 years", "15 - 19 years", "20 - 24 years", "25 - 49 years", "≥ 50 years"]}

                            />

                            <TextArea
                                state={state}
                                name="associated_problems"
                                placeholder="Enter associated problems"
                                title="Enter associated problems"
                            />

                        </StepWrapper>



                     {/* STEP 2 */}

                       <StepWrapper
                       position={2}
                       title="Postnatal Care">

                            <RadioButton state={state} name="mother" title="Mother" options={["1 Day", "2 - 3 Days", "4 - 7 Days", "> 7 Days"]}  />

                            <RadioButton state={state} name="newborn" title="Newborn" options={["1 Day", "2 - 3 Days", "4 - 7 Days", "> 7 Days"]}  />

                            <RadioButton state={state} name="sex_of_child" title="Sex of Child" options={["Male", "Female"]}  />

                             <MultiSelectAndSearchComponent
                                 state={state}
                                 title="Maternal Care"
                                 options={[
                                   "Maternal Nutrition",
                                   "Early Intiation of Breastfeeding",
                                   "Family Planning",
                                   "Female Genital Mutilation (FGM)",
                                   "Infection Prevention"
                                  ]}
                                  required="Please select maternal care"
                                  name="maternal_care"
                             />


                              <MultiSelectAndSearchComponent
                                 title="Services"
                                 hasDependable
                                 onValueSelected={(value)=>this.setState({services:value},()=>{
                                   console.log(value)
                                 })}
                                 options={[
                                   "Vaginal Examination",
                                   "HB/PCV (Please write the result of the PCV/HB test)",
                                   "Urinalysis (Please write result for sugar)"
                                  ]}
                                  required="Please select maternal care"
                                  name="servies"
                                  state={state}
                             />

                              <Input
                                type="text"
                                isDependable
                                dependableValue="HB/PCV (Please write the result of the PCV/HB test)"
                                recievedValue={this.state.services}
                                placeholder="write the result of the PVC/HB test"
                                name="hb_pvc_test"
                                title="HB/PCV Test Result"
                                state={state}
                              />

                              <Input
                                type="text"
                                isDependable
                                dependableValue="Urinalysis (Please write result for sugar)"
                                recievedValue={this.state.services}
                                placeholder="write result for sugar"
                                name="urinal_test_result"
                                title="Urinalysis Test Result"
                                state={state}
                              />



                        </StepWrapper>



                        <StepWrapper
                        position={3}
                        title="Newborn Care">

                              <MultiSelectAndSearchComponent
                                 title="Neonatal Complications"
                                 options={[
                                   "Newborn with Danger Signs",
                                   "Newborn with Danger Signs given first dose of antibiotics",
                                   "Neonatal Tetanus",
                                   "Neonatal Jaundice"
                                  ]}
                                  required="Please select maternal care"
                                  name="neonatal_complications"
                                  state={state}
                             />


                            <RadioButton state={state} name="kmc" title="KMC" options={["A", "DS"]} />

                        </StepWrapper>



                          <StepWrapper
                          position={4}
                          title="">

                            <RadioButton
                             state={state} name="outcome_of_visit" title="Outcome of Visit (for mother and newborn)"
                             hasDependable
                             onValueSelected={(v)=>this.setState({ro:v})}
                            options={["NT", "T", "A", "RO"]}  />

                            <TextArea
                                name="ro_reason"
                                isDependable
                                dependableValue="RO"
                                recievedValue={this.state.ro}
                                placeholder="Please state reason for referral"
                                title="Reason for Referral"
                                state={state}
                            />

                            <RadioButton state={state} name="transportation_out" title="Transportation Out" options={["Ambulance", "Others"]}  />

                          </StepWrapper>


                    </StepFormWrapper>


  )
   }
}

export default PostNatal;
