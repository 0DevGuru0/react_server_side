import express from 'express';
import passport from 'passport'
import requireLogin from '../middlewares/requireLogin'

const router = express.Router();

const googleAuth   = passport.authenticate('google',{scope:['profile','email']})
const googleAuthCB = passport.authenticate('google',{failureRedirect:'/'})

router.get('/auth/google',googleAuth);
router.get('/auth/google/callback',googleAuthCB,(req,res)=>{
    res.redirect('/');
})

router.get('/logout',requireLogin,(req,res)=>{
   req.logOut();
   res.redirect('/');
})

router.get('/current_user',requireLogin,(req,res)=>{
   res.send(req.user)
})
export default router;