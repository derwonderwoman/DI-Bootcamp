import {EnumActiveState} from "../slice";
import { useSetFilter } from "../hooks";
import { memo } from "react";

const TasksFilterButtons = () => {
    const setFilter = useSetFilter();
    return (
    <div>
        {Object.keys(EnumActiveState)
            .filter((key) => isNaN(Number(key)))
            .map((key) => {
                const enumKey = EnumActiveState[key as keyof typeof EnumActiveState];
             return(
                <button key={key} onClick={() => setFilter(enumKey)}>{key}</button>
            )
            })}
        {/* <button onClick={()=> setFilter(EnumActiveState.All)}>All</button>
        <button onClick={()=> setFilter(EnumActiveState.Active)}>Active</button>
        <button onClick={()=> setFilter(EnumActiveState.Completed)}>Completed</button> */}
    </div>
    )
  };
  const MemoizedTasksFilterButtons = memo(TasksFilterButtons);
  export default MemoizedTasksFilterButtons;