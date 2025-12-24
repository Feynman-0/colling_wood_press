"use client"
import { useEffect, useRef, useState } from "react";

export default function ClaritySection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.4
      }
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

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-br from-[#FAFBFC] via-white to-[#F6F7F9] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="relative flex items-center justify-center">
          {/* Pen Icon - Positioned absolutely outside left */}
          <div 
            className={`absolute left-0 top-1/2 -translate-y-1/2 transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-32'
            }`}
          >
            <div className="w-32 h-32 lg:w-40 lg:h-40 group cursor-pointer transform -rotate-12 hover:rotate-0 hover:scale-110 transition-all duration-500">
              <svg className="w-full h-full text-gray-900 hover:text-[#EB6358] transition-colors duration-500" viewBox="0 0 200 280" fill="currentColor">
                <path d="M 40 20 L 160 20 L 160 140 L 100 200 L 40 140 Z" />
                <circle cx="100" cy="100" r="20" fill="white" />
                <path d="M 100 200 L 120 240 L 80 240 Z" />
              </svg>
            </div>
          </div>

          {/* Center Content */}
          <div className="text-center max-w-5xl mx-auto px-20">
            {/* Headings */}
            <div 
              className={`mb-8 transition-all duration-1000 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              <h2 className="text-5xl lg:text-6xl font-extrabold text-gray-900 mb-3 hover:scale-105 hover:text-[#EB6358] transition-all duration-300 cursor-default whitespace-nowrap">
                Forget the Maze, Choose Clarity
              </h2>
              <h3 className="text-4xl lg:text-5xl font-normal text-gray-900 mb-6 hover:scale-105 hover:text-[#EB6358] transition-all duration-300 cursor-default whitespace-nowrap">
                Publishing doesn't have to be complicated.
              </h3>
              
              {/* Styled interactive underline */}
              <div className="relative w-full h-1 mx-auto group cursor-pointer overflow-hidden">
                <div className="absolute inset-0 bg-gray-900 transition-all duration-500"></div>
                <div className="absolute inset-0 h-full w-20 bg-gradient-to-r from-[#EB6358] via-orange-400 to-[#EB6358] opacity-0 group-hover:opacity-100 blur-sm animate-slide-across"></div>
                <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-3 h-3 bg-gray-900 rounded-full group-hover:bg-[#EB6358] group-hover:scale-150 group-hover:animate-pulse transition-all duration-300"></div>
                <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-3 h-3 bg-gray-900 rounded-full group-hover:bg-[#EB6358] group-hover:scale-150 group-hover:animate-pulse transition-all duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
            </div>

            {/* Body Text */}
            <div 
              className={`space-y-3 mb-10 transition-all duration-1000 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              <p className="text-xl text-gray-700 hover:text-[#EB6358] hover:scale-105 transition-all duration-300 cursor-default whitespace-nowrap">
                Franklin streamlines the path from manuscript to masterpiece.
              </p>
              <p className="text-xl text-gray-700 hover:text-[#EB6358] hover:scale-105 transition-all duration-300 cursor-default whitespace-nowrap">
                We provide the craftsmanship of traditional publishing with the speed and creativity of the modern era.
              </p>
            </div>

            {/* CTA Button */}
            <div 
              className={`transition-all duration-1000 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
              }`}
              style={{ transitionDelay: '600ms' }}
            >
              <button className="px-12 py-4 bg-[#1f2a44] hover:bg-[#EB6358] border-4 border-gray-900 rounded-2xl text-2xl font-extrabold text-white transform hover:scale-110 hover:shadow-2xl transition-all duration-500 cursor-pointer whitespace-nowrap">
                Discover How We Publish with Purpose!
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
