import {
    GraphQLInputObjectType,
    GraphQLString,
    GraphQLID
} from 'graphql';

export default new GraphQLInputObjectType({
    name: 'UserPostType',
    fields: {
        guid: {
            type: GraphQLString
        },
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
});
