import passport from 'passport';
import User from '../models/user';

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
            return new User({email,password,name}).save()
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

export default Auth;