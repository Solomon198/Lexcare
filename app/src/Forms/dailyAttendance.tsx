import React from 'react';
import Input from '../components/input'
import DatePicker from '../components/datePicker';
import SelectComponent from '../components/select'
import Auth from '../../realm/queries/auth'
import TextArea from '../components/textArea';
import StepWrapper from '../components/stepWrapper'
import StepFormWrapper from '../components/stepFormWrapper';
import {getPHC_configSettings} from   "../../realm/queries/readQueries"
import {createDailyAttendance} from '../../realm/queries/writeQueries';
import SelectCommunityLeader from '../components/selectCommunityLeader';
import NigeriaStates from '../data/states'
import 'toasted-notes/src/styles.css';





type Props = {
  history: any,
  location:any
}
class  DailyAttendance extends React.Component<Props> {

   state = {





   }


   SubmitRealm(info:any){
    const state = this.props.location.state;
    const isUpdate = state ? true : false;
     createDailyAttendance(info,isUpdate).then((val)=>{

          if(val == "success"){
            this.props.history.push("/daily-attendance");
            window.scrollTo(0, 0);
          }

         }).catch((err)=>{

           console.log(err);

         })
   }



   componentDidMount(){
    window.scrollTo(0, 0)

   }








   render(){

    const state = this.props.location.state;


    return(



                       <StepFormWrapper
                            onSubmit={(info:any)=>this.SubmitRealm(info)}
                            title="Add Daily Attendance"
                            steps={4} // holds total number of steps required
                        >

                           <StepWrapper
                              position={1} // the current step position
                              title="Patient / Client" // title of the step
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
                                  placeholder="Enter first name ..."
                                  name="first_name"
                                  title="First Name"
                                  required="First Name is required"
                                  state={state}
                              />



                              <Input
                                type="text"
                                placeholder="Enter last name ..."
                                name="last_name"
                                title="Last Name"
                                required="Please enter last name"
                                state={state}
                              />


                              <Input
                                type="text"
                                placeholder="Other last name ..."
                                name="other_name"
                                title="Other Name"
                                // required="Please enter other name"
                                state={state}
                              />


                             <Input
                                type="text"
                                placeholder="Enter client card number"
                                name="client_card_number"
                                title="Patient / Client Card Number"
                                required="Please enter card Number"
                                state={state}
                              />



                             <DatePicker
                                type="date"
                                placeholder="Select registration date Y-m-d"
                                name="date_of_birth"
                                title="Date of Birth"
                                required="please select date of birth"
                                state={state}
                              />

                        </StepWrapper>



                     {/* STEP 2 */}

                       <StepWrapper
                       position={2}
                       title="Sex / Age">


                              <SelectComponent

                                  name="sex"
                                  options={["Male","Female"]}
                                  title="Sex"
                                  placeholder="Select Gender"
                                  required="Please select gender"
                                  state={state}
                              />


                              <SelectComponent
                                name="age"
                                options={["0 - 28 Days","29 Days - 11 Months","12 - 59 Months","5 - 9 Years","10 - 19 Years","20 Years and Above"]}
                                title="Age"
                                placeholder="Select Age Range"
                                required="Please select age range"
                                state={state}

                                />

                              <Input
                                type="number"
                                placeholder="Enter the exact age of client"
                                name="exact_age"
                                title="Write Exact Age"
                                required="Please enter exact age"
                                state={state}
                              />





                        </StepWrapper>



                      <StepWrapper
                      position={3}
                      title="Other Infomation">



                        <TextArea

                            name="contact_address"
                            placeholder="Enter contact address"
                            title="Contact Address"
                            required="Please enter address"
                            state={state}

                          />





                            <SelectComponent

                                  name="state_of_origin"
                                  options={NigeriaStates}
                                  title="State of Origin"
                                  placeholder="Please Select State"
                                  required="Please select state of origin"
                                  state={state}

                            />


                             <Input

                                type="text"
                                placeholder="Enter phone telephone number"
                                name="telephone_no"
                                title="Telephone No."
                                required="Please enter phone number"
                                state={state}

                              />

                              <SelectComponent


                              name="first_contact_with_facility"
                              options={["Yes","No"]}
                              title="First Contact With Facility"
                              placeholder="Select An Option"
                              required="Please select a value"
                              state={state}

                              />

                            <SelectComponent

                                name="reference_in"
                                options={["Yes","No"]}
                                title="Reference In"
                                placeholder="Select An Option"
                                required="Please select a value"
                                state={state}

                            />







                          </StepWrapper>





                          <StepWrapper

                              position={4}
                              title="Infomation on Next of Kin">

                             <Input

                                type="text"
                                placeholder="Enter next of kin name"
                                name="next_of_kin_name"
                                title="Name"
                                required="Please enter name"
                                state={state}

                              />

                            <SelectComponent

                                  name="kin_relationship_with_client"
                                  options={["Mother","Father","Brother","Sister","Aunty","Uncle","Cousin","Niece","Nephew"]}
                                  title="Relationship"
                                  placeholder="Please Select Relationship"
                                  required="Please select a relationship"
                                  state={state}

                            />

                           <TextArea
                              name="kin_address"
                              placeholder="Enter address"
                              title="Contact Address"
                              required="Please enter kin address"
                              state={state}

                          />





                              <Input
                                type="text"
                                placeholder="Enter phone number"
                                name="kin_phone"
                                required="Please enter phone number"
                                title="Telephone Number"
                                state={state}
                              />


                            <SelectCommunityLeader
                                state={state}
                                name="community_leader_id"
                                title="Assign Cummunity Leader"

                             />

                          </StepWrapper>


                    </StepFormWrapper>


  )
   }
}

export default DailyAttendance;
