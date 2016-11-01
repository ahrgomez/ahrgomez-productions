import {
    GraphQLList
} from 'graphql';

import {Types} from 'mongoose';

import UserType from '../types/UserType';
import UserModel from '../../models/UserModel';
import getProjection from '../get-projection';

const all = {
    type: new GraphQLList(UserType),
    resolve(source, args, context, info) {
        const projection = getProjection(info.fieldASTs[0]);

        return UserModel
            .find()
            .select(projection)
            .exec();
    },
};

export default all;
