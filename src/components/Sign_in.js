import { Component } from "react";
import { Link } from "react-router-dom";
import "../Sign_in.css";
import React from 'react';
class Sign_in extends Component {
  render() {
    return (
      <form>
        <br></br>
        <section className="header">BBIBBO</section>
        <div className="entry">
          <br></br>
          <br></br>
          <input className="inInput" type="text" placeholder="  아이디"></input>
          <br></br>
          <input className="inInput" type="password" placeholder="  비밀번호"></input>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <Link to="/">
          <button className="login">로그인</button>
        </Link>
        <br></br>
        <br></br>
        <div className="tex">
          <Link to="/">
            <button className="back">돌아가기</button> &nbsp;
          </Link>
          <Link to="/Sign_up">
            <button className="new">회원가입</button>
          </Link>
        </div>
      </form>
    );
  }
}

export default Sign_in;
