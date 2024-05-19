import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    books : [
        {
          id: 1,
          title: "To Kill a Mockingbird",
          author: "Harper Lee",
          genre: "Classic"
        },
        {
          id: 2,
          title: "1984",
          author: "George Orwell",
          genre: "Dystopian"
        },
        {
          id: 3,
          title: "The Great Gatsby",
          author: "F. Scott Fitzgerald",
          genre: "Fiction"
        },
        {
          id: 4,
          title: "Pride and Prejudice",
          author: "Jane Austen",
          genre: "Romance"
        },
        {
          id: 5,
          title: "The Catcher in the Rye",
          author: "J.D. Salinger",
          genre: "Coming-of-age"
        },
        {
          id: 6,
          title: "Harry Potter and the Sorcerer's Stone",
          author: "J.K. Rowling",
          genre: "Fantasy"
        },
        {
          id: 7,
          title: "The Hobbit",
          author: "J.R.R. Tolkien",
          genre: "Fantasy"
        },
        {
          id: 8,
          title: "The Hunger Games",
          author: "Suzanne Collins",
          genre: "Young Adult"
        },
        {
          id: 9,
          title: "The Lord of the Rings",
          author: "J.R.R. Tolkien",
          genre: "Fantasy"
        },
        {
          id: 10,
          title: "Gone with the Wind",
          author: "Margaret Mitchell",
          genre: "Historical Fiction"
        }
      ],
}

export const bookSlice = createSlice({
    name: "books",
    initialState:initialState,
    reducers:{
        setGenreFilter: (state, action) => {
            state.genre = action.payload;
    }
}
})
        
export const books = state => state.bookSlice.books;
export const genre = state => state.bookSlice.genre;
export const {setGenreFilter} = bookSlice.actions;

export default bookSlice.reducer;