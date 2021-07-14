import React, { Component } from 'react'
import SessionService from '../services/SessionService'
import "../css/ViewSession.css";

class ViewSessionComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            sessionId: this.props.match.params.sessionId,
            session: {}
        }
    }

    componentDidMount(){
        SessionService.findSessionById(this.state.sessionId).then( res => {
            this.setState({session: res.data});
        })
    }

    cancel() {
        this.props.history.push('/session');
    }

    render() {
        return (
            <div className="box">
                <br></br>
                <div className = "card col-md-6 offset-md-3" style={{ height: '40vh', borderRadius: '20px' }}>
                    <h3 className = "text-center"> View Session Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label className="viewLabel">  Session Course Name: </label>
                            <div style={{ "marginTop": "3px", "marginLeft": "5px" }}> { this.state.session.coursename }</div>
                        </div>
                        <div className = "row">
                            <label className="viewLabel"> Session Time: </label>
                            <div style={{ "marginTop": "3px", "marginLeft": "5px" }}> { this.state.session.stime }</div>
                        </div>
                        <div className="cancel"> <button className="btn btn-danger" onClick={this.cancel.bind(this)}  >Back</button></div>
                     </div>

                </div>
            </div>
        )
    }


}
export default ViewSessionComponent