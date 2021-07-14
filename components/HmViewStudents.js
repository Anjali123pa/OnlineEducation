import React, { Component } from 'react'
import StudentService from '../services/StudentService'
import '../css/ListStudents.css'
import HmNavbar from './HmNavbar'
import Cards from './Cards'

class HmViewStudents extends Component {
    constructor(props) {
        super(props)

        this.state = {
                students: []
        }
    }

    
    componentDidMount(){
        StudentService.getStudents().then((res) => {
            console.log(res.data);
            this.setState({ students: res.data});
        });
    }


    render() {
        return (
            <div>
                <HmNavbar/>
                 {/* <h2 className="text-center">Student List</h2> */}
                 {/* <div className = "row">
                    <button className="btn btn-primary"> Add Student</button>
                 </div> */}
                 <br></br>
                 <div className = "row">
                        <div className="student-table">
                        <h2 className="text-center">Student List</h2>
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Student Id</th>
                                    <th> First Name</th>
                                    <th> Middle Name</th>
                                    <th> Last Name</th>
                                    <th> Email Id</th>
                                    <th> Username</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.students.map(
                                        student => 
                                        <tr key = {student.studentId}>
                                              <td> { student.studentId} </td>   
                                             <td> { student.firstName} </td>   
                                             <td> {student.middleName}</td>
                                             <td> {student.lastName}</td>
                                             <td> {student.emailId}</td>
                                             <td> {student.userName}</td>

                                               <td>
                                                 {/* <button className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}}  className="btn btn-danger">Delete </button> */}
                                                 <button style={{marginLeft: "10px"}}  className="btn btn-info">View </button>
                                             </td>  
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table></div>
                 </div>

             {/* <Cards/> */}
            </div>
        )
    }
}

export default HmViewStudents
