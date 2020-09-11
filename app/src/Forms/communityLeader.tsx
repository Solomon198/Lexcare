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

class CommunityLeader extends React.Component<Props> {

    state = {

        active:1,
        steps:1,

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
            title="Add Community Leaders"
            jumpToIndex={(index)=>this.setFormPosition(index)}//jumps to a step automatically
            active={this.state.active} // pass the active step so that
            steps={this.state.steps } // holds total number of steps required
            >

                <StepWrapper
                active={this.state.active} // pass the active step
                position={1} // the current step position
                title="Information" // title of the step
                >

                    <Input
                    onChangeText={(text)=> this.setFormValue("full_name",text)}
                    type="text"
                    placeholder="Enter full name"
                    name="full_name"
                    title="Full Name"
                    />

                    <Input
                    onChangeText={(text)=> this.setFormValue("phone_number",text)}
                    type="text"
                    placeholder="Enter phone number"
                    name="phone_number"
                    title="Phone Number"
                    />

                    <Input
                    onChangeText={(text)=> this.setFormValue("email",text)}
                    type="text"
                    placeholder="Enter email"
                    name="email"
                    title="Email"
                    />

                    <TextArea

                    onChangeText={(text)=>this.setFormValue("home_address",text)}
                    name="home_address"
                    placeholder="Enter home address"
                    id="home_address"
                    title="Home Address"

                    />
                    
                    <button type="button" className="btn btn-primary btn-lg ">Submit</button>

                </StepWrapper>

            </StepFormWrapper>
        );
    }

}

export default CommunityLeader;