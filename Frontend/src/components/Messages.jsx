import React from 'react';
import { motion } from 'framer-motion';

const Messages = () => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
  >
    <h1 className="text-3xl font-bold mb-4">Messages</h1>
    {/* Add content here */}
  </motion.div>
);

export default Messages;