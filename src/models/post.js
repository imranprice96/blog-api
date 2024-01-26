const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema(
  {
    author_id: { type: Schema.Types.ObjectId, ref: "User" },
    title: { type: String, required: true, maxLength: 1000 },
    text: { type: String, required: true, maxLength: 1024 },
    published: { type: Boolean, required: true },
    // profile_image: blob
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);

// User file server to serve profile picture image? -> Cloudinary free
