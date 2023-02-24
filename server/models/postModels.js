const { Schema, model } = require('mongoose');

const postSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image_url: {
    type: String,
    required: true,
  },
  user_id: {
    type: String,
    required: true,
  },
  comments: [
    {
      text: String,
      user_id: String,
      created_at: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  likes: [
    {
      type: String,
    },
  ],
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const Post = model('Post', postSchema);

module.exports = Post;
