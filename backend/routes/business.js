const express = require("express");
const router = express.Router();
const Business = require("../models/Business");
const { body, validationResult } = require("express-validator");
var fetchUser = require("../middleware/fetchUser");

// ROUTE 1: Add a new Business using: POST "/api/business/create". Login required
router.post(
  "/createbusiness",
  fetchUser,
  [
    body("business_name", "Enter a valid name").isLength({ min: 3 }),
    // body("contact_no", "Contact Number must be 11 digits").isLength(11),
    body("contact_no", "Contact Number must be 11 digits").exists(11),
  ],
  async (req, res) => {
    try {
      const {
        business_name,
        contact_no,
        district,
        city,
        address,
        category
      } = req.body;

      // If there are errors, return Bad request and the errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        console.log("errors in backend");
        return res.status(400).json({ errors: errors.array() });
      }
      const business = new Business({
        business_name : business_name,
        owner_id: req.user.id,
        contact_no: contact_no,
        address: address,
        district: district,
        city: city, 
        category: category,
      });
      const savedBusiness = await business.save();
      res.json(savedBusiness);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

module.exports = router;
