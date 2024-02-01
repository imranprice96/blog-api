const Comment = require("../models/comment");
const Post = require("../models/post");

const validator = require("../config/validators");
const { validationResult } = require("express-validator");

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
exports.post_create = [
  validator.postValidator,
  async (req, res, next) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      const post = new Post({
        title: req.body.title,
        text: req.body.text,
      });
      await post.save();
      res.status(200).json({ post });
    } else {
      res.status(422).json({ errors: errors.array() });
      return next();
    }
  },
];

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
exports.post_update = [
  validator.postValidator,
  async (req, res, next) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      try {
        const filter = { _id: req.params.postid };
        const update = { $set: req.body };
        await Post.updateOne(filter, update);
        res.status(200).json({ update: update });
      } catch {
        res.status(404).json({ error: "Post not found" });
        return next();
      }
    } else {
      res.status(422).json({ errors: errors.array() });
      return next();
    }
  },
];

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
