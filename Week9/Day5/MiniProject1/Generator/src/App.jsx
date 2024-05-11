import { useState } from 'react'
import './App.css'
import Phrase from "./components/Phrase"

const randomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
};

function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState(randomColor());

  const generateNewQuote = () => {
    setCount(prevCount => prevCount + 1); 
    setColor(randomColor());
  };

document.body.style.backgroundColor = color;
  return (
    <div className='square' style={{color:color} }>
      <Phrase key = {count}/>
    <button style={{ borderStyle: 'solid', borderColor: 'black' }} onClick={generateNewQuote}>
      New quote
    </button>
    </div>
  )
}

export default App
