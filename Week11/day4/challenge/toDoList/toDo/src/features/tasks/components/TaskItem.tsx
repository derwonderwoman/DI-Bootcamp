import TaskRemove from "./TaskRemove";
import { Item } from "../../../models/ListItem";
import { useCheckTask } from "../hooks";
import TaskToEdit from "./EditTask";

type TaskItemProps = {
  task: Item;
}

const TaskItem = ({task}: TaskItemProps) => {
  const check = useCheckTask();

  const handleClick = () => {
    check(task.id);
  }
  return (
    <>
    <div>
      <span className={task.checked? "completed" : ""} onClick={handleClick}>
        {task.item}
      </span>
    </div>
      <TaskRemove id={task.id} />
      <TaskToEdit id={task.id} />
    </>
  );
};
export default TaskItem;