import { Component } from "react";
import Header from "./Header";
import "../Main.css";
import FadeIn from "react-fade-in";

class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="Mainscreen">
          <FadeIn>
            <br></br><br></br><br></br><br></br><br></br>
            <br></br><br></br><br></br><br></br><br></br>
            <h1>스마트 흡연 알리미</h1>
            <h1>BBIBBO</h1>
          </FadeIn>
        </div>
      </div>
    );
  }
}

export default Main;
