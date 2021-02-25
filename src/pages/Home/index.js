import React, { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import {editTicket} from "../../redux/Home/actions";

import LeftContainer from "./leftContainer";
import RightContainer from "./rightContainer";

import "./index.css";

export default function Home() {
    const dispatch = useDispatch();
    const { selectedTicket, tickets } = useSelector(state => state.tickets);
    const [ allTicketData, setAllTicketData ] = useState({...selectedTicket});
    const [ disabled, setDisabled ] = useState(true);
    const proceed = (taskName, goal) => {
        const ticketData = {...allTicketData, Title: taskName || "New Task", Goal: goal};
        dispatch(editTicket(ticketData));
        setDisabled(false);
    };
    useEffect(() => {
        selectedTicket._id !== allTicketData._id && setDisabled(true);
        // eslint-disable-next-line react-hooks/exhaustive-deps
        setAllTicketData(selectedTicket)
    }, [selectedTicket, tickets]);
    return (
        <div className="home-container">
            {
                selectedTicket._id && (
                    <>
                        <LeftContainer Proceed={proceed} setDisabled={setDisabled}/>
                        <RightContainer selectedTicket={selectedTicket} disabled={disabled}/>
                    </>
                )
            }

        </div>
    )
}
