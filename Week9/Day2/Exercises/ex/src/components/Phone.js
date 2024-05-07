import React, { useState } from "react";

const Phone = () => {
    const [phoneState, setPhoneState] = useState({
            brand: "Samsung",
            model: "Galaxy S20",
            color: "black",
            year: 2020 
    });

    const changeColor = () => {
        setPhoneState(prevState => ({
            ...prevState,
            color: "blue"
          }));
    } 

    return(
        <>
            <h2>My phone is a {phoneState.brand}</h2>
            <p>It is a {phoneState.color} {phoneState.model} from {phoneState.year}</p>
            <button onClick = {changeColor}>Change color</button>
        </>
    )
}

export default Phone;