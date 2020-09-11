import React from 'react';
import Input from '../components/input'
import DatePicker from '../components/datePicker';
import SelectComponent from '../components/select'
import TextArea from '../components/textArea';
import CustomDatePicker from '../components/customDatePicker';
import StepWrapper from '../components/stepWrapper'
import StepFormWrapper from '../components/stepFormWrapper';

type Props = {
    history: any
}

class ReferalOut extends React.Component<Props> {

    state = {

        active:1,
        steps:5,

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
            refered_by_name: "",
            refered_by_designation: "",
            referal_date: "",
            initiating_facility_name: "",
            initiating_facility_address: "",
            initiating_facility_telephone_used: "",
            initiating_facility_transportation_arrangement: "",
            refered_to_facility_name: "",
            refered_to_facility_address: "",
            client_name: "",
            identity_number: "",
            client_address: "",
            age: "",
            sex: "",
            clinical_history: "",
            findings_diagnosis: "",
            treatment_given: "",
            reason_for_referal: "",
            any_referal_documents: "",
            initiating_facility_oic_name: "",
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
            title="Add Referal Out"
            jumpToIndex={(index)=>this.setFormPosition(index)}//jumps to a step automatically
            active={this.state.active} // pass the active step so that
            steps={this.state.steps } // holds total number of steps required
            >

                <StepWrapper
                active={this.state.active} // pass the active step
                position={1} // the current step position
                title="Refered By" // title of the step
                >

                    <Input
                    onChangeText={(text)=> this.setFormValue("refered_by_name",text)}
                    type="text"
                    placeholder="Enter referal name"
                    name="refered_by_name"
                    title="Name"
                    />

                    <Input
                    onChangeText={(text)=> this.setFormValue("refered_by_designation",text)}
                    type="text"
                    placeholder="Enter referal designation"
                    name="refered_by_designation"
                    title="Designation"
                    />

                    {/* Use date picker here... */}
                    <Input
                    onChangeText={(text)=> this.setFormValue("referal_date",text)}
                    type="text"
                    placeholder="Enter referal date"
                    name="referal_date"
                    title="Date of Birth"
                    />

                    <button onClick={()=>this.goNext()} className="btn btn-primary nextBtn btn-lg pull-right" type="button">Next</button>

                </StepWrapper>
                
                <StepWrapper
                active={this.state.active} // pass the active step
                position={2} // the current step position
                title="Initiating Facility" // title of the step
                >

                    <Input
                    onChangeText={(text)=> this.setFormValue("initiating_facility_name",text)}
                    type="text"
                    placeholder="Enter initiating facility name"
                    name="initiating_facility_name"
                    title="Name"
                    />

                    <Input
                    onChangeText={(text)=> this.setFormValue("initiating_facility_address",text)}
                    type="text"
                    placeholder="Enter initiating facility name"
                    name="initiating_facility_address"
                    title="Address"
                    />

                    {/* Create a component to be replaced with these radio buttons  */}

{/* <div class="form-group">
							  <label for="">Any telephone arrangements made by initiating facility?</label><br>
							  <input type="radio" name="initiating_facility_telephone_used" value="Yes"> Yes

							  <input type="radio" name="initiating_facility_telephone_used" value="No"> No
							 <div class="help-block form-text with-errors form-control-feedback"></div>
							</div>

							<div class="form-group">
							  <label for="">Any transportation arrangements made by initiating facility? </label><br>
							  <input type="radio" name="initiating_facility_transportation_arrangement" value="Yes"> Yes

							  <input type="radio" name="initiating_facility_transportation_arrangement" value="No"> No
							 <div class="help-block form-text with-errors form-control-feedback"></div>
							</div> */}


                    <button onClick={()=>this.goNext()} className="btn btn-primary nextBtn btn-lg pull-right" type="button">Next</button>

                </StepWrapper>

                <StepWrapper
                active={this.state.active} // pass the active step
                position={3} // the current step position
                title="Refered to Facility" // title of the step
                >
                    
                    <Input
                    onChangeText={(text)=> this.setFormValue("refered_to_facility_name",text)}
                    type="text"
                    placeholder="Enter refered facility name"
                    name="refered_to_facility_name"
                    title="Name"
                    />

                    <Input
                    onChangeText={(text)=> this.setFormValue("refered_to_facility_address",text)}
                    type="text"
                    placeholder="Enter refered facility address"
                    name="refered_to_facility_address"
                    title="Address"
                    />

                    <button onClick={()=>this.goNext()} className="btn btn-primary nextBtn btn-lg pull-right" type="button">Next</button>


                </StepWrapper>

                <StepWrapper
                active={this.state.active} // pass the active step
                position={4} // the current step position
                title="Client Details" // title of the step
                >

                    <Input
                    onChangeText={(text)=> this.setFormValue("client_name",text)}
                    type="text"
                    placeholder="Enter client name"
                    name="client_name"
                    title="Client Name"
                    />

                    <Input
                    onChangeText={(text)=> this.setFormValue("identity_number",text)}
                    type="text"
                    placeholder="Enter identity number"
                    name="identity_number"
                    title="Identity Number"
                    />

                    <Input
                    onChangeText={(text)=> this.setFormValue("client_address",text)}
                    type="text"
                    placeholder="Enter client address"
                    name="client_address"
                    title="Client Address"
                    />

                    <Input
                    onChangeText={(text)=> this.setFormValue("age",text)}
                    type="text"
                    placeholder="Enter age"
                    name="age"
                    title="Age"
                    />

{/* Convert this to a radio component */}

{/* <div class="form-group">
							  <label for="">Sex</label><br>
							  <input type="radio" name="sex" value="Male"> Male

							  <input type="radio" name="sex" value="Female"> Female
							 <div class="help-block form-text with-errors form-control-feedback"></div>
							</div> */}

                    <TextArea

                    onChangeText={(text)=>this.setFormValue("clinical_history",text)}
                    name="clinical_history"
                    placeholder="Enter clinical history"
                    id="clinical_history"
                    title="Clinical History"

                    />

                    <TextArea

                    onChangeText={(text)=>this.setFormValue("findings_diagnosis",text)}
                    name="findings_diagnosis"
                    placeholder="Enter findings / diagnosis"
                    id="findings_diagnosis"
                    title="Findings / Diagnosis"

                    />

                    <TextArea

                    onChangeText={(text)=>this.setFormValue("treatment_given",text)}
                    name="treatment_given"
                    placeholder="Enter treatment given (if any)"
                    id="treatment_given"
                    title="Treatment given (if any)"

                    />

                    <TextArea

                    onChangeText={(text)=>this.setFormValue("reason_for_referal",text)}
                    name="reason_for_referal"
                    placeholder="Enter reason for referal"
                    id="reason_for_referal"
                    title="Reason for referal"

                    />

{/* Create a component for this radio button */}

{/* <div class="form-group">
							  <label for="">Any other documents accompanying referal from initiating faciliting? </label><br>
							  <input type="radio" name="any_referal_documents" value="Yes"> Yes

							  <input type="radio" name="any_referal_documents" value="No"> No
							 <div class="help-block form-text with-errors form-control-feedback"></div>
							</div>	 */}

                    <button onClick={()=>this.goNext()} className="btn btn-primary nextBtn btn-lg pull-right" type="button">Next</button>


                </StepWrapper>

                <StepWrapper
                active={this.state.active} // pass the active step
                position={5} // the current step position
                title="Parent's Information" // title of the step
                >

                <Input
                onChangeText={(text)=> this.setFormValue("initiating_facility_oic_name",text)}
                type="text"
                placeholder="Enter OIC name"
                name="initiating_facility_oic_name"
                title="Name"
                />
                    
                <button type="button" className="btn btn-primary btn-lg ">Submit</button>

                </StepWrapper>

            </StepFormWrapper>
        );
    }

}

export default ReferalOut;