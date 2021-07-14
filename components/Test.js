import React, { Component } from "react";
import logo from "../images/test.jpg";
// import avtar from "../images/avatar.svg";
import { Link } from "react-router-dom";
import StudentNavbar from "./StudentNavbar";
import Footer from "./Footer";
import "../css/Test.css";

class Test extends Component {
  constructor(props) {
    super(props);
    this._onButtonClick = this._onButtonClick.bind(this);
  }

  _onButtonClick() {
    window.open("/attempttest");
  }
 
  render() {
    return (
      <div>
        <StudentNavbar/>
        <img src={logo} className="wave" alt="logo" />
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <div className="test-container">
                {/* <img src={avtar} className="avatar" alt="avtar" /> */}
              </div>
              <div className="div-welcome">
              <b><h2 className="h2"> Begin the Quiz</h2></b>
              </div>
              <br />
              <div className="div-instruct">
                <h3 className="h3"> Instructions Before Proceeding </h3> <hr />
                <ol>
                  <li className="li">
                    Please read all the questions carefully.
                  </li>
                  <li className="li">No use of calculators are allowed.</li>
                  <li className="li">
                    Do not minimize the screen or switch to other tabs.
                  </li>
                  <li className="li">
                    Total Duration of examination is 30 minutes.
                  </li>
                  <li className="li">
                    Number of Questions : 10 with <u>1 mark each.</u>
                  </li>
                </ol>
              </div>
              <br />
              <div className="div-btn">
                <Link to="/attempt-test">
                  <button className="float-left btn btn-primary btn-block rounded-pill submit-button">
                    Begin Test
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Test;
