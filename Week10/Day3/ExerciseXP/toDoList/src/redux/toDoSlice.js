import {createSlice, nanoid} from "@reduxjs/toolkit"

const initialState = {
    tasks: [],
}

export const toDoSlice = createSlice({
    name: "task",
    initialState:initialState,
    reducers:{
        add: (state, action) => {
            state.tasks.push({id:nanoid(),name: action.payload.name, date:action.payload.data});
        },
        toggle: (state, action) => {
            const task = state.tasks.find((item) => item.id === action.payload);
            if (task) {
              task.status = task.status === "completed" ? "not completed" : "completed";
            }
          },
        remove : (state, action) => {
            state.tasks = state.tasks.filter((item) => item.id !== action.payload);
        }
    }
})

export const { add, toggle, remove } = toDoSlice.actions;

export default toDoSlice.reducer;