import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_COMMENT } from '../services/mutation';

import '../styles/commentForm.css';

const CommentForm = ({ postId, refetch }) => {
  const [content, setContent] = useState('');

  const [addComment] = useMutation(ADD_COMMENT);

  const handleSubmit = async (event) => {
    event.preventDefault();
    await addComment({ variables: { postId, content } });
    setContent('');
    refetch();
  };

  return (
    <form className="comment-form" onSubmit={handleSubmit}>
      <textarea
        className="comment-form__textarea"
        value={content}
        onChange={(event) => setContent(event.target.value)}
        placeholder="Write a comment..."
        required
      />
      <button className="comment-form__button" type="submit">Submit</button>
    </form>
  );
};

export default CommentForm;
