const express = require("express");
const {
  getAmount,
  getAdvice
} = require ("../controllers/hackcontrol.js");

const router = express.Router();

router.get("/advice/:id", getAdvice);
router.get("/amounts/:id", getAmount);
router.get('/', (req, res) => {
  res.render('index', req.query);
});

module.exports = router;