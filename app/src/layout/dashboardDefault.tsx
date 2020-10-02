import React from 'react';

import FormStep from '../Forms/Create'
import { Bar,Doughnut } from 'react-chartjs-2';


export default class DashboardDefault extends React.Component{
    state = {
      labels: ['January', 'February', 'March',
           'April', 'May'],
      datasets: [
        {
          label: 'Rainfall',
          backgroundColor: 'rgba(75,192,192,1)',
          borderColor: 'rgba(0,0,0,1)',
          borderWidth: 2,

        }
      ]
    }
    render(){
         return (
            <div className="container">
                       <div
                           style={{borderRadius:5,backgroundPosition:'top'}}
                           className="m-1 bg-white bg-image">
                              <div  style={{backgroundColor:"rgba(255,255,255,0.9)",width:"100%",height:900,borderRadius:5}}>




                              </div>


                       </div>

            </div>
         )
    }
}
