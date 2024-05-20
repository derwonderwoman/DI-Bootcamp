import {createSlice} from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
   age: 0,
   loading:false
}

export const delayIncrementThunk = createAsyncThunk("counter/increment", () => {
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res(1)
        },3000);
    })
})

export const delayDecrementThunk = createAsyncThunk("counter/decrement", () => {
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res(-1)
        },3000);
    })
})

export const Slice = createSlice({
    name: "task",
    initialState:initialState,
    reducers:{ },
    extraReducers(builder) {
        builder
        .addCase(delayIncrementThunk.pending, (state,action) =>{
            state.loading = true;
        })
        .addCase(delayIncrementThunk.rejected, (state,action) =>{
            console.log(action);
            state.age =action.error.message;
        })
        .addCase(delayIncrementThunk.fulfilled, (state,action) =>{
            state.age +=action.payload;
            state.loading = false;
        })
        .addCase(delayDecrementThunk.pending, (state,action) =>{
            state.loading = true;
        })
        .addCase(delayDecrementThunk.rejected, (state,action) =>{
            console.log(action);
            state.age =action.error.message;
        })
        .addCase(delayDecrementThunk.fulfilled, (state,action) =>{
            state.age +=action.payload;
            state.loading = false;
        })
        

    }
})

export const { actions } = Slice;

export default Slice.reducer;