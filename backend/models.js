const mongoose = require("mongoose");

const CommentsSchema = new mongoose.Schema({
  commentText: {
    type: String,
    required: true,
  },
  commentUser: {
    type: String,
    required: true,
  },
  dateOfComment: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("comment", CommentsSchema);
