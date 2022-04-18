import React from "react";
import "../../CSS_FIles/Student/supervisorDetail.css"
import Avatar from "../../Images/avatar.png"


function SupervisorDetail() {
    return (
        <div className="detailWrapper clearFix">
            <div className="supervisorAvatarWraper ">
                <img src={Avatar} className="supervisorAvatar" width="60px" alt="Profile Pictire"/>
                <textarea rows="3" cols="32" className="supervisorName" disabled>Mr Frank N. Stein</textarea>
            </div>
            <div className="supervisorInfoWraper">
                <h4 className="re-Heading">Biological and Biotechnological Sciences</h4>
                <textarea rows="6" cols="65" className="re-Discription" disabled>An academic discipline or field of study is known as a branch of knowledge. It is taught as an accredited part of higher education. A scholar's discipline is commonly defined and recognized by a university faculty. That person will be accredited by learned societies to which they belong along with the academic journals in which they publish. However, no formal criteria exist for defining an academic discipline.</textarea>
                <input type="button" className="requestBtn" value="Request"/>
            </div>
        </div>
    )
}
export default SupervisorDetail;