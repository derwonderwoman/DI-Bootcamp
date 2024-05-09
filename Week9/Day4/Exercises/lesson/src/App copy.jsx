import { useState } from 'react';
import Home from './components/Home';
import About from './components/About';
import Nav from './components/Nav';
import Shop from './components/Shop';
import Product from './components/Product';
import './App.css';
import {BrowserRouter, Routes, Route, NavLink} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nav/>
    <Routes>
      <Route path ='/about'element={<About/>}/>
      <Route path ='/' element={<Home/>}/>
      <Route path = "/shop" element ={<Shop/>}/>
      <Route path = "/product/:id" element ={<Product/>}/>
      <Route path ="*" element={
        <>
        <h2>404 not found</h2>
        </>
      }/>
    </Routes>
    </>
  )
}

export default App
