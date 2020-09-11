import React from 'react';
import Input from '../components/input'
import DatePicker from '../components/datePicker';
import SelectComponent from '../components/select'
import TextArea from '../components/textArea';
import CustomDatePicker from '../components/customDatePicker';
import StepWrapper from '../components/stepWrapper'
import StepFormWrapper from '../components/stepFormWrapper';
import RadioButton from '../components/radioButtons'

type Props = {
    history: any
}

class Antenatal extends React.Component<Props> {

    state = {

        active:1,
        steps:6,

        days:[],
        months:[],
        years:[],

        formValue: {
          mothers_card_no:"",
          
        },
        
        day:"",
        month:"",
        year:""

    }

    setFormValue(fieldName:string,value:any){
        let formValues:any = this.state.formValue;
        formValues[fieldName] = value;
        this.setState({formValue:formValues});
     }

    componentDidMount(){     

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
 
       this.setState({months:months,years:years,days:days}); 
 
    }
 
 
    goNext(){
 
        this.setState({active:++this.state.active},()=>{
         window.scrollTo(0, 0)
        }); 
 
    }
 
    setFormPosition(index:number){
 
        this.setState({active:index},()=>{
         window.scrollTo(0, 0)
        });
 
    }

    render() {
        return (
            <StepFormWrapper
            title="Ante Natal Clinic Attendance Register"
            jumpToIndex={(index)=>this.setFormPosition(index)}//jumps to a step automatically
            active={this.state.active} // pass the active step so that
            steps={this.state.steps } // holds total number of steps required
            >

                <StepWrapper
                active={this.state.active} // pass the active step
                position={1} // the current step position
                title="Client's Basic Details" // title of the step
                >

                    {/* Use a date picker here */}
                    <Input
                    onChangeText={(text)=> this.setFormValue("date",text)}
                    type="text"
                    placeholder="Select registration date..."
                    name="date"
                    title="Client Date of Visit"
                    />

                    {/* This select is supposed to be autopopulated based on the date selected above. */}
                    <SelectComponent

                    name="client_names"
                    onChangeText={(text)=>this.setFormValue("client_names",text)}
                    options={["Client 1","Client 2"]}
                    title="Name of Client"
                    placeholder=""

                    />

                    <Input
                    onChangeText={(text)=> this.setFormValue("mothers_card_no",text)}
                    type="text"
                    placeholder="Enter client's card number"
                    name="mothers_card_no"
                    title="Client's Card Number"
                    />

                    {/* Use a date picker here */}
                    <Input
                    onChangeText={(text)=> this.setFormValue("dob",text)}
                    type="text"
                    placeholder="Select date of birth"
                    name="dob"
                    title="Date of Birth(DD/MM/YY)"
                    />

                    <RadioButton name="age" title="Age Range" options={["10 - 14 years", "15 - 19 years", "20 - 24 years", "25 - 49 years", "≥ 50 years"]} onChangeText ={(age) => this.setState({age: age})} />
                    
                    <Input
                    onChangeText={(text)=> this.setFormValue("actual_age",text)}
                    type="text"
                    placeholder="Enter actual age"
                    name="actual_age"
                    title="Actual Age"
                    />

                    <button onClick={()=>this.goNext()} className="btn btn-primary nextBtn btn-lg pull-right" type="button">Next</button>

                </StepWrapper>
                
                <StepWrapper
                active={this.state.active} // pass the active step
                position={2} // the current step position
                title="Pregnancy" // title of the step
                >

                    <SelectComponent

                    name="parity"
                    onChangeText={(text)=>this.setFormValue("parity",text)}
                    options={["1","2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"]}
                    title="Parity"
                    placeholder="Select Parity"

                    />

                    <RadioButton name="attendance_type" title="ANC Attendance" options={["N", "R"]} onChangeText ={(attendance_type) => this.setState({attendance_type: attendance_type})} />

                    <Input
                    onChangeText={(text)=>this.setFormValue("pregnancy_age",parseInt(text))}
                    type="text"
                    placeholder="Enter age of pregnancy (in weeks)"
                    name="pregnancy_age"
                    title="Age of Preganancy (in weeks)"
                    />

                    <Input
                    onChangeText={(text)=>this.setFormValue("weight",parseInt(text))}
                    type="text"
                    placeholder="Enter weight in kg"
                    name="weight"
                    title="Weight (in kg)"
                    />

                    <Input
                    onChangeText={(text)=>this.setFormValue("blood_pressure",parseInt(text))}
                    type="text"
                    placeholder="Format xxx/xxx"
                    name="blood_pressure"
                    title="Blood Pressure"
                    />

                    <Input
                    onChangeText={(text)=>this.setFormValue("visits",parseInt(text))}
                    type="text"
                    placeholder="Enter client number of visits"
                    name="visits"
                    title="No. of Antenatal clinic Visits to date"
                    />

                    <button onClick={()=>this.goNext()} className="btn btn-primary nextBtn btn-lg pull-right" type="button">Next</button>

                </StepWrapper>

                <StepWrapper
                active={this.state.active} // pass the active step
                position={3} // the current step position
                title="Counselling" // title of the step
                >

                    <RadioButton name="hiv_testing" title="HIV Testing Services" options={["Yes", "No"]} onChangeText ={(hiv_testing) => this.setState({hiv_testing: hiv_testing})} />

                    <RadioButton name="fgm" title="Female Genital Mutilation (FGM)" options={["Yes", "No"]} onChangeText ={(fgm) => this.setState({fgm: fgm})} />

                    <RadioButton name="family_planning" title="Family Planning" options={["Yes", "No"]} onChangeText ={(family_planning) => this.setState({family_planning: family_planning})} />

                    <RadioButton name="maternal_nutrition" title="Maternal Nutrition" options={["Yes", "No"]} onChangeText ={(maternal_nutrition) => this.setState({maternal_nutrition: maternal_nutrition})} />

                    <RadioButton name="early_breast_feeding" title="Early Intiation of Breastfeeding" options={["Yes", "No"]} onChangeText ={(early_breast_feeding) => this.setState({early_breast_feeding: early_breast_feeding})} />

                    <RadioButton name="exclusive_breast_feeding" title="Exclusive Breastfeeding" options={["Yes", "No"]} onChangeText ={(exclusive_breast_feeding) => this.setState({exclusive_breast_feeding: exclusive_breast_feeding})} />

                    <button onClick={()=>this.goNext()} className="btn btn-primary nextBtn btn-lg pull-right" type="button">Next</button>


                </StepWrapper>

                <StepWrapper
                active={this.state.active} // pass the active step
                position={4} // the current step position
                title="" // title of the step
                >

                    <RadioButton name="syphilis_testing" title="Syphilis Testing" options={["Not Done", "Positive", "Negative"]} onChangeText ={(syphilis_testing) => this.setState({syphilis_testing: syphilis_testing})} />

                    <RadioButton name="syphilis_treated" title="Syphilis Treated" options={["Yes", "No", "Referred"]} onChangeText ={(syphilis_treated) => this.setState({syphilis_treated: syphilis_treated})} />

                    <RadioButton name="hepatitis_b_testing" title="Hepatitis B Testing" options={["Not Done", "Positive", "Negative"]} onChangeText ={(hepatitis_b_testing) => this.setState({hepatitis_b_testing: hepatitis_b_testing})} />

                    <RadioButton name="hepatitis_b_treated" title="Hepatitis B Treated" options={["Not Done", "Positive", "Negative"]} onChangeText ={(hepatitis_b_treated) => this.setState({hepatitis_b_treated: hepatitis_b_treated})} />

                    <RadioButton name="hepatitis_c_testing" title="Hepatitis C Testing" options={["Not Done", "Positive", "Negative"]} onChangeText ={(hepatitis_c_testing) => this.setState({hepatitis_c_testing: hepatitis_c_testing})} />

                    <RadioButton name="hepatitis_c_treated" title="Hepatitis C Treated" options={["Yes", "No", "Referred"]} onChangeText ={(hepatitis_c_treated) => this.setState({hepatitis_c_treated: hepatitis_c_treated})} />

                    <button onClick={()=>this.goNext()} className="btn btn-primary nextBtn btn-lg pull-right" type="button">Next</button>


                </StepWrapper>

                <StepWrapper
                active={this.state.active} // pass the active step
                position={5} // the current step position
                title="Haematology/  Blood Test (Write the result of the test)" // title of the step
                >

                    <Input
                    onChangeText={(text)=>this.setFormValue("anemia",parseInt(text))}
                    type="text"
                    placeholder="Enter HB/PCV (Anaemia)"
                    name="anemia"
                    title="HB/PCV (Anaemia)"
                    />

                    <Input
                    onChangeText={(text)=>this.setFormValue("sugar_test_result",parseInt(text))}
                    type="text"
                    placeholder="Enter clients sugar test result."
                    name="sugar_test_result"
                    title="Sugar (Gestational Diabetes)"
                    />

                    <h5>Urianalysis</h5>

                    <Input
                    onChangeText={(text)=>this.setFormValue("urinalysis_sugar",parseInt(text))}
                    type="text"
                    placeholder="Enter clients test result."
                    name="urinalysis_sugar"
                    title="Sugar"
                    />

                    <Input
                    onChangeText={(text)=>this.setFormValue("protein",parseInt(text))}
                    type="text"
                    placeholder="Enter clients test result."
                    name="protein"
                    title="Protein"
                    />

                    <RadioButton name="llin_given" title="LLIN Given" options={["Yes", "No"]} onChangeText ={(llin_given) => this.setState({llin_given: llin_given})} />

                    <button onClick={()=>this.goNext()} className="btn btn-primary nextBtn btn-lg pull-right" type="button">Next</button>


                </StepWrapper>

                <StepWrapper
                active={this.state.active} // pass the active step
                position={6} // the current step position
                title="Doses of IPT given" // title of the step
                >

                    <RadioButton name="ipt_one" title="IPT1" options={["Yes", "No"]} onChangeText ={(ipt_one) => this.setState({ipt_one: ipt_one})} />

                    <RadioButton name="ipt_two" title="IPT2" options={["Yes", "No"]} onChangeText ={(ipt_two) => this.setState({ipt_two: ipt_two})} />

                    <RadioButton name="ipt_three" title="IPT3" options={["Yes", "No"]} onChangeText ={(ipt_three) => this.setState({ipt_three: ipt_three})} />

                    <RadioButton name="ipt_greater_three" title="IPT > 3" options={["Yes", "No"]} onChangeText ={(ipt_greater_three) => this.setState({ipt_greater_three: ipt_greater_three})} />

                    <SelectComponent

                    name="td"
                    onChangeText={(text)=>this.setFormValue("td",text)}
                    options={["TD1","TD2", "TD3", "TD4", "TD5"]}
                    title="TD"
                    placeholder="Select TD"

                    />
                    
                    <Input
                    onChangeText={(text)=> this.setFormValue("associated_problems",text)}
                    type="text"
                    placeholder="Enter Associated Problems"
                    name="associated_problems"
                    title="Associated Problems"
                    />

                    <SelectComponent

                    name="visit_outcome"
                    onChangeText={(text)=>this.setFormValue("visit_outcome",text)}
                    options={["NT","T", "A", "RO"]}
                    title="Visit Out"
                    placeholder="Select Visit Out"

                    />

                    <Input
                    onChangeText={(text)=> this.setFormValue("referral_reason",text)}
                    type="text"
                    placeholder="Enter Reason of referral"
                    name="referral_reason"
                    title="Reason of referral"
                    />

                    <SelectComponent

                    name="transportation"
                    onChangeText={(text)=>this.setFormValue("transportation",text)}
                    options={["Ambulance","Others"]}
                    title="Transportation"
                    placeholder="Select Transportation"

                    />
                    
                <button type="button" className="btn btn-primary btn-lg ">Submit</button>

                </StepWrapper>

            </StepFormWrapper>
        );
    }

}

export default Antenatal;