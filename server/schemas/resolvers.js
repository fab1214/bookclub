const { User } = require("../models");

const resolvers = {
  //define function to connect to query typeDef to perform the CRUD that is expected
  Query: {
    helloWorld: () => {
      return "hello world!"
    },

    // get all users
users: async () => {
  return User.find()
    .select('-__v -password')
},
// get a user by username
user: async (parent, { username }) => {
  return User.findOne({ username })
    .select('-__v -password')
},
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);

      return user
    },
  },
};

module.exports = resolvers;
