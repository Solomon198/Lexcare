import React from 'react';

import Input from '../components/input';

import DatePicker from '../components/datePicker';

import SelectComponent from '../components/select';

import TextArea from '../components/textArea';

import StepWrapper from '../components/stepWrapper';

import StepFormWrapper from '../components/stepFormWrapper';

import 'toasted-notes/src/styles.css';

import RadioButton from '../components/radioButtons';

import SelectClient from '../components/selectClient';

import {createFamilyPlaning} from '../../realm/queries/writeQueries';
import schemas from '../../realm/schemas';




type Props = {
  history: any,
  location:any
}
class  FamilyPlanning extends React.Component<Props> {

   state = {

          days:[],
          months:[],
          years:[],






   }





   componentDidMount(){

    window.scrollTo(0, 0)

   }

   async createFamilyPlaningRecord(info:any){
    const state = this.props.location.state;
    const isUpdate = state ? true : false;
    if(state){
      info._id = state._id
    }
     createFamilyPlaning(info,isUpdate).then((val)=>{

     if(val == "success") this.props.history.push("/family-planing");


  }).catch(e=>{

      console.log(e);

  })

}



   render(){

    const state = this.props.location.state;

    return(


                       <StepFormWrapper
                            onSubmit={(record)=>this.createFamilyPlaningRecord(record)}
                            title="Health Facility Family Planning Register "
                            steps={5} // holds total number of steps required
                        >

                           <StepWrapper
                              position={1} // the current step position
                              title="" // title of the step
                           >



                                <SelectClient
                                    name="client_name"
                                    name2="client_card_number"
                                    title="Select Client"
                                    required="please select client"
                                    date_name="date"
                                    date_title="Client Date of Visit"
                                    date_required="please select date"
                                    intervention={schemas.FamilyPlaning.name}
                                    state={state}

                                />


                            <TextArea

                                name="followup_address"
                                placeholder="Enter Follow Up Address"
                                title="Follow Up Address"
                                required="Please enter follow up address"
                                state={state}
                            />

                            <Input
                                type="text"
                                placeholder="Enter phone no."
                                name="phone_number"
                                title="Phone No."
                                state={state}
                              />

                            <SelectComponent

                            name="sex"
                            options={["Male", "Female"]}
                            title="Sex"
                            placeholder="Select Gender"
                            state={state}
                            />

                            <RadioButton state={state} name="age" title="Age" options={["10 - 14 years", "15 - 19 years", "20 - 24 years", "25 - 49 years", "≥ 50 years"]} />

                            <Input
                                type="number"
                                placeholder="Enter  weight"
                                name="weight"
                                title="Weight (Kg)"
                                state={state}
                              />

                            <Input
                                type="text"
                                placeholder="Enter blood pressure"
                                name="blood_pressure"
                                title="Blood Pressure"
                                state={state}
                              />


                        </StepWrapper>



                     {/* STEP 2 */}

                       <StepWrapper
                       position={2}
                       title="">

                              <Input
                                type="text"
                                placeholder="Enter Source of Referral"
                                name="referral_source"
                                title="Source of Referral"
                                state={state}
                              />

                            <Input
                                type="number"
                                placeholder="Enter parity"
                                name="parity"
                                title="Parity (female)"
                                state={state}
                              />

                            <RadioButton

                               name="counselled_fp"
                               title="Counselled FP"
                               options={["Yes", "No"]}
                               state={state}
                               />

                            <RadioButton
                              name="counselled_ppfp"
                              title="Counselled on PPFP"
                              options={["Yes", "No"]}
                              state={state}
                              />

                            <RadioButton
                              name="modern_fp"
                              title="First Time Modern FP User"
                              options={["Yes", "No"]}
                              state={state}
                              />

                            <RadioButton
                              name="contraception"
                              title="Emergency Contraception"
                              options={["Yes", "No"]}
                              state={state}
                              />

                            <RadioButton
                               name="fp_client_type"
                               title="Type of FP Client"
                               options={["Routine", "PPFP", "PAC"]}
                               state={state}
                               />

                        </StepWrapper>



                        <StepWrapper
                        position={3}
                        title="Oral Pills">

                            <Input
                                type="text"
                                placeholder="Enter name of oral pill"
                                name="oral_pill_name"
                                title="Name of Pill"
                                state={state}
                              />


                            <RadioButton
                            state={state}
                            name="new_acceptor"
                            title="NA(New Acceptor"
                            options={["Yes", "No"]}  />

                            <RadioButton
                            state={state}
                            name="revisit"
                            title="RV (Revisit)"
                            options={["Yes", "No"]} />

                            <Input
                                type="number"
                                placeholder="Please enter number of cycles"
                                name="cycles_quantity"
                                title="Qty (Number of Cycles)"
                                state={state}
                              />

                              <h5>INJECTABLES</h5>

                              <Input
                                type="text"
                                placeholder="Enter name of injectable"
                                name="injectable_name"
                                title="Name of Injectables"
                                state={state}
                              />

                            <Input
                                type="text"
                                placeholder="Enter name of injectable"
                                name="self_injectibles_name"
                                title="Name of Injectables Self Injection (For DMPA-SC only) (Qty in Vials)"
                                state={state}
                              />

                            <RadioButton
                            state={state}
                            name="injectable_na"
                            title="NA (New Acceptor)" options={["Yes", "No"]} />

                            <RadioButton
                            state={state}
                            name="injectable_rv"
                            title="RV (Revisit)" options={["Yes", "No"]}  />

                        </StepWrapper>



                          <StepWrapper
                          position={4}
                          title="IUDS">

                             <Input
                                type="text"
                                placeholder="Please enter type of IUD"
                                name="type_of_iud"
                                title="Type of IUD (write: H or C)"
                                state={state}
                              />

                            <SelectComponent

                            name="iud_in_na"
                            options={["Yes", "No"]}
                            title="IUD NA (New Acceptor)"
                            placeholder="Select an Option"
                            state={state}
                            />

                            <SelectComponent

                            name="iud_in_rv"
                            options={["Yes", "No"]}
                            title="IUD RV (Revisit)"
                            placeholder="Select an Option"
                            state={state}
                            />

                            <Input
                                type="text"
                                placeholder="Please enter IUD OUT value"
                                name="iud_out"
                                title="OUT"
                                state={state}
                              />

                            <RadioButton state={state}   name="condom_type" title="Type of Condom" options={["Male", "Female"]}  />


                            <RadioButton state={state}   name="condom_na" title="Condoms NA (New Acceptor)" options={["Yes", "No"]}  />

                            <RadioButton state={state}   name="condom_rv" title="Condom RV (Revisit)" options={["Yes", "No"]}  />

                            <Input
                                type="text"
                                placeholder="Quanltity of Condoms"
                                name="condom_qty"
                                title="Qty (Number of Pieces)"
                                state={state}
                              />

                          </StepWrapper>

                          <StepWrapper
                          position={5}
                          title="IMPLANTS">

                            <Input
                                type="text"
                                placeholder="Type of Implants (write: IMP or JD)"
                                name="implants_type"
                                title="Type of Implants"
                                state={state}
                              />

                            <RadioButton state={state}   name="implants_in" title="Condom RV (Revisit)" options={["NA", "RV"]}  />

                             <RadioButton state={state}   name="implants_out" title="Implants (OUT)" options={["Yes", "No"]}  />

                             <SelectComponent

                            name="voluntary_sterilization"
                            options={["M", "F"]}
                            title="Voluntary Sterilization"
                            placeholder="voluntary_sterilization"
                            state={state}
                            />

                            {/* <h5>Natural Methods</h5> */}

                            {/* create checkboxes here... */}

                          </StepWrapper>


                    </StepFormWrapper>


  )
   }
}

export default FamilyPlanning;
