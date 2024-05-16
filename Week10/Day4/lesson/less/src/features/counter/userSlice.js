import {createSlice, createAsyncThunk, nanoid} from "@reduxjs/toolkit"

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () =>{
    const res = await fetch ('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    return data;
})

const initialState = {
    users: [],
    status: "", //'loading, succeeded, failed
}

export const userSlice = createSlice({
    name:"users",
    initialState:initialState,
    reducers:{
        addUser: (state, action) => {
            state.users.push({id:nanoid(),name: action.payload})
        },
        addUserWithPrepare: {
            reducer(state,action){
                state.users.push(action.payload)
            },
            prepare(text) {
                return {
                    payload: {id:nanoid(), name:text}
            };
        }
    }
    },
    extraReducers(builder) {
        builder
        .addCase(fetchUsers.pending, (state,action) => {
            state.status = "loading";
        })
        .addCase(fetchUsers.fulfilled, (state,action) =>{
            state.status = "succeded"
            state.users = action.payload;
        })
        .addCase(fetchUsers.rejected, (state,action) => {
            state.status = "failed";
    })
}});
export const {addUser, addUserWithPrepare} = userSlice.actions;
export default userSlice.reducer;