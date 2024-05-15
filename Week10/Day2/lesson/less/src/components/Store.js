import {configureStore} from "@reduxjs/toolkit";

import {reducer} from "./Reducers";

const store = configureStore({
    reducer: {
        counter:reducer,
    },
})

export default store;