import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-primary text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link to="/" className="text-xl font-bold">
          TechQuest Mentor
        </Link>
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="hover:text-secondary">Home</Link>
          <Link to="/#about" className="hover:text-secondary">About</Link>
          <Link to="/#contact" className="hover:text-secondary">Contact</Link>
        </div>
        <div className="flex space-x-4">
          <Link to="/register" className="bg-secondary hover:bg-yellow-300 text-black px-4 py-2 rounded">
            Signup
          </Link>
          <Link to="/login" className="bg-secondary hover:bg-yellow-300 text-black px-4 py-2 rounded">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;