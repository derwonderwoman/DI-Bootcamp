import {configureStore} from "@reduxjs/toolkit";

import {reducer} from "./reducers"

const store = configureStore({
    reducer: {
        tasker:reducer,
    },
})

export default store;