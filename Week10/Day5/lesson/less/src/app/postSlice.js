import {createSlice, createAsyncThunk, nanoid} from "@reduxjs/toolkit"
import axios from "axios"

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () =>{
    const res = await axios.get ('https://jsonplaceholder.typicode.com/posts');
    return res.data;
})

const initialState = {
    posts: [],
    status: "", //'loading, succeeded, failed
}

export const postSlice = createSlice({
    name:"posts",
    initialState:initialState,
    reducers:{
        addReaction : (state,action) => {
            const {id, name} = action.payload;
            const post = state.posts.find(post => post.id === id)
            if(post) {
                post.reactions[name]++;
            }
        }
    },
    extraReducers(builder) {
        builder
        .addCase(fetchPosts.pending, (state,action) => {
            state.status = "loading";
        })
        .addCase(fetchPosts.fulfilled, (state,action) =>{
            state.status = "succeded"
            const loadedPosts = action.payload.map(post => {
                post.reactions = {
                thumbsUp: 0,
                wow: 0,
                heart: 0,
                rocket: 0,
                coffee: 0,
            };
            return post
        });
        state.posts = loadedPosts;
        })
        .addCase(fetchPosts.rejected, (state,action) => {
            state.status = "failed";
    })
}});

export const status = (state) => state.postSlice.status;
export const posts = (state) => state.postSlice.posts;
export const {addReaction} = postSlice.actions;
export default postSlice.reducer;