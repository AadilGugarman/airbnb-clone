const Listing = require('../models/listing') 
 
 module.exports.home = async (req , res)=>{
    let allListings =await Listing.find();
    res.render('listings/home.ejs' , {allListings})
};

module.exports.editListingPage = async (req, res)=>{
    let {id} = req.params;
     const listing = await Listing.findById(id);
     if (!listing) {
        req.flash('error' , 'Invalid URL! Listing Not Found');
      return  res.redirect('/listings')
     }
     res.render('listings/edit.ejs', {listing})
};

module.exports.newListing = (req , res)=>{
    res.render('listings/new.ejs')
}

module.exports.showListing = async (req , res)=>{
     let {id} = req.params;
     const listing = await Listing.findById(id).populate({path:'reviews' , populate:{path:'author'}}).populate('owner');
     if (!listing) {
        req.flash('error' , 'Invalid URL! Listing Not Found');
      return  res.redirect('/listings')
     }
     res.render('listings/show.ejs' , {listing});
}

module.exports.postListing = async (req , res )=>{
    let newListing = new Listing (req.body.listing);
    newListing.owner = req.user._id;
    await newListing.save();
    req.flash('success' , 'Listings Added Successfully');
    res.redirect('/listings')
}

module.exports.editListing = async (req , res)=>{
    let {id} = req.params;
    await Listing.findByIdAndUpdate(id , {...req.body.listing});
     req.flash('success' , 'Listings Edited Successfully');
     res.redirect(`/listings/${id}`)
};

module.exports.deleteListing = async (req, res)=>{
    let {id} = req.params;
    await Listing.findByIdAndDelete(id);
    req.flash('success' , 'Listing Deleted')
    res.redirect('/listings')
};