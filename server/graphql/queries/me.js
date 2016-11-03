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
        const projection = getProjection(info.fieldASTs[0]);
        console.log(info);
        return UserModel
            .findOne(args)
            .select(projection)
            .exec();
    },
};

export default me;
