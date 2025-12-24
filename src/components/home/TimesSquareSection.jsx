"use client"
import { useState, useRef, useEffect } from "react";

export default function TimesSquareSection() {
  const scrollContainerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Total 9 image cards that will rotate 3 at a time
  const allCards = [
    { id: 1, gradient: "from-blue-500 via-indigo-600 to-purple-600" },
    { id: 2, gradient: "from-pink-500 via-rose-600 to-red-600" },
    { id: 3, gradient: "from-yellow-500 via-orange-600 to-red-600" },
    { id: 4, gradient: "from-green-500 via-teal-600 to-cyan-600" },
    { id: 5, gradient: "from-purple-500 via-violet-600 to-indigo-600" },
    { id: 6, gradient: "from-cyan-500 via-blue-600 to-indigo-600" },
    { id: 7, gradient: "from-red-500 via-pink-600 to-purple-600" },
    { id: 8, gradient: "from-teal-500 via-emerald-600 to-green-600" },
    { id: 9, gradient: "from-indigo-500 via-blue-600 to-cyan-600" }
  ];

  // Auto-scroll effect - 3 cards at a time
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = prev + 3;
        return next >= allCards.length ? 0 : next;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused, allCards.length]);

  const scroll = (direction) => {
    if (direction === 'left') {
      setCurrentIndex((prev) => {
        const newIndex = prev - 3;
        return newIndex < 0 ? allCards.length - 3 : newIndex;
      });
    } else {
      setCurrentIndex((prev) => {
        const newIndex = prev + 3;
        return newIndex >= allCards.length ? 0 : newIndex;
      });
    }
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 3000);
  };

  // Get current 3 visible cards
  const visibleCards = allCards.slice(currentIndex, currentIndex + 3);

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }}></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-blue-400/10 rounded-full blur-2xl animate-bounce" style={{ animationDuration: '8s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
            Get seen on <span className="text-gray-900 hover:text-[#EB6358] transition-colors duration-300 cursor-pointer">Times Square</span>
          </h2>
          <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4 transition-colors duration-300 hover:text-[#EB6358] cursor-pointer">
            Bring Your Book & Brand to Broadway
          </h3>
          <div className="w-32 h-1 bg-gray-900 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 mb-2 transition-colors duration-300 hover:text-[#EB6358] cursor-pointer">From page to display</p>
          <p className="text-lg text-gray-600 transition-colors duration-300 hover:text-[#EB6358] cursor-pointer">Join our authors making their mark in Manhattan</p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-primary text-gray-900 hover:text-white p-3 rounded-full shadow-lg hover:shadow-2xl transform hover:scale-110 transition-all duration-300 -ml-4"
            aria-label="Scroll left"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Visible Cards Container - Shows 4 cards: 3 images + 1 video */}
          <div className="flex gap-4">
            {/* Scrolling container for 3 image cards */}
            <div className="flex-[3] overflow-hidden">
              <div 
                className="flex gap-4 transition-transform duration-700 ease-in-out"
                style={{ 
                  transform: `translateX(-${currentIndex * (100 / 3)}%)`
                }}
              >
                {allCards.map((card, index) => (
                  <div
                    key={card.id}
                    className="group cursor-pointer flex-shrink-0"
                    style={{ width: 'calc((100% - 2rem) / 3)' }}
                  >
                    <div className={`relative aspect-[4/5] bg-gradient-to-br ${card.gradient} rounded-xl border-3 border-gray-900 shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2`}>
                  {/* Animated overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Animated background effects */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-1/4 left-1/4 w-24 h-24 bg-white rounded-full blur-2xl animate-pulse"></div>
                    <div className="absolute bottom-1/3 right-1/3 w-32 h-32 bg-white rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                  </div>
                  
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 -left-full group-hover:left-full transition-all duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"></div>
                  
                  {/* Content placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center p-4">
                    <div className="text-center text-white transform group-hover:scale-110 transition-transform duration-300">
                      <div className="w-16 h-16 mx-auto mb-3 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/30 animate-spin-slow">
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <p className="text-sm font-bold drop-shadow-lg">Coming Soon</p>
                    </div>
                  </div>

                  {/* Decorative corner accents */}
                  <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-white/40 group-hover:border-white/60 transition-all duration-300 group-hover:scale-110"></div>
                  <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-white/40 group-hover:border-white/60 transition-all duration-300 group-hover:scale-110"></div>
                </div>
              </div>
            ))}
              </div>
            </div>

            {/* Video Card - Static (always visible) */}
            <div className="cursor-pointer flex-shrink-0 flex-1">
              <div className="relative aspect-[4/5] bg-black rounded-xl border-3 border-gray-900 shadow-lg overflow-hidden">
                {/* Animated video placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
                  {/* Animated scanning lines */}
                  <div className="absolute inset-0 opacity-30">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/20 to-transparent animate-scan"></div>
                  </div>

                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      {/* Pulsing rings */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 rounded-full border-2 border-primary/40 animate-ping"></div>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center" style={{ animationDelay: '0.5s' }}>
                        <div className="w-24 h-24 rounded-full border-2 border-primary/30 animate-ping"></div>
                      </div>
                      
                      {/* Play button */}
                      <div className="relative w-16 h-16 bg-primary hover:bg-primary/90 rounded-full flex items-center justify-center shadow-xl cursor-pointer transform hover:scale-110 transition-all duration-300">
                        <svg className="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Video text */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-sm font-bold mb-1 animate-pulse">Video Preview</p>
                    <p className="text-xs text-gray-400">Click to play</p>
                  </div>

                  {/* Corner decorations */}
                  <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-primary/60"></div>
                  <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-primary/60"></div>
                  <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-primary/60"></div>
                  <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-primary/60"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-primary text-gray-900 hover:text-white p-3 rounded-full shadow-lg hover:shadow-2xl transform hover:scale-110 transition-all duration-300 -mr-4"
            aria-label="Scroll right"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
