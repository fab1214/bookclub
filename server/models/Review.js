const { Schema, model } = require("mongoose");
const commentSchema = require('./Comment');

const reviewSchema = new Schema({
  reviewBody: {
    type: String,
    required: "You must leave a review!",
    minLength: 1,
    maxLength: 20000,
  },
  username: {
    type: String,
    required: true,
  },

  createdAt: {
    type: String,
    default: Date.now,
  },
  comments: [commentSchema]
});

const Review = model("Review", reviewSchema);

//Export User model
module.exports = Review;
