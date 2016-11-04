import {
    GraphQLString,
    GraphQLNonNull
} from 'graphql';
import {Types} from 'mongoose';

import UserType from '../types/UserType';
import UserModel from '../../models/UserModel';
import getProjection from '../get-projection';

const me = {
    type: UserType,
    args: {
        guid: {
            name: 'guid',
            type: new GraphQLNonNull(GraphQLString)
        }
    },
    resolve(source, args, context, info) {
        const projection = getProjection(info);
        console.log(projection);
        var User =  UserModel
            .findOne(args)
            .select(projection)
            .exec();

        console.log(User);

        return User;
    },
};

export default me;
