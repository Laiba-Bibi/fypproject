import React from 'react';

const AboutUs = () => {
  return (
    <section className="py-16 bg-white" id="about">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="relative">
              <div className="bg-primary rounded-full w-96 h-96 overflow-hidden">
                <img
                  src="/assets/about-image.png"
                  alt="Professional woman"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-10 -left-10">
                <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 4L13.5 8.5H18L14.5 11.5L16 16L12 13L8 16L9.5 11.5L6 8.5H10.5L12 4Z" fill="#1E40AF" />
                </svg>
              </div>
              <div className="absolute -bottom-5 -right-5">
                <svg width="70" height="70" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="#1E40AF" strokeWidth="2" />
                </svg>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">About Us</h2>
            <h3 className="text-2xl font-bold mb-6">Light, Fast & Powerful</h3>
            <p className="text-gray-600 mb-4">
              TechQuest Mentor connects aspiring tech professionals with industry experts to build rewarding careers.
            </p>
            <p className="text-gray-600 mb-8">
              Our platform offers personalized roadmaps, skill assessments, and community support to help you succeed.
            </p>
            <button className="bg-secondary hover:bg-yellow-300 text-black px-6 py-3 rounded">
              View More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;