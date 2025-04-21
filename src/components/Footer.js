import React from 'react';

     const Footer = () => {
       return (
         <footer className="bg-primary text-white p-6">
           <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
             <div>
               <h3 className="font-bold mb-2">Product</h3>
               <ul>
                 <li><a href="#" className="hover:underline">Overview</a></li>
                 <li><a href="#" className="hover:underline">Features</a></li>
                 <li><a href="#" className="hover:underline">Pricing</a></li>
               </ul>
             </div>
             <div>
               <h3 className="font-bold mb-2">Resources</h3>
               <ul>
                 <li><a href="#" className="hover:underline">Blog</a></li>
                 <li><a href="#" className="hover:underline">Guides</a></li>
                 <li><a href="#" className="hover:underline">Help Center</a></li>
               </ul>
             </div>
             <div>
               <h3 className="font-bold mb-2">Company</h3>
               <ul>
                 <li><a href="#" className="hover:underline">About Us</a></li>
                 <li><a href="#" className="hover:underline">Careers</a></li>
                 <li><a href="#" className="hover:underline">Contact</a></li>
               </ul>
             </div>
             <div>
               <h3 className="font-bold mb-2">Try It Today</h3>
               <p>Discover the best tech career path for you.</p>
               <button className="mt-2 px-4 py-2 bg-secondary text-black rounded-lg">Get Started</button>
             </div>
           </div>
           <div className="container mx-auto mt-6 flex justify-between items-center">
             <p>© 2025 TechQuest Mentor. All rights reserved.</p>
             <div className="space-x-4">
               <a href="#" className="text-xl">📘</a>
               <a href="#" className="text-xl">🔗</a>
               <a href="#" className="text-xl">🐦</a>
             </div>
           </div>
         </footer>
       );
     };

     export default Footer;