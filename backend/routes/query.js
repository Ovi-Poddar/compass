const express = require("express");
const router = express.Router();
const Query = require("../models/Query");
const { body, validationResult } = require("express-validator");
var fetchUser = require("../middleware/fetchUser");

// ROUTE 1: Add a query to a Business using: POST "/api/query/addquery/". Login required
router.post(
    "/addquery/:business_id",
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
        const query = new Query({
          text: text,
          user_id: req.user.id,
          business_id: req.params.business_id,
        });
        const savedQuery= await query.save();
        res.json(savedQuery);
      } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
      }
    }
  );

  // ROUTE 2: Get All the Reviews of this business using: GET "/api/query/getallqueries". Login required
router.get("/getallqueries/:business_id", async (req, res) => {
    try {
      const queries = await Query.find({
        business_id: req.params.business_id,
      })
        .populate("user_id", "user_name -_id")
        .select("-__v -business_id")
        .sort({ creation_date: -1 });
      res.json(queries);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  });
  
  module.exports = router;