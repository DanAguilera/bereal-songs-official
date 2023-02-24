import React from 'react';
import '../styles/post.css';

const Post = ({ post }) => {
  return (
    <div className="post">
      <div className="post-header">
        <div className="post-user-image-container">
          <img src={post.userImage} alt="user" className="post-user-image" />
        </div>
        <div className="post-user-info">
          <h3 className="post-username">{post.username}</h3>
          <p className="post-location">{post.location}</p>
        </div>
      </div>
      <div className="post-image-container">
        <img src={post.imageUrl} alt="post" className="post-image" />
      </div>
      <div className="post-likes">{post.likes} likes</div>
      <div className="post-caption">
        <strong>{post.username}</strong> {post.caption}
      </div>
      <div className="post-comments">
        {post.comments.map((comment) => (
          <div key={comment.id} className="post-comment">
            <strong>{comment.username}</strong> {comment.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Post;

