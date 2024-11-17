// src/components/Feed.js
import React from 'react';
import Post from './Post';

const Feed = () => (
  <div className="flex-1 p-4">
    <Post />
    <Post />
    <Post />
  </div>
);

export default Feed;