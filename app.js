if(process.env.NODE_ENV != "PRODUCTION"){
    require('dotenv').config()
}
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const ejsMate = require ('ejs-mate');
const  ExpressError = require('./utils/ExpressError');
const listingsRouter = require('./routes/listing.js');
const reviewsRouter = require('./routes/review.js');
const usersRouter = require('./routes/user.js');
const session =  require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');
const User = require('./models/user.js')
const passport = require('passport')
const LocalStrategy = require('passport-local');



const port = 8080;

const dbUrl = process.env.ATLAS_DB

main().then((res)=>{
    console.log('connected to DB')
}).catch((err) =>{
  console.log(err)
})
async function main(){
    await mongoose.connect(dbUrl)
};

app.set('view engine' , 'ejs');
app.set('views' , path.join(__dirname,'views'));
app.use(express.urlencoded ({extended: true}));
app.use(express.static(path.join(__dirname , 'public')));
app.use(express.json());
app.use(methodOverride("_method"));
app.engine('ejs' , ejsMate);

const store = MongoStore.create({
  mongoUrl: dbUrl,
  crypto: {
    secret: process.env.SECRET
  },
  touchAfter:24*3600
});

const sessionOptions = ({
    store,
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true ,
    cookie:{
        expires:Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge:  7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
    } 
})

store.on("error", (err)=>{
  console.log("Error in Mongo Session Store" , err)
})


app.use(session(sessionOptions))
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use((req, res , next)=>{
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    res.locals.currUser = req.user; 
    next();
})


app.get('/', (req, res) => {
  res.redirect('/listings');
});


app.use('/listings' , listingsRouter)
app.use('/listings/:id/reviews', reviewsRouter);
app.use('/' , usersRouter)

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

