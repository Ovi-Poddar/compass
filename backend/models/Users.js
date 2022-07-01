import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
  user_name: {
    type: String,
    required: true,
  },

  user_email: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },

  // integer, the number of reviews they've written
  review_count: { type: Number, default: 0 },

  // string, when the user joined Yelp, formatted like YYYY-MM-DD
  joined_since: { type: Date, default: Date.now },

  // float, average rating of all reviews
  average_stars: { type: Number, default: 0 },

});

module.exports = mongoose.model("User", userSchema);