const express = require("express");
const router = express.Router();
const Business = require("../models/Business");
const { body, validationResult } = require("express-validator");
const multer = require("multer");
// const upload = multer({ dest: 'uploads/' })
var fetchUser = require("../middleware/fetchUser");

const {
  addImage, addMultipleImages,
 } = require('../imageController');

// Setting up multer as a middleware to grab photo uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage }).single('profile_image');
const uploads = multer({ storage: storage }).array('images[]', 10);
// const uploads = multer({ dest: 'uploads/' })

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
      const {
        business_name,
        contact_no,
        district,
        city,
        address,
        category,
        email,
        about,
        tags,
        opening_days,
        opening_time,
        closing_time,
      } = req.body;

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
        tags: tags,
        opening_days: opening_days,
        opening_time: opening_time,
        closing_time: closing_time,
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
router.post("/uploadprofilepic", upload, addImage, async (req, res) => {
  try {
    const { business_id } = req.body;
    const { downloadURL } = req.file;
    console.log(downloadURL);
    const business = await Business.findOne({ _id: business_id });
    business.profile_image = downloadURL;
    const savedBusiness = await business.save();
    res.json({ success: true, business: savedBusiness });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

// Route 5: get a business using: GET "/api/business/getbusiness/:business_id". Login Not required
router.get("/getbusiness/:business_id", async (req, res) => {
  try {
    const { business_id } = req.params;
    const business = await Business.findOne({ _id: business_id });
    res.json(business);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

// Route 6: get the owner of a business using: GET "/api/business/getowner/:business_id". Login required
router.get("/getowner/:business_id", fetchUser, async (req, res) => {
  try {
    const { business_id } = req.params;
    const business = await Business.findOne({ _id: business_id });
    res.json(String(business.owner_id));
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

//Route 7 : upload photos to a business using: POST "/api/business/uploadphotos". Login required
router.post('/uploadphotos', uploads, fetchUser, addMultipleImages, async (req, res, next) => {
  try {
    const { business_id } = req.body;
    const downloadURLs =  req.downloadURLs;
    console.log("downloadURLs", downloadURLs);
    const business = await Business.findOne({ _id: business_id });
    // console.log(Object.keys(business.images));  
    /**
     * You can't just push the downloadURLs to the images array,
     * because the array is an array of objects, not an array of strings.
     * So you need to convert the string array to an array of objects.
     * then push the objects to the images array. 
     * here, key is the number of the image, and value is the downloadURL
     */
    let length = Object.keys(business.images).length;
    downloadURLs.forEach(url => {
      business.images[length] = url;
      length++;
    });
    //save the business with the new images array
    const savedBusiness = await business.save();
    res.json({ success: true, images: savedBusiness.images });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

//Route 8: Get all photos of the business using: GET "/api/business/getphotos/:business_id". Login required
router.get("/getphotos/:business_id", async (req, res) => {
  try {
    const { business_id } = req.params;
    const business = await Business.findOne({ _id: business_id });
    res.json(business.images);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

// Added by Tanvir

// ROUTE 9: Get full menu of the Business using: GET "/api/business/getfullmenu". Login not required
router.get("/getfullmenu/:business_id", async (req, res) => {
  try {
    const business = await Business.findById(req.params.business_id);
    res.json(business);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
