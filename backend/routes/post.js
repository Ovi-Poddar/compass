const express = require("express");
const router = express.Router();
const Post = require("../models/Post");
const Business = require("../models/Business");
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
      let savedPost = await post.save();

      savedPost = await Post.findOne({
        _id: savedPost.id,
      })
        .populate("user_id", "user_name")
        .select("-__v -business_id");

      //increase the number of posts of the business
      const curr_business = await Business.findById(req.params.business_id);
      curr_business.post_count += 1;
      await curr_business.save();

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
      .populate("user_id", "user_name")
      .select("-__v -business_id")
      .sort({ creation_date: -1 });
    res.json(posts);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

// ROUTE 3: Get single post: GET "/api/post/:post_id".
router.get("/:post_id", async (req, res) => {
  try {
    const post = await Post.find({
      _id: req.params.post_id,
    });
    // .populate("user_id", "user_name -_id")
    // .select("-__v -business_id")
    // .sort({ creation_date: -1 });
    res.json(post);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

// Route 4: Delete a post: DELETE "/api/post/deletepost/:post_id".

router.delete("/deletepost/:post_id", fetchUser, async (req, res) => {
  try {
    // Find the post to be deleted and delete it
    let post = await Post.findById(req.params.post_id);

    if (!post) {
      return res.status(404).json({ msg: "Post not found" });
    }

    // Check if the user is the owner of the post
    if (post.user_id.toString() !== req.user.id) {
      return res.status(401).json({ msg: "User not authorized" });
    }

    // Decrease the number of posts of the business
    const curr_business = await Business.findById(post.business_id);
    curr_business.post_count -= 1;
    await curr_business.save();

    post = await Post.findByIdAndDelete(req.params.post_id);

    res.json({ Success: "Post deleted successfully", post: post });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

// Route 5: Update a post: PUT "/api/post/updatepost:post_id". Login required

router.put("/updatepost/:post_id", fetchUser, async (req, res) => {
  try {
    const { text } = req.body;

    // Create an object with the new text
    const newPost = {};
    if (text) newPost.text = text;

    newPost.creation_date = Date.now();

    // Find the post to be updated and update it

    let post = await Post.findById(req.params.post_id);

    if (!post) {
      return res.status(404).json({ msg: "Post not found" });
    }

    // Check if the user is the owner of the post
    if (post.user_id.toString() !== req.user.id) {
      return res.status(401).json({ msg: "User not authorized" });
    }
    post = await Post.findByIdAndUpdate(
      req.params.post_id,
      { $set: newPost },
      { new: true }
    );
    res.json({ Success: "Post updated successfully", post: post });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
