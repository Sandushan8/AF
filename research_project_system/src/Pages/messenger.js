import React from "react";
import "../CSS_FIles/messenger.css"
import Background from '../Images/background.jpg'
import profileImg from '../Images/avatar.png'
//components
import NavBar from "../Components/navBar";
import Footter from "../Components/footter";
import Message from "../Components/message";



const myStyle = {
    backgroundImage: `url(${Background})`,
    backgroundSize: 'cover',

};
function Messenger() {
    return (
        <div>
            <NavBar />
            <div className="messagerWrapper clearfix" >
                {/* <button className="close">X</button> */}
                <div className="chatArea">
                    <div className="chatHeader clearfix">
                        <center><h4 className="grpID">Group ID</h4></center>
                        <img src={profileImg} width="30px" className="proPic"/>
                    </div>
                    <div className="messageArea">
                        <Message mes='Hi' type='teacher'/>
                        <Message mes='Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph. A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116).' type='student'/>
                        <Message mes='Hi' type='teacher'/>
                        <Message mes='Paragraphs are the building blocks of papers.' type='student'/>
                        <Message mes='Many students define paragraphs in terms of length' type='teacher'/>
                         
                    
                    </div>
                    <div className="typing">
                        <input type="text" placeholder="Type something..." />
                        <button className="send">Send</button>
                    </div>
                </div>
            </div>
            <Footter />
        </div>
    )
}
export default Messenger;