import logo from './logo.svg';
import './App.css';

const myelement = <h1>I Love JSX!</h1>;
const sum = 5 + 5;

function App() {
  return (
    <div className="App">
      <header className="App-header">
      {myelement}
        <p>
          Hello World!
        </p>
        <p>
        React is {sum} times better with JSX   
        </p> 
      </header>
    </div>
  );
}

export default App;
