import React, { Component } from 'react'
import SessionService from '../services/SessionService';

class UpdateSessionComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            sessionId: this.props.match.params.sessionId,
            coursename: '',
            stime: '',
            //emailId: ''
        }
        this.changeCoursenameHandler = this.changeCoursenameHandler.bind(this);
        this.changeStimeHandler = this.changeStimeHandler.bind(this);
        this.updateSession = this.updateSession.bind(this);
    }

    componentDidMount(){
        SessionService.findSessionById(this.state.sessionId).then( (res) =>{
            let sessionSchedule = res.data;
            this.setState({coursename: sessionSchedule.coursename,
                stime: sessionSchedule.stime,
                //emailId : employee.emailId
            });
        });
    }

    updateSession = (e) => {
        e.preventDefault();
        let sessionSchedule = {coursename: this.state.coursename, stime: this.state.stime};
        console.log('sessionSchedule => ' + JSON.stringify(sessionSchedule));
        console.log('sessionId => ' + JSON.stringify(this.state.sessionId));
        SessionService.updateSession(sessionSchedule, this.state.sessionId).then( res => {
            this.props.history.push('/session');
        });
    }
    
    changeCoursenameHandler= (event) => {
        this.setState({coursename: event.target.value});
    }

    changeStimeHandler= (event) => {
        this.setState({stime: event.target.value});
    }

    

    cancel(){
        this.props.history.push('/session');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Session</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Course Name: </label>
                                            <input placeholder="course Name" name="coursename" className="form-control" 
                                                value={this.state.coursename} onChange={this.changeCoursenameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Session Time: </label>
                                            <input placeholder="Session Time" name="stime" className="form-control" 
                                                value={this.state.stime} onChange={this.changeStimeHandler}/>
                                        </div>
                                        
                                        <button className="btn btn-success" onClick={this.updateSession}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default UpdateSessionComponent
