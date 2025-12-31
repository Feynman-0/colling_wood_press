"use client";
import { useRef, useEffect } from "react";

const values = [
  {
    title: "Integrity",
    desc: "We honor every story and treat every author with respect.",
    icon: (
      <svg className="w-8 h-8 text-[#eb6358]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M8 12l2 2 4-4" /></svg>
    ),
  },
  {
    title: "Creativity",
    desc: "We celebrate originality and nurture bold ideas.",
    icon: (
      <svg className="w-8 h-8 text-[#415a77]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2v20M2 12h20" /></svg>
    ),
  },
  {
    title: "Collaboration",
    desc: "We work side-by-side with authors at every step.",
    icon: (
      <svg className="w-8 h-8 text-[#1F2A44]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="8" cy="12" r="4" /><circle cx="16" cy="12" r="4" /><path d="M12 16v2" /></svg>
    ),
  },
  {
    title: "Excellence",
    desc: "We deliver quality in every detail, every time.",
    icon: (
      <svg className="w-8 h-8 text-[#e8edf2]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polygon points="12,2 15,8 22,9 17,14 18,21 12,18 6,21 7,14 2,9 9,8" /></svg>
    ),
  },
];

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

export default function AboutValues() {
  const ref = useRef(null);
  useScrollReveal(ref);
  return (
    <section ref={ref} className="opacity-0 translate-y-8 transition-all duration-700 ease-out py-20 md:py-32 w-full bg-[#f6f7f9]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1F2A44] mb-12 text-center">Our Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {values.map((v, i) => (
            <div
              key={v.title}
              className="rounded-2xl bg-white shadow-md border border-[#e8edf2] p-8 flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl group"
            >
              <span className="mb-4">{v.icon}</span>
              <h3 className="font-semibold text-lg text-[#1F2A44] mb-2">{v.title}</h3>
              <p className="text-[#415a77] text-base">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
