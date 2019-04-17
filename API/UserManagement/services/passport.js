import passport from 'passport';
import {Strategy as GoogleStrategy } from 'passport-google-oauth20'
import User from '../models/user';
import path from 'path'
import LocalStrategy from 'passport-local';
require('dotenv').config({
    path:path.resolve(process.cwd(),'config/keys/.env')
})

passport.serializeUser((user,done)=>{
    done(null,user.id)
})

passport.deserializeUser((id,done)=>{
    User.findById(id).then(user=>{ done(null,user) })
})

/////////////////// Google Authentication /////////////////////////
const googleOption = {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_AUTH_SUCCESS_CALLBACK,
    proxy: true
};
const GoogleAuth = new GoogleStrategy(googleOption,async (accessToken,refreshToken,profile,done)=>{
    const existingUser = await User.findOne({googleId:profile.id});
    if(existingUser){ return done(null,existingUser) }
    const newUser = await new User({
        name:profile.displayName,
        email:profile.emails[0].value,
        password:profile.id,
        googleId:profile.id,
        isVerified:true
    }).save()
    done(null,newUser);
});
/////////////////// Local Authentication ///////////////////////////
const LocalOption = {usernameField:'email'}
const LocalAuth = new LocalStrategy(LocalOption,(email,password,done)=>{
    User.findOne({email:email.toLowerCase()},(err,user)=>{
        if(err){return done(err)}
        if(!user){return done(null,false)}
        user.comparePassword(password,(err,isMatch)=>{
            if(err){return done(err)}
            if(isMatch){return done(null,user)}
            return done(null,false,'Invalid_Credential')
        })
    })
})

passport.use(LocalAuth)
passport.use(GoogleAuth)
