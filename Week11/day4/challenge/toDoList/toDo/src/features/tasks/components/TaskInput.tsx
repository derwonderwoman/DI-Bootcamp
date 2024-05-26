import {useRef, memo} from "react";
import { useAddTask } from "../hooks";


const TasksInput = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const addTaskHook = useAddTask();

    const addTask = () => {
        const task: string = inputRef.current?.value.trim() || "";
        if (task === "") return;
        addTaskHook(task);
        inputRef.current!.value = "";
    }

    return (
        <>
        <input type = "text" ref={inputRef}/>
        <button onClick={addTask}>Add task</button>
        </>
    )
  };

  const MemoizedTasksInput = memo(TasksInput);
  export default MemoizedTasksInput;