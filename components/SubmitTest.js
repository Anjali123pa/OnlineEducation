import React, { Component } from "react";

import TeacherNavbar from "./TeacherNavbar";


class SubmitTest extends Component {
  
  componentDidMount() {
   
  }

  componentDidUpdate() {
    
  }
  
  submit(){
    this.props.history.push('/teacherdash');
  }

  render() {
    return (
      <div>
        <TeacherNavbar/>
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <form className="form-group">
            <div className="mb-3 row">
                <label htmlFor="questionId" className="col-sm-4 col-form-label">
                  Test Name
                </label>
                <div className="col-sm-5">
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    ref={this.testName}
                    id="questionId"
                  />
                </div>
              </div>
             
              <button
                style = {{"marginLeft":"380px"}}
                className="btn btn-success mr-5"
                onClick={this.submit.bind(this)}
              >
                Submit
              </button>
              
            </form>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default SubmitTest;
