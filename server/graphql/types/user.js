var GraphQLObjectType = require('graphql').GraphQLObjectType,
    GraphQLNonNull = require('graphql').GraphQLNonNull,
    GraphQLString = require('graphql').GraphQLString,
    GraphQLID = require('graphql').GraphQLID;


module.exports(new GraphQLObjectType({
    name: 'User',
    fields: {
        _id: {
            type: new GraphQLNonNull(GraphQLID)
        },
        email: {
            type: GraphQLString
        },
        aka: {
            type: GraphQLString
        }
    }
}));