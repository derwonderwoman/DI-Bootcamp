import { useEffect, useState } from 'react'
import './App.css'
import Test from "./components/BuggyCounter"

function App() {
  const [users, setUsers] = useState([]);
  const[search, setSearch] = useState("")

  useEffect(() =>{
    getData();
  }, []);

    const getData = async() => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        setUsers(data);
      } catch (error) {
        console.log(error);
      }
    }
 
  // const [show, setShow] = useState(true)

//   useEffect(() => {
//   if(show) {
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//     });
//   }
// },[]);
    const filter = users.filter((user) => {
    return user.name.toLowerCase().includes(search.toLowerCase());
  });
  return (
    <>
      {/* <h2>useEffect</h2>
      <button onClick={() => setShow(!show)}>Show</button>
      {
        show ?<Test/>:null
      }
       */}
      <h2>Users</h2>
      <input placeholder = "Search..." onChange = {(e) => setSearch(e.target.value)}  value={search}/>
      {filter.map((item) => {
        return <div key = {item.id}>{item.name}</div>;
      })}

    </>
  );
}

export default App
