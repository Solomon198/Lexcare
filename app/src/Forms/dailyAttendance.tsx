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





type Props = {
  history: any
}
class  DailyAttendance extends React.Component<Props> {

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

    //  createDailyAttendance(formValues).then((val)=>{
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
                                name="reg_date"
                                title="Date"
                                required="please select date"
                              />

                              <Input
                                type="text"
                                placeholder="Enter first name ..."
                                name="first_name"
                                title="First Name"
                                required="First Name is required"
                              />



                              <Input
                                type="text"
                                placeholder="Enter last name ..."
                                name="last_name"
                                title="Last Name"
                                required="Please enter last name"
                              />


                              <Input
                                type="text"
                                placeholder="Other last name ..."
                                name="other_name"
                                title="Other Name"
                                required="Please enter other name"
                              />


                             <Input
                                type="text"
                                placeholder="Enter client card number"
                                name="client_card_number"
                                title="Patient / Client Card Number"
                                required="Please enter card Number"
                              />



                             <DatePicker
                                type="date"
                                placeholder="Select registration date Y-m-d"
                                name="dob"
                                title="Date of Birth"
                                required="please select date of birth"
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
                              />


                              <SelectComponent
                                name="age"
                                options={["0 - 28 Days","29 Days - 11 Months","12 - 59 Months","5 - 9 Years","10 - 19 Years","20 Years and Above"]}
                                title="Age"
                                placeholder="Select Age Range"
                                required="Please select age range"

                                />

                              <Input
                                type="text"
                                placeholder="Enter the exact age of client"
                                name="exact_age"
                                title="Write Exact Age"
                                required="Please enter exact age"
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

                          />





                            <SelectComponent

                                  name="state_of_origin"
                                  options={this.state.states}
                                  title="State of Origin"
                                  placeholder="Please Select State"
                                  required="Please select state of origin"

                            />


                             <Input
                                type="text"
                                placeholder="Enter phone telephone number"
                                name="telephone_no"
                                title="Telephone No."
                                required="Please enter phone number"
                              />

                              <SelectComponent


                              name="first_contact_with_facility"
                              options={["Yes","No"]}
                              title="First Contact With Facility"
                              placeholder="Select An Option"
                              required="Please select a value"

                              />

                            <SelectComponent

                                name="reference_in"
                                options={["Yes","No"]}
                                title="Reference In"
                                placeholder="Select An Option"
                                required="Please select a value"

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
                              />

                            <SelectComponent
                                  name="kin_relationship_with_client"
                                  options={["Mother","Father","Brother","Sister","Aunty","Uncle","Cousin","Niece","Nephew"]}
                                  title="Relationship"
                                  placeholder="Please Select Relationship"
                                  required="Please select a relationship"

                            />

                           <TextArea
                              name="kin_address"
                              placeholder="Enter address"
                              title="Contact Address"
                              required="Please enter kin address"

                          />





                              <Input
                                type="text"
                                placeholder="Enter phone number"
                                name="kin_phone"
                                required="Please enter phone number"
                                title="Telephone Number"
                              />

                            <SelectComponent
                                    name="community_leader_id"
                                    options={["Leader One"]}
                                    title="Assign Cummunity Leader"
                                    placeholder="Please Select"
                                    required="Please select commnunity leader"

                            />

                          </StepWrapper>


                    </StepFormWrapper>


  )
   }
}

export default DailyAttendance;
