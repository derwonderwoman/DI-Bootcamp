import React from "react";
import Button from '@mui/material/Button'
import tachyons from "tachyons"
let style ={
    display:"inline-block",
    border: "1px solid #000",
    margin: "20px",
    padding: "20px",
    textAlign: "center",
    backgroundColor: "cyan",
};

const NewHello = (props) => {
    return (
        <div className = 'tc dib br3 pa3 ma2 bg-light-green grow'>
            <img src={`https://robohash.org/${props.info.id}`}/>
            <h2 style={{color:'red'}}>{props.info.name}</h2>
            <h3>{props.info.username}</h3>
            <p>{props.info.email}</p> 
            <Button variant = 'contained'>Choose</Button>
        </div>
    );
};
export default NewHello;