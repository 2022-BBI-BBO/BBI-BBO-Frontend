import { Component } from "react";
import { Link } from "react-router-dom";
import "../Sign_up.css";
import React from 'react';
class Sign_up extends Component {
  render() {
    return (
      <div>
        <form>
          <section className="header">BBIBBO</section>
          <div className="entry">
            <br></br>
            <input
              className="upInput"
              type="text"
              placeholder="  아이디"
            ></input>
            <br></br>
            <input
              className="upInput"
              type="password"
              placeholder="  비밀번호"
            ></input>
            <br></br>
            <input
              className="upInput"
              type="password"
              placeholder="  비밀번호 확인"
            ></input>
            <br></br>
            <input className="upInput" type="text" placeholder="  이름"></input>
          </div>
          <br></br>
          <br></br>
          <Link to="/Sign_in">
            <button className="login">회원가입</button>
          </Link>
          <br></br>
          <br></br>
          <div className="text">
            <span className="ask">&nbsp;&nbsp;이미 계정이 있으세요?</span>{" "}
            <Link to="/Sign_in">
              <span className="log">로그인</span>
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default Sign_up;
