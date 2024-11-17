// src/components/Sidebar.js
import React from 'react';

const Sidebar = () => (
  <aside className="w-64 h-screen bg-gray-100 p-4 hidden md:block">
    {/* Sidebar content */}
    <ul>
      <li className="py-2"><a href="#">Home</a></li>
      <li className="py-2"><a href="#">Profile</a></li>
      <li className="py-2"><a href="#">Messages</a></li>
    </ul>
  </aside>
);

export default Sidebar;