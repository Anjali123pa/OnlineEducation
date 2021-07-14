import React, { Component } from 'react'
import AttendanceService from '../services/AttendanceService'
import '../css/Attendance.css'
import TeacherNavbar from './TeacherNavbar'
import Cards from './Cards'

class Attendance extends Component {
    constructor(props) {
        super(props)

        this.state = {
                attendance: []
        }
    }

    
    componentDidMount(){
        AttendanceService.getAttendance().then((res) => {
            console.log(res.data);
            this.setState({ attendance: res.data});
        });
    }


    render() {
        return (
            <div>
                <TeacherNavbar/>
                 {/* <h2 className="text-center">Student List</h2> */}
                 {/* <div className = "row">
                    <button className="btn btn-primary"> Add Student</button>
                 </div> */}
                 <br></br>
                 <div className = "row">
                        <div className="attendance-table">
                        <h2 className="text-center">Attendance</h2>
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Attendance Id</th>
                                    <th>Student Name </th>
                                    <th> Date </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.attendance.map(
                                        attendance => 
                                        <tr key = {attendance.attendanceId}>
                                              <td> {attendance.attendanceId} </td>   
                                             <td> {attendance.studentUsername} </td>   
                                             <td> {attendance.date}</td>

                                             
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

export default Attendance
