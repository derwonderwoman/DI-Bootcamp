import {changeStatus} from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import "./tasks.css"
import TaskTitle from "./TaskTitle";
import TasksInput from "./TasksInput";
import TaskRemove from "./TaskRemove";



const Add = () => {
    const[filter, setFilter] = useState("")
    const tasks = useSelector((state) => state.tasker.tasks);
    const [selectedDate, setSelectedDate] = useState("");
    const dispatch = useDispatch();
    console.log(tasks);

    const filtertasks = tasks.filter(task=>{
        if(filter === "completed") return task.completed
        else if(filter === "active") return !task.completed
        else if (selectedDate) {
            return task.date === selectedDate;
        }
        return task
    })

    const taskCompleted =(id) => {
        dispatch(changeStatus(id))
    }

    const handleShowTasksForSelectedDate = () => {
        setFilter("")
        if (selectedDate) {
            const tasksForDate = tasks.filter(task => task.date === selectedDate);
            return tasksForDate;
        }
        return [];
    }

    const handleDateChange = (event) => {
        const date = event.target.value;
        setSelectedDate(date);
    }
    
    return (
        <>
        <TaskTitle/>
        <TasksInput/>
        
        
            <div>
                <button onClick={()=>setFilter("")}>All tasks</button>
                <button onClick={()=>setFilter("completed")}>All completed tasks</button>
                <button onClick={()=>setFilter("active")}>All active tasks</button>
                <button onClick={handleShowTasksForSelectedDate}>Show Tasks for Selected Date</button>
                <input type="date" value={selectedDate} onChange={handleDateChange} />
            </div>
            <div>
                {filtertasks.map((item) => {
                    return <div key = {item.id}>
                    <span className={item.completed ? "completed" : ""}
                        onClick = {()=>taskCompleted(item.id)}>
                        {item.date} {item.task} 
                    </span>
                    <TaskRemove id={item.id}/>
                    </div>
            })}
            </div>
        </>
    );
}

export default Add;