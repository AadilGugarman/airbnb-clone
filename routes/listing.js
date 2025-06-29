const express = require('express');
const router = express.Router({mergeParams: true});
const wrapAsync = require('../utils/WrapAsync.js')
const {validateListings} = require('../middleware/validate.js');
const {isLoggedIn, isOwner} = require('../middleware/index.js')
const listingControllers = require('../controllers/listings.js')
const multer  = require('multer')
const {storage} = require('../cloudConfig.js')
const upload = multer({storage })



router.route('/')
//All Listings Page
.get( wrapAsync  (listingControllers.home))
//Post Route
.post( isLoggedIn , upload.single('listing[image]'),validateListings , wrapAsync (listingControllers.postListing ))

//Edit Page
router.get('/:id/edit' ,isLoggedIn, isOwner,  wrapAsync (listingControllers.editListingPage));

//Create New Listing Page
router.get('/new' ,isLoggedIn, (listingControllers.newListing) )


router.route('/:id')
//Show Page
.get( wrapAsync ( listingControllers.showListing))
//Edit Route
.put(  isLoggedIn,isOwner , upload.single('listing[image]'),validateListings, wrapAsync (listingControllers.editListing ))
//Destroy Route
.delete(isLoggedIn,isOwner , wrapAsync ( listingControllers.deleteListing))



module.exports = router;