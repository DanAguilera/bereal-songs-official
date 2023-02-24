const user = require('../models/userModels');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/token');

const userResolvers = {
  Query: {
    getUser: async (parent, { id }) => {
      try {
        const user = await user.findById(id);
        return user;
      } catch (err) {
        console.error(err);
      }
    },
    getAllUsers: async () => {
      try {
        const user = await user.find();
        return user;
      } catch (err) {
        console.error(err);
      }
    },
  },
  Mutation: {
    createUser: async (parent, { email, username, password }) => {
      try {
        const user = await user.create({ email, username, password });
        const token = signToken(user);
        return { token , user };
      } catch (err) {
        console.error(err);
      }
    },
    login: async (parent, { email, password })  => {
      const user = await user.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    }, 
    updateUser: async (parent, { id, email, username, password }) => {
      try {
        const user = await user.findOneAndUpdate(
          id,
          {
            email,
            username,
            password,
          },
          { new: true }
        );
        return user;
      } catch (err) {
        console.error(err);
      }
    },
    deleteUser: async (parent, { id }) => {
      try {
        const user = await user.findOneAndDelete(id);
        return user;
      } catch (err) {
        console.error(err);
      }
    }
  }
};

module.exports = userResolvers;
