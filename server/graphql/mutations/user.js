
var GraphQLBoolean = require('graphql').GraphQLBoolean;
var GraphQLNonNull = require('graphql').GraphQLNonNull;

var userInputType = require('../types/user-input');
var UserModel = require('../../models/user');

module.exports({
    type: GraphQLBoolean,
    args: {
        data: {
            name: 'data',
            type: new GraphQLNonNull(userInputType)
        }
    },
    async resolve (root, params, options) {
        const userModel = new UserModel(params.data);
        const newUser = await userModel.save();

        if (!newUser) {
            throw new Error('Error adding new user');
        }
        return true;
    }
});