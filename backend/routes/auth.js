const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");

// Create a User using : POST "/api/auth/"
router.post(
  "/",
  [
    // username must be at least 5 chars long
    body("user_name", "Enter a valid name").isLength({ min: 3 }),
    // username must be an email
    body("user_email", "Enter a valid email").isEmail(),
    // password must be at least 5 chars long
    body("password", "Password must be atleast 5 characters").isLength({
      min: 5,
    }),
  ],
  (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    User.create({
      user_name: req.body.user_name,
      user_email: req.body.user_email,
      password: req.body.password,
    }).then((user) => res.json(user))
    .catch((err) => {
        console.log(err);
        res.status(500).json({ error: err , message : err.message});
    });
  }
);

module.exports = router;
