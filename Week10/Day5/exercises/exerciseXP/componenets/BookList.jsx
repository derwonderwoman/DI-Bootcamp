import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {selectBooksByGenre, selectAllGenres } from '../app/bookHooks';
import { setGenreFilter } from '../app/bookSlice';

const BookList = () => {
const [selectedGenre, setSelectedGenre] = useState('All');

const books = useSelector(selectBooksByGenre);
const genres = useSelector(selectAllGenres);
const dispatch = useDispatch();

const handleGenreChange = (genre) => {
    dispatch(setGenreFilter(genre));
    setSelectedGenre(genre);
  };


  return (
    <div>
      <h1>Book Inventory</h1>
      <select value={selectedGenre} onChange={(e) => handleGenreChange(e.target.value)}>
        <option value="All">All Genres</option>
        {genres.map(genre => (
          <option key={genre.id} value={genre}>{genre}</option>
        ))}
      </select>
      <ul>
        {books.map(book => (
          <li key={book.id}>{book.title} by {book.author}</li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;