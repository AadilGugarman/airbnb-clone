const Listing = require('../models/listing') 
const mbxGeocoding= require('@mapbox/mapbox-sdk/services/geocoding');
const map_token = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: map_token });
 
 module.exports.home = async (req , res)=>{
    let allListings =await Listing.find()
      res.render('listings/home.ejs' , {allListings})
    
};
module.exports.editListingPage = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);

    if (!listing) {
        req.flash('error', 'Invalid URL! Listing Not Found');
        return res.redirect('/listings');
    }

    let originalImage = listing.image.url
    if (listing.image && listing.image.url) {
        originalImage = listing.image.url.replace('/upload', '/upload/w_200,h_200/e_blur:100');
    }

    res.render('listings/edit.ejs', { listing, originalImage });
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
let response = await geocodingClient.forwardGeocode({
  query: req.body.listing.location,
  limit: 1
})
  .send()
  
    let newListing = new Listing (req.body.listing);
    let url = req.file.path
    let filename = req.file.filename
    newListing.owner = req.user._id;
    newListing.image = {url ,filename}
    newListing.geometry = response.body.features[0].geometry
    await newListing.save();
    req.flash('success' , 'Listings Added Successfully');
    res.redirect('/listings')
}

module.exports.editListing = async (req , res)=>{
    let {id} = req.params;
    let listing = await Listing.findByIdAndUpdate(id , {...req.body.listing});  
    if(typeof req.file !== 'undefined'){
    let url = req.file.path
    let filename = req.file.filename
    listing.image = {url , filename}
    await listing.save()
    }
     req.flash('success' , 'Listings Edited Successfully');
     res.redirect(`/listings/${id}`)
};

module.exports.deleteListing = async (req, res)=>{
    let {id} = req.params;
    await Listing.findByIdAndDelete(id);
    req.flash('success' , 'Listing Deleted')
    res.redirect('/listings')
};