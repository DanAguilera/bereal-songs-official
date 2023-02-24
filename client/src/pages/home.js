import React, { useState, useEffect } from 'react';
import Post from '../components/post';
import Header from '../components/header';
import Follow from '../components/follow';
import Like from '../components/like';
import Comment from '../components/comment';
import CommentForm from '../components/commentForm';
import '../styles/index.css';
// import api from '../services/api';

function Home() {
  const [posts] = useState([]);
// set post was in the const statement above
  useEffect(() => {
    async function fetchPosts() {
      // const response = await api.get('/posts');
      // setPosts(response.data);
    }
    fetchPosts();
  }, []);

  return (
    <>
      <Header />
      <div className="home">
        <div className="feed">
          {posts.map((post) => (
            <Post key={post._id} post={post}>
              <div className="post-interactions">
                <Like postId={post._id} />
                <Comment postId={post._id} />
                <CommentForm postId={post._id} />
              </div>
            </Post>
          ))}
        </div>
        <div className="sidebar">
          <Follow />
        </div>
      </div>
    </>
  );
}

export default Home;

