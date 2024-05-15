import {add, remove, changeStatus} from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useState, useRef } from "react";
import "./tasks.css" 


const Tasks = () => {
    const[filter, setFilter] = useState("all")
    const addRef = useRef("");
    const tasks = useSelector((state) => state.taskReducer.tasks);
    const dispatch = useDispatch();

    const filtertasks = tasks.filter(task=>{
        if(filter === "completed") return task.completed
        else if(filter === "active") return !task.completed
        return task
    })

    const taskCompleted =(id) => {
        dispatch(changeStatus(id))
    }

    const removeTask = (id) => {
        dispatch(remove(id))
    }

    const handleAddTask = () => {
        if (addRef.current.value.trim() !== "") {
            dispatch (add(addRef.current.value))
            addRef.current.value = "";
        }
    }

    return (
        <>
        <input ref = {addRef} placeholder="Add new task..." />
        <button onClick={handleAddTask}>ADD NEW TASK</button> 
            <div>
                <button onClick={()=>setFilter()}>All</button>
                <button onClick={()=>setFilter("completed")}>Completed</button>
                <button onClick={()=>setFilter("active")}>Active</button>
            </div>
            <div>
                {filtertasks.map((item) => {
                    return <div key = {item.id}>
                    <span className={item.completed ? "completed" : ""}
                        onClick = {()=>taskCompleted(item.id)}>
                        {item.task}
                    </span>
                    <button onClick={() => removeTask(item.id)}>Remove task</button>
                    </div>
            })}
            </div>
        </>
    );
}

export default Tasks;
