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

export default function ContactHero() {
  const ref = useRef(null);
  useScrollReveal(ref);
  return (
    <section
      ref={ref}
      className="opacity-0 translate-y-8 transition-all duration-700 ease-out bg-[#e8f6f6] py-20 md:py-32 w-full"
    >
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-[#1F2A44] mb-6 tracking-tight">
          Let’s talk about your book.
        </h1>
        <p className="text-lg md:text-xl text-[#415a77] mb-8 max-w-2xl mx-auto">
          We respond to every inquiry within 1 business day. Share your vision, questions, or manuscript—our team is ready to help.
        </p>
        <span className="inline-block h-1 w-24 rounded bg-[#eb6358] mb-2" />
      </div>
    </section>
  );
}
