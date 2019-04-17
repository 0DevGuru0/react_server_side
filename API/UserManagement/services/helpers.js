import passport from 'passport';
import User from '../models/user';
import  sgMail from '@sendgrid/mail';
import config from '../emails/emailVerify'
/*
 *
 * Auth Object contain all logic for authentication
 *
*/
const Auth = {}
Auth.SignUp = ({email,password,name,req})=>{
    if(!email || !password){throw new Error('type all credentials') }

    return User.findOne({email})
        .then(user=>{
            if(user){throw new Error('Email is in use')}
            return new User({email,password,name,isVerified:false}).save()
        })
        .then(user=>{
            return new Promise((res,rej)=>{
                req.login(user,err=>{
                    if(err){ rej(err)}
                    return res(user)
                });
            })
        })
}

Auth.SignIn = ({email,password,req})=>{
    if(!email && !password){ throw new Error('type all credentials') };
    return new Promise((res,rej)=>{
        passport.authenticate('local',(err,user)=>{
            if(!user){return rej('you are not registered yet please signUp first')}
            if(err){return rej(err)}
            req.login(user,err=>{
                if(err){return rej(err)}
                return res(user)
            })
        })({body:{email,password}})
    })
}

Auth.sendRestPassEmail = ({email,req})=>{

    if(!email){throw new Error('email should be insert')}

    return User.findOne({email}).then(user=>{
        if (!user) {throw new Error('user with this email doesn\'t exist')}

        sgMail.setApiKey(process.env.SEND_GRID_API_KEY);

        return new Promise((res, rej) => {
            sgMail.send(config(user), true, (err, result) => {
                if (err) {
                    return rej(err)
                }
                return res({
                    email
                })
            });
        })
    })
}

Auth.resetPassword = ({email,req})=>{

}
export default Auth;