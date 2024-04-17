import express from "express";

import {
  getAllTasks,
  getTaskById,
  deleteTask,
  updateTask,
  createTask,
} from "../controllers/task.control.js";

const router = express.Router();

router.get("/", getAllTasks);
router.get("/:id", getTaskById);
router.delete("/:id", deleteTask);
router.put("/:id", updateTask);
router.post("/", createTask);

export default router;
