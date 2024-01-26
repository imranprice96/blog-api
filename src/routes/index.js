const express = require("express");
const router = express.Router();
const cors = require("cors");
const post_controller = require("../controllers/postController");
const comment_controller = require("../controllers/commentController");

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
router.get("/posts/:postid", post_controller.post_detail);

// PUT - update a post
router.put("/posts/:postid", post_controller.post_update);

// DELETE - delete a post
router.delete("/posts/:postid", post_controller.post_delete);

// GET - fetch all comments for a post
router.get("/posts/:postid/comments", comment_controller.comment_list);

// POST - create new comment for a post
router.post("/posts/:postid", comment_controller.comment_create);

// DELETE - delete a comment
router.delete(
  "/posts/:postid/comments/:commentid",
  comment_controller.comment_delete
);

module.exports = router;

//curl -X POST -H "Content-Type:application/json" http://localhost:3000/posts -d '{"title": "Hello", "text":"Hi again, World"}'
