import { useState } from 'react';
import Shop from './components/Shop';
import Product from './components/Product';
import './App.css';
import {BrowserRouter, Routes, Route, NavLink} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
    <Routes>
      <Route path ='/' element={<Shop/>}/>
      <Route path = "/:id" element ={<Product/>}/>
    </Routes>
    </>
  )
}

export default App
