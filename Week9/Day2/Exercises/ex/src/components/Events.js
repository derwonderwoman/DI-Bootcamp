import React, { useState} from "react";

const Events = ({props}) => {
    const [isToggleOn, setIsToggleOn] = useState(true);

    const toggleState = () => {
        setIsToggleOn(!isToggleOn);
      };

    const clickMe = (e) => {
        alert("I was clicked");
    }
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            alert(`The Enter key was pressed, your input is:${e.target.value}`);
        }
    };

    return(
        <>
            <button onClick = {clickMe}>Click Me!</button>
            <input type="text" onKeyDown={handleKeyDown} placeholder="Press Enter"/>  
            <button onClick={toggleState}> {isToggleOn ? 'ON' : 'OFF'}</button> 
        </>
    )
}

export default Events;

