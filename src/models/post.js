const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema(
  {
    title: { type: String, required: true, maxLength: 100 },
    text: { type: String, required: true, maxLength: 1024 },
    published: { type: Boolean, default: false },
    // profile_image: blob
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
