import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreated from "../action/action";
// import logo from "../Images/quizbg.jpg";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../css/AttemptTest.css";

class AttemptTest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: "",
      answer: "",
    };
  }

  handleChange(opt, ans) {
    this.setState({
      options: opt,
      answer: ans,
    });
  }

  // componentWillMount() {
  //   if (!localStorage.getItem("loggedUser")) {
  //     this.props.history.replace("/student-login");
  //   }
  // }

  submit() {
    let { options, answer } = this.state;
    let score = 0;
    if (options === answer) {
      score = score + 1;
      alert("Correct Answer");
    } else {
      alert("Answered Incorrect");
    }

    console.log(score);
    console.log(this.state.options);
    console.log(this.state.answer);
  }
  componentDidMount() {
    this.props.onGetQuestions();
  }
  submittest(){
    this.props.history.push('/studentdash');
  }

  render() {
    let questionList = this.props.questionList.map((ques, index) => {
      return (
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <div className="test-container"></div>
        <tr key={index}>
          <h1 className="h5">
            {" "}
            <td>{ques.questionId}</td>
            <td>{ques.question}</td>{" "}
          </h1>
          <ul>
            <li
              className="text-li"
              onClick={this.handleChange.bind(
                this,
                ques.option1,
                ques.correctAnswer
              )}
            >
              {ques.option1}
            </li>
            <li
              className="text-li"
              onClick={this.handleChange.bind(
                this,
                ques.option2,
                ques.correctAnswer
              )}
            >
              {ques.option2}
            </li>
            <li
              className="text-li"
              onClick={this.handleChange.bind(
                this,
                ques.option3,
                ques.correctAnswer
              )}
            >
              {ques.option3}{" "}
            </li>
            <li
              className="text-li"
              onClick={this.handleChange.bind(
                this,
                ques.option4,
                ques.correctAnswer
              )}
            >
              {ques.option4}
            </li>
            <div className="div-btn">
              <button
                onClick={this.submit.bind(this)}
                className="float-left btn btn-primary btn-block rounded-pill submit-button"
              >
                Check Answer
              </button>
            </div>
          </ul>
        </tr>
        </div>
        </div>
        </div>
      );
    });
    return (
      <div className="bg">
        {/* <img src={logo} className="wave" alt="logo" /> */}
        <div className="Content">
          <table className="table table-stripped table-light">
            <tbody>{questionList}</tbody>
          </table>
          <button
                className="btn btn-success mr-5"
                style={{"marginLeft":"600px"}}
                onClick={this.submittest.bind(this)}
              >
                Submit
              </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    questionList: state.questionList,
    returnedMessage: state.returnedMessage,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onGetQuestions: () => {
      return dispatch(actionCreated.getAllQuestions());
    },
    clearState: () => {
      return dispatch(actionCreated.clearState());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AttemptTest);
