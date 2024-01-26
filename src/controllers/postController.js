const Comment = require("../models/comment");
const Post = require("../models/post");

// Fetch all posts
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

exports.post_create = async (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    text: req.body.text,
  });
  await post.save();
  res.send(post);
};
