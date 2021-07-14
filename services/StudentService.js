import axios from 'axios';

const STUDENT_API_BASE_URL = "http://ec2-18-191-253-178.us-east-2.compute.amazonaws.com:8080/api/educationsystem/student";

class StudentService {

    getStudents(){
        return axios.get(STUDENT_API_BASE_URL + "/view-all-studnets");
    }

    registerStudent(student){
        return axios.post(STUDENT_API_BASE_URL +  "/add-student", student );
    }

    findStudentById(sId){
        return axios.get(STUDENT_API_BASE_URL + '/view-studnet/' + sId);
    }
}

export default new StudentService()
