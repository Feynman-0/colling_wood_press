'use client';
import React, { useState, useEffect } from 'react';
import { PenTool } from 'lucide-react';

const authorsData = [
  {
    id: 1,
    name: "AL PERRY",
    bio: "For over thirty years, Al Perry has dedicated his life to guiding others toward healing and self-realization. As a Qigong teacher, energy practitioner, and spiritual mentor, he reveals the deep harmony between body, mind, and spirit. His approach blends Eastern energetics with modern emotional intelligence, empowering individuals to awaken their inner wisdom and restore balance.",
    profileHref: "/authors/al-perry"
  },
  {
    id: 2,
    name: "ERIC ADAMS",
    bio: "Born in Pennsylvania, Eric Adams is a storyteller, craftsman, and dreamer whose imagination reaches beyond the visible world. With roots in construction and design, his path to authorship reflects persistence and proof that creativity can flourish anywhere. Guided by a lifelong fascination with theology, myth, and mystery, Eric spent over a decade shaping Torment of the Divine.",
    profileHref: "/authors/eric-adams"
  },
  {
    id: 3,
    name: "SARAH CHEN",
    bio: "Sarah Chen is an acclaimed novelist known for her vivid storytelling and deep character development. With a background in psychology and creative writing, she weaves narratives that explore the human condition with empathy and insight. Her debut novel captivated readers worldwide and established her as a distinctive voice in contemporary fiction.",
    profileHref: "/authors/sarah-chen"
  }
];

const AuthorsSpotlight = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState('opacity-100');

  // Auto-play carousel every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleSlideChange((currentIndex + 1) % authorsData.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleSlideChange = (newIndex) => {
    setFadeClass('opacity-0');
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setFadeClass('opacity-100');
    }, 300);
  };

  const handleDotClick = (idx) => {
    if (idx !== currentIndex) {
      handleSlideChange(idx);
    }
  };

  return (
    <section style={{background: 'var(--bg)'}} className="w-full py-16 px-4">
      {/* Heading - OUTSIDE Container */}
      <div className="text-center mb-12">
        {/* Pen Icon */}
        <div className="flex justify-center mb-4">
          <PenTool 
            className="w-16 h-16 text-[#1f2a44] hover:text-[#EB6358] transition-all duration-300 cursor-pointer hover:scale-110 hover:rotate-12"
            strokeWidth={1.5}
          />
        </div>
        <h2 className="text-4xl md:text-5xl font-black mb-3 inline-block transition-colors duration-300 text-gray-900 hover:text-[#EB6358] cursor-pointer">
          Author&apos;s Spotlight
        </h2>
        <div style={{background: 'var(--border)'}} className="w-full max-w-md mx-auto h-[1px] mb-5 mt-3"></div>
        <p className="text-base md:text-lg max-w-3xl mx-auto leading-relaxed transition-colors duration-300 text-gray-600 hover:text-[#EB6358] cursor-pointer">
          Each month, we shine a light on one of our remarkable authors. Dive into their creative process, 
          learn about their journey to publication, and get a glimpse into the world they&apos;ve crafted.
        </p>
      </div>

      {/* Main Container */}
      <div className="max-w-6xl mx-auto">
        {/* Outer Frame */}
        <div style={{
          background: 'white',
          borderColor: 'var(--border)',
          boxShadow: 'var(--shadow-sm)',
          borderRadius: 'var(--radius)'
        }} className="border p-5 md:p-7">
          {/* Spotlight Card - Desktop Grid Layout */}
          <div style={{borderRadius: 'var(--radius)'}} className="hidden md:grid grid-cols-[90px_320px_320px_1fr] min-h-[380px] overflow-hidden">
            {/* A) Vertical Name Strip */}
            <div style={{
              background: 'var(--text)',
              borderRightColor: 'var(--border)',
              borderRadius: 'var(--radius) 0 0 var(--radius)'
            }} className="border-r flex items-center justify-center relative overflow-visible">
              <div 
                className={`transition-opacity duration-300 ${fadeClass}`}
                style={{ 
                  writingMode: 'vertical-rl', 
                  transform: 'rotate(180deg)',
                  whiteSpace: 'nowrap',
                  color: 'white'
                }}
              >
                <span className="text-2xl font-black tracking-[0.25em] inline-block">
                  {authorsData[currentIndex].name}
                </span>
              </div>
            </div>

            {/* B) Author Image Placeholder */}
            <div style={{
              background: 'var(--surface)',
              borderRightColor: 'var(--border)'
            }} className="border-r flex flex-col items-center justify-center">
              <div className={`transition-opacity duration-300 ${fadeClass}`}>
                <svg style={{color: 'var(--text-muted)'}} className="w-16 h-16 mb-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
                <span style={{color: 'var(--text-muted)'}} className="text-xs font-semibold uppercase tracking-wider">Author Image</span>
              </div>
            </div>

            {/* C) Book Cover Placeholder */}
            <div style={{
              background: 'var(--surface)',
              borderRightColor: 'var(--border)'
            }} className="border-r flex flex-col items-center justify-center">
              <div className={`transition-opacity duration-300 ${fadeClass}`}>
                <svg style={{color: 'var(--text-muted)'}} className="w-16 h-16 mb-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"/>
                </svg>
                <span style={{color: 'var(--text-muted)'}} className="text-xs font-semibold uppercase tracking-wider">Book Cover</span>
              </div>
            </div>

            {/* D) Text Block + Button */}
            <div className="bg-gradient-to-br from-white via-[#FAFBFC] to-[#F6F7F9] relative px-6 py-5 flex flex-col items-center justify-center text-center">
              <div className={`transition-opacity duration-300 ${fadeClass}`}>
                <p className="text-sm md:text-[15px] leading-6 line-clamp-[8] mb-2 transition-colors duration-300 text-gray-600 hover:text-[#EB6358] cursor-pointer">
                  {authorsData[currentIndex].bio}
                </p>
              </div>
              
              <button 
                onClick={() => window.location.href = authorsData[currentIndex].profileHref}
                className="absolute bottom-4 right-4 bg-[#1f2a44] hover:bg-[#EB6358] text-white px-6 py-3 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 border-2 border-black"
              >
                Author Profile
              </button>
            </div>
          </div>

          {/* Mobile Layout */}
          <div style={{borderRadius: 'var(--radius)'}} className="md:hidden flex flex-col overflow-hidden min-h-[500px]">
            {/* Name Strip - Horizontal on mobile */}
            <div style={{
              background: 'var(--text)',
              borderBottomColor: 'var(--border)'
            }} className="border-b py-4 flex items-center justify-center">
              <span style={{color: 'white'}} className={`text-2xl font-black tracking-widest transition-opacity duration-300 ${fadeClass}`}>
                {authorsData[currentIndex].name}
              </span>
            </div>

            {/* Images Row */}
            <div style={{borderBottomColor: 'var(--border)'}} className="grid grid-cols-2 border-b">
              <div style={{
                background: 'var(--surface)',
                borderRightColor: 'var(--border)'
              }} className="border-r h-40 flex flex-col items-center justify-center">
                <div className={`transition-opacity duration-300 ${fadeClass}`}>
                  <svg style={{color: 'var(--text-muted)'}} className="w-12 h-12 mb-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                  <span style={{color: 'var(--text-muted)'}} className="text-xs font-semibold">Author</span>
                </div>
              </div>
              <div style={{background: 'var(--surface)'}} className="h-40 flex flex-col items-center justify-center">
                <div className={`transition-opacity duration-300 ${fadeClass}`}>
                  <svg style={{color: 'var(--text-muted)'}} className="w-12 h-12 mb-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"/>
                  </svg>
                  <span style={{color: 'var(--text-muted)'}} className="text-xs font-semibold">Book</span>
                </div>
              </div>
            </div>

            {/* Text Block */}
            <div className="bg-gradient-to-br from-white via-[#FAFBFC] to-[#F6F7F9] p-5 relative flex-1 flex flex-col justify-between">
              <div className={`transition-opacity duration-300 ${fadeClass}`}>
                <p className="text-sm leading-6 text-center mb-16 transition-colors duration-300 text-gray-600 hover:text-[#EB6358] cursor-pointer">
                  {authorsData[currentIndex].bio}
                </p>
              </div>
              <button 
                onClick={() => window.location.href = authorsData[currentIndex].profileHref}
                className="bg-[#1f2a44] hover:bg-[#EB6358] text-white px-6 py-3 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 w-full border-2 border-black"
              >
                Author Profile
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Dots */}
        <div className="flex justify-center items-center gap-2 mt-6">
          {authorsData.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleDotClick(idx)}
              style={{
                background: idx === currentIndex ? 'var(--accent)' : 'var(--border)',
                width: idx === currentIndex ? '40px' : '12px',
                height: '12px'
              }}
              className="rounded-full transition-all duration-300"
              aria-label={`View author ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AuthorsSpotlight;
