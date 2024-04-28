const { User } = require('../Develop/server/models');

const resolvers = {
  Query: {
    // Resolver for the 'me' query
    me: async (parent, args, context) => {
      // Check if user is authenticated
      if (!context.user) {
        throw new Error('You are not authenticated.');
      }
      
      // Fetch user data based on context (e.g., context.user)
      const userData = await User.findOne({ _id: context.user._id });

      return userData;
    },
  },
  Mutation: {
    // Resolver for the 'login' mutation
    login: async (parent, { email, password }) => {
      // Your login logic here
    },

    // Resolver for the 'addUser' mutation
    addUser: async (parent, args) => {
      // Your addUser logic here
    },

    // Resolver for the 'saveBook' mutation
    saveBook: async (parent, args, context) => {
      // Check if user is authenticated
      if (!context.user) {
        throw new Error('You are not authenticated.');
      }

      // Your saveBook logic here
    },

    // Resolver for the 'removeBook' mutation
    removeBook: async (parent, args, context) => {
      // Check if user is authenticated
      if (!context.user) {
        throw new Error('You are not authenticated.');
      }

      // Your removeBook logic here
    },
  },
};

module.exports = resolvers;
