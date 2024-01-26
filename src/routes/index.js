const express = require("express");
const router = express.Router();
const cors = require("cors");

router.use(cors());

router.get("/", (req, res) => {
  res.json({ msg: "to be implemented" });
});

// GET all posts
router.get("/posts", (req, res) => {
  res.json({ msg: "to be implemented" });
});

// Get single post
router.get("/posts/post:id", (req, res) => {
  res.json({ msg: "to be implemented" });
});

// POST single post
router.post("/posts/post:id", (req, res) => {
  res.json({ msg: "to be implemented" });
});

module.exports = router;
