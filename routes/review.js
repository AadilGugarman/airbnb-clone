const express = require('express');
const router = express.Router({mergeParams : true});
const Review = require('../models/review.js');
const Listing = require('../models/listing.js');
const wrapAsync = require('../utils/WrapAsync.js')
const  ExpressError = require('../utils/ExpressError');
const {reviewSchema} = require('../joiSchema.js')

const validateReviews = (req, res , next) =>{
    let {error} = reviewSchema.validate(req.body);
    if(error){
        let errMsg = error.details.map(el =>el.message).join(", ");
        throw new ExpressError(400 , errMsg)
    }else{
        next();
    }
}

//Review Post Route
router.post('/', validateReviews , wrapAsync (async (req , res)=>{
    let listing = await Listing.findById(req.params.id);
     let newReview = new Review (req.body.review);
     listing.reviews.push(newReview);
     await newReview.save();
     await listing.save();
    req.flash('success' , 'Thankyou for Review')
    res.redirect(`/listings/${listing._id}`);
}))

//Review Delete Route
router.delete('/:reviewId', wrapAsync ( async (req, res)=>{
    let {id , reviewId} = req.params;
   await Listing.findByIdAndUpdate(id , {$pull : {reviews:reviewId}});
   await Review.findByIdAndDelete(reviewId);
   req.flash('success' , 'Your Review Deleted')
   res.redirect(`/listings/${id}`);
}));

module.exports = router;
