const express = require('express');
const router = express.Router({mergeParams: true});
const wrapAsync = require('../utils/WrapAsync.js')
const passport = require('passport');
const {saveRedirectUrl} = require('../middleware/index.js')
const userControllers = require('../controllers/user.js')


//Signup
router.get('/signup' ,(userControllers.signUpPage) );

//Login
router.get('/login' ,(userControllers.loginPage));

//logout
router.get('/logout',(userControllers.logoutPage) )

//signupPost
router.post('/signup' ,wrapAsync(userControllers.signupPost ));

//loginPost
router.post('/login' ,saveRedirectUrl , passport.authenticate('local', {
    failureRedirect: '/login' , 
    failureFlash:true}), (userControllers.loginPost)  )

module.exports = router;