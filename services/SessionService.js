import axios from 'axios';

const SESSION_API_BASE_URL = "http://ec2-18-191-253-178.us-east-2.compute.amazonaws.com:8080/api/educationsystem/addSession";

class SessionService {
    
    getAllSession(){
        console.log("view Session");
        return axios.get(SESSION_API_BASE_URL);
    }

    findSessionById(sId){
        return axios.get(SESSION_API_BASE_URL + '/' + sId);
    }

    createSession(sessionSchedule)
    {
        return axios.post(SESSION_API_BASE_URL, sessionSchedule);
    }

    updateSession(sessionSchedule, sessionId)
    {
        return axios.put(SESSION_API_BASE_URL + '/' + sessionId, sessionSchedule)
    }

    deleteSession(sessionId){
        return axios.delete(SESSION_API_BASE_URL + '/' + sessionId)
    }
}

export default new SessionService()