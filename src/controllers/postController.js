const Comment = require("../models/comment");
const Post = require("../models/post");

// GET - fetch all posts
// /posts
exports.post_list = async (req, res, next) => {
  const allPosts = await Post.find().sort({ createdAt: 1 }).exec();

  if (allPosts === null) {
    const err = new Error("Posts not found");
    err.status = 404;
    return next(err);
  }

  res.json({ posts: allPosts });
};

// POST - create new post
exports.post_create = async (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    text: req.body.text,
  });
  await post.save();
  res.send(post);
};

// GET - fetch single post
exports.post_detail = (req, res, next) => {
  res.send("not yet implemented");
};

// PUT - update a post
exports.post_update = (req, res, next) => {
  res.send("not yet implemented");
};

// DELETE - delete a post
exports.post_delete = (req, res, next) => {
  res.send("not yet implemented");
};
