import React from "react";
import "./index.css";
import {faClock} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Message = ({body}) => {
    return (
        <div className="message-container">
            <p>{body}</p>
        </div>
    )
};

export default Message;
