import React, { useEffect, useState } from "react";
import "./index.css";

export default function LeftContainer({Proceed}) {
    const [counter, setCounter] = useState(25);
    const [taskName, setTaskName] = useState('');
    const [goal, setGoal] = useState('');
    const handleChange = (e) => {
        setTaskName(e.target.value)
        setCounter(25 - e.target.value.length)
    };
    const handleSelectGoal = (e) => {
        setGoal(e.target.value)
    };
    return (
        <div className="left-container">
            <div className="left-container-header"><h2>Classify</h2></div>
            <div className="left-container-content">
                <div className="left-container-select">
                    <h3>What's the user asking for?</h3>
                    <select onChange={handleSelectGoal} value={goal}>
                        <option value="">Select</option>
                        <option value="Buy a product">Buy a product</option>
                        <option value="Cancel an account">Cancel an account</option>
                        <option value="Buy and Recommend a gift ">Buy and Recommend a gift</option>
                        <option value="Ask for the business ">Ask for the business</option>
                    </select>
                </div>
                <div className="left-container-input">
                    <h3>Task Name</h3>
                    <input type="text" maxLength={26}
                           onChange={handleChange} value={taskName}
                    />
                    <h5>Characters left: <span style={{color : counter < 0 && "red"}}>{counter}</span></h5>
                </div>
            </div>
            <div className="left-container-footer">
                <input type="submit" value="Proceed" disabled={counter < 0 || !goal} onClick={() => {
                    Proceed(taskName, goal)
                    setTaskName("")
                    setGoal("")
                }}/>
            </div>
        </div>
    )
}
