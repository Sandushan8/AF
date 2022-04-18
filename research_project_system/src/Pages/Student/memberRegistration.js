import React from "react";
import '../../CSS_FIles/Student/memberRegistration.css';
import NavBar from "../../Components/Student/navBar";
import Footter from "../../Components/footter";

function MemberReg() {
    return (
        <div>
            <NavBar />

            <div className="memberRegWrapper">
                <div className="regInputWrapper">
                    <h3 className="studentRegisterHeading">Student Registrations</h3>
                    <input type="text" className="memberDetailInputs" placeholder="1st Member Name..." /><br/>
                    <input type="text" className="memberDetailInputs" placeholder="1st Member Registration Number..." /><br/>
                    <input type="text" className="memberDetailInputs" placeholder="2nd Member Name..." /><br/>
                    <input type="text" className="memberDetailInputs" placeholder="2nd Member Registration Number..." /><br/>
                    <input type="text" className="memberDetailInputs" placeholder="3rd Member Name..." /><br/>
                    <input type="text" className="memberDetailInputs" placeholder="3rd Member Registration Number..." /><br/>
                    <input type="text" className="memberDetailInputs" placeholder="4th Member Name..." /><br/>
                    <input type="text" className="memberDetailInputs" placeholder="4th Member Registration Number..." /><br/>
                    <input type="text" className="memberDetailInputs" placeholder="5th Member Name..." /><br/>
                    <input type="text" className="memberDetailInputs" placeholder="5th Member Registration Number..." /><br/>
                    <input type="submit" className="studentDetailSubmitBtn"/>
     
                </div>
            </div>

            <Footter />
        </div>
    )
}
export default MemberReg;