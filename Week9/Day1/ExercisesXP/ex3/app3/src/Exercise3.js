import React from "react";
import logo from './logo.svg';
import './Exercise.css'

const style_header = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
  };

const Exercise = () => {
    return (
        <div>
        <h1 style={{...style_header, color: 'red'}}>Header</h1>
        <p className="para">Paragraph</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          This is a link
        </a>
        <form>
        <span>This is a Form</span><br />
        <label htmlFor="fname">Enter your name:</label><br />
        <input type="text" id="fname" name="fname" />
        <button type="submit">Add</button>
    
</form>
        <img/>Here is an image:<img src={logo} className="App-logo" alt="logo" />
        <ul> This is a list:
            <li>Cofee</li>
            <li>Tea</li>
            <li>Milk</li>
        </ul>
        </div>
    )
};

export default Exercise;