const express = require('express');
const router = express.Router({mergeParams: true});
const User = require('../models/user.js');
const wrapAsync = require('../utils/WrapAsync.js')
const passport = require('passport');



//Signup
router.get('/signup' , (req , res) =>{
    res.render('users/signup.ejs')
});

//Login
router.get('/login' , (req , res) =>{
    res.render('users/login.ejs')
});

router.post('/signup' ,wrapAsync( async (req, res)=>{
    try{
    let newUser = new User (req.body.user);
    let {password} = req.body.user;
    await User.register(newUser , password)
    req.flash('success' , 'Welcome to Airbnb');
    res.redirect('/listings');
    }catch(e){
        req.flash('error' , e.message);
        res.redirect('/signup')
    }
}));

router.post('/login' ,passport.authenticate('local', {
    failureRedirect: '/login' , 
    failureFlash:true}), 
    async (req , res )=>{
     req.flash('success' , 'Welcome again to airbnb')
     res.redirect('/listings')
})

module.exports = router;