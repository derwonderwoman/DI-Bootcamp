import{useSelector, useDispatch} from "react-redux";
import { useRef, useState } from "react";
import { add, remove, toggle, edit } from "../redux/toDoSlice";
import "./tasks.css"

const TaskList = () => {
    const[filter, setFilter] = useState("")
    const dateRef = useRef("");
    const addRef = useRef("");
    const tasks = useSelector((state) => state.toDoSlice.tasks);
    const dispatch = useDispatch();
    const [selectedDate, setSelectedDate] = useState("");
    const [editingTask, setEditingTask] = useState(null);
    const [newTaskName, setNewTaskName] = useState("");
    const [newTaskDate, setNewTaskDate] = useState("");

    const filtertasks = tasks.filter(task=>{
      if(filter === "completed") return task.completed
      else if(filter === "active") return !task.completed
      else if (selectedDate) {
          return task.date === selectedDate;
      }
      return task
  })

  const handleEditTask = () => {
    if (newTaskName.trim() !== "" && newTaskDate) {
      dispatch(edit({ id: editingTask.id, newName: newTaskName, newDate: newTaskDate }));
      setEditingTask(null);
      setNewTaskName("");
      setNewTaskDate("");
    }
  };

    const handleAddTask = () => {
      const chosenDate = dateRef.current.value;
      if (addRef.current.value.trim() !== "" && chosenDate) {
          dispatch (add({name:addRef.current.value, date:dateRef.current.value}))
          addRef.current.value = "";
          dateRef.current.value = ""
      }
  }

  const handleDateChange = (event) => {
    const date = event.target.value;
    setSelectedDate(date);
}

  const handleShowTasksForSelectedDate = () => {
    setFilter("")
    if (selectedDate) {
        const tasksForDate = tasks.filter(task => task.date === selectedDate);
        return tasksForDate;
    }
    return [];
}

    return (
        <>
          <h1>To Do List</h1>
          <div>
          <input ref = {addRef} placeholder="Add new task..." />
          <input type="date" ref={dateRef} />
          <button onClick={handleAddTask}>ADD NEW TASK</button>
          <div>
                <button onClick={handleShowTasksForSelectedDate}>Show Tasks for Selected Date</button>
                <input type="date" value={selectedDate} onChange={handleDateChange} />
          </div>
            <div>
              {filtertasks.map((item) => (
                <div key={item.id}>
                {editingTask && editingTask.id === item.id ? (
                  <>
                    <input value={newTaskName} onChange={(e) => setNewTaskName(e.target.value)} placeholder="Enter new task name..."/>
                    <input type="date" value={newTaskDate} onChange={(e) => setNewTaskDate(e.target.value)}/>
                    <button onClick={handleEditTask}>Save</button>
                  </>
                ) : (
                <>
                  <span
                    className={item.status === "completed" ? "completed" : ""}
                    onClick={() => dispatch(toggle(item.id))}
                  >
                    {item.date} {item.name}
                  </span>
                  <div>
                    <button onClick={() => setEditingTask(item)}>Edit task</button>
                    <button onClick={() => dispatch(remove(item.id))}>Remove task</button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TaskList;