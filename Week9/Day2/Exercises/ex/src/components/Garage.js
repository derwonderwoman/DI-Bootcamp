import React, { Component } from "react";

class Garage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            size: 'small'
    }
    }

render() {
    return (
        <>
         <h2>Who lives in my {this.state.size} Garage?</h2>
        </>
    )
}
}

export default Garage;