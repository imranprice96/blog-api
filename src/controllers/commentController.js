const Comment = require("../models/comment");
const Post = require("../models/post");

// Fetch all comments
// /posts/:postid/comments
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
