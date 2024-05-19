import { createSelector } from '@reduxjs/toolkit';
import { books, genre } from './bookSlice';

export const selectBooksByGenre = createSelector([books,genre], (books, genre)=>{
    if(genre==='All') return books;
  return  books.filter(book => book.genre === genre)
});

export const selectAllGenres = createSelector([books,genre], (books, genre)=> {
      const uniqueGenres = new Set();
      books.forEach(book => uniqueGenres.add(book.genre));
      return Array.from(uniqueGenres);
    }
  );