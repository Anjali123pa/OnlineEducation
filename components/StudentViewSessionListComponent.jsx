import React, { Component } from 'react'
import SessionService from '../services/SessionService'
import "../css/ListSession.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUserGraduate, faUserCog, faTrashAlt,faEdit,faPhone, faEnvelope, faLock, faUndo, faUserPlus, faUser, faLaptopHouse, faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import StudentNavbar from './StudentNavbar';


class StudentViewSessionListComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                session: []
        }
        this.addSession = this.addSession.bind(this);
        this.editSession = this.editSession.bind(this);
        this.deleteSession = this.deleteSession.bind(this);
    }
    
  deleteSession(sessionId) {
      SessionService.deleteSession(sessionId).then(res =>{
          this.setState({session:this.state.session.filter(sessionSchedule => sessionSchedule.sessionId !==sessionId)});
      });
  }

  viewSession(sessionId) {
    this.props.history.push(`/view-session/${sessionId}`);
}

editSession(sessionId) {
    this.props.history.push(`/add-session/${sessionId}`);
}

    componentDidMount(){
        
          SessionService.getAllSession().then((res) => {
            console.log("service ");
          this.setState({ session: res.data });
      
        });
    }

    addSession(){
        this.props.history.push('/add-session/_add');
}
    /*
    componentDidMount(){
        //PurchaseService.getPurchase().then((res) => {
          //  this.setState({ purchase: res.data});
          SessionService.getAllTeacher().then((res) => {
            console.log("service ");
          this.setState({ session: res.data });
      
        });
    }
    */

    
    addSession() {
        this.props.history.push('/add-session/_add');
    }

    
    redirect = () => {
    window.location.href = 'http://ec2-18-191-253-178.us-east-2.compute.amazonaws.com:8080';
    // maybe can add spinner while loading
    return null;
  }
    
    
    render(){
        return(
            <div>
            <StudentNavbar/>
            <div className="body_wrap ">
            <div>
            <h2 className="box_title">Session List (Timetable)</h2>
            <div className = "row">
               {/* <button className="btn btn-primary" onClick={this.addSession}> Add Session</button> */}
               <button className="btn btn-primary" onClick={this.redirect}> Go to chat</button>
            </div>
            <br></br>
            <div className = "row">
                   <table className = "table table-striped table-bordered">

                       <thead>
                           <tr>
                               <th> Session Course Name</th>
                               <th> Session Time</th>
                              
                               <th> Actions</th>
                           </tr>
                       </thead>
                      <tbody>
                           {
                               this.state.session.map(
                                   student => 
                                   <tr key = {student.sessionId}>
                                        <td> { student.coursename} </td>   
                                        <td> {student.stime}</td>
                                        
                                        <td>
                                            {/* <button onClick={ () => this.editSession(student.sessionId)} className="btn btn-info">Update </button>
                                            <button style={{marginLeft: "10px"}} onClick={ () => this.deleteSession(student.sessionId)} className="btn btn-danger">Delete </button> */}
                                            <button style={{marginLeft: "10px"}} onClick={ () => this.viewSession(student.sessionId)} className="btn btn-info">View </button>
                                        </td>
                                   </tr>
                               )
                           }
                        </tbody> 
                   </table>

            </div>

       </div>
       </div>
       </div>
        )
        

    }


}
export default StudentViewSessionListComponent
