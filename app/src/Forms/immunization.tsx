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
  history: any
}
class  PostNatal extends React.Component<Props> {

   state = {

          days:[],
          months:[],
          years:[],






   }

   async createImmnunizationRecord(info:any){

    createImmunization(info).then((val)=>{

    if(val == "success") this.props.history.push("/family-planing");


 }).catch(e=>{

     console.log(e);

 })

}



   render(){
    return(



                       <StepFormWrapper
                            onSubmit={(records)=>this.createImmnunizationRecord(records)}
                            title="Child Immunization Reister "
                            steps={2} // holds total number of steps required
                        >

                           <StepWrapper
                              position={1} // the current step position
                              title="" // title of the step
                           >


                                <SelectClient

                                  name="child_name"
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
                            placeholder="Select Gender"
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
                            />

                              <Input
                                type="text"
                                placeholder="Enter phone no."
                                name="phone"
                                title="Phone No."
                              />

                              <DatePicker
                                type="date"
                                placeholder="Enter child's date of birth"
                                name="dob"
                                title="Date of Birth(DD/MM/YY)"
                                required="Please pick a date of birth"
                            />

                            <TextArea

                            name="comment"
                            placeholder="Enter comments"
                            title="Comments"
                            />

                        </StepWrapper>

                    </StepFormWrapper>


  )
   }
}

export default PostNatal;
