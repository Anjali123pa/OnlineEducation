import React, { Component } from 'react'
import SessionService from '../services/SessionService';

class CreateSessionComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            // step 2
            sessionId: this.props.match.params.sessionId,
            coursename: '',
             stime: ''
           // emailId: ''
        }
        
        this.changeCoursenameHandler = this.changeCoursenameHandler.bind(this);
        this.changeStimeHandler = this.changeStimeHandler.bind(this);
        this.saveOrUpdateSession = this.saveOrUpdateSession.bind(this);
    }

    componentDidMount() {
        if (this.state.sessionId === '_add') {
                return
        } else {
            SessionService.findSessionById(this.state.sessionId).then((res) => {
                let sessionSchedule = res.data;
                this.setState({
                    userName:sessionSchedule.coursename,
                    stime: sessionSchedule.stime,
                   // quantity: sessionSchedule.quantity,
                    //quotePrice: sessionSchedule.quotePrice,
                });
            });
        }
    }

    saveOrUpdateSession = (e) => {
        e.preventDefault();
        let sessionSchedule = { coursename: this.state.coursename,stime: this.state.stime }; //product: this.state.product
        console.log('sessionSchedule => ' + JSON.stringify(sessionSchedule));
        
        if(this.state.sessionId === '_add'){
            SessionService.createSession(sessionSchedule).then(res =>{
                this.props.history.push('/session');
            });
        }else{
            SessionService.updateSession(sessionSchedule, this.state.sessionId).then( res => {
                this.props.history.push('/session');
            });
        }
        
    }    

    changeCoursenameHandler = (event) => {
        this.setState({ coursename: event.target.value });
    }

    changeStimeHandler = (event) => {
        this.setState({ stime: event.target.value });
    }
/*
    addSession() {
        this.props.history.push('/add-session/_add');
    }
*/
    cancel() {
        this.props.history.push('/session');
    }

    getTitle(){
        if(this.state.sessionId === '_add'){
            return <h3 className="text-center">Add Session</h3>
        }else{
            return <h3 className="text-center">Update Session</h3>
        }
    }
   
    /*
    componentDidMount() {
        fetch('http://localhost:8081/api/v1/addStudent')
            .then(response => response.json())
            .then(student => this.setState({ student: student }))
    }
    */
    render() {
        return (
            <div>
                <br></br>
                <div className="container">
                    <div className="row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
        
                            <div className="card-body">
                            <form>
                                        <div className = "form-group">
                                            <label> Course Name: </label>
                                            <input placeholder="Course Name" name="coursename" className="form-control" 
                                                value={this.state.coursename} onChange={this.changeCoursenameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Session Time: </label>
                                            <input placeholder="Session Time" name="stime" className="form-control" 
                                                value={this.state.stime} onChange={this.changeStimeHandler}/>
                                        </div>
                                        
                                        <button className="btn btn-success" onClick={this.saveOrUpdateSession}>Save</button>
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
export default CreateSessionComponent

