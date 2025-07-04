const Listing = require('../models/listing')
const Review = require('../models/review')

module.exports.postReview = async (req , res)=>{
    let listing = await Listing.findById(req.params.id);
     let newReview = new Review (req.body.review);
     newReview.author = req.user._id
     listing.reviews.push(newReview);
     await newReview.save();
     await listing.save();
    req.flash('success' , 'Thankyou for Review')
    res.redirect(`/listings/${listing._id}`);
};

module.exports.deleteReview = async (req, res) => {
    const { id, reviewId } = req.params;
    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);
    req.flash('success', 'Your Review Deleted');
    res.redirect(`/listings/${id}`)
}
