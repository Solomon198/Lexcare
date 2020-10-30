import React from 'react';
import {createInPatient} from '../../realm/queries/writeQueries'
import DatePicker from '../components/datePicker';
import SelectComponent from '../components/select'
import TextArea from '../components/textArea';
import StepWrapper from '../components/stepWrapper'
import StepFormWrapper from '../components/stepFormWrapper';
import 'toasted-notes/src/styles.css';
import RadioButton from '../components/radioButtons'
import SelectClient from '../components/selectClient'
import schemas from '../../realm/schemas';



type Props = {
  history: any,
  location:any
}
class  InPatient extends React.Component<Props> {

   state = {

          days:[],
          months:[],
          years:[],






   }


   async createInpatientRecord(info:any){
    const state = this.props.location.state;
    const isUpdate = state ? true : false;
    if(state){
      info._id = state._id
    }
    createInPatient(info,isUpdate).then((val)=>{

    if(val == "success") this.props.history.push("/in-patient");


    }).catch(e=>{

        console.log(e);

    })

    }


    componentDidMount(){

      window.scrollTo(0, 0)

    }






   render(){

    const state = this.props.location.state;

    return(



                       <StepFormWrapper
                            onSubmit={(record)=>this.createInpatientRecord(record)}
                            title="Daily In-Patient Care (IPC) Register"
                            steps={2} // holds total number of steps required
                        >

                           <StepWrapper
                              position={1} // the current step position
                              title="" // title of the step
                           >



                                <SelectClient
                                  state={state}
                                  name="client_names"
                                  name2="card_number"
                                  title="Select Client"
                                  required="please select client"
                                  date_name="date"
                                  date_title="Date"
                                  date_required="Please select date"
                                  intervention={schemas.Inpatient.name}
                                />


                            <SelectComponent

                            name="sex"
                            options={["Male", "Female"]}
                            title="Sex"
                            placeholder="Select Gender"
                            state={state}
                            />

                            <SelectComponent

                            name="age"
                            options={["0 - 28 Days", "29 days - 11 Months", "12 - 59 Months", "5 - 9 Years", "10 - 19 Years", "> 20 Years"]}
                            title="Age"
                            placeholder="Select Gender"
                            state={state}

                            />

                            <DatePicker
                                type="date"
                                placeholder="Select date Y-m-d"
                                name="dob"
                                title="Date of Birth"
                                required="Please select date of birth"
                                state={state}
                              />


                        </StepWrapper>



                     {/* STEP 2 */}

                       <StepWrapper
                       position={2}
                       title="">

                            <SelectComponent

                            name="disease"
                            options={["preloaded diagnosis..."]}
                            title="Diagnosis"
                            placeholder="Search disease"
                            required="Please select a disease"
                            state={state}
                            />

                            <RadioButton
                            state={state}
                            name="addmission_outcome" title="Admission Outcome" options={["ABC", "DC", "R", "D"]}  />

                            <SelectComponent

                            name="investigation"
                            options={["preloaded services here..."]}
                            title="Type of Laboratory Investigation"
                            placeholder="Search Services"
                            state={state}
                            />

                            <TextArea

                            name="drugs_given"
                            placeholder="Enter drugs..."
                            title="Drugs Given"
                            state={state}
                            />

                        </StepWrapper>

                    </StepFormWrapper>


  )
   }
}

export default InPatient;
