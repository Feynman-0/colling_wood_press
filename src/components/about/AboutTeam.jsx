"use client";
import { useRef, useEffect } from "react";

const team = [
  {
    name: "Alex Morgan",
    role: "Founder & CEO",
    desc: "Visionary leader with a passion for storytelling and empowering authors.",
  },
  {
    name: "Jamie Lee",
    role: "Editorial Director",
    desc: "Guides every manuscript to its highest potential with care and expertise.",
  },
  {
    name: "Taylor Kim",
    role: "Design Lead",
    desc: "Creates beautiful, reader-friendly books that stand out on any shelf.",
  },
  {
    name: "Jordan Patel",
    role: "Marketing Strategist",
    desc: "Connects stories with audiences through creative, data-driven campaigns.",
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

export default function AboutTeam() {
  const ref = useRef(null);
  useScrollReveal(ref);
  return (
    <section ref={ref} className="opacity-0 translate-y-8 transition-all duration-700 ease-out py-20 md:py-32 w-full">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1F2A44] mb-12 text-center">Meet the Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {team.map((member) => (
            <div
              key={member.name}
              className="rounded-2xl bg-white shadow-md border border-[#e8edf2] p-8 flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl group"
            >
              <h3 className="font-semibold text-lg text-[#1F2A44] mb-1">{member.name}</h3>
              <span className="text-[#eb6358] font-medium mb-2">{member.role}</span>
              <p className="text-[#415a77] text-base">{member.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
