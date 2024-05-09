const express = require("express");
const {auth} = require('../middlewares/utils.js')

const {
  getAllUsers,
  getUserById,
} = require("../controllers/users.controller.js");

const router = express.Router();

router.get("/", auth, getAllUsers);
router.get("/:id", getUserById);

module.exports = router;
