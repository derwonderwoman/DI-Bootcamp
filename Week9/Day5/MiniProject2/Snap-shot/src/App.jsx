import { useState } from 'react';
import './App.css';
import Header from "./components/Header"
import Pics from './components/Pics';

function App() {
  const[searchTerm,setSearchTerm] = useState("mountain");

  return (
    <>
      <Header setSearchTerm={setSearchTerm}/>
      <Pics searchTerm={searchTerm}/>
    </>
  )
}

export default App
