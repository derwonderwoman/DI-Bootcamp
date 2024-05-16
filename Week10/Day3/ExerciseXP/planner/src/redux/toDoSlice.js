import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

export const toDoSlice = createSlice({
  name: "task",
  initialState: initialState,
  reducers: {
    add: (state, action) => {
      const { name, date } = action.payload;
      state.tasks.push({ id: nanoid(), name, date, status: "not completed" });
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
      const { id, newName, newDate } = action.payload;
      const taskToEdit = state.tasks.find((item) => item.id === id);
      if (taskToEdit) {
        taskToEdit.name = newName;
        taskToEdit.date = newDate;
      }
    },
  },
});

export const { add, toggle, remove, edit } = toDoSlice.actions;

export default toDoSlice.reducer;