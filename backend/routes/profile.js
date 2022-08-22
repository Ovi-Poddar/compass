const express = require("express");
const router = express.Router();
const multer = require("multer");
const Review = require("../models/Review");
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
var fetchUser = require("../middleware/fetchUser");
const { addImage, addMultipleImages } = require("../imageController");

const storage = multer.memoryStorage();
const upload = multer({ storage: storage }).single("profile_image");

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

// ROUTE 2: Get single userprofile: GET "/api/getprofile/:profile_id". LOGIN not required
router.get("/getprofile/:profile_id", async (req, res) => {
  try {
    const profile = await User.findById(req.params.profile_id).select(
      "-password -__v"
    );
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
  console.log("aschi");
  // console.log(req.headers.user_name);
  // console.log("req", req.body);
  const { user_name, user_email } = req.headers;
  console.log(user_name, user_email);

  try {
    // Create a new query object
    const newProfile = {};
    if (user_name) newProfile.user_name = user_name;
    if (user_email) newProfile.user_email = user_email;

    newProfile.creation_date = Date.now();

    // Find the query to be updated and update it
    let profile = await User.findById(req.params.profile_id);

    if (!profile) {
      return res.status(404).json({ msg: "User not found" });
    }

    // Allow update only if user owns this Query
    // if (profile.profile_id.toString() !== req.user_id) {
    //   return res.status(401).json({ msg: "Not authorized" });
    // }

    profile = await User.findByIdAndUpdate(
      req.params.profile_id,
      { $set: newProfile },
      { new: true }
    );
    res.json({ Success: "Profile updated successfully", query: profile });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

// ROUTE 5 : Upload Profile Picture using: POST "/api/profile/uploadprofilepic". Login required
router.post("/uploadprofilepic", upload, addImage, async (req, res) => {
  try {
    const { profile_id } = req.body;
    const { downloadURL } = req.file;
    console.log(downloadURL);
    const user = await User.findOne({ _id: profile_id });
    user.profile_image = downloadURL;
    const savedUser = await user.save();
    res.json({ success: true, user: savedUser });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
