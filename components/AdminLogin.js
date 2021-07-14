import React, { Component } from "react";
import "../css/AdminLogin.css";
import adminbg from "../images/adminbg.svg";
import background from "../images/bg3.png";
import logo from "../images/logoonly.png";
import axios from "axios";
import  Navbar  from "./Navbar";
import * as actionCreators from "../action/action";
import { connect } from "react-redux";

class AdminLogin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      response: "",
      error: "",
    };
    this.submitData = this.submitData.bind(this);
  }

  inputEvent = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({ [name]: [value] });
  };

  submitData = (e) => {
    e.preventDefault();
    const username = this.state.username;
    const password = this.state.password;

    axios
      .get(
        `http://ec2-18-191-253-178.us-east-2.compute.amazonaws.com:8080/api/educationsystem/hm/hm-login?HMUsername=${username}&HMPassword=${password}`
      )
      .then((response) => {

        let admin = {
          username: response.data.userName,
          adminId: response.data.adminId,
        };
        localStorage.setItem("loggedAdmin", JSON.stringify(admin));
        this.props.history.replace("/hmdash");
        this.setState({ response: response.data });
      })
      .catch((error) => {
        console.log(error.data);
        this.setState({ error: error.response.data });
      });
    this.setState({ username: "", password: "" });
  };

  componentWillMount() {
    if (localStorage.getItem("loggedAdmin")) {
     // this.props.history.replace("/admin-home");
    }
  }

  componentDidMount() {
    document.title = "Admin Login";
    this.props.clearState();
  }

  render() {
    return (
      <div>
        <Navbar />
        <img className="wave" src={background} alt="" />
        <div className="container-fluid" style={{ marginTop: "65px" }}>
          <div className="row">
            <div className="col">
              <img src={adminbg} className="bg" alt="Admin background" />
            </div>
            <div className="col">
              <div className="div-avatar">
                {/* <img src={logo} className="avatar" alt="Avatar" style = {{marginBottom:"100px"}} /> */}
              </div>
              <div className="div-welcome">Admin Panel</div>
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
              <div className="login-text">Login</div>
              <div className="form-container">
                <form
                  className="row g-3"
                  onSubmit={this.submitData}
                  method="POST"
                >
                  <div className="col-md-12">
                    <div className="form-group has-username">
                      {/* <span className="fa fa-user form-control-username"></span> */}
                      <input
                        type="text"
                        placeholder="Username"
                        className="form-control"
                        name="username"
                        value={this.state.username}
                        onChange={this.inputEvent}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group has-password">
                      {/* <span className="fa fa-lock form-control-password"></span> */}
                      <input
                        type="password"
                        placeholder="Password"
                        className="form-control"
                        name="password"
                        value={this.state.password}
                        onChange={this.inputEvent}
                        required
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="div-btn">
                      <button
                        type="submit"
                        className="btn btn-primary btn-block rounded-pill"
                      >
                        Log In
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    studentList: state.studentDetailsList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearState: () => {
      return dispatch(actionCreators.clearState());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminLogin);
