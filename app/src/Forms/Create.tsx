import React from 'react';
import StepIndicatorComponent from '../components/stepIndicator';
import RadioBtns from '../components/radioButtons';
import Input from '../components/input'
import DatePicker from '../components/datePicker';
import SelectComponent from '../components/select'
import TextArea from '../components/textArea'
import MultiSelectAndSearch from '../components/multiSelectAndSearch'

class  Create extends React.Component {

   componentDidMount(){
    window.scrollTo(0, 0)
   }


   render(){
    return(
      <div className="element-wrapper container mt-4">
            <div className="element-box">
              <div className="row">
                <div className="col-sm-1" />

                <div className="col-sm-10">

                  <h5 className="form-header" style={{textAlign: 'center'}}>Add Daily Out-Patient (OPD) Register</h5>

                  <div className="stepwizard">


                    {/* STEP COMPONENT */}


                    <div className="stepwizard-row setup-panel">

                      <StepIndicatorComponent
                         stepNumber={6}
                      />

                    </div>


                  </div>


                  <form action="https://lexcare.ng/Out_patient/store" id="formValidate" role="form"    method="post" acceptCharset="utf-8" noValidate="true">


                    {/* STEP ONE  */}

                    <div className="row setup-content" id="step-1" style={{}}>
                      <div className="col-sm-12">
                        <div className="col-md-12">

                              <DatePicker
                                type="date"
                                placeholder="Select date Y-m-d"
                                name="date"
                                title="Date"
                                dataError="Please select a date"
                              />


                              <SelectComponent
                                  name="client_name"
                                  options={[]}
                                  title="Name of Client"

                              />

                              <Input
                                type="text"
                                placeholder="Enter card number..."
                                name="card_number"
                                title="Card Number"
                                dataError="Card number is required"
                              />


                              <RadioBtns
                                  name="sex"
                                  title="Sex"
                                  options={["Male","Female"]}
                              />

                              <RadioBtns
                                  name="age"
                                  title="Age"
                                  options={["0 - 28 Days","29 - 11 Months","12 - 29 Months","5 - 9 Years"]}
                                  />



                                <DatePicker
                                  type="date"
                                  placeholder="Select date of birth"
                                  name="dob"
                                  title="Date of Birth"
                                  dataError="Please select date of birth"
                                />



                          <button className="btn btn-primary nextBtn btn-lg pull-right" type="button">Next</button>
                        </div>
                      </div>
                    </div>



                     {/* STEP 2 */}

                    <div className="row setup-content" id="step-2" style={{display: 'none'}}>
                      <div className="col-sm-12">
                        <div className="col-md-12">

                          <h5>Clients Visit Details</h5>

                          <RadioBtns
                                  name="attendance"
                                  title="Type of attendance"
                                  options={["New","Follow Up"]}
                           />

                          <h5>Nutritional Assessment</h5>

                            <Input
                                type="text"
                                placeholder=""
                                name="weight"
                                title="Weight (Kg)"
                                dataError=""
                              />

                              <Input
                                type="text"
                                placeholder=""
                                name="weight"
                                title="Height (CM for children &lt; 12 years) and (M for persons &gt; 12 Years )"
                                dataError=""
                              />


                                <Input
                                  type="text"
                                  placeholder=""
                                  name="bmi"
                                  title="BMI [Weight (Kg) / Height² (M²)]"
                                  dataError=""
                              />


                          <button className="btn btn-primary nextBtn btn-lg pull-right" type="button">Next</button>

                        </div>
                      </div>
                    </div>

                    <div className="row setup-content" id="step-3" style={{display: 'none'}}>
                      <div className="col-sm-12">
                        <div className="col-md-12">


                          <TextArea

                            name="complaint"
                            placeholder="Enter complaints"
                            id="field-ta"
                            title="Presenting Complaint"

                          />


                           <MultiSelectAndSearch
                              options={["1","2","3"]}
                              title="Diagnosis"
                              searchInputId="bs-select-1"
                              selectId="desease_id"
                              name = "diseaseId[]"
                           />




                          <div id="target" />
                          <SelectComponent
                                  name="investigation"
                                  options={["No investigation","Urine Analysis","RVS","Sugar Test","MPS / Widal"]}
                                  title="Type of Laboratory Investigation"

                          />



                         <TextArea

                            name="drugs_given"
                            placeholder="Enter complaints"
                            id="drugs_given"
                            title="Drugs Given"

                          />


                         <RadioBtns
                                  name="visit_outcome"
                                  title="Outcome of Visits"
                                  options={["Not Treated (NT)","Treated (T)","Admitted (A)","Referred Out(RO)","Dead (D)"]}
                           />


                         <TextArea

                            name="ro_condition"
                            placeholder="Enter condition that required referral..."
                            id="field-ta"
                            title="Please write condition that required referral"

                          />


                          <button className="btn btn-primary nextBtn btn-lg pull-right" type="button">Next</button>
                        </div>
                      </div>
                    </div>



                    <div className="row setup-content" id="step-4" style={{display: 'none'}}>
                      <div className="col-sm-12">
                        <div className="col-sm-12">
                          <h5>Malaria</h5>
                          <div className="form-group">
                            <label htmlFor="field-ta" className="col-sm-12 control-label">Clinical Diagnosis (Tick if no lab test was done before treatment)</label>
                            <div className="col-sm-12">
                              <label className="radio-inline">
                                <input type="radio" name="clinical_diagnosis" defaultValue="<5 Years" /> &lt; 5 Years
                              </label><br />
                              <label className="radio-inline">
                                <input type="radio" name="clinical_diagnosis" defaultValue=">=5 Years" /> &gt;=5 Years
                              </label><br />
                              <label className="radio-inline">
                                <input type="radio" name="clinical_diagnosis" defaultValue="PW" /> PW
                              </label>
                            </div>
                          </div>
                          <h5>Laboratory Diagnosis</h5>
                          <div className="form-group" id>
                            <label htmlFor="field-ta" className="col-sm-12 control-label"> RDT (Indicate either +ve or -ve)</label>
                            <div className="col-sm-12">
                              <label className="radio-inline">
                                <input type="radio" name="rdt_state" defaultValue="+ve" /> +ve
                              </label><br />
                              <label className="radio-inline">
                                <input type="radio" name="rdt_state" defaultValue="-ve" /> -ve
                              </label>
                            </div>
                          </div>
                          <div className="form-group" id>
                            <label htmlFor="field-ta" className="col-sm-12 control-label"> Age</label>
                            <div className="col-sm-12">
                              <label className="radio-inline">
                                <input type="radio" name="rdt_years" defaultValue="<5 Years" /> &lt; 5 Years
                              </label>
                              <label className="radio-inline">
                                <input type="radio" name="rdt_years" defaultValue=">=5 Years" /> &gt;=5 Years
                              </label>
                            </div>
                          </div>
                          <div className="form-group" id>
                            <label htmlFor="field-ta" className="col-sm-12 control-label">Microscopy (Indicate either +ve or -ve)</label>
                            <div className="col-sm-12">
                              <label className="radio-inline">
                                <input type="radio" name="micro_state" defaultValue="+ve" /> +ve
                              </label><br />
                              <label className="radio-inline">
                                <input type="radio" name="micro_state" defaultValue="-ve" /> -ve
                              </label>
                            </div>
                          </div>
                          <div className="form-group" id>
                            <label htmlFor="field-ta" className="col-sm-12 control-label">Age</label>
                            <div className="col-sm-12">
                              <label className="radio-inline">
                                <input type="radio" name="microscopy_years" defaultValue="<5 Years" /> &lt; 5 Years
                              </label><br />
                              <label className="radio-inline">
                                <input type="radio" name="microscopy_years" defaultValue=">=5 Years" /> &gt;=5 Years
                              </label>
                            </div>
                          </div>
                          <h5>ACT given</h5>
                          <div className="form-group">
                            <label htmlFor="field-ta" className="col-sm-12 control-label"> (Tick if ACT was given)</label>
                            <div className="col-sm-12">
                              <label className="radio-inline">
                                <input type="radio" name="act_given" defaultValue="<5 Years" /> &lt; 5 Years
                              </label><br />
                              <label className="radio-inline">
                                <input type="radio" name="act_given" defaultValue=">=5 Years" /> &gt;=5 Years
                              </label><br />
                              <label className="radio-inline">
                                <input type="radio" name="act_given" defaultValue="PW" /> PW
                              </label>
                            </div>
                          </div>
                          <div className="form-group">
                            <label htmlFor="field-ta" className="col-sm-12 control-label">Tick if other antimalaria is given</label>
                            <div className="col-sm-12">
                              <label className="radio-inline">
                                <input type="radio" name="other_antimaleria" defaultValue="Other Anti-Maleria" /> Other Anti-Malaria
                              </label>
                            </div>
                          </div>
                          <h5>Severe Malaria </h5>
                          <div className="form-group">
                            <label htmlFor="field-ta" className="col-sm-12 control-label">(Tick Only if tested positive for malaria)</label>
                            <div className="col-sm-12">
                              <label className="radio-inline">
                                <input type="radio" name="severe_malaria" defaultValue="<5 Years" /> &lt; 5 Years
                              </label><br />
                              <label className="radio-inline">
                                <input type="radio" name="severe_malaria" defaultValue=">=5 Years" /> &gt;=5 Years
                              </label>
                            </div>
                          </div>
                          <h5>Pre referral Treatment </h5>
                          <div className="form-group">
                            <label htmlFor="field-ta" className="col-sm-12 control-label"> (Tick any of the treatment  given)</label>
                            <div className="col-sm-12">
                              <label className="radio-inline">
                                <input type="radio" name="pre_refferal" defaultValue="IV artesunate" /> IV artesunate
                              </label><br />
                              <label className="radio-inline">
                                <input type="radio" name="pre_refferal" defaultValue=">=5 Years" /> IM/IV artermether
                              </label><br />
                              <label className="radio-inline">
                                <input type="radio" name="pre_refferal" defaultValue="Other pre referral" /> Other pre referral
                              </label>
                            </div>
                          </div>
                        </div>
                        <button className="btn btn-primary nextBtn btn-lg pull-right" type="button">Next</button>
                      </div>
                    </div>
                    <div className="row setup-content" id="step-5" style={{display: 'none'}}>
                      <div className="col-sm-12">
                        <div className="col-md-12">
                          <h5>Tuberculosis</h5>
                          <div className="form-group">
                            <label className="checkbox col-sm-12 control-label">
                              <input type="checkbox" name="screened_tb" defaultValue="Clinically Screened for TB" /> Clinically Screened for TB
                            </label>
                          </div>
                          <div className="form-group">
                            <label htmlFor="field-ta" className="col-sm-12 control-label"> TB Clinical screening score # (Enter 0 or 1)</label>
                            <div className="col-sm-12">
                              <label className="radio-inline">
                                <input type="radio" name="tb_score" defaultValue={0} /> 0
                              </label><br />
                              <label className="radio-inline">
                                <input type="radio" name="tb_score" defaultValue={1} /> 1
                              </label>
                            </div>
                          </div>


                          <div className="form-group">
                            <label className="checkbox col-sm-12 control-label">
                              <input type="checkbox" name="referred_tb" defaultValue={1} /> Client scored 1 (TB suspect) and referred for further TB services
                            </label>
                          </div>
                          <h5>Hepatitis B</h5>
                          <div className="form-group">
                            <label className="checkbox col-sm-12 control-label">
                              <input type="checkbox" name="hep_b_tested" defaultValue="Tested" /> Tested
                            </label>
                          </div>

                          <div className="form-group">
                            <label htmlFor="field-ta" className="col-sm-12 control-label">Result</label>
                            <div className="col-sm-12">
                              <label className="radio-inline">
                                <input type="radio" name="hep_b_result" defaultValue="Pos" /> Positive
                              </label><br />
                              <label className="radio-inline">
                                <input type="radio" name="hep_b_result" defaultValue="Neg" /> Negative
                              </label>
                            </div>
                          </div>

                          <div className="form-group">
                            <label htmlFor="field-ta" className="col-sm-12 control-label">Referred or Treated</label>
                            <div className="col-sm-12">
                              <label className="radio-inline">
                                <input type="radio" name="hep_b_refered_treated" defaultValue="R" /> R
                              </label><br />
                              <label className="radio-inline">
                                <input type="radio" name="hep_b_refered_treated" defaultValue="T" /> T
                              </label>
                            </div>
                          </div>


                          <h5> Hepatitis C Screening</h5>
                          <div className="form-group">
                            <label className="checkbox col-sm-12 control-label">
                              <input type="checkbox" name="hep_c_tested" defaultValue /> Tested
                            </label>
                          </div>
                          <div className="form-group">
                            <label htmlFor="field-ta" className="col-sm-12 control-label">Result</label>
                            <div className="col-sm-12">
                              <label className="radio-inline">
                                <input type="radio" name="hep_c_result" defaultValue="Pos" /> Positive
                              </label>
                              <label className="radio-inline">
                                <input type="radio" name="hep_c_result" defaultValue="Neg" /> Negative
                              </label>
                            </div>
                          </div>

                          <div className="form-group">
                            <label htmlFor="field-ta" className="col-sm-12 control-label">Referred or Treated</label>
                            <div className="col-sm-12">
                              <label className="radio-inline">
                                <input type="radio" name="hep_c_result" defaultValue="R" /> R
                              </label>
                              <label className="radio-inline">
                                <input type="radio" name="hep_c_result" defaultValue="T" /> T
                              </label>
                            </div>
                          </div>


                          <button className="btn btn-primary nextBtn btn-lg pull-right" type="button">Next</button>

                        </div>

                      </div>
                    </div>
                    <div className="row setup-content" id="step-6" style={{display: 'none'}}>
                      <div className="col-sm-12">
                        <div className="col-sm-12">
                          <h5>Gender Based Violence (GBV)</h5>
                          <div className="form-group">
                            <label htmlFor="field-ta" className="col-sm-12 control-label">GBV Case Seen (indicate type of case presented)</label>
                            <div className="col-sm-12">
                              <input type="text" name="gbv_case_seen" defaultValue id className="form-control" autoComplete="on" />
                            </div>
                            <div className="help-block form-text with-errors form-control-feedback" />
                          </div>
                          <div className="form-group">
                            <label htmlFor="field-ta" className="col-sm-12 control-label">Post GBV Care Received</label>
                            <div className="col-sm-12">
                              <input type="text" name="gbv_care_recieved" defaultValue id className="form-control" autoComplete="on" />
                            </div>
                            <div className="help-block form-text with-errors form-control-feedback" />
                          </div>
                          <div className="form-group">
                            <label htmlFor="field-ta" className="col-sm-12 control-label">GBV Case Referred for further Treatment</label>
                            <div className="col-sm-12">
                              <input type="text" name="gbv_referred" defaultValue id className="form-control" autoComplete="on" />
                            </div>
                            <div className="help-block form-text with-errors form-control-feedback" />
                          </div>
                          <button className="btn btn-primary nextBtn btn-lg pull-right disabled" type="submit">Submit</button>
                        </div>
                      </div>
                    </div>
                  </form></div>
              </div>
            </div>
            </div>

  )
   }
}

export default Create;
