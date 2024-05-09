import { useEffect, useState } from 'react';
import './App.css';


function App() {

const [message, setMessage] = useState('');
const[userMessage,setUserMessage] = useState('');
const[gotMessage,setGotMessage] = useState("")

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await fetch('http://localhost:3001/api/world', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ mess: userMessage })
    });
    const data = await res.text();
    setUserMessage(data);
    setGotMessage(data)
  } catch (error) {
    console.error('Error:', error);
  }
};

useEffect(() => {
  const add = async () => {
    try {
      const res = await fetch('http://localhost:3001/api/hello');
      const data = await res.text();
      setMessage(data); 
      console.log(message)
    } catch (error) {
      console.error('Error:', error);
    }
  };

    add(); 
  }, []);

  
  return (
    <>
      <h1>{message}</h1>
      <h2>Post to Server:</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setUserMessage(e.target.value)}
        />
        <input type="submit" value="Submit" />
      </form>
      <h2>{gotMessage}</h2>
    </>
  );
}

export default App;