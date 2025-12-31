"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

function useInViewDisappear(options = { threshold: 0.16, rootMargin: "0px 0px -10% 0px" }) {
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

export default function AudiobookPackages({
  title = "Audiobook Packages",
  subtitle = "Pick a level based on where you are right now. Final quotes depend on word count, finished hours, and complexity.",
  ctaPrimary = { text: "Get Audiobook Quote", href: "/contact" },
  ctaSecondary = { text: "Submit Your Manuscript", href: "/submit-manuscript" }
}) {
  const packages = useMemo(
    () => [
      {
        tag: "Starter",
        title: "Essential Production",
        bestFor: "Clean, professional audio production for ready manuscripts.",
        highlights: ["Editing", "Noise cleanup", "Mastering", "Chapter exports"],
        details: [
          "Audio editing (mistakes + pauses)",
          "Noise cleanup + leveling",
          "Mastering for clarity and consistency",
          "Organized chapter-by-chapter exports",
          "Delivery checklist included"
        ]
      },
      {
        tag: "Most Popular",
        badge: "Best Value",
        title: "Complete Audiobook",
        bestFor: "Full pipeline production with proof listening and tighter QC.",
        highlights: ["Editing + Mastering", "Proof listening", "QC pass", "Platform-ready delivery"],
        details: [
          "Everything in Essential Production",
          "Proof listening pass (accuracy + pacing)",
          "Tighter QC and consistency checks",
          "Revisions pass included (as needed)",
          "Upload-ready structure"
        ]
      },
      {
        tag: "Premium",
        title: "Full Support + Voice",
        bestFor: "End-to-end support with voice talent options and coaching.",
        highlights: ["Voice options", "Coaching", "Priority scheduling", "Full delivery support"],
        details: [
          "Voice talent matching (optional)",
          "Author narration coaching (optional)",
          "Priority scheduling + timeline control",
          "Full production + QC + delivery support",
          "Guidance for ACX / Audible workflow"
        ]
      }
    ],
    []
  );

  const { ref, inView } = useInViewDisappear();
  const [active, setActive] = useState(1);
  const [expanded, setExpanded] = useState(null);
  const [mode, setMode] = useState("One-time");

  useEffect(() => {
    if (!inView) setExpanded(null);
  }, [inView]);

  const toggleExpand = (i) => setExpanded((prev) => (prev === i ? null : i));

  return (
    <section ref={ref} className="bg-[#F6F7F9] px-2 md:px-0 py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div
          className={[
            "text-center transition-all duration-700 ease-out",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          ].join(" ")}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1F2A44] mb-4 font-vidaloka">
            {title}
          </h2>

          <p className="text-[#1F2A44] text-base md:text-lg font-medium max-w-3xl mx-auto">
            {subtitle}
          </p>

          {/* Toggle */}
          <div className="mt-8 flex items-center justify-center">
            <div className="inline-flex bg-white border border-[#1F2A44]/10 rounded-full p-1 shadow-sm">
              {["One-time", "Ongoing"].map((opt) => {
                const on = mode === opt;
                return (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setMode(opt)}
                    className={[
                      "px-4 py-2 rounded-full text-sm font-bold transition-all",
                      on ? "bg-[#1F2A44] text-white" : "text-[#1F2A44] hover:bg-[#EB6358]/10"
                    ].join(" ")}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
          </div>

          <p className="mt-3 text-xs text-[#1F2A44]/60 font-sans">
            Toggle is for presentation only — final pricing depends on finished hours.
          </p>
        </div>

        {/* BOOK CARDS */}
        <div
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-700 ease-out"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(24px)",
            transitionDelay: "110ms"
          }}
        >
          {packages.map((pkg, i) => {
            const isActive = i === active;
            const isExpanded = expanded === i;

            return (
              <article
                key={i}
                className={[
                  "book-card group relative",
                  "rounded-[26px] overflow-hidden",
                  "transition-all duration-200 select-none",
                  isActive ? "ring-2 ring-[#EB6358]/60" : "ring-1 ring-[#1F2A44]/10",
                ].join(" ")}
                onMouseEnter={() => setActive(i)}
              >
                {/* BEST VALUE BADGE */}
                {pkg.badge && (
                  <div className="absolute z-20 top-4 right-4">
                    <span className="inline-flex items-center gap-2 bg-[#EB6358] text-white text-xs font-extrabold px-3 py-1 rounded-full shadow">
                      {pkg.badge}
                      <span className="w-1.5 h-1.5 rounded-full bg-white/90" />
                    </span>
                  </div>
                )}

                {/* BOOK COVER */}
                <div
                  className={[
                    "relative z-10 bg-white",
                    "px-6 pt-6 pb-5",
                    "transition-all duration-200",
                    isActive ? "shadow-lg" : "shadow-sm"
                  ].join(" ")}
                >
                  {/* Spine strip */}
                  <div
                    className={[
                      "absolute left-0 top-0 bottom-0 w-[14px]",
                      isActive ? "bg-[#EB6358]" : "bg-[#1F2A44]"
                    ].join(" ")}
                  />

                  {/* Page edge texture */}
                  <div className="absolute right-0 top-0 bottom-0 w-[18px] page-edge" />

                  {/* Top row */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="pl-2">
                      <p className="text-xs font-bold text-[#EB6358] uppercase tracking-wide">
                        {pkg.tag} • {mode}
                      </p>
                      <h3 className="mt-2 text-xl font-extrabold text-[#1F2A44] font-vidaloka">
                        {pkg.title}
                      </h3>
                      <p className="mt-2 text-sm text-[#1F2A44]/80 font-sans">
                        <span className="font-bold text-[#1F2A44]">Best for:</span> {pkg.bestFor}
                      </p>
                    </div>

                    {/* Plus button */}
                    <button
                      type="button"
                      onClick={() => toggleExpand(i)}
                      className={[
                        "w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0",
                        "transition-all duration-200",
                        isExpanded ? "bg-[#1F2A44] text-white" : "bg-[#1F2A44]/10 text-[#1F2A44]",
                        "hover:scale-[1.03]"
                      ].join(" ")}
                      aria-label="Toggle package details"
                    >
                      <span className="text-xl font-black">{isExpanded ? "–" : "+"}</span>
                    </button>
                  </div>

                  {/* Highlights */}
                  <div className="mt-5 flex flex-wrap gap-2 pl-2">
                    {pkg.highlights.map((h, idx) => (
                      <span
                        key={idx}
                        className={[
                          "text-xs font-bold px-3 py-1 rounded-full border",
                          isActive
                            ? "border-[#EB6358]/30 bg-[#FFF3F0] text-[#1F2A44]"
                            : "border-[#1F2A44]/10 bg-[#F6F7F9] text-[#1F2A44]"
                        ].join(" ")}
                      >
                        {h}
                      </span>
                    ))}
                  </div>

                  {/* Selected pill */}
                  <div className="mt-5 flex items-center justify-between pl-2">
                    <span className="text-xs text-[#1F2A44]/60 font-sans">Tap “+” to open pages</span>
                    <span
                      className={[
                        "text-xs font-bold px-3 py-1 rounded-full",
                        isActive ? "bg-[#EB6358] text-white" : "bg-[#1F2A44]/10 text-[#1F2A44]"
                      ].join(" ")}
                    >
                      {isActive ? "Selected" : "Preview"}
                    </span>
                  </div>
                </div>

                {/* OPEN PAGES (EXPAND AREA) */}
                <div
                  className={[
                    "open-pages-wrapper relative z-0",
                    isExpanded ? "open" : ""
                  ].join(" ")}
                >
                  <div className="page-shadow" />

                  <div className="open-pages-inner">
                    <div className="open-pages-panel">
                      <p className="text-xs font-extrabold text-[#1F2A44] uppercase tracking-wide mb-3">
                        Included
                      </p>
                      <ul className="space-y-2">
                        {pkg.details.map((d, k) => (
                          <li key={k} className="text-sm text-[#1F2A44] flex gap-2 items-start">
                            <span className="mt-[6px] w-2 h-2 rounded-full bg-[#EB6358] flex-shrink-0" />
                            <span className="leading-relaxed">{d}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Buttons (ONLY changed hover color) */}
                      <div className="mt-6 flex flex-col gap-3">
                        <Link href={ctaSecondary.href} className="bg-[#0B1B3B] border-2 border-black shadow-[4px_4px_0_#1F2A44] text-white font-bold text-base px-6 py-2 rounded-xl transition-all duration-200 hover:bg-[#EB6358] hover:text-white w-full whitespace-nowrap text-center">
                          {ctaSecondary.text}
                        </Link>

                        <Link href={ctaPrimary.href} className="bg-[#EB6358] border-2 border-black shadow-[4px_4px_0_#1F2A44] text-white font-bold text-base px-6 py-2 rounded-xl transition-all duration-200 hover:bg-[#0B1B3B] hover:text-white w-full whitespace-nowrap text-center">
                          {ctaPrimary.text}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <style jsx global>{`
                  .book-card {
                    transform: translateY(0);
                  }
                  .book-card:hover {
                    transform: translateY(-4px);
                  }

                  .page-edge {
                    background: repeating-linear-gradient(
                      to bottom,
                      rgba(31, 42, 68, 0.08),
                      rgba(31, 42, 68, 0.08) 3px,
                      rgba(31, 42, 68, 0.02) 3px,
                      rgba(31, 42, 68, 0.02) 7px
                    );
                    opacity: 0.35;
                  }

                  .open-pages-wrapper {
                    max-height: 0px;
                    opacity: 0;
                    transform: translateY(-8px);
                    transition: max-height 420ms ease, opacity 320ms ease, transform 320ms ease;
                    overflow: hidden;
                    background: transparent;
                  }
                  .open-pages-wrapper.open {
                    max-height: 520px;
                    opacity: 1;
                    transform: translateY(0);
                  }

                  .open-pages-inner {
                    padding: 0 10px 12px 10px;
                  }

                  .open-pages-panel {
                    position: relative;
                    background: #ffffff;
                    border: 1px solid rgba(31, 42, 68, 0.12);
                    border-radius: 22px;
                    padding: 18px;
                    transform-origin: top left;
                    transform: rotateX(0deg);
                  }

                  .open-pages-wrapper.open .open-pages-panel {
                    animation: pageOpen 420ms ease both;
                  }

                  @keyframes pageOpen {
                    0% {
                      opacity: 0;
                      transform: perspective(900px) rotateX(-10deg) translateY(-6px);
                    }
                    100% {
                      opacity: 1;
                      transform: perspective(900px) rotateX(0deg) translateY(0);
                    }
                  }

                  .page-shadow {
                    height: 10px;
                    margin: 0 12px;
                    background: radial-gradient(closest-side, rgba(0,0,0,0.18), transparent);
                    opacity: 0.18;
                    transform: translateY(-6px);
                  }

                  @media (max-width: 768px) {
                    .book-card:hover {
                      transform: none;
                    }
                  
                `}</style>
              </article>
            );
          })}
        </div>

        {/* Bottom note */}
        <div
          className={[
            "mt-10 text-center transition-all duration-700 ease-out",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          ].join(" ")}
          style={{ transitionDelay: "150ms" }}
        >
          <p className="text-sm text-[#1F2A44]/70 font-sans">
            Want a custom plan? We can tailor narration style, pacing, and delivery to your genre.
          </p>
        </div>
      </div>
    </section>
  );
}
