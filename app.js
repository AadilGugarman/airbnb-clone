const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const Listing = require('./models/listing.js')
const methodOverride = require('method-override');
const ejsMate = require ('ejs-mate');
const  ExpressError = require('./utils/ExpressError');
const wrapAsync = require('./utils/WrapAsync.js')


const port = 8080;
const MongoURL = 'mongodb://127.0.0.1:27017/airbnb'

app.set('view engine' , 'ejs');
app.set('views' , path.join(__dirname,'views'));
app.use(express.urlencoded ({extended: true}));
app.use(express.static(path.join(__dirname , 'public')));
app.use(express.json());
app.use(methodOverride("_method"));
app.engine('ejs' , ejsMate);

main().then((res)=>{
    console.log('connected to DB')
}).catch((err) =>{
  console.log(err)
})
async function main(){
    await mongoose.connect(MongoURL)
}


app.get('/listings/:id/edit' , wrapAsync (async (req, res)=>{
    let {id} = req.params;
     const listing = await Listing.findById(id);
     res.render('listings/edit.ejs', {listing})
}));

app.get('/listings/new' , (req , res)=>{
    res.render('listings/new.ejs')
})

app.get('/listings/:id' ,wrapAsync ( async (req , res)=>{
     let {id} = req.params;
     const listing = await Listing.findById(id);
     res.render('listings/show.ejs' , {listing});
}));

app.get('/listings' ,wrapAsync ( async (req , res)=>{
    let allListings =await Listing.find();
    res.render('listings/home.ejs' , {allListings})
}));



app.post('/listings' ,wrapAsync ( async (req , res )=>{
    let newListing = new Listing (req.body.listing);
    await newListing.save();
    res.redirect('/listings')
}));

app.put('/listings/:id' , wrapAsync ( async (req , res)=>{
    let {id} = req.params;
     let newlist = await Listing.findByIdAndUpdate(id , {...req.body.listing});
    
     res.redirect(`/listings/${id}`)
}));

app.delete('/listings/:id' ,wrapAsync ( async (req, res)=>{
    let {id} = req.params;
    await Listing.findByIdAndDelete(id);
    res.redirect('/listings')
}));
app.get('/airbnb' , (req , res)=>{
 res.send('HI I AM ROOT')
})
app.use((req, res , next)=>{
    next(new ExpressError (404 , 'page not found'));
})
app.use((err , req , res , next)=>{
    let {status= 500 , message='something really went wrong' } = err;
    res.status(status).render('error.ejs' , {err})
})

app.listen(port , ()=>{
     console.log('app is listening to 8080')
})

