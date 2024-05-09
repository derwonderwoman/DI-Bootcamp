import ErrorBoundary from './components/ErrorBoundary';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './components/Home';
import Profile from './components/Profile';
import Shop from "./components/Shop"
import Nav from "./components/Nav"
import './App.css'

function App() {

  return (
    <>
    <BrowserRouter>
    <Nav/>
      <Routes>
          <Route path="/" element={<ErrorBoundary><Home/></ErrorBoundary>} />
          <Route path="/profile" element={<ErrorBoundary><Profile/></ErrorBoundary>} />
          <Route path="/shop" element={<Shop/>} />
          <Route path ="*" element={
            <>
            <h2>404 not found</h2>
            </>
          }/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
