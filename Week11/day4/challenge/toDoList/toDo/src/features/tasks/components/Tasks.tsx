import TasksTitle from "./TasksTitle";
import TasksInput from "./TaskInput";
import TasksFilterButtons from "./TaskFilterButtons";
import TasksList from "./TaskList";

import { useTasks} from "../hooks";

const Tasks = () =>{
    const tasks = useTasks();
    console.log(tasks);

  return (
    <>
      <h2>Tasks</h2>
      <TasksTitle taskscount = {tasks.length} />
      <TasksInput />
      <TasksFilterButtons />
      <TasksList />
    </>
  );
};
export default Tasks;