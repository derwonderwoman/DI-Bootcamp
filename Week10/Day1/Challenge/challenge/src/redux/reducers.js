import { CHANGE, ADD, REMOVE } from "./actions"
import { v4 as uuidv4} from "uuid"


const initialState = {
    tasks:[],
}

export const taskReducer = (state=initialState, action) => {
    switch(action.type) {
        case ADD: 
            const newTasks = [...state.tasks];
            newTasks.push({id: uuidv4(), task: action.payload, completed: false});
            return {...state, tasks: newTasks};
        case CHANGE:
            const newtasks = state.tasks.map(item => {
                return item.id === action.payload ? {...item,completed: !item.completed}:item
            });
            return {...state, tasks: newtasks};
        case REMOVE:
            const NewTasks = state.tasks.filter(item => item.id !== action.payload);
            return {...state, tasks:NewTasks}
        default:
            return state
    }
};