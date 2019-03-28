import {GraphQLObjectType} from 'graphql';
import UserType            from './userType';

const RootQueryType = new GraphQLObjectType({
    name:"RootQueryType",
    fields:()=>({
        user:{
            type:UserType,
            resolve(parentValue,args,req){
                return req.user
            }
        }
    })
});

export default RootQueryType