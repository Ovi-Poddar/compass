const express = require("express");
const router = express.Router();
const Review = require("../models/Review");
const User = require("../models/User");
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
        stars: req.body.rating,
      });
      let savedReview = await review.save();
      savedReview = await Review.findOne({
        _id: savedReview.id,
      })
        .populate("user_id", "user_name")
        .select("-__v -business_id");
      res.json(savedReview);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

// ROUTE 2: Get All the Reviews of this business using: GET "/api/review/getallreviews".
router.get("/getallreviews/:business_id", fetchUser, async (req, res) => {
  try {
    const reviews = await Review.find({
      business_id: req.params.business_id,
    })
      .populate("user_id", "user_name")
      .select("-__v -business_id")
      .sort({ creation_date: -1 });

    res.json(reviews);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

// ROUTE 3: Get single review: GET "/api/review/:review_id".
router.get("/:review_id", async (req, res) => {
  try {
    const review = await Review.find({
      _id: req.params.review_id,
    });
    // .populate("user_id", "user_name -_id")
    // .select("-__v -business_id")
    // .sort({ creation_date: -1 });
    res.json(review);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
