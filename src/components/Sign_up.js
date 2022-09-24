import { Component } from "react";
import { Link } from "react-router-dom";
import "../Sign_up.css";

class Sign_up extends Component {
  render() {
    return (
      <div>
        <form>
          <section className="header">BBIBBO</section>
          <div className="entry">
            <br></br>
            <input type="text" placeholder="  아이디"></input>
            <br></br>
            <input type="text" placeholder="  비밀번호"></input>
            <br></br>
            <input type="text" placeholder="  비밀번호 확인"></input>
            <br></br>
            <input type="text" placeholder="  이름"></input>
          </div>
          <br></br>
          <br></br>
          <Link to="/Sign_in"><button className="login">회원가입</button></Link>
          <br></br>
          <br></br>
          <button className="ask">&nbsp;&nbsp;이미 계정이 있으세요?</button> &nbsp;
          &nbsp;
          <Link to="/Sign_in">
            <button className="log">로그인</button>
          </Link>
        </form>
      </div>
    );
  }
}

export default Sign_up;
