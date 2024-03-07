const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const {isLoggedIn, isOwner, validateListing} = require("../middleware.js");
const Listing=require("../models/listing.js");

const multer  = require('multer');
const { storage } = require("../cloudconfig.js");
const upload = multer({ storage});

const listingController = require("../controllers/listings.js");

//index route and create route
router 
.route("/")
.get(wrapAsync(listingController.index))
.post(isLoggedIn,
    upload.single('listing[image]'),validateListing,wrapAsync(listingController.createListing));

//new route
route.get("/new",isLoggedIn, listingController.renderNewForm);

//show,update and delete route 
router.route("/:id")
.get(wrapAsync(listingController.showListing))
.put(isLoggedIn,isOwner,upload.single('listing[image]'),validateListing,wrapAsync(listingController.updateListing)) 
.delete(isLoggedIn,isOwner,wrapAsync(listingController.destroyListing));

//edit route
router.get("/:id/edit",isLoggedIn,isOwner,wrapAsync(listingController.renderEditForm));

module.exports = router;