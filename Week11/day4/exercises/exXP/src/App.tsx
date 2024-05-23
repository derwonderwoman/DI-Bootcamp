import './App.css'
import Counter from './components/Counter';
import Greeting from './components/Greeting';
import { useState } from 'react';
import UserCard from './components/UserCard';

function App() {
  const [count, setCount] = useState<number>(0)

  return (
    <>
      <Greeting id={2}/>
      <Counter count={count} setCount={setCount}/>
      <UserCard name={'Alice'} age = {25}/>
    </>
  )
}

export default App
