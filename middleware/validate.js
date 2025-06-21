const {listingSchema , reviewSchema} = require('../joiSchema.js')
const  ExpressError = require('../utils/ExpressError');

module.exports.validateListings = (req, res , next) =>{
    let {error} = listingSchema.validate(req.body);
    if(error){
        let errMsg = error.details.map(el => el.message).join(", ");
        throw new ExpressError (400 , errMsg)
    } else {
        next();
    }
};


module.exports.validateReviews = (req, res , next) =>{
    let {error} = reviewSchema.validate(req.body);
    if(error){
        let errMsg = error.details.map(el =>el.message).join(", ");
        throw new ExpressError(400 , errMsg)
    }else{
        next();
    }
}
