const { gql } = require('apollo-server-express');

const userSchemas = gql`
  type User {
    id: ID!
    username: String!
    email: String!
    password: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    getUser(id: ID!): User
    getAllUsers: [User!]!
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): User
    updateUser(id: ID!, username: String, email: String, password: String): User
    deleteUser(id: ID!): User
    login(email: String!, password: String!): Auth
  }

  schema {
    query: Query
    mutation: Mutation
  }
`;

module.exports = userSchemas;


