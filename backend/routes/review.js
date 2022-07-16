const express = require("express");
const router = express.Router();
const Review = require("../models/Review");
const { body, validationResult } = require("express-validator");
var fetchUser = require("../middleware/fetchUser");

// ROUTE 1: Add a review to a Business using: POST "/api/review/addreview/". Login required
router.post(
  "/addreview/:business_id",
  fetchUser,
  [body("text", "Enter a valid name").isLength({ min: 3 })],
  async (req, res) => {
    try {
      const { text } = req.body;
      // If there are errors, return Bad request and the errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const review = new Review({
        text: text,
        user_id: req.user.id,
        business_id: req.params.business_id,
      });
      const savedReview = await review.save();
      res.json(savedReview);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

// ROUTE 2: Get All the Reviews of this business using: GET "/api/review/getallreviews".
router.get("/getallreviews/:business_id", async (req, res) => {
  try {
    const reviews = await Review.find({
      business_id: req.params.business_id,
    })
      .populate("user_id", "user_name -_id")
      .select("-__v -business_id")
      .sort({ creation_date: -1 });
    res.json(reviews);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
