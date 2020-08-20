import React from 'react';

import FormStep from '../Forms/Create'
import { Chart } from "react-google-charts";


export default class DashboardDefault extends React.Component{
    render(){
         return (
            <div class="container">
                       <div class="row bg-white py-5">

                           <div className="ml-5">
                              <Chart
                                    width={1000}
                                    height={350}
                                    chartType="Calendar"
                                    loader={<div>Loading Chart</div>}
                                    data={[
                                      [{ type: 'date', id: 'Date' }, { type: 'number', id: 'Won/Loss' }],
                                      [new Date(2019, 3, 13), 37032],
                                      [new Date(2019, 3, 14), 38024],
                                      [new Date(2019, 3, 15), 38024],
                                      [new Date(2019, 3, 16), 38108],
                                      [new Date(2019, 3, 17), 38229],
                                      [new Date(2020, 1, 4), 38177],
                                      [new Date(2020, 1, 5), 38705],
                                      [new Date(2020, 1, 12), 38210],
                                      [new Date(2020, 1, 13), 38029],
                                      [new Date(2020, 1, 19), 38823],
                                      [new Date(2020, 1, 23), 38345],
                                      [new Date(2020, 1, 24), 38436],
                                      [new Date(2020, 2, 10), 38447],
                                    ]}
                                    options={{
                                      title: 'Annual PHC Attendance',
                                    }}
                                    rootProps={{ 'data-testid': '1' }}
                             />
                              </div>

                            <div class="col-md-6">

                            <Chart
                                  width={'500px'}
                                  height={'300px'}
                                  chartType="PieChart"
                                  loader={<div>Loading Chart</div>}
                                  data={[
                                    ['Task', 'Hours per Day'],
                                    ['Immunization', 11],
                                    ['Atenatal', 2],
                                    ['Out patient', 2],
                                    ['In patient', 2],
                                    ['Nutrition', 7],
                                  ]}
                                  options={{
                                    title: 'Daily Attendance',
                                    // Just add this option
                                    is3D: true,
                                  }}
                                  rootProps={{ 'data-testid': '2' }}
                                />




                            </div>
                            <div class="col-md-6">
                            <Chart
                              width={'500px'}
                              height={'300px'}
                              chartType="Bar"
                              loader={<div>Loading Chart</div>}
                              data={[
                                ['Year', 'DailyAtttendance', 'Visits', 'Average'],
                                ['2014', 1000, 400, 200],
                                ['2015', 1170, 460, 250],
                                ['2016', 660, 1120, 300],
                                ['2017', 1030, 540, 350],
                              ]}
                              options={{
                                // Material design options
                                chart: {
                                  title: 'PHC Analaytics',
                                  subtitle: 'Summary of all operations',
                                },
                              }}
                              // For tests
                              rootProps={{ 'data-testid': '2' }}
                            />
                            </div>
                       </div>

                       <div className="bg-white container">

                              <Chart
                                  width={'100%'}
                                  height={'400px'}
                                  chartType="Gantt"
                                  loader={<div>Loading Chart</div>}
                                  data={[
                                    [
                                      { type: 'string', label: 'Task ID' },
                                      { type: 'string', label: 'Task Name' },
                                      { type: 'date', label: 'Start Date' },
                                      { type: 'date', label: 'End Date' },
                                      { type: 'number', label: 'Duration' },
                                      { type: 'number', label: 'Percent Complete' },
                                      { type: 'string', label: 'Dependencies' },
                                    ],
                                    [
                                      'Research',
                                      'Find sources',
                                      new Date(2015, 0, 1),
                                      new Date(2015, 0, 5),
                                      null,
                                      100,
                                      null,
                                    ],
                                    [
                                      'Write',
                                      'Write paper',
                                      null,
                                      new Date(2015, 0, 9),
                                      3 * 24 * 60 * 60 * 1000,
                                      25,
                                      'Research,Outline',
                                    ],
                                    [
                                      'Cite',
                                      'Create bibliography',
                                      null,
                                      new Date(2015, 0, 7),
                                      1 * 24 * 60 * 60 * 1000,
                                      20,
                                      'Research',
                                    ],
                                    [
                                      'Complete',
                                      'Hand in paper',
                                      null,
                                      new Date(2015, 0, 10),
                                      1 * 24 * 60 * 60 * 1000,
                                      0,
                                      'Cite,Write',
                                    ],
                                    [
                                      'Outline',
                                      'Outline paper',
                                      null,
                                      new Date(2015, 0, 6),
                                      1 * 24 * 60 * 60 * 1000,
                                      100,
                                      'Research',
                                    ],
                                  ]}
                                  rootProps={{ 'data-testid': '1' }}
                                />




                       </div>

            </div>
         )
    }
}
