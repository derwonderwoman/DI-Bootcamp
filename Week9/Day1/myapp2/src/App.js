import logo from './logo.svg';
import './App.css';
// import Hello from "./components/Hello"
import users from './users.json'
import NewHello from "./components/NewHello"

const students = [
  {id:1, name:'John'},
  {id:2, name:'Anna'}
]

function App() {
  return (
    <div>
      <header>
        {
          users.map((item,id) => {
            return <NewHello key ={id} info = {item}/>
          })
        }
        
      </header>
    </div>
  );
}

export default App;
