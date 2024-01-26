const express = require("express");
const router = express.Router();
const cors = require("cors");
const post_controller = require("../controllers/postController");

router.use(cors());
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

// ./log-in
// ./log-out

// GET - fetch all posts
router.get("/posts", post_controller.post_list);

// POST - create new post
router.post("/posts", post_controller.post_create);

// GET - fetch single post
router.get("/posts/post:id", (req, res) => {
  res.json({ msg: "to be implemented" });
});

// PUT - update a post
router.put("/posts/:postid", (req, res) => {
  res.json({ msg: "to be implemented" });
});

// DELETE - delete a post
router.delete("/posts/:postid", (req, res) => {
  res.json({ msg: "to be implemented" });
});

// GET - fetch all comments for a post
router.get("/posts/:postid/comments", (req, res) => {
  res.json({ msg: "to be implemented" });
});

// POST - create new comment for a post
router.post("/posts/:postid", (req, res) => {
  res.json({ msg: "to be implemented" });
});

// DELETE - delete a comment
router.delete("/posts/:postid", (req, res) => {
  res.json({ msg: "to be implemented" });
});

module.exports = router;

//curl -X POST -H "Content-Type:application/json" http://localhost:3000/posts -d '{"title": "Hello", "text":"Hi again, World"}'
