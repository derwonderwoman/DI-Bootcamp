import express from 'express';
import books from "./data.js"
const router = express.Router();


router.get('/books', (req, res) => {
  res.json(books);
});

router.post('/books', (req, res) => {
  books.push(req.body);
  res.send("book created");
  res.status(201);
});

router.put('/books/:id', (req,res) =>{
  const { id } = req.params;
  const {author,title} = req.body;
  const index = books.findIndex((item) => item.id == id);
  
  if (index === -1) {
    return res.status(404).json({ msg: "not found" });
  }
    
  books[index] = {
    ...books[index],
    title,
    author
  };
    res.json(books);
});

router.delete("/books/:id", (req, res) => {
  const { id } = req.params;
  const index = books.findIndex((item) => item.id == id);
  if (index === -1) {
    return res.status(404).json({ msg: "not found" });
  }
  books.splice(index, 1);
  res.json(books);
});

export default router;