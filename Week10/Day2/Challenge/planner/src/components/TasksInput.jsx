import { useRef } from "react";
import { useDispatch } from "react-redux";
import {add} from "../redux/actions";

const TasksInput = () => {
    const addRef = useRef("");
    const dateRef = useRef("");
    const dispatch = useDispatch();


    const handleAddTask = () => {
        const chosenDate = dateRef.current.value;
        if (addRef.current.value.trim() !== "" && chosenDate) {
            dispatch (add(addRef.current.value, dateRef.current.value))
            addRef.current.value = "";
            dateRef.current.value = ""
        }
    }

    return(
        <>
        <input ref = {addRef} placeholder="Add new task..." />
        <input type="date" ref={dateRef} />
        <button onClick={handleAddTask}>ADD NEW TASK</button>
        </>
    )
}


export default TasksInput