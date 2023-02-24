const { userSchemas } = require('./userSchemas');
const { userResolvers } = require('../resolvers/postResolvers');
const { postSchemas } = require('./postSchemas')
const { postResolvers } = require('../resolvers/postResolvers')

module.exports = { userSchemas, userResolvers, postSchemas, postResolvers };
