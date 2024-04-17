const {
  _getAllBooks,
  _getBookById,
  _createBook,
} = require("../models/books.model.js");

const getAllBooks = (req, res) => {
  _getAllBooks()
    .then((data) => {
      res.json(data);
    })
    .catch((e) => {
      res.status(404).json({ msg: "something went wrong" });
      console.log(e);
    });
};

const getBookById = (req, res) => {
  const { bookId } = req.params;
  _getBookById(bookId)
    .then((data) => {
      res.json(data);
    })
    .catch((e) => {
      res.status(404).json({ msg: "something went wrong" });
      console.log(e);
    });
};

const createBook = (req, res) => {
    const {title, author, publishedyear} = req.body;
    _createBook(title, author, publishedyear)
    .then((data) => {
        res.json(data);
    })
    .catch((e) => {
        console.log(e);
    });
};

module.exports = {
    getAllBooks,
    getBookById,
    createBook
}