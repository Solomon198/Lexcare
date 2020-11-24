import React from 'react';
import Input from '../components/input'
import TextArea from '../components/textArea';
import StepWrapper from '../components/stepWrapper'
import StepFormWrapper from '../components/stepFormWrapper';
import {createFacilityService} from '../../realm/queries/writeQueries'

type Props = {
    history: any,
    location:any,
}

class FacilityServices extends React.Component<Props> {

    state = {


    }

    async CreateFacilityService(info:any){
      const state = this.props.location.state;
      const isUpdate = state ? true : false;
      if(state){
        info._id = state._id
      }
      createFacilityService(info,isUpdate).then((val)=>{

        if(val == "success") this.props.history.push("/facility-services");


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
              onSubmit={(values)=>this.CreateFacilityService(values)}
              title=""
              steps={1} // holds total number of steps required
            >

                <StepWrapper
                  position={1} // the current step position
                  title="Add Services" // title of the step
                >

                    <Input
                    state={state}
                    type="text"
                    placeholder="Enter service name"
                    name="service_name"
                    title="Service Name"
                    required="Enter Service name"
                    />



                    <TextArea
                        state={state}
                        name="service_description"
                        placeholder="Enter description"
                        title="Description"

                    />

                </StepWrapper>

            </StepFormWrapper>
        );
    }

}

export default FacilityServices;
