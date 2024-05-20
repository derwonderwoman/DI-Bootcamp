import { configureStore } from "@reduxjs/toolkit";
import toDoSlice from "./slice";


export default configureStore({
    reducer: {
        toDoSlice,
    }
})