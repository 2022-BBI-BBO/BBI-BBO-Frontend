import { Component } from "react";
import { Link } from "react-router-dom";
import "../Data.css";
import Header from "./Header";

class Data extends Component {
  render() {
    return (
        <div>
            <Header />
            <form>
              <img src="./img/chart.png" alt="chart" className="img"></img>
              <h3 className="time">&nbsp;시간대별 흡연 현황</h3>
            </form>  
        </div>
    );
  }
}

export default Data;
