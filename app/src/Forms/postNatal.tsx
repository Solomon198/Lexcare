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
class PostNatal extends React.Component<Props> {

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

    //  createPostNatal(formValues).then((val)=>{
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
                            title="Health Facility Family Planning Register "
                            steps={4} // holds total number of steps required
                        >

                           <StepWrapper
                              position={1} // the current step position
                              title="Patient / Client" // title of the step
                           >

                              <DatePicker
                                type="date"
                                placeholder="Please select a date"
                                name="date"
                                title="Select registration date"
                                required="Please select a date"
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
                                placeholder="Enter client card number..."
                                name="client_card_number"
                                title="Client / Patient Card Number"
                                required="Please enter client card number"
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

                              <Input
                                type="text"
                                placeholder="Record the number of times the woman has carried pregnancies to 28 weeks and above."
                                name="parity"
                                title="Parity"
                              />

                            <RadioButton name="pnc_clinic_attendance" title="Postnatal Clinic Attendance<" options={["10 - 14 years", "15 - 19 years", "20 - 24 years", "25 - 49 years", "≥ 50 years"]} onChangeText ={(pnc_clinic_attendance) => this.setState({pnc_clinic_attendance: pnc_clinic_attendance})} />   
                              
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

                            <RadioButton name="mother" title="Mother" options={["1 Day", "2 - 3 Days", "4 - 7 Days", "> 7 Days"]} onChangeText ={(mother) => this.setState({mother: mother})} />

                            <RadioButton name="newborn" title="Newborn" options={["1 Day", "2 - 3 Days", "4 - 7 Days", "> 7 Days"]} onChangeText ={(newborn) => this.setState({newborn: newborn})} />
                            
                            <RadioButton name="sex_of_child" title="Sex of Child" options={["Male", "Female"]} onChangeText ={(sex_of_child) => this.setState({sex_of_child: sex_of_child})} />

                            <p>Checkbox for maternal care here.</p>

                            <p>Checkbox for services here.</p>

                        </StepWrapper>



                        <StepWrapper
                        position={3}
                        title="Newborn Care">

                            <p>Checkbox for Neonatal Complications here.</p>

                            <RadioButton name="kmc" title="KMC" options={["A", "DS"]} onChangeText ={(kmc) => this.setState({kmc: kmc})} />

                        </StepWrapper>



                          <StepWrapper
                          position={4}
                          title="">  

                            <RadioButton name="outcome_of_visit" title="Outcome of Visit (for mother and newborn)" options={["NT", "T", "A", "RO"]} onChangeText ={(outcome_of_visit) => this.setState({outcome_of_visit: outcome_of_visit})} />

                            <TextArea

                                name="ro_reason"
                                placeholder="Please state reason for referral"
                                title="Reason for Referral"
                            />

                            <RadioButton name="transportation_out" title="Transportation Out" options={["Ambulance", "Others"]} onChangeText ={(transportation_out) => this.setState({transportation_out: transportation_out})} />   

                          </StepWrapper>


                    </StepFormWrapper>


  )
   }
}

export default PostNatal;
