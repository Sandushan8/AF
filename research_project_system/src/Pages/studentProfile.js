import React from "react";
import "../CSS_FIles/studentProfile.css"
import NavBar from "../Components/navBar";
import Footter from "../Components/footter";
import Avatar from "../Images/avatar.png"


function StudentProfile() {
    return (
        <div>
            <NavBar />
            <div className="profileWrapper">
                <div className="profileLeftWrapper">
                    <img src={Avatar} className="profileAvatar" width="130px" />
                    <input type="file" className="imgUploader"/>
                    <input type="text" className="proGroupID" value="SE-1" disabled />
                    <center> <hr className="leftSeparator"/></center>
                    <textarea rows="5" cols="30" className="topic" disabled>The illustration (examples) paragraph is useful when we want to explain or clarify something.</textarea>
                </div>
                <div className="profileRightWrapper">
                    <textarea rows="7" cols="50" className="stdDetails" placeholder="Student Details...">IT20022488-M.D.T Saparamadu</textarea>
                    <center> <hr className="separator"/></center>
                    <textarea rows="15" cols="57" className="discription" placeholder="Topic Discription...">The illustration (examples) paragraph is useful when we want to explain or clarify something, such as an object, a person, a concept, or a situation. When we illustrate, we show how something is as we point out. When we illustrate with examples, we give instances that show or prove to the readers so they can see for themselves how something is as we claim it to be.The illustration (examples) paragraph is useful when we want to explain or clarify something, such as an object, a person, a concept, or a situation. When we illustrate, we show how something is as we point out. When we illustrate with examples, we give instances that show or prove to the readers so they can see for themselves how something is as we claim it to be.</textarea>
                    <input type="button" className="updatebtn" value="Update"/>
                </div>
            </div>

            <Footter />

        </div>
    )
}
export default StudentProfile;