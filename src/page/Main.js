/* eslint-disable jsx-a11y/alt-text */
import Banner from "../components/Banner";
import BannerData from "./banner";
import { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../Main.css";
import FadeIn from "react-fade-in";
import React from "react";

class Main extends Component {
  
  render() {
    console.log(BannerData);
    return (
      <div>
        <div className="header">
          <Header />
        </div>
        <div className="slidescreen">
        <Banner banner={BannerData} />
          <div className="slidescreen-banner"></div>
          <h1>
            <FadeIn>
              스마트 흡연 알리미
              <br />
              BBIBBO
            </FadeIn>
          </h1>
        </div>
        <div className="process">
          <h1>PROCESS</h1><br></br>
          <img src="./img/process.png" className="process--img"></img>
        </div>
        <div className="introduce">
          <div className="intro0">
            <h1>BBI<br></br>BBO?</h1>
          </div>
          <div className="intro1">
            <img src="./img/bell.png" className="bell1"></img>
            <h2>NON_SMOKING</h2>
            <p>무지개떡, BBIBBO의 서비스를 통해<br></br>
            장치에 부착된 센서와 AI 모듈을<br></br>
            활용하여, 금연 구역에 부합하는 NON<br></br>
            -SMOKING Solution을 제공합니다.</p>
          </div>
          <div className="intro2">
          <img src="./img/bell.png" className="bell2"></img>
            <h2>WEB_BASED</h2>
            <p>무지개떡에서 개발한 웹 기반<br></br>
            하드웨어 제품입니다. 이를 통해<br></br>
            금연 구역에서 흡연하는 사람들<br></br>
            에게 경각심을 심어주고, 관리자<br></br>
            들을 편리하게 만들어 줍니다.</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Main;
