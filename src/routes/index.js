const express = require("express");
const router = express.Router();
const cors = require("cors");
const post_controller = require("../controllers/postController");
const comment_controller = require("../controllers/commentController");
const verifyToken = require("../controllers/authController");
const { verify } = require("jsonwebtoken");

router.use(cors());
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

// ./log-in
// ./log-out

// Test route
router.get("/", verifyToken, (req, res) => {
  res.status(200).json({ message: "Protected route accessed" });
});

// GET - fetch all posts
router.get("/api/posts", post_controller.post_list);

// POST - create new post
router.post("/api/posts", verifyToken, post_controller.post_create);

// GET - fetch single post
router.get("/api/posts/:postid", post_controller.post_detail);

// PUT - update a post
router.put("/api/posts/:postid", verifyToken, post_controller.post_update);

// DELETE - delete a post
router.delete("/api/posts/:postid", verifyToken, post_controller.post_delete);

// GET - fetch all comments for a post
router.get("/api/posts/:postid/comments", comment_controller.comment_list);

// POST - create new comment for a post
router.post("/api/posts/:postid", comment_controller.comment_create);

// DELETE - delete a comment
router.delete(
  "/api/posts/:postid/comments/:commentid",
  verifyToken,
  comment_controller.comment_delete
);

module.exports = router;

/*
{
  "username": "Foul_Tarnished",
  "password":""
}
*/
