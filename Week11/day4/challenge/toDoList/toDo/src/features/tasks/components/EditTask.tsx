import { useEditTasks } from "../hooks";
import { useState } from "react";

interface TaskEditProps {
    id: string;
}

const TaskToEdit = ({id}: TaskEditProps) => {
    const [newText, setNewText] = useState("");
    const [editClicked,setEditClicked] = useState(false);
    const edit = useEditTasks();

    const handleChange = () => {
        if (newText.trim() !== ""){
            edit(id, newText.trim());
            setNewText("");
            setEditClicked(false); 
        }
    }

    const handleEditClick = () => {
        setEditClicked(true);
    }

    return (
    <div>
        { !editClicked && <button onClick={handleEditClick}> Edit </button>}
        { editClicked &&
        <>
            <input type="text" value={newText} onChange={(e) => setNewText(e.target.value)}/>
            <button onClick={handleChange}>Save</button>
        </>
        }
    </div>
    )
  };
  export default TaskToEdit;