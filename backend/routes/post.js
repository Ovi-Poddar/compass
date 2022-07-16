const express = require("express");
const router = express.Router();
const Post = require("../models/Post");
const { body, validationResult } = require("express-validator");
var fetchUser = require("../middleware/fetchUser");

// ROUTE 1: Add a post to a Business using: POST "/api/post/addpost/". Login required
router.post(
    "/addpost/:business_id",
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
        const post = new Post({
          text: text,
          user_id: req.user.id,
          business_id: req.params.business_id,
        });
        const savedPost= await post.save();
        res.json(savedPost);
      } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
      }
    }
  );

  // ROUTE 2: Get All the Posts of this business using: GET "/api/post/getallposts".
router.get("/getallposts/:business_id", async (req, res) => {
    try {
      const posts = await Post.find({
        business_id: req.params.business_id,
      })
        .populate("user_id", "user_name -_id")
        .select("-__v -business_id")
        .sort({ creation_date: -1 });
      res.json(posts);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  });
  
  module.exports = router;