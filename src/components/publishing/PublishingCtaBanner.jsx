"use client";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";

export default function PublishingCtaBanner() {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={`w-full flex justify-center py-8 px-2 md:px-0 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      aria-label="Publishing CTA Banner"
    >
      <div className="w-full max-w-5xl bg-[#fd9783] rounded-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.10)] flex flex-col md:flex-row items-center overflow-hidden transition-all duration-500 hover:shadow-[0_12px_40px_0_rgba(0,0,0,0.16)] group">
        {/* Left: Text + CTA */}
        <div className="flex-1 px-6 py-8 md:py-12 flex flex-col justify-center items-start">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-black mb-2 animate-fade-in-up">
            Take the leap.
          </h2>
          <div className="w-32 sm:w-40 md:w-48 h-6 mb-3">
            <svg viewBox="0 0 200 24" width="100%" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 18 Q 60 6 100 14 Q 140 22 195 10" stroke="#232B38" strokeWidth="4" strokeLinecap="round" fill="none"/>
            </svg>
          </div>
          <div className="text-lg md:text-xl font-semibold text-black mb-1">
            Your story deserves to be <span className="font-extrabold">Published & Shared!</span>
          </div>
          <div className="text-base text-black/90 mb-5">
            Take the first step towards becoming a <span className="font-bold">Published Author</span> today!
          </div>
          <a
            href="/contact"
            className="inline-block px-6 py-3 rounded-lg border border-black bg-white text-[#0B1B3B] font-bold text-lg shadow-md transition-all duration-300 hover:bg-[#0B1B3B] hover:text-white hover:shadow-lg hover:-translate-y-0.5 active:scale-95 focus:outline-none focus:ring-2 focus:ring-black"
            style={{ transitionProperty: 'background, color, box-shadow, transform' }}
          >
            Connect with a <span className="font-extrabold">Literary Agent</span>
          </a>
        </div>
        {/* Right: Illustration */}
        <div className="flex-1 flex items-center justify-center py-6 md:py-0">
          <div className="transition-transform duration-300 group-hover:scale-105 group-hover:-translate-y-1">
            <Image
              src="/assets/images/TYPEWRITER.png"
              alt="Typewriter illustration"
              width={320}
              height={240}
              className="max-w-[260px] md:max-w-[320px] w-full h-auto object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
