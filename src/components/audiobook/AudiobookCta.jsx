"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

/* ---------- appear + disappear on scroll ---------- */
function useInViewDisappear(options = { threshold: 0.18, rootMargin: "0px 0px -12% 0px" }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const obs = new IntersectionObserver(([entry]) => {
      setInView(entry.isIntersecting);
    }, options);

    obs.observe(el);
    return () => obs.disconnect();
  }, [options]);

  return { ref, inView };
}

/* ---------- magnetic button ---------- */
import React from "react";

const MagneticButton = React.forwardRef(function MagneticButton({ href, children, className }, ref) {
  const [xy, setXy] = useState({ x: 0, y: 0 });

  const onMove = (e) => {
    const el = ref?.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const dx = e.clientX - (r.left + r.width / 2);
    const dy = e.clientY - (r.top + r.height / 2);
    setXy({
      x: Math.max(-10, Math.min(10, dx * 0.08)),
      y: Math.max(-10, Math.min(10, dy * 0.08)),
    });
  };

  return (
    <Link
      href={href}
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => setXy({ x: 0, y: 0 })}
      className={className}
      style={{ transform: `translate(${xy.x}px, ${xy.y}px)` }}
    >
      {children}
    </Link>
  );
});

/* ---------- CTA SECTION ---------- */
export default function AudiobookCTA({
  kicker = "Ready to ship a platform-ready audiobook?",
  title = "Let’s turn your manuscript into something people can’t stop listening to.",
  subtitle = "Tell us your word count and narration preference. We’ll respond with a clear plan, timeline, and quote.",
  primary = { text: "Submit Your Manuscript", href: "/submit-manuscript" },
  secondary = { text: "Get Audiobook Quote", href: "/contact" },
}) {
  const { ref, inView } = useInViewDisappear();
  const cardRef = useRef(null);
  const [glow, setGlow] = useState({ x: 50, y: 50, a: 0 });

  const stats = useMemo(
    () => [
      { label: "Clean mastering", value: "Audible-ready" },
      { label: "Structure", value: "Chapter exports" },
      { label: "Quality", value: "QC checklist" },
    ],
    []
  );

  const onMouseMove = (e) => {
    const r = cardRef.current.getBoundingClientRect();
    setGlow({
      x: ((e.clientX - r.left) / r.width) * 100,
      y: ((e.clientY - r.top) / r.height) * 100,
      a: 1,
    });
  };

  return (
    <section ref={ref} className="px-2 md:px-0 py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div
          ref={cardRef}
          onMouseMove={onMouseMove}
          onMouseLeave={() => setGlow((p) => ({ ...p, a: 0 }))}
          className={`relative transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* glow */}
          <div
            className="absolute pointer-events-none"
            style={{
              left: `${glow.x}%`,
              top: `${glow.y}%`,
              width: 340,
              height: 340,
              transform: "translate(-50%, -50%)",
              background:
                "radial-gradient(circle, rgba(235,99,88,0.25), rgba(235,99,88,0.12), transparent 60%)",
              opacity: glow.a,
            }}
          />

          {/* ribbon */}
          <div className="relative z-10 w-fit mx-auto mb-[-16px] bg-[#1F2A44] border-2 border-black shadow-[4px_4px_0_#1F2A44] rounded-full px-4 py-2 text-xs font-black uppercase tracking-widest text-white">
            {kicker}
          </div>

          {/* blob */}
          <div className="relative z-0 bg-[#0B1B3B] border-2 border-black shadow-[10px_10px_0_#1F2A44] rounded-[42px] p-8 overflow-hidden">
            {/* rings */}
            <div className="absolute -top-24 -left-24 w-72 h-72 border-2 border-dashed border-white/20 rounded-full animate-[spin_20s_linear_infinite]" />
            <div className="absolute -bottom-32 -right-32 w-96 h-96 border-2 border-dashed border-white/20 rounded-full animate-[spin_28s_linear_infinite]" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* text */}
              <div className="lg:col-span-7">
                <h3 className="text-3xl md:text-4xl font-extrabold text-white font-vidaloka leading-tight">
                  {title}
                </h3>
                <p className="mt-4 text-base md:text-lg font-medium text-white/85 max-w-2xl">
                  {subtitle}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {stats.map((s, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/15 bg-white/10 text-white text-xs font-bold"
                    >
                      <span className="w-2 h-2 rounded-full bg-[#EB6358]" />
                      {s.label}: <span className="font-extrabold">{s.value}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA panel */}
              <div className="lg:col-span-5">
                <div className="bg-white/90 border border-white/20 rounded-2xl p-5 backdrop-blur shadow-lg">
                  <p className="text-xs font-extrabold uppercase text-[#1F2A44]/70">
                    Quick start
                  </p>
                  <p className="mt-1 text-sm text-[#1F2A44]/80">
                    Choose one — we’ll guide you from there.
                  </p>

                  <div className="mt-5 flex flex-col gap-3">
                    <MagneticButton
                      href={primary.href}
                      className="bg-[#0B1B3B] border-2 border-black shadow-[4px_4px_0_#1F2A44] text-white font-bold px-6 py-2 rounded-xl hover:bg-[#EB6358] transition-all text-center"
                    >
                      {primary.text}
                    </MagneticButton>

                    <MagneticButton
                      href={secondary.href}
                      className="bg-[#EB6358] border-2 border-black shadow-[4px_4px_0_#1F2A44] text-white font-bold px-6 py-2 rounded-xl hover:bg-[#0B1B3B] transition-all text-center"
                    >
                      {secondary.text}
                    </MagneticButton>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <style jsx global>{`
            @media (max-width: 768px) {
              .rounded-[42px] {
                border-radius: 28px;
                clip-path: none;
              }
            }
          `}</style>
        </div>
      </div>
    </section>
  );
}
