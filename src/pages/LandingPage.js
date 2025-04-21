import React from 'react';
     import { Link } from 'react-router-dom';
     import Header from '../components/Header';
     import Footer from '../components/Footer';

     const LandingPage = () => {
       return (
         <div className="bg-gray-100">
           <Header />
           <section className="bg-primary text-white py-16">
             <div className="container mx-auto flex flex-col md:flex-row items-center">
               <div className="md:w-1/2">
                 <h1 className="text-4xl font-bold mb-4">Explore your career in Tech Industry</h1>
                 <p className="mb-6">
                   Discover TechQuest Mentor today—shape the latest industry trends, receive career guidance, and join a community of tech professionals.
                 </p>
                 <div className="space-x-4">
                   <Link to="/about" className="px-6 py-2 bg-white text-primary rounded-lg">Learn More</Link>
                   <Link to="/register" className="px-6 py-2 bg-secondary text-black rounded-lg">Get Started</Link>
                 </div>
               </div>
               <div className="md:w-1/2 mt-6 md:mt-0">
                 <div className="bg-gray-300 h-64 rounded-lg flex items-center justify-center">
                   <p>Illustration Placeholder</p>
                 </div>
               </div>
             </div>
           </section>
           <Footer />
         </div>
       );
     };

     export default LandingPage;