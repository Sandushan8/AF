import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

//-------------------Thivanka's Start---------------------------------
import LoginPage from './Pages/Student/loginPage';
import HomePage from './Pages/Student/homePage';
import LogOutHome from './Pages/Student/logOutHome';
import Messenger from './Pages/Student/messenger';
import Registration from './Pages/Student/registration';
import StudentProfile from './Pages/Student/studentProfile';
import SupervisorRequest from './Pages/Student/supervisorRequest';
import CoSupervisorRequest from './Pages/Student/co-supervisorRequest';
import MemberReg from './Pages/Student/memberRegistration';
//import NavBar from './Components/Student/navBar';

//-------------------Thivanka's End---------------------------------


function App() {
  return (
    <div>
      <BrowserRouter>

        {/* -------------------------Thivanka's Routes Start----------------------*/}
        <Route path="/start" exact component={LogOutHome} />
        <Route path="/signin" exact component={LoginPage} />
        <Route path="/signup" exact component={Registration} />
        {/* <NavBar /> */}
        <Route path="/home" exact component={HomePage} />
        <Route path="/chat" exact component={Messenger} />
        <Route path="/studentProfile" exact component={StudentProfile} />
        <Route path="/supervisorRequest" exact component={SupervisorRequest} />
        <Route path="/coSupervisorRequest" exact component={CoSupervisorRequest} />
        <Route path="/memberRegistration" exact component={MemberReg} />
        {/* <HomePage/> */}
        {/* <LoginPage/> */}
        {/* <Messenger /> */}
        {/* <Registration/> */}
        {/* ---------------------------Thivanka's Routes End------------------------*/}

        

      </BrowserRouter>
    </div>
  );
}

export default App;
