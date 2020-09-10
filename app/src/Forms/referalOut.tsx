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
            title="Add Referal Out"
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


                    <button onClick={()=>this.goNext()} className="btn btn-primary nextBtn btn-lg pull-right" type="button">Next</button>

                </StepWrapper>
                
                <StepWrapper
                active={this.state.active} // pass the active step
                position={2} // the current step position
                title="Child's Name" // title of the step
                >

                    

                    <button onClick={()=>this.goNext()} className="btn btn-primary nextBtn btn-lg pull-right" type="button">Next</button>

                </StepWrapper>

                <StepWrapper
                active={this.state.active} // pass the active step
                position={3} // the current step position
                title="Parent's Information" // title of the step
                >
                    

                    <button onClick={()=>this.goNext()} className="btn btn-primary nextBtn btn-lg pull-right" type="button">Next</button>


                </StepWrapper>

                <StepWrapper
                active={this.state.active} // pass the active step
                position={4} // the current step position
                title="Parent's Information" // title of the step
                >

                   
                    
                <button type="button" className="btn btn-primary btn-lg ">Submit</button>

                </StepWrapper>

            </StepFormWrapper>
        );
    }

}

export default ReferalOut;