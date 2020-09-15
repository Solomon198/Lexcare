import React from 'react';
import Input from '../components/input'
import DatePicker from '../components/datePicker';
import SelectComponent from '../components/select'
import TextArea from '../components/textArea';
import CustomDatePicker from '../components/customDatePicker';
import StepWrapper from '../components/stepWrapper'
import StepFormWrapper from '../components/stepFormWrapper';
import toast from 'toasted-notes'
import 'toasted-notes/src/styles.css';
import {Formik} from 'formik'
import {createDailyAttendance} from '../../realm/queries/writeQueries';
import { CheckCurrentUser, LoginRealm } from '../../realm/queries/sync';
import RadioButton from '../components/radioButtons'
import CheckBox from '../components/checkBox'




type Props = {
  history: any
}
class  LabourAndDelivery extends React.Component<Props> {

   state = {

          days:[],
          months:[],
          years:[],
          states:[
            "Abia",
            "Adamawa",
            "Akwa Ibom",
            "Anambra",
            "Bauchi",
            "Bayelsa",
            "Benue",
            "Borno",
            "Cross River",
            "Delta",
            "Ebonyi",
            "Edo",
            "Ekiti",
            "Enugu",
            "FCT - Abuja",
            "Gombe",
            "Imo",
            "Jigawa",
            "Kaduna",
            "Kano",
            "Katsina",
            "Kebbi",
            "Kogi",
            "Kwara",
            "Lagos",
            "Nasarawa",
            "Niger",
            "Ogun",
            "Ondo",
            "Osun",
            "Oyo",
            "Plateau",
            "Rivers",
            "Sokoto",
            "Taraba",
            "Yobe",
            "Zamfara"
          ],





   }

   SubmitRealm(){
    //  let formValues = Object.assign({},this.state.formValue);
    //  formValues['client_name'] = this.state.firstName + " " + this.state.lastName;
    //  formValues["date_of_birth"]  = new Date(this.state.year + "/"+this.state.month+"/"+this.state.day);
    //  formValues['health_facility_id'] = '1';
    //  formValues.date = [formValues.date] ;

    //  createLabourAndDelivery(formValues).then((val)=>{
    //        console.log(val)
    //        console.log("write successfully");
    //        console.log("from query = "+ val);
    //        this.props.history.push("/daily-attendance");
    //        window.scrollTo(0, 0)
    //      }).catch((err)=>{
    //        console.log(err)
    //      })
   }


   setFormValue(fieldName:string,value:any){
      // let formValues:any = this.state.formValue;
      // formValues[fieldName] = value;
      // this.setState({formValue:formValues});
   }


   componentDidMount(){

      // CheckCurrentUser().then((val)=>{
      //     console.log("curent use...............")
      //     console.log(val)
      // }).catch((e)=>{
      //   console.log(e)
      // })

      // LoginRealm().then((cred)=>{
      //   console.log(cred)
      // }).catch((e)=>{
      //   console.log(e)
      // })


      //  let ask =  window.confirm("Do you want to run auth");

      //  if(ask){
      //       run().then((val)=>{
      //         console.log(val)
      //       }).catch((e)=>{
      //         console.log(e)
      //       })
      //  }

       let days = [];
       let months = [];
       let years = [];

       for(let i = 1; i <= 31; i++){
           let day = (i + '').length < 2 ? "0" + i : ""+i;
           days.push(day)
       }

       for(let i = 1; i <= 12; i++){
        let month = (i + '').length < 2 ? "0" + i : ""+i;
         months.push(month)
      }

      let thisYear = new Date().getFullYear();

      for(let i = 1970; i <= thisYear; i++){
        let year = (i + '').length < 2 ? "0" + i : ""+i;
         years.push(year)
      }

      this.setState({months:months,years:years,days:days})


   }




   setFormPosition(index:number){

       this.setState({active:index},()=>{
        window.scrollTo(0, 0)
       })


   }





   render(){
    return(



                       <StepFormWrapper
                            title="Labour & Delivery"
                            steps={6} // holds total number of steps required
                        >

                           <StepWrapper
                              position={1} // the current step position
                              title="Patient / Client" // title of the step
                           >

                              <DatePicker
                                type="date"
                                placeholder="Please select a date."
                                name="date"
                                title="Date"
                                required="please select a date"
                              />

                                <SelectComponent

                                name="client_names"
                                options={["preloaded names here..."]}
                                title="Name of Client"
                                placeholder="Search Clients"
                                required="Please select a client"
                                />

                              <Input
                                type="text"
                                placeholder="Enter card number..."
                                name="client_card_number"
                                title="Client's Card Number"
                                required="Please enter client card number."
                              />

                            <SelectComponent

                            name="age"
                            options={["0 - 28 Days", "29 days - 11 Months", "12 - 59 Months", "5 - 9 Years", "10 - 19 Years", "> 20 Years"]}
                            title="Age"
                            placeholder="Select Gender"
                            /> 

                            <Input
                                type="text"
                                placeholder="Enter the exact age of client"
                                name="exact_age"
                                title="Write Exact Age"
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
                            />

                            <SelectComponent

                            name="decision_in_care"
                            options={["<24hrs", ">24hrs"]}
                            title="Decision in Seeking Care"
                            placeholder="Please Select"
                            />

                            <SelectComponent

                            name="transportation_in"
                            options={["Vehicle / Ambulance", "Others"]}
                            title="Transportation In"
                            placeholder="Please Select"
                            />

                            <SelectComponent

                            name="parity"
                            options={["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"]}
                            title="Parity"
                            placeholder="Please Select"
                            />

                            <DatePicker
                                type="date"
                                placeholder="Select Delivery Date"
                                name="delivery_date"
                                title="Date of Delivery"
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
                            />

                            <SelectComponent

                            name="partograph_used"
                            options={["Yes", "No"]}
                            title="Partograph Used?"
                            placeholder="Please Select"
                            />
                            
                            <h5>Active Management of 3rd Stage of Labour Used</h5>

                            <SelectComponent

                            name="recieved_oxytocin"
                            options={["Yes", "No"]}
                            title="Received Oxytocin?"
                            placeholder="Please Select"
                            />

                            <SelectComponent

                            name="recieved_milsoprostol"
                            options={["Yes", "No"]}
                            title="Received Milsoprostol?"
                            placeholder="Please Select"
                            />

                            <SelectComponent

                            name="maternal_complication_seen"
                            options={["APH", "PPH", "RPC", "PL", "PET", "ET", "RU", "SEP", "OL", "Abt"]}
                            title="Maternal Complication Seen"
                            placeholder="Please Select"
                            />

                            <SelectComponent

                            name="pregnant_women_admt_eclamptic"
                            options={["Yes", "No"]}
                            title="Pregnant Woman Admitted with Eclampsia (Eclamptic Toxaemia) who recieved MgSO4"
                            placeholder="Please Select"
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
                            />     

                            <SelectComponent

                            name="alive_status"
                            options={["Admitted", "Discharged", "Referred - out", "Received post abortion care", "Transportation Out"]}
                            title="Alive Status"
                            placeholder="Please Select"
                            />  

                            <SelectComponent

                            name="transportation_out_status"
                            options={["Ambulance", "Others"]}
                            title="Transportation Out Status"
                            placeholder="Please Select"
                            />   

                            <SelectComponent

                            name="dead_status"
                            options={["MDA Conducted", "MDA not Conducted"]}
                            title="Dead Status"
                            placeholder="Please Select"
                            />     

                          </StepWrapper>

                          <StepWrapper
                          position={5}
                          title="Baby">         

                            <SelectComponent

                            name="abortion"
                            options={["IA", "SA"]}
                            title="Abortion"
                            placeholder="Please Select"
                            />     

                             <Input
                                type="text"
                                placeholder="Enter delivery time"
                                name="delivery_time"
                                title="Time of Delivery"
                              />  

                            <i>Add check box component here</i>

                            <SelectComponent

                            name="live_birth"
                            options={["<2.5kg", "≥2.5kg"]}
                            title="Live Birth"
                            placeholder="Please Select"
                            />     

                            <SelectComponent

                            name="still_birth"
                            options={["FSB", "MSB"]}
                            title="Still Birth"
                            placeholder="Please Select"
                            />     

                            <i>Add check box component here</i>
                            
                            <SelectComponent

                            name="sex_of_baby"
                            options={["Male", "Female"]}
                            title="Sex of Baby"
                            placeholder="Please Select"
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
                            />  

                            <Input
                                type="time"
                                placeholder=""
                                name="cord_clamped_at"
                                title="Time Cord Was Clamped"
                              />         

                            <i>Add check box component here</i>

                             <SelectComponent

                            name="baby_put_to_breast"
                            options={["Within 1 hour with skin-to-skin to keep warm", "After 1 hour with skin-to-skin to keep warm"]}
                            title="Baby is put to breast"
                            placeholder="Please Select"
                            />      

                            <Input
                                type="text"
                                placeholder="Enter temperature at 1 hour"
                                name="temp_at_one_hour"
                                title="Temperature at 1 Hour"
                              />   

                            <h5>Exclusive Breast Feeding</h5>      

                            <i>Add check box component here</i>

                            <SelectComponent

                            name="postpartum_fm_planning"
                            options={["Counselled", "Accepted"]}
                            title="Postpartum Family Planning"
                            placeholder="Please Select"
                            />      

                            <Input
                                type="text"
                                placeholder="Enter temperature at 1 hour"
                                name="who_took_delivery_name"
                                title="Name of Person who took delivery"
                              />   

                          </StepWrapper>


                    </StepFormWrapper>


  )
   }
}

export default LabourAndDelivery;
