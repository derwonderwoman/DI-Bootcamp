import React, { useState, useEffect } from "react";

const Color = () => {
    const [colorState, setFavoriteColor] = useState({
            favoriteColor: "red"
    });

    useEffect(() => {
        alert("useEffect reached");
      }, [colorState]);

    const changeColor = () => {
        setFavoriteColor(prevState => ({
            ...prevState,
            favoriteColor: "blue"
          }));
      };

    return(
        <>
            <h2>My favorite color is {colorState.favoriteColor}</h2>
            <button onClick={changeColor}>Change Color</button>
        </>
    )
}

export default Color;