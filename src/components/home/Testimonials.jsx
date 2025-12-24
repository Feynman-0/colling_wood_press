"use client"
import { useState } from 'react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  // heading hover-based interactivity only
  const [isHeadingHover, setIsHeadingHover] = useState(false);
  const cardsToShow = 3;

  const testimonials = [
    {
      quote: "Working with Franklin Publishers was an absolute pleasure. Their team was professional, responsive, and truly cared about bringing my vision to life. I couldn't have asked for a better publishing experience.",
      name: "MARIA GONZALEZ",
      role: "Published Author"
    },
    {
      quote: "The support I received from Franklin Publishers exceeded all my expectations. From manuscript review to final publication, every step was handled with care and expertise. Highly recommend!",
      name: "DAVID CHEN",
      role: "Published Author"
    },
    {
      quote: "I was skeptical about self-publishing at first, but Franklin Publishers changed my perspective completely. They walked me through each stage with clarity and patience, making the entire process smooth and stress-free.",
      name: "REBECCA THOMPSON",
      role: "Published Author"
    },
    {
      quote: "The attention to detail and personalized guidance I received was outstanding. Franklin Publishers didn't just publish my book—they helped me become a better writer in the process.",
      name: "MICHAEL ANDERSON",
      role: "Published Author"
    },
    {
      quote: "From the first consultation to seeing my book in print, Franklin Publishers provided exceptional support. Their team's expertise and dedication made my publishing dream a reality.",
      name: "JENNIFER MARTINEZ",
      role: "Published Author"
    },
    {
      quote: "I've worked with other publishers before, but Franklin stands out for their transparency and genuine commitment to their authors. The entire experience was refreshingly professional.",
      name: "ROBERT WILLIAMS",
      role: "Published Author"
    }
  ];

  const totalSlides = Math.ceil(testimonials.length / cardsToShow);
  
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getCurrentTestimonials = () => {
    const start = currentIndex * cardsToShow;
    return testimonials.slice(start, start + cardsToShow);
  };

  // hover-based heading; no scroll logic

  return (
    <section className="group py-24 bg-gradient-to-br from-[#F6F7F9] via-white to-[#E8EDF2] relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-gradient-to-br from-[#415a77]/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-[600px] h-[600px] bg-gradient-to-tl from-[#1F2A44]/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#415a77]/5 via-transparent to-[#1F2A44]/5 rounded-full blur-3xl"></div>
        
        {/* Decorative Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(#1F2A44 1px, transparent 1px), linear-gradient(90deg, #1F2A44 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>

        {/* Floating Book Icons */}
        <div className="absolute top-32 right-20 opacity-5 animate-float">
          <svg className="w-24 h-24 text-[#1F2A44] transition-colors group-hover:text-[#EB6358]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"/>
          </svg>
        </div>
        <div className="absolute bottom-40 left-16 opacity-5 animate-float" style={{animationDelay: '1s'}}>
          <svg className="w-20 h-20 text-[#1F2A44] transition-colors group-hover:text-[#EB6358]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z"/>
          </svg>
        </div>
        <div className="absolute top-1/3 left-1/4 opacity-5 animate-float" style={{animationDelay: '2s'}}>
          <svg className="w-16 h-16 text-[#415a77] transition-colors group-hover:text-[#EB6358]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        </div>

        {/* Geometric Shapes */}
        <div className="absolute top-48 left-1/3 w-32 h-32 border-2 border-[#415a77]/10 rounded-full"></div>
        <div className="absolute bottom-32 right-1/4 w-40 h-40 border-2 border-[#1F2A44]/10 rotate-45"></div>
        <div className="absolute top-2/3 right-12 w-24 h-24 border-2 border-[#415a77]/10 rounded-lg rotate-12"></div>
        
        {/* Dot Pattern Clusters */}
        <div className="absolute top-24 left-1/2 flex gap-2">
          <div className="w-2 h-2 rounded-full bg-[#415a77]/20"></div>
          <div className="w-2 h-2 rounded-full bg-[#415a77]/15"></div>
          <div className="w-2 h-2 rounded-full bg-[#415a77]/10"></div>
        </div>
        <div className="absolute bottom-48 left-20 flex flex-col gap-2">
          <div className="w-2 h-2 rounded-full bg-[#1F2A44]/20"></div>
          <div className="w-2 h-2 rounded-full bg-[#1F2A44]/15"></div>
          <div className="w-2 h-2 rounded-full bg-[#1F2A44]/10"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Heading Section */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#415a77]"></div>
              <svg className="w-8 h-8 text-[#415a77]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
              </svg>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#415a77]"></div>
            </div>
          </div>
          <h2
            tabIndex={0}
            className="text-5xl md:text-6xl font-black text-[#1F2A44] mb-6 leading-tight transform transition-all duration-300 transition-colors hover:scale-105 hover:drop-shadow-lg hover:text-[#EB6358] focus:text-[#EB6358] focus-visible:text-[#EB6358] outline-none cursor-pointer"
            aria-label="Testimonials heading"
            role="heading"
          >
            Don't just take our word for it.
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Here's what the Franklin Family of Authors has to say
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 z-20 w-14 h-14 bg-white rounded-full shadow-xl flex items-center justify-center hover:bg-[#1F2A44] hover:text-white transition-all duration-300 group border-2 border-gray-100"
            aria-label="Previous testimonials"
          >
            <svg className="w-6 h-6 text-[#1F2A44] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 z-20 w-14 h-14 bg-white rounded-full shadow-xl flex items-center justify-center hover:bg-[#1F2A44] hover:text-white transition-all duration-300 group border-2 border-gray-100"
            aria-label="Next testimonials"
          >
            <svg className="w-6 h-6 text-[#1F2A44] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-3 gap-8 px-4 md:px-8">
            {getCurrentTestimonials().map((testimonial, index) => (
              <div
                key={currentIndex * cardsToShow + index}
                className="bg-gradient-to-br from-white via-[#FAFBFC] to-white rounded-2xl shadow-lg p-10 hover:shadow-2xl transition-all duration-500 relative group border border-gray-100 hover:border-[#415a77]/20"
              >
                {/* Decorative Corner Accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#415a77]/5 to-transparent rounded-bl-full"></div>
                
                {/* Large Decorative Quote */}
                <div className="absolute top-8 left-8 text-[#415a77]/10 group-hover:text-[#415a77]/20 transition-colors duration-300">
                  <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
                  </svg>
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-8 justify-center relative z-10">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-6 h-6 text-yellow-400 fill-current drop-shadow-sm"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-gray-600 leading-relaxed mb-8 text-center relative z-10 text-base min-h-[140px]">
                  {testimonial.quote}
                </p>

                {/* Author Info with Divider */}
                <div className="relative z-10">
                  <div className="w-16 h-px bg-gradient-to-r from-[#415a77] to-transparent mx-auto mb-6"></div>
                  <p className="font-black text-[#1F2A44] text-base mb-2 text-center tracking-wide">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-gray-500 uppercase tracking-widest text-center">
                    {testimonial.role}
                  </p>
                </div>

                {/* Bottom Corner Accent */}
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-[#1F2A44]/5 to-transparent rounded-tr-full"></div>
              </div>
            ))}
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center items-center gap-3 mt-12">
            {Array.from({ length: totalSlides }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`transition-all duration-300 rounded-full ${
                  idx === currentIndex
                    ? 'w-12 h-3 bg-[#1F2A44]'
                    : 'w-3 h-3 bg-gray-300 hover:bg-[#415a77]'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
