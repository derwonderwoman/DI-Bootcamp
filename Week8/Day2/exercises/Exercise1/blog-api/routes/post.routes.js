import express from "express";

import {
  getAllPosts,
  getPostById,
  deletePost,
  updatePost,
  createPost,
} from "../controllers/post.control.js";

const router = express.Router();

router.get("/", getAllPosts);
router.get("/:id", getPostById);
router.delete("/:id", deletePost);
router.put("/:id", updatePost);
router.post("/", createPost);

export default router;
