const express = require("express");
const router = express.Router();
const Review = require("../models/Review");
const User = require("../models/User");
const Business = require("../models/Business");
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

      // increase the number of reviews of the business
      const curr_business = await Business.findById(req.params.business_id);
      curr_business.review_count += 1;
      await curr_business.save();

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

    res.json(review);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

// ROUTE 4: Delete an existing Review using: DELETE "/api/review/deletereview". Login required
router.delete("/deletereview/:review_id", fetchUser, async (req, res) => {
  try {
    // Find the review to be deleted and delete it
    let review = await Review.findById(req.params.review_id);
    if (!review) {
      return res.status(404).send("Not Found");
    }

    // Allow deletion only if user owns this Review
    if (review.user_id.toString() !== req.user.id) {
      return res.status(401).send("Not Allowed");
    }

    review = await Review.findByIdAndDelete(req.params.review_id);

    // decrease the number of reviews of the business
    const curr_business = await Business.findById(review.business_id);
    curr_business.review_count -= 1;
    await curr_business.save();

    res.json({ Success: "Review has been deleted", review: review });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

// ROUTE 5: Update an existing Review using: PUT "/api/review/updatereview". Login required
router.put("/updatereview/:review_id", fetchUser, async (req, res) => {
  const { text, stars } = req.body;
  try {
    // Create a New Review object
    const newReview = {};
    if (text) {
      newReview.text = text;
    }
    if (stars) {
      newReview.stars = stars;
    }

    // Find the review to be updated and update it
    let review = await Review.findById(req.params.review_id);
    if (!review) {
      return res.status(404).send("Not Found");
    }
    // Allow update only if user owns this Review
    if (review.user_id.toString() !== req.user.id) {
      return res.status(401).send("Not Allowed");
    }
    review = await Review.findByIdAndUpdate(
      req.params.review_id,
      { $set: newReview },
      { new: true }
    );
    res.json({ review });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
