const express = require('express');
const router = express.Router({mergeParams: true});
const Listing = require('../models/listing.js')
const wrapAsync = require('../utils/WrapAsync.js')
const {listingSchema} = require('../joiSchema.js')
const  ExpressError = require('../utils/ExpressError');
const {isLoggedIn} = require('../middleware.js')

const validateListings = (req, res , next) =>{
    let {error} = listingSchema.validate(req.body);
    if(error){
        let errMsg = error.details.map(el => el.message).join(", ");
        throw new ExpressError (400 , errMsg)
    } else {
        next();
    }
};

//All Listings Page
router.get('/'  ,  wrapAsync  ( async (req , res)=>{
    let allListings =await Listing.find();
    res.render('listings/home.ejs' , {allListings})
}));

//Edit Page
router.get('/:id/edit' ,isLoggedIn, wrapAsync (async (req, res)=>{
    let {id} = req.params;
     const listing = await Listing.findById(id);
     if (!listing) {
        req.flash('error' , 'Invalid URL! Listing Not Found');
      return  res.redirect('/listings')
     }
     res.render('listings/edit.ejs', {listing})
}));

//Create New Listing Page
router.get('/new' , (req , res)=>{
    res.render('listings/new.ejs')
})

//Show Page
router.get('/:id' ,wrapAsync ( async (req , res)=>{
     let {id} = req.params;
     const listing = await Listing.findById(id).populate('reviews');
     if (!listing) {
        req.flash('error' , 'Invalid URL! Listing Not Found');
      return  res.redirect('/listings')
     }
     res.render('listings/show.ejs' , {listing});
}));

//Post Route
router.post('/' , validateListings , wrapAsync ( async (req , res )=>{
    let newListing = new Listing (req.body.listing);
    await newListing.save();
    req.flash('success' , 'Listings Added Successfully');
    res.redirect('/listings')
}));

//Edit Route
router.put('/:id' , validateListings, wrapAsync ( async (req , res)=>{
    let {id} = req.params;
     await Listing.findByIdAndUpdate(id , {...req.body.listing});
     req.flash('success' , 'Listings Edited Successfully');
     res.redirect(`/listings/${id}`)
}));

//Destroy Route
router.delete('/:id' ,wrapAsync ( async (req, res)=>{
    let {id} = req.params;
    await Listing.findByIdAndDelete(id);
    req.flash('success' , 'Listing Deleted')
    res.redirect('/listings')
}));



module.exports = router;