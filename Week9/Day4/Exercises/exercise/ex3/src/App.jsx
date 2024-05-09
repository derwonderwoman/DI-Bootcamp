import { useState } from 'react'
import Contacts from './components/example1'
import Skill from '././components/example2'
import Demo from './components/example3'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Contacts/>
      <Skill/>
      <Demo/>
    </>
  )
}

export default App
