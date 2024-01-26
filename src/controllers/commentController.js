const Comment = require("../models/comment");
const Post = require("../models/post");

// GET - fetch all comments for a post
exports.comment_list = async (req, res, next) => {
  const [post, comments] = await Promise.all([
    Post.findById(req.params.id).exec(),
    Comment.find({ post: req.params.id }).exec(),
  ]);
  if (genre === null) {
    const err = new Error("Comments not found");
    err.status = 404;
    return next(err);
  }

  res.json({ post: post, comments: comments });
};

// POST - create new comment for a post
exports.comment_create = (req, res, next) => {
  res.send("not yet implemented");
};

// DELETE - delete a comment
exports.comment_delete = (req, res, next) => {
  res.send("not yet implemented");
};
