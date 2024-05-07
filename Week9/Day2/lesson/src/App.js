import './App.css';
// import Hello from './components/Hello'
// import HelloClass from './components/HelloClass'
import React from "react"

class App extends React.Component   {
  constructor() {
    super();
    this.state = {
      count:0
    };

  }

  setCount = (num) => {
    this.setState({count:this.state.count + num});
}

  render(){
    return (
      <div className="App">
        <header className="App-header">
         <button onClick={()=>this.setCount(1)}> + </button>
          {this.state.count}
         <button onClick={()=>this.setCount(-1)}> - </button>
        </header>
      </div>
    );
  }
  
}

export default App;
