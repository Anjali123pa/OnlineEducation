import axios from 'axios';

const ATTENDANCE_API_BASE_URL = "http://ec2-18-191-253-178.us-east-2.compute.amazonaws.com:8080/api/educationsystem/attendance";

class AttendanceService {

    getAttendance(){
        return axios.get(ATTENDANCE_API_BASE_URL + "/view-all-attendance");
    }

    

   
}

export default new AttendanceService()
