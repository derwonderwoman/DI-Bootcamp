import {useTasks} from "../hooks";
import TaskItem from "./TaskItem";

const TasksList = () => {

 const tasks = useTasks();
  return (
    <>
    {tasks.map((task) => (
        <div key={task.id}>
            <TaskItem  task={task}/>
        </div>
        
    ))}
    </>
    )
  
};
export default TasksList;