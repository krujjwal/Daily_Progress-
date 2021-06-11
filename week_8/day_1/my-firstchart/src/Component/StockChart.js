import React, { Component } from 'react'
import Mystyle from './StockChart'
import { Line } from "react-chartjs-2";

const data = {
    labels: ["DAY1", 'DAY2', "DAY3", "DAY4", "DAY5", "DAY6",'DAY7','DAY8','DAY9','DAY10','DAY11','DAY12','DAY13','DAY14','DAY15','DAY16','DAY17','DAY18','DAY19','DAY20','DAY21','DAY22','DAY23','DAY24','DAY25','DAY26','DAY27','DAY28','DAY29','DAY30'],
    datasets: [
      {
        label: "JUNE STOCK PRICES",
        data: [33, 53, 85, 41, 44, 65,12,19,12,12,12,12,89,12,90,45,45,26,20,12,2,4,19,91,25,56,11,10,19,20],
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)"
      },
      {
        label: "JULY",
        data: [33, 25, 35, 51, 54, 76,12,19,72,32,12,42,8,12,90,95,45,86,20,2,9,16,1,1,25,56,11,19,92,20],
        fill: true,
        borderColor: "#742774"
      }
    ]
  };

export default class StockChart extends Component {
    render() {
        return (
            <div className={Mystyle.top}>
                <h1>hello</h1>
                <Line data={data} 
                    
                    width={10}
                    height={50}
                    options={{ maintainAspectRatio: false }}
                    />
            </div>
        )
    }
}
