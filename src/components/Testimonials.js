import React, { useState } from 'react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Jessie Owner",
      position: "Founder, XYZ Company",
      image: "/assets/testimonial-1.png",
      quote:
        "TechQuest Mentor transformed my career path with personalized guidance and expert support.",
      rating: 5,
    },
    {
      id: 2,
      name: "Alex Carter",
      position: "Tech Lead, ABC Corp",
      image: "/assets/testimonial-2.png",
      quote:
        "The skill assessments and roadmaps were game-changers for my professional growth.",
      rating: 5,
    },
    {
      id: 3,
      name: "Sara Lee",
      position: "Developer, DEF Inc",
      image: "/assets/testimonial-3.png",
      quote:
        "Joining the TechQuest community opened doors to new opportunities and connections.",
      rating: 5,
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating) => {
    return Array(rating)
      .fill(0)
      .map((_, i) => (
        <span key={i} className="text-secondary">★</span>
      ));
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          See What Our Trusted Users Say
          <span className="inline-block w-32 h-3 bg-secondary ml-2"></span>
        </h2>
        <div className="flex justify-center">
          <div className="bg-primary text-white p-8 rounded-lg shadow-lg max-w-md">
            <div className="flex items-center mb-4">
              <img
                src={testimonials[currentSlide].image}
                alt={testimonials[currentSlide].name}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <p className="font-medium">{testimonials[currentSlide].quote}</p>
              </div>
            </div>
            <div className="mt-6">
              <p className="font-bold">{testimonials[currentSlide].name}</p>
              <p className="text-sm">{testimonials[currentSlide].position}</p>
              <div className="mt-2">{renderStars(testimonials[currentSlide].rating)}</div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <button
            onClick={prevSlide}
            className="mx-2 w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="mx-2 w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;