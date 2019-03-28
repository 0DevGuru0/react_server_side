import {
    GraphQLString,
    GraphQLID,
    GraphQLObjectType
} from 'graphql';

const userType = new GraphQLObjectType({
    name:"UserType",
    fields:{
        id:{type:GraphQLID},
        name:{ type:GraphQLString} ,
        email:{type:GraphQLString}
    }
});

export default userType;