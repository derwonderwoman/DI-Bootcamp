import React, { Component } from "react";

class Car extends React.Component {
  constructor(props) {
    super(props);
        this.state = {
            name: "John",
            title:"welcom to JS class"
        }
        
    }

    changeName = () => {
        this.setState({name:"Dan", email: "hhh@mail.ru", title: "welcome to React class"});
    }

    handleChange = (e) => {
        this.setState({name:e.target.value})
    }
    render() {
        return (
        <>
            <h2>Hi, {this.state.name} from {this.props.title}</h2>
            <p>Email: {this.state.email}</p>
            <input onChange ={(e) => this.handleChange(e)}/>
            <button onClick = {this.changeName}>Click Me!</button>
        </>
        );
    }
}

export default HelloClass;