import React from "react";
import { Link } from "react-router-dom";
import "../CSS_FIles/navBar.css"
import Avatar from "../Images/avatar.png"
import Chat from "../Images/chat.png"
function NavBar() {
    return (
        <div>
            <div className="navigation clearfix">
                <div className="navLinks">
                    <ul>
                       <Link to="/home"><li>HOME</li></Link>
                       <li>NOTICES</li>
                       <li>SUBMISSIONS</li> 
                       <li>DOWNLOADS</li>
                    </ul>
                </div>
                <div className="AvatarLogin">
                <Link to="/chat"> <img src={Chat} className="notification" width="30px"/> </Link>
                    <div className="dropdown">
                        <img src={Avatar} className=" avatar dropdown" width="30px" />
                        <div class="dropdown-content">
                            <Link to="/studentProfile"> Edit Profile<br /> </Link>
                            LogOut
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NavBar;