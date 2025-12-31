"use client";

import { useEffect, useMemo, useRef, useState } from "react";

function useInViewDisappear(options = { threshold: 0.18, rootMargin: "0px 0px -10% 0px" }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Fallback
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        // ✅ appear + disappear
        setInView(entry.isIntersecting);
      },
      options
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [options]);

  return { ref, inView };
}

export default function AudiobookJourney() {
  const steps = useMemo(
    () => [
      {
        title: "Manuscript Review & Planning",
        description:
          "We review length, genre, tone, and distribution goals, then map your full production plan (timeline + deliverables).",
        details: [
          "Estimated finished hours + timeline",
          "Narration style recommendations",
          "Platform requirements check (ACX/Audible-ready)"
        ]
      },
      {
        title: "Voice Selection or Author Narration",
        description:
          "Choose pro voice talent or narrate yourself. If you narrate, we provide direction to keep pacing natural and consistent.",
        details: ["Voice match options", "Coaching for author narration", "Tone + pacing alignment"]
      },
      {
        title: "Studio Recording",
        description:
          "Recording is handled with clean capture standards to avoid hiss, pops, and inconsistent volume across chapters.",
        details: ["Session scheduling", "Audio capture quality control", "Chapter-by-chapter tracking"]
      },
      {
        title: "Editing & Audio Mastering",
        description:
          "We edit mistakes, remove noise, and master audio to meet common platform technical standards.",
        details: ["Noise cleanup", "Leveling + mastering", "Consistency across chapters"]
      },
      {
        title: "Quality Control & Proof Listening",
        description:
          "Every chapter is reviewed for pacing, clarity, and accuracy to ensure your audiobook matches your manuscript.",
        details: ["Proof listening pass", "Pronunciation fixes", "Final corrections before delivery"]
      },
      {
        title: "Final Delivery & Platform Readiness",
        description:
          "You receive final mastered files organized and ready for upload and distribution.",
        details: ["Exported chapter files", "Delivery checklist", "Upload-ready structure"]
      }
    ],
    []
  );

  const { ref, inView } = useInViewDisappear();
  const [activeIndex, setActiveIndex] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState(null);

  // Reset expanded state when section disappears (keeps it clean + re-interactive)
  useEffect(() => {
    if (!inView) setExpandedIndex(null);
  }, [inView]);

  const openStep = (idx) => {
    setActiveIndex(idx);
    setExpandedIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section ref={ref} className="bg-white px-2 md:px-0 py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div
          className={[
            "text-center transition-all duration-700 ease-out",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          ].join(" ")}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1F2A44] mb-4 font-vidaloka">
            Our Audiobook Production Process
          </h2>

          <p className="text-[#1F2A44] text-base md:text-lg font-medium max-w-3xl mx-auto mb-12">
            A guided step-by-step workflow that turns your manuscript into a studio-quality audiobook—clean,
            consistent, and ready for distribution.
          </p>
        </div>

        {/* Interactive Progress Rail */}
        <div
          className={[
            "mx-auto max-w-4xl mb-10 transition-all duration-700 ease-out",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          ].join(" ")}
          style={{ transitionDelay: "100ms" }}
        >
          <div className="relative">
            {/* Rail */}
            <div className="h-[10px] rounded-full bg-[#1F2A44]/10 overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[#EB6358] to-[#EB6358] transition-all duration-500"
                style={{ width: `${((activeIndex + 1) / steps.length) * 100}%` }}
              />
            </div>

            {/* Dots */}
            <div className="mt-4 flex items-center justify-between gap-2">
              {steps.map((_, idx) => {
                const isActive = idx === activeIndex;
                const isDone = idx < activeIndex;

                return (
                  <button
                    key={idx}
                    onClick={() => openStep(idx)}
                    className={[
                      "relative flex items-center justify-center",
                      "w-10 h-10 md:w-11 md:h-11 rounded-full",
                      "transition-all duration-200",
                      isActive
                        ? "bg-[#1F2A44] text-white scale-110 shadow-lg"
                        : isDone
                        ? "bg-[#EB6358] text-white"
                        : "bg-white border border-[#1F2A44]/25 text-[#1F2A44] hover:border-[#EB6358]"
                    ].join(" ")}
                    aria-label={`Go to step ${idx + 1}`}
                    type="button"
                  >
                    <span className="text-sm font-extrabold">{idx + 1}</span>
                    {isActive && (
                      <span className="absolute -bottom-7 text-[11px] md:text-xs font-bold text-[#1F2A44] whitespace-nowrap">
                        Active
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div
          className={[
            "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
            "transition-all duration-700 ease-out"
          ].join(" ")}
          style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(24px)" }}
        >
          {steps.map((step, index) => {
            const isActive = index === activeIndex;
            const isExpanded = expandedIndex === index;

            return (
              <button
                key={index}
                type="button"
                onClick={() => openStep(index)}
                onMouseEnter={() => setActiveIndex(index)}
                className={[
                  "text-left rounded-2xl p-6 border",
                  "transition-all duration-200",
                  "focus:outline-none focus:ring-2 focus:ring-[#EB6358]/40",
                  isActive
                    ? "border-[#EB6358]/60 shadow-md bg-gradient-to-br from-white via-[#FFF7F5] to-white"
                    : "border-[#1F2A44]/15 shadow-sm bg-white hover:shadow-md hover:border-[#1F2A44]/25"
                ].join(" ")}
              >
                {/* Top Row */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-sm font-bold text-[#EB6358] block mb-2">
                      Step {index + 1}
                    </span>

                    <h3 className="text-xl font-bold text-[#1F2A44] mb-2 font-vidaloka leading-snug">
                      {step.title}
                    </h3>
                  </div>

                  {/* Toggle icon */}
                  <div
                    className={[
                      "w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0",
                      "transition-all duration-200",
                      isExpanded ? "bg-[#1F2A44] text-white" : "bg-[#1F2A44]/10 text-[#1F2A44]"
                    ].join(" ")}
                    aria-hidden="true"
                  >
                    <span className="text-xl font-black">{isExpanded ? "–" : "+"}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-[#1F2A44] text-sm leading-relaxed font-sans">
                  {step.description}
                </p>

                {/* Expandable details */}
                <div
                  className={[
                    "grid transition-all duration-300 ease-in-out",
                    isExpanded ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0 mt-0"
                  ].join(" ")}
                >
                  <div className="overflow-hidden">
                    <div className="rounded-xl border border-[#1F2A44]/10 bg-[#F6F7F9] p-4">
                      <p className="text-xs font-bold text-[#1F2A44] mb-2 uppercase tracking-wide">
                        Deliverables included
                      </p>

                      <ul className="space-y-2">
                        {step.details.map((d, i) => (
                          <li key={i} className="text-sm text-[#1F2A44] flex gap-2 items-start">
                            <span className="mt-[6px] w-2 h-2 rounded-full bg-[#EB6358] flex-shrink-0" />
                            <span className="leading-relaxed">{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-xs font-semibold text-[#1F2A44]/70">
                        Tap to collapse / expand
                      </span>
                      <span className="text-xs font-bold text-[#EB6358]">
                        {isActive ? "Currently highlighted" : "Hover to highlight"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Micro interaction footer */}
                <div className="mt-5 flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#1F2A44]/70">
                    Smooth. Clear. Platform-ready.
                  </span>

                  <span
                    className={[
                      "text-xs font-bold px-3 py-1 rounded-full",
                      isActive ? "bg-[#EB6358] text-white" : "bg-[#1F2A44]/10 text-[#1F2A44]"
                    ].join(" ")}
                  >
                    {isActive ? "Active" : "Preview"}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Mobile Note */}
        <div
          className={[
            "mt-10 text-center transition-all duration-700 ease-out",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          ].join(" ")}
          style={{ transitionDelay: "140ms" }}
        >
          <p className="text-sm text-[#1F2A44]/70 font-sans">
            Tip: Tap a step to expand deliverables. On desktop, hover switches the highlighted step instantly.
          </p>
        </div>
      </div>
    </section>
  );
}
