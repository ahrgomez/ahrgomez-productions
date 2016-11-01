import {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLString,
    GraphQLID
} from 'graphql';


export default new GraphQLObjectType({
    name: 'User',
    fields: {
        _id: {
            type: GraphQLID
        },
        guid: {
            type: GraphQLString
        },
        email: {
            type: GraphQLString
        },
        aka: {
            type: GraphQLString
        }
    }
});