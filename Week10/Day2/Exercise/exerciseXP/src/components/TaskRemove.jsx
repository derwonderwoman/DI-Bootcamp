import { useDispatch } from "react-redux";
import {remove} from "../redux/actions";

const TaskRemove = (props) => {
    const dispatch = useDispatch();

    const removeTask = (id) => {
        dispatch(remove(id))
    }

    return (
        <>
        <button onClick={() => removeTask(props.id)}>Remove task</button>
        </>
    )
};
export default TaskRemove