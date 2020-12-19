import React from 'react';
import Input from '../components/input'
import DatePicker from '../components/datePicker';
import SelectComponent from '../components/select'
import TextArea from '../components/textArea';
import StepWrapper from '../components/stepWrapper'
import StepFormWrapper from '../components/stepFormWrapper';
import 'toasted-notes/src/styles.css';
import SelectClient from '../components/selectClient';
import {createImmunization} from '../../realm/queries/writeQueries'
import schemas from '../../realm/schemas';




type Props = {
  history: any,
  location:any
}
class  PostNatal extends React.Component<Props> {

   state = {

          days:[],
          months:[],
          years:[],
          client:null






   }

   componentDidMount(){

    window.scrollTo(0, 0)

   }

   async createImmnunizationRecord(info:any){
    const state = this.props.location.state;
    const isUpdate = state ? true : false;
    if(state){
      info._id = state._id
    }
    createImmunization(info,isUpdate).then((val)=>{

    if(val == "success") this.props.history.push("/child-immunization");


 }).catch(e=>{

     console.log(e);

 })

}



   render(){

    const state = this.props.location.state;


    return(



                       <StepFormWrapper
                            onSubmit={(records)=>this.createImmnunizationRecord(records)}
                            title="Child Immunization Register "
                            steps={2} // holds total number of steps required
                        >

                           <StepWrapper
                              position={1} // the current step position
                              title="" // title of the step
                           >


                                <SelectClient

                                  name="child_name"
                                  state={state}
                                  onValueSelected={(value)=>this.setState({client:value})}
                                  name2="child_card_no"
                                  title="Select Client"
                                  required="please select client"
                                  date_name="date"
                                  date_title="Date of Child Visit"
                                  date_required="please select date"
                                  intervention={schemas.Immunization.name}


                                />




                            <SelectComponent

                            name="sex"
                            options={["Male", "Female"]}
                            title="Sex (M/F)"
                            required="Please select Sex"
                            placeholder="Select Sex"
                            state={state}
                            />

                        </StepWrapper>



                     {/* STEP 2 */}

                       <StepWrapper
                       position={2}
                       title="">

                            <TextArea

                            name="followup_address"
                            placeholder="Enter Follow Up Address"
                            title="Follow Up Address"
                            required="Please enter the childs follow up address."
                            state={state}
                            />

                              <Input
                                type="text"
                                placeholder="Enter phone no."
                                name="phone"
                                title="Phone No."
                                required="Please enter phone number"
                                state={state}
                              />

                              <DatePicker
                                type="date"
                                placeholder="Enter child's date of birth"
                                name="dob"
                                title="Date of Birth(DD/MM/YY)"
                                required="Please pick a date of birth"
                                state={state}
                            />

                            <TextArea

                            name="comment"
                            placeholder="Enter comments"
                            title="Comments"
                            state={state}
                            />

                        </StepWrapper>

                    </StepFormWrapper>


  )
   }
}

export default PostNatal;
