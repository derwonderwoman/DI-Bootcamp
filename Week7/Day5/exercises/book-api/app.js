import express from "express"
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const books = [
    {
      id: 1,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      publishedYear: 1960
    },
    {
      id: 2,
      title: "1984",
      author: "George Orwell",
      publishedYear: 1949
    },
    {
      id: 3,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      publishedYear: 1925
    }
  ];
  
  app.listen(5000, () => {
    console.log("run on 5000");
});

app.get("/api/books", (req, res) => {
    res.json(books);
  });

app.get("/api/books/:id", (req, res) => {
    const { id } = req.params
    const book = books.find((element) => element.id == id )
    if (!book) {
        console.log("Book not found");
        return res.sendStatus(404);
      }
    res.status(200).json(book);
});

app.post("/api/books", (req,res) => {
    books.push(req.body);
    res.send("book created");
    res.status(201);
});

