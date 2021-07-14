import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './components/Home';
import ListStudents from './components/ListStudents';
import ListTeachers from './components/ListTeachers';
import ViewProgress from './components/ViewProgress';
import StudentRegistration from './components/StudentRegistration';
import StudentLogin from './components/StudentLogin';
import AdminLogin from './components/AdminLogin';
import TeacherLogin from './components/TeacherLogin';
import StudentHome from './components/StudentHome';
import TeacherHome from './components/TeacherHome';
import Test from './components/Test';
import AttemptTest from './components/AttemptTest';
import TestQuestion from './components/TestQuestion';
import AddTest from './components/AddTest';
import Attendance from './components/Attendance';
import ListSessionComponent from './components/ListSessionComponent';
import HmHome from './components/HmHome';
import StudentViewSessionListComponent from './components/StudentViewSessionListComponent';
import HmViewSessionListComponent from './components/HmViewSessionListComponent';
import HmViewStudents from './components/HmViewStudents';
import Services from './components/Services';
import Products from './components/Products';
import Organics from './components/Organics';
import SignUp from './components/SignUp';
import Shiftings from './components/Shiftings';
import SubmitTest from './components/SubmitTest';
import CreateSessionComponent from './components/CreateSessionComponent';
import ViewSessionComponent from './components/ViewSessionComponent';
import UpdateSessionComponent from './components/UpdateSessionComponent';

function App() {
  return (
    <div>
      <Router>

        <Route path='/' exact component={Home} />
        <Route path='/student-list' exact component={ListStudents} />
        <Route path='/hm-student-list' exact component={HmViewStudents} />
        <Route path='/teacher-list' exact component={ListTeachers} />
        <Route path='/progress' exact component={ViewProgress} />
        <Route path='/registration' exact component={StudentRegistration} />
        <Route path='/student-login' exact component={StudentLogin} />
        <Route path='/admin-login' exact component={AdminLogin} />
        <Route path='/teacher-login' exact component={TeacherLogin} />
        <Route path='/studentdash' component={StudentHome} />
        <Route path='/teacherdash' component={TeacherHome} />
        <Route path='/hmdash' component={HmHome} />
        <Route exact path="/add-test" component={AddTest} />
        <Route exact path="/submit" component={SubmitTest} />
        <Route exact path="/attempt-test" component={AttemptTest} />
        <Route exact path="/test" component={Test} />
        <Route exact path="/test-question" component={TestQuestion} />
        <Route exact path="/attendance" component={Attendance} />
        <Route exact path="/session" component={ListSessionComponent} />
        <Route exact path="/show-session" component={StudentViewSessionListComponent} />
        <Route exact path="/hm-show-session" component={HmViewSessionListComponent} />
        <Route path='/services' component={Services} />
        <Route path='/products' component={Products} />
        <Route path='/organics' component={Organics} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/shiftings' component={Shiftings} />
        <Route path = "/add-session/:sessionId" component = {CreateSessionComponent}></Route>
        <Route path = "/view-session/:sessionId" component = {ViewSessionComponent}></Route>
        <Route path = "/update-session/:sessionId" component = {UpdateSessionComponent}></Route>
      </Router>
    </div>

  );
}

export default App;