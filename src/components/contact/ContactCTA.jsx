"use client";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";

function useScrollReveal(ref) {
  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const onScroll = ([entry]) => {
      if (entry.isIntersecting) {
        el.classList.add("opacity-100", "translate-y-0");
      }
    };
    const observer = new window.IntersectionObserver(onScroll, { threshold: 0.2 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref]);
}

export default function ContactCTA() {
  const ref = useRef(null);
  const [hovered, setHovered] = useState(false);
  useScrollReveal(ref);
  return (
    <section
      ref={ref}
      className="opacity-0 translate-y-8 transition-all duration-700 ease-out py-20 md:py-32 w-full bg-gradient-to-br from-[#f6f7f9] via-[#e8edf2] to-white"
    >
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center">
        <div
          className={`relative rounded-3xl border-4 border-[#eb6358] bg-white shadow-xl px-10 py-14 md:py-20 flex flex-col items-center transition-all duration-300 ${hovered ? "-translate-y-2 scale-105 shadow-2xl border-[#1F2A44]" : ""}`}
          style={{ boxShadow: hovered ? "0 12px 48px rgba(31,42,68,0.18)" : "0 6px 24px rgba(31,42,68,0.10)" }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F2A44] mb-4 text-center">
            Let’s make your publishing dream real.
          </h2>
          <p className="text-[#415a77] text-lg mb-8 text-center max-w-xl">
            Get a personalized quote or submit your manuscript—our team is ready to help you every step of the way.
          </p>
          <div className="flex gap-6 flex-col sm:flex-row">
            <Link
              href="/contact#form"
              className="relative z-10 inline-block px-8 py-4 rounded-full bg-[#eb6358] text-white font-bold text-lg shadow-lg hover:bg-[#1F2A44] hover:shadow-2xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#eb6358]/30"
            >
              Get a Quote
            </Link>
            <Link
              href="/contact#form"
              className="relative z-10 inline-block px-8 py-4 rounded-full bg-[#1F2A44] text-white font-bold text-lg shadow-lg hover:bg-[#eb6358] hover:shadow-2xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#1F2A44]/30"
            >
              Submit Manuscript
            </Link>
          </div>
          <span className="absolute -top-4 -left-4 w-16 h-16 border-4 border-[#e8edf2] rounded-3xl z-0" />
          <span className="absolute -bottom-4 -right-4 w-16 h-16 border-4 border-[#415a77] rounded-3xl z-0" />
        </div>
      </div>
    </section>
  );
}
