'use client';
import React, { useState, useEffect, useRef } from 'react';

const booksData = [
  {
    id: 1,
    title: "SONNY SONNY MEATBALL",
    author: "By Roseanne Critelli",
    color: "#E8D5C4",
    coverColor: "#4A90E2"
  },
  {
    id: 2,
    title: "THE APPLE SAUCE",
    author: "By Paul A. Martinez",
    color: "#B19CD9",
    coverColor: "#2C2C2C"
  },
  {
    id: 3,
    title: "BENEATH THE RINGS",
    author: "By Joe Battaglia",
    color: "#A8E6E3",
    coverColor: "#8B4513"
  },
  {
    id: 4,
    title: "MIDNIGHT ECHOES",
    author: "By Sarah Johnson",
    color: "#FFB6C1",
    coverColor: "#191970"
  },
  {
    id: 5,
    title: "THE LAST CHAPTER",
    author: "By Michael Chen",
    color: "#98D8C8",
    coverColor: "#8B0000"
  },
  {
    id: 6,
    title: "WHISPERS IN TIME",
    author: "By Emily Rodriguez",
    color: "#F7DC6F",
    coverColor: "#2F4F4F"
  },
  {
    id: 7,
    title: "SHADOWS OF DESTINY",
    author: "By David Thompson",
    color: "#FAD7A0",
    coverColor: "#4B0082"
  },
  {
    id: 8,
    title: "ETERNAL HORIZONS",
    author: "By Lisa Anderson",
    color: "#D7BDE2",
    coverColor: "#006400"
  },
  {
    id: 9,
    title: "THE FORGOTTEN PATH",
    author: "By Robert Martinez",
    color: "#AED6F1",
    coverColor: "#8B4513"
  }
];

const RecommendedReads = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isHeadingVisible, setIsHeadingVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [slideDirection, setSlideDirection] = useState('next');
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  // Observe heading for color-on-scroll
  useEffect(() => {
    const heading = headingRef.current;
    if (!heading) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setIsHeadingVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );
    observer.observe(heading);
    return () => observer.disconnect();
  }, []);

  // NOTE: hover will control color; keeping IntersectionObserver for visibility if needed

  const booksPerPage = 3;
  const totalPages = Math.ceil(booksData.length / booksPerPage);

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

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentPage]);

  const handleNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setSlideDirection('next');
      setTimeout(() => {
        setCurrentPage((prev) => (prev + 1) % totalPages);
        setIsAnimating(false);
      }, 600);
    }
  };

  const handlePrev = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setSlideDirection('prev');
      setTimeout(() => {
        setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
        setIsAnimating(false);
      }, 600);
    }
  };

  const handleDotClick = (idx) => {
    if (!isAnimating && idx !== currentPage) {
      setIsAnimating(true);
      setSlideDirection(idx > currentPage ? 'next' : 'prev');
      setTimeout(() => {
        setCurrentPage(idx);
        setIsAnimating(false);
      }, 600);
    }
  };

  const getCurrentBooks = () => {
    const start = currentPage * booksPerPage;
    return booksData.slice(start, start + booksPerPage);
  };

  return (
    <section 
      ref={sectionRef}
      style={{background: 'var(--bg)'}}
      className={`w-full py-16 px-4 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black mb-3 border-t-4 inline-block pt-4 text-gray-900 border-[#1f2a44] transition-colors duration-300 hover:text-[#EB6358] cursor-pointer hover:border-[#EB6358]">
            Recommended Reads
          </h2>
          <div style={{background: 'var(--border)'}} className="w-full max-w-md mx-auto h-[1px] mb-5 mt-3"></div>
          <p className="text-base md:text-lg max-w-4xl mx-auto leading-relaxed text-gray-600">
            Looking for your next great read? Explore our curated selection of exceptional books from our talented pool of published authors. Discover diverse voices and stories that will transport you, inspire you, and stay with you long after the last page.
          </p>
          <div 
            style={{
              background: 'var(--surface)',
              borderTopWidth: '4px',
              borderBottomWidth: '1px',
              borderTopColor: 'var(--accent)',
              borderBottomColor: 'var(--border)',
              borderRadius: 'var(--radius) var(--radius) 0 0'
            }}
            className="py-4 px-8 relative overflow-hidden transition-all duration-300"
          >
            {/* Animated Shine Effect */}
            <div 
              className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                animation: 'shine 2s infinite'
              }}
            />
            
            {/* Decorative Sparkles */}
            <div className="absolute top-2 left-8 w-2 h-2 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:animate-ping" />
            <div className="absolute top-4 right-12 w-1.5 h-1.5 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:animate-pulse" />
            <div className="absolute bottom-3 left-16 w-1 h-1 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:animate-bounce" />
            <div className="absolute bottom-2 right-20 w-2 h-2 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-400 group-hover:animate-ping" />

            <h3
              ref={headingRef}
              style={{ color: '#1f2a44', transition: 'color 0.25s' }}
              className="text-4xl font-extrabold tracking-tight text-center relative z-10 transform transition-all duration-300 cursor-pointer hover:scale-105 hover:drop-shadow-lg hover:text-[#EB6358]"
              aria-label="Franklin's Proud Publishings"
              role="button"
            >
              <span className="inline-block">Franklin&apos;s</span>{' '}
              <span className="inline-block" style={{ animationDelay: '0.1s' }}>Proud</span>{' '}
              <span className="inline-block" style={{ animationDelay: '0.2s' }}>Publishings!</span>
            </h3>
          </div>

          {/* Books Display Grid - White Background */}
          <div className="px-8 md:px-12 py-12 bg-gradient-to-br from-white via-[#FAFBFC] to-[#F6F7F9] relative">
            {/* Previous Button */}
            <button
                onClick={handlePrev}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white border-2 border-[#EB6358] shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-200 flex items-center justify-center group"
                aria-label="Previous books"
              >
                <svg className="w-6 h-6" fill="none" stroke="#EB6358" style={{ transition: 'stroke 0.3s' }} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" className="group-hover:stroke-[#1f2a44]" />
                </svg>
              </button>

            {/* Next Button */}
            <button
                onClick={handleNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white border-2 border-[#EB6358] shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-200 flex items-center justify-center group"
                aria-label="Next books"
              >
                <svg className="w-6 h-6" fill="none" stroke="#EB6358" style={{ transition: 'stroke 0.3s' }} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" className="group-hover:stroke-[#1f2a44]" />
                </svg>
              </button>

            {/* Carousel Container */}
            <div className="overflow-hidden">
              <div 
                className={`grid grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-10 transition-all duration-600 ease-in-out ${
                  isAnimating 
                    ? slideDirection === 'next' 
                      ? '-translate-x-full opacity-0' 
                      : 'translate-x-full opacity-0'
                    : 'translate-x-0 opacity-100'
                }`}
              >
              {getCurrentBooks().map((book, index) => (
                <div 
                  key={book.id} 
                  className="flex flex-col items-center transform transition-all duration-300 hover:scale-105 hover:-translate-y-2"
                >
                  {/* Book Display Area - 3D Mockup with Perspective */}
                  <div className="w-full max-w-[260px] h-[340px] mx-auto mb-6 flex items-center justify-center relative group cursor-pointer">
                    {/* Physical Book Mockup - Back */}
                    <div 
                      className="w-[130px] h-[190px] rounded-md shadow-2xl absolute left-0 z-10 transition-transform duration-300 group-hover:rotate-[-12deg] group-hover:scale-105"
                      style={{ 
                        backgroundColor: book.coverColor,
                        transform: 'rotate(-8deg) translateX(15px)'
                      }}
                    >
                      <div className="w-full h-full flex items-center justify-center border-2 border-black/10 rounded-md p-2">
                        <div className="text-white font-bold text-[10px] text-center leading-tight" style={{ transform: 'rotate(8deg)' }}>
                          {book.title.split(' ').slice(0, 2).join(' ')}
                        </div>
                      </div>
                    </div>

                    {/* Digital Device Mockup (Tablet/Phone) - Front */}
                    <div 
                      className="w-[145px] h-[200px] bg-gray-900 rounded-[18px] shadow-2xl border-[5px] border-gray-900 absolute right-0 z-20 transition-transform duration-300 group-hover:rotate-[10deg] group-hover:scale-105"
                      style={{ transform: 'rotate(6deg) translateX(-15px)' }}
                    >
                      <div className="w-full h-full rounded-[13px] overflow-hidden">
                        <div 
                          className="w-full h-full flex items-center justify-center p-3"
                          style={{ backgroundColor: book.coverColor }}
                        >
                          <div className="text-white font-bold text-[11px] text-center leading-tight" style={{ transform: 'rotate(-6deg)' }}>
                            {book.title.split(' ').slice(0, 2).join(' ')}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Book Info Card - Badge Style */}
                  <div 
                    style={{background: 'var(--surface)', borderColor: 'var(--border)', boxShadow: 'var(--shadow-sm)'}}
                    className="w-full max-w-[280px] py-6 px-6 rounded-[18px] border text-center transition-all duration-300 hover:shadow-[var(--shadow)]"
                  >
                    <h4 style={{color: 'var(--text)'}} className="text-base font-extrabold mb-1 italic uppercase leading-tight">
                      {book.title}
                    </h4>
                    <p style={{color: 'var(--text-muted)'}} className="text-sm font-normal italic">
                      {book.author}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            </div>

            {/* Carousel Dots - Show All Pages */}
            <div className="flex justify-center items-center gap-2 mt-10">
              {Array.from({ length: totalPages }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => handleDotClick(idx)}
                  style={{
                    background: idx === currentPage ? 'var(--accent)' : 'var(--border)',
                    width: '6px',
                    height: '6px'
                  }}
                  className="rounded-full transition-all duration-300 hover:scale-125"
                  aria-label={`View page ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* View More Button */}
        <div className="flex justify-center">
            <button
              onClick={() => window.location.href = '/books'}
              className="text-sm uppercase tracking-wide px-10 py-3 rounded-full font-bold shadow-md bg-[#1f2a44] hover:bg-[#EB6358] text-white transition-colors duration-300"
            >
              View More
            </button>
        </div>
      </div>
    </section>
  );
};

export default RecommendedReads;
