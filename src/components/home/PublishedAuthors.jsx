'use client';
import React, { useState, useEffect } from 'react';

const publishedAuthorsData = [
  {
    id: 1,
    name: "MICHELE' WILLIAMS",
    color: "#FF6B57",
    description: "Explore the inspiring journey of Michele' Williams, author of Smooth Talker (He's Good At What He Does). Discover her talents as an actress, minister, and radio personality, and learn how her storytelling empowers others to embrace faith and resilience.",
    profileHref: "/authors/michele-williams"
  },
  {
    id: 2,
    name: "ROSEANNE CRITELLI",
    color: "#4ECDC4",
    description: "Dive into the world of Roseanne Critelli, author of 'The Adventures of Luca & Sonny' series. Discover her love for family, her passion for dogs, and the heartwarming stories that captivate readers of all ages.",
    profileHref: "/authors/roseanne-critelli"
  },
  {
    id: 3,
    name: "DR. TY H. WENGLAR",
    color: "#95D5F5",
    description: "Explore Dr. Ty H. Wenglar's journey as a leader, scholar, and author of the Golden Principles of Leadership series. Discover his insights on ethics, purpose, and adaptability in modern leadership.",
    profileHref: "/authors/ty-wenglar"
  },
  {
    id: 4,
    name: "JAMES MORRISON",
    color: "#FFD93D",
    description: "Discover the captivating works of James Morrison, whose novels blend mystery, adventure, and unforgettable characters. His unique storytelling style keeps readers on the edge of their seats.",
    profileHref: "/authors/james-morrison"
  },
  {
    id: 5,
    name: "LISA ANDREWS",
    color: "#C69AFF",
    description: "Meet Lisa Andrews, bestselling author of contemporary fiction. Her heartfelt stories explore relationships, personal growth, and the complexities of modern life with warmth and authenticity.",
    profileHref: "/authors/lisa-andrews"
  }
];

const PublishedAuthors = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const cardsPerPage = 3;
  const totalPages = Math.ceil(publishedAuthorsData.length / cardsPerPage);

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [totalPages]);

  const getCurrentCards = () => {
    const start = currentPage * cardsPerPage;
    return publishedAuthorsData.slice(start, start + cardsPerPage);
  };

  return (
    <section style={{background: 'var(--surface)'}} className="w-full py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          {/* Decorative curved line */}
          <div className="flex justify-center mb-4">
            <svg 
              width="500" 
              height="8" 
              viewBox="0 0 500 8" 
              className="transition-all duration-300"
            >
              <path 
                d="M 0 4 Q 125 0, 250 4 T 500 4" 
                stroke="#1f2a44" 
                strokeWidth="4" 
                fill="none"
                strokeLinecap="round"
                className="transition-all duration-300 hover:stroke-[#EB6358]"
                style={{ cursor: 'pointer' }}
              />
            </svg>
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-3 inline-block transition-colors duration-300 text-gray-900 hover:text-[#EB6358] cursor-pointer">
            Published Authors
          </h2>
          <div style={{background: 'var(--border)'}} className="w-full max-w-md mx-auto h-[1px] mb-5 mt-3"></div>
          <p className="text-base md:text-lg max-w-4xl mx-auto leading-relaxed text-gray-600 transition-colors duration-300 hover:text-[#EB6358] cursor-pointer">
            Welcome home, fellow storytellers! At Franklin Publishers, we believe in fostering a supportive community for our authors. We offer ongoing resources, marketing assistance, and author events to help you connect with readers and build your platform.
          </p>
        </div>

        {/* Author Cards Grid */}
        <div className="flex justify-center gap-8 mb-8 flex-wrap">
          {getCurrentCards().map((author) => (
            <div
              key={author.id}
              style={{
                background: 'white',
                borderColor: 'var(--border)',
                borderRadius: 'var(--radius)',
                boxShadow: 'var(--shadow-sm)'
              }}
              className="w-[320px] h-[460px] border overflow-hidden relative transition-all duration-300 hover:shadow-[var(--shadow)]"
            >
              {/* Top Section - Name Strip + Image */}
              <div className="flex h-[210px] relative">
                {/* Vertical Name Strip */}
                <div 
                  style={{ 
                    background: 'var(--text)',
                    borderRightColor: 'var(--border)'
                  }}
                  className="w-[72px] flex items-center justify-center border-r relative"
                >
                  <div 
                    style={{ 
                      writingMode: 'vertical-rl', 
                      transform: 'rotate(180deg)',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    <span style={{color: 'white'}} className="text-base font-black tracking-[0.15em]">
                      {author.name}
                    </span>
                  </div>
                </div>

                {/* Image Panel */}
                <div style={{background: 'var(--surface-2)', borderBottomColor: 'var(--border)'}} className="flex-1 relative border-b">
                  {/* Author Photo Placeholder */}
                  <div className="w-full h-full flex items-center justify-center">
                    <div>
                      <svg className="w-16 h-16 text-gray-400 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </svg>
                      <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider block text-center">
                        Author Photo
                      </span>
                    </div>
                  </div>

                  {/* Book Cover Badge Overlay */}
                  <div style={{background: 'white', borderColor: 'var(--border)'}} className="absolute top-3 right-3 w-[70px] h-[85px] border-2 rounded-lg flex items-center justify-center z-10">
                    <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Text Section */}
              <div className="px-6 py-6 relative h-[250px]">
                <p className="text-[14px] leading-6 text-center max-w-[240px] mx-auto text-gray-600 transition-colors duration-300 hover:text-[#EB6358] cursor-pointer">
                  {author.description}
                </p>

                {/* Author Profile Button - Bottom Right */}
                <button
                  onClick={() => window.location.href = author.profileHref}
                  className="absolute bottom-0 right-0 font-bold text-xs uppercase tracking-wide px-8 py-3 rounded-tl-[14px] border-t border-l transition-all duration-300 bg-[#1f2a44] hover:bg-[#EB6358] text-white border-gray-900"
                >
                  Author Profile
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Navigation */}
        <div className="flex justify-center items-center gap-4 mb-6">
          {/* Previous Button */}
          <button
            onClick={() => setCurrentPage(currentPage === 0 ? totalPages - 1 : currentPage - 1)}
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 bg-[#EB6358] hover:bg-[#1f2a44] text-white"
            aria-label="Previous page"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Carousel Dots */}
          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentPage(idx)}
                style={{
                  background: idx === currentPage ? 'var(--text)' : 'var(--border)',
                  width: idx === currentPage ? '40px' : '12px',
                  height: '12px'
                }}
                className="rounded-full transition-all duration-300 hover:opacity-80"
                aria-label={`View page ${idx + 1}`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={() => setCurrentPage((currentPage + 1) % totalPages)}
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 bg-[#EB6358] hover:bg-[#1f2a44] text-white"
            aria-label="Next page"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* View More Button */}
        <div className="flex justify-center">
          <button
            onClick={() => window.location.href = '/authors'}
            className="text-base uppercase tracking-wide px-10 py-4 bg-[#1f2a44] hover:bg-[#EB6358] text-white rounded-lg font-bold transition-all duration-300 border-2 border-black"
          >
            View More
          </button>
        </div>
      </div>
    </section>
  );
};

export default PublishedAuthors;
