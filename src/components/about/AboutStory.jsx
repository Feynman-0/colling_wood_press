"use client";
import { useRef, useEffect } from "react";

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

export default function AboutStory() {
  const ref = useRef(null);
  useScrollReveal(ref);
  return (
    <section
      ref={ref}
      className="opacity-0 translate-y-8 transition-all duration-700 ease-out py-20 md:py-32 w-full"
    >
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F2A44] mb-4">Our Story</h2>
          <p className="text-[#415a77] text-lg mb-6">
            Founded on a love for books and a belief in the power of stories, we guide authors from first draft to published masterpiece. Our philosophy is simple: every story matters, and every author deserves a partner who cares.
          </p>
          <p className="text-[#415a77] text-base">
            We blend tradition with innovation, offering expert editing, design, and marketing—so your book stands out in a crowded world.
          </p>
        </div>
        <div className="bg-white rounded-3xl shadow-lg border border-[#e8edf2] p-8 text-center">
          <span className="inline-block text-5xl text-[#eb6358] mb-4">&#10024;</span>
          <p className="text-[#1F2A44] font-semibold text-lg">
            "We believe every voice can change the world."
          </p>
        </div>
      </div>
    </section>
  );
}
