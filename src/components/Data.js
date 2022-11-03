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
      labels: ['00:00시 ~ 03:00시', '03:00시 ~ 06:00시', '06:00시 ~ 09:00시', '09:00시 ~ 12:00시', '12:00시 ~ 15:00시', '15:00시 ~ 18:00시', '18:00시 ~ 21:00시', '21:00시 ~ 24:00시' ],
      datasets: [
        {
          type: 'bar',
          label: '지난 달',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
          data: [1, 6, 5, 1, 2, 3, 7, 4],
          borderWidth: 2,
        },
        {
          type: 'bar',
          label: '이번 달',
          backgroundColor: 'rgba(53, 162, 235, 0.5)',
          data: [3, 2, 6, 5, 7, 1, 4, 8],
        },
      ],
    };

    return (
        <div>
            <Header />
            <form>
              <img src="./img/chart.png" alt="chart" className="img"></img>
              <h3 className="time">&nbsp;시간대별 흡연 현황</h3>
              <div className="chart"><Line type="line" data={data}/></div>
            </form>
            {/* <Footer /> */}
        </div>
    );
  }
}

export default Data;