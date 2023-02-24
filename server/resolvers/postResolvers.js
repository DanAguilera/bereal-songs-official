const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/token');
const post = require('../models/postModels');

const postResolvers = {
  Query: {
    getPost: async (parent, { id }) => {
      try {
        const post = await post.findById(id);
        return post;
      } catch (err) {
        console.error(err);
      }
    },
    getAllPosts: async () => {
      try {
        const posts = await post.find();
        return post;
      } catch (err) {
        console.error(err);
      }
    },
  },
  Mutation: {
    createPost: async (parent, { title, description, image_url, user_id }) => {
      try {
        const post = new post({
          title,
          description,
          image_url,
          user_id,
        });
        await post.save();
        return post;
      } catch (err) {
        console.error(err);
      }
    },
    updatePost: async (parent, { id, title, description, image_url, user_id }) => {
      try {
        const post = await post.findByIdAndUpdate(
          id,
          {
            title,
            description,
            image_url,
            user_id,
          },
          { new: true }
        );
        return post;
      } catch (err) {
        console.error(err);
      }
    },
    deletePost: async (parent, { id }) => {
      try {
        const post = await post.findByIdAndDelete(id);
        return post;
      } catch (err) {
        console.error(err);
      }
    },
    createComment: async (parent, { post_id, text, user_id }) => {
      try {
        const post = await post.findById(post_id);
        if (!post) {
          throw new Error('Post not found.');
        }
        post.comments.push({ text, user_id });
        await post.save();
        return post.comments[post.comments.length - 1];
      } catch (err) {
        console.error(err);
      }
    },
    updateComment: async (parent, { id, text }) => {
      try {
        const post = await post.findOne({ 'comments._id': id });
        if (!post) {
          throw new Error('Comment not found.');
        }
        const comment = post.comments.find((c) => c._id == id);
        comment.text = text;
        await post.save();
        return comment;
      } catch (err) {
        console.error(err);
      }
    },
    deleteComment: async (parent, { id }) => {
      try {
        const post = await post.findOne({ 'comments._id': id });
        if (!post) {
          throw new Error('Comment not found.');
        }
        const comment = post.comments.find((c) => c._id == id);
        comment.remove();
        await post.save();
        return comment;
      } catch (err) {
        console.error(err);
      }
    },
    addLike: async (parent, { post_id, user_id }) => {
      try {
        const post = await post.findById(post_id);
        if (!post) {
          throw new Error('Post not found.');
        }
        post.likes.push(user_id);
        await post.save();
        return post;
      } catch (err) {
        console.error(err);
      }
    },
    removeLike: async (parent, { post_id, user_id }) => {
        try {
          const post = await post.findById(post_id);
          if (!post) {
            throw new Error('Post not found.');
          }
          post.likes = post.likes.filter((id) => id != user_id);
          await post.save();
          return post;
        } catch (err) {
          console.error(err);
        }
      },
  }
};
  
  
  module.exports = postResolvers;
    