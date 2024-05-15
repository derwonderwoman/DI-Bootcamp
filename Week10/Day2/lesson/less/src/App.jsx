import { useState, useReducer } from 'react'
import './App.css'
import Counter from './components/Counter';

const initialState = {
  count:0,
  tasks:[]
};

const INCREMENT = "increment";
const DECREMENT = "dcrement";

export const countReducer = (state, action) => {
  if(action.type === INCREMENT){
    return {...state,count : state.count + action.payload}
  }
  else if (action.type === DECREMENT){
    return {...state,count : state.count - action.payload}
  }
  return state;
};


export const taskReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return {...state, tasks: [...state.tasks, action.payload]}
    default:
      return state;
  }
}

function App() {
  const [count, setCount] = useState(0);
  const[state,dispatch] = useReducer(countReducer, initialState);
  const [taskState, dispatchTask] = useReducer(taskReducer, { tasks: [] });
  const [taskInput, setTaskInput] = useState('');

  const handleAddTask = () => {
    if (taskInput.trim() !== "") {
      dispatchTask({ type: "ADD", payload: taskInput });
      setTaskInput("");
    }
  };

  return (
    <>
      <div className = "card">
        <h2>React - useState</h2>
        <button onClick={() => setCount((count) => count + 1)}> + </button>
        count is {count}
        <button onClick={() => setCount((count) => count - 1)}> - </button>
      </div>

      <div className='card'>
        <h2>React - useReducer</h2>
        <button onClick={() => dispatch({type:INCREMENT, payload: 10})}> + </button>
        count is {state.count}
        <button onClick={() => dispatch({type:DECREMENT,payload: 5})}> - </button>
      </div>
      
      <div>
        <h2>Tasks</h2>
        <input id="task-input" value={taskInput} onChange={(e) => setTaskInput(e.target.value)} />
        <button onClick={handleAddTask}>Add Task</button>
        <ul>
          {taskState.tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>
      <Counter/>
    </>
  )
}

export default App