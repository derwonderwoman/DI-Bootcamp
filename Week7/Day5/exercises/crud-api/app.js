import express from "express";
import { fetchPosts } from "./data/dataService";

const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
  
  app.listen(5000, () => {
    console.log("run on 5000");
});

app.get("/posts", async (req, res) => {
    try {
      const posts = await fetchPosts();
      res.json(posts);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  });

app.post("/posts", (req,res) => {
    posts.push(req.body);
    res.send("post created");
    res.status(201);
});


