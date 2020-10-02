import React from 'react';
import Input from '../components/input'
import DatePicker from '../components/datePicker';
import SelectComponent from '../components/select'
import TextArea from '../components/textArea';
import StepWrapper from '../components/stepWrapper'
import StepFormWrapper from '../components/stepFormWrapper';
import {createBirthRegister} from '../../realm/queries/writeQueries';
import NigeriaStates from '../data/states'
type Props = {
    history: any
}

class BirthRegister extends React.Component<Props> {

    state = {



    }

    async createBirthRecord(info:any){

        createBirthRegister(info).then((val)=>{

        if(val == "success") this.props.history.push("/birth-register");


      }).catch(e=>{

       console.log(e);

      })

    }



    render() {
        return (
            <StepFormWrapper
                  onSubmit={(record)=>this.createBirthRecord(record)}
                  title="Add Birth Register"
                  steps={4} // holds total number of steps required
            >

                <StepWrapper
                  position={1} // the current step position
                  title="Patient / Client" // title of the step
                >

                    <Input
                        type="text"
                        placeholder="Enter Mother's Hospital Card No."
                        name="mothers_card_no"
                        title="Mother's Hospital Card No."
                        required="Please enter card number"
                    />

                     <DatePicker
                       type="text"
                       placeholder="Enter Date of Child Registration"
                       name="child_reg_date"
                       title="Date of Child Registration"
                       required="Please select Date of registration "
                     />


                    <DatePicker
                        type="text"
                        placeholder="Enter Date of Birth"
                        name="dob"
                        title="Date of Birth"
                        required="Please enter date of birth"
                    />

                    <SelectComponent

                        name="sex"
                        options={["Male","Female"]}
                        title="Sex"
                        placeholder="Select Gender"
                        required="Please select gender"

                    />

                </StepWrapper>

                <StepWrapper
                      position={2} // the current step position
                      title="Child's Name" // title of the step
                >

                    <Input
                        type="text"
                        placeholder="Enter child's surname"
                        name="childs_surname"
                        title="Surname"
                        required="Please enter surname"
                    />

                    <Input
                        type="text"
                        placeholder="Enter child's first name"
                        name="childs_firstname"
                        title="First Name"
                        required="Please enter first name"
                    />

                    <Input
                        type="text"
                        placeholder="Enter child's other name"
                        name="childs_other_name"
                        title="Other Name (Optional)"
                        required="Please enter childs other name"
                    />

                </StepWrapper>

                <StepWrapper
                    position={3} // the current step position
                    title="Parent's Information" // title of the step
                >

                    <Input
                        type="text"
                        placeholder="Enter father's full name"
                        name="fathers_fullname"
                        title="Father's Full Name"
                        required="Please enter father's full name"
                    />

                    <Input
                        type="text"
                        placeholder="Enter mother's full name"
                        name="mothers_fullname"
                        title="Mother's Full Name"
                        required="Please enter mothers full name"
                    />

                    <Input
                    type="number"
                    placeholder="Enter age of mother"
                    name="mothers_age"
                    title="Age of Mother"
                    required="Please enter mothers age"
                    />

                    <SelectComponent

                    name="fathers_state_of_origin"
                    options={NigeriaStates}
                    title="Father's State of Origin"
                    placeholder="Father's State of Origin"
                    required="Please enter father state of origin"

                    />

                    <Input

                    type="text"
                    placeholder="Enter parent's phone number (Father / Mother)"
                    name="parents_phone_number"
                    title="Parent's Phone Number (Father / Mother)"
                    required="Please enter parent phone number"
                    />

                    <TextArea

                    name="parent_residential_address"
                    placeholder="Enter residential address (Father / Mother)"
                    title="Residential Address (Father / Mother)"
                    required="Please enter address"

                    />

                </StepWrapper>

                <StepWrapper
                    position={4} // the current step position
                    title="Parent's Information" // title of the step
                >

                    {/* Use a date picker here */}
                    <DatePicker
                        type="text"
                        placeholder="Enter date of birth certificate was issued"
                        name="date_b_certificate_issued"
                        title="Date of Birth Certificate was Issued"
                        required="Please enter date of birth certificate was issued"
                    />

                    <Input
                        type="text"
                        placeholder="Enter certificate number"
                        name="certificate_no"
                        title="Certificate Number"
                        required="Please enter certificate number"
                    />

                    <DatePicker
                          type="text"
                          placeholder="Select date of certificate collection"
                          name="certificate_collection_date"
                          title="Date of Collection of Certificate"
                          required="Please select a date of collection"
                    />

                    <Input
                        type="text"
                        placeholder="Enter certificate collector name"
                        name="certificate_collector_name"
                        title="Person Who Collected the Certificate"
                        required="Please enter certificate collector name"
                    />

                    <Input
                          type="text"
                          placeholder="Enter certificate collector name"
                          name="responsible_officer"
                          title="Responsible Officer"
                          required="Please enter collectors name"
                    />


                </StepWrapper>

            </StepFormWrapper>
        );
    }

}

export default BirthRegister;
