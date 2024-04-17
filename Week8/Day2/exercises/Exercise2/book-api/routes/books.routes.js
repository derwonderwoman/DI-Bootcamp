const express = require("express");

const {
    getAllBooks,
    getBookById,
    createBook,
} = require("../controllers/books.control.js");

const router = express.Router();

router.get("/api/books", getAllBooks);
router.get("/api/books/:bookId", getBookById);
router.post("/api/books", createBook)

module.exports = router;