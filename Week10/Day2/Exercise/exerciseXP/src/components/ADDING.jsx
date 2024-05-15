import {changeStatus} from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import "./tasks.css"
import TaskTitle from "./TaskTitle";
import TasksInput from "./TasksInput";
import TaskRemove from "./TaskRemove";



const Add = () => {
    const[filter, setFilter] = useState("all")
    const tasks = useSelector((state) => state.tasker.tasks);
    const dispatch = useDispatch();

    const filtertasks = tasks.filter(task=>{
        if(filter === "completed") return task.completed
        else if(filter === "active") return !task.completed
        return task
    })

    const taskCompleted =(id) => {
        dispatch(changeStatus(id))
    }
    
    return (
        <>
        <TaskTitle/>
        <TasksInput/>   
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
                    <TaskRemove id={item.id}/>
                    </div>
            })}
            </div>
        </>
    );
}

// const mapStateToProps = (state) => {
//     return {
//         tasks: state.tasker.tasks
//     };
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         add: (value) => dispatch(add(value)),
//     }
// }


export default Add;