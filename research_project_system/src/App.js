import './App.css';
import LoginPage from './Pages/loginPage';
import HomePage from './Pages/homePage';
import LogOutHome from './Pages/logOutHome';
import Messenger from './Pages/messenger';
import Registration from './Pages/registration';
import StudentProfile from './Pages/studentProfile';
import SupervisorRequest from './Pages/supervisorRequest';
import CoSupervisorRequest from './Pages/co-supervisorRequest';
import MemberReg from './Pages/memberRegistration';


import { BrowserRouter, Route } from 'react-router-dom';

// import NavBar from './Components/navBar';

function App() {
  return (
    <div>
      <BrowserRouter>


        <Route path="/start" exact component={LogOutHome} />
        <Route path="/signin" exact component={LoginPage} />
        <Route path="/signup" exact component={Registration} />


        {/* Thivanka's routes */}
        
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

      </BrowserRouter>
    </div>
  );
}

export default App;
