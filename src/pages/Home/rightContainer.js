import React, { useEffect, useState } from "react";
import {useDispatch} from "react-redux";
import { faClock, faInbox, faPaperPlane, faBan} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {closeTicket, snoozedTicket} from "../../redux/Home/actions";
import Message from "../../components/shared/Message";

import "./index.css";

export default function RightContainer({selectedTicket, disabled}) {
    const dispatch = useDispatch();
    // const [timer, setTimer] = useState("00:00");
    const [second, setSecond] = useState('00');
    const [minute, setMinute] = useState('00');
    // const [isActive, setIsActive] = useState(!disabled);
    const [counter, setCounter] = useState(0);
    const [message, setMessage] = useState("");
    const [allMessages, setAllMessages] = useState([])
    const handleSendMessage = (e) => {
        e.preventDefault();
        if (message.trim() !== ""){
            setAllMessages([...allMessages, message]);
            setMessage("");
        }
    };
    useEffect(() => {
        let intervalId;
        if (!disabled) {
            intervalId = setInterval(() => {
                const secondCounter = counter % 60;
                const minuteCounter = Math.floor(counter / 60);

                const computedSecond = String(secondCounter).length === 1 ? `0${secondCounter}`: secondCounter;
                const computedMinute = String(minuteCounter).length === 1 ? `0${minuteCounter}`: minuteCounter;

                setSecond(computedSecond);
                setMinute(computedMinute);

                setCounter(counter => counter + 1);
            }, 1000)
        }

        return () => clearInterval(intervalId);
    }, [disabled, counter]);
    const handleChange = e => {
        if (e.target.value === "") e.target.style.height = "50px";
        setMessage(e.target.value);
    };
    const handleCloseTicket = () => {
        dispatch(closeTicket(selectedTicket._id))
    };
    const handleSnoozedTicket = () => {
        dispatch(snoozedTicket(selectedTicket._id))
    };

    return (
        <div className="right-container">
            <div className="right-container-header" style={{color: selectedTicket.Title === "New Task" && "grey"}}>
                <h2>{selectedTicket.Title}</h2>
                <div className="right-container-header-timer">
                    <h2><span className="minute">{minute}</span>
                        <span>:</span>
                        <span className="second">{second}</span></h2>
                    <button className="actionsBTN" onClick={handleSnoozedTicket}><FontAwesomeIcon icon={faClock} size="lg"/></button>
                    <button className="actionsBTN" onClick={handleCloseTicket}><FontAwesomeIcon icon={faInbox} size="lg"/></button>
                </div>
            </div>
            <div className="right-container-content">
                {
                    allMessages.map(mes => {
                        return (
                            <Message body={mes}/>
                        )
                    })
                }
            </div>
            <div className="right-container-footer">
                <form onSubmit={handleSendMessage}>
                    {disabled && <FontAwesomeIcon icon={faBan} size="lg" style={{alignSelf: "center"}}/>}
                    <textarea
                        disabled={disabled}
                        onChange={handleChange}
                        value={message}
                        placeholder="Type a message"
                        id="messageInput"
                        className="messageInput"
                        onKeyDown={e => {
                            if (e.keyCode === 13 && !e.shiftKey) {
                                handleSendMessage(e)
                                e.target.style.height = "50px";
                                e.preventDefault();
                            }
                            if (e.keyCode === 13 && e.shiftKey) {
                                e.target.style.height = "3px";
                                e.target.style.height = `${e.target.scrollHeight}px`;
                            }
                            const values = e.target.value.replace(/\r\n/g, "\n").split("\n");
                            if (values.length > 3) {
                                e.target.style.overflowY = "scroll";
                            }
                        }}
                    />
                    <button type="submit" className="sendMessageBTN">
                        <FontAwesomeIcon icon={faPaperPlane} size="2x"/>
                    </button>
                </form>
            </div>
        </div>
    )
}
