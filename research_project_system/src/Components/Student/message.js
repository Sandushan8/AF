import React from "react";
import '../../CSS_FIles/Student/message.css'

function Message(props){
    const type=props.type;
    return(
        <div>
            <div className="messageWrapper" id={type}>
                <p>{props.mes}</p>
            </div>
        </div>
    )
}
export default Message;