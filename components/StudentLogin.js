import React, { Component } from "react";
import "../css/Login.css";
import avatar from "../images/avatar.svg";
import wave from "../images/bg4.png";
import login from "../images/login.svg";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from './Navbar.js';

class StudentLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      response: "",
      error: "",
    };
    this.submitform = this.submitform.bind(this);
  }

  inputEvent = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({ [name]: [value] });
  };

  submitform = (e) => {
    e.preventDefault();
    const userName = this.state.username;
    const password = this.state.password;
    axios
      .get(
        `http://ec2-18-191-253-178.us-east-2.compute.amazonaws.com:8080/api/educationsystem/student/student-login?userName=${userName}&password=${password}`
      )
      .then((response) => {
        let user = {
          username: response.data.userName,
          email: response.data.emailId,
          studentId: response.data.studentId,
        };

        if (response.data === "Invalid username and password!") {
          this.setState({ error: response.data });
        } else if (response.data.firstName) {
          localStorage.setItem("loggedUser", JSON.stringify(user));
          this.props.history.replace("/studentdash");
        }
        this.setState({ response: response.data });
      })
      .catch((error) => {
        this.setState({ error: error.response.data });
      });

    this.setState({ username: "", password: "" });
  };

  componentWillMount() {
    if (localStorage.getItem("loggedUser")) {
     // this.props.history.replace("/");
    }
  }
  componentDidMount() {
    document.title = "Student Login";
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="container-fluid">
          <img className="wave" src={wave} alt="Wave" />
          <div className="row">
            <div className="col">
              <img src={login} className="bg" alt="background img" />
            </div>
            <div className="col" style={{ marginTop: "80px" }}>
              <div className="div-avatar">
                {/* <img src={avatar} className="avatar" alt="avatar" /> */}
              </div>

              <div className="div-welcome">Welcome</div>
              <hr />
              {this.state.response.message ? (
                <div class="alert alert-danger" role="alert">
                  {this.state.response.message}
                </div>
              ) : null}
              {this.state.error ? (
                <div class="alert alert-danger" role="alert">
                  {this.state.error}
                </div>
              ) : null}

              <div className="login-text">One Of Us?</div>
              <div className="form-container ">
                <form
                  className="row g-3"
                  onSubmit={this.submitform}
                  method="POST"
                >
                  <div className="col-md-12 container-responsive">
                    <div className="form-group has-username">
                      <input
                        type="text"
                        placeholder="Username"
                        className="form-control"
                        value={this.state.username}
                        onChange={this.inputEvent}
                        name="username"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group has-password">
                      <input
                        type="password"
                        placeholder="Password"
                        className="form-control"
                        value={this.state.password}
                        onChange={this.inputEvent}
                        name="password"
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="div-btn">
                      <button
                        type="submit"
                        className="btn btn-primary btn-block rounded-pill btn-responsive"
                      >
                        Sign In
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col">
                <div className="div-text">
                  <Link to="/registration" style={{ textDecoration: "none" }}>
                    <h4
                      style={{ textAlign: "center", marginRight: "220px" }}
                      className="new-user"
                    >
                      New User?, Please sign up here
                    </h4>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default StudentLogin;
