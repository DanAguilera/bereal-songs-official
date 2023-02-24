import React from 'react';
import PropTypes from 'prop-types';
import '../styles/follow.css';

const Follow = ({ username, handleFollow }) => {
  return (
    <div className="follow-container">
      <span className="follow-username">{username}</span>
      <button className="follow-button" onClick={handleFollow}>Follow</button>
    </div>
  );
};

Follow.propTypes = {
  username: PropTypes.string.isRequired,
  handleFollow: PropTypes.func.isRequired,
};

export default Follow;
