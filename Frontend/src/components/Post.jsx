// src/components/Post.js
import React from 'react';
import { motion } from 'framer-motion';

const Post = () => (
  <motion.div
    className="bg-white p-4 shadow rounded mb-4"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
  >
    <div className="flex items-center mb-2">
      <div className="bg-gray-300 h-10 w-10 rounded-full mr-2"></div>
      <h2 className="font-semibold">Username</h2>
    </div>
    <p className="text-gray-700">This is a sample post content.</p>
  </motion.div>
);

export default Post;