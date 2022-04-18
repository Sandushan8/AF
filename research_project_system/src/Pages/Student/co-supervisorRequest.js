import React from "react";
import "../../CSS_FIles/Student/supervisorRequest.css";
import Footter from "../../Components/footter";
import NavBar from "../../Components/Student/navBar";
import SupervisorDetail from "../../Components/Student/supervisorDetail";

function CoSupervisorRequest(){
    return(
        <div>
            <NavBar/>
            <div className="supervisorDetailWrapper">
                <div className="filterDetailsWrapper">
                    <input type="search" className="supervisorNameSearch" placeholder=" Search Supervisor Name..."/>
                    <h3 className="heading">Co-Supervisors</h3>
                    <input type="search" className="re-areaSearch" placeholder="Search Supervisor's Research Area..."/>
                </div>
                <div className="supervisorsDetails clearFix" >
                    <SupervisorDetail/>
                    <SupervisorDetail/>
                    <SupervisorDetail/>
                    <SupervisorDetail/>
                </div>
            </div>
            <Footter/>
        </div>
    )
}

export default CoSupervisorRequest;