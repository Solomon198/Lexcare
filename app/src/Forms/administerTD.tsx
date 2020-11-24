import React from "react";
import {Table,Modal,Button,Form} from 'react-bootstrap'
import {getDocuments} from '../../realm/queries/readQueries'
import {_AdministerTD} from '../../realm/queries/writeQueries'
import Schema from '../../realm/schemas/index'
import moment from 'moment'

type props = {
  history: any,
  location:any,
}
export default class AdministerTD extends React.Component<props> {

 constructor(props){
   super(props);
   this.state= {
    record:{},
    update:false,
    modal:false,
    tdValue:"",
    values:{},
    label:""
 }

 }

 hideModal(){
   this.setState({modal:false})
 }

 getRecord(){
  const state = this.props.location.state;

  console.log(state);
  let data = getDocuments(Schema.TetanusAdministration.name,"tetanus_record_id","","",true,state._id);
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
      data["tetanus_record_id"] = state._id;
      data["card_no"] = state.card_no;

      if(this.state.update){
          data["_id"] =  this.state.record._id;
      }else{

      }


  _AdministerTD(data,this.state.update).then((val)=>{

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


 addRecord(exist:any,tdValue){
     return (
      <button onClick={()=>this.setState({modal:true,tdValue:tdValue.split(" ").join(""),label:tdValue})} disabled={exist?true:false} className="btn btn-primary btn-small">
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
              <h6 className="element-header">Tetanus Diphtheria</h6>
              <div className="element-box">
                <h5 className="form-header">Administer TD</h5>

                <Table striped bordered hover>
                    <thead>
                      <tr>
                        <td colSpan="6">
                          Client Details
                        </td>
                      </tr>
                      <tr>
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
                          {moment(state.date_of_visit).format('l')}
                        </td>
                        <td>
                          {state.card_no}
                        </td>
                        <td>
                          {state.client_name}
                        </td>
                        <td>
                          {moment(state.date_of_birth).format("l")}
                        </td>
                        <td>
                           {state.phone_number}
                        </td>
                        <td>
                          {state.follow_up_address}
                        </td>
                      </tr>



                      <tr>
                        <td style={{fontWeight:"bold"}} colSpan="6">
                          Tetanus Diphtheria
                        </td>

                      </tr>


                      <tr>
                          <td style={{fontWeight:"bold"}}>
                            TD 1
                          </td>
                          <td style={{fontWeight:"bold"}}>
                            TD 2
                          </td>
                          <td style={{fontWeight:"bold"}}>
                            TD 3
                          </td>
                          <td style={{fontWeight:"bold"}}>
                            TD 4
                          </td><td style={{fontWeight:"bold"}}>
                            TD 5
                          </td>
                      </tr>
                      <tr>
                          <td style={{fontWeight:"bold"}}>
                            {record.td1}
                          </td>
                          <td style={{fontWeight:"bold"}}>
                            {record.td2}
                          </td>
                          <td style={{fontWeight:"bold"}}>
                            {record.td3}
                          </td>
                          <td style={{fontWeight:"bold"}}>
                            {record.td4}
                          </td><td style={{fontWeight:"bold"}}>
                            {record.td5}
                          </td>
                      </tr>

                      <tr>
                          <td>
                             {this.getDate(record.td1_date)}
                        	</td>
                          <td>
                             {this.getDate(record.td2_date)}
                          </td>
                          <td>
                             {this.getDate(record.td3_date)}
                          </td>
                          <td>
                             {this.getDate(record.td4_date)}
                          </td>
                          <td>
                             {this.getDate(record.td5_date)}
                          </td>
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

                      </tr>

                      <tr>
                          <td>
                            {record.td1_comment}
                          </td>
                          <td>
                          {record.td2_comment}
                          </td>
                          <td>
                          {record.td3_comment}
                          </td>
                          <td>
                          {record.td4_comment}
                          </td>
                          <td>
                          {record.td5_comment}
                          </td>
                      </tr>

                      <tr>
                          <td>
                             {this.addRecord(record.td1,"td 1")}
                          </td>
                          <td>
                             {this.addRecord(record.td2,"td 2")}
                          </td>
                          <td>
                             { this.addRecord(record.td3,"td 3")}
                          </td>
                          <td>
                             {this.addRecord(record.td4,"td 4")}
                          </td>
                          <td>
                             {this.addRecord(record.td5,"td 5")}
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
                      <Form.Label>SELECT P-(PREGNANT) OR NP-(NON PREGNANT)</Form.Label>
                      <Form.Control onChange={(e)=>this.saveData(e.target.value,"")} as="select">
                        <option>-----------select-------------</option>
                        <option>P</option>
                        <option>NP</option>
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
