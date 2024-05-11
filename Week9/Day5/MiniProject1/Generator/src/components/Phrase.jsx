import React from "react";
import quotes from "./quotes";
import { useEffect, useState } from "react";

const Phrase = () => {
    const [phrase, setPhrase] = useState("")

    useEffect(() => {
        Randomize();
    },[])

    const Randomize = () =>{
        const randomIndex = Math.floor(Math.random() * quotes.length);
        setPhrase(quotes[randomIndex]);
    }

    return (
        <>
        <h1>"{phrase.quote}"</h1>
        <h3>{phrase.author}</h3>
    </>
    )
}

export default Phrase;