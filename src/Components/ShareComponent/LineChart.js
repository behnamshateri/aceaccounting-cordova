import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';

class LineChart extends Component{
    constructor(props){
        super(props);
        this.state=({
            chartData:{
                labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
                datasets: [{
                    data: [12, 19, 19, 19, 19, 3, 45, 4,15,1,11,1,1,1,1],
                    backgroundColor: 'rgb(255, 99, 132,0.5)',
                    borderColor: 'rgb(255, 99, 132,0.9)',
                }]
            }
        });
    }
    render(){
        return(
            <div className="chart">
                <Line
                    data={this.state.chartData}
                    height={100}
                    options={{
                        maintainAspectRatio: false,
                        legend: {
                            display: false,
                        },
                        scales: {
                            // xAxes: [{
                            //     // type: 'time',
                            //     time: {
                            //         unit: 'month'
                            //     }
                            // }],
                            yAxes: [{
                                display: false
                            }],
                        },


                    }}

                />
            </div>
        )
    }
}

export default LineChart;