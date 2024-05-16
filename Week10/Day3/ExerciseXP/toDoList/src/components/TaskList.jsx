import{useSelector, useDispatch} from "react-redux";
import { useRef } from "react";
import { add, remove, toggle } from "../redux/toDoSlice";
import "./tasks.css"

const TaskList = () => {
    const addRef = useRef("");
    const tasks = useSelector((state) => state.toDoSlice.tasks);
    const dispatch = useDispatch();


    const handleAddTask = () => {
        if (addRef.current.value.trim() !== "") {
            dispatch (add(addRef.current.value))
            addRef.current.value = "";
        }
    }
    return (
        <>
          <h1>To Do List</h1>
          <div>
            <input ref={addRef} placeholder="Add new task..." />
            <button onClick={handleAddTask}>ADD NEW TASK</button>
            <div>
              {tasks.map((item) => (
                <div key={item.id}>
                  <span
                    className={item.status === "completed" ? "completed" : ""}
                    onClick={() => dispatch(toggle(item.id))} >
                    {item.name}
                  </span>
                  <div>
                  <button onClick={() => dispatch(remove(item.id))}>Remove task</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      );
    };
    
    export default TaskList;