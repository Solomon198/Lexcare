import React from 'react';
import {Polar} from 'react-chartjs-2';
import {getStatistics} from '../../realm/queries/readQueries'
import  DatePicker from '../components/component-free/datePicker';

const year = new Date().getFullYear();



const options = {
  maintainAspectRatio: false,
  responsive: true,
  legend: {
    position: 'left',
    labels: {
      boxWidth: 50,
    }
  }
}


export default class DashboardDefault extends React.Component{
    state = {
      data : {
        datasets: [{
          data:Array(12).fill(0),
          backgroundColor: [
            '#FF6384',
            '#4BC0C0',
            '#FFCE56',
            '#E7E9ED',
            '#FF6384',
            '#4BC0C0',
            '#FFCE56',
            '#E7E9ED',
            '#FF6384',
            '#4BC0C0',
            '#FFCE56',
            '#36A2EB'
          ],
          label: 'Daily Attendance Records' // for legend
        }],
        labels: [
          'January',
          'Feburary',
          'March',
          'April',
          'May',
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December"
        ]
      }

    }






    componentDidMount(){
      let data = this.state.data;

        window.scrollTo(0, 0)


      data.datasets[0].data = getStatistics();
      this.setState({data:data})
    }
    render(){
         return (
            <div className="container">

                       <div
                           style={{borderRadius:5,backgroundPosition:'top'}}
                           className="mx-1 mb-1 bg-white bg-image">
                              <div  style={{backgroundColor:"rgba(255,255,255,0.9)",width:"100%",height:900,borderRadius:5}}>
                                    <div className="element-wrapper m-2 ">
                                     <h6 className="element-header">Anual Daily Attendance Record ({year})</h6>
                                     {/* <span style={{fontWeight:'bold'}} className="text-primary">Year</span><br/>

                                     <DatePicker
                                       onChange={(date)=>""}

                                     /> */}

                                    </div>
                                      <div style={{paddingTop:50,height:600,width:"100%",marginTop:-100}}>
                                          <Polar
                                          options={options}
                                          data={this.state.data}

                                        />
                                      </div>


                              </div>


                       </div>

            </div>
         )
    }
}
