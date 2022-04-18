import React from "react";
import '../CSS_FIles/login.css'
import Footter from "../Components/footter";
import LogOutNavBar from "../Components/LogOutNavBar";

function LoginPage() {

    return (
        <div>
                       
            <LogOutNavBar/>

            <div className="loginWrapper">
                <div className="loginInputFieldArea">
                    <input type="text" placeholder="User Name...." className="logInputFields" /><br />
                    <input type="password" placeholder="Password...." className="logInputFields"/><br />
                    <p className="forgotPassword">Forgot Password</p>
                    <button className="loginbtn">Sign in</button><br />
                </div>
            </div>

            <Footter />
        </div>
    );
}
export default LoginPage;