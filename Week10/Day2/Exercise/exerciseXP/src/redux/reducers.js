import { CHANGE, ADD, REMOVE } from "./actions"
import { v4 as uuidv4} from "uuid"

const initialState = {
    tasks:[],
}

export const reducer = (state=initialState, action) => {
    switch(action.type) {
        case ADD: 
            const newtask = [...state.tasks];
            newtask.push({id: uuidv4(), task: action.payload, completed: false})
            return {...state, tasks: newtask};
        case REMOVE:
            const notdeleted = state.tasks.filter(item => item.id!== action.payload)
            return {...state, tasks: notdeleted};
        case CHANGE:
            const newtasks  = state.tasks.map(item => {
            return item.id === action.payload ? {...item,completed: !item.completed}:item
                });
                return {...state, tasks: newtasks};
        default:
            return state
    }
};