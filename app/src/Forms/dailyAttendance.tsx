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

import {createDailyAttendance} from '../../realm/queries/writeQueries';
import { CheckCurrentUser, LoginRealm } from '../../realm/queries/sync';





type Props = {
  history: any
}
class  DailyAttendance extends React.Component<Props> {

   state = {

          active:1,
          steps:4,
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

          formValue: {
            health_facility_id:"",
            date:"",
            client_name : "",
            client_card_number:"",
            sex:"",
            age:"",
            exact_age:"",
            state_of_origin:"",
            contact_address:"",
            telephone_no:"",
            first_contact_with_facility:"",
            reference_in:"",
            next_of_kin_name:"",
            kin_relationship_with_client:"",
            kin_address:"",
            kin_phone:"",

          },

          firstName :"",
          lastName : "",
          day:"",
          month:"",
          year:""

   }

   SubmitRealm(){
     let formValues = Object.assign({},this.state.formValue);
     formValues['client_name'] = this.state.firstName + " " + this.state.lastName;
     formValues["date_of_birth"]  = new Date(this.state.year + "/"+this.state.month+"/"+this.state.day);
     formValues['health_facility_id'] = '1';
     formValues.date = [formValues.date] ;

     createDailyAttendance(formValues).then((val)=>{
           console.log(val)
           console.log("write successfully");
           console.log("from query = "+ val);
           this.props.history.push("/daily-attendance");
           window.scrollTo(0, 0)
         }).catch((err)=>{
           console.log(err)
         })
   }


   setFormValue(fieldName:string,value:any){
      let formValues:any = this.state.formValue;
      formValues[fieldName] = value;
      this.setState({formValue:formValues});
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


   goNext(){

       this.setState({active:++this.state.active},()=>{
        window.scrollTo(0, 0)
       });


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
                            jumpToIndex={(index)=>this.setFormPosition(index)}//jumps to a step automatically
                            active={this.state.active} // pass the active step so that
                            steps={this.state.steps } // holds total number of steps required
                            >

                           <StepWrapper
                           active={this.state.active} // pass the active step
                           position={1} // the current step position
                           title="Patient / Client" // title of the step
                           >

                              <DatePicker
                                onChangeText={(date)=>this.setFormValue('date',new Date(date))}
                                type="date"
                                placeholder="Select registration date Y-m-d"
                                name="reg_date"
                                title="Date"
                              />

                              <Input
                                onChangeText={(text)=>this.setState({firstName:text})}
                                type="text"
                                placeholder="Enter first name ..."
                                name="first_name"
                                title="First Name"
                              />



                              <Input
                                onChangeText={(text)=>this.setState({lastName:text})}
                                type="text"
                                placeholder="Enter last name ..."
                                name="last_name"
                                title="Last Name"
                              />


                              <Input
                                onChangeText={(text)=>this.setState({otherName:text})}
                                type="text"
                                placeholder="Other last name ..."
                                name="other_name"
                                title="Other Name"
                              />


                             <Input
                                onChangeText={(text)=> this.setFormValue("client_card_number",text)}
                                type="text"
                                placeholder="Enter client card number"
                                name="client_card_number"
                                title="Patient / Client Card Number"
                              />




                              <CustomDatePicker

                                  days={this.state.days}
                                  months={this.state.months}
                                  years={this.state.years}
                                  onChangeDay={(text)=>this.setState({day:text})}
                                  onChangeMonth={(text)=>this.setState({month:text})}
                                  onChangeYear={(text)=>this.setState({year:text})}
                                  day="day"
                                  name="dob"
                                  month="month"
                                  year="year"
                                  title="Date of Birth"

                              />

                          <button onClick={()=>this.goNext()} className="btn btn-primary nextBtn btn-lg pull-right" type="button">Next</button>

                        </StepWrapper>



                     {/* STEP 2 */}

                       <StepWrapper
                       active={this.state.active}
                       position={2}
                       title="Sex / Age">


                              <SelectComponent

                                  name="sex"
                                  onChangeText={(text)=>this.setFormValue("sex",text)}
                                  options={["Male","Female"]}
                                  title="Sex"
                                  placeholder="Select Gender"

                              />


                              <SelectComponent
                                onChangeText={(text)=>this.setFormValue("age",parseInt(text))}
                                name="age"
                                options={["0 - 28 Days","29 Days - 11 Months","12 - 59 Months","5 - 9 Years","10 - 19 Years","20 Years and Above"]}
                                title="Age"
                                placeholder="Select Age Range"

                                />

                              <Input
                                onChangeText={(text)=>this.setFormValue("exact_age",parseInt(text))}
                                type="text"
                                placeholder="Enter the exact age of client"
                                name="exact_age"
                                title="Write Exact Age"
                              />




                          <button onClick={()=>this.goNext()} className="btn btn-primary nextBtn btn-lg pull-right" type="button">Next</button>

                        </StepWrapper>



                      <StepWrapper
                      active={this.state.active}
                      position={3}
                      title="Other Infomation">



                        <TextArea

                            onChangeText={(text)=>this.setFormValue("contact_address",text)}
                            name="contact_address"
                            placeholder="Enter contact address"
                            id="contact_address"
                            title="Contact Address"

                          />





                            <SelectComponent
                                  onChangeText={(text)=>this.setFormValue("state_of_origin",text)}
                                  name="state_of_origin"
                                  options={this.state.states}
                                  title="State of Origin"
                                  placeholder="Please Select State"

                            />


                             <Input
                                onChangeText={(text)=>this.setFormValue("telephone_no",text)}
                                type="text"
                                placeholder="Enter phone telephone number"
                                name="telephone_no"
                                title="Telephone No."
                              />

                              <SelectComponent
                              onChangeText={(text)=>
                                {
                                  if(text == "Yes"){
                                    this.setFormValue("first_contact_with_facility",true);
                                  }else{
                                    this.setFormValue("first_contact_with_facility",false);
                                  }
                                }
                               }


                              name="first_contact_with_facility"
                              options={["Yes","No"]}
                              title="First Contact With Facility"
                              placeholder="Select An Option"

                              />

                            <SelectComponent
                                onChangeText={(text)=>this.setFormValue("reference_in",text)}
                                name="reference_in"
                                options={["Yes","No"]}
                                title="Reference In"
                                placeholder="Select An Option"

                            />





                            <button onClick={()=>this.goNext()} className="btn btn-primary nextBtn btn-lg pull-right" type="button">Next</button>

                          </StepWrapper>





                          <StepWrapper
                          active={this.state.active}
                          position={4}
                          title="Infomation on Next of Kin">

                             <Input
                                onChangeText={(text)=>this.setFormValue("next_of_kin_name",text)}
                                type="text"
                                placeholder="Enter next of kin name"
                                name="next_of_kin_name"
                                title="Name"
                              />

                            <SelectComponent
                                  onChangeText={(text)=>this.setFormValue("kin_relationship_with_client",text)}
                                  name="kin_relationship_with_client"
                                  options={["Mother","Father","Brother","Sister","Aunty","Uncle","Cousin","Niece","Nephew"]}
                                  title="Relationship"
                                  placeholder="Please Select Relationship"

                            />

                           <TextArea
                              onChangeText={(text)=>this.setFormValue("kin_address",text)}
                              name="kin_address"
                              placeholder="Enter address"
                              id="kin_address"
                              title="Contact Address"

                          />





                              <Input
                                onChangeText={(text)=>this.setFormValue("kin_phone",text)}
                                type="text"
                                placeholder="Enter phone number"
                                name="kin_phone"
                                title="Telephone Number"
                              />

                            <SelectComponent
                                    onChangeText={(text)=>this.setState({community_leader_id:text})}
                                    name="community_leader_id"
                                    options={["Leader One"]}
                                    title="Assign Cummunity Leader"
                                    placeholder="Please Select"

                            />


                          <button type="button" onClick={()=>this.SubmitRealm()} className="btn btn-primary btn-lg ">Submit</button>
                          </StepWrapper>


                    </StepFormWrapper>


  )
   }
}

export default DailyAttendance;
