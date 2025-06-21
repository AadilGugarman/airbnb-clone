const express = require('express');
const router = express.Router({mergeParams: true});
const User = require('../models/user.js');
const wrapAsync = require('../utils/WrapAsync.js')
const passport = require('passport');
const {saveRedirectUrl} = require('../middleware/index.js')

//Signup
router.get('/signup' , (req , res) =>{
    res.render('users/signup.ejs')
});

//Login
router.get('/login' , (req , res) =>{
    res.render('users/login.ejs')
});


router.get('/logout', (req , res)=>{
    req.logout((err)=>{
        if(err){
            return next(err);
        }
        req.flash('success' , 'You logged out')
        res.redirect('/listings');
    })
})

router.post('/signup' ,wrapAsync( async (req, res)=>{
    try{
    let newUser = new User (req.body.user);
    let {password} = req.body.user;
  let registeredUser =   await User.register(newUser , password);
  req.login(User.registerUser , (err)=>{
    if(err){
        return next(err);
    }
    req.flash('success' , 'Welcome to Airbnb');
    res.redirect('/listings');
  })
    
    }catch(e){
        req.flash('error' , e.message);
        res.redirect('/signup')
    }
}));

router.post('/login' ,saveRedirectUrl , passport.authenticate('local', {
    failureRedirect: '/login' , 
    failureFlash:true}), 
    async (req , res )=>{
     req.flash('success' , 'Welcome again to airbnb');
     let redirectUrl = res.locals.redirectUrl || '/listings'
     console.log(redirectUrl)
     res.redirect(redirectUrl);
})

module.exports = router;