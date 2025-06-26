const User = require('../models/user')

module.exports.signUpPage =(req , res) =>{
    res.render('users/signup.ejs')
}

module.exports.loginPage =  (req , res) =>{
    res.render('users/login.ejs')
}
module.exports.logoutPage = (req , res , next)=>{
    req.logout((err)=>{
        if(err){
            return next(err);
        }
        req.flash('success' , 'You logged out')
        res.redirect('/listings');
    })
}

module.exports.signupPost= async (req, res , next)=>{
    try{
    let newUser = new User (req.body.user);
    let {password} = req.body.user;
  let registeredUser =   await User.register(newUser , password);
  req.login(registeredUser , (err)=>{
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
}

module.exports.loginPost =  async (req , res )=>{
     req.flash('success' , 'Welcome again to airbnb');
     let redirectUrl = res.locals.redirectUrl || '/listings'
     res.redirect(redirectUrl);
}