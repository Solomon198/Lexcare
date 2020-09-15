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
class  PostNatal extends React.Component<Props> {

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
                            title="Child Immunization Reister "
                            steps={2} // holds total number of steps required
                        >

                           <StepWrapper
                              position={1} // the current step position
                              title="" // title of the step
                           >

                              <DatePicker
                                type="date"
                                placeholder="Select registration date"
                                name="date"
                                title="Date of Child Visit"
                                required="please select date"
                              />

                                <SelectComponent

                                name="child_name"
                                options={["preloaded names here..."]}
                                title="Child's Names"
                                placeholder="Search Clients"
                                required="Please select a client"
                                />

                              <Input
                                type="text"
                                placeholder="Enter card number..."
                                name="child_card_no"
                                title="Child's Card Number"
                                required="Please select child card number."
                              />

                            <SelectComponent

                            name="sex"
                            options={["Male", "Female"]}
                            title="Sex (M/F)"
                            placeholder="Select Gender"
                            />
                             
                        </StepWrapper>



                     {/* STEP 2 */}

                       <StepWrapper
                       position={2}
                       title="">

                            <TextArea

                            name="followup_address"
                            placeholder="Enter Follow Up Address"
                            title="Follow Up Address"
                            required="Please enter the childs follow up address."
                            />

                              <Input
                                type="text"
                                placeholder="Enter phone no."
                                name="phone"
                                title="Phone No."
                              />
                              
                              <DatePicker
                              type="date"
                              placeholder="Enter child's date of birth"
                              name="dob"
                              title="Date of Birth(DD/MM/YY)"
                            />

                            <TextArea

                            name="comment"
                            placeholder="Enter comments"
                            title="Comments"
                            />

                        </StepWrapper>

                    </StepFormWrapper>


  )
   }
}

export default PostNatal;
