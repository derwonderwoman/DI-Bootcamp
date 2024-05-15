import { useRef } from "react";
import { useDispatch } from "react-redux";
import {add} from "../redux/actions";

const TasksInput = (props) => {
    const addRef = useRef("");
    const dispatch = useDispatch();


    const handleAddTask = () => {
        if (addRef.current.value.trim() !== "") {
            dispatch (add(addRef.current.value))
            addRef.current.value = "";
        }
    }

    return(
        <>
        <input ref = {addRef} placeholder="Add new task..." />
        <button onClick={handleAddTask}>ADD NEW TASK</button>
        </>
    )
}


export default TasksInput