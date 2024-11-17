import React from 'react';
import { motion } from 'framer-motion';

const Home = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <h1 className="text-3xl font-bold mb-4">Home</h1>
    {/* Add content here */}
  </motion.div>
);

export default Home;