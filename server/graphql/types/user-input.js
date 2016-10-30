var GraphQLObjectType = require('graphql').GraphQLObjectType,
    GraphQLNonNull = require('graphql').GraphQLNonNull,
    GraphQLString = require('graphql').GraphQLString,
    GraphQLID = require('graphql').GraphQLID;


module.exports(new GraphQLObjectType({
    name: 'User',
    fields: {
        email: {
            type: GraphQLString
        },
        aka: {
            type: GraphQLString
        },
        password: {
            type: GraphQLString
        }
    }
}));