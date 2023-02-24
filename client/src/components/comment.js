import React from 'react';
import '../styles/comment.css';

function Comment({ username, text }) {
  return (
    <div className="comment">
      <h4 className="comment__username">{username}</h4>
      <p className="comment__text">{text}</p>
    </div>
  );
}

export default Comment;

