import { useSelector, useDispatch } from "react-redux";
import { useRef, useState, useEffect } from "react";
import { add, remove, toggle, edit, setCat, tasks, category } from "../app/slice";
import "./tasks.css";
import { selectTasksByCompletion, selectTasksByCategorie, useSelectedCategories } from "../app/hooks";

const TaskList = () => {
  // const [selectedCategorie, setSelectedCategorie] = useState();
  const [filter, setFilter] = useState('all'); 
  const addRef = useRef("");
  const addCat = useRef("");
  const dispatch = useDispatch();
  const [editingTask, setEditingTask] = useState(null);
  const [newTaskName, setNewTaskName] = useState("");
  const [newCategorie, setNewCategorie] = useState("");
  const { all, completed, notCompleted } = useSelector(selectTasksByCompletion);
  const categories = useSelector(selectTasksByCategorie);
  const filteredTasks = useSelectedCategories()
  const selectedCategorie = useSelector(category)

  // useEffect(()=>{
  //   if(selectedCategorie) filteredTasks()
  // },[selectedCategorie])

  const handleEditTask = () => {
    if (newTaskName.trim() !== "") {
      dispatch(
        edit({ id: editingTask.id, newName: newTaskName, newCategorie: newCategorie })
      );
      setEditingTask(null);
      setNewTaskName("");
      setNewCategorie("");
    }
  };

  const handleAddTask = () => {
    if (addRef.current.value.trim() !== "") {
      dispatch(
        add({ name: addRef.current.value, categorie: addCat.current.value })
      );
      addRef.current.value = "";
      addCat.current.value = "";
    }
  };

  const handleFilterChange = (filter) => {
    setFilter(filter); 
  };

  const tasksToShow = filter === 'completed' ? completed :
                      filter === 'active' ? notCompleted :
                      all;

  const handleCatChange = (categorie) => {
    dispatch(setCat(categorie));
    setSelectedCategorie(categorie);
  };

  return (
    <>
      <h1>To Do List</h1>
      <div>
        <input ref={addRef} placeholder="Add new task..." />
        <input type="text" ref={addCat} placeholder="Add your categorie..." />
        <button onClick={handleAddTask}>ADD NEW TASK</button>
        <div>
        <div>
          <button onClick={() => handleFilterChange('all')}>All tasks</button>
          <button onClick={() => handleFilterChange('active')}>Active</button>
          <button onClick={() => handleFilterChange('completed')}>Completed</button>
          {tasksToShow.map((item) => (
            <div key={item.id}>
              {editingTask && editingTask.id === item.id ? (
                <>
                  <input
                    value={newTaskName}
                    onChange={(e) => setNewTaskName(e.target.value)}
                    placeholder="Enter new task name..."
                  />
                  <input
                    value={newCategorie}
                    onChange={(e) => setNewCategorie(e.target.value)}
                    placeholder="Enter new categorie..."
                  />
                  <button onClick={handleEditTask}>Save</button>
                </>
              ) : (
                <>
                  <span
                    className={item.status === "completed" ? "completed" : ""}
                    onClick={() => dispatch(toggle(item.id))}
                  >
                    {item.name}
                  </span>
                  <div>
                    <button onClick={() => setEditingTask(item)}>Edit task</button>
                    <button onClick={() => dispatch(remove(item.id))}>Remove task</button>
                  </div>
                </>
              )}
            </div>
          ))}
          <p>Filter your tasks by category...</p>
          <select value={selectedCategorie} onChange={(e) => dispatch(setCat(e.target.value))}>
            {categories.map(categorie => (
              <option key={categorie.id} value={categorie}>{categorie}</option>
            ))}
          </select>
            {filteredTasks.map(task => (
              <div key={task.id}>{task.name}</div>
            ))}
        </div>
        </div>
      </div>
    </>
  );
};

export default TaskList;