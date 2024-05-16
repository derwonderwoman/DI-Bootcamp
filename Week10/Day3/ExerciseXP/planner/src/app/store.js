import { configureStore } from "@reduxjs/toolkit";
import toDoSlice from "../redux/toDoSlice";

export default configureStore({
    reducer: {
        toDoSlice,
    }
})