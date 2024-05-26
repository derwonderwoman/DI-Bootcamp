type TasksTitleProps = {
    taskscount: number;
}

const TasksTitle = ({taskscount}:TasksTitleProps) => {
    return <h3>Number of tasks : {taskscount}</h3>;
  };
  export default TasksTitle;