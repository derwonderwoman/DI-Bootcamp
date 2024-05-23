import { useState, useRef, useMemo } from 'react';
import './App.css';
import Counter from './components/Counter';
import Heading from './components/Heading';
import Section from './components/Section';
import List from './components/List';

type fibFunc = (n: number) => number

const fib: fibFunc = (n) => {
  if(n<2) return n;
  return fib(n-1) + fib(n-2);
}
function App() {
  const [count, setCount] = useState<number>(0)

  const inputRef  = useRef<HTMLInputElement>(null)

  console.log(inputRef.current?.value);

  const numRef = useRef<number>()

  console.log(numRef.current);

  const myNum = 20;

  const fibResult = useMemo<number>(()=> fib(myNum), [myNum])

  const handleChange = (e:any):void => {
    console.log(e.target.value)
  };

  const add = (
    e: any ) => {console.log(e)};
  
  return (
    <>
    <input ref={inputRef} type = "text" onChange={handleChange}/>
    <button onClick={add}>Click</button>
    {fibResult}
      {/* <h1>Typescript</h1>
      <Heading title= {"My title"}/>
      <Section content = {"My content"}>My children</Section>
      <Counter setCount={setCount} count = {count} />
      <List items = {["Dan", "John", "Anne"]}/> */}
    </>
   
  );
}

export default App;
