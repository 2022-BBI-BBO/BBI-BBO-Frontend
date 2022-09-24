/* eslint-disable jsx-a11y/alt-text */
import Banner from "../components/Banner";
import BannerData from "./banner.json";
import { Component, useState } from "react";
import Header from "../components/Header";
import "../Main.css";
import FadeIn from "react-fade-in";

class Main extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <Header />
        </div>
        <div className="slidescreen">
          <Banner
              banner={BannerData.banners}
          />
          <h1>
            <FadeIn>
              스마트 흡연 알리미
              <br />
              BBIBBO
            </FadeIn>
          </h1>
        </div>
        <div className="process">
          <h1>PROCESS</h1>
          <img src="./img/process.png" className="proc"></img>
        </div>
        <div className="intro">
          <h1>
            BBI<br></br>BBO?
          </h1>
        </div>
      </div>
    );
  }
}

export default Main;