import React from 'react';
import Input from '../components/input'
import DatePicker from '../components/datePicker';
import SelectComponent from '../components/select'

import StepWrapper from '../components/stepWrapper'
import StepFormWrapper from '../components/stepFormWrapper';
import SelectClient from '../components/selectClient';
import {createLabourAndDelivery} from '../../realm/queries/writeQueries'
import schemas from '../../realm/schemas';




type Props = {
  history: any,
  location:any
}
class  LabourAndDelivery extends React.Component<Props> {

   state = {

          days:[],
          months:[],
          years:[],






   }

   async createLabourAndDeliveryRecord(info:any){
    const state = this.props.location.state;
    const isUpdate = state ? true : false;
    if(state){
      info._id = state._id
    }
    createLabourAndDelivery(info,isUpdate).then((val)=>{

    if(val == "success") this.props.history.push("/labour-and-delivery");


    }).catch(e=>{

        console.log(e);

    })

    }


    componentDidMount(){

      window.scrollTo(0, 0)

    }

   render(){

    const state = this.props.location.state;

    return(



                       <StepFormWrapper
                            onSubmit={(record)=>this.createLabourAndDeliveryRecord(record)}
                            title="Labour & Delivery"
                            steps={6} // holds total number of steps required
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
                                    date_title="Date"
                                    date_required="please select a date"
                                    intervention={schemas.LabourAndDelivery.name}
                                    state={state}
                                />




                            <SelectComponent

                            name="age"
                            options={["0 - 28 Days", "29 days - 11 Months", "12 - 59 Months", "5 - 9 Years", "10 - 19 Years", "> 20 Years"]}
                            title="Age"
                            placeholder="Select Gender"
                            state={state}

                            />

                            <Input
                                type="number"
                                placeholder="Enter the exact age of client"
                                name="exact_age"
                                title="Write Exact Age"
                                state={state}

                              />

                        </StepWrapper>



                     {/* STEP 2 */}

                       <StepWrapper
                       position={2}
                       title="">

                            <SelectComponent

                            name="client_type"
                            options={["Booked", "Unbooked"]}
                            title="Types of Client"
                            placeholder="Select Type of Client"
                            required="Please select type of client"
                            state={state}

                            />

                            <SelectComponent

                            name="decision_in_care"
                            options={["<24hrs", ">24hrs"]}
                            title="Decision in Seeking Care"
                            placeholder="Please Select"
                            state={state}

                            />

                            <SelectComponent

                            name="transportation_in"
                            options={["Vehicle / Ambulance", "Others"]}
                            title="Transportation In"
                            placeholder="Please Select"
                            state={state}

                            />

                            <SelectComponent
                            type="number"
                            name="parity"
                            options={["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"]}
                            title="Parity"
                            placeholder="Please Select"
                            state={state}
                            />

                            <DatePicker
                                type="date"
                                placeholder="Select Delivery Date"
                                name="delivery_date"
                                title="Date of Delivery"
                                required="please enter delivery date"
                                state={state}
                              />

                        </StepWrapper>



                        <StepWrapper
                        position={3}
                        title="">

                            <SelectComponent

                            name="delivery_mode"
                            options={["SVD", "CS", "AD"]}
                            title="Mode of Delivery"
                            placeholder="Please Select"
                            state={state}
                            />

                            <SelectComponent

                            name="partograph_used"
                            options={["Yes", "No"]}
                            title="Partograph Used?"
                            placeholder="Please Select"
                            state={state}
                            />

                            <h5>Active Management of 3rd Stage of Labour Used</h5>

                            <SelectComponent

                            name="recieved_oxytocin"
                            options={["Yes", "No"]}
                            title="Received Oxytocin?"
                            placeholder="Please Select"
                            state={state}
                            />

                            <SelectComponent

                            name="recieved_milsoprostol"
                            options={["Yes", "No"]}
                            title="Received Milsoprostol?"
                            placeholder="Please Select"
                            state={state}
                            />

                            <SelectComponent

                            name="maternal_complication_seen"
                            options={["APH", "PPH", "RPC", "PL", "PET", "ET", "RU", "SEP", "OL", "Abt"]}
                            title="Maternal Complication Seen"
                            placeholder="Please Select"
                            state={state}
                            />

                            <SelectComponent

                            name="pregnant_women_admt_eclamptic"
                            options={["Yes", "No"]}
                            title="Pregnant Woman Admitted with Eclampsia (Eclamptic Toxaemia) who recieved MgSO4"
                            placeholder="Please Select"
                            state={state}

                            />

                        </StepWrapper>



                          <StepWrapper
                          position={4}
                          title="Pregnancy Outcome">

                            <SelectComponent

                            name="mother_status"
                            options={["Alive", "Dead"]}
                            title="Mother)"
                            placeholder="Please Select"
                            state={state}
                            />

                            <SelectComponent

                            name="alive_status"
                            options={["Admitted", "Discharged", "Referred - out", "Received post abortion care", "Transportation Out"]}
                            title="Alive Status"
                            placeholder="Please Select"
                            state={state}
                            />

                            <SelectComponent

                            name="transportation_out_status"
                            options={["Ambulance", "Others"]}
                            title="Transportation Out Status"
                            placeholder="Please Select"
                            state={state}
                            />

                            <SelectComponent

                            name="dead_status"
                            options={["MDA Conducted", "MDA not Conducted"]}
                            title="Dead Status"
                            placeholder="Please Select"
                            state={state}
                            />

                          </StepWrapper>

                          <StepWrapper
                          position={5}
                          title="Baby">

                            <SelectComponent

                            name="abortion"
                            options={["IA", "SA"]}
                            title="Abortion"
                            state={state}
                            placeholder="Please Select"
                            />

                             <Input
                                type="text"
                                placeholder="Enter delivery time"
                                name="delivery_time"
                                title="Time of Delivery"
                                state={state}
                              />

                            <i>Add check box component here</i>

                            <SelectComponent

                            name="live_birth"
                            options={["<2.5kg", "≥2.5kg"]}
                            title="Live Birth"
                            placeholder="Please Select"
                            state={state}
                            />

                            <SelectComponent

                            name="still_birth"
                            options={["FSB", "MSB"]}
                            title="Still Birth"
                            placeholder="Please Select"
                            state={state}
                            />

                            <i>Add check box component here</i>

                            <SelectComponent

                            name="sex_of_baby"
                            options={["Male", "Female"]}
                            title="Sex of Baby"
                            placeholder="Please Select"
                            state={state}
                            />

                          </StepWrapper>

                          <StepWrapper
                          position={6}
                          title="Immediate Newborn Care Provided">

                            <SelectComponent

                            name="child_delivery_by"
                            options={["Doctor", "Midwife or Nurse", "MLSS-trained CHEW", "Others"]}
                            title="Who took delivery of child?"
                            placeholder="Please Select"
                            state={state}
                            />

                            <Input
                                type="time"
                                placeholder=""
                                name="cord_clamped_at"
                                title="Time Cord Was Clamped"
                                state={state}
                              />

                            <i>Add check box component here</i>

                             <SelectComponent

                            name="baby_put_to_breast"
                            options={["Within 1 hour with skin-to-skin to keep warm", "After 1 hour with skin-to-skin to keep warm"]}
                            title="Baby is put to breast"
                            placeholder="Please Select"
                            state={state}
                            />

                            <Input
                                type="text"
                                placeholder="Enter temperature at 1 hour"
                                name="temp_at_one_hour"
                                title="Temperature at 1 Hour"
                                state={state}
                              />

                            <h5>Exclusive Breast Feeding</h5>

                            <i>Add check box component here</i>

                            <SelectComponent

                            name="postpartum_fm_planning"
                            options={["Counselled", "Accepted"]}
                            title="Postpartum Family Planning"
                            placeholder="Please Select"
                            state={state}
                            />

                            <Input
                                type="text"
                                placeholder="Enter temperature at 1 hour"
                                name="who_took_delivery_name"
                                title="Name of Person who took delivery"
                                state={state}
                              />

                          </StepWrapper>


                    </StepFormWrapper>


  )
   }
}

export default LabourAndDelivery;
