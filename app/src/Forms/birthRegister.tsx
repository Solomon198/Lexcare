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

class BirthRegister extends React.Component<Props> {

    state = {

        active:1,
        steps:4,

        days:[],
        months:[],
        years:[],

        formValue: {
          mothers_card_no:"",
          child_reg_date: "",
          dob: "",
          sex: "",
          childs_surname: "",
          childs_firstname: "",
          childs_other_name: "",
          fathers_fullname: "",
          mothers_fullname: "",
          mothers_age: "",
          fathers_state_of_origin: "",
          parents_phone_number: "",
          parent_residential_address: "",
          date_b_certificate_issued: "",
          certificate_no: "",
          certificate_collection_date: "",
          certificate_collector_name: "",
          responsible_officer: ""
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
            title="Add Birth Register"
            jumpToIndex={(index)=>this.setFormPosition(index)}//jumps to a step automatically
            active={this.state.active} // pass the active step so that
            steps={this.state.steps } // holds total number of steps required
            >

                <StepWrapper
                active={this.state.active} // pass the active step
                position={1} // the current step position
                title="Patient / Client" // title of the step
                >

                    <Input
                    onChangeText={(text)=> this.setFormValue("mothers_card_no",text)}
                    type="text"
                    placeholder="Enter Mother's Hospital Card No."
                    name="mothers_card_no"
                    title="Mother's Hospital Card No."
                    />

                    {/* Use a date picker here */}
                    <Input
                    onChangeText={(text)=> this.setFormValue("child_reg_date",text)}
                    type="text"
                    placeholder="Enter Date of Child Registration"
                    name="child_reg_date"
                    title="Date of Child Registration"
                    />

                    {/* Use a date picker here */}
                    <Input
                    onChangeText={(text)=> this.setFormValue("dob",text)}
                    type="text"
                    placeholder="Enter Date of Birth"
                    name="dob"
                    title="Date of Birth"
                    />

                    <SelectComponent

                    name="sex"
                    onChangeText={(text)=>this.setFormValue("sex",text)}
                    options={["Male","Female"]}
                    title="Sex"
                    placeholder="Select Gender"

                    />


                    <button onClick={()=>this.goNext()} className="btn btn-primary nextBtn btn-lg pull-right" type="button">Next</button>

                </StepWrapper>
                
                <StepWrapper
                active={this.state.active} // pass the active step
                position={2} // the current step position
                title="Child's Name" // title of the step
                >

                    <Input
                    onChangeText={(text)=>this.setFormValue("childs_surname",parseInt(text))}
                    type="text"
                    placeholder="Enter child's surname"
                    name="childs_surname"
                    title="Surname"
                    />

                    <Input
                    onChangeText={(text)=>this.setFormValue("childs_firstname",parseInt(text))}
                    type="text"
                    placeholder="Enter child's first name"
                    name="childs_firstname"
                    title="First Name"
                    />

                    <Input
                    onChangeText={(text)=>this.setFormValue("childs_other_name",parseInt(text))}
                    type="text"
                    placeholder="Enter child's other name"
                    name="childs_other_name"
                    title="Other Name (Optional)"
                    />

                    <button onClick={()=>this.goNext()} className="btn btn-primary nextBtn btn-lg pull-right" type="button">Next</button>

                </StepWrapper>

                <StepWrapper
                active={this.state.active} // pass the active step
                position={3} // the current step position
                title="Parent's Information" // title of the step
                >

                    <Input
                    onChangeText={(text)=>this.setFormValue("fathers_fullname",parseInt(text))}
                    type="text"
                    placeholder="Enter father's full name"
                    name="fathers_fullname"
                    title="Father's Full Name"
                    />

                    <Input
                    onChangeText={(text)=>this.setFormValue("mothers_fullname",parseInt(text))}
                    type="text"
                    placeholder="Enter mother's full name"
                    name="mothers_fullname"
                    title="Mother's Full Name"
                    />

                    <Input
                    onChangeText={(text)=>this.setFormValue("mothers_age",parseInt(text))}
                    type="text"
                    placeholder="Enter age of mother"
                    name="mothers_age"
                    title="Age of Mother"
                    />

                    <SelectComponent

                    name="fathers_state_of_origin"
                    onChangeText={(text)=>this.setFormValue("fathers_state_of_origin",text)}
                    options={["Abia","Adamawa"]}
                    title="Father's State of Origin"
                    placeholder="Father's State of Origin"

                    />

                    <Input
                    onChangeText={(text)=>this.setFormValue("parents_phone_number",parseInt(text))}
                    type="text"
                    placeholder="Enter parent's phone number (Father / Mother)"
                    name="parents_phone_number"
                    title="Parent's Phone Number (Father / Mother)"
                    />

                    <TextArea

                    onChangeText={(text)=>this.setFormValue("parent_residential_address",text)}
                    name="parent_residential_address"
                    placeholder="Enter residential address (Father / Mother)"
                    id="parent_residential_address"
                    title="Residential Address (Father / Mother)"

                    />

                    <button onClick={()=>this.goNext()} className="btn btn-primary nextBtn btn-lg pull-right" type="button">Next</button>


                </StepWrapper>

                <StepWrapper
                active={this.state.active} // pass the active step
                position={4} // the current step position
                title="Parent's Information" // title of the step
                >

                    {/* Use a date picker here */}
                    <Input
                    onChangeText={(text)=> this.setFormValue("date_b_certificate_issued",text)}
                    type="text"
                    placeholder="Enter date of birth certificate was issued"
                    name="date_b_certificate_issued"
                    title="Date of Birth Certificate was Issued"
                    />

                    <Input
                    onChangeText={(text)=> this.setFormValue("certificate_no",text)}
                    type="text"
                    placeholder="Enter certificate number"
                    name="certificate_no"
                    title="Certificate Number"
                    />

                    {/* Use a date picker here */}
                    <Input
                    onChangeText={(text)=> this.setFormValue("certificate_collection_date",text)}
                    type="text"
                    placeholder="Select date of certificate collection"
                    name="certificate_collection_date"
                    title="Date of Collection of Certificate"
                    />

                    <Input
                    onChangeText={(text)=> this.setFormValue("certificate_collector_name",text)}
                    type="text"
                    placeholder="Enter certificate collector name"
                    name="certificate_collector_name"
                    title="Person Who Collected the Certificate"
                    />

                    <Input
                    onChangeText={(text)=> this.setFormValue("responsible_officer",text)}
                    type="text"
                    placeholder="Enter certificate collector name"
                    name="responsible_officer"
                    title="Responsible Officer"
                    />
                    
                <button type="button" className="btn btn-primary btn-lg ">Submit</button>

                </StepWrapper>

            </StepFormWrapper>
        );
    }

}

export default BirthRegister;