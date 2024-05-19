import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../app/slice"
import { useEffect,useRef } from "react";
import { addUser} from "../app/slice";

 const Users = (props) => {
    const users = useSelector((state) => state.userSlice.users);
    const status = useSelector((state) => state.userSlice.status);
    const dispatch = useDispatch();
    const userNameRef = useRef();

    useEffect(() =>{
        dispatch(fetchUsers());
    },[])

    if(status === "loading") return <h3>Loading...</h3>
    if(status === "failed") return <h3>Wrong...</h3>
  return (
    <div>
        <h2>Users</h2>
        <div>
            <input ref = {userNameRef}/>
            <button onClick={()=> dispatch(addUser(userNameRef.current?.value))}>
                Add User
            </button>
        </div>
        {users && users.map((user) => {
        return <div key ={user.id}>{user.name}</div>
        })}
    </div>
  )
}

export default Users;