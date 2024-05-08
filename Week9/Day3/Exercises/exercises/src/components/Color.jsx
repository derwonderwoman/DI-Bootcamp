import React from "react";

class Color extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          favoriteColor: 'red',
          show: true
        };
        this.changeColor = this.changeColor.bind(this);
    }


shouldComponentUpdate(nextProps, nextState) {
    return true; 
    // return false;
}


getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("in getSnapshotBeforeUpdate");
    return null;
  }

componentDidUpdate() {
    console.log("after update")
}

changeColor() {
    this.setState({ favoriteColor: 'blue' });
}

changeShow = () => {
    this.setState({ show: false });   
}

render() {
    const { show } = this.state;
    return (
      <div>
        <h1>My Favorite Color is {this.state.favoriteColor}</h1>
        <button onClick={this.changeColor}>Change Color</button>
        {show && <Child />}
        <button onClick={this.changeShow}>Delete</button>
      </div>
      
    );
}
}

class Child extends React.Component {
    
    componentWillUnmount(){
        alert("Component is unmounted!");
    }

    render() {
        return (
          <header>
            <h1>Hello World!</h1>
          </header>
        );
    }
};

export default Color;