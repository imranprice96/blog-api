const Comment = require("../models/comment");
const Post = require("../models/post");

// GET - fetch all comments for a post
exports.comment_list = async (req, res, next) => {
  try {
    const [post, comments] = await Promise.all([
      Post.findById(req.params.postid).exec(),
      Comment.find({ post_id: req.params.postid }).exec(),
    ]);
    res.json({ post: post, comments: comments });
  } catch {
    res.status(404).json({ error: "404 not found" });
    return next();
  }
};

// POST - create new comment for a post
exports.comment_create = async (req, res, next) => {
  try {
    const comment = new Comment({
      //validaiton
      post_id: req.params.postid,
      username: req.body.username,
      text: req.body.text,
    });
    await comment.save();
    res.json(comment);
  } catch (error) {
    res.send(error);
    return next();
  }
};

// DELETE - delete a comment
exports.comment_delete = async (req, res, next) => {
  try {
    await Comment.findByIdAndDelete(req.params.commentid);
    res.send({ success: true });
  } catch (error) {
    res.send(error);
    return next();
  }
};
