import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
  category:''
};

export const toDoSlice = createSlice({
  name: "task",
  initialState: initialState,
  reducers: {
    setCat: (state, action) => {
      state.category = action.payload;
    },
    add: (state, action) => {
      const { name, categorie } = action.payload;
      state.tasks.push({ id: nanoid(), name, categorie, status: "not completed" });
    },
    toggle: (state, action) => {
      const task = state.tasks.find((item) => item.id === action.payload);
      if (task) {
        task.status = task.status === "completed" ? "not completed" : "completed";
      }
    },
    remove: (state, action) => {
      state.tasks = state.tasks.filter((item) => item.id !== action.payload);
    },
    edit: (state, action) => {
      const { id, newName} = action.payload;
      const taskToEdit = state.tasks.find((item) => item.id === id);
      if (taskToEdit) {
        taskToEdit.name = newName;
      }
    },
  
  },
});

export const tasks = state => state.toDoSlice.tasks;
export const category = state => state.toDoSlice.category;

export const { add, toggle, remove, edit, setCat } = toDoSlice.actions;

export default toDoSlice.reducer;