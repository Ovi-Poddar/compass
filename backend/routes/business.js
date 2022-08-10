const express = require("express");
const router = express.Router();
const Business = require("../models/Business");
const { body, validationResult } = require("express-validator");
var fetchUser = require("../middleware/fetchUser");

// ROUTE 1: Get All the Businesses of this user using: GET "/api/business/getownbusinesses". Login required
router.get("/getownbusinesses", fetchUser, async (req, res) => {
  try {
    const businesses = await Business.find({ owner_id: req.user.id });
    res.json(businesses);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});
// ROUTE 2: Get All the Businesses of all users using: GET "/api/business/getallbusinesses". Login not required
router.get("/getallbusinesses", async (req, res) => {
  try {
    // Empty `filter` means "match all documents"
    const filter = {};
    const businesses = await Business.find(filter);
    res.json(businesses);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

// ROUTE 3: Add a new Business using: POST "/api/business/createbusiness". Login required
router.post(
  "/createbusiness",
  fetchUser,
  [
    body("business_name", "Enter a valid name").exists(),
    // body("contact_no", "Contact Number must be 11 digits").isLength(11),
    body("contact_no", "Contact Number must be 11 digits").exists(),
  ],
  async (req, res) => {
    try {
      const { business_name, contact_no, district, city, address, category, email, about } =
        req.body;

      // If there are errors, return Bad request and the errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        console.log("errors in backend");
        return res.status(400).json({ errors: errors.array() });
      }
      const business = new Business({
        business_name: business_name,
        owner_id: req.user.id,
        contact_no: contact_no,
        address: address,
        district: district,
        city: city,
        category: category,
        about: about,
        email: email,
      });
      const savedBusiness = await business.save();
      res.json({ success: true, business: savedBusiness });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

// ROUTE 4 : Upload Profile Picture using: POST "/api/business/uploadprofilepic". Login required
router.post(
  "/uploadprofilepic",
  fetchUser,
  [
    body("business_id", "Enter a valid business id").exists(),
    body("profile_image", "Enter a valid image").exists(),
  ],
  async (req, res) => {
    try {
      const { business_id, image } = req.body;

    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);


module.exports = router;
