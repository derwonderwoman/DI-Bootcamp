const db = require("../config/data.js");

const _getAllBooks = () => {
  return db("books").select("id", "title", "author", "publishedyear").orderBy("id");
};

const _getBookById = (bookId) => {
    return db("books").select("id", "title", "author", "publishedyear").where({ id: bookId });
  };

const _createBook = (title, author, publishedyear) => {
  return db("books").insert({title, author, publishedyear }, ["id", "title", "author", "publishedyear"]);
};

module.exports = {
  _getAllBooks,
  _getBookById,
  _createBook,
};