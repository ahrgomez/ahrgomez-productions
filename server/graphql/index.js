import {
    GraphQLSchema,
    GraphQLObjectType
} from 'graphql';

import me from './queries/me';
import all from './queries/all';

import addUser from './mutations/user';

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        fields: { me, all }
    }),
    mutation: new GraphQLObjectType({
        name: 'Mutation',
        fields: { addUser }
    })
});

export default schema;