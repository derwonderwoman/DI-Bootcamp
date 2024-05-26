import {createSlice, nanoid, PayloadAction} from "@reduxjs/toolkit";
import ListItem from "../../models/ListItem"; 
import { StoreStateType } from "../../app/store";

export enum EnumActiveState {
    All,
    Active,
    Completed
}

export type InitialStateType = {
    tasks: ListItem[];
    filter: EnumActiveState;
}

const initialState: InitialStateType = {
    tasks: [],
    filter: EnumActiveState.All
}

export const tasksSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        add: (state,action: PayloadAction<string>) => {
            const task: ListItem = new ListItem(nanoid(), action.payload);
            state.tasks.push(task.serialize() as ListItem)
        },
        remove: (state, action: PayloadAction<string>) => {
            state.tasks = state.tasks.filter((item) => item.id !== action.payload);
        },
        check: (state, action: PayloadAction<String>) =>{
            const task = state.tasks.find((item) => item.id === action.payload);
            if(task){
                task.checked = !task.checked
            }
        },
        clear: (state) => {
            state.tasks =[]
        },
        active: (state,action:PayloadAction<EnumActiveState>) => {
            state.filter = action.payload;
        }
     },

})

export const {add, clear, check, remove, active } = tasksSlice.actions

export const tasksState = (state: StoreStateType) => state.tasksReducer.tasks;
export const filterState = (state:StoreStateType) => state.tasksReducer.filter;
export default tasksSlice.reducer;