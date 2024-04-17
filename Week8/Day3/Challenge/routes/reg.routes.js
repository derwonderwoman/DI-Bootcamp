import express from "express";

import {
  getAllUsers,
  getUserById,
  updateUser,
  registerUser,
  loginUser
} from "../controllers/reg.control.js";

const router = express.Router();

router.get("/users", getAllUsers);
router.get("/users/:id", getUserById);
router.put("/users/:id", updateUser);
router.post("/register", registerUser);
router.post("/login", loginUser);

export default router;
