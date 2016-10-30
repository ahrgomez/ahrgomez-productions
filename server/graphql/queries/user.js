
var GraphQLList = require('graphql').GraphQLList;
var GraphQLID = require('graphql').GraphQLID;
var GraphQLNonNull = require('graphql').GraphQLNonNull;
var Types = require('mongoose').Types;

var userType = require('../types/user');
var getProjection = require('../get-projection');
var userModel = require('../../models/user');

module.exports({
    type: userType,
    args: {
        id: {
            name: 'id',
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve (root, params, options) {
        const projection = getProjection(options.fieldASTs[0]);

        return userModel
            .findById(params.id)
            .select(projection)
            .exec();
    }
});