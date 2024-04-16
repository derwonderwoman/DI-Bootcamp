import express from 'express';
import todos from "./data.js"
const router = express.Router();


router.get('/todos', (req, res) => {
  res.json(todos);
});

router.post('/todos', (req, res) => {
  todos.push(req.body);
  res.send("task created");
  res.status(201);
});

router.put('/todos/:id', (req,res) =>{
  const { id } = req.params;
  const {content,status} = req.body;
  const index = todos.findIndex((item) => item.id == id);
  
  if (index === -1) {
    return res.status(404).json({ msg: "not found" });
  }
    
  todos[index] = {
    ...todos[index],
    status
  };
    res.json(todos);
});

router.delete("/todos/:id", (req, res) => {
  const { id } = req.params;
  const index = todos.findIndex((item) => item.id == id);
  if (index === -1) {
    return res.status(404).json({ msg: "not found" });
  }
  todos.splice(index, 1);
  res.json(todos);
});

export default router;