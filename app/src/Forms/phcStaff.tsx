import React from 'react';
import Input from '../components/input'
import SelectComponent from '../components/select'
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

    render() {
        return (
            <StepFormWrapper
            title="Add Birth Register"
            steps={1} // holds total number of steps required
            >

                <StepWrapper
                  position={1} // the current step position
                  title="Add Staff" // title of the step
                >

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
