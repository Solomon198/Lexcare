import React from 'react';
import Input from '../components/input'
import DatePicker from '../components/datePicker';
import SelectComponent from '../components/select'
import {createTetanus} from '../../realm/queries/writeQueries'
import StepWrapper from '../components/stepWrapper'
import StepFormWrapper from '../components/stepFormWrapper';
import SelectClient from '../components/selectClient';
import schemas from '../../realm/schemas';

type Props = {
    history: any,
    location:any
}

class Tetanus extends React.Component<Props> {

    state = {

      client: null

    }

    componentDidMount(){

      window.scrollTo(0, 0)

    }


    async createTentanusRecord(info:any){
      const state = this.props.location.state;
      const isUpdate = state ? true : false;
      if(state){
        info._id = state._id
      }
      createTetanus(info,isUpdate).then((val)=>{

      if(val == "success") this.props.history.push("/tetanus-diphtherial");


    }).catch(e=>{

     console.log(e);

    })

  }




    render() {
      const state = this.props.location.state;
        return (
            <StepFormWrapper
            onSubmit={(record)=>this.createTentanusRecord(record)}
            title="Tetanus Diphtheria Register for Pregnant and Non Pregnant Women"
            steps={2} // holds total number of steps required
            >

                <StepWrapper
                    position={1} // the current step position
                    title="Client's Basic Details" // title of the step
                >

                    {/* <SelectComponent

                    name="session_type"
                    options={["FIXED","OUTREACH","MOBILE"]}
                    title="SESSION TYPE"
                    placeholder=""
                    required="Please select session type"
                    state={state}


                    />
 */}


                        <SelectClient
                              name="client_name"
                              name2="card_no"
                              onValueSelected={(value)=>this.setState({client:value})}
                              title="Select Client"
                              required="please select client"
                              date_name="date_of_visit"
                              date_title="Date of Visit"
                              date_required="Please select date of visit"
                              intervention={schemas.Tetanus.name}
                              state={state}
                         />




                </StepWrapper>

                <StepWrapper
                    position={2} // the current step position
                    title="Pregnancy" // title of the step

                >

                      <DatePicker
                        type="text"
                        placeholder="Select birth date..."
                        name="date_of_birth"
                        title="Date of Birth"
                        required="Please select date of birth"
                        state={state}
                    />

                      <Input
                        type="text"
                        placeholder="Enter follow up address"
                        name="follow_up_address"
                        title="Follow up Address"
                        required="Please enter the childs follow up address."
                        state={state}
                    />




                    <Input
                          type="text"
                          placeholder="Enter phone number"
                          name="phone_number"
                          title="Phone No."
                          required="Please enter phone number"
                          state={state}
                    />


                </StepWrapper>



            </StepFormWrapper>
        );
    }

}

export default Tetanus;
