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
          <div className="page">
            <ul className="pagenation">
              <a href="#" class="first">이전</a>&nbsp;&nbsp;
              <a href="#" class="num">1</a>&nbsp;
              <a href="#" class="num">2</a>&nbsp;
              <a href="#" class="num">3</a>&nbsp;
              <a href="#" class="num">4</a>&nbsp;
              <a href="#" class="num">5</a>&nbsp;
              <a href="#" class="num">6</a>&nbsp;
              <a href="#" class="num">7</a>&nbsp;
              <a href="#" class="num">8</a>&nbsp;
              <a href="#" class="num">9</a>&nbsp;&nbsp;
              <a href="#" class="last">다음</a>
            </ul>

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

          <div class="paging-div">
            <ul class="pagination" id="pagination"></ul>
          </div>

        </form>

      </div>
    );
  }
}

export default Photo;