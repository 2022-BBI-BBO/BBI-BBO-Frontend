import { Component } from "react";
import Header from "./Header";
import "../Photo.css";
import FadeIn from "react-fade-in";

class Photo extends Component {
  render() {
    return (
      <div>
        <Header />
        <form>
          <button className="left">⬅️</button>
          <button className="right">➡️</button>
          <div className="num">
            <button className="num1">1</button>&emsp;&emsp;&emsp;
            <button className="num2">2</button>&emsp;&emsp;&emsp;
            <button className="num3">3</button>&emsp;&emsp;&emsp;
            <button className="num4">4</button>&emsp;&emsp;&emsp;
            <button className="num5">5</button>&emsp;&emsp;&emsp;
            <button className="num6">6</button>&emsp;&emsp;&emsp;
            <button className="num7">7</button>&emsp;&emsp;&emsp;
            <button className="num8">8</button>&emsp;&emsp;&emsp;
            <button className="num9">9</button>&emsp;&emsp;&emsp;
            <button className="num10">10</button>
          </div>
          <div className="photo1"></div>
          <div className="photo2"></div>
          <div className="photo3"></div>
          <div className="photo4"></div>

          <br></br>
          <div className="photo5"></div>
          <div className="photo6"></div>
          <div className="photo7"></div>
          <div className="photo8"></div>
        </form>
      </div>
    );
  }
}

export default Photo;