import passport from 'passport';
import {Strategy as GoogleStrategy } from 'passport-google-oauth20'
import User from '../models/user';
import path from 'path'

require('dotenv').config({
    path:path.resolve(process.cwd(),'config/keys/.env')
})

passport.serializeUser((user,done)=>{
    done(null,user.id)
})

passport.deserializeUser((id,done)=>{
    User.findById(id).then(user=>{ done(null,user) })
})

/////////////////// START Google Authentication /////////////////////////
const googleOption = {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_AUTH_SUCCESS_CALLBACK,
    proxy: true
};
const GoogleAuth = new GoogleStrategy(googleOption,async (accessToken,refreshToken,profile,done)=>{
    const existingUser = await User.findOne({googleId:profile.id});
    if(existingUser){
        return done(null,existingUser);
    }
    const newUser = await new User({
        Name:profile.displayName,
        Email:profile.emails[0].value,
        password:profile.id,
        googleId:profile.id
    }).save()
    done(null,newUser);
});


/////////////////// END Google Authentication ///////////////////////////
passport.use(GoogleAuth)
