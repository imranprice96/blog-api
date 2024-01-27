const Comment = require("../models/comment");
const Post = require("../models/post");

// GET - fetch all posts
// /posts
exports.post_list = async (req, res, next) => {
  const allPosts = await Post.find().sort({ createdAt: 1 }).exec();

  if (allPosts === null) {
    res.status(404).json({ error: "Posts not found" });
    return next();
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
exports.post_detail = async (req, res, next) => {
  const post = await Post.findById(req.params.postid).exec();
  if (post === null) {
    res.status(404).json({ error: "Post not found" });
    return next();
  }
  res.json(post);
};

// PUT - update a post
exports.post_update = async (req, res, next) => {
  try {
    //TODO validation - serverside or front end????
    const filter = { _id: req.params.postid };
    const update = { $set: req.body };
    await Post.updateOne(filter, update);
    res.send({ success: true });
  } catch {
    res.status(404).json({ error: "Post not found" });
    return next();
  }
};

// DELETE - delete a post and its comments
exports.post_delete = async (req, res, next) => {
  try {
    await Post.findByIdAndDelete(req.params.postid);
    await Comment.deleteMany({ post_id: req.params.postid });
    res.send({ success: true });
  } catch (error) {
    res.send(error);
    next();
  }
};
