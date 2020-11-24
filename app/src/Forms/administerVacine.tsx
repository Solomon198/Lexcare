import React from "react";
import {Table,Modal,Button,Form} from 'react-bootstrap'
import {getDocuments} from '../../realm/queries/readQueries'
import {_AdministerImmunizationVaccine} from '../../realm/queries/writeQueries'
import Schema from '../../realm/schemas/index'
import moment from 'moment'

type props = {
  history: any
}
export default class AdministerVaccine extends React.Component<props> {


  constructor(props){
    super(props);
    this.state= {
     record:{},
     update:false,
     modal:false,
     tdValue:"",
     values:{},
     label:"",
     options:[]

  }

  }

  hideModal(){
    this.setState({modal:false})
  }

  getRecord(){
   const state = this.props.location.state;

   console.log(state);
   let data = getDocuments(Schema.AdministerVaccine.name,"immunization_record_id","","",true,state._id);
   if(data.length > 0){
     console.log("found data")
     this.setState({record:data[0],update:true})
   }else{
     console.log("could not find data")
     this.setState({update:false,record:{}})
   }
  }

  componentDidMount(){
   const state = this.props.location.state;
   if(state){
     this.getRecord();
   }

  }


  async createFacilityRecord(){
        const state = this.props.location.state;
        if(!state) return false;
       let data  = this.state.values;
       data[this.state.tdValue+"_date"] = new Date();
       data["immunization_record_id"] = state._id;
       data["child_card_no"] = state.child_card_no;

       if(this.state.update){
           data["_id"] =  this.state.record._id;
       }else{

       }


       _AdministerImmunizationVaccine(data,this.state.update).then((val)=>{

     if(val == "success"){
       this.setState({modal:false,values:{}},()=>{
         this.getRecord()
       })
     };


       }).catch(e=>{

  console.log(e);

 })

 }

  saveData(value:any,type:any){
     if(value == "select"){
       return false
     }
     let _state = this.state;
     let suffix = type ? "_"+type :"";
     let key = this.state.tdValue + suffix;
     let _data = this.state.values;
     _data[key] = value;
     this.setState({values:_data})
  }


  getDate(date:any){
      if(date){
        return moment(date).format("l")
      }

      return ""
  }


  addRecord(exist:any,tdValue,options:any[]){
      return (
       <button onClick={()=>this.setState({modal:true,tdValue:tdValue.split(" ").join(""),label:tdValue,options:options})} disabled={exist?true:false} className="btn btn-primary btn-small">
          ADD RECORD
      </button>
      )
  }


  createRecord(payload){

  }





  render() {

    const state =  this.props.location.state?this.props.location.state: {};
    const record:any = this.state.record;

    return (
      <div className="content-w">
        <div className="content-i">
          <div className="content-box">
            <div className="element-wrapper">
              <h6 className="element-header">Child Immunization</h6>
              <div className="element-box">
                <h5 className="form-header">Administer Vaccine</h5>

                <Table striped bordered hover>
                    <thead>
                      <tr>
                        <td colSpan="6">
                          Client Details
                        </td>
                      </tr>
                      <tr className="bg-info text-white">
                        <th>DATE OF FIRST VISIT</th>
                        <th>CARD NO	</th>
                        <th>NAME</th>
                        <th>DATE OF BIRTH</th>
                        <th>PHONE NO</th>
                        <th>FOLLOWUP ADDRESS</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          {this.getDate(state.date)}
                      	</td>
                        <td>
                          {state.child_card_no}
                        </td>
                        <td>
                          {state.child_name}
                        </td>
                        <td>
                           {this.getDate(state.dob)}
                      	</td>
                        <td>
                          {state.phone}
                        </td>
                        <td>
                           {state.followup_address}
                        </td>
                      </tr>



                      <tr>
                        <td className="bg-info text-white" style={{fontWeight:"bold"}} colSpan="7">
                          Immunization
                        </td>

                      </tr>


                      <tr>
                          <td style={{fontWeight:"bold"}}>
                             Hep.B 0
                          </td>
                          <td style={{fontWeight:"bold"}}>
                             OPV 0
                          </td>
                          <td style={{fontWeight:"bold"}}>
                             BCG
                          </td>
                          <td style={{fontWeight:"bold"}}>
                             OPV 1
                          </td>
                          <td style={{fontWeight:"bold"}}>
                             PENTA 1
                          </td>
                          <td style={{fontWeight:"bold"}}>
                             PCV 1
                          </td>
                          <td style={{fontWeight:"bold"}}>
                             ROTA
                          </td>

                      </tr>

                      <tr>

                          <td>
                            {this.getDate(record.hepB0_date)}
                          </td>
                          <td>
                            {this.getDate(record.opv0_date)}
                          </td>
                          <td>
                            {this.getDate(record.bcg_date)}
                          </td>
                          <td>
                            {this.getDate(record.opv1_date)}
                          </td>
                          <td>
                            {this.getDate(record.penta1_date)}
                          </td>
                          <td>
                            {this.getDate(record.pcv1_date)}
                          </td>
                          <td>
                            {this.getDate(record.rota1_date)}
                          </td>
                      </tr>

                      <tr style={{textTransform:"uppercase"}}>
                          <td> {record.hepB0}	</td>
                          <td>{record.opv0}</td>
                          <td>{record.bcg}	</td>
                          <td>{record.opv1}</td>
                          <td>{record.penta1}	</td>
                          <td>{record.pcv1}</td>
                          <td>{record.rota1}</td>
                      </tr>


                      <tr>
                        <td style={{fontWeight:"bold"}}>
                          Comments
                        </td>
                        <td style={{fontWeight:"bold"}}>
                          Comments
                        </td>
                        <td style={{fontWeight:"bold"}}>
                          Comments
                        </td>
                        <td style={{fontWeight:"bold"}}>
                          Comments
                        </td>
                        <td style={{fontWeight:"bold"}}>
                          Comments
                        </td>
                        <td style={{fontWeight:"bold"}}>
                          Comments
                        </td>
                        <td style={{fontWeight:"bold"}}>
                          Comments
                        </td>


                      </tr>

                      <tr>
                          <td>
                            {record.hepB0_comment}
                          </td>
                          <td>
                            {record.opv0_comment}
                          </td>
                          <td>
                            {record.bcg_comment}
                          </td>
                          <td>
                            {record.opv1_comment}
                          </td>
                          <td>
                            {record.penta1_comment}
                          </td>
                          <td>
                            {record.pcv1_comment}
                          </td>
                          <td>
                            {record.rota1_comment}
                          </td>
                      </tr>

                      <tr>
                          <td>
                             {this.addRecord(record.hepB0,"hep B 0",["10WEEKS-11MONTHS","12-23MONTHS"])}
                          </td>
                          <td>
                                 {this.addRecord(record.opv0,"opv 0",["0-24HOURS","24HOURS-2WEEKS"])}
                          </td>
                        <td>
                                 {this.addRecord(record.bcg,"bcg",["0-11MONTHS"])}
                          </td>
                          <td>
                                 {this.addRecord(record.opv1,"opv 1",["6WEEKS-11MONTHS","12-23MONTHS"])}
                          </td>
                          <td>
                                  {this.addRecord(record.penta1,"penta 1",["6WEEKS-11MONTHS","12-23MONTHS"])}
                          </td>
                          <td>
                                   {this.addRecord(record.pcv1,"pcv 1",["6WEEKS-11MONTHS","12-23MONTHS"])}
                          </td>
                          <td>
                                   {this.addRecord(record.rota1,"rota 1",["6WEEKS-11MONTHS","12-23MONTHS"])}
                          </td>


                      </tr>




                      <tr>
                          <td colSpan="7"></td>

                      </tr>



                      <tr className="bg-info text-white" >
                          <td style={{fontWeight:"bold"}}>
                             OPV 2
                          </td>
                          <td style={{fontWeight:"bold"}}>
                             PENTA 2
                          </td>
                          <td style={{fontWeight:"bold"}}>
                             PCV 2
                          </td>
                          <td style={{fontWeight:"bold"}}>
                             ROTA 2
                          </td>
                          <td style={{fontWeight:"bold"}}>
                             OPV 3
                          </td>
                          <td style={{fontWeight:"bold"}}>
                             PENTA 3
                          </td>
                          <td style={{fontWeight:"bold"}}>
                              PCV 3

                          </td>

                      </tr>

                      <tr>
                          <td>
                            {this.getDate(record.opv2_date)}
                          </td>
                          <td>
                            {this.getDate(record.penta2_date)}
                          </td>
                          <td>
                            {this.getDate(record.pcv2_date)}
                          </td>
                          <td>
                            {this.getDate(record.rota2_date)}
                          </td>
                          <td>
                            {this.getDate(record.opv3_date)}
                          </td>

                          <td>
                            {this.getDate(record.penta3_date)}
                          </td>
                          <td>
                            {this.getDate(record.pcv3_date)}
                          </td>
                      </tr>

                      <tr style={{textTransform:"uppercase"}}>
                          <td>{record.opv2}</td>
                          <td>{record.penta2}</td>
                          <td>{record.pcv2}	</td>
                          <td>{record.rota2}</td>
                          <td>{record.opv3}	</td>
                          <td>{record.penta3}</td>
                          <td>{record.pcv3}</td>
                      </tr>


                      <tr>
                        <td style={{fontWeight:"bold"}}>
                          Comments
                        </td>
                        <td style={{fontWeight:"bold"}}>
                          Comments
                        </td>
                        <td style={{fontWeight:"bold"}}>
                          Comments
                        </td>
                        <td style={{fontWeight:"bold"}}>
                          Comments
                        </td>
                        <td style={{fontWeight:"bold"}}>
                          Comments
                        </td>
                        <td style={{fontWeight:"bold"}}>
                          Comments
                        </td>
                        <td style={{fontWeight:"bold"}}>
                          Comments
                        </td>


                      </tr>

                      <tr>
                          <td>
                            {record.opv2_comment}
                          </td>
                          <td>
                            {record.penta2_comment}
                          </td>
                          <td>
                            {record.pcv2_comment}
                          </td>
                          <td>
                            {record.rota2_comment}
                          </td>
                          <td>
                            {record.opv3_comment}
                          </td>
                          <td>
                            {record.penta3_comment}
                          </td>
                          <td>
                            {record.pcv3_comment}
                          </td>
                      </tr>

                      <tr>
                          <td>
                             {this.addRecord(record.opv2,"opv 2",["10WEEKS-11MONTHS","12-23MONTHS"])}
                          </td>
                          <td>
                             {this.addRecord(record.penta2,"penta 2",["6WEEKS-11MONTHS","12-23MONTHS"])}
                          </td>
                          <td>
                             {this.addRecord(record.pcv2,"pcv 2",["6WEEKS-11MONTHS","12-23MONTHS"])}
                          </td>
                          <td>
                              {this.addRecord(record.rota2,"rota 2",["6WEEKS-11MONTHS","12-23MONTHS"])}
                          </td>
                          <td>
                               {this.addRecord(record. opv3," opv 3",["14WEEKS-11MONTHS","12-23MONTHS"])}
                          </td>
                          <td>
                               {this.addRecord(record.penta3,"penta 3",["14WEEKS-11MONTHS","12-23MONTHS"])}
                          </td>
                          <td>
                             {this.addRecord(record.pcv3,"pcv 3",["14WEEKS-11MONTHS","12-23MONTHS"])}
                          </td>


                      </tr>


                      <tr>
                          <td colSpan="7"></td>

                      </tr>



                      <tr className="bg-info text-white" >
                          <td style={{fontWeight:"bold"}}>
                             ROTA 3
                          </td>
                          <td style={{fontWeight:"bold"}}>
                             IPV
                          </td>
                          <td style={{fontWeight:"bold"}}>
                             VITAMIN A
                          </td>
                          <td style={{fontWeight:"bold"}}>
                             MEASLES 1
                          </td>
                          <td style={{fontWeight:"bold"}}>
                             YELLOW FEVER
                          </td>
                          <td style={{fontWeight:"bold"}}>
                             MEN A
                          </td>
                          <td style={{fontWeight:"bold"}}>
                             MEASLES 2
                          </td>


                      </tr>

                      <tr>
                          <td>
                            {this.getDate(record.rota3_date)}
                          </td>
                          <td>
                            {this.getDate(record.ipv_date)}
                            </td>
                          <td>{this.getDate(record.vitaminA_date)}</td>
                          <td>{this.getDate(record.measles1_date)}</td>
                          <td>{this.getDate(record.yellowfever_date)}</td>
                          <td>{this.getDate(record.menA_date)}</td>
                          <td>{this.getDate(record.measles2_date)}</td>

                      </tr>

                      <tr style={{textTransform:"uppercase"}}>
                          <td> {record.rota3}	</td>
                          <td>{record.ipv}</td>
                          <td>{record.vitaminA}</td>
                          <td>{record.measles1}	</td>
                          <td>{record.yellowfever}</td>
                          <td>{record.menA}	</td>
                          <td>{record.measles2}</td>
                      </tr>


                      <tr>
                        <td style={{fontWeight:"bold"}}>
                          Comments
                        </td>
                        <td style={{fontWeight:"bold"}}>
                          Comments
                        </td>
                        <td style={{fontWeight:"bold"}}>
                          Comments
                        </td>
                        <td style={{fontWeight:"bold"}}>
                          Comments
                        </td>
                        <td style={{fontWeight:"bold"}}>
                          Comments
                        </td>
                        <td style={{fontWeight:"bold"}}>
                          Comments
                        </td>
                        <td style={{fontWeight:"bold"}}>
                          Comments
                        </td>



                      </tr>

                      <tr>
                          <td>
                            {record.rota3_comment}
                          </td>
                          <td>
                            {record.ipv_comment}
                           </td>
                          <td>
                            {record.vitaminA_comment}
                          </td>
                          <td>
                            {record.measles1_comment}
                          </td>
                          <td>
                             {record.yellowfever_comment}
                          </td>
                          <td>
                            {record.menA_comment}
                          </td>
                          <td>
                            {record.measles2_comment}
                          </td>
                      </tr>

                      <tr>
                          <td>
                             {this.addRecord(record.rota3,"rota 3",["14WEEKS-11MONTHS","12-23MONTHS"])}
                          </td>
                          <td>
                             {this.addRecord(record.ipv,"ipv",["14WEEKS-11MONTHS"])}
                          </td>
                          <td>
                             {this.addRecord(record.vitaminA,"vitamin A",["6-11MONTHS (100,000 UI)","12-23MONTHS (200, 000 UI)"])}
                          </td>
                          <td>
                             {this.addRecord(record.measles1,"measles 1",["9-11MONTHS","12-23MONTHS"])}
                          </td>
                          <td>
                              {this.addRecord(record.yellowfever,"yellowfever",["9-11MONTHS","12-23MONTHS"])}
                          </td>
                          <td>
                              {this.addRecord(record.menA,"men A",["9-11MONTHS"])}
                          </td>
                          <td>
                             {this.addRecord(record.measles2,"measles 2",["18-23MONTHS"])}
                          </td>



                      </tr>



                      <tr>
                          <td colSpan="7"></td>

                      </tr>



                      <tr className="bg-info text-white" >
                          <td style={{fontWeight:"bold"}}>
                             HPV
                          </td>



                      </tr>

                      <tr>
                          <td>
                            {this.getDate(record.hpv_date)}
                          </td>

                      </tr>

                      <tr style={{textTransform:"uppercase"}}>
                          <td> {record.hpv}	</td>

                      </tr>


                      <tr>


                        <td style={{fontWeight:"bold"}}>
                          Comments
                        </td>



                      </tr>

                      <tr>

                          <td>
                            {record.hpv_comment}
                          </td>
                      </tr>

                      <tr>

                          <td>
                             {this.addRecord(record.hpv,"hpv",["9-14YEARS"])}
                          </td>


                      </tr>



                    </tbody>
                  </Table>
                  <Modal
                    show={this.state.modal}
                    onExited={()=>this.hideModal()}
                    aria-labelledby="contained-modal-title-vcenter"

                  >
                    <Modal.Header style={{}} >
                      <Modal.Title  id="contained-modal-title-vcenter">
                        {this.state.label.toUpperCase()}
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                    <Form>

                    <Form.Group controlId="exampleForm.ControlSelect1">
                      <Form.Label>SELECT AGE RANGE AS AT WHEN IMMUNIZATION IS ADMINISTERED.</Form.Label>
                      <Form.Control onChange={(e)=>this.saveData(e.target.value,"")} as="select">
                        <option>-----------select-------------</option>
                        {this.state.options.map((val,index)=>
                           <option>
                             {val}
                           </option>
                        )}
                      </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlTextarea1">
                      <Form.Label>COMMENT</Form.Label>
                      <Form.Control onChange={(e)=>this.saveData(e.target.value,"comment")} as="textarea" rows={3} />
                    </Form.Group>
                  </Form>


                    </Modal.Body>
                    <Modal.Footer>
                      <Button disabled={this.state.values[this.state.tdValue]?false:true} onClick={()=>this.createFacilityRecord()}>Submit</Button>
                      <Button onClick={()=>this.hideModal()}>Close</Button>
                    </Modal.Footer>
                  </Modal>



              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
