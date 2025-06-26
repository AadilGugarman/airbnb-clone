const express = require('express');
const router = express.Router({mergeParams : true});
const wrapAsync = require('../utils/WrapAsync.js')
const {validateReviews} = require('../middleware/validate.js')
const {isAuthor, isLoggedIn, saveRedirectUrl} = require('../middleware/index.js')
const reviewControllers = require('../controllers/reviews.js')

//Review Post Route
router.post('/',isLoggedIn, validateReviews , wrapAsync (reviewControllers.postReview))

//Review Delete Route
router.delete('/:reviewId',isLoggedIn,isAuthor, wrapAsync (reviewControllers.deleteReview));

module.exports = router;
