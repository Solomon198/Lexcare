import React from 'react';
import Input from '../components/input'
import DatePicker from '../components/datePicker';
import SelectComponent from '../components/select'
import TextArea from '../components/textArea';
import CustomDatePicker from '../components/customDatePicker';
import CheckBox from '../components/checkBox'
import StepWrapper from '../components/stepWrapper'
import StepFormWrapper from '../components/stepFormWrapper';
import RadioButton from '../components/radioButtons'
import MultiSelectAndSearch from "../components/multiSelectAndSearch"
type Props = {
    history: any
}

class OutPatient extends React.Component<Props> {

    state = {

      diseases:["Add New Disease", "Cholera", "Diarrhea with blood", "Measles", "Meningitis", "Kidney stones", "Viral hemorrhagic fevers", "Human influenza caused by a new subtype", "Yellow fever", "Severe acute respiratory syndrome", "Smallpox", "Dengue fever", "Anthrax", "Severe acute respiratory illness", "Acute flaccid paralysis", "Dracunculiasis", "Leprosy", "Neonatal tetanus", "Lymphatic filariasis", "Tuberculosis", "Diarrhea in children less than 5 years of age", "HIV / AIDS", "Malaria", "Onchocerciasis", "Sexually transmitted infections", "Trypanosomiasis", "Buruliulcers", "Asthma", "Diabetes","mellitus", "Epilepsy", "High blood pressure", "Sickle cell disease", "Malnutrition", "Plague", "Trachoma", "Typhoid", "Hepatitis-B", "Pertussis", "Human rabies", "Schistosomiasis", "Noma", "fever", "malaria", "Typhoid", "nil", "Malaria and Typhoid", "Antenatal Care", "Cough and Catter", "Fever", "Cough and Catarrh", "diarrhea", "RTA", "body pain", "catarrh and fever", "vomiting", "vomiting", "STILL BIRTH", "stoillong and abdominal pain", "OEDEMA", "rashes and catarrh", "Chicken Pox", "Infection", "Pregnancy", "accident", "Delivery", "Ulcer", "accident", "stomache and fever", "rashes and body pain", "chest pain", "Infection"," back pain and fever", "fever", "cough", "VCG", "Fever / catarrh", "Fever", "chicken pox", "Diarrhea/Vomiting", "Pregnancy", "Abdominal Pain", "Tuberculosis (TB) vaccine", "Family Planning", "fever and vomiting", "rashe", "stomachache", "headache and stomachache", "boil on his body", "Circumcision", "Circumcision", "Penta", "fever and abdominal pain", "diarrhoea and body pain", "stooling", "Dysentry"]


    }



    render() {

        return (
            <StepFormWrapper
            title="Add Daily Out-Patient (OPD) Register"
            steps={6} // holds total number of steps required
            >

                <StepWrapper
                    position={1} // the current step position
                    title="" // title of the step
                >


                    {/* Use a date picker here */}
                    <DatePicker
                        type="text"
                        placeholder="Select registration date..."
                        name="date"
                        title="Client Date of Visit"
                        required="Please select a date"
                    />

                    <Input

                        type="text"
                        placeholder="Enter client's client name"
                        name="client_name"
                        title="Name of Client"
                        required="Please provide a client name"
                    />

                  <Input

                      type="text"
                      placeholder="Enter  card number"
                      name="card_number"
                      title="Card Number"
                      required="Please provide a client number"

                  />




                    <RadioButton
                        name="sex"
                        title="Sex"
                        options={["Male","Female"]}
                        required="Please select a sex"
                         />


                     <RadioButton
                        name="age"
                        title="Age"
                        options={["0 - 28 Days","29 - 11 months", "12 - 29 months","5 - 9 years"]}
                        required="Please select age"
                    />

                    <DatePicker
                       type="date"
                       name="date_of_birth"
                       title="Date of Birth"
                       placeholder=""
                    />


                </StepWrapper>

                <StepWrapper
                    position={2} // the current step position
                    title="Clients Visit Details" // title of the step

                >

                    <RadioButton

                        name="type_of_attendance"
                        options={["New","Follow Up"]}
                        title="Type of Attendance"
                        required="Please select type of attendance"

                    />


                    <h5>
                        Nutritional Assessment
                    </h5>

                        <Input

                          type="text"
                          placeholder=""
                          name="weight"
                          title="Weight (Kg)"
                          required="Please enter weight"

                        />

                        <Input

                          type="text"
                          placeholder=""
                          name="height"
                          title="Height (CM for children < 12 years) and (M for persons > 12 Years )"
                          required="Please enter height"

                        />


                          <Input

                              type="text"
                              placeholder=""
                              name="bmi_weight"
                              title="BMI [Weight (Kg) / Height² (M²)]"
                              required="Please enter height"

                        />







                </StepWrapper>

                <StepWrapper
                position={3} // the current step position
                title="" // title of the step
                >

                    <TextArea
                      name="complaint"
                      title="Presenting Complaint"
                      placeholder="Enter complaint"
                      required="Please select an option"
                    />

                    <MultiSelectAndSearch

                       name="diagnosis"
                       title="Diagnosis"
                       options={this.state.diseases}
                       required='Please select an option'
                       placeholder=""
                       type=""
                    />

                    <SelectComponent
                      title="Type of Laboratory Investigation"
                      options={["No investigation","Urine Analysis","RVS","Sugar Test","MPS/Widal"]}
                      name="type_of_investigation"
                      placeholder=""
                    />

                    <TextArea
                      title="Drugs Given"
                      placeholder="drugs given"
                      name="drugs_given"

                    />

                    <RadioButton
                        options={[
                          "Not Treated (NT)",
                          "Treated (T)",
                          "Admitted (A)",
                          "Referred Out(RO)",
                          "Dead (D)"
                        ]}
                        title="Outcome of Visits"
                        name="visit_outcome"
                    />




                </StepWrapper>

                <StepWrapper
                    position={4} // the current step position
                    title="Malaria" // title of the step
                >
                      <RadioButton
                        options={[
                          "< 5 Years",
                          ">=5 Years",
                          "PW",
                        ]}
                        title="Clinical Diagnosis (Tick if no lab test was done before treatment)"
                        name="clinical_diagnosis"
                    />

                    <h5>
                       Laboratory Diagnosis
                    </h5>

                   <RadioButton
                        options={[
                          "+ve",
                          "-ve",
                        ]}
                        title="RDT (Indicate either +ve or -ve)"
                        name="rdt"
                    />

                     <RadioButton
                        options={[
                          "< 5 Years",
                          ">=5 Years",
                        ]}
                        title="Age"
                        name="age"
                    />

                     <RadioButton
                        options={[
                          "+ve",
                          "-ve",
                        ]}
                        title="Microscopy (Indicate either +ve or -ve)"
                        name="microscopy"
                    />

                     <h5>
                        ACT given
                     </h5>

                     <RadioButton
                        options={[
                          "< 5 Years",
                          ">=5 Years",
                          "PW"
                        ]}
                        title="(Tick if ACT was given)"
                        name="act"
                    />

                      <RadioButton
                        options={[
                          "Other Anti-Malaria",
                        ]}
                        title="Tick if other antimalaria is given)"
                        name="other_anti_maleria"
                    />

                     <h5>
                         Severe Malaria
                     </h5>

                    <RadioButton
                        options={[
                          "< 5 Years",
                          ">=5 Years",
                        ]}
                        title="(Tick Only if tested positive for malaria)"
                        name="severe_maleria"
                    />

                    <h5>

                       Pre referral Treatment

                    </h5>

                    <RadioButton
                        options={[
                          "IV artesunate",
                          "IM/IV artermether",
                          "Other pre referral"
                        ]}
                        title="(Tick any of the treatment given)"
                        name="pre_referal_treatment"
                    />





                </StepWrapper>

                <StepWrapper
                    position={5} // the current step position
                    title="Tuberculosis" // title of the step
                >


                    <CheckBox
                       title="Clinically Screened for TB"
                       name="clinically_screened"
                    />

                    <RadioButton
                          name="clinical_screening_score"
                          title="TB Clinical screening score # (Enter 0 or 1)"
                          options={[
                            "0",
                            "1"
                          ]}
                    />

                     <CheckBox
                       title="Client scored 1 (TB suspect) and referred for further TB services"
                       name="clinical_scored"
                    />


                    <h5>
                       Hepatitis B
                    </h5>

                    <CheckBox
                       title="Tested"
                       name="tested_hepatitis"
                    />

                    <RadioButton
                      options={["Positive","Negative"]}
                      title="Result"
                      name="result_hepatitis_test"
                    />

                    <h5>
                       Hepatitis C Screening
                    </h5>

                    <RadioButton
                      options={["Positive","Negative"]}
                      title="Result"
                      name="result_hepatitis_screening"
                    />

                    <RadioButton
                       title="Referred or Treated"
                       name="refered_or_treated"
                       options={["R","T"]}
                    />


                </StepWrapper>

                <StepWrapper
                    position={6} // the current step position
                    title="Gender Based Violence (GBV)" // title of the step
                >


                    <Input
                       title="GBV Case Seen (indicate type of case presented)"
                       name="gbv"
                       type=""
                       placeholder=""
                    />

                    <Input
                       title="Post GBV Care Received"
                       name="post_gbv"
                       type=""
                       placeholder=""
                    />

                    <Input
                       title="GBV Case Referred for further Treatment"
                       name="gbv_refered"
                       type=""
                       placeholder=""
                    />






                </StepWrapper>



            </StepFormWrapper>
        );
    }

}

export default OutPatient;
