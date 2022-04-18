import React from "react";
import "../CSS_FIles/registration.css"
import Footter from "../Components/footter";
import LogOutNavBar from "../Components/LogOutNavBar";

function Registration() {
    return (
        <div>
            <div>
                <LogOutNavBar />
            </div>
            <div className="RegistrationWrapper">
                <div className="inputFieldArea">
                    <input type="text" className="regInputFields" placeholder="Student Reg No(Leader)..." /><br />
                    <input type="text" className="regInputFields" placeholder="Student Name..."/><br />
                    <input type="email" className="regInputFields" placeholder="Student Email(Personal)..."/><br />
                    <input type="tel" className="regInputFields" placeholder="Student Contact..."/><br/>
                    <select className="regOption" >
                        <option value="0" className="optBack">Faculty</option>
                        <option value="1" className="optBack">BM</option>
                        <option value="2" className="optBack">En</option>
                        <option value="3" className="optBack">En</option>
                    </select>
                    <input type="submit" className="registerbtn" value="Register"/>
                </div>
            </div>
            <div>
                <Footter />
            </div>
        </div>
    )
}
export default Registration;