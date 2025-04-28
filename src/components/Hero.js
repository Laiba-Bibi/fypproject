import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="py-16 bg-white" id="home">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Explore your career in Tech Industry
            </h1>
            <p className="text-gray-700 mb-8">
              Discover TechQuest Mentor! Stay ahead with the latest industry trends, receive career roadmaps, and
              discover job opportunities tailored to your skills. TechQuest Mentor simplifies your journey into tech,
              making it engaging and hassle-free.
            </p>
            <p className="text-gray-700 mb-8">
              Join a community of like-minded professionals, gain insights from industry experts, and access exclusive
              resources to sharpen your skills. Take the next step toward success with TechQuest Mentor today!
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/about" className="bg-primary hover:bg-blue-800 text-white px-8 py-3 rounded-full font-medium">
                Learn more
              </Link>
              <Link to="/register" className="bg-secondary hover:bg-yellow-300 text-black px-8 py-3 rounded-full font-medium">
                Get Started
              </Link>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src="/assets/hero-image.png"
              alt="Tech professionals around a globe"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;