import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CTO',
    company: 'TechNova',
    image: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    content: "CASTA DESK has revolutionized how we implement AI across our organization. The ability to quickly test and deploy models without deep technical expertise has accelerated our innovation timeline dramatically.",
    rating: 5
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Director of Innovation',
    company: 'Quantum Ventures',
    image: 'https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    content: "As a non-technical founder, I was skeptical about integrating AI into our workflow. CASTA DESK made it not just possible but incredibly straightforward. Our productivity has increased by 35% since implementation.",
    rating: 4
  },
  {
    id: 3,
    name: 'Elena Rodriguez',
    role: 'Data Science Lead',
    company: 'FinEdge',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    content: "The model customization capabilities are unmatched. We've been able to fine-tune pretrained models for our specific financial use cases, saving us months of development time and resources.",
    rating: 5
  }
];

const TestimonialCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setActiveIndex((current) => (current + 1) % testimonials.length);
      }, 5000);
      
      return () => clearInterval(interval);
    }
  }, [isPaused]);

  const handlePrev = () => {
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
    setIsPaused(true);
  };

  const handleNext = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
    setIsPaused(true);
  };

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
    setIsPaused(true);
  };

  return (
    <div 
      className="relative max-w-4xl mx-auto"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
              <div className="bg-white rounded-xl shadow-lg p-8 md:p-10">
                <div className="flex flex-col md:flex-row items-start md:items-center mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-16 h-16 rounded-full object-cover mb-4 md:mb-0 md:mr-6"
                  />
                  <div>
                    <h3 className="text-xl font-bold">{testimonial.name}</h3>
                    <p className="text-neutral-600">{testimonial.role}, {testimonial.company}</p>
                    <div className="flex items-center mt-2">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={16} 
                          className={i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-neutral-300'}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <blockquote className="text-lg italic text-neutral-700">
                  "{testimonial.content}"
                </blockquote>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button 
        className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-5 md:-translate-x-10 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-neutral-100 transition-colors"
        onClick={handlePrev}
        aria-label="Previous testimonial"
      >
        <ChevronLeft size={24} className="text-neutral-700" />
      </button>
      <button 
        className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-5 md:translate-x-10 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-neutral-100 transition-colors"
        onClick={handleNext}
        aria-label="Next testimonial"
      >
        <ChevronRight size={24} className="text-neutral-700" />
      </button>

      {/* Dots */}
      <div className="flex justify-center mt-8 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === activeIndex ? 'bg-primary-500' : 'bg-neutral-300'
            }`}
            onClick={() => handleDotClick(index)}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;