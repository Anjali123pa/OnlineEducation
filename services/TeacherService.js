import axios from 'axios';

const TEACHER_API_BASE_URL = "http://ec2-18-191-253-178.us-east-2.compute.amazonaws.com:8080/api/educationsystem/teacher";

class TeacherService {

    getTeachers(){
        return axios.get(TEACHER_API_BASE_URL + "/view-all-teachers");
    }

   
}

export default new TeacherService()
