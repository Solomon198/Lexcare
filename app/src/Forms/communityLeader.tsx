import React from 'react';
import Input from '../components/input'
import TextArea from '../components/textArea';
import StepWrapper from '../components/stepWrapper'
import StepFormWrapper from '../components/stepFormWrapper';
import {createCommunityLeader} from '../../realm/queries/writeQueries'

type Props = {
    history: any
}

class CommunityLeader extends React.Component<Props> {

    state = {


    }

    async CreateCommunityLieader(info:any){

      createCommunityLeader(info).then((val)=>{

        if(val == "success") this.props.history.push("/community-leaders");


      }).catch(e=>{

       console.log(e);

      })

    }


    componentDidMount(){

      window.scrollTo(0, 0)

    }




    render() {
        return (
            <StepFormWrapper
              onSubmit={(values)=>this.CreateCommunityLieader(values)}
              title="Add Community Leaders"
              steps={1} // holds total number of steps required
            >

                <StepWrapper
                  position={1} // the current step position
                  title="Information" // title of the step
                >

                    <Input
                    type="text"
                    placeholder="Enter full name"
                    name="full_name"
                    title="Full Name"
                    required="Please enter full name"
                    />

                    <Input
                    type="text"
                    placeholder="Enter phone number"
                    name="phone_number"
                    title="Phone Number"
                    required="Please enter phone number"
                    />

                    <Input
                        type="text"
                        placeholder="Enter email"
                        name="email"
                        title="Email"
                        required="Please enter email"
                    />

                    <TextArea

                        name="home_address"
                        placeholder="Enter home address"
                        title="Home Address"
                        required="Please enter home address"

                    />

                </StepWrapper>

            </StepFormWrapper>
        );
    }

}

export default CommunityLeader;
