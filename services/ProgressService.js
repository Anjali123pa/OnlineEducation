import axios from 'axios';

const PROGRESS_API_BASE_URL = "http://ec2-18-191-253-178.us-east-2.compute.amazonaws.com:8080/api/educationsystem/student";

class ProgressService {

    getTestsForStudent(studentId){
        return axios.get(PROGRESS_API_BASE_URL + "/view-tests/" + studentId);
        
    }

   
}

export default new ProgressService()
