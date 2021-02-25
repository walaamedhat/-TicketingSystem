import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectTicket} from "../../../redux/Home/actions";
import Ticket from "../Ticket";

import "./index.css";

const LeftPanel = () => {
    const dispatch = useDispatch();
    const { tickets, selectedTicket } = useSelector(state => state.tickets);
    const handleClickTicket = ticket => {
        dispatch(selectTicket(ticket))
    };
    return (
        <div className="panel-container">
            {
                tickets.map(ticket => {
                    return (
                        ticket.Status !== "Closed" && (
                            <Ticket ticket={ticket} selectedTicket={selectedTicket} handleClickTicket={() => handleClickTicket(ticket)}/>
                        )
                    )
                })
            }
        </div>
    )
};

export default LeftPanel;
