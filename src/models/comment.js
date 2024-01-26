const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentSchema = new Schema(
  {
    blog_id: { type: Schema.Types.ObjectId, ref: "Post" },
    username: { type: String, required: true, maxLength: 100 },
    text: { type: String, required: true, maxLength: 1024 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Comment", CommentSchema);
