"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

type Testimonial = {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  date: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "IELTS Student",
    content: "IELTS 7+ House helped me achieve my target band score of 7.5! The practice tests were incredibly similar to the actual exam, and the feedback was invaluable.",
    rating: 5,
    date: "March 15, 2025"
  },
  {
    id: 2,
    name: "Mohammed Al-Farsi",
    role: "Medical Professional",
    content: "I needed an IELTS score of 7 for my medical license, and thanks to the resources and guidance from IELTS 7+ House, I scored a 7.5 overall. Their methods are effective and practical.",
    rating: 5,
    date: "January 22, 2025"
  },
  {
    id: 3,
    name: "Priya Sharma",
    role: "Graduate Student",
    content: "The personalized feedback on my writing samples was game-changing. I finally understood where I was going wrong and improved from a 6.5 to an 8 in writing!",
    rating: 5,
    date: "April 3, 2025"
  },
  {
    id: 4,
    name: "Carlos Rodriguez",
    role: "Immigration Applicant",
    content: "The speaking practice modules helped me overcome my nervousness and score a 7 in the speaking section. Highly recommend their services!",
    rating: 4,
    date: "February 18, 2025"
  },
  {
    id: 5,
    name: "Liu Wei",
    role: "International Student",
    content: "IELTS 7+ House provided exactly what I needed - authentic practice materials and expert guidance. I achieved my dream score on the first attempt!",
    rating: 5,
    date: "March 30, 2025"
  }
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const goToTestimonial = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Students Say</h2>
          <div className="flex items-center justify-center gap-2 mb-2">
            <svg className="w-6 h-6 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
            </svg>
            <span className="text-xl font-bold text-gray-900">4.9</span>
            <span className="text-gray-600">• Google Reviews</span>
          </div>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Testimonial Card */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <svg 
                  key={i} 
                  className={cn("w-5 h-5", i < testimonials[activeIndex].rating ? "text-yellow-400" : "text-gray-300")}
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                </svg>
              ))}
            </div>

            <p className="text-gray-700 text-lg mb-6 italic">"{testimonials[activeIndex].content}"</p>
            
            <div className="flex justify-between items-center">
              <div>
                <h4 className="font-semibold text-gray-900">{testimonials[activeIndex].name}</h4>
                <p className="text-sm text-gray-600">{testimonials[activeIndex].role}</p>
              </div>
              <div className="text-sm text-gray-500">
                {testimonials[activeIndex].date}
              </div>
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-between items-center">
            <button 
              onClick={prevTestimonial}
              className="bg-white rounded-full p-3 shadow-md hover:bg-gray-100 transition-all duration-200"
              aria-label="Previous testimonial"
            >
              <svg className="w-6 h-6 text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={cn(
                    "w-3 h-3 rounded-full transition-all duration-300",
                    index === activeIndex ? "bg-blue-600 w-6" : "bg-gray-300 hover:bg-gray-400"
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button 
              onClick={nextTestimonial}
              className="bg-white rounded-full p-3 shadow-md hover:bg-gray-100 transition-all duration-200"
              aria-label="Next testimonial"
            >
              <svg className="w-6 h-6 text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;