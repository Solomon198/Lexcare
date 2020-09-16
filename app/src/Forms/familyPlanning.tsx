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
class  FamilyPlanning extends React.Component<Props> {

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

    //  createFamilyPlanning(formValues).then((val)=>{
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
                            steps={5} // holds total number of steps required
                        >

                           <StepWrapper
                              position={1} // the current step position
                              title="" // title of the step
                           >

                              <DatePicker
                                type="date"
                                placeholder="Select date Y-m-d"
                                name="date"
                                title="Client Date of Visit"
                                required="please select date"
                              />

                                <SelectComponent

                                name="client_name"
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
                              />

                            <DatePicker
                                type="date"
                                placeholder="Enter client's date of birth"
                                name="dob"
                                title="Date of Birth(DD/MM/YY)"
                              />
                              
                            <TextArea

                                name="followup_address"
                                placeholder="Enter Follow Up Address"
                                title="Follow Up Address"
                                required="Please enter follow up address"
                            />

                            <Input
                                type="text"
                                placeholder="Enter phone no."
                                name="phone_number"
                                title="Phone No."
                              />

                            <SelectComponent

                            name="sex"
                            options={["Male", "Female"]}
                            title="Sex"
                            placeholder="Select Gender"
                            />

                            <RadioButton name="age" title="Age" options={["10 - 14 years", "15 - 19 years", "20 - 24 years", "25 - 49 years", "≥ 50 years"]} onChangeText ={(Age) => this.setState({Age: Age})} />

                            <Input
                                type="text"
                                placeholder="Enter phone weight"
                                name="weight"
                                title="Weight (Kg)"
                              />

                            <Input
                                type="text"
                                placeholder="Enter blood pressure"
                                name="blood_pressure"
                                title="Blood Pressure"
                              />

                             
                        </StepWrapper>



                     {/* STEP 2 */}

                       <StepWrapper
                       position={2}
                       title="">

                              <Input
                                type="text"
                                placeholder="Enter Source of Referral"
                                name="referral_source"
                                title="Source of Referral"
                              />

                            <Input
                                type="text"
                                placeholder="Enter parity"
                                name="parity"
                                title="Parity (female)"
                              />

                            <RadioButton name="counselled_fp" title="Counselled FP" options={["Yes", "No"]} onChangeText ={(counselled_fp) => this.setState({counselled_fp: counselled_fp})} />

                            <RadioButton name="counselled_ppfp" title="Counselled on PPFP" options={["Yes", "No"]} onChangeText ={(counselled_ppfp) => this.setState({counselled_ppfp: counselled_ppfp})} />

                            <RadioButton name="modern_fp" title="First Time Modern FP User" options={["Yes", "No"]} onChangeText ={(modern_fp) => this.setState({modern_fp: modern_fp})} />

                            <RadioButton name="contraception" title="Emergency Contraception" options={["Yes", "No"]} onChangeText ={(contraception) => this.setState({contraception: contraception})} />

                            <RadioButton name="fp_client_type" title="Type of FP Client" options={["Routine", "PPFP", "PAC"]} onChangeText ={(fp_client_type) => this.setState({fp_client_type: fp_client_type})} />

                        </StepWrapper>



                        <StepWrapper
                        position={3}
                        title="Oral Pills">

                            <Input
                                type="text"
                                placeholder="Enter name of oral pill"
                                name="oral_pill_name"
                                title="Name of Pill"
                              />

                            <Input
                                type="text"
                                placeholder="Enter name of oral pill"
                                name="oral_pill_name"
                                title="Name of Pill"
                              />

                            <RadioButton name="new_acceptor" title="Type of FP Client" options={["Yes", "No"]} onChangeText ={(new_acceptor) => this.setState({new_acceptor: new_acceptor})} />

                            <RadioButton name="revisit" title="RV (Revisit)" options={["Yes", "No"]} onChangeText ={(revisit) => this.setState({revisit: revisit})} />

                            <Input
                                type="text"
                                placeholder="Please enter number of cycles"
                                name="cycles_quantity"
                                title="Qty (Number of Cycles)"
                              />

                              <h5>INJECTABLES</h5>

                              <Input
                                type="text"
                                placeholder="Enter name of injectable"
                                name="injectable_name"
                                title="Name of Injectables"
                              />

                            <Input
                                type="text"
                                placeholder="Enter name of injectable"
                                name="self_injectibles_name"
                                title="Name of InjectablesSelf Injection (For DMPA-SC only) (Qty in Vials)"
                              />

                            <RadioButton name="injectable_na" title="NA (New Acceptor)" options={["Yes", "No"]} onChangeText ={(injectable_na) => this.setState({injectable_na: injectable_na})} />

                            <RadioButton name="injectable_rv" title="RV (Revisit)" options={["Yes", "No"]} onChangeText ={(injectable_rv) => this.setState({injectable_rv: injectable_rv})} />

                        </StepWrapper>



                          <StepWrapper
                          position={4}
                          title="IUDS">

                             <Input
                                type="text"
                                placeholder="Please enter type of IUD"
                                name="type_of_iud"
                                title="Type of IUD (write: H or C)"
                              />           

                            <SelectComponent

                            name="iud_in_na"
                            options={["Yes", "No"]}
                            title="IUD NA (New Acceptor)"
                            placeholder="Select an Option"
                            />     

                            <SelectComponent

                            name="iud_in_rv"
                            options={["Yes", "No"]}
                            title="IUD RV (Revisit)"
                            placeholder="Select an Option"
                            />     

                            <Input
                                type="text"
                                placeholder="Please enter IUD OUT value"
                                name="iud_out"
                                title="OUT"
                              />         

                            <RadioButton name="condom_type" title="Type of Condom" options={["Male", "Female"]} onChangeText ={(condom_type) => this.setState({condom_type: condom_type})} />


                            <RadioButton name="condom_na" title="Condoms NA (New Acceptor)" options={["Yes", "No"]} onChangeText ={(condom_na) => this.setState({condom_na: condom_na})} />

                            <RadioButton name="condom_rv" title="Condom RV (Revisit)" options={["Yes", "No"]} onChangeText ={(condom_rv) => this.setState({condom_rv: condom_rv})} />

                            <Input
                                type="text"
                                placeholder="Quanltity of Condoms"
                                name="condom_qty"
                                title="Qty (Number of Pieces)"
                              />       

                          </StepWrapper>

                          <StepWrapper
                          position={5}
                          title="">

                            <Input
                                type="text"
                                placeholder="Type of Implants (write: IMP or JD)"
                                name="implants_type"
                                title="Type of Implants"
                              />    

                            <RadioButton name="implants_in" title="Condom RV (Revisit)" options={["NA", "RV"]} onChangeText ={(implants_in) => this.setState({implants_in: implants_in})} />      

                             <RadioButton name="implants_out" title="Implants (OUT)" options={["Yes", "No"]} onChangeText ={(implants_out) => this.setState({implants_out: implants_out})} />       

                             <SelectComponent

                            name="voluntary_sterilization"
                            options={["M", "F"]}
                            title="Voluntary Sterilization"
                            placeholder="voluntary_sterilization"
                            />      

                            <h5>Natural Methods</h5>      

                            {/* create checkboxes here... */}

                          </StepWrapper>


                    </StepFormWrapper>


  )
   }
}

export default FamilyPlanning;
