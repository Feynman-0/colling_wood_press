'use client';
import React, { useState, useEffect, useRef } from 'react';

const testimonialsData = [
  {
    id: 1,
    text: "Franklin Publishers made me feel very comfortable throughout the publishing process. They heard and remedied every one of my concerns in a timely manner and I felt very good about the services they offered me.",
    name: "FRANKEE SULLIVAN",
    title: "Published Author"
  },
  {
    id: 2,
    text: "This was my first experience with publishers. I had never published a book before. I was looking for some advice and I found Emi Maxwell with Franklin Publishers. She guided me patiently through the process...",
    name: "EDWARD HETHINGTON",
    title: "Published Author"
  },
  {
    id: 3,
    text: "As a previously published writer and author I was looking for a new professional and knowledgeable publisher/editor to take my work to another level by skillfully helping me improve an existing work which was out of print.",
    name: "JOSEPH RIDGWAY",
    title: "Published Author"
  },
  {
    id: 4,
    text: "Working with Franklin Publishers was an absolute pleasure. Their team was professional, responsive, and truly cared about bringing my vision to life. I couldn't have asked for a better publishing experience.",
    name: "MARIA GONZALEZ",
    title: "Published Author"
  },
  {
    id: 5,
    text: "The support I received from Franklin Publishers exceeded all my expectations. From manuscript review to final publication, every step was handled with care and expertise. Highly recommend!",
    name: "DAVID CHEN",
    title: "Published Author"
  },
  {
    id: 6,
    text: "I was skeptical about self-publishing at first, but Franklin Publishers changed my perspective completely. They walked me through each stage with clarity and patience, making the entire process smooth and stress-free.",
    name: "REBECCA THOMPSON",
    title: "Published Author"
  },
  {
    id: 7,
    text: "The editorial team at Franklin Publishers is top-notch. They helped polish my manuscript while preserving my unique voice. The final product exceeded my wildest dreams and I'm already working on my second book with them.",
    name: "JAMES WILLIAMS",
    title: "Published Author"
  },
  {
    id: 8,
    text: "From cover design to marketing strategy, Franklin Publishers delivered on every front. They truly understand what it takes to make a book successful in today's competitive market. I'm grateful for their expertise.",
    name: "LISA PATEL",
    title: "Published Author"
  },
  {
    id: 9,
    text: "As a first-time author, I had countless questions and concerns. Franklin Publishers not only answered every question but also provided valuable insights that made my book launch a huge success. They're more than publishers - they're partners.",
    name: "MICHAEL RODRIGUEZ",
    title: "Published Author"
  },
  {
    id: 10,
    text: "The attention to detail that Franklin Publishers brings to every project is remarkable. They treated my manuscript with the care and respect it deserved, resulting in a beautiful finished product that I'm proud to share with the world.",
    name: "SARAH ANDERSON",
    title: "Published Author"
  },
  {
    id: 11,
    text: "I appreciated the transparent communication and honest feedback throughout the publishing journey. Franklin Publishers didn't just want to publish my book - they wanted to help me create the best possible version of it.",
    name: "THOMAS MARTINEZ",
    title: "Published Author"
  },
  {
    id: 12,
    text: "The marketing support from Franklin Publishers was exceptional. They helped me reach readers I never would have found on my own. My book sales have exceeded expectations, and I owe much of that success to their strategic guidance.",
    name: "JENNIFER NGUYEN",
    title: "Published Author"
  }
];

const TestimonialsCarousel = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const sectionRef = useRef(null);

  const cardsPerPage = 3;
  const totalPages = Math.ceil(testimonialsData.length / cardsPerPage);

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating && isVisible) {
        handleNext();
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [currentPage, isAnimating, isVisible]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentPage((prev) => (prev + 1) % totalPages);
        setIsAnimating(false);
      }, 500);
    }
  };

  const handlePrev = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
        setIsAnimating(false);
      }, 500);
    }
  };

  const getCurrentTestimonials = () => {
    const start = currentPage * cardsPerPage;
    return testimonialsData.slice(start, start + cardsPerPage);
  };

  return (
    <section 
      ref={sectionRef}
      style={{background: 'var(--surface)'}}
      className={`w-full py-16 px-4 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 style={{color: 'var(--text)', borderTopColor: 'var(--accent)'}} className="text-4xl md:text-5xl font-black mb-3 border-t-4 inline-block pt-4">
            Don&apos;t just take our word for it.
          </h2>
          <div style={{background: 'var(--border)'}} className="w-full max-w-md mx-auto h-[1px] mb-5 mt-3"></div>
          <p style={{color: 'var(--text-muted)'}} className="text-base md:text-lg max-w-3xl mx-auto">
            Here&apos;s what the Franklin Family of Authors has to say
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Previous Button */}
          <button
            onClick={handlePrev}
            style={{background: 'white', borderColor: 'var(--border)', color: 'var(--text)', boxShadow: 'var(--shadow-sm)'}}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full border-2 hover:shadow-[var(--shadow)] hover:scale-110 transition-all duration-200 flex items-center justify-center"
            aria-label="Previous testimonials"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next Button */}
          <button
            onClick={handleNext}
            style={{background: 'white', borderColor: 'var(--border)', color: 'var(--text)', boxShadow: 'var(--shadow-sm)'}}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full border-2 hover:shadow-[var(--shadow)] hover:scale-110 transition-all duration-200 flex items-center justify-center"
            aria-label="Next testimonials"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Testimonials Grid */}
          <div className="px-16">
            <div 
              className={`grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto transition-all duration-500 ease-in-out ${
                isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
              }`}
            >
              {getCurrentTestimonials().map((testimonial) => (
                <div
                  key={testimonial.id}
                  style={{background: 'white', borderColor: 'var(--border)', boxShadow: 'var(--shadow-sm)', borderRadius: 'var(--radius)'}}
                  className="border p-6 hover:shadow-[var(--shadow)] transition-all duration-300 hover:-translate-y-1 max-w-[280px] mx-auto"
                >
                  <p style={{color: 'var(--text-muted)'}} className="text-sm leading-relaxed mb-6 min-h-[240px]">
                    {testimonial.text}
                  </p>
                  <div style={{borderTopColor: 'var(--border)'}} className="border-t pt-4">
                    <h4 style={{color: 'var(--text)'}} className="text-base font-black uppercase">
                      {testimonial.name}
                    </h4>
                    <p style={{color: 'var(--text-muted)'}} className="text-sm font-medium">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Premium CTA Banner Below Testimonials */}
        <div className="mt-20 max-w-5xl mx-auto relative">
          {/* Decorative Elements Around Banner */}
          <div className="absolute -top-12 -left-12 w-24 h-24 bg-gradient-to-br from-[#415a77]/20 to-transparent rounded-full blur-2xl animate-pulse-slow"></div>
          <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-gradient-to-tl from-[#1F2A44]/20 to-transparent rounded-full blur-2xl animate-pulse-slow" style={{animationDelay: '1s'}}></div>
          
          <div className="relative bg-gradient-to-br from-white via-[#F6F7F9] to-white border-2 border-gray-200 rounded-3xl p-12 md:p-16 text-center overflow-hidden shadow-2xl group hover:shadow-[0_20px_60px_rgba(31,42,68,0.15)] transition-all duration-500">
            {/* Animated Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#415a77]/5 via-transparent to-[#1F2A44]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Decorative Corner Elements */}
            <div className="absolute top-0 left-0 w-32 h-32 border-t-4 border-l-4 border-[#415a77]/20 rounded-tl-3xl"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 border-b-4 border-r-4 border-[#1F2A44]/20 rounded-br-3xl"></div>
            
            {/* Floating Icons */}
            <div className="absolute top-8 right-12 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
              <svg className="w-16 h-16 text-[#415a77] animate-float" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <div className="absolute bottom-8 left-12 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
              <svg className="w-14 h-14 text-[#1F2A44] animate-float" style={{animationDelay: '1.5s'}} viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"/>
              </svg>
            </div>

            <div className="relative z-10">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#415a77]/10 to-[#1F2A44]/10 px-6 py-2 rounded-full mb-6 border border-[#415a77]/20 group-hover:scale-105 transition-transform duration-300">
                <svg className="w-5 h-5 text-[#415a77]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                <span className="text-sm font-bold text-[#1F2A44] uppercase tracking-wider">100% Free Review</span>
              </div>

              {/* Main Heading */}
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1F2A44] mb-6 leading-tight transition-transform duration-300 hover:scale-[1.02] hover:text-[#EB6358] cursor-pointer">
                Request a <span className="bg-gradient-to-r from-[#415a77] to-[#1F2A44] bg-clip-text text-transparent">Manuscript Review</span>
              </h3>

              {/* Decorative Divider */}
              <div className="flex items-center justify-center gap-3 mb-8">
                <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#415a77]"></div>
                <div className="w-2 h-2 rounded-full bg-[#415a77]"></div>
                <div className="h-px w-24 bg-[#415a77]"></div>
                <div className="w-2 h-2 rounded-full bg-[#415a77]"></div>
                <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#415a77]"></div>
              </div>

              {/* Description */}
              <p className="text-lg md:text-xl text-gray-600 mb-6 max-w-3xl mx-auto leading-relaxed">
                Get a free manuscript review from a dedicated literary expert for personalized feedback and publishing advice to boost book sales.
              </p>

              {/* Feature Pills */}
              <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200 hover:border-[#415a77]/30 hover:shadow-md transition-all duration-300">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-sm font-semibold text-gray-700">Expert Feedback</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200 hover:border-[#415a77]/30 hover:shadow-md transition-all duration-300">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-sm font-semibold text-gray-700">5-7 Day Review</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200 hover:border-[#415a77]/30 hover:shadow-md transition-all duration-300">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-sm font-semibold text-gray-700">No Obligations</span>
                </div>
              </div>

              {/* CTA Text */}
              <p className="text-base md:text-lg text-[#415a77] font-semibold mb-8">
                Take the first step towards becoming a published author today!
              </p>

              {/* Premium Button */}
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-gradient-to-r from-[#415a77] to-[#1F2A44] rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                <button className="relative bg-gradient-to-r from-[#1F2A44] to-[#415a77] hover:from-[#EB6358] hover:to-[#1F2A44] text-white font-bold text-lg uppercase tracking-wider px-12 py-5 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-3 group">
                  <span>Submit Your Manuscript</span>
                  <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="mt-10 flex items-center justify-center gap-8 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#415a77]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>Secure & Confidential</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#415a77]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                  <span>Trusted by 1000+ Authors</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
