import React, { Component } from 'react'
import StudentNavbar from './StudentNavbar'
import '../css/ViewProgress.css'
import ProgressService from '../services/ProgressService'

class ViewProgress extends Component {
    constructor(props) {
        super(props)

        this.state = {
            score: 0,
            tests: []
        }


    }



    componentDidMount() {
        ProgressService.getTestsForStudent(5).then((res) => {
            console.log(res.data);
            this.setState({ tests: res.data });
        });
    }


    render() {

        return (
            <div>
                <StudentNavbar />
                
                {/* <div className="progressBar"> 
                     <h2 className="text-center">Progress</h2> 
                     <div class="progress">
                        {this.state.tests.map(
                            test =>
                                
                               
                                 <div class="progress-bar bg-success" role="progressbar" style={{ width: "{test.score}" }} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                            )
                            

                        }
                        <div class="progress-bar" role="progressbar" style={{ width: "15%" }} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                        <div class="progress-bar bg-success" role="progressbar" style={{ width: "30%" }} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                        <div class="progress-bar bg-info" role="progressbar" style={{ width: "20%" }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>  
                    </div> */}

                <br></br>
                 <div className = "row">
                        <div className="progress-table">
                        <h2 className="text-center">Progress</h2>
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Test Name</th>
                                    <th> Score</th>
                                    <th> Total Score</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.tests.map(
                                        test => 
                                        <tr key = {test.testId}>
                                              <td> {test.t_name} </td>   
                                             <td> {test.score} </td>   
                                             <td> {test.totalScore}</td>
                                               {/* <td>
                                                  <button className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}}  className="btn btn-danger">Delete </button> 
                                                 <button style={{marginLeft: "10px"}}  className="btn btn-info">View </button>
                                             </td>   */}
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table> 
                        </div> 
                 </div>

                </div>
            // </div>
        )
    }
}

export default ViewProgress
