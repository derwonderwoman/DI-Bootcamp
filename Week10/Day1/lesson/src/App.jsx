import { useState, createContext, useRef, useEffect } from 'react'
import './App.css'
// import Display from './components/Display'
// import Action from './components/Action'

// export const AppContext = createContext();

function App() {
  // const divRef = useRef();
  // const h2Ref = useRef();
  // const inputRef = useRef();
  const[title,setTitle] = useState()
  let name = "Dan";
  const nameRef  = useRef("Dan Ref")

  // useEffect(() => {
  //  console.log(divRef.current);
  //  divRef.current.style.color = "red"
  // }, [])
  // const [count, setCount] = useState(0)

  // const changeToBlue = () => {
  //   h2Ref.current.style.color = "blue"
  // }

  // const handleChange = (e) =>{
  //   // inputRef.current = e.target.value;
  //   console.log(inputRef.current.value);
  // }
    const ChangeName = () => {
      name = "John";
      nameRef.current = "John Ref"
      console.log(name);
      console.log(nameRef.current);
    }

    const changeTitle = () => {
      setTitle("Titletitle");
    }
  return (
    <>
    <h1>{name}</h1>
    <button onClick = {ChangeName}>Change Name</button>
    <h1>{nameRef.current}</h1>
    <button onClick = {ChangeName}>Change REF Name</button>
    <h1>{title}</h1>
    <button onClick = {changeTitle}>Change Title</button>

    {/* <div ref = {divRef}>
      <h2 ref = {h2Ref}>useRef</h2>
      <button onClick = {changeToBlue}>Change to Blue</button>
      <div>
        <input onChange={handleChange} ref = {inputRef}/>
      </div> 
    </div>
      
      <h2>useContext / createContext</h2>
      <h2>Counter</h2>
      <AppContext.Provider value ={{count:count, setCount:setCount}}>
        <Display/>
        <Action />
      </AppContext.Provider> */}
      
    </>
  )
}

export default App
