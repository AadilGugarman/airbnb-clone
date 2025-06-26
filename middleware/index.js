const Listing = require('../models/listing');
const Review = require('../models/review')

module.exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        if (req.method === 'GET') {
            req.session.redirectUrl = req.originalUrl;
        }
        req.flash('error', 'You must be logged in!');
        return res.redirect('/login');
    }
    next();
};

module.exports.saveRedirectUrl = (req, res , next)=>{
      if(req.session.redirectUrl){
        res.locals.redirectUrl = req.session.redirectUrl;
      }    
      next();
};

module.exports.isOwner = async (req, res, next)=>{
   let {id} = req.params;
    let listing = await Listing.findById(id)
    if(!listing.owner._id.equals(req.user._id)){
        req.flash('error' , 'Access denied. You are not the owner of this listing.')
        return res.redirect(`/listings/${id}`);
    }
    next();

}
module.exports.isAuthor = async (req, res, next) => {
    const { id, reviewId } = req.params;
    const review = await Review.findById(reviewId);
    if (!review.author.equals(req.user._id)) {
        req.flash('error', 'Access denied. You do not have permission to do that');
        return res.redirect(`/listings/${id}`);
    }

    next();
};
