import { Component } from "react";
import { Link } from "react-router-dom";
import "../Header.css";

class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <nav>
            <ul>
              <li className="logo">
                <Link to='/'>BBIBBO</Link>
              </li>
              <li className="center-li1">
                <Link to='/Data'>DATA</Link>
              </li>
              <li className="center-li2">
                <Link to='/Photo'>PHOTO</Link>
              </li>
              <li className="center-li3">
                <Link to='/Sign_in'>Sign in</Link>
              </li>
              <li className="center-li4">
                <Link to='/Sign_up'>Sign up</Link>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    );
  }
}
export default Header;
