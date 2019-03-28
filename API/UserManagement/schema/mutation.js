import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull
    } from 'graphql';

import UserType from './types/userType'
import Auth     from '../services/helpers';

const mutation = new GraphQLObjectType({
    name:"MutationObserver",
    fields:()=>({
        SignIn:{
            type:UserType,
            args:{
                email:{ type:new GraphQLNonNull(GraphQLString) } ,
                password:{ type:new GraphQLNonNull(GraphQLString) }
            },
            resolve(parentValue,{password,email},req){
                return Auth.SignIn({email,password,req})
            }
        },
        SignUp:{
            type:UserType,
            args:{
                name:{ type:new GraphQLNonNull(GraphQLString) } ,
                email:{type:new GraphQLNonNull(GraphQLString)},
                password:{type:new GraphQLNonNull(GraphQLString)}
            },
            resolve(parentValue,{email,password,name},req){
                return Auth.SignUp({email,password,name,req})
            }
        },
        SignOut:{
            type:UserType,
            resolve(parentValue,args,req){
                let user = req.user
                req.logout()
                return user;
            }
        }
    })
});

export default mutation;
