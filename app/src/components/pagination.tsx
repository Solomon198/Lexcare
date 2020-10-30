import React,{useState,useCallback,useEffect} from 'react'
import {Pagination} from 'react-bootstrap';
import moment from 'moment';
import DatePicker from './component-free/datePicker';
import {getDocuments} from '../../realm/queries/readQueries'
import {Modal} from 'react-bootstrap'

type paginationProps = {
     properties:any[],
     tableHead:any,
     hideEdit?:boolean,
     showDetails?:boolean,
     SchemaName:string,
     addRecord?:()=>void,
     editRecord?:(payload:any)=>void,
     dataField?:string,
     ignoreFilter?:boolean

}

export default function PaginationComponent(props:paginationProps){
   const badgeSize = 10;

   const [show, setShow] = useState(false);

   const [start,setStart] = useState();
   const [end,setEnd] = useState();

   const [holdStart,setHoldStart] = useState(null);
   const [holdEnd,setHoldEnd]  = useState(null);


   const [active,setActive] = useState(1);
   const [pages,setPages]  = useState([1,2,3]);
   const [data,setData] = useState([]);
   const [filteredData,setFilteredRecords] = useState([]);

   let _pageTotal = Math.round(data.length/ badgeSize);



   useEffect(()=>{

      let timer = setInterval(()=>{

        setData(getDocuments(props.SchemaName,props.dataField,start,end,props.ignoreFilter?true:false));
        handleSetActive(active);
      },100)


     return ()=> {
            clearInterval(timer)
     }
   })

  const pos = (index:number)=> {
    let size = (active - 1) * badgeSize;
    let total = size + (index + 1);
    return total
   }

   const handleSetActive = (active:number)=>{

        let copyData = Object.assign([],data);


        let startRead = ((active - 1)  * badgeSize);
        let endRead  = badgeSize;


        let dataView = copyData.splice(startRead,endRead);

        setFilteredRecords(dataView)

        setActive(active);
        handleSetPages(active);
   }


   const handleSetPages = (active)=>{
        let _pages = [];

        for(let i = active; i < (active + 3); i++){
           if(i >= _pageTotal) break;
           _pages.push(i);
        }
        if( active > 2 ){
          _pages.unshift(active -1);
        }
        if(active > 3 ){
          _pages.unshift(active - 2);
        }

        if(active == 1){
          _pages.shift();
        }

        if(active == _pageTotal){
          _pages.pop();
        }
        setPages(_pages);

   }



   const Next = ()=>{
       let increase = active + 1;
       if(increase > _pageTotal) return false;
       handleSetActive(increase);

   }


   const Prev = ()=>{
       let decrease = active - 1;
       if(decrease < 1) return false
       handleSetActive(decrease);
   }

   const searchDoc = ()=>{
       setStart(holdStart);
       setEnd(holdEnd);
       handleSetActive(1);

   }




   const properties = props.properties;

   return(
       <>
              <div className="table-responsive">

                    <table
                      border={0}
                      cellSpacing={0}
                      cellPadding={0}
                      className="table"
                    >
                      <tbody>

                       <tr>
                          <td>
                            <DatePicker
                               disabled={false}
                               placeholder="Select start date"
                               onChange={(value)=> setHoldStart(value)}
                            />
                          </td>
                          <td>
                              <DatePicker
                                  disabled={!holdStart ? true :false}
                                  placeholder="Select end date (Optional)"
                                  onChange={(value)=> setHoldEnd(value)}
                                />
                          </td>
                          <td>
                            <button
                              onClick={()=>searchDoc()}
                              className="btn btn-info"
                            >
                              Search Records
                            </button>
                            &nbsp;
                            {
                              props.addRecord?
                              <button onClick={()=>props.addRecord()}  className="btn btn-success">
                              <i className="fa fa-plus" /> &nbsp; Add Record
                            </button>:null
                            }
                          </td>
                        </tr>
                    </tbody>
                    </table>


              <table
                id="daily_attendance"
                width="100%"
                className="table table-striped table-lightfont display"
              >




                {props.tableHead}
                <tbody>

             {
               filteredData.map((valz:any,index:number)=>
                 <tr>
                      <td>
                        {pos(index)}
                      </td>
                     {
                       properties.map((objKey:any,indexx:any)=>

                         <td>
                           {objKey.isDate?moment(valz[objKey.key]).format("l"):valz[objKey.key]}
                         </td>

                       )
                     }

                    {
                        props.showDetails?
                        <td>
                        <button onClick={()=>setShow(true)} className="btn btn-info btn-small">Details</button>
                      </td>:null
                      }

                      {
                        !props.hideEdit?
                        <td>
                        <button onClick={()=>props.editRecord(valz)} className="btn btn-primary btn-small">Edit</button>
                      </td>:null
                      }


                </tr>

               )
             }
              </tbody>
              {props.tableHead}

            </table>
            </div>



             {data.length > 10 ?
                 <div className="d-flex justify-content-between mt-3">
                 <div></div>
                 <Pagination>

                 <Pagination.First onClick={()=>handleSetActive(1)}/>
                 <Pagination.Prev onClick={()=>Prev()}/>
                 <Pagination.Item active={active == 1}  onClick={()=>handleSetActive(1)}>{1}</Pagination.Item>

                 {
                   active != 1 ?
                   <Pagination.Ellipsis />:null
                 }

                 {
                   pages.map((val)=>
                     <Pagination.Item
                        active={val == active}
                        onClick={()=>handleSetActive(val)}>{val}</Pagination.Item>
                   )
                 }



                   <Pagination.Ellipsis />

                 <Pagination.Item active={active == _pageTotal} onClick={()=>handleSetActive(_pageTotal)}>{_pageTotal}</Pagination.Item>
                 <Pagination.Next onClick={()=>Next()}/>
                 <Pagination.Last  onClick={()=>handleSetActive(_pageTotal)}/>

               </Pagination>
            </div>:null
            }



                 <Modal
                    show={show}
                    onHide={() => setShow(false)}
                    dialogClassName="modal-90w modal-width"
                    aria-labelledby="example-custom-modal-styling-title"
                  >

                    <Modal.Header closeButton>
                      <Modal.Title id="example-custom-modal-styling-title">
                        Custom Modal Styling
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <p>
                        Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
                        commodi aspernatur enim, consectetur. Cumque deleniti temporibus
                        ipsam atque a dolores quisquam quisquam adipisci possimus
                        laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
                        accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
                        reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
                        deleniti rem!
                      </p>
                    </Modal.Body>
                  </Modal>
       </>
   )

}
