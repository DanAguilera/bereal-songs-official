import React, { useState } from 'react';
import { BsHeart, BsHeartFill } from 'react-icons/bs';
// import { FaRegComment } from 'react-icons';
import '../styles/like.css';

const Like = ({ likes, isLiked, handleLike }) => {
  const [liked, setLiked] = useState(isLiked);

  const handleLiked = () => {
    setLiked(!liked);
    handleLike(!liked);
  };

  return (
    <div className="like-container">
      <div className="like-comment">
        <div className="like">
          {liked ? (
            <BsHeartFill size={24} onClick={handleLiked} />
          ) : (
            <BsHeart size={24} onClick={handleLiked} />
          )}
          <span>{likes}</span>
        </div>
        <div className="comment">
          {/* <FaRegComment size={24} /> */}
          <span>0</span>
        </div>
      </div>
    </div>
  );
};

export default Like;

