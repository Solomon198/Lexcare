import React from 'react';
import Input from '../components/input'
import SelectComponent from '../components/select'
import {createPHC_Staff} from '../../realm/queries/writeQueries';
import StepWrapper from '../components/stepWrapper'
import StepFormWrapper from '../components/stepFormWrapper';

type Props = {
    history: any
}

class BirthRegister extends React.Component<Props> {

    state = {


    }

    componentDidMount(){


    }




    setFormPosition(index:number){

        this.setState({active:index},()=>{
         window.scrollTo(0, 0)
        });

    }

    async createAdmin(info:any){
      createPHC_Staff(info).then((val)=>{

        this.props.history.push("/phc-staff");

      }).catch(e=>{

       console.log(e);

      })
 }
    render() {
        return (
            <StepFormWrapper
            title="Add Staff"
            onSubmit={(values)=>this.createAdmin(values)}
            steps={1} // holds total number of steps required
            >

                <StepWrapper
                  position={1} // the current step position
                  title=" " // title of the step
                >

                  <div style={{marginTop:50}}></div>

                    <Input
                    type="text"
                    placeholder="Enter full name"
                    name="full_name"
                    title="Full Name"
                    required="Please enter full name"
                    />

                    {/* Use a date picker here */}
                    <Input
                    type="text"
                    placeholder="Enter phone number"
                    name="phone_number"
                    title="Phone Number"
                    required="Please enter phone number"
                    />

                   <Input
                    type="password"
                    placeholder="Enter Password"
                    name="password"
                    title="Password"
                    required="Please Enter Password"
                    />

                    <SelectComponent

                    name="role"
                    options={["Officer in Charge","Routine Immunization in Charge", "Antenatal Care in Charge", "Chew 1"]}
                    title="Role"
                    placeholder="Select Role"
                    required="Please select a role"
                    />

                </StepWrapper>

            </StepFormWrapper>
        );
    }

}

export default BirthRegister;
