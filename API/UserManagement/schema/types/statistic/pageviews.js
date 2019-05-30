import {
    GraphQLString,
    GraphQLID,
    GraphQLObjectType,
    GraphQLBoolean,
    GraphQLInt
} from 'graphql';

const pageView = new GraphQLObjectType({
    name:"PageView",
    fields:{
        field:{type:GraphQLString},
        counted:{type:GraphQLInt}
    }
});

export default pageView;