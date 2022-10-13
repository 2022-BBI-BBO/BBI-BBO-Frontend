import { Component } from "react";
import { Link } from "react-router-dom";
import "../Data.css";
import Header from "./Header";
import Footer from "./Footer";
import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import { SassColor } from "sass";
import React from 'react';


class Data extends Component {
  render() {

    let data =  {
      labels: ['7-8', '8-9', '9-10', '10-11', '11-12', '17-18', '18-19', '19-20' ],
      datasets: [
        {
          type: 'bar',
          label: '탑승인원',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
          data: [1, 2, 3, 4, 5, 6, 7, 8],
          borderWidth: 2,
        },
        {
          type: 'bar',
          label: '하차인원',
          backgroundColor: 'rgba(53, 162, 235, 0.5)',
          data: [8, 7, 6, 5, 4, 3, 2, 1],
        },
      ],
    };

    return (
        <div>
            <Header />
            <form>
              <img src="./img/chart.png" alt="chart" className="img"></img>
              <h3 className="time">&nbsp;시간대별 흡연 현황</h3>
              <Line type="line" data={data} style={{width: '100px', height:'50px'}}/>
            </form>
            {/* <Footer /> */}
        </div>
    );
  }
}

export default Data;
