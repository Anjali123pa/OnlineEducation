import React, { Component } from 'react'
import TeacherService from '../services/TeacherService'
import '../css/ListTeachers.css'
import HmNavbar from './HmNavbar'


class ListTeachers extends Component {
    constructor(props) {
        super(props)

        this.state = {
                teachers: []
        }
    }

    
    componentDidMount(){
        TeacherService.getTeachers().then((res) => {
            console.log(res.data);
            this.setState({ teachers: res.data});
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
                        <div className="teacher-table">
                        <h2 className="text-center">Teacher List</h2>
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Teacher Id</th>
                                    <th> Username</th>
                                    <th> Password</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.teachers.map(
                                        teacher => 
                                        <tr key = {teacher.teacherId}>
                                            <td> {teacher.teacherId}</td>
                                             <td> {teacher.userName}</td>
                                             <td> {teacher.password}</td>

                                               
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                        </div>
                 </div>

            </div>
        )
    }
}

export default ListTeachers
