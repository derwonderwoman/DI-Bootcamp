const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const blog_posts = [
    {
        'id': 1,
        'title': 'Introduction to Python Programming',
        'content': 'Python is a powerful and versatile programming language...'
    },
    {
        'id': 2,
        'title': 'Data Analysis with Pandas',
        'content': 'Pandas is a popular library for data manipulation and analysis...'
    },
    {
        'id': 3,
        'title': 'Machine Learning Basics',
        'content': 'Machine learning is a branch of artificial intelligence...'
    }
];

app.listen(3001, () => {
        console.log("run on 3001");
});

app.get("/posts", (req, res) => {
    res.json(blog_posts);
  });

app.get("/posts/:id", (req, res) => {
    const { id } = req.params
    const blog_post = blog_posts.find((element) => element.id == id )
    if (!product) {
        return res.sendStatus(404);
      }
    res.status(200).json(blog_post);
});

app.post("/posts", (req,res) => {
    blog_posts.push(req.body)
    res.send("post created")
});


app.put("/posts/:id", (req, res) => {
    const { id } = req.params;
    const {title,content} = req.body;
    const index = blog_posts.findIndex((item) => item.id == id);
  
    if (index === -1) {
      return res.status(404).json({ msg: "not found" });
    }
    
    blog_posts[index] = {
      ...blog_posts[index],
      title
    };
    res.json(blog_posts);
});

app.delete("/posts/:id", (req, res) => {
    const { id } = req.params;
    const index = blog_posts.findIndex((item) => item.id == id);
    if (index === -1) {
      return res.status(404).json({ msg: "not found" });
    }
    blog_posts.splice(index, 1);
    res.json(blog_posts);
  });

