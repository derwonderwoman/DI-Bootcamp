import React from 'react';
import './App.css';

const data = {
  key1: 'myusername',
  email: 'mymail@gmail.com',
  name: 'Isaac',
  lastname: 'Doe',
  age: 27
};

const add = async () => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  };

  try {
    const res = await fetch('https://webhook.site/fd288f9a-919c-4662-aadf-4a5b265422e0', options);
    const responseData = await res;
    console.log('Response:', responseData);
  } catch (error) {
    console.error('Error:', error);
  }
};

function App() {
  return (
    <>
      <button onClick={add}>Press me!</button>
    </>
  );
}

export default App;
