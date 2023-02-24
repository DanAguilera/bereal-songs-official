const { gql } = require('apollo-server-express');

const postSchemas = gql`
  type Query {
    getPost(id: ID!): Post
    getAllPosts: [Post!]!
    getUser(id: ID!): User
    getAllUsers: [User!]!
  }

  type Post {
    id: ID!
    title: String!
    description: String!
    image_url: String!
    user_id: ID!
    likes: [ID!]
    comments: [Comment!]
  }

  type User {
    id: ID!
    username: String!
    email: String!
    password: String!
  }

  type Comment {
    id: ID!
    text: String!
    user_id: ID!
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): User!
    updateUser(id: ID!, username: String, email: String, password: String): User!
    deleteUser(id: ID!): User!

    createPost(title: String!, description: String!, image_url: String!, user_id: ID!): Post!
    updatePost(id: ID!, title: String!, description: String!, image_url: String!, user_id: ID!): Post!
    deletePost(id: ID!): Post!
    createComment(post_id: ID!, text: String!, user_id: ID!): Comment!
    updateComment(id: ID!, text: String!): Comment!
    deleteComment(id: ID!): Comment!
    addLike(post_id: ID!, user_id: ID!): Post!
    removeLike(post_id: ID!, user_id: ID!): Post!
  }

  schema {
    query: Query
    mutation: Mutation
  }
`;

module.exports = postSchemas;

