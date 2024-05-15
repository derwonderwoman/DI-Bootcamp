import{useSelector} from "react-redux"
const TaskTitle = (props) => {

const tasks = useSelector((state) => state.tasker.tasks)
  return (
    <h2>Tasks = {tasks.length}</h2>
  )
}
export default TaskTitle;