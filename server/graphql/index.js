import {
    GraphQLSchema,
    GraphQLObjectType,
} from 'graphql';

import me from './queries/me';
import all from './queries/all';

//const schema = new Schema({
//    query: new ObjectType({
//        name: 'Query',
//        fields: {
//            me
//        },
//    }),
//});
//
//export default schema;



const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        fields: { me, all }
    })
});

export default schema;