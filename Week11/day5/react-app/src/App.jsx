import './App.css';
import {Routes, Route} from "react-router-dom";
import Home from './components/Home';
import Header from './components/Header';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import {useState, createContext} from "react";
import Auth from './Auth/Auth';

export const AuthContext = createContext();


function App() {
  const [token, setToken] = useState();

  return (
    <AuthContext.Provider value = {{token, setToken}}>
      <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login page = {"Login"}/>}/>
        <Route path="/register" element={<Login page = {"Register"}/>}/>
        <Route path="/dash" element={<Auth><Dashboard/></Auth>}/>
      </Routes>
      </div>
    </AuthContext.Provider>
  )
}

export default App
