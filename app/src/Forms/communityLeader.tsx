import React from 'react';
import Input from '../components/input'
import TextArea from '../components/textArea';
import StepWrapper from '../components/stepWrapper'
import StepFormWrapper from '../components/stepFormWrapper';
import {createCommunityLeader} from '../../realm/queries/writeQueries'

type Props = {
    history: any,
    location:any
}

class CommunityLeader extends React.Component<Props> {

    state = {


    }

    async CreateCommunityLieader(info:any){
      const state = this.props.location.state;
      const isUpdate = state ? true : false;
      if(state){
        info._id = state._id
      }
      createCommunityLeader(info,isUpdate).then((val)=>{

        if(val == "success") this.props.history.push("/community-leaders");


      }).catch(e=>{

       console.log(e);

      })

    }


    componentDidMount(){

      window.scrollTo(0, 0)

    }




    render() {
         const state = this.props.location.state;
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
                    state={state}
                    title="Full Name"
                    required="Please enter full name"
                    />

                    <Input
                    type="text"
                    placeholder="Enter phone number"
                    name="phone_number"
                    state={state}
                    title="Phone Number"
                    required="Please enter phone number"
                    />

                    <Input
                        type="text"
                        placeholder="Enter email"
                        name="email"
                        state={state}
                        title="Email"
                    />

                    <TextArea

                        name="home_address"
                        state={state}
                        placeholder="Enter home address"
                        title="Home Address"

                    />

                </StepWrapper>

            </StepFormWrapper>
        );
    }

}

export default CommunityLeader;
