import React, { Component } from "react";

class Car extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            color: "red"
        } 
    }

render() {
    return (
        <>
         <h2>This car is {this.state.color} {this.props.model}</h2>
        </>
    )
}
}

export default Car;