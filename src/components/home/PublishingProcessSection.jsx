"use client"
import { useEffect, useRef, useState } from "react";
import { Feather, BookOpenCheck, Sparkles, PenLine } from "lucide-react";

export default function PublishingProcessSection() {
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

  const cards = [
    {
      id: 1,
      color: "bg-[#DDEFE6]",
      iconColor: "#8FBFA9",
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 100 100" fill="none" style={{color: '#8FBFA9'}}>
          <circle cx="30" cy="30" r="15" stroke="currentColor" strokeWidth="3" fill="white"/>
          <path d="M 22 30 L 28 36 L 38 26" stroke="currentColor" strokeWidth="3" fill="none"/>
          <circle cx="70" cy="30" r="15" stroke="currentColor" strokeWidth="3" fill="white"/>
          <path d="M 62 30 L 68 36 L 78 26" stroke="currentColor" strokeWidth="3" fill="none"/>
          <circle cx="30" cy="70" r="15" stroke="currentColor" strokeWidth="3" fill="white"/>
          <path d="M 22 70 L 28 76 L 38 66" stroke="currentColor" strokeWidth="3" fill="none"/>
          <circle cx="70" cy="70" r="15" stroke="currentColor" strokeWidth="3" fill="white"/>
          <circle cx="75" cy="25" r="8" fill="currentColor"/>
          <path d="M 71 21 L 73 23 L 79 17" stroke="white" strokeWidth="2" fill="none"/>
        </svg>
      ),
      title: "GUIDANCE YOU CAN TRUST",
      description: "Every author works with a dedicated literary agent and publishing team who provide clear direction from submission to publication."
    },
    {
      id: 2,
      color: "bg-[#E3ECF7]",
      iconColor: "#7A94B8",
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 100 100" fill="none" style={{color: '#7A94B8'}}>
          <path d="M 50 20 L 70 40 L 50 90 L 30 40 Z" stroke="currentColor" strokeWidth="3" fill="white"/>
          <path d="M 42 55 L 48 61 L 62 47" stroke="currentColor" strokeWidth="3" fill="none"/>
          <circle cx="75" cy="25" r="8" fill="currentColor"/>
          <path d="M 71 21 L 73 23 L 79 17" stroke="white" strokeWidth="2" fill="none"/>
        </svg>
      ),
      title: "SUPPORT AT EVERY STAGE",
      description: "From first review to final release, Franklin's team ensures you're never alone in the process — every step is transparent, focused, and collaborative."
    },
    {
      id: 3,
      color: "bg-[#F2E8DA]",
      iconColor: "#B89C7D",
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 100 100" fill="none" style={{color: '#B89C7D'}}>
          <ellipse cx="50" cy="50" rx="30" ry="20" stroke="currentColor" strokeWidth="3" fill="white"/>
          <path d="M 40 45 Q 50 55 60 45" stroke="currentColor" strokeWidth="3" fill="none"/>
          <circle cx="75" cy="25" r="8" fill="currentColor"/>
          <path d="M 71 21 L 73 23 L 79 17" stroke="white" strokeWidth="2" fill="none"/>
        </svg>
      ),
      title: "YOUR STORY, OUR PRIORITY",
      description: "We listen, advise, and champion your vision so your book reaches its full potential without losing the voice that makes it yours."
    },
    {
      id: 4,
      color: "bg-[#ECEAF5]",
      iconColor: "#8B88B8",
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 100 100" fill="none" style={{color: '#8B88B8'}}>
          <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="3" fill="white"/>
          <path d="M 40 50 L 50 60 L 70 40" stroke="currentColor" strokeWidth="3" fill="none"/>
          <polygon points="50,25 55,35 65,37 57,45 59,55 50,50 41,55 43,45 35,37 45,35" fill="currentColor"/>
          <circle cx="75" cy="25" r="8" fill="currentColor"/>
          <path d="M 71 21 L 73 23 L 79 17" stroke="white" strokeWidth="2" fill="none"/>
        </svg>
      ),
      title: "A SEAMLESS JOURNEY FORWARD",
      description: "Our structured publishing process keeps everything organized and on track, giving you confidence and clarity from start to finish."
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-white via-[#F8F9FB] to-[#F0F3F7] relative overflow-hidden"
    >
      {/* Decorative icons on sides */}
      <div 
        className={`absolute left-8 top-1/2 -translate-y-1/2 transition-all duration-1000 ${
          isVisible ? 'opacity-50 translate-x-0' : 'opacity-0 -translate-x-10'
        } hover:opacity-100 cursor-pointer group`}
      >
        {/* Animated Writing Feather with Effects */}
        <div className="relative w-32 h-32 flex items-center justify-center">
          {/* Main Feather Icon */}
          <Feather 
            className="w-20 h-20 text-primary group-hover:animate-pen-write transform rotate-[-45deg] transition-all duration-500 group-hover:text-orange-500" 
            strokeWidth={1.5}
          />
          {/* Sparkle 1 */}
          <Sparkles 
            className="absolute top-0 right-2 w-5 h-5 text-yellow-400 opacity-0 group-hover:opacity-100 group-hover:animate-sparkle-1 transition-all duration-300"
            strokeWidth={2}
          />
          {/* Sparkle 2 */}
          <Sparkles 
            className="absolute bottom-2 left-0 w-4 h-4 text-pink-400 opacity-0 group-hover:opacity-100 group-hover:animate-sparkle-2 transition-all duration-300 delay-100"
            strokeWidth={2}
          />
          {/* Writing trail line */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 opacity-0 group-hover:opacity-100 transition-all duration-500">
            <div className="w-full h-full bg-gradient-to-r from-transparent via-primary to-transparent rounded-full animate-draw-line"></div>
          </div>
        </div>
      </div>
      <div 
        className={`absolute right-8 top-1/2 -translate-y-1/2 transition-all duration-1000 ${
          isVisible ? 'opacity-50 translate-x-0' : 'opacity-0 translate-x-10'
        } hover:opacity-100 cursor-pointer group`}
      >
        {/* Animated Book Opening with Effects */}
        <div className="relative w-32 h-32 flex items-center justify-center">
          {/* Main Book Icon */}
          <BookOpenCheck 
            className="w-20 h-20 text-primary group-hover:animate-book-bounce transition-all duration-500 group-hover:text-green-500 group-hover:scale-110" 
            strokeWidth={1.5}
          />
          {/* Floating Page 1 */}
          <PenLine 
            className="absolute -top-2 left-4 w-8 h-8 text-purple-400 opacity-0 group-hover:opacity-100 group-hover:animate-float-page-1 transition-all duration-500"
            strokeWidth={2}
          />
          {/* Floating Page 2 */}
          <PenLine 
            className="absolute -top-1 right-4 w-7 h-7 text-blue-400 opacity-0 group-hover:opacity-100 group-hover:animate-float-page-2 transition-all duration-500 delay-100"
            strokeWidth={2}
          />
          {/* Sparkle Effects */}
          <Sparkles 
            className="absolute -bottom-2 right-1 w-5 h-5 text-green-400 opacity-0 group-hover:opacity-100 group-hover:animate-sparkle-1 transition-all duration-300 delay-200"
            strokeWidth={2}
          />
          <Sparkles 
            className="absolute -bottom-1 left-2 w-4 h-4 text-yellow-400 opacity-0 group-hover:opacity-100 group-hover:animate-sparkle-2 transition-all duration-300 delay-150"
            strokeWidth={2}
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <div
              key={card.id}
              className={`transition-all duration-1000 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
              }`}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
            >
              {/* Card */}
              <div className={`relative ${card.color} border-5 border-gray-900 rounded-3xl overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer group`}>
                {/* Colored top section with icon and title */}
                <div className="p-8 pb-6 flex flex-col items-center justify-center min-h-[280px]">
                  {/* Icon */}
                  <div className="mb-4 text-[#1F2A44] transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    {card.icon}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-extrabold text-[#1F2A44] text-center leading-tight">
                    {card.title}
                  </h3>
                </div>

                {/* White bottom section with description */}
                <div className="bg-white border-t-4 border-gray-900 p-6">
                  <p className="text-sm text-[#1F2A44] text-center leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* Small badge circle in top right corner */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <svg className="w-5 h-5 text-white" viewBox="0 0 20 20" fill="nont-12 me">
                    <path d="M 4 10 L 8 14 L 16 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Buttons - Outside of cards container */}
      <div 
        className={`flex flex-col sm:flex-row items-center justify-center gap-4 mt-16 mb-12 transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
        }`}
        style={{ transitionDelay: '800ms' }}
      >
        <button className="px-10 py-4 bg-[#1f2a44] hover:bg-[#EB6358] border-4 border-gray-900 rounded-2xl text-xl font-extrabold text-white transform hover:scale-105 hover:shadow-xl transition-all duration-300">
          Connect with a Literary Agent!
        </button>
        <button className="px-10 py-4 bg-[#EB6358] hover:bg-[#1f2a44] border-4 border-gray-900 rounded-2xl text-xl font-extrabold text-white transform hover:scale-105 hover:shadow-xl transition-all duration-300">
          Submit Your Manuscript
        </button>
      </div>
    </section>
  );
}
