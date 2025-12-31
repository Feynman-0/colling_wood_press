"use client";
import Link from "next/link";
import { useRef, useEffect } from "react";

const methods = [
  {
    title: "General Inquiries",
    desc: "Questions about our services, process, or anything else? We’re here to help.",
    href: "/contact#form",
    label: "Contact Us",
  },
  {
    title: "Audiobook Quote",
    desc: "Get a personalized quote for your audiobook project—fast and easy.",
    href: "/contact#form",
    label: "Get a Quote",
  },
  {
    title: "Submit Manuscript",
    desc: "Ready to publish? Send us your manuscript and we’ll review it promptly.",
    href: "/contact#form",
    label: "Submit Manuscript",
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

export default function ContactMethods() {
  const ref = useRef(null);
  useScrollReveal(ref);
  return (
    <section ref={ref} className="opacity-0 translate-y-8 transition-all duration-700 ease-out py-20 md:py-32 w-full">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {methods.map((m) => (
            <div
              key={m.title}
              className="rounded-2xl bg-white shadow-md border border-[#e8edf2] p-8 flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#eb6358] group"
            >
              <h3 className="font-semibold text-lg text-[#1F2A44] mb-2">{m.title}</h3>
              <p className="text-[#415a77] text-base mb-6">{m.desc}</p>
              <Link href={m.href} className="inline-block px-6 py-2 rounded-full bg-[#eb6358] text-white font-bold shadow hover:bg-[#1F2A44] transition-all duration-300">
                {m.label}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
