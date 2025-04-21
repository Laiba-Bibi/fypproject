import React from 'react';
     import { Link } from 'react-router-dom';

     const Header = () => {
       return (
         <nav className="bg-primary text-white p-4">
           <div className="container mx-auto flex justify-between items-center">
             <h1 className="text-xl font-bold">TechQuest Mentor</h1>
             <div className="space-x-4">
               <Link to="/" className="hover:underline">Home</Link>
               <Link to="/about" className="hover:underline">About</Link>
               <Link to="/contact" className="hover:underline">Contact</Link>
               <Link to="/login" className="hover:underline">Login</Link>
               <Link to="/register" className="hover:underline">Register</Link>
             </div>
           </div>
         </nav>
       );
     };

     export default Header;