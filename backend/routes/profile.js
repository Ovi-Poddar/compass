const express = require("express");
const router = express.Router();
const Review = require("../models/Review");
const User = require("../models/User");
const Business = require("../models/Business");
const { body, validationResult } = require("express-validator");
var fetchUser = require("../middleware/fetchUser");

// ROUTE 1:create a profile for a user using: POST "/api/profile/createprofile". Login required
router.post(
  "/createprofile",
  fetchUser,
  [body("user_name", "Enter a valid name").isLength({ min: 3 })],
  async (req, res) => {
    try {
      const { user_name } = req.body;
      // If there are errors, return Bad request and the errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const user = new User({
        user_name: user_name,
        user_email: req.user.user_email,
        password: req.user.password,
        review_count: 0,
        joined_since: Date.now(),
        average_stars: 0,
      });
      let savedUser = await user.save();
      savedUser = await User.findOne({
        _id: savedUser.id,
      })
        .populate("user_id", "user_name")
        .select("-__v -password");
      res.json(savedUser);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

// ROUTE 2: Get single userprofile: GET "/api/getprofile/:profile_id".
router.get("/getprofile/:profile_id", async (req, res) => {
  try {
    const profile = await User.find({
      _id: req.params.profile_id,
    });
    res.json(profile);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

// ROUTE 3: Delete an existing profile using: DELETE "/api/profile/deleteprofile". Login required
router.delete("/deleteprofile/:profile_id", fetchUser, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }
    //only if the user owns this profile, delete it
    if (user.user_id.toString() !== req.user.id) {
      return res.status(401).send("Not Allowed");
    }
    await User.findByIdAndDelete(req.user.id);
    res.json({ msg: "Profile deleted" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

// ROUTE 4: Update an existing profile using: PUT "/api/profile/updateprofile". Login required
router.put("/updateprofile/:profile_id", fetchUser, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }
    //only if the user owns this profile,then update it
    if (user.user_id.toString() !== req.user.id) {
      return res.status(401).send("Not Allowed");
    }
    await User.findByIdAndUpdate(req.user.id, req.body);
    res.json({ msg: "Profile updated" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
