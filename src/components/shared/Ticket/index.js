import React from "react";
import "./index.css";
import {faClock} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Ticket = ({ticket, selectedTicket, handleClickTicket}) => {
    const {_id, Assignee, Title, Status} = ticket;
    return (
        <div className="avatar-container">
            <div key={_id} className={[ _id === selectedTicket._id ? "black-avatar ticket-avatar" : "ticket-avatar" ]} onClick={handleClickTicket}>
                <h4>{Assignee.match(/\b\w/g).join('')}</h4>
            </div>
            {_id !== selectedTicket._id && <div className="red-badge" style={{backgroundColor: Status === "New" && "red"}}/>}
            {_id !== selectedTicket._id && Status === "Snoozed" && <div className="red-badge">
                <FontAwesomeIcon icon={faClock} size="xs" style={{color: Status === "Snoozed" && "#f4942e"}}/>
            </div>}
        </div>
    )
};

export default Ticket;
