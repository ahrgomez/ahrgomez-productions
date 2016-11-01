
import {
    GraphQLNonNull,
    GraphQLBoolean
} from 'graphql';

import UserPostType from '../types/UserPostType';
import UserModel from '../../models/UserModel';

export default {
    type: GraphQLBoolean,
    args: {
        data: {
            name: 'data',
            type: new GraphQLNonNull(UserPostType)
        }
    },
    resolve (source, args, context, info) {
        const userModel = new UserModel(args.data);
        const newUser = userModel.save();

        if (!newUser) {
            throw new Error('Error adding new blog post');
        }
        return true;
    }
};
