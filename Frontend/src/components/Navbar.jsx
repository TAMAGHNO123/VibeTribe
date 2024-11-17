import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-white shadow p-4 fixed w-full z-10">
    <div className="container mx-auto flex items-center justify-between">
      <h1 className="text-2xl font-bold">
        <Link to="/">SocialApp</Link>
      </h1>
      <div>
        <Link to="/" className="mr-4">Home</Link>
        <Link to="/profile" className="mr-4">Profile</Link>
        <Link to="/messages">Messages</Link>
      </div>
    </div>
  </nav>
);

export default Navbar;