import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"

const initialState = {
    count: 0
}

export const delayIncrementThunk = createAsyncThunk("counter/delay", () => {
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            rej(-1),
            res(101)
        },5000);
    })
})

export const counterSlice = createSlice({
    name:"counter",
    initialState:initialState,
    reducers: {
        // counter/increment
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
        reset: (state) => {
            state.count = 0;
        },
        incrementByNumber:(state, action) => {
            state.count += Number(action.payload);
        },
        incrementWithPrepare : {
            reducer(state,action){
                state.count +=Number(action.payload)

            },
            prepare(param1,param2) {
                return {payload: param1 + param2}
            },
        },
        // delayIncrement: (state) => {
        //     setTimeout(() => {
        //         state.count += 101;
        //     }, 3000);
        // },
        },
        extraReducers(builder) {
            builder
            .addCase(delayIncrementThunk.pending, (state,action) =>{
                state.count += 4;
            })
            .addCase(delayIncrementThunk.rejected, (state,action) =>{
                console.log(action);
                state.count =action.error.message;
            })
            .addCase(delayIncrementThunk.fulfilled, (state,action) =>{
                state.count +=action.payload;
            })
            
        }

    });

export const {increment, decrement, reset, incrementByNumber, incrementWithPrepare, delayIncrement} = counterSlice.actions;

export default counterSlice.reducer;