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
  history: any
}
class PostNatal extends React.Component<Props> {

   state = {

          days:[],
          months:[],
          years:[],






   }

   async createPostNatalRecord(info:any){

    createPostNatal(info).then((val)=>{

    if(val == "success") this.props.history.push("/post-natal");


    }).catch(e=>{

        console.log(e);

    })

    }







   render(){
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
                                />


                            <SelectComponent

                            name="age"
                            options={["0 - 28 Days", "29 days - 11 Months", "12 - 59 Months", "5 - 9 Years", "10 - 19 Years", "> 20 Years"]}
                            title="Age"
                            placeholder="Select Gender"
                            />

                            <Input
                                type="number"
                                placeholder="Enter the exact age of client"
                                name="exact_age"
                                title="Write Exact Age"
                              />

                              <Input
                                type="number"
                                placeholder="Record the number of times the woman has carried pregnancies to 28 weeks and above."
                                name="parity"
                                title="Parity"
                              />

                            <RadioButton name="pnc_clinic_attendance" title="Postnatal Clinic Attendance<" options={["10 - 14 years", "15 - 19 years", "20 - 24 years", "25 - 49 years", "≥ 50 years"]}  />

                            <TextArea

                                name="associated_problems"
                                placeholder="Enter associated problems"
                                title="Enter associated problems"
                            />

                        </StepWrapper>



                     {/* STEP 2 */}

                       <StepWrapper
                       position={2}
                       title="Postnatal Care">

                            <RadioButton name="mother" title="Mother" options={["1 Day", "2 - 3 Days", "4 - 7 Days", "> 7 Days"]}  />

                            <RadioButton name="newborn" title="Newborn" options={["1 Day", "2 - 3 Days", "4 - 7 Days", "> 7 Days"]}  />

                            <RadioButton name="sex_of_child" title="Sex of Child" options={["Male", "Female"]}  />

                             <MultiSelectAndSearchComponent
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
                                 options={[
                                   "Vaginal Examination",
                                   "HB/PCV (Please write the result of the PCV/HB test)",
                                   "Urinalysis (Please write result for sugar)"
                                  ]}
                                  required="Please select maternal care"
                                  name="servies"
                             />

                              <Input
                                type="text"
                                placeholder="write the result of the PVC/HB test"
                                name="hb_pvc_test"
                                title="HB/PCV Test Result"
                              />

                              <Input
                                type="text"
                                placeholder="write result for sugar"
                                name="urinal_test_result"
                                title="Urinalysis Test Result"
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
                             />


                            <RadioButton name="kmc" title="KMC" options={["A", "DS"]} />

                        </StepWrapper>



                          <StepWrapper
                          position={4}
                          title="">

                            <RadioButton name="outcome_of_visit" title="Outcome of Visit (for mother and newborn)" options={["NT", "T", "A", "RO"]}  />

                            <TextArea

                                name="ro_reason"
                                placeholder="Please state reason for referral"
                                title="Reason for Referral"
                            />

                            <RadioButton name="transportation_out" title="Transportation Out" options={["Ambulance", "Others"]}  />

                          </StepWrapper>


                    </StepFormWrapper>


  )
   }
}

export default PostNatal;
