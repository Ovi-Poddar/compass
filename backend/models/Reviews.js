import mongoose from "mongoose";
const { Schema } = mongoose;

const reviewSchema = new Schema({
    
  // string, 22 character unique review id
  review_id: String,

  // string, 22 character unique user id, maps to the user in user.json
  user_id: String,

  // string, 22 character business id, maps to business in business.json
  business_id: String,

  // integer, star rating
  stars: { type: Number, default: 0 },

  // string, date formatted YYYY-MM-DD
  date: { type: Date, default: Date.now },

  // string, the review itself
  text: { type: String, required: true },

  // integer, number of useful votes received
  useful: { type: Number, default: 0 },

  // integer, number of funny votes received
  funny: { type: Number, default: 0 },
});

module.exports = mongoose.model("Review", reviewSchema);
